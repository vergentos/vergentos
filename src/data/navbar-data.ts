import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about', label: 'About Vergentos', href: '/about' },
      { id: 'process', label: 'Our SaaS Development Process', href: '/process' },
      { id: 'case-studies', label: 'Case Studies', href: '/case-study' },
      { id: 'architecture-consulting', label: 'SaaS Architecture Consulting', href: '/services/saas-architecture-consulting' },
    ],
  },
  {
    id: 'insights',
    title: 'Insights',
    submenu: [
      { id: 'blog', label: 'SaaS Engineering Blog', href: '/blog' },
      { id: 'case-studies-secondary', label: 'Case Studies', href: '/case-study' },
      { id: 'faq', label: 'SaaS Development FAQs', href: '/faq' },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    submenu: [
      { id: 'mvp', label: 'SaaS MVP Development', href: '/services/saas-mvp-development' },
      { id: 'nextjs', label: 'Next.js SaaS Development', href: '/services/nextjs-react' },
      { id: 'ai-integration', label: 'AI Integration for SaaS', href: '/services/ai-implementation' },
      { id: 'ai-agents', label: 'AI Agent Development', href: '/services/ai-agent-development' },
      { id: 'rag', label: 'Vector Databases & RAG', href: '/services/vector-database-rag' },
      { id: 'dashboards', label: 'SaaS Dashboard Design', href: '/services/ui-ux-design' },
      { id: 'analytics', label: 'SaaS Analytics Dashboards', href: '/services/saas-analytics-dashboards' },
      { id: 'billing', label: 'Stripe & Billing Integration', href: '/services/stripe-billing-integration' },
      { id: 'auth', label: 'SaaS Authentication Systems', href: '/services/saas-authentication-systems' },
      { id: 'api', label: 'SaaS API Engineering', href: '/services/api-engineering' },
      { id: 'architecture', label: 'SaaS Architecture Consulting', href: '/services/saas-architecture-consulting' },
      { id: 'performance', label: 'SaaS Performance Engineering', href: '/services/performance-monitoring' },
      { id: 'migration', label: 'SaaS Platform Migration', href: '/services/saas-migration-services' },
    ],
  },
  {
    id: 'collaborate',
    title: 'Collaborate',
    submenu: [
      { id: 'consultation', label: 'Start Your Project', href: '/contact-us' },
      { id: 'process-secondary', label: 'Our Process', href: '/process' },
      { id: 'about-secondary', label: 'About Vergentos', href: '/about' },
      { id: 'support', label: 'Client Support', href: '/support' },
      { id: 'faqs-secondary', label: 'FAQs', href: '/faq' },
      { id: 'contact', label: 'Contact Us', href: '/contact-us' },
    ],
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'SaaS Services',
    links: [
      { label: 'SaaS MVP Development', href: '/services/saas-mvp-development' },
      { label: 'Next.js SaaS Development', href: '/services/nextjs-react' },
      { label: 'AI Integration for SaaS', href: '/services/ai-implementation' },
      { label: 'SaaS Dashboard Design', href: '/services/ui-ux-design' },
    ],
  },
  {
    title: 'Specialist Engineering',
    links: [
      { label: 'AI Agent Development', href: '/services/ai-agent-development' },
      { label: 'Vector Databases & RAG', href: '/services/vector-database-rag' },
      { label: 'Stripe & Billing Integration', href: '/services/stripe-billing-integration' },
      { label: 'SaaS Authentication Systems', href: '/services/saas-authentication-systems' },
    ],
  },
  {
    title: 'Strategy & Insights',
    links: [
      { label: 'SaaS Architecture Consulting', href: '/services/saas-architecture-consulting' },
      { label: 'Our Process', href: '/process' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'FAQs', href: '/faq' },
    ],
  },
];
