export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Jasmine R.",
      quote:
        "Absolutely blown away by Guero's attention to detail. My tattoo turned out better than I imagined. The private studio experience made it feel personal and professional.",
    },
    {
      name: "Diego M.",
      quote:
        "Being Mexican myself, I loved how Guero incorporated cultural elements into my piece. It felt like getting tattooed by someone who really understands the meaning behind the ink.",
    },
    {
      name: "Ava T.",
      quote:
        "Clean, private, and chill. Booking was easy, and the whole process was smooth from start to finish. You can tell he puts heart into every line.",
    },
    {
      name: "Luis G.",
      quote:
        "Hands down the best tattoo experience I’ve had. The Day of the Dead theme we worked on came out stunning. Highly recommend to anyone looking for meaningful work.",
    },
  ];

  return (
    <main className="bg-[#0e0e0e] text-[#f3f0e7] min-h-screen px-6 py-20">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 tracking-wider">
          Client Testimonials
        </h1>
        <div className="grid sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <p className="text-[#d6d3c9] italic mb-4">“{testimonial.quote}”</p>
              <p className="text-right text-sm text-[#aaa]">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
