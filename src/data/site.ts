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
  { label: 'Case studies', href: '/case-studies/' },
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
    body: 'Most money is lost after the enquiry. AI systems that qualify and route every lead, score them so your team works the right ones first, chase the follow-ups nobody remembers, and keep your CRM and reporting honest without anyone touching a spreadsheet.',
    through: 'AI systems · Lead scoring & routing · CRM automation · Follow-up · Email',
  },
];

export const services = [
  { title: 'Meta Ads Management', body: 'Facebook and Instagram campaigns, daily monitoring, multi-variant testing.' },
  { title: 'Recruitment Campaigns', body: 'Paid campaigns engineered to fill roles, not just collect CVs.' },
  { title: 'AI Systems', body: 'Qualification, routing, lead scoring, CRM automation and reporting - not just a chatbot.' },
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
export const caseResultsVerified = true;

export interface CaseStudy {
  slug: string;
  n: string;
  title: string;
  sector: string;
  period?: string;
  background: string;
  challenges: string[];
  strategy: { title: string; body: string }[];
  metrics: { label: string; value: string; note?: string }[];
  outcome: string;
  economics?: {
    adSpend: string;
    fee: string;
    investment: string;
    commission: string;
    roi: string;
    perPeso?: string;
  };
  // Rendered as a visible footnote. Used where a figure is an estimate or
  // where the source deck was internally inconsistent.
  caveat?: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'metro-manila-condo-team-47m',
    n: '01',
    title: 'A four-month campaign that closed \u20b147.9M in condo sales',
    sector: 'Real Estate',
    period: 'September - December 2024',
    background:
      'A top-performing sales team from a prestigious Metro Manila developer, with members deployed in the US and Canada, wanted to reach high-net-worth Filipino buyers at home and abroad. They committed a \u20b130,000 monthly ad budget over four months.',
    challenges: [
      'Reaching Filipino buyers across three countries with one budget',
      'Sustaining lead quality month after month rather than one good month',
      'Converting online inquiries into signed deals across time zones',
    ],
    strategy: [
      { title: 'Local and international targeting', body: 'Campaigns aimed at high-net-worth Filipinos in Metro Manila, the US and Canada looking for premium condo investments.' },
      { title: 'Premium creative', body: 'Property visuals and copy built around exclusivity, convenience and investment potential.' },
      { title: 'Lead nurturing', body: 'The team ran a follow-up system so every inquiry was nurtured until the buyer was ready.' },
      { title: 'Monthly optimisation', body: 'Audience segments, creative and messaging adjusted every month to lower costs and lift quality.' },
    ],
    metrics: [
      { label: 'Total sales closed', value: '\u20b147,975,502' },
      { label: 'Ad spend, 4 months', value: '\u20b1120,000', note: '\u20b130,000 per month' },
      { label: 'Deals closed', value: '5 units' },
    ],
    outcome:
      'Five closed deals: SYNC N Tower 1BR \u20b19.4M, Woodsville Crest Building 3 2BR with parking \u20b118.6M, The Sapphire Bloc East Tower 1BR \u20b17.42M, a second Sapphire Bloc East Tower 1BR \u20b18.34M, and Sierra Valley Gardens Building 1 \u20b14.2M.',
    caveat:
      'Commission on these sales was estimated at \u20b14M-\u20b15M against \u20b1192,000 of total investment (\u20b1120,000 ad spend plus \u20b172,000 in fees). Commission is an estimate based on standard rates, not a confirmed figure, so it is shown as one. The closed sales total is actual.',
    featured: true,
  },
  {
    slug: 'gentry-corporate-plaza-50m',
    n: '02',
    title: 'A \u20b150M commercial unit sold at Gentry Corporate Plaza',
    sector: 'Real Estate',
    background:
      'A salesperson specialising in commercial property and high-end lots needed high-value leads for Gentry Corporate Plaza in Makati - a premium office space aimed at businesses and investors. The task was reaching buyers genuinely willing to commit to a \u20b150M unit.',
    challenges: [
      'High competition in Makati commercial real estate',
      'Reaching corporate buyers, investors and business owners with real purchase intent',
      'Filtering unqualified leads while keeping cost per lead reasonable',
    ],
    strategy: [
      { title: 'Hyper-targeted audiences', body: 'High-net-worth individuals, entrepreneurs and decision-makers in finance, tech and law, plus lookalike audiences built from past buyers and engaged users.' },
      { title: 'Luxury positioning', body: 'Carousel and single-image ads leading on the Makati location, architecture, facilities and investment case, with copy emphasising exclusivity and ROI potential.' },
    ],
    metrics: [
      { label: 'Sale closed', value: '\u20b150M unit' },
      { label: 'Leads generated', value: '42', note: 'high-net-worth prospects' },
      { label: 'Cost per lead', value: '\u20b197' },
      { label: 'Click-through rate', value: '2.07%' },
    ],
    outcome: 'One confirmed sale of a \u20b150M corporate unit, from 42 inquiries.',
    economics: {
      adSpend: '\u20b132,000',
      fee: '\u20b128,000',
      investment: '\u20b160,000',
      commission: '\u20b12,500,000',
      roi: '4,067%',
      perPeso: '\u20b141.67 returned per \u20b11 invested',
    },
    caveat:
      'The source deck states 4,176% here. Recalculated from its own figures the return is 4,067% - or 41.67x total investment. The lower, verifiable number is shown.',
    featured: true,
  },
  {
    slug: 'mid-high-end-condo-14-5m',
    n: '03',
    title: 'Two condo units sold, \u20b114.5M revenue, from 193 inquiries',
    sector: 'Real Estate',
    background:
      'A sales manager from a well-known developer selling mid-to-high-end condominiums in Metro Manila wanted leads that converted into actual sales, not just volume. Given the price point, the focus was serious buyers with high purchase intent.',
    challenges: [
      'High competition in the luxury condo market',
      'Ensuring inquiries came from financially capable buyers',
      'High cost per lead driven by the premium price point',
    ],
    strategy: [
      { title: 'High-intent targeting', body: 'Interest targeting on high-net-worth individuals and property investors, with lookalike audiences built from past messagers and engaged users.' },
      { title: 'Premium creative and messaging', body: 'Carousel and single-image ads showing amenities, city views and flexible payment terms, with copy on exclusivity, investment potential and limited availability.' },
    ],
    metrics: [
      { label: 'Sales closed', value: '2 units', note: '\u20b114.5M revenue' },
      { label: 'Leads generated', value: '193', note: 'in one month' },
      { label: 'Cost per lead', value: '\u20b177.73', note: 'target was \u20b1500 or lower' },
      { label: 'Click-through rate', value: '2.52%' },
    ],
    outcome: 'Two condominium units sold, totalling \u20b114.5M in revenue, against a target of converting at least two inquiries.',
    economics: {
      adSpend: '\u20b131,000',
      fee: '\u20b114,000',
      investment: '\u20b145,000',
      commission: '\u20b1725,000',
      roi: '1,511%',
      perPeso: '\u20b116.11 returned per \u20b11 invested',
    },
    featured: true,
  },
  {
    slug: 'affluent-condo-buyers-15m',
    n: '04',
    title: '\u20b120K of ad spend to a \u20b1750K commission',
    sector: 'Real Estate',
    background:
      'A sales manager from a developer offering mid-to-high-end condominium units in Metro Manila set out to attract affluent buyers - young professionals, growing families and investors - while holding cost per message under \u20b1100.',
    challenges: [
      'Attracting high-income buyers with a niche interest in premium property',
      'Higher cost per message driven by the premium nature of the project',
      'Getting leads to hand over contact details to reduce time on unqualified inquiries',
    ],
    strategy: [
      { title: 'Luxury positioning', body: 'Prime location, modern amenities and proximity to business districts, framed around exclusivity, comfort and investment potential.' },
      { title: 'Audience segmentation', body: 'Affluent professionals aged 28-54 and investors in Metro Manila and surrounding areas, plus lookalikes from previous messagers.' },
      { title: 'Tested creative', body: 'Carousel and single-image ads showing interiors, amenities and landmarks, with headlines, CTAs and captions A/B tested.' },
    ],
    metrics: [
      { label: 'Booked sales', value: '\u20b115M', note: '1BR unit, first month' },
      { label: 'Cost per message', value: 'Under \u20b1100', note: 'the stated target' },
      { label: 'Click-through rate', value: 'Above 2%' },
    ],
    outcome: 'After one month of running, the campaign produced a \u20b115M 1BR unit in booked sales, with further closable leads in the pipeline.',
    economics: {
      adSpend: '\u20b120,000',
      fee: '\u20b128,000',
      investment: '\u20b148,000',
      commission: '\u20b1750,000',
      roi: '1,462%',
      perPeso: '\u20b115.63 returned per \u20b11 invested',
    },
    featured: true,
  },
  {
    slug: 'cost-per-message-77-to-11',
    n: '05',
    title: 'Cost per message cut from \u20b177 to \u20b111',
    sector: 'Real Estate',
    background:
      'A real estate salesperson selling house-and-lot and condominium projects wanted more inquiries at the lowest possible cost, without sacrificing the lead quality needed to eventually convert into sales.',
    challenges: [
      'A saturated market with many competing ads',
      'High cost per message in the real estate niche',
      'Generating leads from buyers genuinely intending to purchase',
    ],
    strategy: [
      { title: 'Targeting optimisation', body: 'Audiences segmented by age, location, job and income bracket, layered onto proven winning audiences from previous campaigns.' },
      { title: 'Placement strategy', body: 'Facebook and Instagram feeds, stories and high-intent placements used to maximise visibility.' },
      { title: 'Daily performance tracking', body: 'CTR, cost per message and link click rates monitored daily and weekly, with campaigns adjusted on real-time performance.' },
    ],
    metrics: [
      { label: 'Cost per message', value: '\u20b177 \u2192 \u20b111', note: 'an 86% reduction' },
      { label: 'Click-through rate', value: '5.40%', note: 'industry average cited at 2%' },
      { label: 'Link click-through rate', value: '1.33%' },
    ],
    outcome:
      'A \u20b13.2M lot-only sale closed at Metrogate Silang Estates, with the client subsequently finalising a bulk account sale for Grandview Tower.',
  },
  {
    slug: 'luxury-condo-10m-studio',
    n: '06',
    title: '\u20b115K of ad spend to a \u20b110M studio unit sale',
    sector: 'Real Estate',
    background:
      'A salesperson from a prestigious developer set out to attract high-net-worth buyers for a luxury mid-to-high-end condominium in Metro Manila, aiming for quality inquiries and one big-ticket close.',
    challenges: [
      'Tough competition in Metro Manila\u2019s high-end condo market',
      'Holding lead quality while keeping costs reasonable',
      'Turning online inquiries into real-world sales',
    ],
    strategy: [
      { title: 'Hyper-targeted ads', body: 'Affluent professionals, executives and overseas investors actively looking at premium condo investments.' },
      { title: 'Strategic placements', body: 'Facebook and Instagram feeds, Stories and Messenger, to maximise direct conversations.' },
      { title: 'Fast response', body: 'The client executed fast response times and a personalised approach, which carried buyer confidence.' },
    ],
    metrics: [
      { label: 'Sale closed', value: '\u20b110M', note: 'studio unit' },
      { label: 'Total inquiries', value: '129' },
      { label: 'Cost per message', value: '\u20b1120.44' },
      { label: 'Ad spend', value: '\u20b115,536.49' },
    ],
    outcome: 'A \u20b110M studio unit sold from 129 inquiries generated on just over \u20b115,000 of ad spend.',
    economics: {
      adSpend: '\u20b115,536.49',
      fee: '\u20b118,000',
      investment: '\u20b133,536.49',
      commission: '\u20b1300,000',
      roi: '795%',
      perPeso: '\u20b18.95 returned per \u20b11 invested',
    },
  },
  {
    slug: 'quezon-city-9-3m-condo',
    n: '07',
    title: '361 inquiries at \u20b141.59 each, and a \u20b19.3M sale',
    sector: 'Real Estate',
    background:
      'A team of sales professionals under a prestigious high-end developer pooled a shared ad budget to attract serious buyers for a luxury condominium project in Quezon City.',
    challenges: [
      'A highly competitive luxury real estate market',
      'Holding lead quality while keeping costs low',
      'Maximising a shared ad budget for the best return',
    ],
    strategy: [
      { title: 'Focused audience targeting', body: 'Ads shown to affluent professionals, business owners and executives actively looking at premium real estate.' },
      { title: 'Messenger-led lead generation', body: 'Messenger ads with fast response times to keep engagement high and conversations direct.' },
      { title: 'Proactive nurturing', body: 'The team followed up immediately and built relationships with prospects rather than waiting on inbound.' },
    ],
    metrics: [
      { label: 'Sale closed', value: '\u20b19.3M', note: 'condo unit' },
      { label: 'Total inquiries', value: '361' },
      { label: 'Cost per message', value: '\u20b141.59' },
      { label: 'Ad spend', value: '\u20b115,281.74' },
    ],
    outcome:
      'A \u20b19.3M condo sold, with two of three further leads signing Letters of Intent and awaiting final closing.',
    economics: {
      adSpend: '\u20b115,281.74',
      fee: '\u20b118,000',
      investment: '\u20b133,281.74',
      commission: '\u20b1279,000 - \u20b1465,000',
      roi: 'At least 738%',
      perPeso: 'At least \u20b18.38 returned per \u20b11 invested',
    },
    caveat: 'Commission here is estimated from standard commission rates rather than confirmed, so the lower bound is used.',
  },
  {
    slug: 'site-visits-metro-manila',
    n: '08',
    title: '120+ inquiries at \u20b1173 each, driving showroom site visits',
    sector: 'Real Estate',
    background:
      'A salesperson from a reputable developer wanted to lift site visits for mid-to-high-end condominium projects in Metro Manila - the objective being buyers who would physically attend the showroom, not just message.',
    challenges: [
      'Filtering serious buyers out of general inquiries',
      'Getting prospects to commit to a site visit',
      'Managing cost per lead while holding lead quality',
    ],
    strategy: [
      { title: 'High-intent targeting', body: 'Professionals aged 28-45, OFWs and property investors, with lookalike audiences from past messagers and engaged prospects.' },
      { title: 'Urgency in the creative', body: 'Carousel and single-image ads on amenities, skyline views and flexible payment terms, with copy built to push toward a visit.' },
      { title: 'Retargeting and nurture', body: 'Reminders by email and Messenger ads reinforcing key selling points and live promos.' },
    ],
    metrics: [
      { label: 'Leads generated', value: '120+', note: 'in one month' },
      { label: 'Cost per lead', value: '\u20b1173.18', note: 'target was under \u20b1200' },
      { label: 'Click-through rate', value: '2.90%' },
    ],
    outcome:
      'Site visits booked across the month, with several buyers expressing strong interest. This campaign is included for the lead economics - no closed sale is claimed for it.',
  },
];

// ---------------------------------------------------------------------------
// TESTIMONIALS
//
// These are REAL. Transcribed verbatim from client Messenger threads in
// ~/Desktop/.../Compilation of Testimonials. Nothing here is written by us.
//
// They are kept in Taglish on purpose. "Okay naman po mga inquiries" reads as
// a real Philippine client because it is one; translating it into polished
// agency English would make it sound invented.
//
// CONSENT: confirmed by Luise on 2026-07-20 for all five named clients.
//
// These were private one-to-one conversations, so each person's agreement is
// what makes publishing them lawful and decent. The per-person `consent` flag
// stays in the data as the record of that. If anyone withdraws, set theirs to
// false - the quote disappears on the next build without touching anything
// else.
//
// Do not add a quote here without the same confirmation. The request message
// is in docs/collecting-proof.md, and anonymous attribution is always an
// option: drop the surname and use e.g. "Real estate salesperson, Metro
// Manila".
// ---------------------------------------------------------------------------
export const testimonialsVerified = true;

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  sector: string;
  consent: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'One Arton sale then 4 LOIs for Samanean so far.',
    author: 'Michelle',
    role: 'Real estate sales',
    sector: 'Real Estate',
    consent: true,
  },
  {
    quote:
      'Share ko lang we can also change the marketing strat kasi SOLD OUT na yung units. Thank you guys.',
    author: 'Daniel dela Cruz',
    role: 'Real estate salesperson',
    sector: 'Real Estate',
    consent: true,
  },
  {
    quote:
      'Maraming inquiry yung sa Ellis project, then Manhattan Heights. Naka generate na ko ng dalawang viewing sa Ellis.',
    author: 'Florian Viernes',
    role: 'Real estate salesperson',
    sector: 'Real Estate',
    consent: true,
  },
  {
    quote:
      'As of now okay naman po mga inquiries sa GVT. I have 2 trippings last week, closable naman po.',
    author: 'Annabelle Pangilinan',
    role: 'Real estate salesperson',
    sector: 'Real Estate',
    consent: true,
  },
  {
    quote: "It's doing well so far. Thank you so much.",
    author: 'Jasmine Millicent Dulay',
    role: 'Real estate salesperson',
    sector: 'Real Estate',
    consent: true,
  },

  // The four below come from the Jul/Aug 2024 batches, which the studio already
  // published publicly as social posts with client names redacted. They are
  // anonymous by design and were cleared at the time, so they carry a sector
  // rather than a name. They are also the only non-property proof on the site,
  // which is exactly why they matter.
  {
    quote:
      'We have many bookings for the month, maybe double compared to last month. This is a big deal to us.',
    author: 'Hotel & resort operator',
    role: 'Published anonymously',
    sector: 'Hotel & Resort',
    consent: true,
  },
  {
    quote:
      'We already sold 5 bags this month. Worth 300K+ na din. Thanks to the team for your big help - we\u2019re excited for next month campaign.',
    author: 'Luxury bag retailer',
    role: 'Published anonymously',
    sector: 'Retail',
    consent: true,
  },
  {
    quote:
      'We have 4 new clients from your ads. This month is very strong for us, thanks to all of you!',
    author: 'Furniture business',
    role: 'Published anonymously',
    sector: 'Furniture',
    consent: true,
  },
  {
    quote:
      'I already made a sale. Super busy lang lately, hindi ko ma-monitor kung saan galing yung sales ko. Pero so far ang galing, kasi 500php lang tapos ang baba ng CPM.',
    author: 'Car trading business',
    role: 'Published anonymously',
    sector: 'Automotive',
    consent: true,
  },
];

