'use client';

import SignupBgImage from '@public/images/ns-img-374.jpg';
import Image from 'next/image';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const services = [
  { id: 'saas-mvp', label: 'SaaS MVP Build' },
  { id: 'saas-platform', label: 'SaaS Platform Development' },
  { id: 'ai-integration', label: 'AI Integration' },
  { id: 'ai-agents', label: 'AI Agent Development' },
  { id: 'rag', label: 'Vector DB & RAG' },
  { id: 'dashboard', label: 'Dashboard Design' },
  { id: 'stripe', label: 'Stripe Billing' },
  { id: 'auth', label: 'Authentication & SSO' },
  { id: 'architecture', label: 'Architecture Consulting' },
  { id: 'migration', label: 'Platform Migration' },
];

const budgets = [
  { id: 'budget-1', label: '£10,000 - £25,000' },
  { id: 'budget-2', label: '£25,000 - £50,000' },
  { id: 'budget-3', label: '£50,000 - £100,000' },
  { id: 'budget-4', label: '£100,000+' },
];

const timelines = [
  { id: 'asap', label: 'ASAP' },
  { id: '1-3', label: '1-3 months' },
  { id: '3-6', label: '3-6 months' },
  { id: 'flexible', label: 'Flexible' },
];

const ProjectEnquiryForm = () => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedTimeline, setSelectedTimeline] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const serviceLabels = selectedServices.map(id => services.find(s => s.id === id)?.label).join(', ');
    const budgetLabel = budgets.find(b => b.id === selectedBudget)?.label || '';
    const timelineLabel = timelines.find(t => t.id === selectedTimeline)?.label || '';

    try {
      const response = await fetch('https://formspree.io/f/mbdlreqa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          services: serviceLabels,
          budget: budgetLabel,
          timeline: timelineLabel,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          description: formData.description,
        }),
      });
      
      if (response.ok) {
        setStep(5);
      } else {
        alert('Something went wrong. Please try again or call us on +44 (0) [PHONE-TO-CONFIRM].');
      }
    } catch {
      alert('Something went wrong. Please try again or call us on +44 (0) [PHONE-TO-CONFIRM].');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-[120px] pb-[70px] lg:pt-[180px] lg:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto w-full max-w-[400px] lg:max-w-[930px]">
          <div className="flex items-center overflow-hidden rounded-[20px] bg-white py-2.5 pr-2.5 md:rounded-4xl lg:gap-8 dark:bg-black">
            <RevealAnimation delay={0.1}>
              <div className="w-full px-8 py-10 lg:max-w-[450px]">
                {/* Progress indicator */}
                {step < 5 && (
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      {[1, 2, 3, 4].map(i => (
                        <div
                          key={i}
                          className={`size-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                            step >= i
                              ? 'bg-primary-500 text-white'
                              : 'bg-background-3 dark:bg-background-6 text-secondary/40 dark:text-accent/40'
                          }`}>
                          {i}
                        </div>
                      ))}
                    </div>
                    <div className="h-1 bg-background-3 dark:bg-background-6 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-500 transition-all duration-300"
                        style={{ width: `${((step - 1) / 3) * 100}%` }}
                      />
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Services */}
                  <div className={`transition-all duration-300 ${step === 1 ? 'block' : 'hidden'}`}>
                    <h3 className="text-heading-6 text-secondary dark:text-accent mb-2">What do you need?</h3>
                    <p className="text-secondary/60 dark:text-accent/60 text-sm mb-6">Select all that apply</p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {services.map(service => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => toggleService(service.id)}
                          className={`p-3 rounded-xl text-left text-sm transition-all border ${
                            selectedServices.includes(service.id)
                              ? 'bg-primary-500 text-white border-primary-500'
                              : 'bg-background-3 dark:bg-background-6 text-secondary dark:text-accent border-transparent hover:border-primary-500'
                          }`}>
                          {service.label}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={selectedServices.length === 0}
                      className="btn btn-md btn-primary hover:btn-secondary w-full disabled:opacity-50 disabled:cursor-not-allowed">
                      Continue
                    </button>
                  </div>

                  {/* Step 2: Budget */}
                  <div className={`transition-all duration-300 ${step === 2 ? 'block' : 'hidden'}`}>
                    <h3 className="text-heading-6 text-secondary dark:text-accent mb-2">What is your budget?</h3>
                    <p className="text-secondary/60 dark:text-accent/60 text-sm mb-6">Select your investment range</p>
                    <div className="space-y-3 mb-8">
                      {budgets.map(budget => (
                        <button
                          key={budget.id}
                          type="button"
                          onClick={() => setSelectedBudget(budget.id)}
                          className={`w-full p-4 rounded-xl text-left transition-all border ${
                            selectedBudget === budget.id
                              ? 'bg-primary-500 text-white border-primary-500'
                              : 'bg-background-3 dark:bg-background-6 text-secondary dark:text-accent border-transparent hover:border-primary-500'
                          }`}>
                          {budget.label}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={prevStep} className="btn btn-md btn-white dark:btn-transparent flex-1">
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!selectedBudget}
                        className="btn btn-md btn-primary hover:btn-secondary flex-1 disabled:opacity-50 disabled:cursor-not-allowed">
                        Continue
                      </button>
                    </div>
                  </div>

                  {/* Step 3: Timeline */}
                  <div className={`transition-all duration-300 ${step === 3 ? 'block' : 'hidden'}`}>
                    <h3 className="text-heading-6 text-secondary dark:text-accent mb-2">When do you need this?</h3>
                    <p className="text-secondary/60 dark:text-accent/60 text-sm mb-6">Select your timeline</p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {timelines.map(timeline => (
                        <button
                          key={timeline.id}
                          type="button"
                          onClick={() => setSelectedTimeline(timeline.id)}
                          className={`p-4 rounded-xl text-center transition-all border ${
                            selectedTimeline === timeline.id
                              ? 'bg-primary-500 text-white border-primary-500'
                              : 'bg-background-3 dark:bg-background-6 text-secondary dark:text-accent border-transparent hover:border-primary-500'
                          }`}>
                          {timeline.label}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={prevStep} className="btn btn-md btn-white dark:btn-transparent flex-1">
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!selectedTimeline}
                        className="btn btn-md btn-primary hover:btn-secondary flex-1 disabled:opacity-50 disabled:cursor-not-allowed">
                        Continue
                      </button>
                    </div>
                  </div>

                  {/* Step 4: Contact Details */}
                  <div className={`transition-all duration-300 ${step === 4 ? 'block' : 'hidden'}`}>
                    <h3 className="text-heading-6 text-secondary dark:text-accent mb-2">Your details</h3>
                    <p className="text-secondary/60 dark:text-accent/60 text-sm mb-6">How can we reach you?</p>
                    <div className="space-y-4 mb-8">
                      <fieldset className="space-y-2">
                        <label htmlFor="name" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                          Your name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="auth-form-input"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                      </fieldset>
                      <fieldset className="space-y-2">
                        <label htmlFor="email" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="auth-form-input"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                      </fieldset>
                      <fieldset className="space-y-2">
                        <label htmlFor="phone" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="auth-form-input"
                          placeholder="07xxx xxxxxx"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </fieldset>
                      <fieldset className="space-y-2">
                        <label htmlFor="description" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                          Tell us about your project
                        </label>
                        <textarea
                          id="description"
                          rows={3}
                          className="auth-form-input resize-none"
                          placeholder="Brief description of what you need..."
                          value={formData.description}
                          onChange={e => setFormData({ ...formData, description: e.target.value })}
                        />
                      </fieldset>
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={prevStep} className="btn btn-md btn-white dark:btn-transparent flex-1">
                        Back
                      </button>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn btn-md btn-primary hover:btn-secondary flex-1 disabled:opacity-50">
                        {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                      </button>
                    </div>
                  </div>

                  {/* Step 5: Success */}
                  <div className={`transition-all duration-300 ${step === 5 ? 'block' : 'hidden'}`}>
                    <div className="text-center py-8">
                      <div className="flex justify-center mb-6">
                        <svg className="size-20 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-heading-5 text-secondary dark:text-accent mb-3">Thank you!</h3>
                      <p className="text-secondary/60 dark:text-accent/60 mb-6">
                        Your enquiry has been received. We will be in touch within 24 hours to discuss your project.
                      </p>
                      <a href="/" className="btn btn-md btn-primary hover:btn-secondary">
                        Back to Homepage
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2} direction="up">
              <div className="hidden lg:block">
                <figure className="h-[665px] w-full max-w-[420px] overflow-hidden rounded-[20px]">
                  <Image src={SignupBgImage} alt="project-enquiry" className="size-full object-cover" />
                </figure>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

ProjectEnquiryForm.displayName = 'ProjectEnquiryForm';
export default ProjectEnquiryForm;
