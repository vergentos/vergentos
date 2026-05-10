import BlogShowcase from '@/components/blog/BlogShowcase';
import FeaturedBlog from '@/components/blog/FeaturedBlog';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights | SaaS Development, AI & Dashboard Engineering',
  description: 'Insights on SaaS development, AI integration, and dashboard engineering from the Vergentos team. Practical guidance for founders.',
  keywords: 'SaaS development insights, AI engineering blog, dashboard design articles',
  authors: [{ name: 'Vergentos', url: 'https://www.vergentos.com' }],
  creator: 'Vergentos',
  publisher: 'Vergentos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.vergentos.com',
    siteName: 'Vergentos',
    title: 'Insights | Vergentos',
    description: 'Practical insights on SaaS development, AI, and dashboard engineering.',
    images: [
      {
        url: 'https://www.vergentos.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vergentos Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights | Vergentos',
    description: 'SaaS development, AI, and dashboard engineering insights.',
    images: ['https://www.vergentos.com/images/og-image.png'],
  },
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <FeaturedBlog />
      <BlogShowcase />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="!badge-yellow-v2"
        badgeText="Start Your Project"
        ctaHeading="Ready to discuss your technical challenge?"
        description="Book a free consultation with our  team. No obligation, just expert advice."
        ctaBtnText="Book a Call"
        inputType="tel"
        inputPlaceholder="Enter your phone number"
      />
    </main>
  );
};

export default page;
