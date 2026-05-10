import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const VidgetSection = () => {
  return (
    <section className="bg-secondary dark:bg-background-8 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[120px] xl:pb-[120px] overflow-hidden relative">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-yellow-v2">New · The Vidget</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-accent">
                Want your website to run itself?
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-accent/70 text-lg max-w-[600px]">
                The Vidget is a single floating widget you paste onto any website. Inside it: AI voice, AI chat, email automation, SMS, reviews, and booking — all running quietly in the background, growing your business while you sleep.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-accent/70 text-lg max-w-[600px]">
                One paste of code. Six AI growth modules. Zero developers required.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <LinkButton
                  href="/vidget"
                  className="btn btn-md btn-accent hover:btn-primary">
                  See the Vidget
                </LinkButton>
                <LinkButton
                  href="/contact-us"
                  className="btn btn-md btn-transparent border border-accent/30 text-accent hover:btn-accent">
                  Book a Demo
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          {/* Right: Visual V representation */}
          <div className="col-span-12 lg:col-span-5">
            <RevealAnimation delay={0.4}>
              <div className="relative mx-auto max-w-[420px] aspect-square">
                {/* The V shape using 6 floating module icons */}
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Connecting V lines (subtle) */}
                  <line x1="60" y1="80" x2="200" y2="320" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="200" y1="320" x2="340" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />

                  {/* Left arm — 3 icons going down */}
                  {/* Voice */}
                  <g>
                    <circle cx="60" cy="80" r="32" fill="#FCD34D" />
                    <text x="60" y="88" textAnchor="middle" fontSize="22">🎙️</text>
                  </g>
                  {/* Chat */}
                  <g>
                    <circle cx="130" cy="200" r="32" fill="#A78BFA" />
                    <text x="130" y="208" textAnchor="middle" fontSize="22">💬</text>
                  </g>
                  {/* Email */}
                  <g>
                    <circle cx="200" cy="320" r="38" fill="#34D399" />
                    <text x="200" y="330" textAnchor="middle" fontSize="26">✉️</text>
                  </g>

                  {/* Right arm — 3 icons going up */}
                  {/* SMS */}
                  <g>
                    <circle cx="270" cy="200" r="32" fill="#60A5FA" />
                    <text x="270" y="208" textAnchor="middle" fontSize="22">📱</text>
                  </g>
                  {/* Reviews */}
                  <g>
                    <circle cx="340" cy="80" r="32" fill="#F472B6" />
                    <text x="340" y="88" textAnchor="middle" fontSize="22">⭐</text>
                  </g>

                  {/* Booking — top centre, the apex of the V opening */}
                  <g>
                    <circle cx="200" cy="50" r="28" fill="#FB923C" />
                    <text x="200" y="58" textAnchor="middle" fontSize="20">📅</text>
                  </g>
                </svg>

                {/* Floating label */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-accent/60 text-sm whitespace-nowrap">
                  6 modules · 1 widget · 0 developers
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VidgetSection;
