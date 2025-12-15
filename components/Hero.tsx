import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          Unveiled Echo of Inner Self
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Professional online therapy and counseling services tailored to your needs. 
          Connect with licensed therapists from the comfort of your home.
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