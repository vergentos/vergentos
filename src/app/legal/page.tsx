import Content from '@/components/legal-notice/Content';
import Hero from '@/components/legal-notice/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Notice | Vergentos -  Web Engineering',
  description: 'Legal information for Vergentos including company details, intellectual property, and liability information.',
};

const page = () => {
  return (
    <main className="dark:bg-background-7 bg-white">
      <Hero />
      <Content />
    </main>
  );
};

export default page;
