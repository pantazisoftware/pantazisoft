"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

type Props = {
  appSlug: string;
  appName: string;
  appLogo: string;
  appStoreUrl: string;
  navLinks: { href: string; label: string }[];
};

export function AppHeader({
  appSlug,
  appName,
  appLogo,
  appStoreUrl,
  navLinks,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 flex h-16 items-center justify-between">
        <Link
          href={`/app/${appSlug}`}
          className="flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight text-white"
        >
          <Image
            src={appLogo}
            alt={`${appName} logo`}
            width={28}
            height={28}
            className="rounded-[7px]"
          />
          {appName}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-app text-white px-5 py-2 rounded-button text-sm font-semibold hover:bg-app-hover transition-colors"
          >
            Download
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 bg-zinc-950/95 backdrop-blur-xl border-b border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="bg-app text-white px-5 py-2.5 rounded-button text-sm font-semibold text-center hover:bg-app-hover transition-colors"
          >
            Download
          </a>
        </nav>
      )}
    </header>
  );
}
