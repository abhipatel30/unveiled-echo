import { Video, MessageSquare, Lock, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Video Sessions",
    desc: "Face-to-face therapy through secure video calls. Connect in real-time.",
    icon: <Video className="h-8 w-8 text-white" />
  },
  {
    title: "Messaging Support",
    desc: "Send messages between sessions. Get support when you need it most.",
    icon: <MessageSquare className="h-8 w-8 text-white" />
  },
  {
    title: "Specialized Therapy",
    desc: "Tailored evidence-based approaches for your unique journey.",
    icon: <Sparkles className="h-8 w-8 text-white" />
  },
  {
    title: "Complete Privacy",
    desc: "End-to-end encryption. Your privacy and emotional safety are our priority.",
    icon: <Lock className="h-8 w-8 text-white" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">How We Help</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="flex-shrink-0 bg-teal-600 p-3 rounded-lg mr-4">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}