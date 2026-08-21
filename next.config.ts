import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://challenges.cloudflare.com https://static.cloudflareinsights.com https://feedfa.st",
      "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://challenges.cloudflare.com https://static.cloudflareinsights.com https://feedfa.st",
      "style-src 'self' 'unsafe-inline'",
      // Site-chip favicons come through /api/site-icon now, so the icon service
      // is no longer a browser-visible origin.
      "img-src 'self' data: blob: https://bookify.one https://www.bookify.one https://webscore.now https://www.webscore.now https://me-mo.ro https://www.me-mo.ro https://feedfa.st",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://challenges.cloudflare.com https://feedfa.st",
      "frame-src https://challenges.cloudflare.com",
      "worker-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  // Deliberately no Cross-Origin-Embedder-Policy: require-corp would block the
  // WebScore badge, which serves neither CORP nor CORS headers, and its only
  // payoff is cross-origin isolation (SharedArrayBuffer, high-resolution timers)
  // that nothing here uses.
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // AppCardSlider and the app gallery ask for 95 on the phone screenshots —
    // fine detail in a UI shot falls apart at the default. Next 16 only serves
    // qualities declared here and warns on the rest, so both are listed.
    qualities: [75, 95],
    remotePatterns: [
      { hostname: "bookify.one" },
      { hostname: "www.bookify.one" },
      { hostname: "webscore.now" },
      { hostname: "www.webscore.now" },
      { hostname: "me-mo.ro" },
      { hostname: "www.me-mo.ro" },
      { hostname: "feedfa.st" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
