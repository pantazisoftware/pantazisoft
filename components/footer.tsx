import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

const columns = [
  {
    heading: "Services",
    links: services.map((service) => ({
      href: `/services/${service.slug}`,
      label: service.name,
    })),
  },
  {
    heading: "Company",
    links: [
      { href: "/#projects", label: "Work" },
      { href: "/#about", label: "About" },
      { href: "/#contact", label: "Contact" },
    ],
  },
  {
    heading: "Projects",
    links: [
      { href: "/projects/bookify", label: "Bookify" },
      { href: "/projects/webscore", label: "WebScore" },
      { href: "/projects/memo", label: "Memo" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,20rem)_1fr]">
          <div>
            <div className="flex items-center gap-2 text-[1.0625rem] font-bold tracking-title text-primary">
              <Image
                src="/logo-transparent.svg"
                alt="PantaziSoft logo"
                width={22}
                height={22}
              />
              PantaziSoft
            </div>
            <p className="mt-3 max-w-xs text-sm text-secondary leading-body">
              A small software studio building web applications since 2020.
              Fixed scope, fixed price, code you own.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="https://x.com/eduard_pantazi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-subtle text-secondary transition-colors hover:border-border-strong hover:text-primary"
                aria-label="X (Twitter)"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/eduardpantazi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-subtle text-secondary transition-colors hover:border-border-strong hover:text-primary"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <a
              href="https://webscore.now/trust/pantazisoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://webscore.now/api/badge/cmm59joqj000wkvl8ec5yjred?theme=light&style=score"
                alt="WebScore Trust Badge"
                width="200"
                height="48"
              />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:justify-items-end">
            {columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-muted">
                  {column.heading}
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium text-secondary transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} PantaziSoft. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Built in-house with Next.js and TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}
