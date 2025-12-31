'use client';
import { AboutIcon, BlogIcon, FeatureIcon, ServiceIcon } from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import nsImg419 from '@public/images/web-hosting.svg';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentType } from 'react';
import CompanyMenuLink from './CompanyMenuLink';

type CompanyLink = {
  title: string;
  description: string;
  href: string;
  icon: ComponentType;
};

const companyLinks: CompanyLink[] = [
  {
    title: 'Bespoke Consultancy',
    description: 'Expert digital strategy to align technical infrastructure with commercial growth.',
    href: '/services/bespoke-consultancy',
    icon: AboutIcon,
  },
  {
    title: 'Web Engineering',
    description: 'High-performance Next.js and React development for ambitious UK brands.',
    href: '/services/nextjs-react',
    icon: ServiceIcon,
  },
  {
    title: 'Our Technical Process',
    description: 'From discovery to deployment, how we engineer your digital future.',
    href: '/process',
    icon: FeatureIcon,
  },
  {
    title: 'Case Studies',
    description: 'Commercial success stories from our high-end technical project partners.',
    href: '/case-study',
    icon: BlogIcon,
  },
];

const CompanyMenu = ({
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
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[692px] -translate-x-1/2 bg-transparent',
          menuDropdownId === 'company-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="company-mega-menu"
        className={cn(
          'dropdown-menu dark:bg-background-6 border-stroke-1 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 flex w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-4 opacity-0 transition-all duration-300 md:w-[692px] md:gap-x-8',
          menuDropdownId === 'company-mega-menu'
            ? '!pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <ul className="w-full space-y-2 md:max-w-[284px]">
          {companyLinks.map((link) => (
            <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
          ))}
        </ul>
        <figure className="flex-1 space-y-3">
          <p className="text-tagline-2 text-[#6b7280] dark:text-[#9ca3af] font-medium">Featured Solution</p>
          <Link href="/services/secure-uk-hosting" className="block">
            <figure className="group relative min-h-[272px] w-full max-w-full overflow-hidden rounded-[14px]">
              <Image
                src={nsImg419}
                alt="Managed UK Web Hosting"
                className="h-full w-full rounded-[14px] object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
              />
            </figure>
          </Link>
        </figure>
      </div>
    </div>
  );
};

CompanyMenu.displayName = 'CompanyMenu';
export default CompanyMenu;
