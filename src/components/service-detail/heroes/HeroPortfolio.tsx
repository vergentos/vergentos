'use client';

import { useLineExpandAnimation } from '@/hooks/useLineExpandAnimation';
import Image from 'next/image';
import { useRef } from 'react';
import RevealAnimation from '../../animation/RevealAnimation';
import GradientAnimation from '../../home/GradientAnimation';
import LinkButton from '../../ui/button/LinkButton';

interface HeroPortfolioProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

const HeroPortfolio = ({ title, subtitle, badge }: HeroPortfolioProps) => {
  const lineExpandRef1 = useRef<HTMLDivElement>(null);
  const lineExpandRef2 = useRef<HTMLDivElement>(null);
  const lineExpandRef3 = useRef<HTMLDivElement>(null);
  const lineExpandRef4 = useRef<HTMLDivElement>(null);
  const lineExpandRef5 = useRef<HTMLDivElement>(null);
  const lineExpandRef6 = useRef<HTMLDivElement>(null);

  const refs = [lineExpandRef1, lineExpandRef2, lineExpandRef3, lineExpandRef4, lineExpandRef5, lineExpandRef6];
  useLineExpandAnimation({ refs });

  return (
    <section className="relative overflow-hidden pt-[150px] pb-16 lg:pt-[234px] lg:pb-[100px]" id="hero">
      {/* Animated gradient lines background */}
      <RevealAnimation delay={0.6} offset={0}>
        <figure className="absolute top-0 left-1/2 z-0 h-full w-full max-w-[1390px] -translate-x-1/2 opacity-30">
          <GradientAnimation />
        </figure>
      </RevealAnimation>

      {/* Line expand background */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 h-full max-w-[1290px] flex justify-between lg:gap-[239px] sm:gap-[200px] gap-[150px]">
        <div
          ref={lineExpandRef1}
          className="lp:block hidden w-px h-0 bg-linear-[180deg,#DFE4EB_0%,#dfe4eb00_100%] dark:bg-linear-[180deg,#2A333E_0%,#2a333e00_100%]"
        />
        <div
          ref={lineExpandRef2}
          className="lp:block hidden w-px h-0 bg-linear-[180deg,#DFE4EB_0%,#dfe4eb00_100%] dark:bg-linear-[180deg,#2A333E_0%,#2a333e00_100%]"
        />
        <div
          ref={lineExpandRef3}
          className="lg:block hidden w-px h-0 bg-linear-[180deg,#DFE4EB_0%,#dfe4eb00_100%] dark:bg-linear-[180deg,#2A333E_0%,#2a333e00_100%]"
        />
        <div
          ref={lineExpandRef4}
          className="w-px h-0 bg-linear-[180deg,#DFE4EB_0%,#dfe4eb00_100%] dark:bg-linear-[180deg,#2A333E_0%,#2a333e00_100%]"
        />
        <div
          ref={lineExpandRef5}
          className="w-px h-0 bg-linear-[180deg,#DFE4EB_0%,#dfe4eb00_100%] dark:bg-linear-[180deg,#2A333E_0%,#2a333e00_100%]"
        />
        <div
          ref={lineExpandRef6}
          className="w-px h-0 bg-linear-[180deg,#DFE4EB_0%,#dfe4eb00_100%] dark:bg-linear-[180deg,#2A333E_0%,#2a333e00_100%]"
        />
      </div>

      <div className="main-container relative z-10 mb-[100px]">
        <div className="space-y-14 text-center">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary">{badge || 'Web Engineering'}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="mx-auto w-full max-w-[886px]">
                {title || 'Design that tells stories, code that connects'}
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto w-full max-w-[700px]">
                {subtitle || 'Bespoke web engineering and development that combines stunning aesthetics with high-performance code to create digital experiences that drive results.'}
              </p>
            </RevealAnimation>
          </div>
          <ul className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <RevealAnimation delay={0.4} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/case-study"
                  className="btn dark:btn-accent btn-md md:btn-xl btn-primary hover:btn-secondary dark:hover:btn-white-dark w-[90%] md:w-auto">
                  View Our Work
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5} direction="left" offset={60}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/contact-us"
                  className="btn hover:btn-primary btn-md md:btn-xl btn-white dark:btn-white-dark dark:hover:btn-accent w-[90%] md:w-auto">
                  Start a Project
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>
        </div>
      </div>

      {/* Scrolling image gallery */}
      <RevealAnimation delay={0.2} offset={90}>
        <div className="relative z-10">
          <div className="scroll-bar flex items-center justify-center gap-4 overflow-x-hidden overflow-y-auto">
            <figure className="ml-4 max-h-[380px] w-full min-w-[257px] overflow-hidden rounded-[20px]">
              <Image src="/images/portfolio-1.png" width={257} height={380} className="h-full w-full object-cover" alt="ACS Compressors website" />
            </figure>
            <figure className="max-h-[380px] w-full min-w-[257px] overflow-hidden rounded-[20px]">
              <Image src="/images/portfolio-2.png" width={257} height={380} className="h-full w-full object-cover" alt="Chongz headshop website" />
            </figure>
            <figure className="max-h-[380px] w-full min-w-[257px] overflow-hidden rounded-[20px]">
              <Image src="/images/portfolio-3.png" width={257} height={380} className="h-full w-full object-cover" alt="Priority Logistics website" />
            </figure>
            <figure className="max-h-[380px] w-full min-w-[500px] md:min-w-[950px] overflow-hidden rounded-[20px]">
              <Image src="/images/portfolio-4.png" width={950} height={380} className="h-full w-full object-cover" alt="Sparks Transport website" />
            </figure>
            <figure className="max-h-[380px] w-full min-w-[257px] overflow-hidden rounded-[20px]">
              <Image src="/images/portfolio-5.png" width={257} height={380} className="h-full w-full object-cover" alt="S Morris Concrete website" />
            </figure>
            <figure className="max-h-[380px] w-full min-w-[257px] overflow-hidden rounded-[20px]">
              <Image src="/images/portfolio-6.png" width={257} height={380} className="h-full w-full object-cover" alt="The Homesearch website" />
            </figure>
            <figure className="max-h-[380px] w-full min-w-[257px] overflow-hidden rounded-[20px]">
              <Image src="/images/portfolio-7.png" width={257} height={380} className="h-full w-full object-cover" alt="Wild Leisure website" />
            </figure>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

HeroPortfolio.displayName = 'HeroPortfolio';
export default HeroPortfolio;
