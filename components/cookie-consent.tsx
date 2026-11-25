"use client";

import { useState, useCallback } from "react";
import Script from "next/script";

const GA_ID = "G-N8S79HF2L9";
const STORAGE_KEY = "cookie-consent";

// Kept here rather than in the shared dictionary so this client bundle does
// not pull in every page's copy for three short strings.
const copy = {
  en: {
    text: "We use cookies to understand how visitors use this website. Analytics stay off until you accept.",
    accept: "Accept",
    decline: "Decline",
  },
  ro: {
    text: "Folosim cookie-uri ca să înțelegem cum este folosit acest site. Statisticile rămân oprite până când accepți.",
    accept: "Accept",
    decline: "Refuz",
  },
};

export function CookieConsent() {
  // Safe to read localStorage and the document directly: this component is
  // loaded with ssr: false. The language comes from <html lang>, which the
  // root layout of each language sets.
  const [consent, setConsent] = useState<"pending" | "accepted" | "declined">(
    () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted") return "accepted";
      if (stored === "declined") return "declined";
      return "pending";
    }
  );
  const [t] = useState(
    () => copy[document.documentElement.lang === "ro" ? "ro" : "en"]
  );

  const accept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  }, []);

  const decline = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setConsent("declined");
  }, []);

  return (
    <>
      {/* GA scripts — only injected after explicit consent */}
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {consent === "pending" && (
        <div className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-xl flex-col gap-4 rounded-2xl border border-line bg-paper p-5 shadow-lg sm:flex-row sm:items-center">
          <p className="text-sm">{t.text}</p>
          <div className="flex shrink-0 gap-2">
            <button onClick={accept} className="btn btn-primary h-10 px-4">
              {t.accept}
            </button>
            <button onClick={decline} className="btn btn-secondary h-10 px-4">
              {t.decline}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
