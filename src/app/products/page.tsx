import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';
import CTA from '@/components/shared/cta/CTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Products | AI-Powered Tools by Mediatopia',
  description: 'Explore AI Sales Voice and other tools built by Mediatopia to help UK businesses automate, scale, and stay compliant.',
};

const products = [
  {
    title: 'AI Sales Voice',
    description: 'The only AI sales platform built from the ground up for UK compliance. Scale outbound calls across 25+ countries with native-speaking AI voices, PECR 2003 compliance, and real-time analytics.',
    image: '/images/case-study-ai-sales-voice.png',
    features: [
      'Native AI voices in 25+ languages',
      'Built-in PECR 2003 compliance',
      'TPS/CTPS register screening',
      'Real-time analytics dashboard',
      'Do-Not-Call list management',
      'ICO audit-ready documentation',
    ],
    link: 'https://aisalesvoice.com',
    status: 'Live',
  },
  {
    title: 'Ultimate Investment Screener',
    description: 'A single-file web application helping everyday investors make smarter decisions with a proprietary RAV Score algorithm, real-time filtering, and projection calculators.',
    image: '/images/case-study-investment-screener.png',
    features: [
      'Proprietary RAV Score algorithm',
      'Real-time filtering',
      'Investment projection calculator',
      'Cloud-based portfolio persistence',
      'Mobile and desktop responsive',
    ],
    link: '#',
    status: 'Beta',
  },
];

const ProductsPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="pt-32 pb-16 sm:pt-36 lg:pt-[160px] lg:pb-20">
        <div className="main-container">
          <div className="max-w-[800px] mb-16">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-yellow-v2 mb-4">Our Products</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h1 className="text-heading-2 mb-4">AI-powered tools built by Mediatopia</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-lg">
                Beyond client work, we build our own products. These tools solve real problems 
                we've encountered—and they're available for you to use.
              </p>
            </RevealAnimation>
          </div>

          <div className="space-y-20">
            {products.map((product, index) => (
              <RevealAnimation key={product.title} delay={0.3 + index * 0.1}>
                <div className="bg-white dark:bg-background-6 rounded-[20px] overflow-hidden border border-stroke-1 dark:border-stroke-7 shadow-lg">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="relative h-[300px] lg:h-full min-h-[400px]">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-heading-4">{product.title}</h2>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          product.status === 'Live' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {product.status}
                        </span>
                      </div>
                      <p className="mb-6 text-secondary/70 dark:text-accent/70">
                        {product.description}
                      </p>
                      <ul className="space-y-2 mb-8">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-sm">
                            <span className="size-1.5 rounded-full bg-secondary dark:bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {product.link !== '#' && (
                        <Link
                          href={product.link}
                          target="_blank"
                          className="btn btn-primary btn-md w-fit"
                        >
                          Visit {product.title}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Build with us"
        ctaHeading="Have an idea for a product?"
        description="We partner with businesses to build AI-powered tools. Let's talk."
        ctaBtnText="Get in touch"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        inputType="tel"
        inputPlaceholder="Enter your phone number"
      />
    </main>
  );
};

export default ProductsPage;
