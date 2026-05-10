'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdlreqa';

interface CtaInputFormProps {
  btnClass?: string;
  ctaBtnText?: string;
  inputFieldClass?: string;
  inputType?: 'email' | 'tel';
  inputPlaceholder?: string;
}

const CtaInputForm = ({
  btnClass,
  ctaBtnText = 'Get Started',
  inputFieldClass,
  inputType = 'email',
  inputPlaceholder = 'Enter your email address',
}: CtaInputFormProps) => {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ [inputType === 'tel' ? 'phone' : 'email']: value }),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setValue('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <RevealAnimation delay={0.4}>
        <p className="text-primary-500 font-medium text-center">✓ Thanks! We&apos;ll be in touch shortly.</p>
      </RevealAnimation>
    );
  }

  return (
    <RevealAnimation delay={0.4}>
      <div className="flex flex-col items-center gap-2">
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-start gap-3 md:flex-row" aria-label="cta-form">
          <input
            type={inputType}
            name={inputType === 'tel' ? 'phone' : 'email'}
            id={inputType === 'tel' ? 'userPhone' : 'userEmail'}
            placeholder={inputPlaceholder}
            required
            value={value}
            onChange={e => setValue(e.target.value)}
            className={cn(
              'placeholder:text-secondary/50 dark:placeholder:text-accent/60 text-secondary dark:text-accent border-secondary/30 dark:border-stroke-7 focus-visible:outline-stroke-7 focus:border-primary-400 dark:focus:border-primary-400 h-12 w-[85%] rounded-full border bg-transparent px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none focus-visible:outline-1 md:w-[430px] lg:w-[340px]',
              inputFieldClass,
            )}
            aria-label="cta-input"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={cn('btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent h-12 w-[85%] md:w-auto disabled:opacity-60 disabled:cursor-not-allowed', btnClass)}
            aria-label="cta-button">
            <span>{status === 'submitting' ? 'Sending…' : ctaBtnText}</span>
          </button>
        </form>
        {status === 'error' && (
          <p className="text-red-500 text-sm text-center">Something went wrong. Please email hello@vergentos.com</p>
        )}
      </div>
    </RevealAnimation>
  );
};

CtaInputForm.displayName = 'CtaInputForm';
export default CtaInputForm;
