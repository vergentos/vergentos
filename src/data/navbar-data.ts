import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'bespoke-consultancy', label: 'Bespoke Consultancy', href: '/services/bespoke-consultancy' },
      { id: 'web-engineering', label: 'Web Engineering', href: '/services/nextjs-react' },
      { id: 'technical-process', label: 'Our Technical Process', href: '/process' },
      { id: 'case-studies', label: 'Case Studies', href: '/case-study' },
    ],
  },
  {
    id: 'insights',
    title: 'Insights',
    submenu: [
      { id: 'technical-blog', label: 'Technical Blog', href: '/blog' },
      { id: 'commercial-case-studies', label: 'Commercial Case Studies', href: '/case-study' },
      { id: 'technical-faqs', label: 'Technical FAQs', href: '/faq' },
      { id: 'sage-50-guide', label: 'Sage 50 Integration Guide', href: '/services/sage-50-sync' },
      { id: 'ai-uk-business', label: 'AI for UK Business', href: '/services/ai-implementation' },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    submenu: [
      { id: 'nextjs-react', label: 'Next.js & React Builds', href: '/services/nextjs-react' },
      { id: 'bespoke-cms', label: 'Bespoke CMS Integration', href: '/services/bespoke-cms' },
      { id: 'ecommerce', label: 'E-commerce Engineering', href: '/services/ecommerce-engineering' },
      { id: 'sage-50', label: 'Sage 50 Sync', href: '/services/sage-50-sync' },
      { id: 'ai', label: 'AI Implementation', href: '/services/ai-implementation' },
      { id: 'api', label: 'API Engineering', href: '/services/api-engineering' },
      { id: 'strategy', label: 'Technical Strategy', href: '/services/technical-strategy' },
      { id: 'hosting', label: 'Secure UK Hosting', href: '/services/secure-uk-hosting' },
      { id: 'security', label: 'Cyber Security & WAF', href: '/services/cyber-security' },
      { id: 'audits', label: 'Daily Health Audits', href: '/services/health-audits' },
      { id: 'support', label: '24/7 Technical Support', href: '/services/technical-support' },
      { id: 'monitoring', label: 'Performance Monitoring', href: '/services/performance-monitoring' },
    ],
  },
  {
    id: 'collaborate',
    title: 'Collaborate',
    submenu: [
      { id: 'consultation', label: 'Technical Consultation', href: '/contact-us' },
      { id: 'process', label: 'Our Process', href: '/process' },
      { id: 'about', label: 'About Vergentos', href: '/about' },
      { id: 'support-portal', label: 'Client Support Portal', href: '/support' },
      { id: 'faqs', label: 'Technical FAQs', href: '/faq' },
      { id: 'contact', label: 'Contact Us', href: '/contact-us' },
    ],
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Technical Services',
    links: [
      { label: 'Next.js & React Builds', href: '/services/nextjs-react' },
      { label: 'Bespoke CMS Integration', href: '/services/bespoke-cms' },
      { label: 'Sage 50 API Sync', href: '/services/sage-50-sync' },
      { label: 'AI & Systems Automation', href: '/services/ai-implementation' },
    ],
  },
  {
    title: 'Our Consultancy',
    links: [
      { label: 'Engineering Process', href: '/process' },
      { label: 'Bespoke Consultancy', href: '/services/bespoke-consultancy' },
      { label: 'Client Success Stories', href: '/case-study' },
      { label: 'Technical Roadmap', href: '/services/technical-strategy' },
    ],
  },
  {
    title: 'Expert Insights',
    links: [
      { label: 'Technical Blog', href: '/blog' },
      { label: 'Technical FAQs', href: '/faq' },
      { label: 'Integration Guides', href: '/services/sage-50-sync' },
      { label: 'Privacy & Compliance', href: '/privacy-policy' },
    ],
  },
];
