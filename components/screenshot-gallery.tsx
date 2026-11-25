"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export type GalleryShot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

/** Plain strings: this is a client component, so no functions can be
 *  passed in from the server. */
export type GalleryLabels = {
  open: string;
  close: string;
  previous: string;
  next: string;
  /** Word between the position and the total: "2 of 6". */
  of: string;
};

/**
 * A grid of screenshots; clicking one opens it full screen in a native
 * <dialog>, which brings focus trapping, Esc to close and a top layer for
 * free. Arrow keys and the side buttons step through the set.
 */
export function ScreenshotGallery({
  shots,
  labels,
}: {
  shots: GalleryShot[];
  labels: GalleryLabels;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  // A set made only of phone screenshots gets narrow portrait tiles; anything
  // else gets landscape tiles, with phone shots letterboxed inside them.
  const portrait = shots.every((s) => s.height > s.width);

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const step = useCallback(
    (by: number) =>
      setIndex((i) =>
        i === null ? i : (i + by + shots.length) % shots.length,
      ),
    [shots.length],
  );

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    el.addEventListener("keydown", onKey);
    el.addEventListener("close", onClose);
    return () => {
      el.removeEventListener("keydown", onKey);
      el.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = index === null ? null : shots[index];

  return (
    <>
      <ul
        className={
          portrait
            ? "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            : "grid gap-6 sm:grid-cols-2"
        }
      >
        {shots.map((shot, i) => (
          <li key={shot.src}>
            <figure>
              <button
                type="button"
                onClick={() => open(i)}
                aria-label={`${labels.open}: ${shot.caption}`}
                className={`group relative block w-full overflow-hidden rounded-2xl border border-line bg-soft ${
                  portrait ? "aspect-[1284/2778]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  quality={90}
                  sizes={
                    portrait
                      ? "(min-width: 1024px) 260px, (min-width: 640px) 33vw, 50vw"
                      : "(min-width: 1024px) 540px, (min-width: 640px) 50vw, 100vw"
                  }
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-ink opacity-0 shadow-sm ring-1 ring-black/5 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <Maximize2 className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </button>
              <figcaption className="label mt-3">{shot.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        aria-label={current?.caption}
        onClick={(e) => {
          // A click on the backdrop lands on the dialog element itself.
          if (e.target === e.currentTarget) close();
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-black/90 p-0 text-white backdrop:bg-black/60"
      >
        {current && index !== null && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <p className="text-sm text-white/80">
                <span className="font-medium text-white">
                  {current.caption}
                </span>
                <span className="ml-3 tabular-nums">
                  {`${index + 1} ${labels.of} ${shots.length}`}
                </span>
              </p>
              <button
                type="button"
                onClick={close}
                aria-label={labels.close}
                className="grid h-10 w-10 place-items-center rounded-full text-white/80 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div
              className="relative min-h-0 flex-1"
              onClick={(e) => {
                if (e.target === e.currentTarget) close();
              }}
            >
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                quality={90}
                sizes="100vw"
                className="object-contain px-4 pb-4 sm:px-20 sm:pb-8"
              />
              {shots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label={labels.previous}
                    className="absolute top-1/2 left-2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-5"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label={labels.next}
                    className="absolute top-1/2 right-2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-5"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
