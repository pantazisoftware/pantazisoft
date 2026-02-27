"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-page/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-xl font-bold tracking-tight text-primary"
        >
          <Image
            src="/logo-transparent.svg"
            alt=""
            width={22}
            height={22}
          />
          PantaziSoft
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-accent text-accent-foreground px-5 py-2 rounded-button text-sm font-medium hover:bg-zinc-700 transition-colors"
          >
            Let&apos;s talk
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 bg-page/95 backdrop-blur-xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-button text-sm font-medium text-center hover:bg-zinc-700 transition-colors"
          >
            Let&apos;s talk
          </Link>
        </nav>
      )}
    </header>
  );
}
