import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  return (
    <section className="bg-[url('/images/ns-img-169.png')] bg-cover bg-top bg-no-repeat pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">AI &amp; Automation</span>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3">Intelligent AI solutions for modern enterprise.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[600px]">
                We integrate cutting-edge AI and machine learning to automate complex workflows, unlock hidden business value, and give your organisation the competitive edge.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* feature Items */}
        <div className="mx-auto mb-10 grid max-w-[1010px] grid-cols-12 gap-8 lg:mb-18">
          <RevealAnimation delay={0.5} className="col-span-12 md:col-span-6 lg:col-span-7">
            <Link href="/services/ai-implementation" className="group block h-full">
              <div className="dark:bg-background-6 h-full space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] transition-all duration-300 hover:shadow-xl">
                <div className="w-full">
                  <span className="ns-shape-8 text-secondary dark:text-accent text-[52px]" />
                </div>
                <div className="space-y-2">
                  <h5 className="max-sm:text-heading-6 group-hover:text-primary-500 transition-colors">Advanced AI implementation &amp; data intelligence.</h5>
                  <p className="max-w-[430px]">
                    Harness the power of predictive analytics and real-time data processing to drive smarter business decisions and gain a clear insight into your market trends.
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
                  <h5 className="max-sm:text-heading-6 group-hover:text-primary-500 transition-colors">Custom AI-driven applications.</h5>
                  <p>We develop bespoke software solutions that leverage LLMs and neural networks to solve specific business challenges and improve user engagement.</p>
                </div>
              </div>
            </Link>
          </RevealAnimation>

          <RevealAnimation delay={0.7} className="col-span-12 md:col-span-6 lg:col-span-5">
            <Link href="/services/technical-strategy" className="group block h-full">
              <div className="dark:bg-background-6 h-full space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] transition-all duration-300 hover:shadow-xl">
                <div className="w-full">
                  <span className="ns-shape-41 text-secondary dark:text-accent text-[52px]" />
                </div>
                <div className="space-y-2">
                  <h5 className="max-sm:text-heading-6 group-hover:text-primary-500 transition-colors">Strategic AI consulting.</h5>
                  <p className="max-w-[430px]">
                    Our experts guide your digital transformation journey, identifying high-ROI opportunities for automation across your entire organisation.
                  </p>
                </div>
              </div>
            </Link>
          </RevealAnimation>

          <RevealAnimation delay={0.8} className="col-span-12 md:col-span-6 lg:col-span-7">
            <Link href="/services/ai-implementation" className="group block h-full">
              <div className="dark:bg-background-6 h-full space-y-6 rounded-[20px] bg-white p-8 sm:min-h-[288px] transition-all duration-300 hover:shadow-xl">
                <div className="w-full">
                  <span className="ns-shape-19 text-secondary dark:text-accent text-[52px]" />
                </div>
                <div className="space-y-2">
                  <h5 className="max-sm:text-heading-6 group-hover:text-primary-500 transition-colors">Workflow automation &amp; machine learning.</h5>
                  <p className="max-w-[430px]">
                    Streamline repetitive tasks with custom-trained machine learning models that evolve with your business, significantly reducing overhead and operational friction.
                  </p>
                </div>
              </div>
            </Link>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.9}>
          <div className="flex items-center justify-center">
            <LinkButton
              href="/services/ai-implementation"
              className="btn btn-secondary hover:btn-primary dark:btn-transparent dark:border-primary-50 btn-md mx-auto w-[85%] md:w-auto">
              Explore AI Engineering
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Services;
