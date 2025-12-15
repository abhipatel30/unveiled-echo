// components/ContactForm.tsx
'use client';

import { useState } from 'react';
import { sendEmail } from '@/app/actions';
import { Loader2 } from 'lucide-react'; // Optional: for a spinning icon

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(formData: FormData) {
    setStatus('submitting');
    
    // Call the server action we created in step 3
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get Started Today</h2>
          <p className="text-slate-600">Fill out the form below and we'll match you with the right therapist.</p>
        </div>

        {status === 'success' ? (
          <div className="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200">
            <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
            <p>Thank you for reaching out. We will review your details and get back to you at <strong>intakes@unveiledecho.com</strong> shortly.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-6 px-6 py-2 bg-white border border-green-200 rounded-full text-green-700 font-medium hover:bg-green-100 transition"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form action={handleSubmit} className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
              <input name="name" type="text" required className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                <input name="email" type="email" required className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input name="phone" type="tel" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tell us about yourself *</label>
              <textarea name="message" rows={4} maxLength={1000} required className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"></textarea>
            </div>

            {status === 'error' && (
              <p className="text-red-600 text-sm text-center">Something went wrong. Please try again or email us directly.</p>
            )}

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition disabled:bg-teal-400 disabled:cursor-not-allowed flex justify-center items-center gap-2"
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