// Search landing pages.
//
// The site previously had three pages, two of which were legal - nothing that
// could rank for anything a buyer types. These are the money pages: one per
// commercial intent, each substantial enough to stand on its own rather than
// a thin doorway.
//
// Copy is written for a Philippine buyer, using the language they actually use
// (trippings, walk-ins, inquiries, Messenger) rather than generic agency-speak.

export interface Landing {
  slug: string;
  kind: 'service' | 'sector';
  // <title> - front-loaded with the phrase, under ~60 chars where possible
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  lede: string;
  // The problem, in the buyer's words. This is what makes the page read as
  // written by someone who has done the work.
  painTitle: string;
  pain: string[];
  approachTitle: string;
  approach: { n: string; title: string; body: string }[];
  proof: string;
  faqs: { q: string; a: string }[];
  related: string[];
}

export const landings: Landing[] = [
  {
    slug: 'meta-ads-agency-philippines',
    kind: 'service',
    title: 'Meta Ads Agency Philippines | Facebook & Instagram Ads',
    description:
      'A Manila-based Meta ads agency running Facebook and Instagram campaigns for Philippine businesses. Daily monitoring, multi-variant testing, monthly ROI reporting. Three-month minimum.',
    eyebrow: 'Meta ads',
    h1: 'A Meta ads agency in the Philippines that',
    h1Accent: 'reports honestly.',
    lede:
      'Facebook and Instagram are where Philippine buyers actually are, and where most of the budget quietly disappears. We run Meta campaigns as a managed engagement - daily monitoring, real testing, and a monthly report that shows you what your money bought.',
    painTitle: 'If any of this sounds familiar',
    pain: [
      'Your last agency sent a report full of reach and impressions, and you still could not tell whether it made you any money.',
      'The inquiries come in, but they are tire-kickers - wrong budget, wrong city, wrong intent.',
      'Someone boosted posts for a year and called it advertising.',
      'Leads land in Messenger at 9pm and nobody answers until the next morning, by which point they have booked with someone else.',
      'You have no idea what your cost per inquiry is, so you cannot tell if the spend is working.',
    ],
    approachTitle: 'How we run it',
    approach: [
      { n: '01', title: 'Audience before creative', body: 'We define who is actually worth reaching before we design anything - location, income band, life stage, intent signals. Most wasted spend is a targeting problem wearing a creative costume.' },
      { n: '02', title: 'Multi-variant testing', body: 'Several angles run against each other rather than one hopeful ad. Cheap losers get cut early so the budget concentrates on what converts.' },
      { n: '03', title: 'Daily monitoring', body: 'Campaigns are checked every day, not at month end. Frequency creeping up, cost per result drifting, a creative fatiguing - all of it gets caught while it still matters.' },
      { n: '04', title: 'Response built in', body: 'A campaign that generates inquiries nobody answers is a waste. We wire up saved replies and AI response so a 9pm Messenger inquiry gets handled at 9pm.' },
      { n: '05', title: 'Monthly ROI reporting', body: 'CTR, conversion rate, ROAS, cost per conversion, CPM and frequency, with plain-language commentary on what changed and what we are doing about it.' },
    ],
    proof:
      'We have run Meta campaigns across real estate, aesthetic clinics, dental, food service, insurance, fitness, automotive, travel and more - all creative produced in-house.',
    faqs: [
      { q: 'How much should we spend on ads?', a: 'It depends on your market and what you sell. A property developer chasing ₱10M+ units and a clinic selling a ₱9,000 package need very different budgets. Tell us your offer and target volume and we will tell you what is realistic before you commit to anything.' },
      { q: 'Do you require a minimum contract?', a: 'Three months. Meta needs time to exit the learning phase and we need enough data to optimise on rather than guess. Anyone promising results in two weeks is selling you a lottery ticket.' },
      { q: 'Is ad spend included in your fee?', a: 'No. Our management fee is separate from what you pay Meta. You keep ownership of the ad account and see the spend directly, which is how you should always want it.' },
      { q: 'Can you work with our existing Facebook page?', a: 'Yes. If you do not have one, or it has been dormant, set-up and rebranding are available as add-ons so the page is credible before traffic arrives.' },
    ],
    related: ['real-estate-marketing-philippines', 'recruitment-marketing-philippines'],
  },

  {
    slug: 'real-estate-marketing-philippines',
    kind: 'sector',
    title: 'Real Estate Marketing Philippines | Property Lead Generation',
    description:
      'Property marketing for Philippine developers, brokerages and agents. Facebook and Instagram campaigns built to produce qualified inquiries and trippings, not just page likes.',
    eyebrow: 'Real estate',
    h1: 'Property marketing built for',
    h1Accent: 'trippings, not likes.',
    lede:
      'Real estate is our deepest specialisation - the largest single body of work we have. Preselling condos, house and lot, commercial units. The goal is never engagement. It is a qualified buyer who shows up to the site visit.',
    painTitle: 'What usually goes wrong',
    pain: [
      'You get hundreds of inquiries and almost none can afford the unit.',
      'Buyers ask for the price, hear it, and disappear - because the ad never filtered on budget.',
      'Your agents are drowning in unqualified chats and stop following up properly.',
      'The developer supplies the same generic materials to every broker, so your ads look identical to everyone else selling the same tower.',
      'Trippings get booked and nobody confirms them, so half do not show.',
    ],
    approachTitle: 'How we approach property',
    approach: [
      { n: '01', title: 'Qualify inside the ad', body: 'Price, reservation fee and monthly amortisation go in the creative on purpose. It costs you reach and saves your agents from a hundred conversations that were never going to close.' },
      { n: '02', title: 'Sell the specifics', body: 'Location, cut, floor area, payment terms, turnover date. Property buyers are researching hard - vagueness reads as evasion.' },
      { n: '03', title: 'Carousel and video formats', body: 'Units, amenities and views need to be shown in sequence, not compressed into one static image.' },
      { n: '04', title: 'Follow-up that survives', body: 'A tripping booked is not a tripping attended. Automated confirmation and reminders sit between the inquiry and the site visit so fewer buyers go cold.' },
      { n: '05', title: 'Credibility as a lever', body: 'Property is a trust purchase. Developer branding, licences and real project photography do more for conversion than another discount badge.' },
    ],
    proof:
      'Campaign creative delivered for projects across Metro Manila, including work involving Ayala Land Premier, Arthaland, Citadines and Keystone Properties listings.',
    faqs: [
      { q: 'Do you work with individual agents or only developers?', a: 'Both. Individual brokers and agents usually start on our smallest engagement, brokerages and developers on the larger one where market research and campaign auditing are included.' },
      { q: 'Can you generate buyers for preselling projects?', a: 'Yes - preselling is the bulk of what we run. It needs a longer nurture window than ready-for-occupancy, because the decision cycle is longer, and we plan the follow-up around that.' },
      { q: 'How do you keep the leads qualified?', a: 'By putting the numbers in the ad and targeting on the signals that correlate with capacity to pay. You will get fewer inquiries than a vague ad would produce. More of them will be real.' },
      { q: 'Who owns the leads?', a: 'You do. They come into your page, your CRM, your inbox. We never hold them hostage.' },
    ],
    related: ['meta-ads-agency-philippines', 'ai-lead-response-philippines'],
  },

  {
    slug: 'recruitment-marketing-philippines',
    kind: 'service',
    title: 'Recruitment Marketing Philippines | Paid Hiring Campaigns',
    description:
      'Paid recruitment campaigns for Philippine employers. Facebook and Instagram advertising built to fill roles with qualified applicants, not to collect unread CVs.',
    eyebrow: 'Recruitment',
    h1: 'Hiring campaigns run like',
    h1Accent: 'performance marketing.',
    lede:
      'Most job posts are published and abandoned. A recruitment campaign is advertising: a defined audience, a real offer, creative that competes for attention, and follow-up that keeps candidates warm until they actually turn up.',
    painTitle: 'The usual hiring problem',
    pain: [
      'The post is up, a few applicants trickle in, and none of them fit.',
      'You get volume but the screening burden lands entirely on a manager who already has a job.',
      'Good candidates apply, wait four days for a reply, and take another offer.',
      'You are hiring for the same role every few months because the ad never described it honestly.',
      'Agency fees are quoted per placement and the maths stops working at scale.',
    ],
    approachTitle: 'How we run hiring',
    approach: [
      { n: '01', title: 'Target the passive candidate', body: 'The people worth hiring are usually employed and not browsing job boards. Paid social reaches them where job posts cannot.' },
      { n: '02', title: 'Sell the role honestly', body: 'Pay band, shift, location, growth. Concealing the terms buys you applications from people who withdraw the moment they learn them.' },
      { n: '03', title: 'Filter before the interview', body: 'Screening questions and qualification steps in the funnel, so your team interviews a shortlist rather than a mailing list.' },
      { n: '04', title: 'Speed of response', body: 'Candidate interest decays in hours. Automated acknowledgement and scheduling keep applicants engaged while you get to them.' },
      { n: '05', title: 'Cost per hire, tracked', body: 'The metric that matters is not applications. It is qualified applicants, interviews attended, and what each hire cost you.' },
    ],
    proof:
      'Recruitment campaigns run alongside our acquisition work for Philippine employers, using the same testing and reporting discipline.',
    faqs: [
      { q: 'How is this different from posting on a job board?', a: 'A job board reaches people already looking. Paid social reaches people who are not looking but would move for the right role - a much larger and usually stronger pool.' },
      { q: 'Do you handle the interviewing?', a: 'No. We generate and qualify the applicant flow and keep candidates warm. Selection stays with you, because only you can judge fit.' },
      { q: 'What roles does this work for?', a: 'It works best for volume and mid-level roles - sales, agents, service staff, clinic and support teams. Very senior or highly specialised searches are usually better served by direct headhunting.' },
    ],
    related: ['meta-ads-agency-philippines', 'ai-lead-response-philippines'],
  },

  {
    slug: 'ai-lead-response-philippines',
    kind: 'service',
    title: 'AI Lead Response & Chatbots Philippines | Reply Instantly',
    description:
      'AI chatbot and automated lead nurture for Philippine businesses. Answer Messenger and Viber inquiries instantly, qualify them, and stop leads going cold overnight.',
    eyebrow: 'AI systems',
    h1: 'Most leads are lost',
    h1Accent: 'between 9pm and 9am.',
    lede:
      'Philippine buyers message at night, on Messenger, and expect an answer. If your reply arrives the next morning, the deal is often already gone. AI systems close that gap - answering instantly, qualifying the inquiry, and handing your team something worth their time.',
    painTitle: 'Where the leak actually is',
    pain: [
      'Inquiries arrive after hours and sit unanswered until morning.',
      'Your team answers the same five questions dozens of times a day.',
      'Nobody follows up a second time, and most conversions need a second touch.',
      'Chats pile up during a campaign and the good ones get buried under the noise.',
      'You are paying for ads that generate inquiries your response process then wastes.',
    ],
    approachTitle: 'What we build',
    approach: [
      { n: '01', title: 'Instant first response', body: 'An AI reply within seconds, in the language the customer used, answering the real question rather than posting a menu.' },
      { n: '02', title: 'Qualification in the chat', body: 'Budget, location, timeline and intent established before a human is involved, so your team opens conversations already worth having.' },
      { n: '03', title: 'Automated follow-up', body: 'The second and third touch that almost never happens manually, scheduled and sent without anyone remembering to do it.' },
      { n: '04', title: 'Clean handover', body: 'When a lead is ready, it moves to a person with the full context attached - no asking the customer to repeat themselves.' },
      { n: '05', title: 'Honest guardrails', body: 'The bot answers what it reliably knows and escalates what it does not. Confidently wrong answers cost more trust than a short wait.' },
    ],
    proof:
      'Built as part of our managed engagements, alongside the campaigns generating the inquiries - so the ads and the response system are designed together.',
    faqs: [
      { q: 'Will customers know they are talking to a bot?', a: 'Yes, and they should. We do not pretend the assistant is a person. In practice buyers care far more about a fast, accurate answer than about who typed it.' },
      { q: 'Which channels does this cover?', a: 'Primarily Facebook Messenger and Viber, since that is where Philippine buyers actually message. Website chat and email nurture can sit alongside them.' },
      { q: 'Can it handle Taglish?', a: 'Yes. Mixed English and Filipino is how most inquiries actually arrive, and the system is set up expecting it rather than treating it as an edge case.' },
      { q: 'Does this replace our staff?', a: 'No. It removes the repetitive first exchange and the after-hours gap so your people spend their time on conversations that can actually close.' },
    ],
    related: ['meta-ads-agency-philippines', 'real-estate-marketing-philippines'],
  },

  {
    slug: 'aesthetic-clinic-marketing-philippines',
    kind: 'sector',
    title: 'Clinic & Aesthetics Marketing Philippines | Fill the Chairs',
    description:
      'Marketing for Philippine aesthetic clinics, dental practices and wellness studios. Facebook and Instagram campaigns built to produce booked appointments and repeat visits.',
    eyebrow: 'Clinics & aesthetics',
    h1: 'Marketing for clinics that',
    h1Accent: 'fills the chairs.',
    lede:
      'Aesthetic clinics, dental practices and wellness studios live on booked appointments and repeat visits. The work is getting the right patient to book the first one, and building the trust that brings them back.',
    painTitle: 'What clinics keep running into',
    pain: [
      'Promos get engagement and comments but the calendar stays soft.',
      'People message to ask the price, hear it, and vanish.',
      'You discount deeper each month and train patients to wait for the next sale.',
      'New patients come once for the promo and never return at full price.',
      'Competitors down the road are running the same offer with better photos.',
    ],
    approachTitle: 'How we approach clinics',
    approach: [
      { n: '01', title: 'Lead with the outcome', body: 'Patients are buying a result and a feeling, not a machine name. The treatment technology matters, but it belongs after the reason to care.' },
      { n: '02', title: 'Put the price in the ad', body: 'Price-in-creative filters out the window shoppers before they reach your front desk. Fewer messages, better ones.' },
      { n: '03', title: 'Package over single session', body: 'Multi-session packages raise the first transaction and build the return visit into the sale rather than hoping for it.' },
      { n: '04', title: 'Booking without friction', body: 'One tap from the ad to Messenger or a booking link. Every extra step between wanting it and booking it loses patients.' },
      { n: '05', title: 'Compliant, careful claims', body: 'Health and aesthetics advertising has real limits. We keep claims defensible - both because platforms enforce it and because overclaiming damages a clinic that depends on trust.' },
    ],
    proof:
      'Campaign creative delivered for Philippine skin, laser and dental clinics, including package launches and seasonal promotions.',
    faqs: [
      { q: 'Can you advertise medical and aesthetic treatments on Meta?', a: 'Yes, within Meta\'s health advertising rules. Certain before-and-after formats and personal-attribute targeting are restricted, so the creative has to be built with those limits in mind from the start rather than fixed after a rejection.' },
      { q: 'Do you handle the graphics?', a: 'Yes, all creative is produced in-house - promo materials, package cards and campaign visuals.' },
      { q: 'How quickly will we see bookings?', a: 'Inquiries usually move within the first weeks, but the first month is largely learning what converts. The three-month minimum exists so the second and third months can act on what the first one taught us.' },
    ],
    related: ['meta-ads-agency-philippines', 'ai-lead-response-philippines'],
  },
];

export const bySlug = (slug: string) => landings.find((l) => l.slug === slug);
