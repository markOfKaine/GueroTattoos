import { FaInstagram } from "react-icons/fa";

export default function InstagramRedirect() {
  return (
    <a
      href="https://www.instagram.com/tattoosby_guero"
      target="_blank"
      rel="noopener noreferrer"
      title="Follow us on Instagram"
      className="text-[#f3f0e7] hover:text-white-400 transition transform hover:scale-110"
    >
      <FaInstagram className="text-2xl" />
    </a>
  );
}
