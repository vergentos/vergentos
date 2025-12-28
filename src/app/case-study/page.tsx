import CaseStudy from '@/components/case-study/CaseStudy';
import Success from '@/components/case-study/Success';
import Feature from '@/components/case-study/Feature';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Case Studies | Bristol Web Design & AI Projects | Mediatopia.agency',
  description: 'Explore our portfolio of web development, Sage 50 integrations, and AI automation projects. Real results for ambitious UK businesses.',
};

const CaseStudyPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <CaseStudy />
      <Success />
      <Feature />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="!badge-yellow-v2"
        badgeText="Start Your Project"
        ctaHeading="Ready to become our next success story?"
        description="Book a free consultation and let's discuss how we can transform your business."
        ctaBtnText="Book a Call"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        inputType="tel"
        inputPlaceholder="Enter your phone number"
      />
    </main>
  );
};
CaseStudyPage.displayName = 'CaseStudyPage';
export default CaseStudyPage;
