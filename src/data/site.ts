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
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'Method', href: '/#method' },
  { label: 'Engagements', href: '/#engagements' },
  { label: 'Studio', href: '/#studio' },
];

// The three things the studio leads with.
export const pillars = [
  {
    n: '01',
    title: 'Paid acquisition',
    body: 'Meta ads as the engine - built on daily monitoring, multi-variant testing and a named person who owns your account. Google and TikTok where the maths works.',
  },
  {
    n: '02',
    title: 'Recruitment campaigns',
    body: 'Hiring run like performance marketing. Targeted reach, qualified applicant flow, and follow-up that keeps candidates warm instead of letting them go cold.',
  },
  {
    n: '03',
    title: 'AI systems',
    body: 'Chatbots and automated nurture that reply the moment an enquiry lands, qualify it, and stop leads dying in the gap between the ad and the answer.',
  },
];

export const services = [
  { title: 'Meta Ads Management', body: 'Facebook and Instagram campaigns, daily monitoring, multi-variant testing.' },
  { title: 'Recruitment Campaigns', body: 'Paid campaigns engineered to fill roles, not just collect CVs.' },
  { title: 'AI Systems', body: 'Chatbot integration and automated lead nurturing that answers instantly.' },
  { title: 'Social Media Management', body: 'Content, scheduling, saved replies and community management.' },
  { title: 'Website Design & Development', body: 'Responsive sites built so the traffic you pay for converts.' },
  { title: 'Google PPC', body: 'Search campaigns that catch high-intent demand at the bottom of the funnel.' },
  { title: 'TikTok Ads', body: 'Campaigns built for the pace and format of the platform.' },
  { title: 'Brand Building', body: 'A coherent identity that holds up across every touchpoint.' },
  { title: 'Content Marketing', body: 'Content that earns attention instead of renting it.' },
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
  { src: '/work/w09.jpg', sector: 'Real Estate' },
  { src: '/work/w01.jpg', sector: 'Beauty & Aesthetics' },
  { src: '/work/w10.jpg', sector: 'Real Estate' },
  { src: '/work/w04.jpg', sector: 'Food Service' },
  { src: '/work/w11.jpg', sector: 'Real Estate' },
  { src: '/work/w03.jpg', sector: 'Dental' },
  { src: '/work/w08.jpg', sector: 'Travel' },
  { src: '/work/w12.jpg', sector: 'Real Estate' },
  { src: '/work/w02.jpg', sector: 'Beauty & Aesthetics' },
  { src: '/work/w06.jpg', sector: 'Insurance' },
  { src: '/work/w13.jpg', sector: 'Real Estate' },
  { src: '/work/w07.jpg', sector: 'Automotive' },
  { src: '/work/w15.jpg', sector: 'Flowers' },
  { src: '/work/w05.jpg', sector: 'Food Service' },
  { src: '/work/w14.jpg', sector: 'Cleaning Services' },
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
export const testimonialsVerified = false;
export const testimonials: { quote: string; author: string; role: string }[] = [];
