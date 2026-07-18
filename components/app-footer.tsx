import Link from "next/link";
import Image from "next/image";

type Props = {
  appSlug: string;
  appName: string;
  appLogo: string;
  supportEmail: string;
  companyName: string;
  navLinks: { href: string; label: string }[];
  footerNote?: string;
};

export function AppFooter({
  appSlug,
  appName,
  appLogo,
  supportEmail,
  companyName,
  navLinks,
  footerNote,
}: Props) {
  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href={`/app/${appSlug}`}
              className="flex items-center gap-2.5 font-heading text-lg font-bold text-white"
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
            <p className="mt-3 text-sm text-zinc-500 max-w-xs">
              Built by{" "}
              <Link
                href="/"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {companyName}
              </Link>
              .
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">App</h3>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
              <div className="flex flex-col gap-3">
                <Link
                  href={`/app/${appSlug}/privacy`}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href={`/app/${appSlug}/terms`}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Terms of Use
                </Link>
                <a
                  href={`mailto:${supportEmail}`}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5">
          {footerNote && (
            <p className="text-xs text-zinc-600 leading-[1.6] max-w-3xl mb-4">
              {footerNote}
            </p>
          )}
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
