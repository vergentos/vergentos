import PrivacyContent from '@/components/privacy/PrivacyContent';
import CTA from '@/components/shared/cta/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vergentos',
  description: 'How Vergentos collects, uses, and protects your data when you use our website and services.',
  keywords: 'Vergentos privacy policy, data protection',
  authors: [{ name: 'Vergentos', url: 'https://www.vergentos.com' }],
  creator: 'Vergentos',
  publisher: 'Vergentos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.vergentos.com',
    siteName: 'Vergentos',
    title: 'Privacy Policy | Vergentos',
    description: 'Vergentos privacy policy for website and services.',
    images: [
      {
        url: 'https://www.vergentos.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vergentos Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Vergentos',
    description: 'Vergentos privacy policy.',
    images: ['https://www.vergentos.com/images/og-image.png'],
  },
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <PrivacyContent />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Get In Touch"
        ctaHeading="Ready to discuss your project?"
        description="Contact us for a free consultation and fixed-price quote."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Contact us"
      />
    </main>
  );
};

export default page;
