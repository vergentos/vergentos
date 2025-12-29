import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const loginOptions = [
  {
    title: 'Hosting Control Panel',
    description: 'Manage your website hosting, emails, domains, and server settings.',
    href: 'https://clients.mediatopia.co.uk',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: 'Support Tickets',
    description: 'Submit a support request or check the status of existing tickets.',
    href: 'https://support.mediatopia.co.uk',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
      </svg>
    ),
  },
  {
    title: 'Webmail Access',
    description: 'Access your business email via our secure webmail portal.',
    href: 'https://webmail.mediatopia.co.uk',
    icon: (
      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const LoginHero = () => {
  return (
    <section className="pt-[120px] pb-[70px] lg:pt-[180px] lg:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto w-full max-w-[800px]">
          <RevealAnimation delay={0.1}>
            <div className="text-center mb-12">
              <span className="badge badge-primary-v2 mb-4">Client Portal</span>
              <h1 className="text-secondary dark:text-accent mb-4">Client Login</h1>
              <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto">
                Access your hosting control panel, submit support tickets, or check your webmail. 
                Select the service you need below.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid gap-6 md:grid-cols-3">
            {loginOptions.map((option, index) => (
              <RevealAnimation key={option.title} delay={0.2 + index * 0.1}>
                <Link
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-stroke-3 dark:border-stroke-7 bg-white dark:bg-background-8 p-6 transition-all hover:border-primary-500 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary-500/10 p-3 text-primary-500">
                    {option.icon}
                  </div>
                  <h3 className="text-secondary dark:text-accent text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-secondary/60 dark:text-accent/60 text-sm">
                    {option.description}
                  </p>
                </Link>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation delay={0.5}>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-background-1 dark:bg-background-6 px-6 py-3">
                <svg className="size-5 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                <span className="text-secondary/60 dark:text-accent/60 text-sm">
                  Need help? Call us on{' '}
                  <a href="tel:+441173326021" className="text-primary-500 font-medium">
                    0117 332 6021
                  </a>
                </span>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.6}>
            <div className="mt-8 text-center">
              <p className="text-secondary/40 dark:text-accent/40 text-sm">
                Not yet a client?{' '}
                <Link href="/contact-us" className="text-primary-500 hover:underline">
                  Get in touch
                </Link>{' '}
                to discuss your project.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

LoginHero.displayName = 'LoginHero';
export default LoginHero;
