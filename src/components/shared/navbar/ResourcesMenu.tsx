'use client';
import {
  AnalyticsIcon,
  DocsIcon,
  FaqIcon, // Added missing import
  GDPRIcon,
  LegalNoticeIcon,
  PressIcon,
  PrivacyIcon,
  RefundPolicyIcon,
  SecurityIcon,
  SuccessIcon,
  TutorialIcon,
  UseCaseIcon,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import type { ComponentType } from 'react';
import ResourcesMenuLink from './ResourcesMenuLink';

type ResourceLink = {
  title: string;
  description?: string;
  href: string;
  icon: ComponentType;
};

type ResourceSection = {
  title: string;
  links: ResourceLink[];
  variant?: 'default' | 'compact';
};

const resourceSections: ResourceSection[] = [
  {
    title: 'Bespoke Development',
    links: [
      {
        title: 'Next.js & React',
        description: 'High-performance, SEO-optimised web applications built for speed.',
        href: '/services/nextjs-react',
        icon: DocsIcon,
      },
      {
        title: 'Bespoke CMS Integration',
        description: 'Custom management systems designed for total content control.',
        href: '/services/bespoke-cms',
        icon: TutorialIcon,
      },
      {
        title: 'UI/UX Design',
        description: 'Conversion-driven interfaces balancing aesthetics and performance.',
        href: '/services/ui-ux-design',
        icon: FaqIcon,
      },
      {
        title: 'E-commerce Engineering',
        description: 'Scalable online stores engineered for long-term commercial growth.',
        href: '/services/ecommerce-engineering',
        icon: FaqIcon,
      },
    ],
  },
  {
    title: 'Systems Integration',
    links: [
      {
        title: 'Sage 50 Sync',
        description: 'Automate financial data flow between Sage and your platform.',
        href: '/services/sage-50-sync',
        icon: UseCaseIcon,
      },
      {
        title: 'AI Implementation',
        description: 'Private LLM solutions to automate complex business workflows.',
        href: '/services/ai-implementation',
        icon: SuccessIcon,
      },
      {
        title: 'API Engineering',
        description: 'Custom bridges to connect and synchronise disparate software.',
        href: '/services/api-engineering',
        icon: AnalyticsIcon,
      },
      {
        title: 'Technical Strategy',
        description: 'Expert consulting to align your technology with business goals.',
        href: '/services/technical-strategy',
        icon: AnalyticsIcon,
      },
    ],
  },
  {
    title: 'Managed Infrastructure',
    variant: 'compact',
    links: [
      {
        title: 'Secure UK Hosting',
        href: '/services/secure-uk-hosting',
        icon: SecurityIcon,
      },
      {
        title: 'Cyber Security & WAF',
        href: '/services/cyber-security',
        icon: GDPRIcon,
      },
      {
        title: 'Daily Health Audits',
        href: '/services/health-audits',
        icon: PrivacyIcon,
      },
      {
        title: '24/7 Technical Support',
        href: '/services/technical-support',
        icon: RefundPolicyIcon,
      },
      {
        title: 'Performance Monitoring',
        href: '/services/performance-monitoring',
        icon: PressIcon,
      },
      {
        title: 'Legal',
        href: '/legal',
        icon: LegalNoticeIcon,
      },
    ],
  },
];

const ResourcesMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  const handleClose = () => setMenuDropdownId(null);
  return (
    <div>
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent opacity-0 lg:w-[1290px]',
          menuDropdownId === 'resources-mega-menu'
            ? '!pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="resources-mega-menu"
        className={cn(
          'dropdown-menu dark:bg-background-6 border-stroke-1 dark:border-background-7 pointer-events-none fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 rounded-[20px] border bg-white p-6 opacity-0 transition-all duration-300 lg:w-[1290px]',
          menuDropdownId === 'resources-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="grid grid-cols-12 items-start gap-y-6 md:gap-x-12">
          {resourceSections.map((section) => (
            <div
              key={section.title}
              className={cn(
                'col-span-4',
                section.variant === 'compact' && 'bg-background-2 dark:bg-background-7 rounded-[10px] px-3 pb-3',
              )}>
              <p className="text-tagline-2 text-[#6b7280] dark:text-[#9ca3af] p-3 font-medium">{section.title}</p>
              <ul>
                {section.links.map((link) => (
                  <ResourcesMenuLink key={link.title} {...link} variant={section.variant} onClose={handleClose} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ResourcesMenu.displayName = 'ResourcesMenu';
export default ResourcesMenu;