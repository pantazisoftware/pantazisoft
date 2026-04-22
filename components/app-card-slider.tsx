"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { AppScreenshot } from "@/lib/apps";

type Props = {
  screenshots: AppScreenshot[];
  intervalMs?: number;
};

export function AppCardSlider({ screenshots, intervalMs = 2800 }: Props) {
  const [index, setIndex] = useState(0);
  const count = screenshots.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
    return () => clearInterval(id);
  }, [count, intervalMs]);

  if (count === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {screenshots.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover object-top transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
          quality={95}
        />
      ))}

      <div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10"
        aria-hidden="true"
      >
        {screenshots.map((s, i) => (
          <span
            key={s.src}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-5 bg-orange-500" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
