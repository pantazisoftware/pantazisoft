export type Project = {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  ogImage: string;
  favicon: string;
};

export const projects: Project[] = [
  {
    slug: "bookify",
    name: "Bookify",
    url: "https://bookify.one",
    tagline: "Smart appointment scheduling for businesses",
    description:
      "An online appointment system that helps businesses automate scheduling, reduce no-shows, and let clients book 24/7.",
    longDescription:
      "Bookify is an online appointment management platform designed to help service-based businesses streamline their scheduling workflow. With an intelligent calendar system that prevents double bookings, automated SMS and email reminders that reduce no-shows by up to 70%, and a public booking page that lets clients book 24/7, Bookify transforms how businesses manage their time and client relationships.",
    features: [
      "Smart calendar with automatic conflict detection",
      "Automated SMS & email appointment reminders",
      "24/7 public booking page for clients",
      "Multi-worker support with individual calendars",
      "Revenue tracking & analytics dashboard",
      "Progressive web app for mobile",
    ],
    ogImage: "https://bookify.one/images/social-image-calendar.jpeg",
    favicon: "https://bookify.one/favicon.ico",
  },
  {
    slug: "webscore",
    name: "WebScore",
    url: "https://webscore.now",
    tagline: "AI-powered website auditing in under 60 seconds",
    description:
      "Scan any website for performance, SEO, accessibility, security, and UI/UX issues with prioritized fixes.",
    longDescription:
      "WebScore is an AI-powered website auditing tool that performs over 100 automated checks across performance, SEO, accessibility, security, and UI/UX in under 60 seconds. Instead of juggling multiple tools, WebScore delivers a unified report with prioritized fixes, step-by-step instructions, and automatic monitoring to help website owners and developers maintain peak performance.",
    features: [
      "100+ automated checks in under 60 seconds",
      "Performance & Core Web Vitals analysis",
      "SEO, accessibility & security audits",
      "AI-powered UI/UX review with screenshots",
      "Automatic monitoring with email alerts",
      "Google Search Console integration",
    ],
    ogImage: "https://webscore.now/og-image.png",
    favicon: "https://webscore.now/favicon.svg",
  },
  {
    slug: "memo",
    name: "Memo",
    url: "https://me-mo.ro",
    tagline: "Digital photo albums for unforgettable events",
    description:
      "Create digital photo albums where guests contribute photos in real-time by scanning QR codes.",
    longDescription:
      "Memo makes it effortless to collect photos from every guest at your event. Generate a custom QR code, share it with your guests, and watch as photos flow in from every angle in real time. No app downloads required — guests simply scan and upload. All photos are stored securely and available for download in full resolution.",
    features: [
      "QR code-based photo collection",
      "Unlimited guests & photo uploads",
      "Real-time photo access for organizers",
      "Full resolution downloads",
      "Offline support with automatic sync",
      "End-to-end encrypted storage",
    ],
    ogImage: "/projects/me-mo.png",
    favicon: "https://www.me-mo.ro/logo.png",
  },
  {
    slug: "snnnap",
    name: "Snnnap",
    url: "https://snnnap.com",
    tagline: "Event photo sharing with QR codes",
    description:
      "Capture every moment from every angle. Guests scan a QR code to upload photos and videos — no app needed.",
    longDescription:
      "Snnnap is an event photo sharing platform that captures every moment from every angle. With a simple QR code scan, guests can upload unlimited photos and videos directly from their phones — no app installation needed. Perfect for weddings, corporate events, and celebrations where you want to see the event through everyone's eyes.",
    features: [
      "Unlimited photo & video uploads",
      "Offline-first with automatic sync",
      "Customizable QR code templates",
      "Content moderation controls",
      "48-hour post-event upload window",
      "Full resolution ZIP downloads",
    ],
    ogImage: "https://snnnap.com/images/og-image.png",
    favicon: "https://snnnap.com/favicon.ico",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
