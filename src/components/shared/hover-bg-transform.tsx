import { cn } from '@/utils/cn';

const HoverBgTransform = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[10px] opacity-0 transition-all duration-300 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10',
        className,
      )}
    />
  );
};

HoverBgTransform.displayName = 'HoverBgTransform';
export default HoverBgTransform;
