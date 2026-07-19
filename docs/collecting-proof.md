# Collecting real proof

Everything on the site is real. The two gaps are non-property case studies and
client reviews. Both need words or numbers only your clients can give you.

This doc exists to make that a 20-minute job rather than a project. Copy the
messages, send them, paste what comes back into `src/data/site.ts`.

---

## 1. Reviews - the ask

Send this on Messenger or Viber, not email. Keep it short, make saying yes the
path of least resistance, and give them an out.

### To a happy current client

> Hi [Name]! Quick favour, no pressure at all.
>
> We're putting up a new site and I'd love to include a line from you about
> working with us. Two sentences is plenty - whatever felt most useful to you.
>
> If it's easier, I can draft something based on what you've told me before and
> you just edit or approve it. And totally fine to say no.

### To a client with a specific win

> Hi [Name]! We're building out a new site and I'd like to feature the [project
> / campaign] if you're comfortable with it.
>
> Two things, both optional:
> 1. A sentence or two about how it went
> 2. Whether we can mention [the result] and name [the project]
>
> Happy to keep it anonymous - e.g. "a developer in Quezon City" - if you'd
> rather not be named.

### If they say "sure, you write it"

Write it from things they have **actually said to you** in past messages, then
send it back for approval. Never publish a quote they haven't seen and agreed
to. An approved paraphrase is real. An invented one is not.

---

## 2. What makes a quote worth publishing

Ranked by how much they do for you:

1. **Specific and slightly awkward** - "The first month was slow and I nearly
   pulled out, but by month three we had three trippings a week." Reads true
   because nobody makes that up.
2. **Names a mechanism** - mentions the follow-up system, the daily monitoring,
   the price-in-the-ad approach.
3. **Generic praise** - "Great team, highly recommend!" Harmless, does nothing.

Ask "what surprised you?" or "what nearly stopped you signing?" rather than
"can you say something nice." The answers are far more persuasive.

---

## 3. Case studies - exactly what to pull

For any campaign you want written up, get these from Ads Manager for the date
range. Screenshot is fine, I do not need access.

**Required**

- Date range the campaign ran
- Total ad spend for that range
- Results (messages, leads, or purchases - whichever you optimised for)
- Cost per result
- CTR

**Makes it much stronger**

- What closed, and its value
- Commission earned, if the client will share it
- Your management fee for the period, so total investment is honest
- Anything that went wrong first, and what you changed

**Also useful**

- The objective you were given at the start
- One or two of the actual creatives that ran

**The permission line.** Before publishing a client's numbers:

> Would you be OK with us sharing the results of this campaign on our site? We
> can keep you anonymous - just the sector and the numbers, no business name.

Anonymous case studies are completely normal and still carry weight. Two of the
existing eight are effectively anonymous already.

---

## 4. Priority order

The site currently proves real estate and nothing else. Highest value first:

1. **One clinic or aesthetics case study.** Closes the biggest credibility gap -
   it is the second-largest body of work and has its own landing page already.
2. **Three to four reviews, any sector.** The testimonials section is built and
   sits empty behind `testimonialsVerified`.
3. **One food service or insurance case study.** Rounds out the claim of range.

---

## 5. Where it goes

- **Reviews** - `testimonials` in `src/data/site.ts`, then set
  `testimonialsVerified = true`
- **Case studies** - `caseStudies` in the same file, following the shape of the
  eight already there
- **Creative** - drop images in `public/work/` and add to `work`

Send me the raw material and I will write and wire all of it.
