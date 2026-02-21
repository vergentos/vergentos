'use client';
import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import MenuCloseButton from './MenuCloseButton';
import MobileMenuItem from './MobileMenuItem';

export interface MobileMenuItem {
  id: string;
  label: string;
  href: string;
}

export interface MobileMenuGroup {
  id: string;
  title: string;
  submenu: MobileMenuItem[];
}

const MobileMenu = ({ menuData }: { menuData: MobileMenuGroup[] }) => {
  const { isOpen, closeMenu } = useMobileMenuContext();
  
  const handleLinkClick = () => {
    closeMenu();
  };
  
  return (
    <aside
      className={cn(
        'dark:bg-background-8 scroll-bar fixed top-0 right-0 z-[9999] h-screen w-full translate-x-full bg-white transition-all duration-300 sm:w-1/2 sm:rounded-t-2xl sm:rounded-l-3xl xl:hidden',
        isOpen ? 'translate-x-0 opacity-100 md:translate-x-[8%]' : 'translate-x-full opacity-0',
      )}>
      <div className="space-y-4 p-5 sm:p-8 lg:p-9">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={handleLinkClick}><span className="sr-only">AI Web Designers homepage</span><span className="text-lg font-bold text-secondary dark:text-accent"><span className="text-primary-500">AI</span> Web Designers</span></Link>
          <MenuCloseButton />
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 pt-4">
          <Link 
            href="/signup" 
            onClick={handleLinkClick}
            className="btn btn-primary btn-md flex-1 text-center">
            <span>Start Project</span>
          </Link>
          <a 
            href="tel:+441173326021" 
            onClick={handleLinkClick}
            className="btn btn-secondary btn-md flex-1 text-center">
            <span>Call Us</span>
          </a>
        </div>

        {/* menu items list */}
        <div className="scroll-bar mt-6 h-[70vh] w-full overflow-x-hidden overflow-y-auto pb-10">
          <p className="text-secondary dark:text-accent text-tagline-1 before:bg-stroke-4 dark:before:bg-stroke-6 relative mb-2 block font-normal before:absolute before:top-1/2 before:-right-16 before:h-px before:w-full before:-translate-y-1/2 before:content-['']">
            Menu
          </p>
          <ul className="space-y-2">
            {menuData.map((item) => (
              <MobileMenuItem key={item.id} id={item.id} title={item.title} hasSubmenu={item.submenu.length > 0}>
                <ul>
                  {item?.submenu?.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.href}
                        onClick={handleLinkClick}
                        className="text-tagline-1 text-secondary dark:text-accent ml-4 block py-2.5 text-left font-normal transition-all duration-200">
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </MobileMenuItem>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu;
