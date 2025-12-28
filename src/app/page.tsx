import Counter from '@/components/home/Counter';
import Faq from '@/components/home/Faq';
import IntegrationCloud from '@/components/home/IntegrationCloud';
import AboutCTA from '@/components/home/CTA';
import Feature from '@/components/home/Feature';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import Pricing from '@/components/home/Pricing';
import Projects from '@/components/home/Projects';
import Services from '@/components/home/Services';
import Testimonial from '@/components/home/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Mediatopia | Bristol Web Engineering & AI Consultancy',
  description: 'High-performance Next.js development, Sage 50 API integrations, and bespoke AI solutions for ambitious UK brands.',
};

const Page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <Feature />
      <IntegrationCloud />
      <Services />
      <Integration />
      <Projects />
      <Counter />
      <Testimonial />
      <Pricing />
      <Faq />
      <AboutCTA />
    </main>
  );
};

export default Page;