'use client';

import homeIcon from '@public/images/icons/home.svg';
import mailIcon from '@public/images/icons/mail-open.svg';
import phoneIcon from '@public/images/icons/phone-right.svg';
import gradientThree from '@public/images/ns-img-498.png';
import gradientTwo from '@public/images/ns-img-509.png';
import gradientOne from '@public/images/ns-img-510.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdlreqa';

const contactInfoItems = [
  {
    id: 1,
    icon: homeIcon,
    title: 'Our Office',
    content: '[ADDRESS-REMOVED]',
    gradient: gradientOne,
    gradientClass: 'top-[-187px] left-[174px] -rotate-[78deg]',
  },
  {
    id: 2,
    icon: mailIcon,
    title: 'Email Us',
    content: 'hello@vergentos.com',
    link: 'mailto:hello@vergentos.com',
    gradient: gradientTwo,
    gradientClass: 'top-[-206px] left-[-36px] rotate-[62deg]',
  },
  {
    id: 3,
    icon: phoneIcon,
    title: 'Call Us',
    content: '+44 (0) [PHONE-TO-CONFIRM]',
    link: 'tel:+44 (0) [PHONE-TO-CONFIRM]',
    gradient: gradientThree,
    gradientClass: 'top-[-184px] left-[-185px]',
  },
];

type FormState = {
  fullname: string;
  number: string;
  email: string;
  subject: string;
  message: string;
  terms: boolean;
};

const initialForm: FormState = {
  fullname: '',
  number: '',
  email: '',
  subject: '',
  message: '',
  terms: false,
};

const ContactInfo = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.fullname,
          phone: form.number,
          email: form.email,
          projectType: form.subject,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-20 xl:pt-[180px] xl:pb-[100px]"
      aria-label="Contact Information and Form">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="mx-auto max-w-[680px] space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2>Let&apos;s discuss your project</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Whether you need a new web platform, API integration, or AI automation solution, we&apos;re here to help.
                Book a free consultation or send us your project details below.
              </p>
            </RevealAnimation>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:gap-8 xl:gap-[70px]">
            {/* contact info cards */}
            <div className="flex flex-col gap-8 md:flex-row lg:flex-col">
              {contactInfoItems.map((item) => (
                <RevealAnimation key={item.id} delay={0.4}>
                  <div className="bg-secondary dark:bg-background-6 relative w-full space-y-6 overflow-hidden rounded-[20px] p-11 text-center md:max-w-[371px]">
                    <figure className={`pointer-events-none absolute size-[350px] overflow-hidden select-none ${item.gradientClass}`}>
                      <Image src={item.gradient} alt="Decorative gradient overlay" className="size-full object-cover" />
                    </figure>
                    <figure className="mx-auto size-10 overflow-hidden">
                      <Image src={item.icon} alt={`${item.title} icon`} className="size-full object-cover" />
                    </figure>
                    <div className="space-y-2.5">
                      <p className="text-heading-6 text-accent">{item.title}</p>
                      {item.link ? (
                        <p className="text-accent/60"><Link href={item.link}>{item.content}</Link></p>
                      ) : (
                        <p className="text-accent/60">{item.content}</p>
                      )}
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            {/* contact form */}
            <RevealAnimation
              delay={0.3}
              className="dark:bg-background-6 mx-auto w-full max-w-[847px] rounded-4xl bg-white p-6 md:p-8 lg:p-11">
              <div>
              {status === 'success' && (
                <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-5 py-4">
                  <svg className="text-green-500 size-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-700 dark:text-green-400 text-sm font-medium">Message sent! We&apos;ll get back to you within 2 hours during business hours.</p>
                </div>
              )}
              {(
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="w-full space-y-2 lg:max-w-[364px]">
                      <label htmlFor="fullname" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                        Your name
                      </label>
                      <input
                        type="text" id="fullname" name="fullname"
                        placeholder="Enter your name" required autoComplete="name"
                        value={form.fullname} onChange={handleChange}
                        className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                      />
                    </div>
                    <div className="w-full max-w-[364px] space-y-2">
                      <label htmlFor="number" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                        Phone number
                      </label>
                      <input
                        type="tel" id="number" name="number"
                        placeholder="Enter your phone number" required autoComplete="tel"
                        value={form.number} onChange={handleChange}
                        className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                      Email address
                    </label>
                    <input
                      type="email" id="email" name="email"
                      placeholder="Enter your email" required autoComplete="email"
                      value={form.email} onChange={handleChange}
                      className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                      Project type
                    </label>
                    <select
                      id="subject" name="subject" required
                      value={form.subject} onChange={handleChange}
                      className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 text-secondary/60 focus:border-secondary dark:text-accent/60 h-[48px] w-full rounded-full border px-[18px] py-3 font-normal focus:outline-none xl:h-[41px]">
                      <option value="">Select a project type</option>
                      <option value="web-development">Web Development (Next.js/React)</option>
                      <option value="cms-integration">Bespoke CMS Integration</option>
                      <option value="sage-integration">Sage 50 API Integration</option>
                      <option value="ai-implementation">AI &amp; Automation</option>
                      <option value="hosting-support">Managed Hosting &amp; Support</option>
                      <option value="consultancy">Technical Consultancy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message" name="message" rows={7}
                      placeholder="Describe your project, goals, and timeline..."
                      required value={form.message} onChange={handleChange}
                      className="dark:bg-background-6 dark:border-stroke-7 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary dark:focus-visible:border-stroke-4/20 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent w-full rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none"
                    />
                  </div>

                  <fieldset className="mb-4 flex items-center gap-2">
                    <label className="flex items-center gap-x-3">
                      <input
                        id="terms" type="checkbox" name="terms"
                        className="peer sr-only" required
                        checked={form.terms} onChange={handleChange}
                      />
                      <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                      <span className="sr-only">Agree to the terms and conditions</span>
                    </label>
                    <label htmlFor="terms" className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                      I agree with the
                      <Link href="/privacy-policy" className="text-primary-500 text-tagline-3 underline"> privacy policy</Link>
                    </label>
                  </fieldset>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly at hello@vergentos.com</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent w-full first-letter:uppercase before:content-none disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
                  </button>
                </form>
              )}
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
