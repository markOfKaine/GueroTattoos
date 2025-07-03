import WaterMarkLogo from "@/components/WaterMarkLogo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f3f0e7] font-sans">

<section className="relative text-center py-24 px-6 overflow-hidden">
        {/* Watermarked background logo */}
        <WaterMarkLogo />

        {/* Hero text content */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight">
            Tattoos That Tell Your Story
          </h1>
          <p className="text-lg text-[#cfcac0] max-w-xl mx-auto mb-8">
            Hand-crafted ink by expert artists. Traditional, realism, blackwork & more.
          </p>
          <a
            href="/book"
            className="inline-block bg-[#f3f0e7] text-black font-medium py-3 px-6 rounded-full hover:bg-[#e1ddd2] transition"
          >
            Book Your Appointment
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-[#151515] text-center">
        <h2 className="text-3xl font-semibold mb-4">About Guero</h2>
        <p className="max-w-3xl mx-auto text-[#cfcac0] text-lg leading-relaxed">
          Located in the heart of the sin city, Guero tattoos is a sanctuary for self-expression. Our
          calavera-inspired vibe merges bold tradition with modern edge. We specialize in unique,
          personal artwork that resonates.
        </p>
      </section>

    {/* Studio Location */}
    <section id="artists" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-8">Come check us out</h2>

      <p className="text-[#d6d3c9] max-w-xl mx-auto mb-10 text-sm leading-relaxed">
        Guero Tattoo Studio is located in Las Vegas, Nevada — by appointment only. Book online and we’ll send you directions and parking info upon confirmation.
      </p>

      <div className="max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg border border-[#2a2a2a]">
        <iframe
          title="Guero Tattoo Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.153946610606!2d-115.1398304847448!3d36.16994197997905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c437e5fbf645%3A0x9f0ba1d67c1ea6db!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1687372378162!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>

    </div>
  );
}
