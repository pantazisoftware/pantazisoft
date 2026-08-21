import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Shared band furniture.
 *
 * A band is one horizontal slice of the frame. It owns its bottom rule, so
 * bands stack edge to edge with exactly one hairline between them and no gap
 * anywhere on the page.
 */

type SectionHeadProps = {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  /** Optional trailing link, right-aligned on wide screens. */
  action?: { href: string; label: string };
  /** Tint the eyebrow with the brand lime. */
  lime?: boolean;
};

export function SectionHead({
  eyebrow,
  title,
  body,
  action,
  lime,
}: SectionHeadProps) {
  return (
    <div className="pad grid gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16">
      <div className="reveal md:col-span-7">
        <span className={`eyebrow${lime ? " eyebrow-lime" : ""}`}>
          {eyebrow}
        </span>
        <h2 className="mt-5 text-[2rem] font-semibold leading-title tracking-heading text-ink sm:text-[2.5rem] md:text-[3rem]">
          {title}
        </h2>
      </div>

      {(body || action) && (
        <div className="reveal s2 flex flex-col justify-end gap-6 md:col-span-5 md:border-l md:border-line md:pl-10">
          {body && (
            <p className="text-[1.0625rem] leading-body text-body">{body}</p>
          )}
          {action && (
            <Link
              href={action.href}
              className="group inline-flex w-fit items-center gap-2 border border-line-strong px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              {action.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * A numbered index label — "01", "02" — used to mark cells in a sequence.
 */
export function Index({ n }: { n: number }) {
  return (
    <span className="numeric font-heading text-[0.8125rem] font-semibold tracking-[0.06em] text-muted">
      {String(n).padStart(2, "0")}
    </span>
  );
}
