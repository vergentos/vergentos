import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Contact = () => {
  return (
    <section id="contact-form" className="pt-[100px] pb-[100px]">
      <div className="main-container">
        <div className="grid grid-cols-12 max-lg:gap-y-[50px] lg:gap-[100px]">
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-5 text-left">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">Get In Touch</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>Contact our support team</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[550px]">
                    Have a question or need assistance? Fill out the form and our team will get back to you 
                    as soon as possible—typically within 4 working hours.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <RevealAnimation delay={0.4}>
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-full bg-primary-500/10 p-3">
                    <svg className="size-6 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-secondary dark:text-accent font-semibold">Phone Support</h4>
                    <p className="text-secondary/60 dark:text-accent/60 mb-1">Monday to Friday, 9am - 5pm</p>
                    <a href="tel:+441173326021" className="text-primary-500 font-medium hover:underline">
                      0117 332 6021
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-full bg-primary-500/10 p-3">
                    <svg className="size-6 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-secondary dark:text-accent font-semibold">Email Support</h4>
                    <p className="text-secondary/60 dark:text-accent/60 mb-1">We respond within 4 hours</p>
                    <a href="mailto:hello@aiwebdesigners.co.uk" className="text-primary-500 font-medium hover:underline">
                      hello@aiwebdesigners.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-full bg-primary-500/10 p-3">
                    <svg className="size-6 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-secondary dark:text-accent font-semibold">Office Address</h4>
                    <p className="text-secondary/60 dark:text-accent/60">
                      Mediatopia<br />
                      12 Whiteladies Road<br />
                      Bristol BS8 1PD
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.5}>
              <form className="dark:bg-background-8 rounded-[20px] bg-white p-6 lg:p-[42px]">
                <fieldset className="mb-8 space-y-2">
                  <label htmlFor="name" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 placeholder:text-tagline-1 placeholder:text-secondary/60 dark:placeholder:text-accent/60 dark:text-accent shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:ring-0 focus:ring-offset-0 focus:outline-none"
                  />
                </fieldset>
                <fieldset className="mb-8 space-y-2">
                  <label htmlFor="email" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 placeholder:text-tagline-1 dark:text-accent placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:ring-0 focus:ring-offset-0 focus:outline-none"
                  />
                </fieldset>
                <fieldset className="mb-8 space-y-2">
                  <label htmlFor="subject" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                    Subject
                  </label>
                  <select
                    name="subject"
                    id="subject"
                    className="border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 text-secondary/60 dark:text-accent/60 shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal focus:ring-0 focus:ring-offset-0 focus:outline-none"
                  >
                    <option value="">Select a topic</option>
                    <option value="hosting">Hosting Issue</option>
                    <option value="website">Website Problem</option>
                    <option value="email">Email Support</option>
                    <option value="billing">Billing Query</option>
                    <option value="other">Other</option>
                  </select>
                </fieldset>
                <fieldset className="space-y-2">
                  <label htmlFor="message" className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Describe your issue or question"
                    className="border-stroke-3 bg-background-1 dark:border-stroke-7 dark:bg-background-6 placeholder:text-tagline-1 placeholder:text-secondary/60 dark:placeholder:text-accent/60 dark:text-accent shadow-1 block min-h-[115px] w-full rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus:ring-0 focus:ring-offset-0 focus:outline-none"
                    defaultValue={''}
                  />
                </fieldset>
                <fieldset className="mt-4 mb-4 flex items-center gap-2">
                  <label
                    htmlFor="agree-privacy"
                    className="flex items-center gap-x-3"
                    aria-label="Agree to privacy policy">
                    <input id="agree-privacy" type="checkbox" className="peer sr-only" required />
                    <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                  </label>
                  <label
                    htmlFor="agree-privacy"
                    className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                    I agree with the{' '}
                    <Link href="/privacy-policy" className="text-primary-500 text-tagline-3 underline">
                      privacy policy
                    </Link>
                  </label>
                </fieldset>
                <button
                  type="submit"
                  className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent w-full first-letter:uppercase before:content-none">
                  Submit Request
                </button>
              </form>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
