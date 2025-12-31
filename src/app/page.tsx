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
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mediatopia | Bespoke Next.js & SaaS Development Bristol | 22 Years Experience',
  description: 'Bristol\'s trusted web engineering consultancy. High-performance Next.js applications, SaaS platforms, and AI automation. Serving Bristol, Bath & Somerset for 22 years.',
  keywords: 'Next.js development Bristol, SaaS development Bristol, web design Bristol, app development Bath, React development Somerset, AI automation Bristol',
  authors: [{ name: 'Mediatopia', url: 'https://mediatopia.agency' }],
  creator: 'Mediatopia',
  publisher: 'Mediatopia',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mediatopia.agency',
    siteName: 'Mediatopia',
    title: 'Mediatopia | Bespoke Next.js & SaaS Development Bristol',
    description: 'Bristol\'s trusted web engineering consultancy. High-performance Next.js applications, SaaS platforms, and AI automation for ambitious UK businesses.',
    images: [
      {
        url: 'https://mediatopia.agency/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mediatopia - Bristol Web Engineering & AI Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mediatopia | Bespoke Next.js & SaaS Development Bristol',
    description: 'Bristol\'s trusted web engineering consultancy. 22 years of excellence.',
    images: ['https://mediatopia.agency/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://mediatopia.agency',
  },
  other: {
    'geo.region': 'GB-BST',
    'geo.placename': 'Bristol',
    'geo.position': '51.4545;-2.5879',
    'ICBM': '51.4545, -2.5879',
  },
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
