import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vergentos.com';
  
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
    '/services/sage-50-api-integration',
    '/services/sage-50-sync',
    '/services/performance-monitoring',
    '/services/api-engineering',
    '/services/secure-uk-hosting',
    '/services/bespoke-cms',
    '/services/ecommerce-platforms',
  ];

  // Blog posts
  const blogPosts = [
    '/blog/will-ai-take-over-web-development',
    '/blog/tips-protect-website-from-hackers',
    '/blog/why-businesses-should-invest-in-crm-software',
    '/blog/ai-voice-agents-future-of-uk-business-sales',
    '/blog/seo-is-dead-ai-changed-the-rules',
    '/blog/why-we-built-vergentos-on-nextjs',
  ];

  // Case studies
  const caseStudies = [
    '/case-study/ai-sales-voice-dashboard',
    '/case-study/ai-sales-voice-marketing-site',
    '/case-study/enterprise-cms-platform',
    '/case-study/investment-screener-fintech-dashboard',
    '/case-study/ux-master-chief-website-builder',
    '/case-study/uxmc-wizard-ai-site-generator',
  ];

  const allPages = [...staticPages, ...servicePages, ...blogPosts, ...caseStudies];

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : page.startsWith('/services') ? 0.9 : 0.8,
  }));
}
