'use client';

import InstagramRedirect from "@/components/InstagramRedirect";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/gallery/tattoo1.jpg",
  "/gallery/tattoo2.jpg",
  "/gallery/tattoo3.jpg",
  "/gallery/tattoo4.jpg",
  "/gallery/tattoo5.jpg",
  "/gallery/tattoo6.jpg",
  "/gallery/tattoo7.jpg",
  "/gallery/tattoo8.jpg",
  "/gallery/tattoo9.jpg",
];

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <main className="bg-[#0e0e0e] text-[#f3f0e7] min-h-screen px-6 py-20">
      <section className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-wider">Gallery</h1>
          <p className="text-[#aaa] text-sm mt-2">
            Some of my favorite work — scroll through and get inspired.
          </p>
          <br />
          <p>Check out some more pieces on my instagram.</p>
          <br />
          <div className="flex justify-center mt-2">
            <InstagramRedirect />
          </div>
        </header>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(src)}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-[1.03] hover:brightness-110 transition duration-300"
            >
              <div className="aspect-[3/4] relative w-full h-0 pb-[133%]">
                <Image
                  src={src}
                  alt={`Tattoo ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-3xl w-full p-4">
            <Image
              src={activeImage}
              alt="Zoomed tattoo"
              width={1200}
              height={1600}
              className="w-full h-auto object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl bg-[#222] px-3 py-1 rounded hover:bg-[#444] transition"
              onClick={() => setActiveImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
