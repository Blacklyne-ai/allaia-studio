/**
 * Hero 3D layer.
 *
 * A perspective point-terrain: a subdivided plane displaced in the vertex
 * shader, rendered as depth-faded points. Ink with terracotta strands, so it
 * belongs to the same monochrome system as the rest of the site.
 *
 * Loaded dynamically and only when it is worth it - never on reduced motion,
 * save-data, low core counts, or without WebGL. The 2D canvas underneath is a
 * complete hero on its own, so a failure here is invisible rather than fatal.
 */
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PlaneGeometry,
  ShaderMaterial,
  Points,
  BufferAttribute,
  Color,
  MathUtils,
} from 'three';

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  attribute float aRand;
  varying float vFade;
  varying float vRand;
  varying float vCrest;

  // Layered sines. Cheap, stable, and enough structure to read as terrain.
  float ridge(vec2 p, float t) {
    return sin(p.x * 0.30 + t * 0.32) * 0.62
         + sin(p.y * 0.24 - t * 0.26) * 0.54
         + sin((p.x + p.y) * 0.16 + t * 0.19) * 0.42
         + sin((p.x - p.y) * 0.11 - t * 0.14) * 0.30;
  }

  void main() {
    vec3 pos = position;
    float hgt = ridge(pos.xy, uTime);
    pos.z += hgt * uAmp;

    vCrest = smoothstep(0.55, 1.5, hgt);
    vRand = aRand;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    float dist = -mv.z;

    // Dissolve into the background rather than ending at a hard horizon.
    vFade = clamp(1.0 - (dist - 8.0) / 62.0, 0.0, 1.0);
    vFade *= smoothstep(0.0, 12.0, dist);

    gl_PointSize = clamp(150.0 / dist, 1.0, 4.2);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  precision mediump float;
  uniform vec3 uInk;
  uniform vec3 uClay;
  uniform float uOpacity;
  varying float vFade;
  varying float vRand;
  varying float vCrest;

  void main() {
    // Round the point sprite off, otherwise everything reads as a grid of squares.
    vec2 d = gl_PointCoord - vec2(0.5);
    float r = dot(d, d);
    if (r > 0.25) discard;
    float edge = smoothstep(0.25, 0.06, r);

    // Terracotta on a minority of points, biased toward the ridge crests.
    float clayMix = step(0.86, vRand) * 0.85 + vCrest * 0.25;
    vec3 col = mix(uInk, uClay, clamp(clayMix, 0.0, 1.0));

    float a = vFade * edge * uOpacity * (0.35 + vCrest * 0.65);
    if (a < 0.004) discard;
    gl_FragColor = vec4(col, a);
  }
`;

export function initHero3D(canvas, host) {
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
  } catch {
    return null;
  }
  if (!renderer) return null;

  const scene = new Scene();
  const camera = new PerspectiveCamera(52, 1, 0.1, 200);
  camera.position.set(0, 7.5, 26);
  camera.lookAt(0, 0, -14);

  const SEG = 168;
  const geo = new PlaneGeometry(150, 110, SEG, Math.round(SEG * 0.72));

  const n = geo.attributes.position.count;
  const rand = new Float32Array(n);
  for (let i = 0; i < n; i++) rand[i] = Math.random();
  geo.setAttribute('aRand', new BufferAttribute(rand, 1));

  const mat = new ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uAmp: { value: 1.55 },
      uOpacity: { value: 0 },
      uInk: { value: new Color('#1b1b1b') },
      uClay: { value: new Color('#b4532a') },
    },
  });

  const mesh = new Points(geo, mat);
  mesh.rotation.x = -Math.PI / 2; // plane becomes ground, local z becomes height
  mesh.position.z = -18;
  scene.add(mesh);

  const ptr = { x: 0, y: 0, tx: 0, ty: 0 };
  let raf = 0;
  let running = false;
  let disposed = false;
  let t = 0;
  let scrollP = 0;

  function size() {
    const r = host.getBoundingClientRect();
    const w = Math.max(1, r.width);
    const h = Math.max(1, r.height);
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  function tick(fadeRate) {
    t += 0.0075;
    mat.uniforms.uTime.value = t;
    mat.uniforms.uOpacity.value = MathUtils.lerp(mat.uniforms.uOpacity.value, 1, fadeRate);

    ptr.x += (ptr.tx - ptr.x) * 0.045;
    ptr.y += (ptr.ty - ptr.y) * 0.045;

    // Cursor parallax plus a scroll dolly, both gentle.
    camera.position.x = ptr.x * 5.5;
    camera.position.y = 7.5 - ptr.y * 2.4 + scrollP * 5.0;
    camera.lookAt(ptr.x * 1.6, -scrollP * 2.2, -14);

    renderer.render(scene, camera);
  }

  function frame() {
    if (disposed) return;
    tick(0.035);
    if (running) raf = requestAnimationFrame(frame);
  }

  function start() {
    if (disposed) return;
    cancelAnimationFrame(raf);
    running = true;
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(raf);
    raf = 0;
  }

  // --- wiring -------------------------------------------------------------
  size();
  // Render a composed frame immediately. rAF never fires in a background tab,
  // so without this the canvas would sit blank on top of the 2D layer.
  tick(1);
  start();

  let rt = 0;
  const onResize = () => {
    clearTimeout(rt);
    rt = setTimeout(size, 180);
  };
  addEventListener('resize', onResize, { passive: true });

  const onScroll = () => {
    scrollP = Math.min(1, Math.max(0, scrollY / (innerHeight || 1)));
  };
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });

  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const onMove = (e) => {
    const r = host.getBoundingClientRect();
    ptr.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
    ptr.ty = ((e.clientY - r.top) / r.height) * 2 - 1;
  };
  if (fine) host.addEventListener('pointermove', onMove, { passive: true });

  const onVis = () => (document.hidden ? stop() : start());
  document.addEventListener('visibilitychange', onVis);

  let io;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0.02 });
    io.observe(host);
  }

  // A lost context must not leave a frozen canvas sitting over the 2D layer.
  const onLost = (e) => {
    e.preventDefault();
    stop();
    host.classList.remove('has-gl');
  };
  canvas.addEventListener('webglcontextlost', onLost);

  return {
    destroy() {
      disposed = true;
      stop();
      removeEventListener('resize', onResize);
      removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVis);
      if (fine) host.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('webglcontextlost', onLost);
      io?.disconnect();
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    },
  };
}
