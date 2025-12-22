'use client';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { transform } from 'framer-motion';

export default function Hero() {
  const fullText1 =
    'Professional online therapy and counseling services tailored to your needs. ' +
    'Connect with licensed therapists from the comfort of your home.';
  const fullText='Unveiled Echo of Inner Self';
  const [text, setText] = useState('');
  const speed=5; 
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText.charAt(i));
      i++;

      if (i >= fullText.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative py-24 md:py-32">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/bg1_bg.jpg"
          alt="Calm Nature"
          className="w-full h-full object-cover opacity-80"
          style={{opacity:'0.5', transform: 'scale(1.1)', filter: 'blur(2px)' }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-20">          
          <span className="font-bold text-reflect text-slate-800 z-50" data-text={text}>{text}</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-800 max-w-2xl mx-auto mb-10 font-mono">
          {fullText1}
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="#contact"
            className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition flex items-center gap-2"
          >
            Start Your Journey <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#mission"
            className="bg-white text-slate-700 border border-slate-300 px-8 py-3 rounded-full font-semibold hover:bg-slate-50 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}