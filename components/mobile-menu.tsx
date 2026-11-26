"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import type { NavGroup, NavLink } from "@/components/nav-types";

/** The header's navigation below the lg breakpoint: a menu button that opens
 *  a panel under the bar, with each group listed out (icon and name) and the
 *  plain links after it. Above lg the header shows NavMenu instead. */
export function MobileMenu({
  groups,
  links,
  cta,
  labels,
}: {
  groups: NavGroup[];
  links: NavLink[];
  cta: NavLink;
  labels: { open: string; close: string };
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Every link closes the menu on click; Escape closes it too.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.close : labels.open}
        className="-mr-2 grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-soft"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto rounded-b-[1.75rem] border-b border-line bg-paper shadow-[0_24px_48px_-20px_rgb(0_0_0/0.25)]"
      >
        <nav className="wrap py-4">
          {groups.map((group) => (
            <div key={group.label} className="mb-3 border-b border-line pb-3">
              <p className="label px-2 py-2">{group.label}</p>
              <ul className="grid grid-cols-[minmax(0,1fr)] gap-1 sm:grid-cols-[repeat(2,minmax(0,1fr))]">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className="flex items-center gap-3 rounded-2xl p-2 transition-colors hover:bg-soft"
                    >
                      <span className="shrink-0">{item.icon}</span>
                      <span className="min-w-0">
                        <span className="block font-display text-[1.3125rem] leading-tight text-ink">
                          {item.label}
                        </span>
                        {item.description && (
                          <span className="block truncate text-[0.8125rem] text-muted">
                            {item.description}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={group.all.href}
                onClick={close}
                className="mt-1 inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-sm font-medium text-ink"
              >
                {group.all.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          ))}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="block border-b border-line px-2 py-3.5 text-[1.0625rem] text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={cta.href}
            onClick={close}
            className="btn btn-primary mt-4 w-full"
          >
            {cta.label}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
