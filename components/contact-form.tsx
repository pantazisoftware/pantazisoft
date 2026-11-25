"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Check, Loader2 } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: string;
          appearance?: string;
        },
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

type Props = {
  /** Interface strings for the current language (Dictionary["form"]). */
  t: Dictionary["form"];
  /** Service name to tag the inquiry with, e.g. "MVP Development". */
  service?: string;
  /** Placeholder for the message field; falls back to the generic one. */
  messagePlaceholder?: string;
};

export function ContactForm({ t, service, messagePlaceholder }: Props) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const widgetId = useRef<string | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  // Submitting swaps the whole form out for the confirmation card, which destroys
  // the focused submit button and drops focus to <body>. Move it to the heading so
  // keyboard users keep their place and screen readers announce the result.
  useEffect(() => {
    if (status === "success") successHeadingRef.current?.focus();
  }, [status]);

  const handleToken = useCallback((t: string) => setToken(t), []);

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    const form = formRef.current;
    if (!siteKey || !turnstileRef.current || !form) return;

    const renderWidget = () => {
      if (window.turnstile && turnstileRef.current && !widgetId.current) {
        widgetId.current = window.turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          callback: handleToken,
          // A token lasts five minutes; drop it when it lapses so the form
          // waits for the widget's automatic refresh instead of sending it.
          "expired-callback": () => setToken(""),
          "error-callback": () => setToken(""),
          theme: "light",
          appearance: "interaction-only",
        });
      }
    };

    const loadScript = () => {
      if (window.turnstile) {
        renderWidget();
        return;
      }

      if (document.getElementById("cf-turnstile-script")) {
        window.onTurnstileLoad = renderWidget;
        return;
      }

      const script = document.createElement("script");
      script.id = "cf-turnstile-script";
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad";
      script.async = true;
      window.onTurnstileLoad = renderWidget;
      document.head.appendChild(script);
    };

    // Lazy-load Turnstile when the form enters the viewport. Watch the form,
    // not the widget's box: that box is hidden while empty, and a hidden
    // element never intersects, so the script would never load.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadScript();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(form);

    return () => observer.disconnect();
  }, [handleToken]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      setErrorMessage(t.verify);
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service, token }),
      });

      if (!res.ok) throw new Error("send failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      // The API answers in English; the visitor gets the message in their
      // own language instead.
      setStatus("error");
      setErrorMessage(t.error);
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl bg-soft p-8 text-center">
        <Check className="mx-auto h-8 w-8 text-lime-ink" strokeWidth={2.25} />
        <h3
          ref={successHeadingRef}
          tabIndex={-1}
          className="mt-4 text-xl outline-none"
        >
          {t.successTitle}
        </h3>
        <p className="mx-auto mt-2 max-w-sm">{t.success}</p>
      </div>
    );
  }

  const fields = [
    {
      id: "name",
      label: t.name,
      type: "text",
      auto: "name",
      ph: t.namePlaceholder,
    },
    {
      id: "email",
      label: t.email,
      type: "email",
      auto: "email",
      ph: t.emailPlaceholder,
    },
  ] as const;

  return (
    // Two columns from sm up: name and email share a row, everything else
    // spans both, so the card uses its width instead of stacking thin fields.
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="grid gap-5 sm:grid-cols-2"
    >
      {service && (
        <p className="label sm:col-span-2">
          {t.about}: <span className="text-ink">{service}</span>
        </p>
      )}
      {fields.map((f) => (
        <label key={f.id} className="grid gap-2">
          <span className="label">{f.label}</span>
          <input
            name={f.id}
            type={f.type}
            autoComplete={f.auto}
            required
            value={form[f.id]}
            onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
            placeholder={f.ph}
            className="field"
          />
        </label>
      ))}
      <label className="grid gap-2 sm:col-span-2">
        <span className="label">{t.message}</span>
        <textarea
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder={messagePlaceholder ?? t.messagePlaceholder}
          className="field resize-none"
        />
      </label>
      <div ref={turnstileRef} className="empty:hidden sm:col-span-2" />
      {/* Always mounted: a live region inserted at the same moment as its text
          is announced unreliably, so the element outlives the state it reports. */}
      <p aria-live="polite" className="sr-only">
        {status === "loading" ? t.sendingLive : ""}
      </p>
      {status === "error" && errorMessage && (
        <p
          role="alert"
          className="text-sm font-medium text-red-700 sm:col-span-2"
        >
          {errorMessage}
        </p>
      )}
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:gap-5">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn btn-primary w-full shrink-0 sm:w-auto"
        >
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "loading" ? t.sending : t.submit}
        </button>
        <p className="label">{t.note}</p>
      </div>
    </form>
  );
}
