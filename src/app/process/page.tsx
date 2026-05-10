import ProcessOperation from '@/components/process/ProcessOperation';
import ProcessStep from '@/components/process/ProcessStep';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our SaaS Development Process | From MVP to Production',
  description: 'How Vergentos builds SaaS products. Lean MVP development, iterative sprints, production-grade foundations. From validation to scale.',
  keywords: 'SaaS MVP development, SaaS development process, build a SaaS, SaaS engineering methodology',
  authors: [{ name: 'Vergentos', url: 'https://www.vergentos.com' }],
  creator: 'Vergentos',
  publisher: 'Vergentos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.vergentos.com',
    siteName: 'Vergentos',
    title: 'SaaS Development Process | Vergentos',
    description: 'How we build SaaS products. From MVP validation to production scale, with iterative sprints and senior engineering.',
    images: [
      {
        url: 'https://www.vergentos.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vergentos SaaS Development Process',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Development Process | Vergentos',
    description: 'How Vergentos builds SaaS products from MVP to production.',
    images: ['https://www.vergentos.com/images/og-image.png'],
  },
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ProcessStep />
      <ProcessOperation />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeText="Start Your Project"
        badgeClass="!badge-cyan-v2"
        ctaHeading="Ready to engineer your digital future?"
        description="Book a free technical consultation with our  team. No obligation, just expert advice."
        ctaBtnText="Book a Call"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        inputType="tel"
        inputPlaceholder="Enter your phone number"
      />
    </main>
  );
};

export default page;
