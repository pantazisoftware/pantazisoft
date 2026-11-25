import type { ServiceCopy, ServiceSlug } from "./index";

export const en: Record<ServiceSlug, ServiceCopy> = {
  "mvp-development": {
    name: "MVP Development",
    tagline: "From idea to a product your first users can use, in weeks.",
    title: "MVP Development — Launch Your Product in Weeks",
    description:
      "We design, build and launch your minimum viable product in 2–6 weeks: real accounts, real data, real payments. Fixed scope, and you own all the code.",
    keywords: [
      "MVP development",
      "MVP development company",
      "build an MVP",
      "startup software development",
      "Next.js MVP",
    ],
    h1: "Ship an MVP your first users can actually use",
    lead: "Most ideas die in the gap between the pitch deck and the product. We close that gap: a focused, well-built first version in your users' hands in weeks, with real accounts, real data and real payments, so you learn from usage instead of opinions.",
    facts: [
      { label: "Typical timeline", value: "2–6 weeks" },
      { label: "Scope", value: "Fixed, in writing" },
      { label: "You own", value: "100% of the code" },
      { label: "Handover", value: "Repository, docs, deployment" },
    ],
    audience: [
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
        body: "A clean, considered interface that works on phones and desktops, not a template with your logo dropped in.",
      },
      {
        title: "Accounts, database and payments",
        body: "Authentication, a real data model, and Stripe billing wired up when your MVP needs to charge from day one.",
      },
      {
        title: "Deployed and monitored",
        body: "Live on your own domain with SSL, analytics and error tracking, so you can see what users do and what breaks.",
      },
      {
        title: "Repository and documentation",
        body: "Your GitHub organisation, your accounts, readable code and a README that lets any developer continue the work.",
      },
      {
        title: "Two weeks of post-launch support",
        body: "Bugs found by your first real users get fixed after launch, not treated as a new project.",
      },
    ],
    process: [
      {
        title: "Scoping call",
        body: "A 30-minute conversation about the problem, the audience, and what has to be true for the MVP to count as a success. No commitment.",
      },
      {
        title: "Written proposal",
        body: "You get a fixed scope and a delivery date in writing before any code is written.",
      },
      {
        title: "Build in weekly slices",
        body: "You see a working, deployable version every week. Feedback lands while it is still easy to act on.",
      },
      {
        title: "Launch and hand over",
        body: "We deploy to your domain, transfer every account and repository, and walk you through the codebase.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to build an MVP?",
        a: "Most MVPs reach a first release in 2 to 6 weeks. The exact date is fixed in the written proposal, after the scoping call, before any work starts.",
      },
      {
        q: "Do I own the code?",
        a: "Completely. The repository lives in your GitHub organisation and every third-party account is created in your name from day one. There is no lock-in and no licence to renew.",
      },
      {
        q: "What if I need changes after launch?",
        a: "The first two weeks of bug fixes are included. Beyond that we can continue feature by feature or agree a monthly retainer, whichever fits how fast you want to move.",
      },
      {
        q: "Can you work with a designer I already have?",
        a: "Yes. If you bring Figma files we build to them. If you don't, we handle design as part of the engagement.",
      },
    ],
    formHeading: "Tell us about your idea",
    formBody:
      "Describe the problem you want to solve and who has it. We'll come back within 24 hours with a scope and an honest opinion on whether it's worth building.",
    messagePlaceholder:
      "The problem, who has it, and what a first version should do…",
  },

  "custom-applications": {
    name: "Custom Applications",
    tagline: "Software shaped around how your business actually works.",
    title: "Custom Web Application Development for Businesses",
    description:
      "Internal tools, client portals, dashboards and platforms built around your workflow. We replace spreadsheets and overlapping SaaS with one application you own.",
    keywords: [
      "custom web application development",
      "custom software for business",
      "internal tools development",
      "client portal development",
      "business process automation",
    ],
    h1: "Stop bending your business around someone else's software",
    lead: "Spreadsheets, five overlapping subscriptions, and a process only one person fully understands. We replace that with one application built around your actual workflow: internal tools, client portals, dashboards and platforms that fit the first time.",
    facts: [
      { label: "Typical timeline", value: "3–12 weeks" },
      { label: "Delivery", value: "In phases, each one usable" },
      { label: "Architecture", value: "Built to scale" },
      { label: "Handover", value: "Repository, docs, training" },
    ],
    audience: [
      "Teams running critical operations out of spreadsheets and email",
      "Businesses paying for SaaS that only fits half their process",
      "Companies that need a client-facing portal on top of internal systems",
      "Organisations replacing an ageing tool nobody wants to maintain",
    ],
    deliverables: [
      {
        title: "Workflow discovery",
        body: "We map how the work is done today, including the shortcuts and exceptions, before proposing how software should support it.",
      },
      {
        title: "Considered architecture",
        body: "A data model and system design that holds up when your volume, team and feature list grow, documented in plain language.",
      },
      {
        title: "Roles and permissions",
        body: "Admins, staff and clients each see exactly what they should, with an audit trail where it matters.",
      },
      {
        title: "Integrations",
        body: "Connected to the tools you already run: payments, email, accounting, CRM, or any documented API.",
      },
      {
        title: "Dashboards and reporting",
        body: "The numbers your team checks daily, exportable and accurate, not another report someone has to assemble by hand.",
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
        body: "A written technical plan: data model, integrations and phases, each with a fixed scope, so the budget stays predictable.",
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
    faqs: [
      {
        q: "How do you plan a project this open-ended?",
        a: "We break it into phases and agree each one in writing. You approve phase by phase, so you always know what you are committing to before work starts and can stop at any boundary.",
      },
      {
        q: "Can you integrate with the systems we already use?",
        a: "If it has a documented API or a database we can reach, yes. Payments, accounting, CRMs, ERPs and internal legacy systems are all common. We confirm feasibility during discovery, before you commit.",
      },
      {
        q: "What happens to our existing data?",
        a: "Migration is part of the rollout. We import from spreadsheets, exports or a live database, validate the results against your records, and keep the old system readable until you are confident.",
      },
      {
        q: "Who maintains it afterwards?",
        a: "Your call. Hand it to an in-house developer with the documentation we provide, or keep us on a retainer for maintenance and new features.",
      },
    ],
    formHeading: "Tell us about your workflow",
    formBody:
      "Describe how the work gets done today and where it breaks down. We'll reply within 24 hours with an approach and a phased plan.",
    messagePlaceholder: "How the work is done today, and where it breaks down…",
  },

  "mobile-app-development": {
    name: "Mobile App Development",
    tagline: "iOS and Android apps your customers keep on their home screen.",
    title: "Mobile App Development — iOS & Android Apps",
    description:
      "We design, build and publish iOS and Android apps, native or cross-platform, through App Store and Google Play review. You own all the code.",
    keywords: [
      "mobile app development",
      "iOS app development",
      "Android app development",
      "cross-platform app development",
      "React Native development",
      "app development company",
    ],
    h1: "iOS and Android apps, built and shipped to the stores",
    lead: "A mobile app lives on the most personal screen your customers own, so it has to be fast, clear and reliable. We design and build apps for iPhone, iPad and Android, take them through App Store and Google Play review, and keep them working as each new OS version arrives. We publish our own apps on the App Store, so we know the whole path from idea to listing.",
    facts: [
      { label: "Platforms", value: "iOS and Android" },
      { label: "Approach", value: "Native or cross-platform" },
      { label: "Store release", value: "Handled end to end" },
      { label: "You own", value: "100% of the code" },
    ],
    audience: [
      "Businesses whose customers expect to book, order or check something from their phone",
      "Startups whose product is the app itself",
      "Teams with a web app that now needs a mobile companion",
      "Field and on-site staff who need a tool that works with the camera, GPS or a weak signal",
    ],
    deliverables: [
      {
        title: "Native or cross-platform, chosen per project",
        body: "Swift and SwiftUI for iOS, Kotlin and Jetpack Compose for Android, or one React Native codebase for both when that serves the product better. We explain the trade-off before you commit.",
      },
      {
        title: "Design that fits each platform",
        body: "Interfaces that feel at home on iPhone and on Android, following Apple's Human Interface Guidelines and Google's Material Design, with dark mode and larger text supported.",
      },
      {
        title: "Device features",
        body: "Camera, location, push notifications, offline storage, Face ID and fingerprint sign-in, in-app purchases and widgets, when the product needs them.",
      },
      {
        title: "Backend and API",
        body: "Accounts, data and sync through an API we build or the systems you already run, so the app and your website share one source of truth.",
      },
      {
        title: "App Store and Google Play release",
        body: "Store listings, screenshots, privacy details and the review process, including the changes reviewers ask for.",
      },
      {
        title: "Updates after launch",
        body: "Crash reporting and analytics from day one, and updates for new iOS and Android versions so the app keeps working.",
      },
    ],
    process: [
      {
        title: "Scoping call",
        body: "We go through who uses the app, on which phones, and what it must do on day one. No commitment.",
      },
      {
        title: "Prototype and plan",
        body: "Clickable screens and a written plan with a fixed scope, including whether to go native or cross-platform.",
      },
      {
        title: "Build with test versions",
        body: "You install working versions on your own phone through TestFlight and Google Play testing as the app grows.",
      },
      {
        title: "Store launch and hand over",
        body: "We publish to the App Store and Google Play under your developer accounts and hand over the code and documentation.",
      },
    ],
    faqs: [
      {
        q: "Native or cross-platform: which should I choose?",
        a: "Native apps (Swift for iOS, Kotlin for Android) give the best performance and the closest feel to each platform. A cross-platform app (React Native) uses one codebase for both stores, which is usually less to build and maintain. We recommend one during scoping, based on what the app has to do.",
      },
      {
        q: "Do you publish the app to the App Store and Google Play?",
        a: "Yes. We prepare the listings and take the app through both review processes. The app is published under your own developer accounts, so the listings belong to you.",
      },
      {
        q: "Can the app work with our existing website or system?",
        a: "Yes. If your system has an API, or we can add one, the app uses the same data, accounts and orders as your website.",
      },
      {
        q: "What happens when Apple or Google release a new OS version?",
        a: "Apps need occasional updates to keep working and to meet new store requirements. We can handle them on a monthly retainer or as one-off updates.",
      },
    ],
    formHeading: "Tell us about your app",
    formBody:
      "Describe what the app should do and who will use it. We'll reply within 24 hours with an approach for iOS and Android and an honest view of what to build first.",
    messagePlaceholder:
      "What the app should do, who uses it, and on which phones…",
  },

  "ai-integration": {
    name: "AI Integration",
    tagline: "AI that does a specific job in your product, measurably well.",
    title: "AI Integration Services — Add AI to Your Product",
    description:
      "We add AI features that do a specific job: support, triage, summarising, extraction, drafting. Grounded in your data, with evaluation and cost controls built in.",
    keywords: [
      "AI integration services",
      "add AI to my app",
      "LLM integration",
      "RAG development",
      "AI chatbot for business",
      "Claude API integration",
    ],
    h1: "AI in your product, pointed at a problem worth solving",
    lead: "Adding a chat box to a product is easy and rarely useful. We start from a task that costs your team real hours, such as triage, summarising, extraction, support or drafting, and build an AI feature around it, with evaluation so you can prove it works before it faces a customer.",
    facts: [
      { label: "Typical timeline", value: "1–6 weeks" },
      { label: "Models", value: "Claude, GPT, open source" },
      { label: "Includes", value: "Evaluation and cost controls" },
      { label: "Works with", value: "Your existing app" },
    ],
    audience: [
      "Products where a repetitive task eats hours of staff time each week",
      "Support teams answering the same questions from the same documents",
      "Teams sitting on documents, tickets or transcripts nobody has time to read",
      "Companies that tried an AI feature and could not tell whether it helped",
    ],
    deliverables: [
      {
        title: "Use-case assessment",
        body: "An honest read on which parts of your workflow AI genuinely improves, and which are better served by ordinary software.",
      },
      {
        title: "Retrieval over your own content",
        body: "Answers grounded in your documents, database and policies, with citations, rather than a general model guessing.",
      },
      {
        title: "Model integration",
        body: "Claude, GPT or an open-source model, chosen for the task, with the option to switch later without a rewrite.",
      },
      {
        title: "Evaluation set",
        body: "A test suite of real inputs and expected outputs, so quality is a number you can track instead of a feeling.",
      },
      {
        title: "Cost and rate controls",
        body: "Token budgets, caching and per-user limits, plus a dashboard showing exactly how much the feature is being used.",
      },
      {
        title: "Guardrails and fallbacks",
        body: "Input validation, output checks, and a defined behaviour for the cases where the model should stay quiet.",
      },
    ],
    process: [
      {
        title: "Identify the task",
        body: "We look at where time is actually spent and pick the narrowest task with the clearest payoff. Broad “add AI” briefs get narrowed here.",
      },
      {
        title: "Prototype and measure",
        body: "A working prototype on your real data within days, scored against an evaluation set so the decision to continue is based on evidence.",
      },
      {
        title: "Productionise",
        body: "Streaming responses, caching, rate limits, monitoring, and graceful degradation when a provider has a bad day.",
      },
      {
        title: "Monitor and tune",
        body: "Once live we watch quality, latency and usage, and tune prompts and retrieval against what users actually ask.",
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
        q: "Which AI models do you work with?",
        a: "Claude, GPT and open-source models. We choose the model for the task during the prototype and build the integration so the model can be swapped later without a rewrite.",
      },
      {
        q: "Can you add this to an app we already have?",
        a: "Yes. Most of this work is an integration into an existing product. We work with your codebase and your team, and we do not require a rewrite.",
      },
    ],
    formHeading: "Tell us what you want to automate",
    formBody:
      "Describe the task that eats your team's time and what data sits behind it. We'll reply within 24 hours with a view on feasibility and approach.",
    messagePlaceholder:
      "The task you want to automate, and the data behind it…",
  },
};
