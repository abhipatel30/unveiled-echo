'use client';

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get Started Today</h2>
          <p className="text-slate-600">Fill out the form below and we'll match you with the right therapist.</p>
        </div>

        <form className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
            <input type="text" required className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
              <input type="email" required className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <input type="tel" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tell us about yourself *</label>
            <textarea rows={4} maxLength={1000} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"></textarea>
            <p className="text-xs text-slate-500 mt-1 text-right">0/1000 characters</p>
          </div>

          <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
            Send Message
          </button>
          
          <p className="text-center text-xs text-slate-500">
            Your information is confidential and secure. We typically respond within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
}