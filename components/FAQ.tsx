import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion" // *Requires installing shadcn/ui or use simple logic below

// Simple Tailwind Version (No external lib dependency for simplicity)
export default function FAQ() {
  const faqs = [
    { q: "How does online therapy work?", a: "Online therapy works just like traditional therapy but is conducted via secure video calls or messaging." },
    { q: "Is my information confidential?", a: "Yes. We use end-to-end encryption and comply with DPDP regulations to ensure your privacy." },
    { q: "How do I know if online therapy is right for me?", a: "It's a great option if you need flexibility, privacy, and comfort. We offer a consultation to help you decide." },
    { q: "Can I switch therapists if needed?", a: "Absolutely. The therapeutic relationship is key, and we will help you find the best match." },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-lg p-6 border border-slate-200 cursor-pointer">
              <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                {faq.q}
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}