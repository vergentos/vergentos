# PHASE 1 — FULL INVENTORY REPORT
## mediatopia.agency SEO Cleanup

**Date:** 2 March 2026
**Prepared for:** Duncan Maund
**Status:** AWAITING APPROVAL — No changes have been made

---

## CRITICAL ISSUE DISCOVERED

**The entire site is configured with the wrong base URL.** Every canonical URL, sitemap entry, OG tag, and structured data reference points to `https://aiwebdesigners.co.uk` — NOT `https://mediatopia.agency`.

This affects:
- `src/utils/generateMetaData.ts` → `DEFAULT_URL = 'https://aiwebdesigners.co.uk'`
- `src/app/sitemap.ts` → `baseUrl = 'https://aiwebdesigners.co.uk'`
- `public/robots.txt` → `Sitemap: https://aiwebdesigners.co.uk/sitemap.xml`
- `src/app/layout.tsx` → JSON-LD schema: `name: 'AI Web Designers'`, `url: 'https://aiwebdesigners.co.uk'`

**Question for Duncan:** Should I fix these to `https://mediatopia.agency` as part of this cleanup, or is `aiwebdesigners.co.uk` an intentional alias/domain? This is outside the original brief scope but is a significant SEO issue.

---

## 1. PAGE INVENTORY WITH VERDICTS

### 1.1 STATIC PAGES

| # | File Path | Route | Title | Meta Description | Verdict | Reason |
|---|-----------|-------|-------|-----------------|---------|--------|
| 1 | `app/page.tsx` | `/` | "AI Web Designers \| Bespoke Next.js & AI-Powered Web Design Bristol" | "Bristol's trusted web engineering consultancy…" | **KEEP** | Core page. Hero copy is good (Next.js & SaaS focus). BUT title contains "Web Design" — needs rewording |
| 2 | `app/about/page.tsx` | `/about` | "About Mediatopia \| Bristol Web Design & AI Consultancy" | "Meet Duncan Maund, founder of Mediatopia. 22+ years building websites…" | **KEEP** | Core page. BUT title says "Web Design" and description says "building websites" — **FLAG FOR REWRITE** |
| 3 | `app/services/page.tsx` | `/services` | "Web Development & AI Services Bristol \| Mediatopia" | "Bespoke Next.js development, Sage 50 API integration, AI automation, and e-commerce solutions…" | **KEEP** | Core page. Title acceptable ("Web Development" not "Web Design") |
| 4 | `app/contact-us/page.tsx` | `/contact-us` | "Contact Us \| Bristol Web Design & AI Consultancy \| Mediatopia.agency" | "Get in touch with our Bristol-based technical team…" | **KEEP** | Core page. BUT title says "Web Design" — needs meta title fix |
| 5 | `app/faq/page.tsx` | `/faq` | "FAQ \| Bristol Web Design & Technical Questions \| Mediatopia.agency" | "Answers to common questions about web development costs…" | **KEEP** | Core page. Title says "Web Design" — needs meta title fix. FAQ content is placeholder/generic |
| 6 | `app/process/page.tsx` | `/process` | "Our Technical Process \| Mediatopia.agency" | "From discovery to deployment, discover how Mediatopia engineers your digital future…" | **KEEP** | Clean, technical positioning |
| 7 | `app/signup/page.tsx` | `/signup` | "Start Your Project \| Mediatopia - Bristol Web Design & AI Consultancy" | "Tell us about your project. Whether you need a website, SaaS application…" | **KEEP** | Core page. Title says "Web Design" — needs meta title fix |
| 8 | `app/support/page.tsx` | `/support` | "Support \| Mediatopia - Bristol Web Design & AI Consultancy" | "Get technical support from Mediatopia…" | **KEEP** | Core page. Title says "Web Design" — needs meta title fix |
| 9 | `app/legal/page.tsx` | `/legal` | "Legal Notice \| Mediatopia - Bristol Web Design" | "Legal information for Mediatopia…" | **KEEP** | Legal page. Title says "Web Design" — needs meta title fix |
| 10 | `app/privacy-policy/page.tsx` | `/privacy-policy` | "Privacy Policy \| Mediatopia - Bristol Web Design" | "How Mediatopia collects, uses, and protects your personal data. GDPR compliant privacy policy for our web design and development services." | **KEEP** | Legal page. Title AND description say "web design" — needs meta fix |
| 11 | `app/terms-conditions/page.tsx` | `/terms-conditions` | "Terms & Conditions \| Mediatopia Bristol" | "Terms and conditions for Mediatopia web design and development services…" | **KEEP** | Legal page. Description says "web design" — needs meta fix |
| 12 | `app/blog/page.tsx` | `/blog` | "Technical Blog \| Web Development & AI Insights \| Mediatopia.agency" | "Expert insights on Next.js development, Sage 50 integrations, AI automation…" | **KEEP** | Blog index. Title and description are clean |
| 13 | `app/case-study/page.tsx` | `/case-study` | "Case Studies \| Bristol Web Design & AI Projects \| Mediatopia.agency" | "Explore our portfolio of web development, Sage 50 integrations, and AI automation projects…" | **KEEP** | Case study index. Title says "Web Design" — needs meta title fix |

### 1.2 SERVICE PAGES

| # | Service Slug | Title | Verdict | Reason |
|---|-------------|-------|---------|--------|
| 1 | `nextjs-react` | Next.js & React Development | **KEEP** | Core .agency service |
| 2 | `ai-implementation` | AI Implementation | **KEEP** | Core .agency service |
| 3 | `api-engineering` | API Engineering | **KEEP** | Core .agency service |
| 4 | `cyber-security-waf` | Cyber Security & WAF | **KEEP** | Core .agency service |
| 5 | `performance-monitoring` | Performance Monitoring | **KEEP** | Core .agency service |
| 6 | `daily-health-audits` | Daily Health Audits | **KEEP** | Core .agency service |
| 7 | `24-7-technical-support` | 24/7 Technical Support | **KEEP** | Core .agency service |
| 8 | `sage-50-sync` | Sage 50 Sync | **FLAG FOR REVIEW** | Sage 50 integration is listed as .co.uk territory in your brief. However this is specifically API/sync engineering, not the general "Sage 50 integration" service page on .co.uk. Your call. |
| 9 | `secure-uk-hosting` | Secure UK Hosting | **FLAG FOR REVIEW** | Your brief says "Hosting (general web hosting, email hosting)" belongs to .co.uk. However this positions as enterprise/SaaS infrastructure hosting, not general shared hosting. Your call. |
| 10 | `bespoke-cms-integration` | Bespoke CMS Integration | **FLAG FOR REVIEW** | Your brief says "CMS development (general)" belongs to .co.uk. This positions as custom headless CMS engineering (not WordPress/general CMS). Your call. |
| 11 | `ecommerce-engineering` | E-commerce Engineering | **FLAG FOR REVIEW** | Your brief says "General ecommerce" belongs to .co.uk. This page positions as custom-built ecommerce platforms (not Shopify/WooCommerce). Your call. |
| 12 | `ui-ux-design` | UI/UX Design | **NOINDEX** | Your brief explicitly states "UI/UX design (as a standalone service — .co.uk owns this)" |
| 13 | `legal` | Legal / Compliance | **KEEP** | Compliance documentation service — no overlap |

### 1.3 BLOG POSTS

| # | Slug | Title | Verdict | Reason |
|---|------|-------|---------|--------|
| 1 | `ai-voice-agents-future-of-uk-business-sales` | AI Voice Agents: Future of UK Business Sales | **KEEP** | AI implementation topic — core .agency |
| 2 | `why-we-built-mediatopia-on-nextjs` | Why We Built Mediatopia on Next.js | **KEEP** | Next.js development topic — core .agency |
| 3 | `will-ai-take-over-web-development` | Will AI Take Over Web Development? | **KEEP** | AI topic — core .agency |
| 4 | `seo-is-dead-ai-changed-the-rules` | SEO is Dead — AI Changed the Rules | **FLAG FOR REVIEW** | Primarily about AI disrupting SEO. Could argue it's AI-focused (keep) or SEO-focused (noindex). Leans AI but title contains "SEO". |
| 5 | `tips-protect-website-from-hackers` | Tips to Protect Your Website From Hackers | **KEEP** | Cyber security topic — core .agency |
| 6 | `why-businesses-should-invest-in-crm-software` | Why Businesses Should Invest in CRM Software | **KEEP** | SaaS/platform topic — core .agency |
| 7 | `complete-guide-sage-50-woocommerce-integration` | Complete Guide: Sage 50 WooCommerce Integration | **NOINDEX** | Explicitly about WooCommerce. WooCommerce is .co.uk territory. Also references WordPress. |
| 8 | `designing-your-ecommerce-website` | Designing Your E-commerce Website | **NOINDEX** | General ecommerce design tips — .co.uk territory |
| 9 | `how-much-does-a-website-cost-per-month` | How Much Does a Website Cost Per Month? | **NOINDEX** | General web design pricing/costs — .co.uk territory |
| 10 | `how-to-find-out-what-search-terms-people-use` | How to Find Out What Search Terms People Use | **NOINDEX** | Pure SEO/keyword research — .co.uk territory |
| 11 | `how-we-achieved-340-percent-traffic-growth-sparks-transport` | How We Achieved 340% Traffic Growth (Sparks Transport) | **NOINDEX** | SEO case study — Local SEO, technical SEO, content strategy. .co.uk territory |
| 12 | `seo-structured-data-schema-markup-guide` | SEO Structured Data & Schema Markup Guide | **NOINDEX** | Pure SEO content — .co.uk territory |
| 13 | `what-is-google-looking-for-on-your-website` | What is Google Looking For on Your Website? | **NOINDEX** | Pure SEO content — .co.uk territory |
| 14 | `types-of-websites` | The Different Types of Websites | **NOINDEX** | General web design guide. Mentions WordPress, Shopify, WooCommerce, Magento, Joomla. .co.uk territory |
| 15 | `uk-website-development-costs` | Understanding UK Website Development Costs | **NOINDEX** | General web development pricing. Mentions "brochure websites". .co.uk territory |
| 16 | `what-is-the-price-of-redesigning-a-website` | What is the Price of Redesigning a Website? | **NOINDEX** | General web design pricing — .co.uk territory |
| 17 | `what-is-sage-ecommerce` | What is Sage eCommerce? | **FLAG FOR REVIEW** | About Sage ecommerce integration. Sage 50 API is .agency, but general ecommerce is .co.uk. Your call. |
| 18 | `which-colours-should-i-use-for-my-website-and-why` | Which Colours Should I Use for My Website? | **NOINDEX** | Web design tips — .co.uk territory |
| 19 | `why-responsive-design-matters-for-small-business` | Why Responsive Design Matters for Small Business | **NOINDEX** | Responsive design — .co.uk territory |
| 20 | `why-website-design-and-development-is-important` | Why Website Design and Development is Important | **NOINDEX** | General web design importance — .co.uk territory |

**Blog summary:** 5 KEEP, 11 NOINDEX, 4 FLAG FOR REVIEW

### 1.4 CASE STUDIES (Active)

| # | Slug | Title | Verdict | Reason |
|---|------|-------|---------|--------|
| 1 | `ai-sales-voice-dashboard` | AI Sales Voice — Autonomous Calling Platform | **KEEP** | SaaS/AI — core .agency |
| 2 | `ai-sales-voice-marketing-site` | AI Sales Voice — Marketing Website | **KEEP** | Next.js build — core .agency |
| 3 | `enterprise-cms-platform` | Enterprise CMS — Modular Business Management | **KEEP** | SaaS platform — core .agency |
| 4 | `investment-screener-fintech-dashboard` | Investment Screener — Fintech Dashboard | **KEEP** | SaaS/Fintech — core .agency |
| 5 | `ux-master-chief-website-builder` | UX Master Chief — AI Website Builder | **KEEP** | SaaS platform — core .agency. Note: mentions WordPress/Shopify export as a feature of the product built, not as services offered |
| 6 | `uxmc-wizard-ai-site-generator` | UXMC Wizard — AI Site Generator | **KEEP** | AI tool — core .agency |

### 1.5 CASE STUDIES (Backup — in `data/case-study-backup/`)

These are NOT currently rendered by the active case study routes (they're in a backup folder), but they ARE referenced in the sitemap.ts for 3 of them.

| # | Slug | Title | Verdict | Reason |
|---|------|-------|---------|--------|
| 1 | `bottleman-website-redesign` | Bottleman — Website Redesign | **NOINDEX** | WordPress/Elementor web design project — .co.uk territory. IN SITEMAP. |
| 2 | `chongz-ecommerce-sage-integration` | Chongz — E-commerce & Sage Integration | **FLAG FOR REVIEW** | WooCommerce/WordPress BUT includes Sage 50 API integration. Mixed. IN SITEMAP. |
| 3 | `morris-and-perry-quarry-website` | Morris & Perry — Quarry Website | **NOINDEX** | WordPress/Elementor web design — .co.uk territory. IN SITEMAP. |
| 4 | `priority-logistics-support-website` | Priority Logistics — Recruitment Website | **NOINDEX** | WordPress/Elementor, copywriting, SEO — .co.uk territory. Not in sitemap. |
| 5 | `sparks-transport-seo-growth` | Sparks Transport — 340% Traffic Growth | **NOINDEX** | SEO case study — .co.uk territory. Not in sitemap. |
| 6 | `weston-lodge-outdoor-activity-website` | Weston Lodge — Outdoor Activity Website | **NOINDEX** | WordPress/Elementor web design — .co.uk territory. Not in sitemap. |

---

## 2. NAVIGATION STRUCTURE

### 2.1 Header/Navbar (from `data/navbar-data.ts`)

**Desktop mega-menu structure:**

- **Company** → About, Process, Case Studies, Contact
- **Insights** → Blog, FAQ
- **Services** (mega-menu with all 13 services listed)
- **Collaborate** → Signup/Project Enquiry

**Mobile menu:** Same structure, collapsible accordion

### 2.2 Footer (from `data/footer-data.ts`)

Three columns:
1. **Technical Services** → Next.js, CMS, Sage 50, AI
2. **Our Consultancy** → Process, Consultancy, Case Studies, Strategy
3. **Expert Insights** → Blog, FAQs, Integration Guides, Privacy

### Navigation changes needed:
- Remove UI/UX Design from services mega-menu (if noindexed)
- Remove any flagged services from nav (pending your decision)
- Remove links to noindexed blog posts from any "featured" or "related" sections

---

## 3. SITEMAP CONFIGURATION

**File:** `src/app/sitemap.ts`

**Issues found:**
1. Base URL is `https://aiwebdesigners.co.uk` (not `mediatopia.agency`)
2. Contains 3 backup case studies that are WordPress/web design projects (bottleman, chongz, morris-and-perry)
3. Contains all 20 blog posts including the 11 that should be noindexed
4. Contains service pages that may need noindexing (ui-ux-design)
5. Lists service slugs that don't match actual service markdown files (e.g., `performance-optimisation`, `bespoke-consultancy`, `technical-strategy`, `ai-chatbots` — these may be dead routes)

---

## 4. ROBOTS.TXT

**File:** `public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://aiwebdesigners.co.uk/sitemap.xml
```

**Issues:** Wrong domain. Should reference `mediatopia.agency`.

---

## 5. STRUCTURED DATA / JSON-LD

**File:** `src/app/layout.tsx`

**Issues found:**
- `name: 'AI Web Designers'` — should this be "Mediatopia"?
- `alternateName: 'aiwebdesigners.co.uk'`
- `description` contains "Bristol web design consultancy" — needs rewording
- `url: 'https://aiwebdesigners.co.uk'` — wrong domain?
- `serviceType` array includes `'Web Design'` — should be removed/replaced
- `email: 'hello@aiwebdesigners.co.uk'` — wrong domain?

---

## 6. TESTIMONIALS REVIEW

**File:** `src/data/json/testimonials/testimonials.json`

6 testimonials total. All appear to be written for the .agency positioning:

| # | Name | Company | Quote Summary | Issue? |
|---|------|---------|---------------|--------|
| 1 | James Thompson | Bristol Manufacturing Ltd | "bespoke CMS and UI/UX design… complex platform migration" | **FLAG** — mentions "UI/UX design" |
| 2 | Rachel Hughes | Southwest Logistics | "Sage 50 API integration… automated financial workflows" | Clean |
| 3 | David Williams | Avon Distribution | "custom AI automation… processing data 6x faster" | Clean |
| 4 | Sophie Evans | Clifton Retail Group | "high-performance hosting and proactive security monitoring… more than a web agency" | **FLAG** — says "web agency" |
| 5 | Mark Taylor | Bath & Somerset Tourism | "custom dashboards and analytics tools" | Clean |
| 6 | Laura Bennett | West Country Crafts | "e-commerce platform was built to scale" | Clean |

---

## 7. HOMEPAGE CONTENT SUMMARY

**Hero section (`components/home/Hero.tsx`):**
- Badge: "22 Years of Web Excellence | Bristol & Somerset"
- H1: "Bristol's Next.js & SaaS Development Experts"
- Body: "From our roots in Taunton to 15 years in Bristol, we build high-performance web applications that outpace WordPress…"
- **Issues:** Badge says "Web Excellence" (vague but not "web design"). Body copy mentions "outpace WordPress" which is fine as positioning. Title says "AI-Powered Web Design Bristol" in meta — **needs changing**.

**Homepage meta title:** "AI Web Designers | Bespoke Next.js & AI-Powered Web Design Bristol"
- **Issue:** Contains "Web Designers" and "Web Design" — needs rewording

---

## 8. ABOUT PAGE CONTENT SUMMARY

**Meta title:** "About Mediatopia | Bristol Web Design & AI Consultancy"
- **Issue:** "Web Design" in title

**Content:** Profile of Duncan Maund, 22+ years experience, 3000+ projects. Current focus on Next.js, Sage 50, AI. Tells the story from general web work to technical specialisation.
- **FLAG FOR REWRITE:** The about page likely positions the historical journey through "web design" before arriving at technical consultancy. The narrative may need tightening to emphasise the technical evolution rather than web design roots.

---

## 9. SUMMARY OF ALL VERDICTS

### Pages to NOINDEX (12):
1. `/services/ui-ux-design` — standalone UI/UX service (.co.uk owns this)
2. `/blog/complete-guide-sage-50-woocommerce-integration` — WooCommerce content
3. `/blog/designing-your-ecommerce-website` — general ecommerce design
4. `/blog/how-much-does-a-website-cost-per-month` — web design pricing
5. `/blog/how-to-find-out-what-search-terms-people-use` — SEO/keywords
6. `/blog/how-we-achieved-340-percent-traffic-growth-sparks-transport` — SEO case study
7. `/blog/seo-structured-data-schema-markup-guide` — SEO content
8. `/blog/what-is-google-looking-for-on-your-website` — SEO content
9. `/blog/types-of-websites` — general web design, mentions WordPress/Shopify/etc
10. `/blog/uk-website-development-costs` — web design pricing, mentions "brochure websites"
11. `/blog/what-is-the-price-of-redesigning-a-website` — web design pricing
12. `/blog/which-colours-should-i-use-for-my-website-and-why` — web design tips
13. `/blog/why-responsive-design-matters-for-small-business` — responsive design
14. `/blog/why-website-design-and-development-is-important` — web design importance
15. `/case-study/bottleman-website-redesign` — WordPress web design (in sitemap)
16. `/case-study/morris-and-perry-quarry-website` — WordPress web design (in sitemap)
17. `/case-study/priority-logistics-support-website` — WordPress/SEO (not in sitemap)
18. `/case-study/sparks-transport-seo-growth` — SEO case study (not in sitemap)
19. `/case-study/weston-lodge-outdoor-activity-website` — WordPress web design (not in sitemap)

### Pages to FLAG FOR YOUR REVIEW (6):
1. `/services/sage-50-sync` — Sage 50 is in your .co.uk list but this is API engineering
2. `/services/secure-uk-hosting` — hosting is in your .co.uk list but this is enterprise SaaS hosting
3. `/services/bespoke-cms-integration` — CMS is in your .co.uk list but this is headless/custom CMS
4. `/services/ecommerce-engineering` — ecommerce is in your .co.uk list but this is custom-built platforms
5. `/blog/seo-is-dead-ai-changed-the-rules` — SEO topic but AI-focused argument
6. `/blog/what-is-sage-ecommerce` — Sage integration but general ecommerce angle
7. `/case-study/chongz-ecommerce-sage-integration` — WooCommerce but includes Sage API work

### Pages to KEEP (all remaining ~25 pages):
All static pages, 6 active case studies, 5 blog posts, remaining service pages

### Meta titles/descriptions needing "web design" removal (11 pages):
1. Homepage — title contains "Web Design"
2. About — title contains "Web Design"
3. Contact — title contains "Web Design"
4. FAQ — title contains "Web Design"
5. Signup — title contains "Web Design"
6. Support — title contains "Web Design"
7. Legal — title contains "Web Design"
8. Privacy Policy — title AND description contain "web design"
9. Terms & Conditions — description contains "web design"
10. Case Studies index — title contains "Web Design"
11. Default metadata (`generateMetaData.ts`) — description contains "web design consultancy"

### Structured data fixes needed:
- JSON-LD: Remove "Web Design" from serviceType array
- JSON-LD: Update description to remove "web design consultancy"
- JSON-LD: Potentially fix name/URL/email if domain should be mediatopia.agency

### Sitemap fixes needed:
- Remove all noindexed pages
- Fix base URL (if domain change confirmed)
- Remove dead service routes that don't have matching content

### robots.txt fixes needed:
- Fix sitemap URL to correct domain

---

## 10. QUESTIONS REQUIRING YOUR DECISION

Before I proceed to Phase 2, I need your answers on:

1. **Domain question:** Should all references to `aiwebdesigners.co.uk` be changed to `mediatopia.agency`? This affects sitemap, robots.txt, canonicals, OG tags, JSON-LD, and meta base URL.

2. **Sage 50 Sync service page** — KEEP or NOINDEX? (It's API engineering, not the general Sage integration page on .co.uk)

3. **Secure UK Hosting service page** — KEEP or NOINDEX? (It's enterprise SaaS hosting, not general shared hosting)

4. **Bespoke CMS Integration service page** — KEEP or NOINDEX? (It's custom headless CMS, not WordPress/general CMS)

5. **E-commerce Engineering service page** — KEEP or NOINDEX? (It's custom-built platforms, not Shopify/WooCommerce)

6. **"SEO is Dead" blog post** — KEEP or NOINDEX? (AI-focused but SEO in title)

7. **"What is Sage eCommerce" blog post** — KEEP or NOINDEX?

8. **Chongz case study** — NOINDEX or keep? (WooCommerce project but includes Sage API work)

9. **Testimonial #1** (James Thompson) mentions "UI/UX design" — flag for rewrite or leave?

10. **Testimonial #4** (Sophie Evans) says "web agency" — flag for rewrite or leave?
