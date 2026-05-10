import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogPaginationWrapper from './BlogPaginationWrapper';

const BlogShowcase = () => {
  const blogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs');
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>
              Latest <span className="text-primary-500 inline-block">articles</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[738px]">
              Practical insights on SaaS development, AI agent engineering, RAG implementation, and dashboard design from the Vergentos engineering team.
            </p>
          </RevealAnimation>
        </div>

        {/* Blog grid with pagination wrapper */}
        <BlogPaginationWrapper blogs={blogs} />
      </div>
    </section>
  );
};

BlogShowcase.displayName = 'BlogShowcase';
export default BlogShowcase;
