import heroPattern from '@public/images/ns-img-42.png';
import heroImg from '@public/images/ns-img-43.png';
import heroChart from '@public/images/ns-img-44.png';
import heroChartDark from '@public/images/ns-img-dark-23.png';
import Image from 'next/image';
import RevealAnimation from '../../animation/RevealAnimation';
import LinkButton from '../../ui/button/LinkButton';

interface HeroHostingProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

const HeroHosting = ({ title, subtitle, badge }: HeroHostingProps) => {
  return (
    <section className="relative overflow-hidden pt-[180px] pb-[200px] sm:pt-[100px] 2xl:pt-[264px]">
      <RevealAnimation delay={0.1} direction={'right'} offset={100}>
        <figure className="absolute top-0 right-0 z-[1] size-[882px]">
          <Image src={heroPattern} alt="decorative pattern" className="h-full w-full object-cover" />
        </figure>
      </RevealAnimation>
      <div className="main-container">
        <div className="grid grid-cols-12 items-start">
          <div className="col-span-12 xl:col-span-6">
            <div className="relative z-[1] text-center xl:text-left">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-primary">{badge || 'Managed Infrastructure'}</span>
              </RevealAnimation>
              <div className="mx-auto mt-5 mb-14 max-w-[800px] space-y-4 xl:mx-0 xl:max-w-full">
                <RevealAnimation delay={0.2}>
                  <h1>{title || 'Enterprise UK Hosting'}</h1>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[500px]">
                    {subtitle || 'Mission-critical server architecture with enterprise-grade security and 24/7 technical support for ambitious UK businesses.'}
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
                  <LinkButton 
                    href="/contact-us" 
                    className="btn btn-xl btn-primary hover:btn-secondary dark:hover:btn-accent">
                    Get a Quote
                  </LinkButton>
                  <LinkButton 
                    href="/services" 
                    className="btn btn-xl btn-white dark:btn-white-dark">
                    View All Services
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <div className="relative z-[1] col-span-12 xl:col-span-6">
            <figure className="relative mx-auto mt-12 max-w-[679px] xl:mx-0 xl:-mt-20">
              <RevealAnimation delay={0.5} direction="up">
                <Image src={heroImg} alt="Server infrastructure illustration" className="h-full w-full" />
              </RevealAnimation>
              <RevealAnimation delay={0.6} direction="right" offset={50}>
                <div className="absolute mx-auto max-h-[192px] w-full max-w-[370px] rounded-[20px] bg-white p-10 max-xl:right-0 max-xl:-bottom-28 max-xl:left-0 2xl:right-0 2xl:-bottom-28 dark:bg-black shadow-lg">
                  <figure>
                    <Image src={heroChart} alt="Performance metrics" className="block h-full w-full dark:hidden" />
                    <Image src={heroChartDark} alt="Performance metrics" className="hidden h-full w-full dark:block" />
                  </figure>
                </div>
              </RevealAnimation>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroHosting.displayName = 'HeroHosting';
export default HeroHosting;
