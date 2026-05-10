import feature1 from '@public/images/ns-img-175.png';
import feature2 from '@public/images/ns-img-176.png';
import feature3 from '@public/images/ns-img-177.png';
import feature4 from '@public/images/ns-img-178.png';
import feature1Dark from '@public/images/ns-img-dark-119.png';
import feature2Dark from '@public/images/ns-img-dark-120.png';
import feature3Dark from '@public/images/ns-img-dark-121.png';
import feature4Dark from '@public/images/ns-img-dark-122.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Feature = () => {
  return (
    <section className="bg-white pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[100px] xl:pb-[100px] dark:bg-black">
      <div className="main-container">
        <div className="mx-auto mb-10 max-w-[750px] space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Our Expertise</span>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3">SaaS engineering that ships and scales.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/60 dark:text-accent/60 mx-auto max-w-[600px]">
                From MVP development to AI-native features and production dashboards, Vergentos delivers the engineering depth ambitious SaaS founders need to outpace the competition.
              </p>
            </RevealAnimation>
          </div>
        </div>
        {/* feature Items */}
        <div className="mb-10 grid grid-cols-12 gap-8 xl:mb-18">
          <RevealAnimation delay={0.5} className="col-span-12 md:col-span-6 lg:col-span-8">
            <div className="bg-background-3 dark:bg-background-7 space-y-6 rounded-[20px] p-8">
              <div className="space-y-2">
                <h3 className="text-heading-5 max-sm:text-heading-6">SaaS MVP & Platform Development.</h3>
                <p className="max-w-[450px]">
                  We build production-grade SaaS platforms from MVP through to scale, with proper auth, billing, and infrastructure foundations engineered to handle real customer load from day one.
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature1}
                  alt="SaaS MVP and platform development"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="hidden w-full rounded-2xl object-cover dark:block"
                />
                <Image
                  src={feature1Dark}
                  alt="SaaS MVP and platform development"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="block w-full rounded-2xl object-cover dark:hidden"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6} className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-background-3 dark:bg-background-7 space-y-6 rounded-[20px] p-8 h-full">
              <div className="space-y-2">
                <h3 className="text-heading-5 max-sm:text-heading-6">AI Integration & Agents.</h3>
                <p className="max-w-[220px]">Embed LLMs, AI agents, and RAG into your SaaS with cost-engineered architectures built for production scale.</p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature2}
                  alt="AI integration and agent development"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="block w-full rounded-2xl object-cover dark:hidden"
                />
                <Image
                  src={feature2Dark}
                  alt="AI integration and agent development"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="hidden w-full rounded-2xl object-cover dark:block"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7} className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="bg-background-3 dark:bg-background-7 space-y-6 rounded-[20px] p-8 h-full">
              <div className="space-y-2">
                <h3 className="text-heading-5 max-sm:text-heading-6">SaaS Dashboard Design.</h3>
                <p>Beautiful, fast, data-dense dashboards engineered for activation, retention, and the daily-use habit that defines great SaaS.</p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature3}
                  alt="SaaS dashboard design"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="block w-full rounded-2xl object-cover dark:hidden"
                />
                <Image
                  src={feature3Dark}
                  alt="SaaS dashboard design"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="hidden w-full rounded-2xl object-cover dark:block"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8} className="col-span-12 md:col-span-6 lg:col-span-8">
            <div className="bg-background-3 dark:bg-background-7 space-y-6 rounded-[20px] p-8">
              <div className="max-w-[285px] space-y-2">
                <h3 className="text-heading-5 max-sm:text-heading-6">Stripe Billing & Authentication.</h3>
                <p className="max-w-[311px]">
                  Production Stripe integration with subscriptions and dunning, plus multi-tenant authentication and SSO that unlocks enterprise contracts and protects revenue at scale.
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature4}
                  alt="Stripe billing and authentication systems"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="block h-full w-full rounded-2xl object-cover dark:hidden"
                />
                <Image
                  src={feature4Dark}
                  alt="Stripe billing and authentication systems"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="hidden h-full w-full rounded-2xl object-cover dark:block"
                />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Feature;
