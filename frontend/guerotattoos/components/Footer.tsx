// components/Footer.tsx
import Link from "next/link";
import InstagramRedirect from "./InstagramRedirect";

export default function Footer() {
  return (
    <footer className="bg-[#111] py-10 text-sm text-[#aaa] px-6 mt-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left side */}
        <div className="text-center md:text-left space-y-2">
          <p>&copy; {new Date().getFullYear()} Guero Tattoo Studio.</p>
          <p className="text-xs">Made with needles & passion.</p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex space-x-4 items-center">
          <InstagramRedirect />
        </div>

        {/* Right side: Links */}
        <div className="flex flex-col md:items-end items-center gap-2 text-sm">
          <Link href="/privacy" className="hover:text-[#f3f0e7] transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#f3f0e7] transition">
            Terms of Service
          </Link>
          <Link href="/book" className="hover:text-[#f3f0e7] transition">
            Book an Appointment
          </Link>
          <a
            href="mailto:guero@guerrotattoos.ink"
            className="hover:text-[#f3f0e7] transition"
          >
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}
