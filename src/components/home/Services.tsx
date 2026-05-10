import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  return (
    <section className="bg-[url('/images/ns-img-169.webp')] bg-cover bg-top bg-no-repeat pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">SaaS & AI Engineering</span>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3">SaaS engineering, end to end.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[600px] text-[#6b7280] dark:text-[#9ca3af]">
                We build production-grade SaaS platforms, AI agents, and dashboards for ambitious founders ready to scale beyond no-code limits.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* Service Pillars */}
        <div className="mx-auto mb-10 grid max-w-[1010px] grid-cols-12 gap-8 lg:mb-18">
          <RevealAnimation delay={0.5} className="col-span-12 md:col-span-6 lg:col-span-7">
            <Link href="/services/saas-mvp-development" className="group block h-full">
              <div className="dark:bg-background-6 h-full space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] transition-all duration-300 hover:shadow-xl">
                <div className="w-full">
                  <span className="ns-shape-8 text-secondary dark:text-accent text-[52px]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5 max-sm:text-heading-6 group-hover:text-primary-500 transition-colors">SaaS MVP Development</h3>
                  <p className="max-w-[430px] text-[#6b7280] dark:text-[#9ca3af]">
                    Production-ready SaaS MVPs with proper auth, billing, and infrastructure foundations. Validate fast, scale clean, never rebuild.
                  </p>
                </div>
              </div>
            </Link>
          </RevealAnimation>

          <RevealAnimation delay={0.6} className="col-span-12 md:col-span-6 lg:col-span-5">
            <Link href="/services/ai-agent-development" className="group block h-full">
              <div className="dark:bg-background-6 h-full space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] transition-all duration-300 hover:shadow-xl">
                <div className="w-full">
                  <span className="ns-shape-35 text-secondary dark:text-accent text-[52px]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5 max-sm:text-heading-6 group-hover:text-primary-500 transition-colors">AI Agent Development</h3>
                  <p className="text-[#6b7280] dark:text-[#9ca3af]">Production AI agents with tool use, memory, and evaluation pipelines. Beyond chatbot demos to genuinely automated workflows.</p>
                </div>
              </div>
            </Link>
          </RevealAnimation>

          <RevealAnimation delay={0.7} className="col-span-12 md:col-span-6 lg:col-span-5">
            <Link href="/services/ui-ux-design" className="group block h-full">
              <div className="dark:bg-background-6 h-full space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] transition-all duration-300 hover:shadow-xl">
                <div className="w-full">
                  <span className="ns-shape-41 text-secondary dark:text-accent text-[52px]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5 max-sm:text-heading-6 group-hover:text-primary-500 transition-colors">SaaS Dashboard Design</h3>
                  <p className="max-w-[430px] text-[#6b7280] dark:text-[#9ca3af]">
                    Beautiful, fast, data-dense dashboards engineered for activation and daily-use habit. Design systems built to scale with your roadmap.
                  </p>
                </div>
              </div>
            </Link>
          </RevealAnimation>

          <RevealAnimation delay={0.8} className="col-span-12 md:col-span-6 lg:col-span-7">
            <Link href="/services/saas-architecture-consulting" className="group block h-full">
              <div className="dark:bg-background-6 h-full space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] transition-all duration-300 hover:shadow-xl">
                <div className="w-full">
                  <span className="ns-shape-19 text-secondary dark:text-accent text-[52px]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-heading-5 max-sm:text-heading-6 group-hover:text-primary-500 transition-colors">SaaS Architecture Consulting</h3>
                  <p className="max-w-[430px] text-[#6b7280] dark:text-[#9ca3af]">
                    Strategic technical guidance for founders and CTOs. Tenancy models, scaling roadmaps, and cost engineering for SaaS that compounds.
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
