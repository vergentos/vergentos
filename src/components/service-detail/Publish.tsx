import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface PublishProps {
  title?: string;
  desc?: string;
  f1Title?: string;
  f1Desc?: string;
  f2Title?: string;
  f2Desc?: string;
  f3Title?: string;
  f3Desc?: string;
  f4Title?: string;
  f4Desc?: string;
}

const Publish = ({
  title = 'Everything you need to',
  desc = 'build & launch smarter',
  f1Title = 'Precision Engineering',
  f1Desc = 'Bespoke web applications built for speed and commercial scalability.',
  f2Title = 'Strategic Consultancy',
  f2Desc = 'Expert technical guidance to align your tech stack with business goals.',
  f3Title = 'Custom API Bridges',
  f3Desc = 'Seamless synchronisation between your platform and financial tools like Sage 50.',
  f4Title = 'Enterprise Security',
  f4Desc = 'Robust shielding and WAF solutions to protect your digital assets.',
}: PublishProps) => {
  const featureItems = [
    { title: f1Title, description: f1Desc },
    { title: f2Title, description: f2Desc },
    { title: f3Title, description: f3Desc },
    { title: f4Title, description: f4Desc },
  ];

  return (
    <section className="bg-background-3 dark:bg-background-7 pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[150px] xl:pb-[150px]">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[650px] space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Core Excellence</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>
              {title} <span className="text-primary-500">{desc}</span>
            </h2>
          </RevealAnimation>
        </div>
        
        <div className="mb-18 grid grid-cols-12 gap-8">
          {featureItems.map((feature, index) => (
            <RevealAnimation key={index} delay={0.3 + index * 0.1} className="col-span-12 md:col-span-6">
              <div className="dark:border-background-9 dark:bg-background-7 bg-background-3 space-y-6 rounded-[20px] border-8 border-white p-10 min-h-[300px] flex flex-col justify-center">
                <div className="space-y-2">
                  <h4 className="text-primary-500">{`0${index + 1}`}</h4>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
        
        <RevealAnimation delay={0.8}>
          <div className="flex items-center justify-center">
            <LinkButton
              href="/contact-us"
              className="btn btn-lg md:btn-xl btn-secondary hover:btn-white dark:hover:btn-accent dark:btn-transparent w-[85%] md:w-auto">
              Start Your Project
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Publish;
