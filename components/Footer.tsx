import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">Unveiled Echo</h3>
            <p className="text-sm leading-relaxed max-w-sm">
              Professional online therapy and counseling services. Your journey to better mental health starts here.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#mission" className="hover:text-teal-400">About Us</Link></li>
              <li><Link href="#services" className="hover:text-teal-400">Services</Link></li>
              <li><Link href="#faq" className="hover:text-teal-400">FAQ</Link></li>
              <li><Link href="#" className="hover:text-teal-400">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>support@unveiledecho.com</li>
              <li>1-800-THERAPY</li>
              <li>Available Nationwide</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>© 2025 Unveiled Echo. All rights reserved.</p>
          <p className="mt-2 text-red-400">If you're experiencing a mental health crisis, please call the National Suicide Prevention Lifeline at 112</p>
        </div>
      </div>
    </footer>
  );
}