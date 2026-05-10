'use client';

import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface PricingFeature {
  id: string;
  text: string;
  isActive: boolean;
}

interface PricingCard {
  id: string;
  title: string;
  description: string;
  isFeatured: boolean;
  features: PricingFeature[];
}

const pricingData: PricingCard[] = [
  {
    id: 'mvp-build',
    title: 'SaaS MVP Build',
    description: 'Launch-ready SaaS products engineered to validate quickly and scale cleanly.',
    isFeatured: false,
    features: [
      { id: 'lean-scope', text: 'Lean Scope Definition', isActive: true },
      { id: 'nextjs-build', text: 'Next.js & TypeScript Build', isActive: true },
      { id: 'auth-billing', text: 'Auth & Stripe Integration', isActive: true },
      { id: 'ux-design', text: 'Dashboard UI/UX Design', isActive: true },
    ],
  },
  {
    id: 'ai-platform',
    title: 'AI-Native SaaS Platform',
    description: 'Production AI agents, RAG, and intelligent automation embedded into your SaaS.',
    isFeatured: true,
    features: [
      { id: 'ai-impl', text: 'LLM Integration & Agents', isActive: true },
      { id: 'rag-build', text: 'Vector DB & RAG Pipelines', isActive: true },
      { id: 'workflow-eng', text: 'AI-Native Feature Engineering', isActive: true },
      { id: 'tech-strat', text: 'Cost Engineering & Eval Suites', isActive: true },
    ],
  },
  {
    id: 'scale-engineering',
    title: 'SaaS Scale Engineering',
    description: 'Architecture, performance, and security engineering for growth-stage SaaS platforms.',
    isFeatured: false,
    features: [
      { id: 'architecture', text: 'SaaS Architecture Consulting', isActive: true },
      { id: 'sso-auth', text: 'SSO & Multi-Tenant Auth', isActive: true },
      { id: 'analytics', text: 'Real-Time Analytics Dashboards', isActive: true },
      { id: 'performance', text: 'Performance & Migration', isActive: true },
    ],
  },
];

const Pricing = () => {
  return (
    <section className="relative overflow-hidden py-24 xl:py-[200px]">
      <div className="main-container space-y-[70px]">
        <div className="flex flex-col items-center text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-yellow-v2 mb-5">SaaS Engineering Pricing</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto mb-8 max-w-[750px]">SaaS Development & AI Engineering Pricing</h2>
          </RevealAnimation>
          <p className="mx-auto max-w-[872px]">
            Transparent fixed-price proposals for bespoke SaaS development, AI integration, and platform scale engineering. From MVP through to enterprise growth, every engagement is scoped, priced, and shipped against clear deliverables.
          </p>
        </div>
        <div className="relative">
          <div className="flex items-stretch gap-8 max-lg:flex-col">
            {pricingData.map((card, index) => (
              <RevealAnimation key={card.id} delay={0.4 + index * 0.2} className="flex flex-1">
                <div
                  className={cn(
                    'flex flex-col flex-1 rounded-[20px] max-lg:w-full',
                    card.isFeatured
                      ? "bg-[url('/images/ns-img-25.png')] bg-cover bg-center bg-no-repeat p-2.5"
                      : 'bg-background-3 dark:bg-background-7 w-full p-8',
                  )}>
                  <div className={cn('flex flex-col flex-1 justify-between', card.isFeatured && 'rounded-xl bg-white p-8 dark:bg-black')}>
                    <div>
                      <h3 className={cn('text-heading-5 font-normal', card.isFeatured ? 'mb-2.5' : 'mb-2')}>
                        {card.title}
                      </h3>
                      <p className="mb-6 max-w-[280px]">{card.description}</p>
                      
                      <ul className="relative list-none space-y-2.5 mb-8">
                        {card.features.map((feature) => (
                          <li key={feature.id} className="flex items-center gap-2.5">
                            <span className={cn('size-5 rounded-full flex items-center justify-center', feature.isActive ? 'bg-secondary dark:bg-accent' : 'dark:bg-background-9 bg-white')}>
                              <CheckIcon className={cn(feature.isActive ? 'dark:fill-secondary fill-white' : 'fill-secondary/60 dark:fill-accent/60')} />
                            </span>
                            <span className={cn('text-tagline-1 font-normal', feature.isActive ? 'text-secondary dark:text-accent' : 'text-secondary/60 dark:text-accent/60')}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact-us"
                      className={cn(
                        'btn btn-md block w-full text-center first-letter:uppercase before:content-none mt-auto',
                        card.isFeatured
                          ? 'btn-secondary dark:btn-accent hover:btn-primary'
                          : 'btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-accent',
                      )}>
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
