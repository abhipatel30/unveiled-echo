// Simple Tailwind Version (No external dependencies)
export default function FAQ() {
  const faqs = [
    {
      question: "How does online therapy work?",
      answer: "Online therapy works through secure video calls, phone calls, or messaging. You'll meet with your licensed therapist at scheduled times from the comfort of your home. Sessions are just as effective as in-person therapy and offer more flexibility.",
    },
    {
      question: "How long is each therapy session?",
      answer: "Standard therapy sessions are 50 minutes long. However, we offer flexible scheduling options including 30-minute check-ins and 90-minute intensive sessions based on your needs.",
    },
    {
      question: "Is my information confidential and secure?",
      answer: "Absolutely. We use DPDP-compliant, encrypted platforms for all communications. Your privacy is our top priority, and all therapists follow strict confidentiality guidelines as required by their professional licenses.",
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "We understand that life happens. You can cancel or reschedule appointments up to 24 hours in advance without any charges. Cancellations with less than 24 hours notice may incur a fee.",
    },
    {
      question: "How do I know if online therapy is right for me?",
      answer: "Online therapy is ideal if you value convenience, have a busy schedule, or prefer the comfort of your own space. It's effective for most mental health concerns including anxiety, depression, stress, and relationship issues. We offer a free consultation to help you decide.",
    },
    {
      question: "What should I expect in my first session?",
      answer: "Your first session is an opportunity to meet your therapist, discuss your concerns, and develop initial goals. Your therapist will ask questions to understand your situation better and explain how they can help. There's no pressure - it's a safe space for you to share at your own pace.",
    },
    {
      question: "Can I switch therapists if needed?",
      answer: "Yes, absolutely. Finding the right therapist fit is important for successful therapy. If you feel your current therapist isn't the right match, we'll help you connect with another professional who better suits your needs at no additional cost.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-lg p-6 border border-slate-200 cursor-pointer">
              <summary className="font-semibold text-slate-800 list-none flex justify-between items-center">
                {faq.question}
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}