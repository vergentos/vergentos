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
  title: 'Vergentos: SaaS Development Agency, AI Tools & Dashboards',
  description: 'Vergentos is a SaaS development agency building bespoke platforms, AI tools, and data dashboards for ambitious founders. From MVP to production.',
  keywords: 'SaaS development agency, SaaS development company, build a SaaS, custom SaaS development, AI development agency, dashboard design agency',
  authors: [{ name: 'Vergentos', url: 'https://www.vergentos.com' }],
  creator: 'Vergentos',
  publisher: 'Vergentos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.vergentos.com',
    siteName: 'Vergentos',
    title: 'Vergentos: SaaS Development Agency for Modern Founders',
    description: 'SaaS development, AI integration, and dashboard design for ambitious founders. From MVP to production-grade engineering.',
    images: [
      {
        url: 'https://www.vergentos.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vergentos — SaaS Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vergentos: SaaS Development Agency for Modern Founders',
    description: 'SaaS development, AI tools, and dashboards for modern founders.',
    images: ['https://www.vergentos.com/images/og-image.png'],
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
