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
  Vector2,
  Vector3,
} from 'three';

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  // Pointer position in the plane's own coordinates, plus an eased strength so
  // the terrain settles rather than snapping when the cursor stops or leaves.
  uniform vec2 uPointer;
  uniform float uPointerAmp;
  // Click shockwave: seconds since the click, and where it landed.
  uniform float uRipple;
  uniform vec2 uRippleAt;
  attribute float aRand;
  varying float vFade;
  varying float vRand;
  varying float vCrest;
  varying float vTouch;

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

    // --- cursor swell -----------------------------------------------------
    // A soft gaussian mound that follows the pointer, so the ground reacts to
    // you rather than only the camera moving.
    float pd = distance(pos.xy, uPointer);
    float swell = exp(-(pd * pd) / 420.0) * uPointerAmp;
    pos.z += swell * 5.2;

    // A shallow trailing ring just outside the mound gives it some weight.
    // Squared by multiplication, not pow(): pow() with a negative base is
    // undefined in GLSL and returns NaN on many drivers, which kills the
    // vertex outright.
    float rr = pd - 11.0;
    float ring = exp(-(rr * rr) / 60.0) * uPointerAmp;
    pos.z -= ring * 1.4;

    // --- click shockwave --------------------------------------------------
    float shock = 0.0;
    if (uRipple >= 0.0) {
      float rd = distance(pos.xy, uRippleAt);
      float front = uRipple * 30.0;
      float rf = rd - front;
      float band = exp(-(rf * rf) / 34.0);
      shock = band * exp(-uRipple * 1.5);
      pos.z += shock * 5.0;
    }

    vTouch = clamp(swell + shock, 0.0, 1.0);
    vCrest = smoothstep(0.55, 1.5, hgt);
    vRand = aRand;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    float dist = -mv.z;

    // Dissolve into the background rather than ending at a hard horizon.
    vFade = clamp(1.0 - (dist - 8.0) / 62.0, 0.0, 1.0);
    vFade *= smoothstep(0.0, 12.0, dist);

    // Touched points read slightly larger, which sells the displacement.
    gl_PointSize = clamp(150.0 / dist, 1.0, 4.2) * (1.0 + vTouch * 0.85);
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
  varying float vTouch;

  void main() {
    // Round the point sprite off, otherwise everything reads as a grid of squares.
    vec2 d = gl_PointCoord - vec2(0.5);
    float r = dot(d, d);
    if (r > 0.25) discard;
    float edge = smoothstep(0.25, 0.06, r);

    // Terracotta on a minority of points, biased toward the ridge crests -
    // and pulled fully to the accent wherever the pointer is touching.
    float clayMix = step(0.86, vRand) * 0.85 + vCrest * 0.25 + vTouch * 1.4;
    vec3 col = mix(uInk, uClay, clamp(clayMix, 0.0, 1.0));

    float a = vFade * edge * uOpacity * (0.35 + vCrest * 0.65 + vTouch * 0.9);
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
      uPointer: { value: new Vector2(0, 0) },
      uPointerAmp: { value: 0 },
      uRipple: { value: -1 },
      uRippleAt: { value: new Vector2(0, 0) },
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

  // Where the cursor sits on the terrain, in the plane's own coordinates, and
  // how hard it is pressing. Both eased in the frame loop.
  const hit = new Vector2(0, 0);
  const hitTarget = new Vector2(0, 0);
  let amp = 0;
  let ampTarget = 0;
  let rippleT = -1;

  const ndc = new Vector2();
  const dir = new Vector3();

  /**
   * Project a pointer position onto the ground plane and convert the result
   * into the plane geometry's local coordinates.
   *
   * The mesh is rotated -90deg about X, so local (x, y) maps to world
   * (x, -(z + offset)). Getting this mapping wrong is silent: the swell simply
   * appears somewhere other than under the cursor.
   */
  function project(clientX, clientY, rect) {
    ndc.set(((clientX - rect.left) / rect.width) * 2 - 1, -(((clientY - rect.top) / rect.height) * 2 - 1));
    dir.set(ndc.x, ndc.y, 0.5).unproject(camera).sub(camera.position).normalize();
    if (Math.abs(dir.y) < 1e-4) return null; // ray parallel to the ground
    const dist = -camera.position.y / dir.y;
    if (dist < 0) return null; // pointing at the sky
    const wx = camera.position.x + dir.x * dist;
    const wz = camera.position.z + dir.z * dist;
    return hitTarget.set(wx, -(wz - mesh.position.z));
  }

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

    // Ease the swell toward the cursor. Lagging deliberately - the ground
    // feels heavy rather than glued to the pointer.
    hit.lerp(hitTarget, 0.09);
    amp += (ampTarget - amp) * 0.06;
    mat.uniforms.uPointer.value.copy(hit);
    mat.uniforms.uPointerAmp.value = amp;

    // Advance the click shockwave until it has decayed, then switch it off so
    // the branch costs nothing.
    if (rippleT >= 0) {
      rippleT += 0.016;
      if (rippleT > 3.2) rippleT = -1;
      mat.uniforms.uRipple.value = rippleT;
    }

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
    if (project(e.clientX, e.clientY, r)) ampTarget = 1;
  };
  const onLeave = () => {
    ptr.tx = 0;
    ptr.ty = 0;
    ampTarget = 0; // let the ground settle back rather than cut out
  };
  if (fine) {
    host.addEventListener('pointermove', onMove, { passive: true });
    host.addEventListener('pointerleave', onLeave);
  }

  // Click sends a shockwave out from where you clicked. Touch gets it too -
  // it is the only way the effect is discoverable without a cursor.
  const onDown = (e) => {
    const r = host.getBoundingClientRect();
    const p = project(e.clientX, e.clientY, r);
    if (!p) return;
    mat.uniforms.uRippleAt.value.copy(p);
    rippleT = 0;
    mat.uniforms.uRipple.value = 0;
    if (!fine) {
      // On touch there is no hover, so pulse the swell and let it fade.
      hit.copy(p);
      amp = 1;
      ampTarget = 0;
    }
  };
  host.addEventListener('pointerdown', onDown, { passive: true });

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
      if (fine) {
        host.removeEventListener('pointermove', onMove);
        host.removeEventListener('pointerleave', onLeave);
      }
      host.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('webglcontextlost', onLost);
      io?.disconnect();
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    },
  };
}
