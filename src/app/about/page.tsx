import AboutCTA from '@/components/about/CTA';
import AboutHero from '@/components/about/AboutHero';
import OurSuccess from '@/components/about/OurSuccess';
import Testimonial from '@/components/home/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About Mediatopia | Bristol Web Design & AI Consultancy',
  description: 'Meet Duncan Maund, founder of Mediatopia. 22+ years building websites, 3000+ projects delivered. Now specialising in Next.js, Sage 50 integrations, and AI automation.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <AboutHero />
      <OurSuccess />
      <Testimonial />
      <AboutCTA />
    </main>
  );
};

export default page;
