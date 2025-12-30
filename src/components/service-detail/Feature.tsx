import RevealAnimation from '../animation/RevealAnimation';

const Feature = ({ 
  title, 
  c1Title, c1Desc, c2Title, c2Desc, c3Title, c3Desc, c4Title, c4Desc 
}: any) => {
  const features = [
    { icon: "ns-shape-3", title: c1Title, desc: c1Desc },
    { icon: "ns-shape-2", title: c2Title, desc: c2Desc },
    { icon: "ns-shape-8", title: c3Title, desc: c3Desc },
    { icon: "ns-shape-4", title: c4Title, desc: c4Desc },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-34 xl:py-39 bg-background-2 dark:bg-background-7">
      <div className="main-container">
        <div className="mb-10 text-center md:mb-11 lg:mx-auto lg:max-w-[730px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-primary mb-4">Core Features</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">{title || "Everything you need to succeed"}</h2>
          </RevealAnimation>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <RevealAnimation key={i} delay={0.3 + i * 0.1}>
              <div className="bg-background-3 dark:bg-background-5 flex w-full flex-col justify-between rounded-[20px] p-8 lg:p-11 min-h-[280px] sm:min-h-[320px] border border-stroke-1 dark:border-stroke-6">
                <div className="text-center">
                  <span className={`${feature.icon} text-primary-500 text-[52px]`}></span>
                </div>
                <div className="space-y-1 text-center">
                  <h3 className="text-heading-6 md:text-heading-5">{feature.title}</h3>
                  <p className="text-tagline-1 text-secondary/60 dark:text-accent/60">{feature.desc}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

Feature.displayName = 'Feature';
export default Feature;
