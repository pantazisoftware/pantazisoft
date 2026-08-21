export type Project = {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  ogImage: string;
  /** Descriptive alt text for the project's screenshot / OG image. */
  imageAlt?: string;
  favicon: string;
};

export const projects: Project[] = [
  {
    slug: "feedfast",
    name: "FeedFast",
    url: "https://feedfa.st",
    tagline: "Changelog, feedback, and uptime in one hub",
    description:
      "One public hub per project — release notes, a feedback board people vote on, and a status page that stays honest.",
    longDescription:
      "FeedFast collapses three separate subscriptions into a single public hub page per project. Users submit ideas and upvote them without creating an account, release notes are written in markdown and published to a page, an RSS feed and an embeddable widget, and scheduled HTTP checks confirm an incident over two consecutive failures before anyone gets an email — so a single blip never pages you. Every module is also exposed over an MCP server, so an AI agent can triage the board and publish a changelog through a scoped, read-only-capable API key.",
    features: [
      "One public hub page per project, live in five minutes",
      "Feedback board with voting and no sign-up wall",
      "Markdown changelog with RSS feed and embeddable widget",
      "Uptime checks with two-failure incident confirmation",
      "Scheduled maintenance excluded from uptime maths",
      "MCP server so AI agents can publish and triage",
    ],
    ogImage: "/projects/feedfast.avif",
    imageAlt:
      "The FeedFast dashboard open in a browser, showing a project overview with changelog, feedback and uptime cards side by side.",
    favicon: "https://feedfa.st/android-chrome-192x192.png",
  },
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
    ogImage: "/webscore_overview.webp",
    imageAlt:
      "WebScore dashboard showing an overall website health score of 92, with separate performance, SEO, accessibility, and security scores and a score-evolution chart.",
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
    ogImage: "/projects/me-mo.webp",
    imageAlt:
      "Memo — digital photo albums for events, where guests contribute photos in real time by scanning a QR code.",
    favicon: "https://www.me-mo.ro/logo.png",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
