import { Rocket, Layers, Sparkles, type LucideIcon } from "lucide-react";

export type ServiceStep = {
  title: string;
  body: string;
};

export type ServiceDeliverable = {
  title: string;
  body: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  /** Short name used in nav, cards and the homepage grid. */
  name: string;
  icon: LucideIcon;
  /** One line, used on cards and in meta descriptions. */
  tagline: string;
  /** Longer paragraph used on the homepage service card. */
  description: string;
  price: string;
  priceNumeric: string;
  priceNote: string;
  timeline: string;
  eyebrow: string;
  /** Page <h1>. */
  headline: string;
  /** Paragraph under the h1. */
  intro: string;
  /** Quick facts rendered as a strip under the hero. */
  highlights: { label: string; value: string }[];
  /** "Who this is for" bullets. */
  idealFor: string[];
  deliverables: ServiceDeliverable[];
  process: ServiceStep[];
  stack: { group: string; items: string[] }[];
  faqs: ServiceFaq[];
  /** Contact-form heading + copy on this page. */
  formHeading: string;
  formBody: string;
};

export const services: Service[] = [
  {
    slug: "mvp-development",
    name: "MVP Development",
    icon: Rocket,
    tagline: "Idea to shipped product in weeks, not quarters",
    description:
      "Go from idea to launch, fast. We design, build, and ship your minimum viable product so you can validate your idea with real users. Lean, focused, and ready for feedback.",
    price: "$500",
    priceNumeric: "500",
    priceNote: "Fixed scope, fixed price. Quoted after a free scoping call.",
    timeline: "2–6 weeks to first release",
    eyebrow: "MVP Development",
    headline: "Ship an MVP your first users can actually use",
    intro:
      "Most ideas die in the gap between the pitch deck and the product. We close that gap: a focused, well-built first version in your users' hands in weeks — real accounts, real data, real payments — so you learn from usage instead of opinions.",
    highlights: [
      { label: "Typical timeline", value: "2–6 weeks" },
      { label: "Starting from", value: "$500" },
      { label: "You own", value: "100% of the code" },
      { label: "Handover", value: "Repo, docs, deploy" },
    ],
    idealFor: [
      "Founders validating a new idea before raising or hiring",
      "Businesses testing a product line without touching core systems",
      "Teams with a clear problem but no engineering capacity yet",
      "Anyone who has been quoted six months for something that needs six weeks",
    ],
    deliverables: [
      {
        title: "Scoped feature set",
        body: "We cut the roadmap down to the shortest path that still proves the idea, and write it down so nothing quietly expands mid-build.",
      },
      {
        title: "Designed, responsive interface",
        body: "A clean, considered UI that works on phones and desktops — not a template with your logo dropped in.",
      },
      {
        title: "Accounts, database and payments",
        body: "Authentication, a real data model, and Stripe billing wired up when your MVP needs to charge from day one.",
      },
      {
        title: "Deployed and monitored",
        body: "Live on your own domain with SSL, analytics, and error tracking, so you can see what users do and what breaks.",
      },
      {
        title: "Repository and documentation",
        body: "Your GitHub organisation, your accounts, readable code and a README that lets any developer continue the work.",
      },
      {
        title: "Two weeks of post-launch support",
        body: "Bugs found by your first real users get fixed after launch — not billed as a new project.",
      },
    ],
    process: [
      {
        title: "Scoping call",
        body: "A 30-minute conversation about the problem, the audience, and what has to be true for the MVP to count as a success. Free, no commitment.",
      },
      {
        title: "Written proposal",
        body: "You get a fixed scope, a fixed price, and a delivery date in writing before any code is written.",
      },
      {
        title: "Build in weekly slices",
        body: "You see a working, deployable version every week. Feedback lands while it is still cheap to act on.",
      },
      {
        title: "Launch and hand over",
        body: "We deploy to your domain, transfer every account and repository, and walk you through the codebase.",
      },
    ],
    stack: [
      {
        group: "Product",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        group: "Data & auth",
        items: ["PostgreSQL", "Supabase", "Prisma", "Auth.js"],
      },
      {
        group: "Operations",
        items: ["Vercel", "Stripe", "Resend", "Sentry"],
      },
    ],
    faqs: [
      {
        q: "What does $500 actually cover?",
        a: "It is the entry point for a small, tightly scoped MVP — a handful of screens, accounts, and a database. Anything larger is quoted after the scoping call, always as a fixed price agreed up front rather than an open-ended hourly rate.",
      },
      {
        q: "Do I own the code?",
        a: "Completely. The repository lives in your GitHub organisation and every third-party account is created in your name from day one. There is no lock-in and no licence to renew.",
      },
      {
        q: "What if I need changes after launch?",
        a: "The first two weeks of bug fixes are included. Beyond that we can continue on a per-feature basis or agree a monthly retainer — whichever fits how fast you want to move.",
      },
      {
        q: "Can you work with a designer I already have?",
        a: "Yes. If you bring Figma files we build to them. If you don't, we handle design as part of the engagement.",
      },
    ],
    formHeading: "Tell us about your idea",
    formBody:
      "Describe the problem you want to solve and who has it. We'll come back within 24 hours with a scope, a price, and an honest opinion on whether it's worth building.",
  },
  {
    slug: "custom-applications",
    name: "Custom Applications",
    icon: Layers,
    tagline: "Software shaped around how your business actually works",
    description:
      "Full-stack web applications built with modern technologies. Scalable architecture, clean code, and a product-first mindset — tailored to your specific business needs.",
    price: "$100",
    priceNumeric: "100",
    priceNote: "Starting point for focused builds. Larger systems quoted per scope.",
    timeline: "3–12 weeks depending on scope",
    eyebrow: "Custom Applications",
    headline: "Stop bending your business around someone else's software",
    intro:
      "Spreadsheets, five overlapping SaaS subscriptions, and a process only one person fully understands. We replace that with one application built around your actual workflow — internal tools, client portals, dashboards and platforms that fit the first time.",
    highlights: [
      { label: "Typical timeline", value: "3–12 weeks" },
      { label: "Starting from", value: "$100" },
      { label: "Architecture", value: "Built to scale" },
      { label: "Handover", value: "Repo, docs, training" },
    ],
    idealFor: [
      "Teams running critical operations out of spreadsheets and email",
      "Businesses paying for SaaS that only fits half their process",
      "Companies that need a client-facing portal on top of internal systems",
      "Organisations replacing an ageing tool nobody wants to maintain",
    ],
    deliverables: [
      {
        title: "Workflow discovery",
        body: "We map how the work is done today — including the shortcuts and exceptions — before proposing how software should support it.",
      },
      {
        title: "Considered architecture",
        body: "A data model and system design that holds up when your volume, team, and feature list grow, documented in plain language.",
      },
      {
        title: "Roles and permissions",
        body: "Admins, staff, and clients each see exactly what they should, with an audit trail where it matters.",
      },
      {
        title: "Integrations",
        body: "Connected to the tools you already run — payments, email, accounting, CRM, or any documented API.",
      },
      {
        title: "Dashboards and reporting",
        body: "The numbers your team checks daily, exportable, and accurate — not another report someone has to assemble by hand.",
      },
      {
        title: "Training and documentation",
        body: "A walkthrough for the people who will use it every day, plus technical docs for whoever maintains it next.",
      },
    ],
    process: [
      {
        title: "Discovery",
        body: "We sit with the people doing the work, document the current process end to end, and identify what software should actually change.",
      },
      {
        title: "Architecture and plan",
        body: "A written technical plan: data model, integrations, phases, and a fixed price per phase so budget stays predictable.",
      },
      {
        title: "Iterative build",
        body: "Delivered in phases against a staging environment your team can use. Each phase ships something usable.",
      },
      {
        title: "Rollout and support",
        body: "Data migration, training, go-live, and a support window while your team settles into the new system.",
      },
    ],
    stack: [
      {
        group: "Application",
        items: ["Next.js", "React", "TypeScript", "Node.js"],
      },
      {
        group: "Data",
        items: ["PostgreSQL", "Prisma", "Redis", "S3 storage"],
      },
      {
        group: "Infrastructure",
        items: ["Vercel", "Docker", "GitHub Actions", "Sentry"],
      },
    ],
    faqs: [
      {
        q: "How do you price a project this open-ended?",
        a: "We break it into phases and quote each one as a fixed price. You approve phase by phase, so you always know the cost before work starts and can stop at any boundary.",
      },
      {
        q: "Can you integrate with the systems we already use?",
        a: "If it has a documented API or a database we can reach, yes. Payments, accounting, CRMs, ERPs, and internal legacy systems are all common. We confirm feasibility during discovery, before you commit.",
      },
      {
        q: "What happens to our existing data?",
        a: "Migration is part of the rollout. We import from spreadsheets, exports, or a live database, validate the results against your records, and keep the old system readable until you are confident.",
      },
      {
        q: "Who maintains it afterwards?",
        a: "Your call. Hand it to an in-house developer with the documentation we provide, or keep us on a retainer for maintenance and new features.",
      },
    ],
    formHeading: "Tell us about your workflow",
    formBody:
      "Describe how the work gets done today and where it breaks down. We'll reply within 24 hours with an approach, a phased plan, and a realistic budget.",
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    icon: Sparkles,
    tagline: "AI that does a specific job, measurably well",
    description:
      "Add intelligence to your product. From chatbots to content generation, we integrate AI capabilities into your application to automate workflows and enhance user experience.",
    price: "$250",
    priceNumeric: "250",
    priceNote: "Per integration. Model and infrastructure costs billed to your own accounts.",
    timeline: "1–6 weeks per integration",
    eyebrow: "AI Integration",
    headline: "AI in your product, pointed at a problem worth solving",
    intro:
      "Adding a chat box to a product is easy and rarely useful. We start from a task that costs your team real hours — triage, summarising, extraction, support, drafting — and build an AI feature around it, with evaluation so you can prove it works before it faces a customer.",
    highlights: [
      { label: "Typical timeline", value: "1–6 weeks" },
      { label: "Starting from", value: "$250" },
      { label: "Models", value: "Claude, GPT, open source" },
      { label: "Includes", value: "Evals & cost controls" },
    ],
    idealFor: [
      "Products where a repetitive task eats hours of staff time each week",
      "Support teams answering the same questions from the same documents",
      "Teams sitting on documents, tickets, or transcripts nobody has time to read",
      "Companies that tried an AI feature and could not tell whether it helped",
    ],
    deliverables: [
      {
        title: "Use-case assessment",
        body: "An honest read on which parts of your workflow AI genuinely improves — and which are better served by ordinary software.",
      },
      {
        title: "Retrieval over your own content",
        body: "Answers grounded in your documents, database, and policies, with citations, rather than a general model guessing.",
      },
      {
        title: "Model integration",
        body: "Claude, GPT, or an open-source model — chosen for the task, with the option to switch later without a rewrite.",
      },
      {
        title: "Evaluation set",
        body: "A test suite of real inputs and expected outputs, so quality is a number you can track instead of a feeling.",
      },
      {
        title: "Cost and rate controls",
        body: "Token budgets, caching, and per-user limits, plus a dashboard showing exactly what the feature costs to run.",
      },
      {
        title: "Guardrails and fallbacks",
        body: "Input validation, output checks, and a defined behaviour for the cases where the model should stay quiet.",
      },
    ],
    process: [
      {
        title: "Identify the task",
        body: "We look at where time is actually spent and pick the narrowest task with the clearest payoff. Broad 'add AI' briefs get narrowed here.",
      },
      {
        title: "Prototype and measure",
        body: "A working prototype on your real data within days, scored against an evaluation set so the decision to continue is evidence-based.",
      },
      {
        title: "Productionise",
        body: "Streaming responses, caching, rate limits, monitoring, and graceful degradation when a provider has a bad day.",
      },
      {
        title: "Monitor and tune",
        body: "Once live we watch quality, latency, and spend, and tune prompts and retrieval against what users actually ask.",
      },
    ],
    stack: [
      {
        group: "Models",
        items: ["Claude", "OpenAI", "Open-source models", "Embeddings"],
      },
      {
        group: "Retrieval",
        items: ["pgvector", "PostgreSQL", "Structured extraction", "Rerankers"],
      },
      {
        group: "Delivery",
        items: ["Next.js", "Streaming APIs", "Queues", "Usage analytics"],
      },
    ],
    faqs: [
      {
        q: "Does our data get used to train models?",
        a: "No. We use provider APIs with training disabled, keys live in your own accounts, and we scope exactly which data the feature can reach before anything is sent.",
      },
      {
        q: "How do you keep it from making things up?",
        a: "Answers are grounded in your own content with citations, outputs are validated against a schema where possible, and the system is built to say it doesn't know rather than improvise. The evaluation set measures how often that holds.",
      },
      {
        q: "What will it cost to run each month?",
        a: "That depends on volume and model, and we estimate it during the prototype using your real traffic. Caching and model routing usually cut the naive figure substantially, and hard limits stop surprise bills.",
      },
      {
        q: "Can you add this to an app we already have?",
        a: "Yes — most of this work is an integration into an existing product. We work with your codebase and your team, and we do not require a rewrite.",
      },
    ],
    formHeading: "Tell us what you want to automate",
    formBody:
      "Describe the task that eats your team's time and what data sits behind it. We'll reply within 24 hours with a view on feasibility, approach, and cost.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
