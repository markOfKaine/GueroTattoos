// components/ClientLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WaterMarkLogo from "./WaterMarkLogo";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showWatermark = pathname !== "/";

  return (
    <>
      <NavBar />
      {showWatermark && <WaterMarkLogo />}
      {children}
      <Footer />
    </>
  );
}
