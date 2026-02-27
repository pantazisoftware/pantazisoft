"use client";

import { useState, useCallback } from "react";
import Script from "next/script";

const GA_ID = "G-N8S79HF2L9";
const STORAGE_KEY = "cookie-consent";

export function CookieConsent() {
  // Safe to read localStorage directly — this component is loaded with ssr: false
  const [consent, setConsent] = useState<
    "pending" | "accepted" | "declined"
  >(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted") return "accepted";
    if (stored === "declined") return "declined";
    return "pending";
  });

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

      {/* Consent banner — only shown when no decision has been made */}
      {consent === "pending" && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
          <div className="mx-auto max-w-lg bg-surface rounded-card p-6 shadow-lg">
            <p className="text-sm text-secondary leading-relaxed">
              We use cookies to understand how visitors interact with our
              website. Analytics are completely disabled until you accept.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={accept}
                className="bg-accent text-accent-foreground px-5 py-2 rounded-button text-sm font-medium hover:bg-zinc-700 transition-colors"
              >
                Accept
              </button>
              <button
                onClick={decline}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors px-3 py-2"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
