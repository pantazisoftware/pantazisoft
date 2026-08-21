import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

type Column = {
  heading: string;
  links: { href: string; label: string }[];
  /** Rendered under the links as a button rather than a link. */
  action?: { label: string };
};

const columns: Column[] = [
  {
    heading: "Services",
    links: services.map((service) => ({
      href: `/services/${service.slug}`,
      label: service.name,
    })),
  },
  {
    heading: "Studio",
    links: [
      { href: "/#work", label: "Work" },
      { href: "/#studio", label: "About" },
      { href: "/#contact", label: "Contact" },
    ],
    action: { label: "Send feedback" },
  },
  {
    heading: "Projects",
    links: projects.map((project) => ({
      href: `/projects/${project.slug}`,
      label: project.name,
    })),
  },
];

const socials = [
  {
    href: "https://x.com/eduard_pantazi",
    label: "X (Twitter)",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    href: "https://www.linkedin.com/in/eduardpantazi/",
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      {/* Wordmark band — the name at poster scale, clipped by the frame. */}
      <div className="band overflow-hidden border-t-0">
        <div className="pad py-10 md:py-12">
          <p
            aria-hidden="true"
            className="reveal reveal-wipe select-none font-heading text-[15vw] leading-[0.82] font-extrabold tracking-[-0.05em] text-panel-strong lg:text-[10.5rem]"
          >
            PantaziSoft
          </p>
        </div>
      </div>

      <div className="cells band grid-cols-2 border-b-0 sm:grid-cols-3 md:grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,1fr))]">
        <div className="cell col-span-2 px-6 py-10 sm:col-span-3 sm:px-10 md:col-span-1 lg:px-14">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center border border-line bg-panel">
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
          </div>
          <p className="mt-4 max-w-xs text-sm leading-body text-body">
            A small software studio building web applications since 2020. Fixed
            scope, fixed price, code you own.
          </p>
          <div className="mt-6 flex">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center border border-line text-body transition-colors hover:bg-ink hover:text-white [&+&]:border-l-0"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
          <a
            href="https://webscore.now/trust/pantazisoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://webscore.now/api/badge/cmm59joqj000wkvl8ec5yjred?theme=light&style=score"
              alt="WebScore Trust Badge"
              width="200"
              height="48"
              loading="lazy"
              decoding="async"
            />
          </a>

          {/* Mounted by the FeedFast embed (see components/feedfast.tsx) into a
              shadow root, so nothing here can — or should — style its insides.
              It stays an empty box if the script is blocked or the uptime module
              is switched off on the project. */}
          <div
            className="mt-5"
            data-feedfast="uptime"
            data-slim="true"
            data-days="30"
          />
        </div>

        {columns.map((column) => (
          <div key={column.heading} className="cell px-6 py-10 sm:px-10">
            <h3 className="text-[0.6875rem] font-semibold uppercase tracking-eyebrow text-muted">
              {column.heading}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-body transition-colors hover:text-ink"
                  >
                    <span className="underline-grow">{link.label}</span>
                  </Link>
                </li>
              ))}
              {column.action && (
                <li>
                  {/* The embed only attaches a click handler, so this stays an
                      ordinary button and matches the links around it. If the
                      script never arrives the click is inert rather than broken —
                      the contact form below is the path that always works. */}
                  <button
                    type="button"
                    data-feedfast="feedback"
                    className="inline-flex cursor-pointer items-center gap-1.5 text-left text-sm font-medium text-body transition-colors hover:text-ink"
                  >
                    <span className="underline-grow">{column.action.label}</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="pad flex flex-col items-start justify-between gap-3 py-6 sm:flex-row sm:items-center">
        <p className="text-[0.8125rem] text-muted">
          &copy; {new Date().getFullYear()} PantaziSoft. All rights reserved.
        </p>
        <p className="inline-flex items-center gap-1.5 text-[0.8125rem] text-muted">
          Built in-house with Next.js and TypeScript
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </p>
      </div>
    </footer>
  );
}
