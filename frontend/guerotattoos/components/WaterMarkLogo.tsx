"use client";

import Image from "next/image";

type WatermarkProps = {
  src?: string;
  alt?: string;
  size?: number;
};

export default function Watermark({
  src = "/skullIcon.png",
  alt = "Studio Watermark",
  size = 384,
}: WatermarkProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 z-0">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
}
