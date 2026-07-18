import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/app-footer";
import { getApp, getAppNavLinks } from "@/lib/apps";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export default async function AppLayout({ params, children }: Props) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const navLinks = getAppNavLinks(app);
  const accentStyle = {
    "--app-accent": app.accent.base,
    "--app-accent-hover": app.accent.hover,
  } as CSSProperties;

  return (
    <div style={accentStyle} className="bg-zinc-950 text-white min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-app focus:text-white focus:px-5 focus:py-3 focus:rounded-button focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <AppHeader
        appSlug={app.slug}
        appName={app.name}
        appLogo={app.logo}
        appStoreUrl={app.appStoreUrl}
        navLinks={navLinks}
      />
      <main id="main">{children}</main>
      <AppFooter
        appSlug={app.slug}
        appName={app.name}
        appLogo={app.logo}
        supportEmail={app.supportEmail}
        companyName={app.companyName}
        navLinks={navLinks}
        footerNote={app.footerNote}
      />
    </div>
  );
}
