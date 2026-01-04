import BlogContent from '@/components/blog-details/BlogContent';
import CTA from '@/components/shared/cta/CTA';
import getMarkDownContent from '@/utils/getMarkDownContent';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const blogs = getMarkDownData('src/data/blogs');
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const blog = getMarkDownContent('src/data/blogs/', slug);
  
  return {
    title: `${blog.data.title} | Mediatopia Bristol`,
    description: blog.data.excerpt?.substring(0, 155) || `Read ${blog.data.title} on the Mediatopia blog.`,
  };
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
        description="Book a free consultation with our Bristol team. No obligation, just expert advice."
        ctaBtnText="Book a Call"
        inputType="tel"
        inputPlaceholder="Enter your phone number"
      />
    </main>
  );
};

export default page;
