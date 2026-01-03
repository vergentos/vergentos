'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

const MobileActionSheet = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasShown, setHasShown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    setIsMobile(window.innerWidth < 1024);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show on scroll up after scrolling down at least 500px
      // Only show once per session
      if (!hasShown && currentScrollY > 500 && currentScrollY < lastScrollY - 50) {
        setIsVisible(true);
        setHasShown(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, hasShown, isMobile]);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isMobile) return null;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-[9998] transform transition-transform duration-300 ease-out lg:hidden',
        isVisible ? 'translate-y-0' : 'translate-y-full'
      )}>
      {/* Backdrop */}
      {isVisible && (
        <div 
          className="fixed inset-0 bg-black/40 -z-10"
          onClick={handleDismiss}
        />
      )}
      
      {/* Action Sheet */}
      <div className="bg-white dark:bg-background-8 rounded-t-[20px] shadow-2xl p-6 pb-8">
        {/* Handle bar */}
        <div className="flex justify-center mb-4">
          <div className="w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
        </div>
        
        {/* Title */}
        <p className="text-center text-secondary dark:text-accent font-medium mb-4">
          Ready to discuss your project?
        </p>
        
        {/* Buttons */}
        <div className="flex gap-3">
          <Link 
            href="/signup" 
            onClick={handleDismiss}
            className="btn btn-primary btn-md flex-1 text-center">
            <span>Start Project</span>
          </Link>
          <a 
            href="tel:+441173326021" 
            onClick={handleDismiss}
            className="btn btn-secondary btn-md flex-1 text-center">
            <span>Call Us</span>
          </a>
        </div>
        
        {/* Dismiss link */}
        <button 
          onClick={handleDismiss}
          className="w-full text-center text-sm text-[#6b7280] dark:text-[#9ca3af] mt-4 py-2">
          Maybe later
        </button>
      </div>
    </div>
  );
};

export default MobileActionSheet;
