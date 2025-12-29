'use client';
import { useLineExpandAnimation } from '@/hooks/useLineExpandAnimation';
import Image from 'next/image';
import { useRef } from 'react';
import RevealAnimation from '../../animation/RevealAnimation';
import LinkButton from '../../ui/button/LinkButton';

interface HeroSupportProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

const HeroSupport = ({ title, subtitle, badge }: HeroSupportProps) => {
  const lineExpandRef1 = useRef<HTMLDivElement>(null);
  const lineExpandRef2 = useRef<HTMLDivElement>(null);
  const lineExpandRef3 = useRef<HTMLDivElement>(null);
  const lineExpandRef4 = useRef<HTMLDivElement>(null);
  const lineExpandRef5 = useRef<HTMLDivElement>(null);
  const lineExpandRef6 = useRef<HTMLDivElement>(null);
  const lineExpandRef7 = useRef<HTMLDivElement>(null);
  const lineExpandRef8 = useRef<HTMLDivElement>(null);

  const refs = [
    lineExpandRef1,
    lineExpandRef2,
    lineExpandRef3,
    lineExpandRef4,
    lineExpandRef5,
    lineExpandRef6,
    lineExpandRef7,
    lineExpandRef8,
  ];
  useLineExpandAnimation({ refs });

  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-background-3 dark:bg-background-7 relative z-10 overflow-hidden pt-[150px] md:pt-[200px]">
        {/* Gradient lines background */}
        <RevealAnimation delay={0.5}>
          <figure className="max-w-[835px] w-full mx-auto absolute top-0 left-1/2 -translate-x-1/2 h-full flex items-start justify-between -z-10">
            <div ref={lineExpandRef1} className="w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
              <div className="gradient-line-1 w-px h-[92px] bg-linear-[180deg,#EC4899,#8B5CF6] absolute top-0 left-0" />
            </div>
            <div ref={lineExpandRef2} className="w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
              <div className="gradient-line-2 w-px h-[92px] bg-linear-[180deg,#8B5CF6,#EC4899] absolute top-0 left-0" />
            </div>
            <div ref={lineExpandRef3} className="w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
              <div className="gradient-line-3 w-px h-[92px] bg-linear-[180deg,#EC4899,#8B5CF6] absolute top-0 left-0" />
            </div>
            <div ref={lineExpandRef4} className="sm:block hidden w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
              <div className="gradient-line-4 w-px h-[92px] bg-linear-[180deg,#8B5CF6,#EC4899] absolute top-0 left-0" />
            </div>
            <div ref={lineExpandRef5} className="sm:block hidden w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
              <div className="gradient-line-5 w-px h-[92px] bg-linear-[180deg,#EC4899,#8B5CF6] absolute top-0 left-0" />
            </div>
            <div ref={lineExpandRef6} className="lg:block hidden w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
              <div className="gradient-line-6 w-px h-[92px] bg-linear-[180deg,#8B5CF6,#EC4899] absolute top-0 left-0" />
            </div>
            <div ref={lineExpandRef7} className="lg:block hidden w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
              <div className="gradient-line-7 w-px h-[92px] bg-linear-[180deg,#EC4899,#8B5CF6] absolute top-0 left-0" />
            </div>
            <div ref={lineExpandRef8} className="lg:block hidden w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
              <div className="gradient-line-8 w-px h-[92px] bg-linear-[180deg,#8B5CF6,#EC4899] absolute top-0 left-0" />
            </div>
          </figure>
        </RevealAnimation>

        <div className="main-container">
          <div>
            <div className="space-y-3 text-center md:space-y-4">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-primary">{badge || 'Technical Support'}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="mx-auto max-w-[350px] leading-[1.2] sm:max-w-[450px] md:max-w-[600px] xl:max-w-[846px]">
                  {title || 'Expert technical support when you need it'}
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[450px] sm:max-w-[600px] md:max-w-[700px]">
                  {subtitle || 'Dedicated UK-based support team providing rapid response times and expert guidance to keep your digital operations running smoothly.'}
                </p>
              </RevealAnimation>
            </div>
            <ul className="mt-8 mb-8 flex flex-col items-center justify-center gap-4 md:mt-14 md:mb-8 md:flex-row">
              <RevealAnimation delay={0.4} direction="left">
                <li className="w-full text-center sm:w-auto sm:text-left">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-lg md:btn-xl mx-auto w-[90%] md:mx-0 md:w-auto">
                    Get Support
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5} direction="left">
                <li className="w-full text-center sm:w-auto sm:text-left">
                  <LinkButton
                    href="/faq"
                    className="btn btn-white dark:btn-white-dark hover:btn-primary btn-lg md:btn-xl mx-auto w-[90%] md:mx-0 md:w-auto">
                    View FAQs
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
            <div className="pb-20 md:pb-[130px]">
              <RevealAnimation delay={0.6} instant={true}>
                <figure className="mx-auto w-full overflow-hidden rounded-t-2xl md:max-w-[640px] lg:max-w-[1240px]">
                  <Image
                    src="/images/ns-img-285.jpg"
                    alt="Support dashboard"
                    className="w-full dark:hidden"
                    width={1240}
                    height={800}
                  />
                  <Image
                    src="/images/ns-img-dark-194.jpg"
                    alt="Support dashboard"
                    className="hidden w-full dark:block"
                    width={1240}
                    height={800}
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

HeroSupport.displayName = 'HeroSupport';
export default HeroSupport;
