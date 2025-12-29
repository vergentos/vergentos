import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Technical Services',
    links: [
      { label: 'Next.js & React Builds', href: '/services/next-js-react-development' },
      { label: 'Bespoke CMS Integration', href: '/services/bespoke-cms-integration' },
      { label: 'Sage 50 API Sync', href: '/services/sage-50-api-integration' },
      { label: 'AI & Systems Automation', href: '/services/ai-implementation' },
    ],
  },
  {
    title: 'Our Consultancy',
    links: [
      { label: 'Engineering Process', href: '/process' },
      { label: 'Bespoke Consultancy', href: '/services/technical-consultancy' },
      { label: 'Client Success Stories', href: '/case-study' },
      { label: 'Technical Roadmap', href: '/services/technical-consultancy' },
    ],
  },
  {
    title: 'Expert Insights',
    links: [
      { label: 'Technical Blog', href: '/blog' },
      { label: 'Technical FAQs', href: '/faq' },
      { label: 'Integration Guides', href: '/services/api-development' },
      { label: 'Privacy & Compliance', href: '/privacy-policy' },
    ],
  },
];
