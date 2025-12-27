import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Technical Services',
    links: [
      { label: 'Next.js & React Builds', href: '/about' },
      { label: 'Bespoke CMS Integration', href: '/career' },
      { label: 'Sage 50 API Sync', href: '/case-study' },
      { label: 'AI & Systems Automation', href: '/contact-us' },
    ],
  },
  {
    title: 'Our Consultancy',
    links: [
      { label: 'Engineering Process', href: '/faq' },
      { label: 'Bespoke Consultancy', href: '/documentation' },
      { label: 'Client Success Stories', href: '/tutorial' },
      { label: 'Technical Roadmap', href: '/community' },
    ],
  },
  {
    title: 'Expert Insights',
    links: [
      { label: 'Technical Blog', href: '/terms-conditions' },
      { label: 'Technical FAQs', href: '/privacy-policy' },
      { label: 'Integration Guides', href: '/refund-policy' },
      { label: 'Privacy & Compliance', href: '/gdpr' },
    ],
  },
];
