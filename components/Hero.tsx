'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

export default function Hero() {
  const parallaxRef = useParallax(0.5);
  const fullText = 'Unveiled Echo of Inner Self';
  const fullText1 = 'Professional online therapy and counseling services tailored to your needs. Connect with licensed therapists from the comfort of your home.';
  const [text, setText] = useState('');
  const speed = 50;
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative py-32 md:py-48 overflow-hidden min-h-screen flex items-center">
      <div ref={parallaxRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/bg1_bg.jpg"
          alt="Calm Nature"
          className="w-full h-full object-cover"
          style={{opacity:'0.4', transform: 'scale(1.1)', filter: 'blur(1px)' }}
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-24">          
          <span className="font-bold text-reflect text-slate-800 z-50" data-text={text}>{text}</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-800 max-w-3xl mx-auto mb-12 font-mono leading-relaxed">
          {fullText1}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="#contact"
            className="btn-slide bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:text-white transition flex items-center gap-2 relative z-10"
          >
            Start Your Journey <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#mission"
            className="btn-white-to-teal bg-white text-slate-800 border border-slate-300 px-8 py-3 rounded-full font-semibold transition relative z-10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}