import ProjectEnquiryForm from '@/components/authentication/ProjectEnquiryForm';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start Your SaaS Project | Vergentos',
  description: 'Begin your SaaS development project with Vergentos. Bespoke engineering, AI integration, and dashboard design for ambitious founders.',
  keywords: 'start SaaS project, SaaS development quote, hire SaaS developers',
  authors: [{ name: 'Vergentos', url: 'https://www.vergentos.com' }],
  creator: 'Vergentos',
  publisher: 'Vergentos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.vergentos.com',
    siteName: 'Vergentos',
    title: 'Start Your SaaS Project | Vergentos',
    description: 'Bespoke SaaS engineering for ambitious founders. Get a fixed-price proposal.',
    images: [
      {
        url: 'https://www.vergentos.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Start a SaaS Project with Vergentos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start Your SaaS Project | Vergentos',
    description: 'Begin your SaaS development project with Vergentos.',
    images: ['https://www.vergentos.com/images/og-image.png'],
  },
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ProjectEnquiryForm />
    </main>
  );
};

export default page;
