// Allaia Studio - single source of truth for all site content.
//
// Operational substance (services, process, engagement terms) carries over from
// the agency's real working documents. Brand identity extends the real
// "allaia media." wordmark: italic serif + bold geometric sans + full stop.
//
// Anything unverified is marked TODO and does not render.

export const company = {
  name: 'Allaia Studio',
  wordmark: { serif: 'allaia', sans: 'studio' },
  tagline: 'A growth studio for businesses that need the phone to ring.',
  domain: 'allaiastudio.com',
  // TODO: confirm - assumed from the new domain, not verified.
  email: 'hello@allaiastudio.com',
  phone: '+63 956 216 1407',
  phoneHref: '+639562161407',
  // TODO: add the Facebook page URL to make Messenger the primary CTA.
  messenger: '', // e.g. 'https://m.me/allaiastudio'
  viber: 'viber://chat?number=%2B639562161407',
  region: 'Philippines',
  serviceArea: 'Manila-based, working across the Philippines',
};

// ---------------------------------------------------------------------------
// HERO MOTION
//
// The hero always renders a generative flow-field canvas, so it is complete
// with no asset at all. Drop a file in /public and name it here to layer real
// footage underneath it - the canvas automatically thins out so the footage
// reads through.
//
// Recommended: 1920x1080, H.264 .mp4, under ~4 MB, no audio, 8-14 seconds and
// seamlessly loopable. Editorial and slow - a slow push through a room, light
// moving across a surface. Nothing with faces or fast cuts, it fights the type.
// Always provide the poster too: it is what shows on slow connections.
// ---------------------------------------------------------------------------
export const heroMedia = {
  video: '', // e.g. '/hero.mp4'
  poster: '', // e.g. '/hero-poster.jpg'
};

// Root-relative so these resolve from the landing pages too, not just home.
export const nav = [
  { label: 'Work', href: '/work/' },
  { label: 'Services', href: '/#services' },
  { label: 'Method', href: '/#method' },
  { label: 'Engagements', href: '/#engagements' },
  { label: 'Studio', href: '/#studio' },
  { label: 'Insights', href: '/insights/' },
];

// Framed by outcome rather than by channel. Every pillar draws on several
// services, which is the honest description of how the work actually runs -
// and stops the whole site reading as a Meta ads shop.
export const pillars = [
  {
    n: '01',
    title: 'More bookings',
    body: 'Campaigns that reach the right people, a website built to convert them, and one-tap booking on Messenger, Viber or a calendar - so wanting it and doing it are the same action.',
    through: 'Paid social · Google search · Web design · Booking flows',
  },
  {
    n: '02',
    title: 'More leads',
    body: 'Demand you create and demand you capture. Paid campaigns for people who were not looking, search and SEO for the ones already hunting, recruitment campaigns when the role is the thing you need filled.',
    through: 'Paid social · SEO · Google PPC · Recruitment · Influencer & UGC',
  },
  {
    n: '03',
    title: 'More sales',
    body: 'Most money is lost after the enquiry, not before it. Instant AI response, qualification in the chat, follow-up that actually happens, and email that brings people back.',
    through: 'AI systems · Follow-up automation · Email · Social management',
  },
];

export const services = [
  { title: 'Meta Ads Management', body: 'Facebook and Instagram campaigns, daily monitoring, multi-variant testing.' },
  { title: 'Recruitment Campaigns', body: 'Paid campaigns engineered to fill roles, not just collect CVs.' },
  { title: 'AI Systems', body: 'Chatbot integration and automated lead nurturing that answers instantly.' },
  { title: 'Social Media Management', body: 'Content, scheduling, saved replies and community management.' },
  { title: 'Website Design & Development', body: 'Responsive sites built so the traffic you pay for converts.' },
  { title: 'Google PPC', body: 'Search campaigns that catch high-intent demand at the bottom of the funnel.' },
  { title: 'Brand Building', body: 'A coherent identity that holds up across every touchpoint.' },
  { title: 'Email Marketing', body: 'The one channel you actually own. Nurture, retention, repeat sales.' },
  { title: 'Influencer & UGC', body: 'Creator partnerships and user-generated content for reach and trust.' },
  { title: 'SEO & Copywriting', body: 'Optimised content and copy that compounds over time.' },
];

// Sectors with real delivered work behind them, from the portfolio.
// Real estate is by far the deepest body of work.
export const sectors = [
  { name: 'Real Estate', note: 'Deepest specialisation', flagship: true },
  { name: 'Beauty & Aesthetics', note: 'Clinics and studios', flagship: true },
  { name: 'Food Service', note: 'Restaurants and delivery' },
  { name: 'Insurance', note: 'Agents and brokerages' },
  { name: 'Fitness', note: 'Gyms and studios' },
  { name: 'Dental', note: 'Practices and clinics' },
  { name: 'Automotive', note: 'Dealers and workshops' },
  { name: 'Travel', note: 'Operators and agencies' },
  { name: 'Cleaning Services', note: 'Residential and commercial' },
  { name: 'Flower Arrangement', note: 'Studios and events' },
];

// ---------------------------------------------------------------------------
// WORK
//
// Real campaign creative, extracted from the studio's own portfolio deck.
// These are live ads that ran for real clients.
//
// TWO THINGS TO CHECK BEFORE THIS GOES PUBLIC:
// 1. Client permission. Several are for named businesses (Ayala Land Premier,
//    Arthaland, Majica Aesthetics, Keystone Properties and others). Showing
//    client work is normal agency practice, but confirm the named ones are OK.
// 2. Personal numbers. Some creatives carry an individual agent's mobile and
//    email baked into the artwork. They are rendered small here, but they are
//    still legible if someone opens the file directly. Swap or crop any you
//    are not comfortable republishing.
// ---------------------------------------------------------------------------
export const work = [
  { src: '/work/c01.jpg', sector: 'Real Estate' },
  { src: '/work/c02.jpg', sector: 'Real Estate' },
  { src: '/work/c03.jpg', sector: 'Real Estate' },
  { src: '/work/c04.jpg', sector: 'Real Estate' },
  { src: '/work/c05.jpg', sector: 'Real Estate' },
  { src: '/work/c06.jpg', sector: 'Real Estate' },
  { src: '/work/c07.jpg', sector: 'Real Estate' },
  { src: '/work/c08.jpg', sector: 'Real Estate' },
  { src: '/work/c09.jpg', sector: 'Real Estate' },
  { src: '/work/c10.jpg', sector: 'Real Estate' },
  { src: '/work/c11.jpg', sector: 'Real Estate' },
  { src: '/work/c12.jpg', sector: 'Real Estate' },
  { src: '/work/c13.jpg', sector: 'Real Estate' },
  { src: '/work/c14.jpg', sector: 'Real Estate' },
  { src: '/work/c15.jpg', sector: 'Beauty & Aesthetics' },
  { src: '/work/c16.jpg', sector: 'Beauty & Aesthetics' },
  { src: '/work/c17.jpg', sector: 'Beauty & Aesthetics' },
  { src: '/work/c18.jpg', sector: 'Beauty & Aesthetics' },
  { src: '/work/c19.jpg', sector: 'Beauty & Aesthetics' },
  { src: '/work/c20.jpg', sector: 'Beauty & Aesthetics' },
  { src: '/work/c21.jpg', sector: 'Beauty & Aesthetics' },
  { src: '/work/c22.jpg', sector: 'Food Service' },
  { src: '/work/c23.jpg', sector: 'Food Service' },
  { src: '/work/c24.jpg', sector: 'Food Service' },
  { src: '/work/c25.jpg', sector: 'Food Service' },
  { src: '/work/c26.jpg', sector: 'Food Service' },
  { src: '/work/c27.jpg', sector: 'Food Service' },
  { src: '/work/c28.jpg', sector: 'Insurance' },
  { src: '/work/c29.jpg', sector: 'Insurance' },
  { src: '/work/c30.jpg', sector: 'Insurance' },
  { src: '/work/c31.jpg', sector: 'Dental' },
  { src: '/work/c32.jpg', sector: 'Automotive' },
  { src: '/work/c33.jpg', sector: 'Travel' },
  { src: '/work/c34.jpg', sector: 'Cleaning Services' },
  { src: '/work/c35.jpg', sector: 'Cleaning Services' },
  { src: '/work/c36.jpg', sector: 'Flowers' },
  { src: '/work/c37.jpg', sector: 'Flowers' },
  { src: '/work/c38.jpg', sector: 'Flowers' },
];

export const method = [
  { n: '01', title: 'Discovery', body: 'We start with your goals, your audience and what you actually need the ads to do.' },
  { n: '02', title: 'Strategy', body: 'A campaign strategy built for those goals, not a template applied to them.' },
  { n: '03', title: 'Creative', body: 'Visuals, copy and calls-to-action produced in-house by designers and writers.' },
  { n: '04', title: 'Setup', body: 'Objectives defined, audiences selected, budgets set and tracking wired up.' },
  { n: '05', title: 'Optimisation', body: 'Impressions, clicks, conversions and engagement watched daily and adjusted live.' },
  { n: '06', title: 'Management', body: 'A dedicated account manager who answers you, throughout the engagement.' },
  { n: '07', title: 'Reporting', body: 'Monthly reports covering key metrics, campaign insight and ROI analysis.' },
  { n: '08', title: 'Refinement', body: 'What we learned feeds the next cycle. The strategy sharpens each month.' },
];

export const metrics = [
  { abbr: 'CTR', name: 'Click-through rate' },
  { abbr: 'CVR', name: 'Conversion rate' },
  { abbr: 'ROAS', name: 'Return on ad spend' },
  { abbr: 'CPC', name: 'Cost per conversion' },
  { abbr: 'CPM', name: 'Cost per mille' },
  { abbr: 'ROI', name: 'Return on investment' },
];

// Engagement tiers. Figures deliberately omitted - the numbers on file are from
// Nov 2024 and need re-confirming before they go in front of a customer.
export const engagements = [
  {
    name: 'Foundation',
    forWho: 'Small to medium businesses',
    body: 'For growing businesses with lower ad budgets and lower-value items, who need a dependable base of demand.',
    features: ['2 campaigns / month', 'Up to 8 ad creatives', 'Facebook & Instagram', 'Dedicated account manager', 'Daily monitoring', 'Monthly reporting'],
    extras: [],
  },
  {
    name: 'Momentum',
    forWho: 'Established businesses',
    body: 'For businesses already performing, who want to hold that steady while reaching new customers.',
    features: ['5 campaigns / month', 'Up to 18 ad creatives', 'Facebook & Instagram', 'Dedicated account manager', 'Daily monitoring', 'Monthly reporting'],
    extras: ['Multi-variant testing'],
    featured: true,
  },
  {
    name: 'Scale',
    forWho: 'Real estate & larger businesses',
    body: 'For high-volume advertisers who need market research and campaign auditing built into the engagement.',
    features: ['9 campaigns / month', 'Up to 25 ad creatives', 'Facebook & Instagram', 'Dedicated account manager', 'Daily monitoring', 'Monthly reporting'],
    extras: ['Multi-variant testing', 'Market & audience research', 'Monthly campaign audit'],
  },
];

export const engagementTerms = [
  'Three-month minimum - enough runway to test, optimise and read the data honestly.',
  '10% off a six-month commitment, 15% off twelve.',
  'Set-up fee applies if you have no existing social presence.',
  'Social media management and rebranding available as add-ons.',
];

export const principles = [
  { title: 'Long-term over quick wins', body: 'Strategies judged on what they do over quarters, not what they spike this week.' },
  { title: 'Budgets treated as yours', body: 'Transparent cost management and a detailed breakdown of where every peso went.' },
  { title: 'One team, end to end', body: 'Creative, media buying, systems and reporting handled in-house rather than subcontracted.' },
  { title: 'Trust is the product', body: 'In real estate especially, credibility closes the deal. Campaigns are built accordingly.' },
];

export const faqs = [
  { q: 'Why a three-month minimum?', a: 'Ad results need runway. Three months lets us test properly, optimise on real data and report on something meaningful, rather than reading noise from a two-week sample.' },
  { q: 'When does the engagement start?', a: 'Once we have your branding assets and your answers to the onboarding questionnaire. Campaign preparation then takes roughly a week before ads go live.' },
  { q: 'How long does the first campaign run?', a: 'From the day ads go live until 30 days after the official start date. That full window is what makes the first optimisation cycle worth anything.' },
  { q: 'What if we have no social presence yet?', a: 'That is fine. Set-up is available as an add-on, including rebranding work - logo, cover photo and foundational posts - so the pages are ready before traffic arrives.' },
  { q: 'What will you report on?', a: 'Click-through rate, conversion rate, ROAS, cost per conversion, CPM, ad frequency and overall ROI, in a monthly report with campaign insight and analysis.' },
  { q: 'Which sectors do you know best?', a: 'Real estate is the deepest. Beyond that: beauty and aesthetics, food service, insurance, fitness, dental, automotive, travel and more.' },
];

// ---------------------------------------------------------------------------
// TESTIMONIALS - not published until real and approved.
//
// `testimonialsVerified` is the gate. While false, nothing renders anywhere.
// Add real quotes from clients who have agreed to be quoted, put their real
// name and business below, then set the flag to true.
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// CASE STUDIES
//
// Everything in `context` and `delivered` below is factual - drawn from the
// creative that actually ran. `results` is EMPTY ON PURPOSE.
//
// A case study without numbers is a project summary, which is what these
// currently are, and that is honest. The moment you invent a "+340% leads" the
// whole page becomes untrustworthy - and under PH consumer-protection rules
// unsubstantiated performance claims are a real exposure, not a style choice.
//
// TO PUBLISH RESULTS: pull the actual figures from Ads Manager for the period,
// add them below, confirm the client is happy to have them shown, then set
// caseResultsVerified = true. Until then the projects render without a results
// block rather than with a fabricated one.
// ---------------------------------------------------------------------------
export const caseResultsVerified = false;

export interface CaseStudy {
  client: string;
  sector: string;
  context: string;
  delivered: string[];
  image: string;
  results: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    client: 'Metro Manila property developments',
    sector: 'Real Estate',
    context:
      'Preselling and ready-for-occupancy units across Metro Manila, including projects in Alabang, Makati and Quezon City. Long decision cycles and a hard qualification problem - the brief was buyers who could service the amortisation, not volume.',
    delivered: [
      'Campaign creative for 14 property campaigns',
      'Price, reservation fee and monthly amortisation placed in-creative to qualify',
      'Carousel and single-image formats for unit, amenity and payment-term sequences',
      'Developer branding applied consistently across broker-facing assets',
    ],
    image: '/work/c02.jpg',
    results: [],
  },
  {
    client: 'Aesthetic and dental clinics',
    sector: 'Beauty & Aesthetics',
    context:
      'Skin, laser, hair and dental practices running package launches and seasonal promotions. The constraint is Meta health advertising policy, which restricts personal-attribute copy and before-and-after formats.',
    delivered: [
      'Package and promo creative built to pass health advertising review first time',
      'Price-in-creative to filter enquiries before they reach the front desk',
      'Multi-session package framing rather than single-treatment discounting',
      'One-tap Messenger booking as the primary call to action',
    ],
    image: '/work/c15.jpg',
    results: [],
  },
  {
    client: 'Food service and meal programmes',
    sector: 'Food Service',
    context:
      'Subscription meal plans and catering across Bulacan and Metro Manila, where the offer is recurring rather than one-off and the economics depend on retention rather than first order.',
    delivered: [
      'Subscription tier and macro-breakdown creative for meal programmes',
      'Delivery-area and rate-card assets for operational clarity',
      'Catering and event-led creative for the higher-value segment',
    ],
    image: '/work/c22.jpg',
    results: [],
  },
];

export const testimonialsVerified = false;
export const testimonials: { quote: string; author: string; role: string }[] = [];
