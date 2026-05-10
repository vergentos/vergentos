import RevealAnimation from '../animation/RevealAnimation';

const AboutHero = () => {
  return (
    <section className="pt-32 pb-14 md:pt-40 md:pb-16 lg:pt-44 lg:pb-20">
      <div className="main-container">
        <div className="mx-auto max-w-[900px] space-y-6 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">About Vergentos</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1>A SaaS development agency built for the AI era.</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[700px]">
              Vergentos is a remote-first SaaS engineering team partnering with ambitious founders building bespoke platforms, AI tools, and data dashboards. We exist because the gap between modern SaaS expectations and what most agencies actually ship has never been wider.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[700px]">
              Our team brings two decades of combined experience shipping production web platforms across enterprise CMS, e-commerce, and now SaaS. We have lived through every framework cycle, every hosting paradigm, and every wave of platform reinvention. That perspective shapes how we make architectural decisions today.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <p className="mx-auto max-w-[700px]">
              We specialise in Next.js SaaS development, AI agent engineering, RAG implementations, and dashboard design. Every project is scoped, priced, and shipped against clear deliverables, with the kind of senior-engineering involvement that most agencies reserve only for sales pitches.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <p className="mx-auto max-w-[700px]">
              If you are a founder ready to build a SaaS that survives contact with real customers, scales without rebuilding, and competes on engineering quality rather than feature count, we should talk.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

AboutHero.displayName = 'AboutHero';
export default AboutHero;
