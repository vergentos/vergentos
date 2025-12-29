'use client';
import { CareerIcon, ContactIcon, CustomersIcon, ProcessICon, TeamIcon, TestimonialIcon } from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import type { ComponentType } from 'react';
import PeopleAndCultureMenuLink from './PeopleAndCultureMenuLink';

type PeopleAndCultureLink = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType;
};

const leftColumnLinks: PeopleAndCultureLink[] = [
  {
    title: 'Technical Consultation',
    description: 'Book a strategic session with our lead consultant.',
    href: '/contact-us',
    icon: ProcessICon,
  },
  {
    title: 'Our Process',
    description: 'How we define requirements and deliver your project.',
    href: '/process',
    icon: TeamIcon,
  },
  {
    title: 'About Mediatopia',
    description: '20+ years of web engineering expertise in Bristol.',
    href: '/about',
    icon: CareerIcon,
  },
];

const rightColumnLinks: PeopleAndCultureLink[] = [
  {
    title: 'Client Support Portal',
    description: 'Dedicated access for our technical project partners.',
    href: '/support',
    icon: TestimonialIcon,
  },
  {
    title: 'Technical FAQs',
    description: 'Common questions about projects, costs, and timelines.',
    href: '/faq',
    icon: CustomersIcon,
  },
  {
    title: 'Contact Us',
    description: 'Get in touch to discuss your next project.',
    href: '/contact-us',
    icon: ContactIcon,
  },
];

const PeopleAndCultureMenu = ({
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
          'pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[640px] -translate-x-1/2 bg-transparent opacity-0',
          menuDropdownId === 'people-dropdown-menu'
            ? '!pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="people-dropdown-menu"
        className={cn(
          'dark:bg-background-6 shadow-14 border-stroke-1 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[640px] -translate-x-1/2 rounded-[20px] border bg-white p-4 opacity-0 transition-all duration-300',
          menuDropdownId === 'people-dropdown-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="flex gap-4">
          <ul className="flex-1 space-y-1">
            {leftColumnLinks.map((link) => (
              <PeopleAndCultureMenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
          <ul className="flex-1 space-y-1">
            {rightColumnLinks.map((link) => (
              <PeopleAndCultureMenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

PeopleAndCultureMenu.displayName = 'PeopleAndCultureMenu';
export default PeopleAndCultureMenu;
