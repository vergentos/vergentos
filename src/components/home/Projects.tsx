import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featuredProjects = [
  {
    slug: "ux-master-chief-website-builder",
    title: "UX Master Chief — AI Website Builder Platform",
    description: "Production SaaS platform with multi-tenant architecture, Stripe billing, and AI-powered site generation. Built end to end on Next.js.",
    thumbnail: "/images/case-study-uxmc-website.png"
  },
  {
    slug: "ai-sales-voice-dashboard",
    title: "AI Sales Voice — Real-Time Analytics Dashboard",
    description: "Custom analytics dashboard with real-time call data streaming, sentiment scoring, and conversion tracking for an AI voice platform.",
    thumbnail: "/images/case-study-ai-sales-voice-website.png"
  },
  {
    slug: "investment-screener-fintech-dashboard",
    title: "Investment Screener — Fintech SaaS Dashboard",
    description: "Data-dense fintech dashboard with sub-second filtering across thousands of equities. Engineered for active trader workflows.",
    thumbnail: "/images/case-study-investment-screener.png"
  },
  {
    slug: "enterprise-cms-platform",
    title: "Enterprise CMS Platform — Multi-Tenant SaaS",
    description: "Multi-tenant headless CMS with role-based access, content workflows, and API-first architecture serving enterprise customers.",
    thumbnail: "/images/case-study-enterprise-cms.png"
  }
];

const Projects = () => {
  return (
    <section className="bg-white pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[160px] xl:pb-[160px] dark:bg-black">
      <div className="main-container">
        <div className="mb-10 space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-yellow-v2">Case Studies</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>SaaS platforms shipped to production.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[680px] text-[#6b7280] dark:text-[#9ca3af]">
                Real SaaS platforms, AI tools, and dashboards engineered for ambitious founders. Production code, real users, measurable outcomes.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="mb-14">
          <div className="grid grid-cols-12 gap-y-14 lg:gap-x-14">
            {featuredProjects.map((project, index) => (
              <RevealAnimation key={index} delay={0.5 + index * 0.1} className={index === 0 || index === 3 ? "col-span-12" : "col-span-12 lg:col-span-6"}>
                <figure className="space-y-6">
                  <div className="group relative h-[300px] w-full cursor-pointer overflow-hidden rounded-[20px] lg:h-[576px]">
                    <Image
                      src={project.thumbnail}
                      className="h-full w-full rounded-[20px] object-cover transition-transform duration-500 group-hover:scale-110"
                      alt={project.title}
                      fill
                    />
                    <div className="absolute inset-0 bg-black/0 transition-all duration-500 ease-in-out group-hover:bg-black/40" />
                    <LinkButton
                      href={`/case-study/${project.slug}`}
                      aria-label={`View ${project.title} case study`}
                      className="btn btn-md hover:btn-primary dark:btn-accent btn-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-95 transform-gpu opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100">
                      View Case Study
                    </LinkButton>
                  </div>
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4">
                    <h3 className="text-heading-6 sm:text-heading-5">{project.title}</h3>
                    <p className="line-clamp-2 max-w-[400px] text-left md:text-right text-sm text-[#6b7280] dark:text-[#9ca3af]">
                      {project.description}
                    </p>
                  </div>
                </figure>
              </RevealAnimation>
            ))}
          </div>
        </div>

        <RevealAnimation delay={0.9}>
          <div className="text-center">
            <LinkButton
              href="/case-study"
              className="btn btn-secondary btn-md hover:btn-primary dark:btn-transparent mx-auto">
              View All Case Studies
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Projects;
