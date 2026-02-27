import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-2 font-heading font-bold text-xl text-primary">
              <Image
                src="/logo-transparent.svg"
                alt=""
                width={22}
                height={22}
              />
              PantaziSoft
            </div>
            <p className="mt-2 text-sm text-muted max-w-xs">
              Building web applications since 2020.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://x.com/eduard_pantazi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-400 hover:text-primary hover:bg-zinc-200 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/eduardpantazi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-400 hover:text-primary hover:bg-zinc-200 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="text-sm font-semibold text-primary mb-4">
                Company
              </h4>
              <div className="flex flex-col gap-3">
                <Link
                  href="/#services"
                  className="text-sm text-secondary hover:text-primary transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/#projects"
                  className="text-sm text-secondary hover:text-primary transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/#contact"
                  className="text-sm text-secondary hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary mb-4">
                Projects
              </h4>
              <div className="flex flex-col gap-3">
                <Link
                  href="/projects/bookify"
                  className="text-sm text-secondary hover:text-primary transition-colors"
                >
                  Bookify
                </Link>
                <Link
                  href="/projects/webscore"
                  className="text-sm text-secondary hover:text-primary transition-colors"
                >
                  WebScore
                </Link>
                <Link
                  href="/projects/memo"
                  className="text-sm text-secondary hover:text-primary transition-colors"
                >
                  Memo
                </Link>
                <Link
                  href="/projects/snnnap"
                  className="text-sm text-secondary hover:text-primary transition-colors"
                >
                  Snnnap
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <p className="text-sm text-muted text-center">
            &copy; {new Date().getFullYear()} PantaziSoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
