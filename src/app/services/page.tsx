import CTA from '@/components/shared/cta/CTA';
import { Metadata } from 'next';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';

export const metadata: Metadata = {
  title: 'Web Development & AI Services Bristol | Mediatopia',
  description: 'Bespoke Next.js development, Sage 50 API integration, AI automation, and e-commerce solutions. Bristol\'s trusted technical consultancy for 22 years.',
  keywords: 'Next.js development Bristol, Sage 50 integration, AI automation Bristol, web development Bath, e-commerce Somerset',
  openGraph: {
    locale: 'en_GB',
    type: 'website',
    title: 'Web Development & AI Services | Mediatopia Bristol',
    description: 'Bespoke Next.js development, Sage 50 API integration, and AI automation for ambitious UK businesses.',
  },
};

const coreServices = [
  {
    slug: 'next-js-react-development',
    title: 'Next.js & React Development',
    description: '10x faster than WordPress. Server-side rendering, edge deployment, and component architecture built for scale.',
    badge: 'Core Platform',
    icon: 'ns-shape-8',
  },
  {
    slug: 'sage-50-api-integration',
    title: 'Sage 50 API Integration',
    description: 'Real-time invoice sync, stock management, and payment reconciliation. Eliminate manual data entry entirely.',
    badge: 'Automation',
    icon: 'ns-shape-19',
  },
  {
    slug: 'ai-implementation',
    title: 'AI & Automation',
    description: 'LLM integration, voice agents, and intelligent workflows. Transform customer interactions with AI.',
    badge: 'AI',
    icon: 'ns-shape-35',
  },
  {
    slug: 'ecommerce-development',
    title: 'E-commerce Engineering',
    description: 'High-performance storefronts with Sage integration, advanced filtering, and conversion-optimised UX.',
    badge: 'Commerce',
    icon: 'ns-shape-41',
  },
  {
    slug: 'bespoke-cms-integration',
    title: 'Bespoke CMS Solutions',
    description: 'Custom content management without WordPress bloat. Headless architecture for ultimate flexibility.',
    badge: 'Content',
    icon: 'ns-shape-33',
  },
  {
    slug: 'technical-consultancy',
    title: 'Technical Consultancy',
    description: 'Strategic guidance from 22 years of experience. Architecture reviews, stack selection, and roadmapping.',
    badge: 'Strategy',
    icon: 'ns-shape-26',
  },
];

const supportServices = [
  { slug: 'performance-optimisation', title: 'Performance Optimisation', description: 'Core Web Vitals tuning and speed improvements.' },
  { slug: 'managed-hosting', title: 'Managed UK Hosting', description: 'Secure, monitored hosting on UK infrastructure.' },
  { slug: 'security-compliance', title: 'Security & Compliance', description: 'WAF, SSL, penetration testing, and GDPR compliance.' },
  { slug: 'api-development', title: 'API Development', description: 'Custom REST and GraphQL APIs for system integration.' },
];

const Page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      {/* Hero */}
      <section className="pt-[150px] pb-[80px] md:pt-[180px] lg:pt-[200px]">
        <div className="main-container">
          <div className="mx-auto max-w-[800px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-secondary">Bristol & Somerset Technical Services</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="mt-6 mb-4 text-heading-2 md:text-heading-1">
                Enterprise-grade development.<br className="hidden md:block" /> 
                <span className="text-primary-500">Local expertise.</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px] text-lg text-[#6b7280] dark:text-[#9ca3af]">
                From Next.js platforms to Sage 50 integrations, we build high-performance solutions for ambitious Bristol, Bath, and Somerset businesses.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="pb-[80px] lg:pb-[120px]">
        <div className="main-container">
          <RevealAnimation delay={0.2}>
            <h2 className="text-center mb-12">Core Services</h2>
          </RevealAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <RevealAnimation key={service.slug} delay={0.3 + index * 0.1}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="h-full rounded-[20px] bg-white dark:bg-background-6 p-8 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-primary-500/20">
                    <span className="badge badge-cyan mb-4">{service.badge}</span>
                    <div className="mb-4">
                      <span className={`${service.icon} text-secondary dark:text-accent text-[48px]`} />
                    </div>
                    <h3 className="text-heading-6 mb-3 group-hover:text-primary-500 transition-colors">{service.title}</h3>
                    <p className="text-[#6b7280] dark:text-[#9ca3af]">{service.description}</p>
                  </div>
                </Link>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="pb-[80px] lg:pb-[120px] bg-white dark:bg-background-6">
        <div className="main-container py-[80px]">
          <RevealAnimation delay={0.2}>
            <div className="text-center mb-12">
              <span className="badge badge-cyan mb-4">Ongoing Support</span>
              <h2>Managed Services & Support</h2>
            </div>
          </RevealAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <RevealAnimation key={service.slug} delay={0.3 + index * 0.1}>
                <Link href={`/services/${service.slug}`} className="group block">
                  <div className="rounded-[16px] bg-background-2 dark:bg-background-7 p-6 transition-all duration-300 hover:shadow-lg">
                    <h4 className="text-heading-6 mb-2 group-hover:text-primary-500 transition-colors">{service.title}</h4>
                    <p className="text-sm text-[#6b7280] dark:text-[#9ca3af]">{service.description}</p>
                  </div>
                </Link>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] lg:py-[100px]">
        <div className="main-container">
          <CTA
            className="py-[50px] md:py-20"
            badgeText="Start Your Project"
            badgeClass="badge badge-cyan"
            ctaHeading="Ready to discuss your technical requirements?"
            description="Book a free consultation with our Bristol team. We will assess your needs and propose a solution."
            ctaBtnText="Get in Touch"
            btnClass="hover:btn-secondary dark:hover:btn-accent"
          />
        </div>
      </section>
    </main>
  );
};

export default Page;
