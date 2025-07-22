"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        isHome
          ? "bg-transparent border-none"
          : "bg-black/60 border-b border-[#2a2a2a] backdrop-blur"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-4 md:px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition"
        >
          <Image
            src="/skullIcon.png"
            alt="Guero Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-xl font-bold tracking-widest uppercase">
            Guero
          </span>
        </Link>

        {/* Hamburger (Mobile only) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 text-sm font-medium">
          <NavLinks />
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-black/90 backdrop-blur text-sm font-medium space-y-2">
          <NavLinks />
        </div>
      )}
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <Link href="/about" className="block px-4 py-2 hover:text-[#d6d3c9] transition">
        About
      </Link>
      <Link href="/gallery" className="block px-4 py-2 hover:text-[#d6d3c9] transition">
        Gallery
      </Link>
      <Link href="/testimonials" className="block px-4 py-2 hover:text-[#d6d3c9] transition">
        Testimonials
      </Link>
      <Link href="/faqs" className="block px-4 py-2 hover:text-[#d6d3c9] transition">
        FAQs
      </Link>
      <Link
        href="/book"
        className="block bg-[#f3f0e7] text-black text-center px-4 py-2 rounded-full hover:bg-black hover:text-[#f3f0e7] transition"
      >
        Book
      </Link>
    </>
  );
}
