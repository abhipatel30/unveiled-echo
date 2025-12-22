'use client';

import { useRef, useEffect } from 'react';

export default function Therapist() {
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
    <section ref={sectionRef} id="therapist" className="relative py-32 md:py-40 bg-gradient-to-r from-teal-100 via-cyan-100 to-emerald-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">Meet Our Therapist</h2>
        <p className="text-lg md:text-xl text-teal-800 max-w-2xl mx-auto leading-relaxed">
          Our team of experienced, licensed professionals is here to support you on your mental health journey
        </p>
      </div>
    </section>
  );
}