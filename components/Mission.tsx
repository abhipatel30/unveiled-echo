'use client';

import { useRef, useEffect } from 'react';
import { ShieldCheck, Heart, UserCheck, Globe } from 'lucide-react';

const features = [
  {
    icon: <Heart className="h-6 w-6 text-teal-600" />,
    title: "Compassionate Care",
    desc: "With a deep respect for your stories, your struggles, and your strength, we believe that healing begins in a space where you feel seen, heard, and accepted exactly as you are."
  },
  {
    icon: <Globe className="h-6 w-6 text-teal-600" />,
    title: "Accessible Support",
    desc: "Support should be easy to reach, no matter where you are. Through secure online sessions, you can connect with compassionate care from the comfort and privacy of your own space."
  },
  {
    icon: <UserCheck className="h-6 w-6 text-teal-600" />,
    title: "Professional Excellence",
    desc: "We are committed to providing high-quality, evidence-based care grounded in empathy, integrity, and professionalism. Our goal is to ensure every session is guided by practices that are tailored to your unique needs."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-teal-600" />,
    title: "RCI + DPDP Compliant",
    desc: "Guided by the principles of ethical care and professional accountability, we adhere to RCI standards and fully comply with the DPDP Act. Your privacy, trust, and emotional safety are at the core of every session, ensuring a secure and respectful therapeutic experience."
  }
];

export default function Mission() {
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

  return (
    <section ref={sectionRef} id="mission" className="py-32 md:py-40 bg-gradient-to-r from-teal-200 via-emerald-100 to-cyan-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl text-teal-800 max-w-3xl mx-auto leading-relaxed">
            We believe everyone deserves access to quality mental health care. Our mission is to make professional therapy accessible, affordable, and stigma-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="p-6 bg-white/90 rounded-2xl border border-teal-100 backdrop-blur-sm cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-teal-200 hover:bg-white">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-teal-900 group-hover:text-teal-700 transition-colors">{item.title}</h3>
              <p className="text-teal-700 text-sm leading-relaxed group-hover:text-teal-600 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}