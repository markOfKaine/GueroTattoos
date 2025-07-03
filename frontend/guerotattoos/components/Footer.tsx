import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111] py-8 text-center text-sm text-[#777] mt-16 space-y-2">
      <p>
        &copy; {new Date().getFullYear()} Guero Tattoo Studio. Made with needles & code.
      </p>
      <p>
        <Link
          href="/privacy"
          className="underline hover:text-[#f3f0e7] transition"
        >
          Privacy Policy
        </Link>
      </p>
    </footer>
  );
}
