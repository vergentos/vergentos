import caseStudyImg from '@public/images/ns-img-380.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CaseStudy = () => {
  return (
    <section className="pt-32 pb-[20px] sm:pt-36 md:pt-42 lg:pb-[100px] xl:pt-[180px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="max-w-[900px] space-y-3">
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 md:text-heading-2 font-normal">Real results for ambitious UK businesses</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                From bespoke web platforms to AI-driven automation, we help Bristol and Southwest businesses 
                transform their digital presence. Explore how our technical expertise delivers measurable 
                commercial impact.
              </p>
            </RevealAnimation>
          </div>
          <div className="space-y-4">
            <RevealAnimation delay={0.4}>
              <h2 className="text-heading-4">Featured case study</h2>
            </RevealAnimation>
            <ul className="max-w-[435px] space-y-2">
              <RevealAnimation delay={0.5}>
                <li className="text-secondary dark:text-accent text-lg leading-[150%] font-medium">
                  Client:{' '}
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                    Sparks Transport
                  </span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="text-secondary dark:text-accent text-lg leading-[150%] font-medium">
                  Industry:{' '}
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                    Logistics & Haulage
                  </span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <li className="text-secondary dark:text-accent text-lg leading-[150%] font-medium">
                  Use case:{' '}
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                    Complete digital rebrand, website, photography & SEO
                  </span>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          <RevealAnimation delay={0.8}>
            <figure className="max-w-[1288px] overflow-hidden rounded-4xl">
              <Image
                src={caseStudyImg}
                alt="Sparks Transport website showcasing electric trucks and modern fleet"
                width={1290}
                height={800}
                className="h-full w-full object-cover"
              />
            </figure>
          </RevealAnimation>
          <div className="space-y-1">
            <RevealAnimation delay={0.1}>
              <h3 className="text-heading-4">The challenge</h3>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="max-w-[705px]">
                Sparks Transport had an outdated website that didn't reflect their modern fleet or commitment to 
                sustainability. They needed a complete digital transformation to attract new commercial clients 
                and showcase their investment in electric vehicles.
              </p>
            </RevealAnimation>
          </div>
          <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
            <div className="space-y-6">
              <div>
                <RevealAnimation delay={0.3}>
                  <h4 className="text-heading-4">The Solution</h4>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>Mediatopia delivered:</p>
                </RevealAnimation>
              </div>
              <ul className="space-y-2">
                <RevealAnimation delay={0.3}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Bespoke website design with careers portal and quote request system
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Professional photoshoot featuring their new electric truck fleet
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Sales brochure design and complete brand collateral refresh
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Full SEO strategy targeting Southwest logistics keywords
                    </p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
            <div className="space-y-6">
              <div>
                <RevealAnimation delay={0.3}>
                  <h4 className="text-heading-4">The results</h4>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>Within 6 months:</p>
                </RevealAnimation>
              </div>
              <ul className="space-y-2">
                <RevealAnimation delay={0.3}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      340% increase in organic search traffic
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Page 1 rankings for "Bristol haulage" and "Southwest logistics"
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      45+ qualified leads through the new quote request system
                    </p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
