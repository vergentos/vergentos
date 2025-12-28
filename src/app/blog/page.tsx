import BlogShowcase from '@/components/blog/BlogShowcase';
import FeaturedBlog from '@/components/blog/FeaturedBlog';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Technical Blog | Web Development & AI Insights | Mediatopia.agency',
  description: 'Expert insights on Next.js development, Sage 50 integrations, AI automation, and web engineering from our Bristol-based technical team.',
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
        description="Book a free consultation with our Bristol team. No obligation, just expert advice."
        ctaBtnText="Book a Call"
        inputType="tel"
        inputPlaceholder="Enter your phone number"
      />
    </main>
  );
};

export default page;
