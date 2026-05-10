import BlogContent from '@/components/blog-details/BlogContent';
import CTA from '@/components/shared/cta/CTA';
import getMarkDownContent from '@/utils/getMarkDownContent';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

const noindexSlugs = [
  'complete-guide-sage-50-woocommerce-integration',
  'designing-your-ecommerce-website',
  'how-much-does-a-website-cost-per-month',
  'how-to-find-out-what-search-terms-people-use',
  'how-we-achieved-340-percent-traffic-growth-sparks-transport',
  'seo-structured-data-schema-markup-guide',
  'what-is-google-looking-for-on-your-website',
  'types-of-websites',
  'uk-website-development-costs',
  'what-is-the-price-of-redesigning-a-website',
  'which-colours-should-i-use-for-my-website-and-why',
  'why-responsive-design-matters-for-small-business',
  'why-website-design-and-development-is-important',
  'what-is-sage-ecommerce',
];

export async function generateStaticParams() {
  const blogs = getMarkDownData('src/data/blogs');
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const blog = getMarkDownContent('src/data/blogs/', slug);

  const metadata: Metadata = {
    title: `${blog.data.title} | Vergentos`,
    description: blog.data.excerpt?.substring(0, 155) || `Read ${blog.data.title} on the Vergentos blog.`,
  };

  if (noindexSlugs.includes(slug)) {
    metadata.robots = { index: false, follow: false };
  }

  return metadata;
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const blogContent = getMarkDownContent('src/data/blogs/', slug);

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <BlogContent blog={blogContent} />
      <CTA
        className="dark:bg-background-7 bg-white"
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
