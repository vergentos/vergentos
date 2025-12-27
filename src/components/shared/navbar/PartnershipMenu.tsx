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

const partnershipLinks: PartnershipLink[] = [
  {
    title: 'Technical Blog',
    description: 'Expert insights on Next.js, AI automation, and digital engineering.',
    href: '/affiliates',
    icon: AffiliateIcon,
  },
  {
    title: 'Commercial Case Studies',
    description: 'Invite friends',
    href: '/referral-program',
    icon: ReferralProgramIcon,
  },
  {
    title: 'Technical FAQs',
    description: 'Direct answers to your common project, cost, and hosting questions.',
    href: '/login',
    icon: LoginIcon,
  },
  {
    title: 'Sage 50 Integration Guide',
    description: 'How to automate your workflows with custom API synchronisation.',
    href: '/signup',
    icon: SignUpIcon,
  },
  {
    title: 'AI for UK Business',
    description: 'Harnessing private LLM models for operational efficiency.',
    href: '/download',
    icon: DownloadIcon,
  },
  {
    title: 'Consultancy Knowledge Base',
    description: 'Explore our full library of technical resources and whitepapers.',
    href: '/integration',
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
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[320px] -translate-x-1/2 bg-transparent opacity-0 transition-all duration-300',
          menuDropdownId === 'partnership-dropdown-menu'
            ? '!pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      />
      <ul
        id="partnership-dropdown-menu"
        className={cn(
          'dropdown-menu dark:bg-background-6 shadow-14 border-stroke-1 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[320px] -translate-x-1/2 rounded-[20px] border bg-white p-2 opacity-0 transition-all duration-300',
          menuDropdownId === 'partnership-dropdown-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        {partnershipLinks.map((link) => (
          <PartnershipMenuLink key={link.title} {...link} onClose={handleClose} />
        ))}
      </ul>
    </div>
  );
};

PartnershipMenu.displayName = 'PartnershipMenu';
export default PartnershipMenu;
