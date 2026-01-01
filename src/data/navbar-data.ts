import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: '/about' },
      { id: 'case-studies', label: 'Case Studies', href: '/case-study' },
      { id: 'process', label: 'Our Process', href: '/process' },
      { id: 'contact', label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    submenu: [
      { id: 'nextjs', label: 'Next.js & React', href: '/services/next-js-react-development' },
      { id: 'sage', label: 'Sage 50 Integration', href: '/services/sage-50-api-integration' },
      { id: 'ai', label: 'AI & Automation', href: '/services/ai-implementation' },
      { id: 'ecommerce', label: 'E-commerce', href: '/services/ecommerce-development' },
      { id: 'cms', label: 'Bespoke CMS', href: '/services/bespoke-cms-integration' },
      { id: 'consultancy', label: 'Technical Consultancy', href: '/services/technical-consultancy' },
      { id: 'all-services', label: 'View All Services', href: '/services' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'blog', label: 'Blog', href: '/blog' },
      { id: 'faq', label: 'FAQ', href: '/faq' },
      { id: 'support', label: 'Support', href: '/support' },
    ],
  },
  {
    id: 'legal',
    title: 'Legal',
    submenu: [
      { id: 'terms', label: 'Terms & Conditions', href: '/terms-conditions' },
      { id: 'privacy', label: 'Privacy Policy', href: '/privacy-policy' },
      { id: 'legal', label: 'Legal', href: '/legal' },
    ],
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Support', href: '/support' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Legal', href: '/legal' },
    ],
  },
];
