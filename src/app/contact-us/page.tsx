import ContactInfo from '@/components/contact-page/ContactInfo';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Vergentos | Hire a SaaS Development Agency',
  description: 'Talk to Vergentos about your SaaS project. Bespoke SaaS development, AI integration, and dashboard engineering for ambitious teams.',
  keywords: 'hire SaaS development agency, find a SaaS developer, hire SaaS engineers, SaaS development quote',
  authors: [{ name: 'Vergentos', url: 'https://www.vergentos.com' }],
  creator: 'Vergentos',
  publisher: 'Vergentos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.vergentos.com',
    siteName: 'Vergentos',
    title: 'Contact Vergentos | Hire a SaaS Development Agency',
    description: 'Talk to a senior SaaS engineering team about your bespoke platform, AI tool, or dashboard.',
    images: [
      {
        url: 'https://www.vergentos.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Vergentos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Vergentos | Hire a SaaS Development Agency',
    description: 'Hire a SaaS development agency for your project.',
    images: ['https://www.vergentos.com/images/og-image.png'],
  },
};

const ContactUs = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ContactInfo />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Prefer a Call?"
        ctaBtnText="Request Callback"
        ctaHeading="We'll call you back"
        description="Leave your number and we'll get back to you within 2 hours during business hours."
        inputType="tel"
        inputPlaceholder="Enter your phone number"
      />
    </main>
  );
};

export default ContactUs;
