'use client';

import { memo, useRef, useEffect } from 'react';
import { useParallax } from '@/hooks/useParallax';

const faqs = [
  {
    question: "How does online therapy work?",
    answer: "Online therapy works through secure video calls, phone calls, or messaging. You'll meet with your licensed therapist at scheduled times from the comfort of your home. Sessions are just as effective as in-person therapy and offer more flexibility.",
  },
  {
    question: "How long is each therapy session?",
    answer: "Standard therapy sessions are 50 minutes long. However, we offer flexible scheduling options including 30-minute check-ins and 90-minute intensive sessions based on your needs.",
  },
  {
    question: "Is my information confidential and secure?",
    answer: "Absolutely. We use DPDP-compliant, encrypted platforms for all communications. Your privacy is our top priority, and all therapists follow strict confidentiality guidelines as required by their professional licenses.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer: "We understand that life happens. You can cancel or reschedule appointments up to 24 hours in advance without any charges. Cancellations with less than 24 hours notice may incur a fee.",
  },
  {
    question: "How do I know if online therapy is right for me?",
    answer: "Online therapy is ideal if you value convenience, have a busy schedule, or prefer the comfort of your own space. It's effective for most mental health concerns including anxiety, depression, stress, and relationship issues. We offer a free consultation to help you decide.",
  },
  {
    question: "What should I expect in my first session?",
    answer: "Your first session is an opportunity to meet your therapist, discuss your concerns, and develop initial goals. Your therapist will ask questions to understand your situation better and explain how they can help. There's no pressure - it's a safe space for you to share at your own pace.",
  },
  {
    question: "Can I switch therapists if needed?",
    answer: "Yes, absolutely. Finding the right therapist fit is important for successful therapy. If you feel your current therapist isn't the right match, we'll help you connect with another professional who better suits your needs at no additional cost.",
  },
];

function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useParallax(0.3);

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

  return (
    <section ref={sectionRef} id="faq" className="relative py-32 md:py-40 overflow-hidden">
      <div ref={parallaxRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/faqtt.jpg"
          alt="FAQ Background"
          className="w-full h-full object-cover opacity-80"
          style={{opacity:'0.4', transform: 'scale(1.15)', filter: 'blur(2px)' }}
        />
      </div>
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-900 mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-teal-100 cursor-pointer hover:shadow-lg transition-shadow hover:border-teal-200">
              <summary className="font-semibold text-teal-900 list-none flex justify-between items-center cursor-pointer hover:text-teal-700 transition">
                {faq.question}
                <svg className="caret-svg" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="mt-4 text-teal-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(FAQ);