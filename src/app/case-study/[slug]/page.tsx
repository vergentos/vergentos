import CaseStudyDetails from '@/components/case-study/CaseStudyDetails';
import CTA from '@/components/shared/cta/CTA';
import getMarkDownContent from '@/utils/getMarkDownContent';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const caseStudies = getMarkDownData('src/data/case-study');
  return caseStudies.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const caseStudy = getMarkDownContent('src/data/case-study/', slug);
  
  return {
    title: `${caseStudy.data.title} | Case Study | Vergentos`,
    description: caseStudy.data.excerpt?.substring(0, 155) || `${caseStudy.data.title} - See how Vergentos delivered results.`,
  };
}

interface CaseStudyDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const CaseStudyDetailsPage = async ({ params }: CaseStudyDetailsPageProps) => {
  const slug = (await params).slug;

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <CaseStudyDetails slug={slug} />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Get started"
        ctaHeading="Ready to be our next success story?"
        description="Let's discuss how we can deliver similar results for your business."
        ctaBtnText="Book a Consultation"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        inputType="tel"
        inputPlaceholder="Enter your phone number"
      />
    </main>
  );
};

CaseStudyDetailsPage.displayName = 'CaseStudyDetailsPage';
export default CaseStudyDetailsPage;
