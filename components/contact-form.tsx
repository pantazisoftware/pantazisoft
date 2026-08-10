"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Send, Check, Loader2 } from "lucide-react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          theme?: string;
          appearance?: string;
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

type Props = {
  /** Service name to tag the inquiry with, e.g. "MVP Development". */
  service?: string;
  /** Prefilled placeholder for the message field. */
  messagePlaceholder?: string;
  /** Label on the submit button. */
  submitLabel?: string;
};

export function ContactForm({
  service,
  messagePlaceholder = "Tell us about your project...",
  submitLabel = "Send message",
}: Props = {}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
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
    if (!siteKey || !turnstileRef.current) return;

    const renderWidget = () => {
      if (window.turnstile && turnstileRef.current && !widgetId.current) {
        widgetId.current = window.turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          callback: handleToken,
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

    // Lazy-load Turnstile when the form enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadScript();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(turnstileRef.current);

    return () => observer.disconnect();
  }, [handleToken]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      setErrorMessage("Please complete the verification.");
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

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="card p-8 md:p-12 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white">
          <Check className="w-7 h-7" strokeWidth={2.5} />
        </div>
        <h3
          ref={successHeadingRef}
          tabIndex={-1}
          className="mt-6 text-2xl font-semibold tracking-title text-primary"
        >
          Message sent
        </h3>
        <p className="mt-3 text-secondary leading-body max-w-sm mx-auto">
          Thanks for reaching out{service ? ` about ${service}` : ""}.
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8 md:p-10">
      {service && (
        <div className="mb-7 flex items-center justify-between gap-4 border-b border-border pb-5">
          <div>
            <p className="eyebrow">Enquiry about</p>
            <p className="mt-1.5 font-semibold text-primary tracking-title">
              {service}
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-surface-hover px-3 py-1.5 text-xs font-semibold text-secondary">
            Reply in 24h
          </span>
        </div>
      )}

      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-primary mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="field"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-primary mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            className="field"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-primary mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder={messagePlaceholder}
            className="field resize-none"
          />
        </div>
        <div ref={turnstileRef} className="empty:hidden" />
        {/* Always mounted — a live region inserted at the same moment as its text
            is announced unreliably, so the element outlives the state it reports. */}
        <p aria-live="polite" className="sr-only">
          {status === "loading" ? "Sending your message…" : ""}
        </p>
        {status === "error" && errorMessage && (
          <p
            role="alert"
            className="rounded-input border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          >
            {errorMessage}
          </p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn btn-primary group w-full cursor-pointer disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45 group-hover:-translate-x-1" />
              {submitLabel}
            </>
          )}
        </button>
        <p className="text-center text-xs text-muted leading-body">
          We reply to every enquiry within 24 hours. No newsletters, no sales
          sequences.
        </p>
      </div>
    </form>
  );
}
