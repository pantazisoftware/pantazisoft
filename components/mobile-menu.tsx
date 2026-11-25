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
        className="-mr-2 grid h-10 w-10 place-items-center rounded-md text-ink hover:bg-soft"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-paper shadow-[0_12px_24px_-12px_rgb(0_0_0/0.15)]"
      >
        <nav className="wrap py-4">
          {groups.map((group) => (
            <div key={group.label} className="border-b border-line pb-3 mb-3">
              <p className="label px-1 py-2">{group.label}</p>
              <ul className="grid gap-0.5 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className="flex items-center gap-3 rounded-lg px-1 py-2 text-[1rem] text-ink hover:bg-soft"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center">
                        {item.icon}
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="block border-b border-line px-1 py-3.5 text-[1.0625rem] text-ink"
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
