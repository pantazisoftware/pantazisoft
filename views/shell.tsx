import "@/app/globals.css";
import {
  googleSans,
  inter,
  interTight,
  instrumentSerif,
  jetbrainsMono,
} from "@/lib/fonts";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CookieConsentLoader } from "@/components/cookie-consent-loader";
import { FeedFast } from "@/components/feedfast";

/** The document shell. Each language has its own root layout so <html lang>
 *  is correct in the server-rendered HTML; both render this. */
export function Shell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale} className={`${instrumentSerif.variable} ${interTight.variable} ${inter.variable} ${googleSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        {/* Turnstile sits on the conversion path, so its connection is warmed
            up front (React hoists this link into <head>). Google Tag Manager
            is deliberately absent: nothing reaches Google before the cookie
            banner has been answered. */}
        <link rel="preconnect" href="https://challenges.cloudflare.com" />
        <a
          href="#main"
          className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
        >
          {getDictionary(locale).skip}
        </a>
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <FeedFast />
        <CookieConsentLoader />
      </body>
    </html>
  );
}
