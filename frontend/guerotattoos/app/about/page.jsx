import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#0e0e0e] text-[#f3f0e7] min-h-screen px-6 py-20">
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left Side: Image */}
        <div className="md:w-1/3 w-full flex justify-center md:justify-start">
          <Image
            src="/guero/gueroPic.jpg"
            alt="Guero Portrait"
            width={300}
            height={400}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="md:w-2/3 w-full text-center md:text-left">
          <h1 className="text-4xl font-bold mb-6">About Guero Tattoo Studio</h1>
          <p className="text-lg text-[#d6d3c9] leading-relaxed">
            Guero Tattoo Studio is a one-artist private studio based in Las Vegas, Nevada — 
            the heart of Sin City. It's where passion, heritage, and ink come together to create 
            custom tattoos that speak to your soul. Founded and run by a proud Mexican artist, 
            we specialize in meaningful, timeless tattoo work rooted in culture and executed with precision.
          </p>

          <div className="my-10 border-t border-[#2a2a2a]" />

          <h2 className="text-2xl font-semibold mb-4">Meet the Artist</h2>
          <p className="text-md text-[#d6d3c9] mb-6">
            Guero — born in Jalisco, Mexico and raised on both tradition and grit — spent years in the 
            streets of Chicago before bringing his vision west to Las Vegas. His journey has shaped a bold, 
            soulful style grounded in clean linework, deep black ink, and Day of the Dead inspired visuals. 
            Every tattoo is a collaboration — a permanent piece of art that’s personal, powerful, and proudly worn.
          </p>

          <p className="italic text-sm text-[#aaa]">
            “A good tattoo should outlive trends. It should mean something.”
          </p>
        </div>
      </section>
    </main>
  );
}
