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
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We believe everyone deserves access to quality mental health care. Our mission is to make professional therapy accessible, affordable, and stigma-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}