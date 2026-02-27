import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "bookify.one" },
      { hostname: "www.bookify.one" },
      { hostname: "webscore.now" },
      { hostname: "www.webscore.now" },
      { hostname: "me-mo.ro" },
      { hostname: "www.me-mo.ro" },
      { hostname: "snnnap.com" },
      { hostname: "www.snnnap.com" },
    ],
  },
};

export default nextConfig;
