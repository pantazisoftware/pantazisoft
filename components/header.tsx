"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#studio", label: "Studio" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/88 backdrop-blur-xl">
      {/* items-stretch, so the call to action fills the bar edge to edge rather
          than floating inside it — the header is a row of cells, not a toolbar. */}
      <div className="flex h-16 items-stretch">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 border-r border-line pr-5 pl-6 transition-colors hover:bg-panel sm:pl-10 lg:pl-14"
        >
          <span className="flex h-7 w-7 items-center justify-center border border-line bg-panel transition-colors group-hover:border-line-strong">
            <Image
              src="/logo-transparent.svg"
              alt=""
              // The mark is 3:4. Rendering it in a square box squashed it to
              // 75% width, which is what a square 17x17 was doing here.
              width={15}
              height={20}
              aria-hidden="true"
            />
          </span>
          <span className="font-heading text-[1.0625rem] font-semibold tracking-title text-ink">
            PantaziSoft
          </span>
        </Link>

        <nav className="hidden flex-1 items-stretch md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative flex items-center px-5 text-sm font-medium text-body transition-colors hover:bg-panel hover:text-ink"
            >
              {link.label}
              {/* A lime rule draws itself along the bottom of the cell on hover. */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-lime transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-stretch md:ml-0">
          <Link
            href="/#contact"
            className="group hidden items-center gap-2 border-l border-ink bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-[#26262a] sm:flex"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="flex w-16 items-center justify-center border-l border-line text-ink transition-colors hover:bg-panel md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-surface md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line px-6 py-4 text-[0.9375rem] font-medium text-body transition-colors hover:bg-panel hover:text-ink sm:px-10"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4 text-muted" />
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between bg-ink px-6 py-4 text-[0.9375rem] font-medium text-white sm:px-10"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      )}
    </header>
  );
}
