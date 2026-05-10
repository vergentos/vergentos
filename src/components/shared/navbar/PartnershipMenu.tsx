'use client';

import {
  AffiliateIcon,
  DownloadIcon,
  IntegrationIcon,
  LoginIcon,
  ReferralProgramIcon,
  SignUpIcon,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import type { ComponentType } from 'react';
import PartnershipMenuLink from './PartnershipMenuLink';

type PartnershipLink = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType;
};

const leftColumnLinks: PartnershipLink[] = [
  {
    title: 'SaaS Engineering Blog',
    description: 'Insights on SaaS development, AI agents, RAG, and dashboard engineering.',
    href: '/blog',
    icon: AffiliateIcon,
  },
  {
    title: 'Case Studies',
    description: 'Real SaaS platforms, AI tools, and dashboards shipped to production.',
    href: '/case-study',
    icon: ReferralProgramIcon,
  },
  {
    title: 'SaaS Development FAQs',
    description: 'Pricing, timelines, and process for bespoke SaaS development.',
    href: '/faq',
    icon: LoginIcon,
  },
];

const rightColumnLinks: PartnershipLink[] = [
  {
    title: 'AI Agent Development',
    description: 'Production AI agents with reasoning loops, tool use, and memory.',
    href: '/services/ai-agent-development',
    icon: SignUpIcon,
  },
  {
    title: 'Vector Databases & RAG',
    description: 'Production RAG using Pinecone, Weaviate, pgvector, or Qdrant.',
    href: '/services/vector-database-rag',
    icon: DownloadIcon,
  },
  {
    title: 'Our Process',
    description: 'How Vergentos builds SaaS products from MVP through to scale.',
    href: '/process',
    icon: IntegrationIcon,
  },
];

const PartnershipMenu = ({
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
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[640px] -translate-x-1/2 bg-transparent opacity-0 transition-all duration-300',
          menuDropdownId === 'partnership-dropdown-menu'
            ? '!pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="partnership-dropdown-menu"
        className={cn(
          'dropdown-menu dark:bg-background-6 shadow-14 border-stroke-1 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[640px] -translate-x-1/2 rounded-[20px] border bg-white p-4 opacity-0 transition-all duration-300',
          menuDropdownId === 'partnership-dropdown-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="flex gap-4">
          <ul className="flex-1 space-y-1">
            {leftColumnLinks.map((link) => (
              <PartnershipMenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
          <ul className="flex-1 space-y-1">
            {rightColumnLinks.map((link) => (
              <PartnershipMenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

PartnershipMenu.displayName = 'PartnershipMenu';
export default PartnershipMenu;
