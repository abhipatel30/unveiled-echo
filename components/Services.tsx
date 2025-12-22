import { Video, MessageSquare, Lock, Sparkles } from 'lucide-react';
const services = [
  {
    title: "Video Sessions",
    desc: "Face-to-face therapy through secure video calls. Connect with your therapist in real-time from anywhere.",
    icon: <Video className="h-8 w-8 icon-accent" />
  },
  {
    title: "Messaging Support",
    desc: "Send messages to your therapist between sessions. Get support when you need it most.",
    icon: <MessageSquare className="h-8 w-8 icon-accent" />
  },
  {
    title: "Specialized Therapy",
    desc: "Every person's journey is unique, and so is the care they deserve. We offer specialized therapy tailored to your specific needs, drawing on evidence-based approaches.",
    icon: <Sparkles className="h-8 w-8 icon-accent" />
  },
  {
    title: "Complete Privacy",
    desc: "DPDP compliant platform with end-to-end encryption. Your privacy and safety are our priority.",
    icon: <Lock className="h-8 w-8 icon-accent" />
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 section-bg-lavender section-contrast">
       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/bg1_1.jpg"
          alt="Calm Nature"
          className="w-full h-full object-cover opacity-90"
          style={{opacity:'0.5', transform: 'scale(1.1)', filter: 'blur(5px)' }}
        />
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">How We Help</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-start card-calm border border-slate-100">
              <div className="flex-shrink-0 calm-icon mr-4">
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