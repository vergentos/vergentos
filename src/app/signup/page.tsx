import ProjectEnquiryForm from '@/components/authentication/ProjectEnquiryForm';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Start Your Project | Vergentos -  Web Engineering & AI Consultancy',
  description: 'Tell us about your project. Whether you need a website, SaaS application, AI automation, or Sage integration - get a free consultation with our  team.',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ProjectEnquiryForm />
    </main>
  );
};

export default page;
