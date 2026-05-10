import { Metadata } from 'next';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

export const metadata: Metadata = {
  title: 'The Vidget — One Widget. Six AI Growth Modules.',
  description: 'The Vidget is a floating widget you paste onto any website. AI voice, chat, email, SMS, reviews, and booking — all running in the background to grow your business automatically.',
  keywords: 'AI widget, website chat widget, AI voice widget, SaaS growth widget, embed AI on website, AI chatbot widget, voice AI widget, all-in-one growth widget',
  authors: [{ name: 'Vergentos', url: 'https://www.vergentos.com' }],
  creator: 'Vergentos',
  publisher: 'Vergentos',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.vergentos.com/vidget',
    siteName: 'Vergentos',
    title: 'The Vidget — One Widget. Six AI Growth Modules.',
    description: 'Paste one widget. Get AI voice, chat, email, SMS, reviews, and booking. Zero developers required.',
    images: [
      {
        url: 'https://www.vergentos.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Vidget by Vergentos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Vidget — Six AI Modules in One Widget',
    description: 'Paste one widget. Get AI voice, chat, email, SMS, reviews, and booking.',
    images: ['https://www.vergentos.com/images/og-image.png'],
  },
};

const modules = [
  {
    icon: '🎙️',
    name: 'AI Voice',
    description: 'A natural-sounding voice agent that answers calls, qualifies leads, and books appointments — 24 hours a day.',
    colour: '#FCD34D',
  },
  {
    icon: '💬',
    name: 'AI Chat',
    description: 'A chat agent trained on your business that handles enquiries instantly and escalates the qualified ones to you.',
    colour: '#A78BFA',
  },
  {
    icon: '✉️',
    name: 'Email Automation',
    description: 'Smart email sequences that nurture leads, follow up after enquiries, and re-engage cold contacts automatically.',
    colour: '#34D399',
  },
  {
    icon: '📱',
    name: 'SMS Outreach',
    description: 'High-open-rate SMS campaigns and one-to-one conversations from a UK business number, fully automated.',
    colour: '#60A5FA',
  },
  {
    icon: '⭐',
    name: 'Review Capture',
    description: 'Automatically request reviews from happy customers and route negative feedback away from public platforms.',
    colour: '#F472B6',
  },
  {
    icon: '📅',
    name: 'Booking',
    description: 'Visitors book themselves into your calendar from the widget — synced with your existing calendar tools.',
    colour: '#FB923C',
  },
];

export default function VidgetPage() {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      {/* HERO */}
      <section className="relative overflow-hidden pt-[150px] md:pt-[190px] lg:pt-[230px] pb-[100px]">
        <div className="main-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-yellow-v2">The Vidget · By Vergentos</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="text-heading-3 lg:text-heading-1">
                  One widget. <span className="text-primary-500">Six AI growth modules.</span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-lg text-[#6b7280] dark:text-[#9ca3af] max-w-[540px]">
                  Paste one snippet of code onto any website. The Vidget appears as a discreet V-shape in the corner — and behind it sits AI voice, chat, email, SMS, reviews, and booking, all running 24/7.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <LinkButton href="/contact-us" className="btn btn-xl btn-primary">
                    <span>Get the Vidget</span>
                  </LinkButton>
                  <LinkButton href="#how-it-works" className="btn btn-xl btn-white dark:btn-white-dark">
                    <span>See how it works</span>
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>

            {/* V visual */}
            <RevealAnimation delay={0.5}>
              <div className="relative mx-auto max-w-[480px] aspect-square">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <line x1="60" y1="80" x2="200" y2="320" stroke="rgba(0,0,0,0.08)" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="200" y1="320" x2="340" y2="80" stroke="rgba(0,0,0,0.08)" strokeWidth="2" strokeDasharray="4 4" />

                  <g><circle cx="60" cy="80" r="36" fill="#FCD34D" /><text x="60" y="90" textAnchor="middle" fontSize="26">🎙️</text></g>
                  <g><circle cx="130" cy="200" r="36" fill="#A78BFA" /><text x="130" y="210" textAnchor="middle" fontSize="26">💬</text></g>
                  <g><circle cx="200" cy="320" r="42" fill="#34D399" /><text x="200" y="332" textAnchor="middle" fontSize="30">✉️</text></g>
                  <g><circle cx="270" cy="200" r="36" fill="#60A5FA" /><text x="270" y="210" textAnchor="middle" fontSize="26">📱</text></g>
                  <g><circle cx="340" cy="80" r="36" fill="#F472B6" /><text x="340" y="90" textAnchor="middle" fontSize="26">⭐</text></g>
                  <g><circle cx="200" cy="50" r="32" fill="#FB923C" /><text x="200" y="60" textAnchor="middle" fontSize="22">📅</text></g>
                </svg>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 lg:py-[100px] bg-white dark:bg-black">
        <div className="main-container">
          <div className="mx-auto max-w-[750px] text-center mb-14 md:mb-[70px] space-y-5">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-green">How it works</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>Three steps. Zero developers.</h2>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-8">
            {[
              { num: '01', title: 'Paste the code', desc: 'Copy a single line of code and paste it into your website — anywhere a script tag goes. WordPress, Shopify, Wix, custom HTML, anything.' },
              { num: '02', title: 'Configure your modules', desc: 'Log into your Vergentos dashboard and switch on the modules you need. Voice, chat, SMS, reviews — toggle each one on or off in seconds.' },
              { num: '03', title: 'Watch it work', desc: 'The Vidget runs 24/7 capturing leads, answering questions, booking appointments, and nurturing customers — without you lifting a finger.' },
            ].map((step, i) => (
              <RevealAnimation key={step.num} delay={0.3 + i * 0.1} className="col-span-12 md:col-span-4">
                <div className="bg-background-3 dark:bg-background-7 rounded-[20px] p-8 h-full space-y-4">
                  <span className="text-primary-500 text-heading-4">{step.num}</span>
                  <h3 className="text-heading-5">{step.title}</h3>
                  <p className="text-[#6b7280] dark:text-[#9ca3af]">{step.desc}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* THE 6 MODULES */}
      <section className="py-20 lg:py-[100px]">
        <div className="main-container">
          <div className="mx-auto max-w-[750px] text-center mb-14 md:mb-[70px] space-y-5">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan">Inside the Vidget</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>Six AI modules running in the background.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-[#6b7280] dark:text-[#9ca3af] max-w-[640px] mx-auto">
                Switch them on individually or run all six together. Every module is built on production AI infrastructure that scales with your traffic.
              </p>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {modules.map((m, i) => (
              <RevealAnimation key={m.name} delay={0.3 + i * 0.05} className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="bg-white dark:bg-background-7 rounded-[20px] p-8 h-full space-y-4 border border-stroke-1 dark:border-background-9">
                  <div className="size-14 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: m.colour }}>
                    {m.icon}
                  </div>
                  <h3 className="text-heading-6">{m.name}</h3>
                  <p className="text-[#6b7280] dark:text-[#9ca3af]">{m.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-[120px] bg-secondary dark:bg-background-8">
        <div className="main-container">
          <div className="text-center max-w-[700px] mx-auto space-y-6">
            <RevealAnimation delay={0.2}>
              <h2 className="text-accent">Ready to see the Vidget on your site?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-accent/70 text-lg">
                Book a 15-minute demo and we will show you the Vidget running on a real client site, walk you through configuration, and give you the embed code on the spot.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="pt-4">
                <Link href="/contact-us" className="btn btn-xl btn-accent hover:btn-primary">
                  <span>Book a Vidget Demo</span>
                </Link>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
