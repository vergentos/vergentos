'use client';

import gradient16 from '@public/images/ns-img-495.png';
import gradient3 from '@public/images/ns-img-508.png';
import gradient27 from '@public/images/ns-img-515.png';
import Image from 'next/image';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="py-[100px]">
        <div className="main-container">
          <div className="mb-[70px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Support Options</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2 className="mx-auto max-w-[810px]">Choose how you would like to get help</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[542px]">
                  We offer multiple ways to support our clients. Select the option that best suits your needs.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div className="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
            <RevealAnimation delay={0.4}>
              <div className="col-span-12 md:col-span-4">
                <div className="bg-background-2 dark:bg-background-6 relative z-10 space-y-6 overflow-hidden rounded-[20px] px-6 py-8">
                  <figure className="pointer-events-none absolute -top-[66%] -left-[60%] -z-10 size-[410px] rotate-[304deg] select-none">
                    <Image src={gradient3} className="size-full object-contain" alt="" />
                  </figure>
                  <div className="flex items-center justify-center">
                    <svg className="size-12 text-secondary dark:text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                    </svg>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-heading-5">Hosting Control Panel</h3>
                    <p className="line-clamp-2">
                      Manage your website hosting, domains, emails, and server settings through our client portal.
                    </p>
                  </div>
                  <div className="text-center">
                    <a href="#contact-form" className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md inline-flex">
                      Access Control Panel
                    </a>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <div className="col-span-12 md:col-span-4">
                <div className="bg-background-2 dark:bg-background-6 relative z-10 space-y-6 overflow-hidden rounded-[20px] px-6 py-8">
                  <figure className="pointer-events-none absolute -top-[74%] -right-[70%] -z-10 size-[410px] rotate-[175deg] select-none">
                    <Image src={gradient27} className="size-full object-contain" alt="" />
                  </figure>
                  <div className="flex items-center justify-center">
                    <svg className="size-12 text-secondary dark:text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                    </svg>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-heading-5">Submit a Ticket</h3>
                    <p className="line-clamp-2">
                      Submit a support request for technical issues. Our team typically responds within 4 hours.
                    </p>
                  </div>
                  <div className="text-center">
                    <a href="#contact-form" className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md inline-flex">
                      Submit a Ticket
                    </a>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <div className="col-span-12 md:col-span-4">
                <div className="bg-background-2 dark:bg-background-6 relative z-10 space-y-6 overflow-hidden rounded-[20px] px-6 py-8">
                  <figure className="pointer-events-none absolute -top-[74%] -right-[35%] -z-10 size-[410px] rotate-[175deg] select-none">
                    <Image src={gradient16} className="size-full object-contain" alt="" />
                  </figure>
                  <div className="flex items-center justify-center">
                    <svg className="size-12 text-secondary dark:text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-heading-5">Webmail Access</h3>
                    <p className="line-clamp-2">
                      Access your business email through our secure webmail portal from any device.
                    </p>
                  </div>
                  <div className="text-center">
                    <button onClick={() => setShowModal(true)} className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md">
                      Open Webmail
                    </button>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-background-6 rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <svg className="size-16 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-heading-5 text-secondary dark:text-accent">Coming Soon</h3>
              <p className="text-secondary/60 dark:text-accent/60">
                We are currently integrating our new client portal with enhanced webmail access. This feature will be available shortly.
              </p>
              <p className="text-secondary/60 dark:text-accent/60 text-sm">
                In the meantime, please contact us at <a href="mailto:support@mediatopia.co.uk" className="text-primary-500 hover:underline">support@mediatopia.co.uk</a> for email assistance.
              </p>
              <button onClick={() => setShowModal(false)} className="btn btn-primary btn-md w-full mt-4">
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
