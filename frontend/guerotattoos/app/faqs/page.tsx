export default function FAQsPage() {
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "Just fill out the booking form on our site and submit the $5 deposit to reserve your session. You'll receive a confirmation via email.",
    },
    {
      question: "Where is the studio located?",
      answer:
        "Güero Tattoo Studio is based in Las Vegas, Nevada — the heart of Sin City. Location details will be shared upon booking confirmation.",
    },
    {
      question: "Do you accept walk-ins?",
      answer:
        "No. This is a private, appointment-only studio to ensure a focused and personalized experience for every client.",
    },
    {
      question: "What should I do before my appointment?",
      answer:
        "Eat well, hydrate, and get a good night's sleep. Avoid alcohol or blood thinners 24 hours before your session.",
    },
    {
      question: "How do I care for my new tattoo?",
      answer:
        "Keep it clean, moisturized, and avoid sun, pools, and scratching. A detailed aftercare guide will be provided at your session.",
    },
    {
      question: "What styles do you specialize in?",
      answer:
        "Linework, bold black, and Día de los Muertos (Day of the Dead) inspired pieces. Every tattoo is a collaboration built on meaning and culture.",
    },
  ];

  return (
    <main className="bg-[#0e0e0e] text-[#f3f0e7] min-h-screen px-6 py-20">
      <section className="max-w-3xl mx-auto bg-[#111] border border-[#2a2a2a] shadow-xl rounded-xl p-8 sm:p-10 space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-wide mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-[#aaa] text-sm">Everything you need to know before you book</p>
        </header>

        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold mb-2 text-[#f3f0e7]">
                {faq.question}
              </h2>
              <p className="text-[#d6d3c9] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
