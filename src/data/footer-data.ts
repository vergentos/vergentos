import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
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
