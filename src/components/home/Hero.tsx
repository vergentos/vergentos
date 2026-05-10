import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import GradientAnimation from './GradientAnimation';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[150px] md:pt-[190px] lg:pt-[230px] pb-[100px]">
      {/* Animated gradient lines background */}
      <RevealAnimation delay={0.6} offset={0}>
        <figure className="absolute top-0 left-1/2 z-0 h-full w-full max-w-[1390px] -translate-x-1/2 opacity-30">
          <GradientAnimation />
        </figure>
      </RevealAnimation>
      
      <div className="main-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-secondary">SaaS Development · AI Integration · Dashboard Design</span>
            </RevealAnimation>
            
            <h1 className="text-heading-3 lg:text-heading-1">
              Build Your <span className="text-primary-500">SaaS, AI Tool, or Dashboard</span> with Vergentos
            </h1>
            
            <RevealAnimation delay={0.3}>
              <p className="text-lg max-w-[540px] text-[#6b7280] dark:text-[#9ca3af]">
                Vergentos is a SaaS development agency for founders who mean business. We build bespoke SaaS platforms, AI tools, and data dashboards — from MVP to production-grade. Fast to ship. Built to scale. AI-native by default.
              </p>
            </RevealAnimation>
            
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <LinkButton href="/signup" className="btn btn-xl btn-primary">
                  Start Your Project
                </LinkButton>
                <LinkButton href="/case-study" className="btn btn-xl btn-white dark:btn-white-dark">
                  View Case Studies
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          
          {/* Right side - Dashboard image */}
          <div className="relative">
              {/* Browser frame */}
              <div className="bg-secondary dark:bg-background-6 rounded-[20px] overflow-hidden shadow-2xl border border-stroke-1 dark:border-stroke-7">
                {/* Browser header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-stroke-1 dark:border-stroke-7">
                  <div className="flex gap-1.5">
                    <span className="size-3 rounded-full bg-red-500"></span>
                    <span className="size-3 rounded-full bg-yellow-500"></span>
                    <span className="size-3 rounded-full bg-green-500"></span>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-background-3 dark:bg-background-7 rounded-md px-3 py-1 text-xs text-[#374151] dark:text-[#d1d5db]">
                      aisalesvoice.com
                    </div>
                  </div>
                </div>
                {/* Screenshot */}
                <Image
                  src="/images/case-study-ai-sales-voice.png"
                  alt="AI Sales Voice — Next.js SaaS platform built by Vergentos"
                  width={800}
                  height={500}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full object-cover"
                />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
