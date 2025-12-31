import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import duncanImg from '@public/images/duncan.jpeg';

const AboutHero = () => {
  return (
    <section className="pt-32 pb-14 md:pt-40 md:pb-16 lg:pt-44 lg:pb-20">
      <div className="main-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan">About Mediatopia</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1>Bristol-born. Globally trusted.</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                I am Duncan Maund, founder of Mediatopia. My career in web development spans over 22 years, starting at a major Somerset-based agency before acquiring the business and launching Mediatopia in August 2010 - right at the start of the credit crunch.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>
                Someone once told me that of 100 businesses starting at the same time, 90% would fail within the first year. Of those remaining, another 90% would be gone by year ten. Reaching our tenth anniversary put Mediatopia in the top 1% of companies that survive and thrive.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <p>
                This is not my first venture. I have built and run several web companies, developed an enterprise headless CMS on Symphony back in 2012, and delivered thousands of projects across UX design, SEO strategy, content architecture, and full-stack development. I excel across the entire digital spectrum because I have done it all, repeatedly, for over two decades.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <p>
                Today, Mediatopia is evolving again. We now specialise in high-performance Next.js platforms, bespoke Sage 50 API integrations, and AI-powered automation for businesses ready to scale. The technology changes, but the expertise and commitment to quality remain constant.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.7} className="w-full lg:w-1/2">
            <figure className="relative mx-auto max-w-[400px]">
              <Image
                src={duncanImg}
                alt="Duncan Maund - Founder of Mediatopia"
                className="rounded-2xl w-full"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

AboutHero.displayName = 'AboutHero';
export default AboutHero;
