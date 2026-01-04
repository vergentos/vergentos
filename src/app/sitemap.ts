import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mediatopia.agency';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/blog',
    '/case-study',
    '/contact-us',
    '/faq',
    '/process',
    '/signup',
    '/support',
    '/legal',
    '/privacy-policy',
    '/terms-conditions',
  ];

  // Service pages
  const servicePages = [
    '/services/next-js-react-development',
    '/services/ai-implementation',
    '/services/performance-optimisation',
    '/services/sage-50-api-integration',
    '/services/bespoke-consultancy',
    '/services/technical-strategy',
    '/services/sage-50-sync',
    '/services/performance-monitoring',
    '/services/api-engineering',
    '/services/secure-uk-hosting',
    '/services/bespoke-cms',
    '/services/ui-ux-design',
    '/services/ecommerce-platforms',
    '/services/ai-chatbots',
  ];

  // Blog posts
  const blogPosts = [
    '/blog/how-to-find-out-what-search-terms-people-use',
    '/blog/which-colours-should-i-use-for-my-website-and-why',
    '/blog/what-is-the-price-of-redesigning-a-website',
    '/blog/types-of-websites',
    '/blog/will-ai-take-over-web-development',
    '/blog/how-much-does-a-website-cost-per-month',
    '/blog/tips-protect-website-from-hackers',
    '/blog/why-responsive-design-matters-for-small-business',
    '/blog/why-website-design-and-development-is-important',
    '/blog/why-businesses-should-invest-in-crm-software',
    '/blog/what-is-google-looking-for-on-your-website',
    '/blog/seo-structured-data-schema-markup-guide',
    '/blog/uk-website-development-costs',
    '/blog/complete-guide-sage-50-woocommerce-integration',
    '/blog/ai-voice-agents-future-of-uk-business-sales',
    '/blog/designing-your-ecommerce-website',
    '/blog/how-we-achieved-340-percent-traffic-growth-sparks-transport',
    '/blog/seo-is-dead-ai-changed-the-rules',
    '/blog/what-is-sage-ecommerce',
    '/blog/why-we-built-mediatopia-on-nextjs',
  ];

  // Case studies
  const caseStudies = [
    '/case-study/bottleman-website-redesign',
    '/case-study/chongz-ecommerce-sage-integration',
    '/case-study/morris-and-perry-quarry-website',
  ];

  const allPages = [...staticPages, ...servicePages, ...blogPosts, ...caseStudies];

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : page.startsWith('/services') ? 0.9 : 0.8,
  }));
}
