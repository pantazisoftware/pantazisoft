"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { AppScreenshot } from "@/lib/apps";

type Props = {
  screenshots: AppScreenshot[];
};

export function AppGallery({ screenshots }: Props) {
  const [index, setIndex] = useState(0);
  const count = screenshots.length;

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  if (count === 0) return null;

  const current = screenshots[index];

  return (
    <div className="relative">
      <div className="relative aspect-[9/16] max-w-[320px] mx-auto sm:max-w-[360px] md:max-w-[400px]">
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-app/20 via-app/5 to-transparent blur-2xl" />
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-zinc-900 ring-1 ring-white/10 shadow-2xl shadow-app/10">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 768px) 90vw, 400px"
            priority={index === 0}
            className="object-cover animate-[fadeIn_240ms_ease-out]"
          />
        </div>
      </div>

      {current.caption && (
        <p className="mt-6 text-center text-sm font-medium text-zinc-400">
          {current.caption}
        </p>
      )}

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous screenshot"
          className="w-11 h-11 rounded-full bg-zinc-900 ring-1 ring-white/10 text-white flex items-center justify-center hover:bg-app hover:ring-app transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Screenshots">
          {screenshots.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to screenshot ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-app"
                  : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next screenshot"
          className="w-11 h-11 rounded-full bg-zinc-900 ring-1 ring-white/10 text-white flex items-center justify-center hover:bg-app hover:ring-app transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
