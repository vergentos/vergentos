import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  return (
    <section className="bg-[url('/images/ns-img-169.png')] bg-cover bg-top bg-no-repeat pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Bristol SaaS & App Development</span>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3">Bespoke platforms that outperform WordPress.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[600px] text-[#6b7280] dark:text-[#9ca3af]">
                We build high-performance Next.js applications, SaaS platforms, and AI-integrated systems for ambitious Bristol businesses ready to scale beyond template limitations.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* Service Pillars */}
        <div className="mx-auto mb-10 grid max-w-[1010px] grid-cols-12 gap-8 lg:mb-18">
          <RevealAnimation delay={0.5} className="col-span-12 md:col-span-6 lg:col-span-7">
            <Link href="/services/next-js-react-development" className="group block h-full">
              <div className="dark:bg-background-6 h-full space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] transition-all duration-300 hover:shadow-xl">
                <div className="w-full">
                  <span className="ns-shape-8 text-secondary dark:text-accent text-[52px]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5 max-sm:text-heading-6 group-hover:text-primary-500 transition-colors">Bespoke SaaS Architectures</h3>
                  <p className="max-w-[430px] text-[#6b7280] dark:text-[#9ca3af]">
                    Custom-built Next.js platforms with multi-tenant architecture, subscription billing, and enterprise-grade security. Purpose-built for scale from day one.
                  </p>
                </div>
              </div>
            </Link>
          </RevealAnimation>

          <RevealAnimation delay={0.6} className="col-span-12 md:col-span-6 lg:col-span-5">
            <Link href="/services/ai-implementation" className="group block h-full">
              <div className="dark:bg-background-6 h-full space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] transition-all duration-300 hover:shadow-xl">
                <div className="w-full">
                  <span className="ns-shape-35 text-secondary dark:text-accent text-[52px]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5 max-sm:text-heading-6 group-hover:text-primary-500 transition-colors">AI-Integrated Web Applications</h3>
                  <p className="text-[#6b7280] dark:text-[#9ca3af]">Embed LLMs, voice agents, and predictive analytics directly into your platform. Transform customer interactions with intelligent automation.</p>
                </div>
              </div>
            </Link>
          </RevealAnimation>

          <RevealAnimation delay={0.7} className="col-span-12 md:col-span-6 lg:col-span-5">
            <Link href="/services/performance-optimisation" className="group block h-full">
              <div className="dark:bg-background-6 h-full space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] transition-all duration-300 hover:shadow-xl">
                <div className="w-full">
                  <span className="ns-shape-41 text-secondary dark:text-accent text-[52px]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5 max-sm:text-heading-6 group-hover:text-primary-500 transition-colors">The Next.js Advantage</h3>
                  <p className="max-w-[430px] text-[#6b7280] dark:text-[#9ca3af]">
                    10x faster than WordPress. Server-side rendering, edge caching, and automatic code splitting deliver sub-second load times that boost SEO and conversions.
                  </p>
                </div>
              </div>
            </Link>
          </RevealAnimation>

          <RevealAnimation delay={0.8} className="col-span-12 md:col-span-6 lg:col-span-7">
            <Link href="/services/sage-50-api-integration" className="group block h-full">
              <div className="dark:bg-background-6 h-full space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] transition-all duration-300 hover:shadow-xl">
                <div className="w-full">
                  <span className="ns-shape-19 text-secondary dark:text-accent text-[52px]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5 max-sm:text-heading-6 group-hover:text-primary-500 transition-colors">Custom Business Intelligence Dashboards</h3>
                  <p className="max-w-[430px] text-[#6b7280] dark:text-[#9ca3af]">
                    Real-time Sage 50 sync, live sales analytics, and custom reporting. See your entire operation in one unified dashboard built for decision-makers.
                  </p>
                </div>
              </div>
            </Link>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.9}>
          <div className="flex items-center justify-center">
            <LinkButton
              href="/services"
              className="btn btn-secondary hover:btn-primary dark:btn-transparent dark:border-primary-50 btn-md mx-auto w-[85%] md:w-auto">
              Explore All Services
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Services;
