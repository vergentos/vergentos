import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featuredProjects = [
  {
    slug: "sparks-transport-seo-growth",
    title: "Sparks Transport – 340% Traffic Growth",
    description: "Comprehensive SEO and website strategy delivering exceptional organic growth for a Bristol haulage company.",
    thumbnail: "/images/case-study-sparks.png"
  },
  {
    slug: "chongz-ecommerce-sage-integration",
    title: "Chongz – E-commerce & Sage 50 Integration",
    description: "Complete e-commerce overhaul with Sage 50 API integration, advanced filtering, and automated stock sync.",
    thumbnail: "/images/case-study-chongz.png"
  },
  {
    slug: "bottleman-website-redesign",
    title: "Bottleman – 20 Years, 5 Websites",
    description: "Fifth website redesign for a client we've partnered with for over two decades.",
    thumbnail: "/images/case-study-bottleman.png"
  },
  {
    slug: "morris-and-perry-quarry-website",
    title: "Morris & Perry – 15 Year Partnership",
    description: "Website refresh for a prestigious Bath-based quarry, our client for over 15 years.",
    thumbnail: "/images/case-study-morris.png"
  }
];

const Projects = () => {
  return (
    <section className="bg-white pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[160px] xl:pb-[160px] dark:bg-black">
      <div className="main-container">
        <div className="mb-10 space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-yellow-v2">Featured Work</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Digital excellence in action.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[680px]">
                Real results from real clients. Explore our portfolio of bespoke web design, 
                Sage 50 integrations, and high-performance platforms built for ambitious UK brands.
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
                      className="btn btn-md hover:btn-primary dark:btn-accent btn-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-95 transform-gpu opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100">
                      View Project
                    </LinkButton>
                  </div>
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4">
                    <h3 className="text-heading-6 sm:text-heading-5">{project.title}</h3>
                    <p className="line-clamp-2 max-w-[400px] text-left md:text-right text-sm opacity-70">
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
              View all case studies
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Projects;
