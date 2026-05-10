# PHASE 3 — VERIFICATION REPORT
## mediatopia.agency SEO Cleanup — Complete Change Log

**Date:** 2 March 2026
**Prepared for:** Duncan Maund
**Status:** ALL CHANGES COMPLETE — Ready for your review before deployment

---

## 1. TOTAL PAGES NOINDEXED (21)

### Service Pages (1):
| URL | File |
|-----|------|
| `/services/ui-ux-design` | `src/data/services/ui-ux-design.md` |

### Blog Posts (14):
| URL | File |
|-----|------|
| `/blog/complete-guide-sage-50-woocommerce-integration` | `src/data/blogs/complete-guide-sage-50-woocommerce-integration.md` |
| `/blog/designing-your-ecommerce-website` | `src/data/blogs/designing-your-ecommerce-website.md` |
| `/blog/how-much-does-a-website-cost-per-month` | `src/data/blogs/how-much-does-a-website-cost-per-month.md` |
| `/blog/how-to-find-out-what-search-terms-people-use` | `src/data/blogs/how-to-find-out-what-search-terms-people-use.md` |
| `/blog/how-we-achieved-340-percent-traffic-growth-sparks-transport` | `src/data/blogs/how-we-achieved-340-percent-traffic-growth-sparks-transport.md` |
| `/blog/seo-structured-data-schema-markup-guide` | `src/data/blogs/seo-structured-data-schema-markup-guide.md` |
| `/blog/what-is-google-looking-for-on-your-website` | `src/data/blogs/what-is-google-looking-for-on-your-website.md` |
| `/blog/types-of-websites` | `src/data/blogs/types-of-websites.md` |
| `/blog/uk-website-development-costs` | `src/data/blogs/uk-website-development-costs.md` |
| `/blog/what-is-the-price-of-redesigning-a-website` | `src/data/blogs/what-is-the-price-of-redesigning-a-website.md` |
| `/blog/which-colours-should-i-use-for-my-website-and-why` | `src/data/blogs/which-colours-should-i-use-for-my-website-and-why.md` |
| `/blog/why-responsive-design-matters-for-small-business` | `src/data/blogs/why-responsive-design-matters-for-small-business.md` |
| `/blog/why-website-design-and-development-is-important` | `src/data/blogs/why-website-design-and-development-is-important.md` |
| `/blog/what-is-sage-ecommerce` | `src/data/blogs/what-is-sage-ecommerce.md` |

### Backup Case Studies (6):
| URL | File |
|-----|------|
| `/case-study/bottleman-website-redesign` | `src/data/case-study-backup/bottleman-website-redesign.md` |
| `/case-study/chongz-ecommerce-sage-integration` | `src/data/case-study-backup/chongz-ecommerce-sage-integration.md` |
| `/case-study/morris-and-perry-quarry-website` | `src/data/case-study-backup/morris-and-perry-quarry-website.md` |
| `/case-study/priority-logistics-support-website` | `src/data/case-study-backup/priority-logistics-support-website.md` |
| `/case-study/sparks-transport-seo-growth` | `src/data/case-study-backup/sparks-transport-seo-growth.md` |
| `/case-study/weston-lodge-outdoor-activity-website` | `src/data/case-study-backup/weston-lodge-outdoor-activity-website.md` |

**Implementation method:**
- Blog posts: `noindex: true` added to frontmatter + `robots: { index: false, follow: false }` via `noindexSlugs` array in `blog/[slug]/page.tsx`
- UI/UX service: `noindex: true` in frontmatter + robots check in `services/[slug]/page.tsx`
- Backup case studies: `noindex: true` in frontmatter (these were already in a backup folder not served by active routes)
- All noindexed markdown files have the comment: `<!-- NOINDEXED — overlaps with mediatopia.co.uk — do not re-enable without SEO review -->`

---

## 2. TOTAL PAGES KEPT (32 in sitemap)

### Static Pages (13):
`/`, `/about`, `/services`, `/blog`, `/case-study`, `/contact-us`, `/faq`, `/process`, `/signup`, `/support`, `/legal`, `/privacy-policy`, `/terms-conditions`

### Service Pages (13):
`/services/next-js-react-development`, `/services/ai-implementation`, `/services/performance-optimisation`, `/services/sage-50-api-integration`, `/services/bespoke-consultancy`, `/services/technical-strategy`, `/services/sage-50-sync`, `/services/performance-monitoring`, `/services/api-engineering`, `/services/secure-uk-hosting`, `/services/bespoke-cms`, `/services/ecommerce-platforms`, `/services/ai-chatbots`

### Blog Posts (6):
`/blog/will-ai-take-over-web-development`, `/blog/tips-protect-website-from-hackers`, `/blog/why-businesses-should-invest-in-crm-software`, `/blog/ai-voice-agents-future-of-uk-business-sales`, `/blog/seo-is-dead-ai-changed-the-rules`, `/blog/why-we-built-mediatopia-on-nextjs`

### Case Studies (0 in sitemap):
Active case studies (6) exist but were not in sitemap previously. The 3 backup case studies that WERE in the sitemap have been removed.

---

## 3. META TITLE CHANGES (Before → After)

| Page | Before | After |
|------|--------|-------|
| Homepage | AI Web Designers \| Bespoke Next.js & AI-Powered Web Design Bristol | Mediatopia \| Bespoke Next.js & AI-Powered Web Engineering Bristol |
| About | About Mediatopia \| Bristol Web Design & AI Consultancy | About Mediatopia \| Bristol Web Engineering & AI Consultancy |
| Contact | Contact Us \| Bristol Web Design & AI Consultancy \| Mediatopia.agency | Contact Us \| Bristol Web Engineering & AI Consultancy \| Mediatopia.agency |
| FAQ | FAQ \| Bristol Web Design & Technical Questions \| Mediatopia.agency | FAQ \| Bristol Web Engineering & Technical Questions \| Mediatopia.agency |
| Signup | Start Your Project \| Mediatopia - Bristol Web Design & AI Consultancy | Start Your Project \| Mediatopia - Bristol Web Engineering & AI Consultancy |
| Support | Support \| Mediatopia - Bristol Web Design & AI Consultancy | Support \| Mediatopia - Bristol Web Engineering & AI Consultancy |
| Legal | Legal Notice \| Mediatopia - Bristol Web Design | Legal Notice \| Mediatopia - Bristol Web Engineering |
| Privacy | Privacy Policy \| Mediatopia - Bristol Web Design | Privacy Policy \| Mediatopia - Bristol Web Engineering |
| Case Studies | Case Studies \| Bristol Web Design & AI Projects \| Mediatopia.agency | Case Studies \| Bristol Web Engineering & AI Projects \| Mediatopia.agency |
| Default (layout) | Mediatopia \| Next.js & SaaS Development Bristol | *Unchanged* |
| Services | Web Development & AI Services Bristol \| Mediatopia | *Unchanged (no "web design" — already clean)* |
| Blog | Technical Blog \| Web Development & AI Insights \| Mediatopia.agency | *Unchanged (already clean)* |
| Process | Our Technical Process \| Mediatopia.agency | *Unchanged (already clean)* |
| Terms | Terms & Conditions \| Mediatopia Bristol | *Unchanged (already clean)* |

---

## 4. META DESCRIPTION CHANGES (Before → After)

| Page | Before | After |
|------|--------|-------|
| Default metadata | Bristol web design consultancy specialising in… | Bristol web engineering consultancy specialising in… |
| Privacy Policy | …GDPR compliant privacy policy for our web design and development services. | …GDPR compliant privacy policy for our web engineering and development services. |
| Terms & Conditions | Terms and conditions for Mediatopia web design and development services… | Terms and conditions for Mediatopia web engineering and development services… |

All other page descriptions were already clean (no "web design" references).

---

## 5. NAVIGATION CHANGES

### Before (Services submenu — 13 items):
1. Next.js & React Builds
2. Bespoke CMS Integration
3. **UI/UX Design** ← REMOVED
4. E-commerce Engineering
5. Sage 50 Sync
6. AI Implementation
7. API Engineering
8. Technical Strategy
9. Secure UK Hosting
10. Cyber Security & WAF
11. Daily Health Audits
12. 24/7 Technical Support
13. Performance Monitoring

### After (Services submenu — 12 items):
1. Next.js & React Builds
2. Bespoke CMS Integration
3. E-commerce Engineering
4. Sage 50 Sync
5. AI Implementation
6. API Engineering
7. Technical Strategy
8. Secure UK Hosting
9. Cyber Security & WAF
10. Daily Health Audits
11. 24/7 Technical Support
12. Performance Monitoring

**Footer:** No changes needed — footer did not link to UI/UX Design or any noindexed pages.

---

## 6. DOMAIN/BRAND CHANGES (aiwebdesigners.co.uk → mediatopia.agency)

| File | Change |
|------|--------|
| `src/utils/generateMetaData.ts` | DEFAULT_URL: `aiwebdesigners.co.uk` → `mediatopia.agency` |
| `src/app/sitemap.ts` | baseUrl: `aiwebdesigners.co.uk` → `mediatopia.agency` |
| `public/robots.txt` | Sitemap URL: `aiwebdesigners.co.uk` → `mediatopia.agency` |
| `src/app/layout.tsx` (JSON-LD) | name: "AI Web Designers" → "Mediatopia" |
| `src/app/layout.tsx` (JSON-LD) | alternateName: `aiwebdesigners.co.uk` → `mediatopia.agency` |
| `src/app/layout.tsx` (JSON-LD) | url, logo, image: all → `mediatopia.agency` |
| `src/app/layout.tsx` (JSON-LD) | email: `hello@aiwebdesigners.co.uk` → `hello@mediatopia.agency` |
| `src/app/layout.tsx` (JSON-LD) | serviceType: removed "Web Design", added "Web Application Engineering" |
| `src/app/page.tsx` | All OG/Twitter/canonical/author refs: → `mediatopia.agency` / "Mediatopia" |
| `src/app/services/[slug]/page.tsx` | OG URL and keywords: → `mediatopia.agency` / "Mediatopia, technical consultancy" |
| `components/shared/navbar/Navbar.tsx` | Brand name: "AI Web Designers" → "Mediatopia" |
| `components/shared/mobile-menu/MobileMenu.tsx` | Brand name: "AI Web Designers" → "Mediatopia" |
| `components/shared/footer/Footer.tsx` | Brand, domain, copyright: all → "Mediatopia" / `mediatopia.agency` |
| `components/home/Testimonial.tsx` | Domain ref: `aiwebdesigners.co.uk` → `mediatopia.agency` |
| `components/terms-conditions/TermsConditionContent.tsx` | All "AI Web Designers" → "Mediatopia", all domain refs → `mediatopia.agency` |
| `components/legal-notice/Content.tsx` | All domain refs: → `mediatopia.agency` |
| `components/privacy/PrivacyContent.tsx` | All email/domain refs: → `mediatopia.agency` |
| `components/support/Services.tsx` | Email: → `hello@mediatopia.agency` |
| `components/support/Contact.tsx` | Email: → `hello@mediatopia.agency` |
| `components/contact-page/ContactInfo.tsx` | Email: → `hello@mediatopia.agency` |

---

## 7. FORBIDDEN PHRASE REPLACEMENTS

| File | Before | After |
|------|--------|-------|
| `components/home/Hero.tsx` | "outpace WordPress" | "outpace legacy CMS platforms" |
| `components/home/Services.tsx` | "outperform WordPress" | "outperform legacy CMS" |
| `components/home/Services.tsx` | "10x faster than WordPress" | "10x faster than legacy CMS platforms" |
| `components/home/IntegrationCloud.tsx` | "faster load times than WordPress" | "faster load times than legacy CMS platforms" |
| `components/home/Pricing.tsx` | "Bespoke Web Design" (title) | "Bespoke Web Engineering" |
| `components/home/Pricing.tsx` | "Web Design Pricing" (badge) | "Web Engineering Pricing" |
| `components/home/Pricing.tsx` | "Web Design & AI Development Costs" | "Web Engineering & AI Development Costs" |
| `components/home/ServicePricing.tsx` | "Web design pricing" (badge) | "Web engineering pricing" |
| `components/home/ServicePricing.tsx` | "Web Design & AI Development Costs" | "Web Engineering & AI Development Costs" |
| `components/home/ServicePricing.tsx` | "bespoke web design" | "bespoke web engineering" |
| `components/home/Testimonial.tsx` | "bespoke web design" | "bespoke web engineering" |
| `components/home/Projects.tsx` | "WordPress to high-performance platform" | "Legacy CMS to high-performance platform" |
| `components/home/Projects.tsx` | "WordPress migrations" | "legacy platform migrations" |
| `components/service-detail/CTA.tsx` | "web design consultants" | "technical consultants" |
| `components/service-detail/heroes/HeroPortfolio.tsx` | fallback badge "Web Design" | "Web Engineering" |
| `components/service-detail/heroes/HeroPortfolio.tsx` | fallback "web design and development" | "web engineering and development" |
| `components/authentication/ProjectEnquiryForm.tsx` | "Brochure Website" | "Marketing Website" |
| `components/case-study/Feature.tsx` | "WooCommerce" | "e-commerce platform" |
| `components/about/VisionStatement.tsx` | "from traditional web design" | "from traditional web development" |
| `components/about/OurSuccess.tsx` | "award-winning WordPress builds" | "award-winning early web builds" |
| `app/services/page.tsx` | "10x faster than WordPress" | "10x faster than legacy CMS" |
| `app/services/page.tsx` | "without WordPress bloat" | "without legacy CMS bloat" |
| `data/services-data.ts` | "Lead Web Design Consultancy Bristol" | "Lead Web Engineering Consultancy Bristol" |
| `data/json/faq/faq.json` | "Bespoke web design costs" | "Bespoke web engineering costs" |
| `data/json/faq/faq-projects.json` | "brochure website" | "marketing website" |
| `data/json/faq/faq-technical.json` | "instead of WordPress" | "instead of traditional CMS platforms" |

---

## 8. TESTIMONIAL CHANGES

| # | Before | After |
|---|--------|-------|
| 1 (James Thompson) | "bespoke CMS and UI/UX design" | "bespoke CMS architecture and interface engineering" |
| 4 (Sophie Evans) | "more than a web agency" | "more than a typical development consultancy" |

---

## 9. SITEMAP CHANGES

**Removed from sitemap (17 entries):**
- 14 noindexed blog posts
- 3 backup case studies (bottleman, chongz, morris-and-perry)

**Base URL changed:** `https://aiwebdesigners.co.uk` → `https://mediatopia.agency`

**`/services/ui-ux-design` removed from sitemap.**

---

## 10. ROBOTS.TXT CHANGES

**Before:**
```
Sitemap: https://aiwebdesigners.co.uk/sitemap.xml
```

**After:**
```
Sitemap: https://mediatopia.agency/sitemap.xml
```

---

## 11. CONFIRMATION: NO FILES DELETED

✅ Zero files have been deleted. All noindexed pages remain in the codebase with their content intact. Only metadata, frontmatter flags, and the noindex comment have been added.

---

## 12. ITEMS FLAGGED FOR YOUR REVIEW

### A. Shopify Integration Icons
**Files:** `components/services/Integration.tsx` and `components/integration/Integration.tsx`

These show Shopify as a **technology integration partner** (an icon in a cloud of tools the agency connects with). This is NOT positioning Shopify as a service — it's showing API/platform connectivity. However, Shopify is on your forbidden list. **Your call whether to remove the Shopify icon from the integration clouds.**

### B. UXMC Case Study — WordPress/Shopify References
**File:** `src/data/case-study/ux-master-chief-website-builder.md`

This case study describes a **SaaS product Mediatopia built** (UX Master Chief) that exports to multiple formats including HTML, WordPress, and Shopify. The references are to the product's output capabilities, not to services Mediatopia offers directly. **Your call whether to keep these as-is or rephrase.**

### C. Active Case Studies Missing from Sitemap
The 6 active case studies (AI Sales Voice Dashboard, AI Sales Voice Marketing Site, Enterprise CMS, Investment Screener, UXMC Website Builder, UXMC Wizard) are **not currently in the sitemap**. The old sitemap only had 3 backup case studies which have now been removed. **You may want to add the active case studies to the sitemap.**

### D. About Page Content
The about page components (`VisionStatement.tsx`, `OurSuccess.tsx`) have been updated to remove "web design" and "WordPress" references, but the overall narrative still tells the story of a journey from general web work to technical specialisation. **If you want a full positioning rewrite of the about page copy, flag it and I'll prepare options.**

### E. Dead Service Routes in Sitemap
The sitemap lists some service slugs that may not have matching content in `services-data.ts`: `performance-optimisation`, `bespoke-consultancy`, `technical-strategy`, `ai-chatbots`. **You should verify these routes resolve correctly or remove them from the sitemap.**
