"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`flex justify-between items-center px-6 py-4 sticky top-0 z-50 transition-all ${
        isHome
          ? "bg-transparent border-none"
          : "bg-black/60 border-b border-[#2a2a2a] backdrop-blur"
      }`}
    >
    <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
    <Image
        src="/skullIcon.png"
        alt="Guero Logo"
        width={50}
        height={50}
        priority
    />
    <span className="text-xl font-bold tracking-widest uppercase">
        Guero
    </span>
    </Link>
      <nav className="flex gap-4 text-sm font-medium">
        <Link href="/about" className="px-4 py-2 hover:text-[#d6d3c9] transition">
          About
        </Link>
        <Link href="/gallery" className="px-4 py-2 hover:text-[#d6d3c9] transition">
          Gallery
        </Link>
        <Link href="/testimonials" className="px-4 py-2 hover:text-[#d6d3c9] transition">
          Testimonials
        </Link>
        <Link href="/faqs" className="px-4 py-2 hover:text-[#d6d3c9] transition">
          FAQs
        </Link>
        <Link
          href="/book"
          className="bg-[#f3f0e7] text-black px-4 py-2 rounded-full hover:bg-black hover:text-[#f3f0e7] transition"
        >
          Book
        </Link>
      </nav>
    </header>
  );
}
