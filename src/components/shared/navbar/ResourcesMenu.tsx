'use client';
import {
  AnalyticsIcon,
  DocsIcon,
  FaqIcon,
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
    title: 'SaaS Engineering',
    links: [
      {
        title: 'SaaS MVP Development',
        description: 'Lean MVPs with production foundations. Validate fast, scale clean.',
        href: '/services/saas-mvp-development',
        icon: DocsIcon,
      },
      {
        title: 'Next.js SaaS Development',
        description: 'Production-grade SaaS platforms engineered on Next.js for scale.',
        href: '/services/nextjs-react',
        icon: TutorialIcon,
      },
      {
        title: 'SaaS Dashboard Design',
        description: 'Data-dense dashboards engineered for activation and retention.',
        href: '/services/ui-ux-design',
        icon: FaqIcon,
      },
      {
        title: 'SaaS Architecture Consulting',
        description: 'Strategic technical guidance for founders and CTOs.',
        href: '/services/saas-architecture-consulting',
        icon: AnalyticsIcon,
      },
    ],
  },
  {
    title: 'AI & Automation',
    links: [
      {
        title: 'AI Integration for SaaS',
        description: 'LLMs, OpenAI, Anthropic embedded into your SaaS workflows.',
        href: '/services/ai-implementation',
        icon: SuccessIcon,
      },
      {
        title: 'AI Agent Development',
        description: 'Production AI agents with tool use, memory, and evaluation.',
        href: '/services/ai-agent-development',
        icon: UseCaseIcon,
      },
      {
        title: 'Vector Databases & RAG',
        description: 'Production RAG implementations grounded in your customer data.',
        href: '/services/vector-database-rag',
        icon: AnalyticsIcon,
      },
      {
        title: 'SaaS Analytics Dashboards',
        description: 'Real-time analytics as a SaaS premium feature customers pay for.',
        href: '/services/saas-analytics-dashboards',
        icon: PressIcon,
      },
    ],
  },
  {
    title: 'Platform Engineering',
    variant: 'compact',
    links: [
      {
        title: 'Stripe Billing Integration',
        href: '/services/stripe-billing-integration',
        icon: SecurityIcon,
      },
      {
        title: 'SaaS Authentication Systems',
        href: '/services/saas-authentication-systems',
        icon: GDPRIcon,
      },
      {
        title: 'SaaS API Engineering',
        href: '/services/api-engineering',
        icon: PrivacyIcon,
      },
      {
        title: 'SaaS Performance Engineering',
        href: '/services/performance-monitoring',
        icon: RefundPolicyIcon,
      },
      {
        title: 'SaaS Platform Migration',
        href: '/services/saas-migration-services',
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
