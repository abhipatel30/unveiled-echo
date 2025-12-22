// components/ContactForm.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { sendEmail } from '@/app/actions';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-scroll');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  async function handleSubmit(formData: FormData) {
    setStatus('submitting');
    
    // Call the server action
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus('success');
      // Reset form after successful submission
      formRef.current?.reset();
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 md:py-40 bg-gradient-to-br from-teal-100 via-emerald-50 to-cyan-100">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">Get Started Today</h2>
          <p className="text-lg md:text-xl text-teal-800 leading-relaxed">Fill out the form below and we'll match you with the right therapist.</p>
        </div>

        {status === 'success' ? (
          <div className="card-neon bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200">
            <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
            <p>Thank you for reaching out. We will review your details and get back to you at <strong>intakes@unveiledecho.com</strong> shortly.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="btn-white-to-teal mt-6 px-6 py-2 bg-white border border-green-200 rounded-full text-green-700 font-medium transition relative z-10"
            >
              Submit another message
            </button>
          </div>
        ) : (
          <form ref={formRef} action={handleSubmit} className="space-y-6 bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-teal-100 shadow-lg">
            <div>
              <label className="block text-sm font-medium text-teal-900 mb-1">Full Name *</label>
              <input name="name" type="text" required className="w-full p-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white/50" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-teal-900 mb-1">Email Address *</label>
                <input name="email" type="email" required className="w-full p-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white/50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-teal-900 mb-1">Phone Number</label>
                <input name="phone" type="tel" className="w-full p-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white/50" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-teal-900 mb-1">Tell us about yourself *</label>
              <textarea name="message" rows={4} maxLength={1000} required className="w-full p-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white/50"></textarea>
            </div>

            {status === 'error' && (
              <p className="text-red-600 text-sm text-center">Something went wrong. Please try again or email us directly.</p>
            )}

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="btn-slide w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:text-white transition disabled:bg-teal-400 disabled:cursor-not-allowed flex justify-center items-center gap-2 relative z-10"
            >
              {status === 'submitting' ? (
                 <>Sending...</>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}