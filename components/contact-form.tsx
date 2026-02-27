"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

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

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

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
        body: JSON.stringify({ ...form, token }),
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
      <div className="bg-surface rounded-card p-8 md:p-12 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-zinc-100 mb-6">
          <CheckCircle className="w-7 h-7 text-zinc-600" />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-primary">
          Message sent
        </h3>
        <p className="mt-3 text-secondary">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface rounded-card p-8 md:p-12"
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-primary mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="w-full px-4 py-3 bg-zinc-50 rounded-input text-primary placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300 transition-shadow"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-primary mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            className="w-full px-4 py-3 bg-zinc-50 rounded-input text-primary placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300 transition-shadow"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-primary mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us about your project..."
            className="w-full px-4 py-3 bg-zinc-50 rounded-input text-primary placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300 transition-shadow resize-none"
          />
        </div>
        <div ref={turnstileRef} />
        {status === "error" && errorMessage && (
          <p className="text-sm text-red-600">{errorMessage}</p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="group hover:cursor-pointer w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-button text-sm font-medium hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45 group-hover:-translate-x-2" />
              Send message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
