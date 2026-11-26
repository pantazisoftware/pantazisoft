"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** The design space every replica is drawn in, in CSS pixels. */
export const STAGE_W = 480;
export const STAGE_H = 360;

/**
 * A solid card in the product's colour with a replica of its UI on it.
 *
 * Replicas are laid out at a fixed 480 × 360 and scaled to the card, so type
 * and spacing keep their proportions at any width. Animations run only while
 * the card is on screen (`data-play`), and not at all for reduced motion.
 * Every animated element's resting style is its finished state, so a still
 * replica is still a complete picture (see `.rp` in globals.css).
 */
export function ReplicaStage({
  tint,
  children,
}: {
  tint: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () =>
      el.style.setProperty("--rp-scale", String(el.clientWidth / STAGE_W));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.dataset.play = "";
        else delete el.dataset.play;
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      // No overflow-hidden: floating cards (.rp-lift) sit over the card's
      // edge. Surfaces clip themselves (.rp-fill).
      className="rp relative aspect-[4/3] w-full select-none"
      // 64 stage px, scaled with the stage, so the inset surface (.rp-fill:
      // 32px in, 32px radius) stays concentric at every card size.
      style={{ background: tint, borderRadius: "calc(64px * var(--rp-scale, 1))" }}
    >
      <div className="rp-stage absolute top-0 left-0 h-[360px] w-[480px] origin-top-left">
        {children}
      </div>
    </div>
  );
}
