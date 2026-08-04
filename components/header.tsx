"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/#projects", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-page/85 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-[1.0625rem] font-bold tracking-title text-primary"
        >
          <Image
            src="/logo-transparent.svg"
            alt="PantaziSoft logo"
            width={22}
            height={22}
          />
          PantaziSoft
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-secondary transition-colors hover:bg-surface-hover hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-primary btn-sm ml-3">
            Let&apos;s talk
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="-mr-2 rounded-lg p-2 text-primary md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-page px-6 pb-6 pt-3 shadow-panel md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 text-[0.9375rem] font-medium text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-5 w-full"
          >
            Let&apos;s talk
          </Link>
        </nav>
      )}
    </header>
  );
}
