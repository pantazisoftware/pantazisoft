import type { ProductCopy, ProductSlug } from "./types";

export const en: Record<ProductSlug, ProductCopy> = {
  "fabricator-pro": {
    name: "FabricatorPro",
    category: "Fabrication calculator app for iPhone",
    tagline:
      "30 calculators for metal fabricators: miters, pipe saddles, cone patterns and shop charts.",
    title: "FabricatorPro — Metal Fabrication Calculator App for iPhone",
    description:
      "30 fabrication calculators in one offline iOS app: miters, pipe saddles, cone and pyramid flat patterns, cutting optimizer, drill & tap charts. 1:1 PDF templates.",
    keywords: [
      "metal fabrication calculator",
      "pipe saddle calculator",
      "fish mouth template",
      "cone flat pattern calculator",
      "miter angle calculator",
      "cutting optimizer",
      "drill and tap chart",
      "welding app",
    ],
    h1: "FabricatorPro: 30 fabrication calculators in your pocket",
    lead: "The shop toolbox you can pull out with one hand. FabricatorPro solves miters, pipe saddles, cone and pyramid developments, gate geometry and workshop maths, then prints the result as a 1:1 template you can wrap around the stock.",
    facts: [
      { label: "Platform", value: "iPhone (iOS)" },
      { label: "Tools", value: "30, in 7 categories" },
      { label: "Units", value: "Metric and imperial" },
      { label: "Connection", value: "Works fully offline" },
    ],
    overview: [
      "FabricatorPro is an iOS app for people who cut, weld and build with metal. It replaces the notebook of formulas, the pocket reference charts and the trial-and-error cuts with 30 purpose-built calculators, each one designed around a real fabrication job.",
      "Every fit-sensitive tool draws a clean 2D diagram with an optional 3D preview, so you can see the joint before you cut it. Patterns export as 1:1 PDF templates to print or trace directly onto stock, and as DXF files for CAD and CNC. The app works without a signal, switches between metric and imperial at any time, and keeps a history of saved calculations.",
    ],
    features: [
      {
        title: "Angles, miters and joints",
        body: "Simple miters, compound miters, profile join angles and a Pythagoras / 3-4-5 solver, plus a squareness check so frames go together right the first time.",
      },
      {
        title: "Pipe saddles and fish mouths",
        body: "Round-on-round and round-on-flat templates, square-on-round and Y-pipe connectors. Developed 2D patterns with a 3D preview, ready to print 1:1 and wrap around the pipe.",
      },
      {
        title: "Hoppers, cones and transitions",
        body: "Develop truncated cones and pyramids, round-to-square and rectangle-to-round transitions, and auger flight flat patterns, without trial and error on sheet stock.",
      },
      {
        title: "Gates and fence geometry",
        body: "Space vertical bars evenly with child-safety presets, plan sliding gates on sloped ground, and balance swing gates with counterweight torque maths.",
      },
      {
        title: "Workshop power tools",
        body: "The Cutting Optimizer uses first-fit-decreasing bin packing to minimise bar waste. Gear Train RPM solves multi-stage ratios. Hydraulic Cylinder sizes bore, force and pressure.",
      },
      {
        title: "Drill, tap and torque charts",
        body: "Offline thread references for metric M2–M30 and UNC/UNF: tap drills, clearance holes, bolt torques by strength class, and a live unit converter.",
      },
    ],
    audience: [
      "Welders and metal fabricators laying out joints on the shop floor",
      "Pipefitters cutting saddles, fish mouths and Y-connections",
      "Sheet-metal workers developing cones, hoppers and transitions",
      "Gate and fence builders spacing bars and balancing counterweights",
      "Hobbyists and small workshops that want reference charts without a signal",
    ],
    steps: [
      {
        title: "Pick a tool",
        body: "Open one of the seven categories and choose the calculator for the job, from a simple miter to a round-to-square transition.",
      },
      {
        title: "Enter your dimensions",
        body: "Type the sizes in metric or imperial. The diagram and results update as you go, with a 3D preview on fit-sensitive tools.",
      },
      {
        title: "Print, export or save",
        body: "Print a 1:1 PDF template, export a DXF for CAD or CNC, or save the calculation to your history for the next job.",
      },
    ],
    catalogue: {
      title: "All 30 FabricatorPro tools",
      intro:
        "Every calculator is built around a real fabrication workflow. Sixteen core tools are free forever; the ones marked Pro are unlocked with FabricatorPro Pro.",
      groups: [
        {
          name: "Angles & Cuts",
          summary: "Frame joints, compound cuts and squareness checks.",
          tools: [
            {
              name: "Miter Calculator",
              body: "Cut angle and cut length from joint angle and profile width.",
            },
            {
              name: "Compound Miter",
              body: "Two-plane miter and bevel for crown molding, sloped frames and roof work.",
            },
            {
              name: "Profile Join Angle",
              pro: true,
              body: "Joins two profiles at arbitrary directions with gap and overlap analysis.",
            },
            {
              name: "Bisector",
              body: "Angle bisector with profile offset calculation.",
            },
            {
              name: "Pythagoras / 3-4-5",
              body: "Right-triangle solver, diagonal squareness check and law of cosines.",
            },
          ],
        },
        {
          name: "Pipe Cuts",
          summary: "Saddle joints, fish mouths and tube intersections.",
          tools: [
            {
              name: "Round on Round",
              body: "Saddle / fish-mouth template with 2D pattern and 3D preview.",
            },
            {
              name: "Round on Flat",
              body: "Pipe-on-plate elliptical cut as a developed sine-wave pattern.",
            },
            {
              name: "Square on Square",
              pro: true,
              body: "Flat pattern for each face when square tubes intersect at any angle.",
            },
            {
              name: "Square on Round",
              pro: true,
              body: "Square tube on round pipe, with each face solved independently.",
            },
            {
              name: "Y-Pipe Connector",
              pro: true,
              body: "Two branches merging into one outlet, with 2D schematic and 3D preview.",
            },
          ],
        },
        {
          name: "Hoppers & Funnels",
          summary:
            "Sheet-metal flat patterns for cones, transitions and augers.",
          tools: [
            {
              name: "Truncated Cone",
              body: "Round funnel or reducer pattern: annular sector with full sheet layout.",
            },
            {
              name: "Truncated Pyramid",
              pro: true,
              body: "Square-funnel panels with shared edges and fold lines.",
            },
            {
              name: "Round to Square",
              pro: true,
              body: "Transition piece from round to square: four corner triangles and four curved panels.",
            },
            {
              name: "Rectangle to Round",
              pro: true,
              body: "Asymmetric rectangle-to-round transition, developed in multiple panels.",
            },
            {
              name: "Auger Screw",
              pro: true,
              body: "Helical flight pattern: developed radii, sector angle and material needed.",
            },
          ],
        },
        {
          name: "Gates & Fences",
          summary: "Bar spacing, sloped rails and counterweight balance.",
          tools: [
            {
              name: "Bar Spacing",
              body: "Distribute bars evenly by count, maximum spacing or target spacing.",
            },
            {
              name: "Sliding Gate Slope",
              body: "Post heights, ground clearance and real rail length on uneven ground.",
            },
            {
              name: "Gate Counterweight",
              pro: true,
              body: "Swing and cantilever gate torque balance with hinge-load analysis.",
            },
          ],
        },
        {
          name: "Workshop",
          summary: "Cutting lists, drive trains and hydraulic sizing.",
          tools: [
            {
              name: "Cutting Optimizer",
              pro: true,
              body: "First-fit-decreasing bin packing with kerf, waste percentage and visual layout.",
            },
            {
              name: "Gear Train RPM",
              pro: true,
              body: "Multi-stage ratios: output RPM, torque, efficiency and rotation.",
            },
            {
              name: "Hydraulic Cylinder",
              body: "Force, bore, pressure, speed, stroke time and oil volume, hydraulic or pneumatic.",
            },
          ],
        },
        {
          name: "Geometry & Tools",
          summary: "Polygons, arcs, weights, stairs and thermal expansion.",
          tools: [
            {
              name: "Polygon Calculator",
              body: "All dimensions, angles, area and perimeter for any regular polygon.",
            },
            {
              name: "Circle Division",
              body: "Divide a circle into N equal parts with a 1:1 wrap-around paper template.",
            },
            {
              name: "Arc Length",
              body: "Arc, chord, sagitta and radius: solve the rest from any two inputs.",
            },
            {
              name: "Weight Calculator",
              pro: true,
              body: "Steel, stainless, aluminium and copper by sheet, pipe, angle, flat or round.",
            },
            {
              name: "Stair Calculator",
              pro: true,
              body: "Rise, run, stringer length and angle with a Blondel comfort check.",
            },
            {
              name: "Thermal Expansion",
              pro: true,
              body: "Linear expansion for common metals from length and temperature change.",
            },
          ],
        },
        {
          name: "Utilities",
          summary: "Reference charts always in your pocket.",
          tools: [
            {
              name: "Unit Converter",
              body: "Length (with fractional inch), area, weight, pressure, temperature and torque.",
            },
            {
              name: "Drill & Tap Chart",
              body: "Searchable metric (M2–M30) and UNC/UNF with tap drill and clearance sizes.",
            },
            {
              name: "Bolt Torque Chart",
              body: "Torque by bolt size and strength class, dry and lubricated, with clamp force.",
            },
          ],
        },
      ],
    },
    lists: [
      {
        title: "Free and Pro",
        intro:
          "FabricatorPro is free to download and the core tools stay free. Pro is an optional upgrade, available as a monthly subscription or a one-time lifetime purchase through the App Store.",
        items: [
          "Free: sixteen core tools, including Miter, Round on Round, Truncated Cone and Bar Spacing",
          "Free: the full Drill & Tap chart, Bolt Torque chart and Unit Converter",
          "Pro: all 30 tools",
          "Pro: unlimited saved calculations",
          "Pro: DXF export for CAD and CNC",
          "Pro: full 2D and 3D previews",
        ],
      },
    ],
    faqs: [
      {
        q: "Does FabricatorPro work without an internet connection?",
        a: "Yes. Every calculator and reference chart works fully offline, so it is usable on the shop floor or on site where there is no signal.",
      },
      {
        q: "Can I print the patterns at full size?",
        a: "Yes. Patterns export as 1:1 PDF templates that you can print and wrap around a pipe or trace directly onto sheet stock.",
      },
      {
        q: "Does it support both metric and imperial units?",
        a: "Yes. Metric and imperial are supported throughout, with live switching, and the Unit Converter handles fractional inches.",
      },
      {
        q: "Which tools are free?",
        a: "Sixteen core tools are free forever, including Miter, Compound Miter, Round on Round, Round on Flat, Truncated Cone, Bar Spacing, and the Drill & Tap, Bolt Torque and Unit Converter charts. Pro unlocks the remaining tools.",
      },
      {
        q: "Can I export to CAD or a CNC machine?",
        a: "Yes. With Pro, patterns can be exported as DXF files for use in CAD software and CNC workflows.",
      },
      {
        q: "Does the app collect my data?",
        a: "No. FabricatorPro runs entirely on your device. There is no account, no analytics, no ads and no third-party tracking; saved calculations stay on your iPhone.",
      },
    ],
    imageAlt: "FabricatorPro app icon",
    screenshots: [
      {
        alt: "FabricatorPro home screen with all tool categories",
        caption: "Every tool, one tap away",
      },
      {
        alt: "FabricatorPro round-on-round saddle joint calculator",
        caption: "Round on Round",
      },
      {
        alt: "FabricatorPro truncated cone flat pattern calculator",
        caption: "Truncated Cone",
      },
      {
        alt: "FabricatorPro cutting optimizer with waste minimisation",
        caption: "Cutting Optimizer",
      },
      {
        alt: "FabricatorPro drill and tap reference chart",
        caption: "Drill & Tap Chart",
      },
      {
        alt: "FabricatorPro truncated pyramid flat pattern calculator",
        caption: "Truncated Pyramid",
      },
      {
        alt: "FabricatorPro auger screw flight flat pattern",
        caption: "Auger Screw",
      },
      {
        alt: "FabricatorPro bar spacing calculator for gates and fences",
        caption: "Bar Spacing",
      },
      {
        alt: "FabricatorPro gate counterweight balance calculator",
        caption: "Gate Counterweight",
      },
      {
        alt: "FabricatorPro gear train RPM calculator",
        caption: "Gear Train RPM",
      },
      {
        alt: "FabricatorPro material weight calculator",
        caption: "Weight Calculator",
      },
      { alt: "FabricatorPro stair calculator", caption: "Stair Calculator" },
      { alt: "FabricatorPro unit converter", caption: "Unit Converter" },
      {
        alt: "FabricatorPro history of saved calculations",
        caption: "Saved History",
      },
    ],
  },

  remoto: {
    name: "Remoto",
    category: "TV remote app for iPhone",
    tagline:
      "An ad-free iPhone remote for Android TV, Google TV, Chromecast, Mi Box and Nvidia Shield.",
    title: "Remoto — Ad-Free iPhone Remote for Android TV & Google TV",
    description:
      "A fast, native iPhone remote for Android TV, Google TV, Chromecast, Mi Box and Nvidia Shield. Pairs in about 30 seconds. No ads, no account, no tracking.",
    keywords: [
      "Android TV remote iPhone",
      "Google TV remote app",
      "Chromecast remote iPhone",
      "Mi Box remote app",
      "Nvidia Shield remote iPhone",
      "TV remote app without ads",
    ],
    h1: "Remoto: an iPhone remote for Android TV, without the ads",
    lead: "Remoto is a clean, native iOS remote that pairs with your Android TV or Google TV device in about 30 seconds and then stays out of your way. No sign-in, no tracking, never an ad.",
    facts: [
      { label: "Platform", value: "iPhone, iOS 16 or later" },
      { label: "Works with", value: "Android TV and Google TV" },
      { label: "Pairing", value: "About 30 seconds" },
      { label: "Languages", value: "8" },
    ],
    overview: [
      "Remoto replaces the plastic remote you lost between the couch cushions. It finds every Android TV and Google TV device on your Wi-Fi automatically, pairs with a 6-digit code shown on the TV, and gives you the full remote: D-pad, volume, power, media and channel controls, with haptic feedback on every press.",
      "Most TV-remote apps are buried in banners, interstitials and “watch a video to unlock” prompts. Remoto has none. Commands travel over an encrypted connection straight from your iPhone to your TV on the local network. Nothing is routed through a server, because there isn't one.",
    ],
    features: [
      {
        title: "Never an ad",
        body: "No banners, no interstitials, no “watch a video to unlock.” A remote that opens instantly and does its job.",
      },
      {
        title: "Instant discovery",
        body: "Finds every Android TV and Google TV device on your Wi-Fi automatically over Bonjour. There are no IP addresses to type in.",
      },
      {
        title: "Full remote control",
        body: "D-pad, OK, Back, Home, Menu and Assistant, plus real volume and power buttons mirrored from the hardware remote.",
      },
      {
        title: "Media and channels",
        body: "Play, pause, rewind and fast-forward, with channel up/down and a Guide button for live TV.",
      },
      {
        title: "Haptic feedback",
        body: "Every press lands with a real button feel, so you can drive the TV without looking down at your phone.",
      },
      {
        title: "Private by design",
        body: "No analytics SDKs, no account, no tracking. Commands are encrypted and sent straight to your TV, never through us.",
      },
    ],
    audience: [
      "Anyone who has lost or broken the remote of an Android TV or Google TV device",
      "Owners of a Chromecast with Google TV, Mi Box, Mi TV Stick or Nvidia Shield",
      "People tired of typing searches on a TV with an on-screen keyboard",
      "Households with several TVs that want one remote on the phone",
      "Anyone who wants a remote app that shows no ads and collects no data",
    ],
    steps: [
      {
        title: "Open the app",
        body: "Remoto scans your Wi-Fi for compatible TVs using Apple's Bonjour discovery. The only permission it needs is Local Network access.",
      },
      {
        title: "Pair once",
        body: "Your TV shows a 6-digit code. Type it in. Remoto generates a private certificate on your iPhone, stores it in the Keychain, and pairs over mutual TLS.",
      },
      {
        title: "Take control",
        body: "Every button press travels over an encrypted channel straight from your iPhone to your TV. Nothing is routed through our servers; we don't have any.",
      },
    ],
    lists: [
      {
        title: "Compatible TVs and streaming devices",
        intro:
          "Remoto works with any device that runs the Android TV Remote v2 protocol, including:",
        items: [
          "Xiaomi Mi Box S, Mi TV Stick and Mi TV",
          "Google Chromecast with Google TV",
          "Nvidia Shield TV and Shield TV Pro",
          "TCL, Hisense, Philips and Sony smart TVs on Android TV / Google TV",
          "Generic certified Android TV boxes (H96 / X96 with Google Play)",
        ],
        note: "Requires an iPhone on iOS 16 or later, on the same Wi-Fi network as your TV. Apple TV, Samsung, LG, Roku and Fire TV use different protocols and are not supported.",
      },
      {
        title: "What's free, forever",
        intro: "The core remote is free for good, with no strings attached.",
        items: [
          "Instant Wi-Fi discovery of your TVs",
          "Full D-pad: OK, Back, Home, Menu, Assistant",
          "Volume and power hardware buttons",
          "Media transport: play, pause, rewind, fast-forward",
          "Channel up/down and Guide for live TV",
          "Haptic feedback on every press",
          "8 languages with a Settings override",
          "One paired device",
        ],
      },
      {
        title: "What Remoto Pro adds",
        intro:
          "Pro is a one-time unlock through the App Store. No subscription, no auto-renewal: you buy it once and you own it.",
        items: [
          "Touchpad mode for cursor-driven TVs",
          "Full iOS keyboard: type on your phone, send it to the TV",
          "Apps grid and favourites: YouTube, Netflix, Prime Video, Disney+, Spotify, Twitch and more, one tap away",
          "Unlimited paired devices, switched from the top of the remote",
          "Home Screen and Lock Screen widgets",
          "Hey Siri support: “make the TV louder”, “mute the TV”, “pause the TV”",
          "Multi-TV smart targeting for Siri and widgets",
          "Priority support",
        ],
      },
      {
        title: "Privacy, without asterisks",
        intro:
          "Nothing leaves your phone except the encrypted remote commands sent directly to your TV. There are no servers to leak, because we don't have any.",
        items: [
          "No analytics SDKs: no telemetry, screen views or session data",
          "No account: no email, no password, no cloud sync",
          "No tracking: nothing is collected, sold or shared",
          "“Data Not Collected” is the App Store privacy label",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Remoto work with Apple TV?",
        a: "No. Apple TV uses a different, proprietary protocol. Remoto is for Android TV, Google TV and Mi Box devices only.",
      },
      {
        q: "What about Samsung, LG, Roku or Fire TV?",
        a: "No. Those use different protocols. We chose to ship one thing that works perfectly rather than four that work sort of.",
      },
      {
        q: "Do I need to be on the same Wi-Fi as my TV?",
        a: "Yes. Remoto talks to your TV directly on the local network. It is local-only by design: no cellular, no VPN and no relay server in the cloud.",
      },
      {
        q: "Do I need a Google or Xiaomi account?",
        a: "No. Discovery and pairing are handled entirely by the Android TV Remote protocol built into your device.",
      },
      {
        q: "Will Pro become a subscription later?",
        a: "There are no plans to. If we ever add ongoing services that cost money to run, they would be a separate optional add-on. The current Pro unlock stays a lifetime purchase.",
      },
      {
        q: "What happens if I lose my iPhone?",
        a: "Restore from an iCloud backup and open the app. Your Pro unlock restores from the App Store, and re-pairing your TV takes about 20 seconds.",
      },
      {
        q: "Which TV does Siri control when I have several?",
        a: "Whichever you set as Target TV in Settings ▸ Voice control. Widgets follow the same setting, so a Lock Screen play/pause always reaches the TV you are actually watching.",
      },
      {
        q: "Do you support Apple Watch?",
        a: "It is planned for a future update. Home Screen and Lock Screen widgets and Hey Siri support already ship today.",
      },
    ],
    imageAlt: "Remoto app icon",
    screenshots: [
      {
        alt: "Remoto listening for nearby TVs, with a Xiaomi box discovered and already paired",
        caption: "Finds your TV in seconds",
      },
      {
        alt: "Remoto's full-screen touchpad, where a swipe navigates, a tap selects and a two-finger tap goes back",
        caption: "Swipe to navigate",
      },
      {
        alt: "Remoto's shortcut grid of favourite TV apps, including YouTube, Netflix, Prime Video, Disney+, Max, Hulu and Spotify",
        caption: "Jump straight into an app",
      },
      {
        alt: "Typing a search into Remoto on the iPhone keyboard and sending the whole line to the TV at once",
        caption: "Type on your phone, not the TV",
      },
      {
        alt: "An iPhone lock screen with Remoto's playback and volume controls available without unlocking",
        caption: "Control it from the lock screen",
      },
      {
        alt: "An iOS home screen widget showing Remoto's D-pad, volume and playback buttons",
        caption: "A widget on your home screen",
      },
      {
        alt: "Remoto settings showing Pro status, paired TVs, and toggles for haptic feedback, sound and keeping the screen awake",
        caption: "Haptics, sound and 8 languages",
      },
    ],
    note: "Android TV and Google TV are trademarks of Google LLC. Remoto is not affiliated with, endorsed by, or sponsored by Google, Xiaomi, Nvidia, TCL, Hisense, Philips or Sony.",
  },

  feedfast: {
    name: "FeedFast",
    category: "Changelog, feedback board and uptime monitoring",
    tagline:
      "Changelog, feedback board and status page in one public hub per project.",
    title: "FeedFast — Changelog, Feedback Board & Status Page in One",
    description:
      "One public hub per project: release notes, a feedback board people vote on without an account, and uptime monitoring. Widgets, REST API and MCP server included.",
    keywords: [
      "changelog tool",
      "feedback board",
      "feature request tool",
      "status page",
      "uptime monitoring",
      "changelog widget",
      "MCP server changelog",
    ],
    h1: "FeedFast: changelog, feedback board and status page in one hub",
    lead: "FeedFast gives every project a single public page with release notes, a feedback board people can vote on, and an honest uptime status page. It is built for indie makers and small SaaS teams who would rather ship than juggle three tools.",
    facts: [
      { label: "Type", value: "Web application" },
      { label: "For", value: "Indie makers and small SaaS teams" },
      { label: "Modules", value: "Feedback, changelog, uptime" },
      { label: "Extends with", value: "Widgets, REST API, MCP server" },
    ],
    overview: [
      "FeedFast collapses three separate subscriptions into one public hub per project. Users post ideas and vote on them without creating an account. You write release notes in markdown and publish them to a page, an RSS feed and an embeddable widget. Scheduled HTTP checks watch your endpoints and feed a public status page.",
      "The three modules are connected into one loop: users request and vote, you ship, and marking a request as done turns it into a release note with a public reply. The “What's new” widget then announces it inside your product. The same actions are available over a REST API and an MCP server, so an AI agent can triage the board and publish the changelog for you.",
    ],
    features: [
      {
        title: "Feedback board without a sign-up wall",
        body: "Anyone can post and vote without an account. Requests move through Open, Planned, In progress, Done and Declined, sit in categories you define, and sort by top, new or trending.",
      },
      {
        title: "Markdown changelog",
        body: "Write in a two-pane markdown editor, save a draft, then publish. Each entry updates the public page, the RSS feed and the “What's new” widget, with colour-coded tags such as New, Improved and Fixed.",
      },
      {
        title: "Uptime monitoring that avoids false alarms",
        body: "HTTP checks with configurable method, expected status code and timeout. An incident opens only after two consecutive failed checks, so a single blip never pages you, and recovery sends an email.",
      },
      {
        title: "A status page that stays honest",
        body: "Uptime is shown over 24 hours, 7, 30 and 90 days. Scheduled maintenance suppresses incidents and is excluded from the uptime percentage. Subscribers join by double opt-in email or a status RSS feed.",
      },
      {
        title: "Embeddable widgets",
        body: "One script tag, then data attributes in your markup: a feedback button, an uptime bar, changelog cards or an inline list, and a floating “What's new” badge. Five skins, rendered in a shadow DOM, about 12 KB gzipped, no cookies.",
      },
      {
        title: "REST API and MCP server",
        body: "A REST API with read-only or read-write keys, and an MCP server with twelve tools, including publishing a changelog entry, resolving feedback and scheduling maintenance. Available on the Pro plan.",
      },
      {
        title: "Spam control and verified identity",
        body: "A honeypot field, link limits and per-IP rate limits keep the board clean. Optionally sign your users' identity with HMAC-SHA256 so posts come from verified accounts.",
      },
    ],
    audience: [
      "Indie makers shipping alone who want one place for updates and requests",
      "Small SaaS teams replacing a separate changelog, feedback and status tool",
      "Teams that want AI agents to triage feedback and publish release notes",
      "Products that need a public status page their users can trust",
    ],
    steps: [
      {
        title: "Create a project",
        body: "Each project gets its own public hub page with a feedback board, a changelog and a status page.",
      },
      {
        title: "Embed the widgets",
        body: "Add one script tag with your project slug, then place widgets with data attributes wherever you want them in your product.",
      },
      {
        title: "Close the loop",
        body: "Users request and vote, you ship, and resolving a request publishes the release note and replies in public. Monitors keep the status page current.",
      },
    ],
    freeTools: [
      {
        name: "Widget playground",
        body: "Every widget, skin and button style, live, with the code to paste.",
        href: "https://feedfa.st/tools/widget-playground",
      },
      {
        name: "Feedback button gallery",
        body: "Copy-paste button designs, from quiet to loud, each one a working trigger.",
        href: "https://feedfa.st/tools/feedback-buttons",
      },
      {
        name: "HTML feedback form builder",
        body: "Build your own feedback form in your own markup, on the FeedFast API.",
        href: "https://feedfa.st/tools/feedback-modal",
      },
      {
        name: "Status page examples",
        body: "Eight templates to copy, built around a live uptime widget.",
        href: "https://feedfa.st/tools/status-page-designs",
      },
      {
        name: "Changelog templates",
        body: "Five templates, previewed exactly as they will publish.",
        href: "https://feedfa.st/tools/changelog-designer",
      },
    ],
    faqs: [
      {
        q: "Do users need an account to post or vote?",
        a: "No. Anyone can post an idea and vote without creating an account. If you prefer, you can pass a signed identity from your own app so posts are tied to verified users.",
      },
      {
        q: "How does FeedFast avoid false uptime alerts?",
        a: "An incident is opened only after two consecutive failed checks, so one slow response or a single network blip does not trigger an alert. Scheduled maintenance windows suppress incidents altogether.",
      },
      {
        q: "Can an AI agent manage my changelog and feedback?",
        a: "Yes. FeedFast exposes an MCP server, hosted or as an npm package, with tools to list feedback, resolve requests, publish changelog entries, read uptime and schedule maintenance. It cannot access your code or your deploys.",
      },
      {
        q: "Does the widget set cookies or slow down my site?",
        a: "The widget sets no cookies, renders inside a shadow DOM so it cannot clash with your styles, and weighs about 12 KB gzipped.",
      },
      {
        q: "Is there an RSS feed?",
        a: "Yes. Every project has an RSS feed for its changelog, with the full entry in each item, and a separate feed for status updates.",
      },
    ],
    imageAlt:
      "FeedFast: tell users what you shipped and what broke. A changelog entry, a planned feedback request with 128 votes, and a status bar at 99.94% uptime.",
    screenshots: [
      {
        alt: "FeedFast public feedback board with ideas sorted by votes and filters for status and type",
        caption: "Public feedback board",
      },
      {
        alt: "FeedFast public changelog listing release notes with dates and tags",
        caption: "Public changelog",
      },
      {
        alt: "FeedFast public status page showing all systems operational and an upcoming maintenance window",
        caption: "Status page",
      },
      {
        alt: "FeedFast widget playground for previewing the feedback and changelog widgets in different skins",
        caption: "Widget playground",
      },
      {
        alt: "FeedFast MCP server page showing an AI coding tool posting a changelog entry and closing a feedback request",
        caption: "MCP server for AI tools",
      },
      {
        alt: "FeedFast uptime monitoring with a 90-day uptime bar for a monitored site",
        caption: "Uptime monitoring",
      },
    ],
  },

  bookify: {
    name: "Bookify",
    category: "Online appointment booking software",
    tagline:
      "Online booking for service businesses: a booking link, one team calendar and SMS reminders.",
    title: "Bookify — Online Appointment Booking for Service Businesses",
    description:
      "Let clients book themselves around the clock. A branded booking page, one team calendar, SMS reminders, Google and Apple calendar sync, and optional card payments.",
    keywords: [
      "online appointment booking",
      "appointment scheduling software",
      "salon booking system",
      "barbershop booking app",
      "clinic appointment software",
      "SMS appointment reminders",
    ],
    h1: "Bookify: online appointment booking for service businesses",
    lead: "Bookify lets clients book themselves around the clock through one link, while your team works from a single calendar. SMS reminders, two-way calendar sync and optional card payments are built in.",
    facts: [
      { label: "Type", value: "Web application" },
      { label: "For", value: "Salons, clinics, trainers, studios" },
      { label: "Team size", value: "Solo to teams of ten" },
      { label: "Syncs with", value: "Google Calendar, Apple / CalDAV" },
    ],
    overview: [
      "Bookify is a booking system for businesses that sell time: a public booking page for customers and one calendar for the team. Customers open your link, pick a service and a time, and confirm. There is no app to install and no account to create.",
      "Behind the page, Bookify shows only the slots that are genuinely free. It respects working hours, buffers between appointments and time off, and it blocks time when you are busy in another calendar. The result is a schedule you can trust, with no double bookings to untangle.",
    ],
    features: [
      {
        title: "One booking link",
        body: "A single link for your bio, website or messages. Customers choose a service and a time and confirm, with nothing to install and no account required.",
      },
      {
        title: "A booking page that looks like you",
        body: "Brand it with your logo, colours and photos. Each location shows a map pin, directions and contact details, and the page is built to be found in local search.",
      },
      {
        title: "One calendar for the whole team",
        body: "Day, week and month views across staff and locations, with working hours shaded. Drag an appointment to move or resize it; conflicts are checked and the customer gets a text.",
      },
      {
        title: "Zero double bookings",
        body: "Working hours, buffers and time off are always respected, so a slot offered to a customer is a slot that is really available.",
      },
      {
        title: "Two-way calendar sync",
        body: "Sync with Google Calendar and Apple / CalDAV in both directions. Busy events elsewhere block your availability automatically.",
      },
      {
        title: "SMS reminders",
        body: "A confirmation when the booking is made, then reminders 24 hours and 2 hours before. Each type can be switched off.",
      },
      {
        title: "Pay to book",
        body: "Take card payment during booking through Stripe. The slot is held while the customer pays and released automatically if the payment does not complete.",
      },
      {
        title: "Team roles",
        body: "Invite staff by email and give each person the right access: owner, admin, manager or staff.",
      },
    ],
    audience: [
      "Hair salons, barbershops, nail studios, beauty and spa",
      "Clinics, dentists, physiotherapy and massage",
      "Personal trainers, yoga and pilates studios, tutors and coaches",
      "Photographers and auto detailing",
      "One-person studios and teams of up to ten",
    ],
    steps: [
      {
        title: "Claim your link",
        body: "Pick a name for your booking page and create an account.",
      },
      {
        title: "Add your services",
        body: "Give each service a name and a duration. Working hours start from a sensible default and can be changed per person.",
      },
      {
        title: "Share it and get booked",
        body: "Put the link in your bio or on your website. New bookings land on your calendar as they are made.",
      },
    ],
    faqs: [
      {
        q: "Do customers need to install anything?",
        a: "No. They open your link, pick a service and a time, and confirm. No app and no account.",
      },
      {
        q: "Does Bookify work with my existing calendar?",
        a: "Yes. It syncs two ways with Google Calendar and Apple / CalDAV, so bookings appear in your calendar and events you already have block those times for customers.",
      },
      {
        q: "How do the SMS reminders work?",
        a: "The customer gets a confirmation text when they book, then a reminder 24 hours before and another 2 hours before the appointment. You can turn each of these off.",
      },
      {
        q: "Can customers pay when they book?",
        a: "Yes. Pay-to-book takes a card payment through Stripe during booking. The slot is held while they pay and freed automatically if the payment is not completed.",
      },
      {
        q: "Can my whole team use it?",
        a: "Yes. Invite staff by email and assign each person a role: owner, admin, manager or staff. Everyone works from the same calendar.",
      },
      {
        q: "What happens to my data if I stop using Bookify?",
        a: "Nothing is deleted when you stop; your data stays in your account. You can request a copy or full deletion from inside the account, handled under GDPR.",
      },
    ],
    imageAlt:
      "The Bookify appointment calendar, showing a week of bookings for a service business.",
    screenshots: [
      {
        alt: "Bookify booking page for a salon with cover photo, address, gallery and a list of services",
        caption: "Booking page",
      },
      {
        alt: "Bookify booking confirmation with the SMS sent to the client and the notification sent to the business",
        caption: "Booking confirmed",
      },
      {
        alt: "Bookify team calendar showing a week of appointments across staff members",
        caption: "Team calendar",
      },
    ],
  },

  webscore: {
    name: "WebScore",
    category: "Website audit tool",
    tagline:
      "Website audits for speed, SEO, accessibility, security and AI visibility, with fixes ranked by impact.",
    title: "WebScore — Website Audit: Speed, SEO, Security & AI Visibility",
    description:
      "Paste a URL and get six audits in about a minute: performance, SEO, accessibility, security, AI visibility and best practices. Every issue ranked, with the fix beside it.",
    keywords: [
      "website audit tool",
      "SEO audit",
      "Core Web Vitals checker",
      "accessibility audit",
      "website security check",
      "AI visibility audit",
      "llms.txt checker",
    ],
    h1: "WebScore: a website audit that tells you what to fix first",
    lead: "Paste a URL and WebScore runs six audits in about a minute: speed, SEO, accessibility, security, AI visibility and best practices. Every issue is ranked by what it costs you, with the fix right next to it.",
    facts: [
      { label: "Type", value: "Web application" },
      { label: "Audits per scan", value: "6" },
      { label: "Scan time", value: "About a minute" },
      { label: "Setup", value: "Nothing to install" },
    ],
    overview: [
      "WebScore is a website auditing tool. Instead of running one tool for speed, another for SEO and a third for security, you paste a URL and get one report covering all of them, with a score for each area.",
      "What makes the report useful is the order. Each issue shows how many points it is costing you and how much effort it takes to fix, so you start at the top and work down. Every issue comes with step-by-step instructions, and a brief you can copy straight to a developer or an AI coding agent.",
    ],
    features: [
      {
        title: "Performance",
        body: "Finds the images, scripts and layout shifts that slow down your key pages, and reports Core Web Vitals such as load time, layout shift and blocking time.",
      },
      {
        title: "SEO",
        body: "Shows what stops search engines from understanding, indexing and displaying each page, from a missing meta description to structural problems.",
      },
      {
        title: "Accessibility",
        body: "Surfaces barriers for keyboard, screen-reader and low-vision visitors, such as links with no accessible name.",
      },
      {
        title: "Security",
        body: "Checks HTTPS, security headers, cookies and email authentication, including whether your domain has a DMARC policy.",
      },
      {
        title: "AI visibility",
        body: "Tests whether AI crawlers can reach, understand and quote your pages, including whether the site publishes an llms.txt file.",
      },
      {
        title: "Best practices",
        body: "Flags browser errors, outdated patterns and fragile code before they turn into visible problems.",
      },
    ],
    audience: [
      "Site owners who want to know which fix matters most",
      "Developers who want a clear brief instead of a raw list of warnings",
      "Small teams without a dedicated SEO or performance specialist",
      "Anyone using an AI coding agent to maintain a website",
    ],
    steps: [
      {
        title: "Scan",
        body: "Paste a URL. All six audits run in about a minute, with nothing to install.",
      },
      {
        title: "Fix",
        body: "Start at the top of the ranked list. Follow the steps yourself, or copy the brief for your developer or AI agent.",
      },
      {
        title: "Verify",
        body: "Scan the page again to confirm the issue is gone and the score has moved.",
      },
    ],
    lists: [
      {
        title: "Beyond a single scan",
        items: [
          "Monitoring: scheduled daily or weekly scans for up to 10 websites, with email alerts when a score drops or a new issue appears",
          "Scan history, so you can see how each score has changed over time",
          "PDF export of the full report, with every issue ranked by impact",
          "Google Search Console integration",
          "MCP server, so an AI agent can scan sites, read fixes and toggle monitoring",
          "AI conversion audit: annotated desktop and mobile screenshots reviewed for clarity, trust, calls to action and friction",
          "Domain metrics: backlinks, referring domains and authority",
        ],
      },
    ],
    freeTools: [
      {
        name: "Metadata generator",
        body: "Title, description, Open Graph and Twitter tags, ready to paste.",
        href: "https://webscore.now/tools/metadata",
      },
      {
        name: "Schema markup generator",
        body: "JSON-LD for organisations, local businesses, articles, products and FAQs.",
        href: "https://webscore.now/tools/schema-generator",
      },
      {
        name: "robots.txt checker and generator",
        body: "Finds syntax errors and blocked search or AI crawlers, or writes a new file.",
        href: "https://webscore.now/tools/robots-txt",
      },
      {
        name: "llms.txt checker",
        body: "Tests a site's llms.txt against the llmstxt.org format, including broken links.",
        href: "https://webscore.now/tools/llms-txt-checker",
      },
      {
        name: "Favicon checker",
        body: "Every size, the apple-touch-icon, the web manifest and how the icon shows in Google.",
        href: "https://webscore.now/tools/favicon-checker",
      },
      {
        name: "Internal link checker",
        body: "Broken links, redirect chains, nofollow links and empty anchor text on a page.",
        href: "https://webscore.now/tools/internal-links",
      },
      {
        name: "Readability checker",
        body: "Flesch, Flesch-Kincaid, Gunning Fog, SMOG and more for any page.",
        href: "https://webscore.now/tools/readability",
      },
      {
        name: "SSL certificate checker",
        body: "Expiry date, certificate chain and protocol versions, with a security grade.",
        href: "https://webscore.now/tools/ssl",
      },
      {
        name: "Email security checker",
        body: "SPF, DKIM and DMARC records, to prevent spoofing and help deliverability.",
        href: "https://webscore.now/tools/email-security",
      },
      {
        name: "Email DNS generator",
        body: "Builds SPF, DKIM and DMARC records for your email providers.",
        href: "https://webscore.now/tools/email-dns-generator",
      },
      {
        name: "Favicon generator",
        body: "favicon.ico, PNGs from 16 to 512 px, apple-touch-icon and manifest from one image.",
        href: "https://webscore.now/tools/favicon",
      },
      {
        name: "Open Graph image generator",
        body: "Designs the image shown when your page is shared on social media.",
        href: "https://webscore.now/tools/og-image",
      },
      {
        name: "Image to WebP and AVIF converter",
        body: "Converts JPEG, PNG and GIF in the browser; images never leave your device.",
        href: "https://webscore.now/tools/image-converter",
      },
      {
        name: "Image compressor",
        body: "Shrinks JPEG, PNG, WebP and AVIF files without changing the format, in the browser.",
        href: "https://webscore.now/tools/image-compressor",
      },
      {
        name: "UTM campaign builder",
        body: "Trackable campaign links for Google Analytics and any other tracker.",
        href: "https://webscore.now/tools/utm-builder",
      },
      {
        name: "QR code generator",
        body: "A QR code for any link or text, as a high-resolution PNG or SVG.",
        href: "https://webscore.now/tools/qr-code",
      },
    ],
    faqs: [
      {
        q: "What is a website audit?",
        a: "A website audit is a systematic check of the signals that decide whether a site can be found, loads quickly, works reliably, is trusted and converts visitors. WebScore runs that check automatically and turns the result into a ranked list of fixes.",
      },
      {
        q: "Can one scan cover Core Web Vitals, SEO, accessibility and security?",
        a: "Yes. A single scan covers all of them on the same page, along with AI visibility and best practices, each with its own score.",
      },
      {
        q: "How is WebScore different from Lighthouse?",
        a: "WebScore combines Lighthouse-style signals with deeper SEO, security, email authentication, AI visibility and domain metrics, and then prioritises the fixes instead of leaving you with a flat list.",
      },
      {
        q: "What does WebScore not do?",
        a: "It does not do keyword research or rank tracking, and it has no backlink index of its own. Dedicated SEO suites are a better fit for those jobs.",
      },
      {
        q: "Can an AI agent use WebScore?",
        a: "Yes. WebScore hosts an MCP server that works with Claude Code, Claude Desktop, Cursor, Codex and any other MCP client. Through it an agent can scan sites, read the fixes, pull domain metrics and switch monitoring on or off.",
      },
    ],
    imageAlt:
      "WebScore dashboard showing an overall website health score of 92, with separate performance, SEO, accessibility and security scores and a score-evolution chart.",
    screenshots: [
      {
        alt: "WebScore overview with an overall score of 96 and separate scores for performance, SEO, accessibility, security and AI visibility",
        caption: "Overview",
      },
      {
        alt: "WebScore Fix this first list with the highest-impact issue and how to fix it",
        caption: "Fix this first",
      },
      {
        alt: "WebScore performance report with Core Web Vitals",
        caption: "Performance",
      },
      {
        alt: "WebScore SEO report with technical checks, headings and links",
        caption: "SEO",
      },
      {
        alt: "WebScore AI visibility report showing AI crawler access and answerability",
        caption: "AI visibility",
      },
      {
        alt: "WebScore security report with security headers, HTTPS and email security checks",
        caption: "Security",
      },
    ],
  },

  gdprfix: {
    name: "GDPR Fix",
    category: "Cookie compliance scanner",
    tagline:
      "A cookie compliance scanner that checks your site against GDPR and ePrivacy and tells you how to fix every issue.",
    title: "GDPR Fix — Website Cookie Checker for GDPR & ePrivacy",
    description:
      "Scan a website for cookie consent violations: cookies set before consent, dark-pattern banners and policy gaps. A 0–100 score, with a fix for every issue.",
    keywords: [
      "cookie checker",
      "GDPR cookie scanner",
      "cookie consent checker",
      "ePrivacy compliance",
      "cookie banner audit",
      "cookie policy generator",
      "GDPR compliance tool",
    ],
    h1: "GDPR Fix: find your cookie violations before a regulator does",
    lead: "GDPR Fix scans your website the way a regulator would: it loads every page in a real browser before consent, after accepting and after rejecting, and reports every cookie, tracker and banner problem against the GDPR and the ePrivacy Directive, with the fix for each.",
    facts: [
      { label: "Type", value: "Web application" },
      { label: "Checks against", value: "GDPR and the ePrivacy Directive" },
      { label: "Result", value: "A score from 0 to 100" },
      { label: "Setup", value: "No tag, no install" },
    ],
    overview: [
      "GDPR Fix is a cookie compliance scanner for websites. You paste a URL and it checks the cookies, trackers, consent banner and cookie policy, then gives the site a compliance score from 0 to 100: Critical below 50, Needs work from 50 to 69, and Good from 70.",
      "Every finding is tied to the rule it breaks, such as ePrivacy Article 5(3) or GDPR Articles 13 and 28, and comes with the fix. You can work through the list yourself, copy a ready-made prompt for an AI assistant, or connect an AI coding tool to GDPR Fix over MCP and let it fix and re-scan.",
    ],
    features: [
      {
        title: "Cookie detection",
        body: "Finds every first-party and third-party cookie your site sets, and shows which ones fire before the visitor has given consent.",
      },
      {
        title: "Consent banner audit",
        body: "Checks that a banner is present, that it blocks cookies until consent, that a reject option is on the first layer, and that rejecting is as easy as accepting.",
      },
      {
        title: "Cookie policy checklist",
        body: "Reviews your cookie policy against seven points, including whether it lists every cookie, states retention periods, discloses third-party services and explains visitors' rights.",
      },
      {
        title: "Third-party scripts",
        body: "Lists every tracker, pixel and embed on the page that receives your visitors' data.",
      },
      {
        title: "Findings mapped to the law",
        body: "Each issue is linked to the article or guideline it relates to, such as ePrivacy Art. 5(3), GDPR Art. 13, GDPR Art. 28 or EDPB Guidelines 03/2022.",
      },
      {
        title: "A fix for every issue",
        body: "Each finding comes with instructions to fix it, and a “Copy to LLM” button that copies the issue and the fix as a prompt for an AI assistant.",
      },
      {
        title: "AI-generated cookie policy",
        body: "Generates a cookie policy based on the cookies actually found on your site, ready to copy and paste.",
      },
      {
        title: "MCP server for AI tools",
        body: "Connect Claude Code, Cursor, VS Code or Claude Desktop to start scans, read reports and check scan status. The assistant asks before starting a scan and only sees your own scans.",
      },
    ],
    audience: [
      "Website owners whose site is reachable from the EU",
      "Online shops on WordPress, WooCommerce, Shopify, Wix or Webflow",
      "SaaS products and Next.js applications",
      "Marketing agencies checking client sites",
      "Healthcare, finance and education websites",
      "Bloggers and publishers running analytics or ads",
    ],
    steps: [
      {
        title: "Paste your URL",
        body: "Enter the site address and sign in for free with Google or an email link. There is no tag to add and nothing to install.",
      },
      {
        title: "Scan in a real browser",
        body: "A headless browser loads your site three times: before consent, after accepting and after rejecting, and records what happens each time.",
      },
      {
        title: "Fix and re-scan",
        body: "Work through the ranked issues yourself, or connect an AI tool over MCP to fix them, then scan again to confirm.",
      },
    ],
    freeTools: [
      {
        name: "Google Consent Mode v2 generator",
        body: "Pick your banner's categories and regions and get the gtag code.",
        href: "https://gdprfix.eu/tools/consent-mode",
      },
      {
        name: "Tracking script blocker",
        body: "Rewrites your tracking tags so they wait for consent.",
        href: "https://gdprfix.eu/tools/script-blocker",
      },
      {
        name: "Cookie banner designer",
        body: "Six compliant banner designs with a live preview; pick a colour and copy the code.",
        href: "https://gdprfix.eu/tools/banner-designer",
      },
    ],
    faqs: [
      {
        q: "Does my website need to comply with the GDPR?",
        a: "If your site can be reached from the EU or processes the personal data of EU residents, yes. Cookie consent in particular is governed by the ePrivacy Directive, which works alongside the GDPR.",
      },
      {
        q: "What is the difference between the GDPR and ePrivacy?",
        a: "The ePrivacy Directive sets the rules for cookie consent: what may be stored on a visitor's device and when. The GDPR is the wider framework for how personal data is processed. GDPR Fix checks against both.",
      },
      {
        q: "How accurate is the scan?",
        a: "GDPR Fix uses a real headless browser, captures cookies at each stage (before consent, after accepting and after rejecting), and maps every finding to the relevant article.",
      },
      {
        q: "Do I need an account?",
        a: "Yes, a free sign-in with Google or an email link, so your scan results can be saved.",
      },
      {
        q: "How often should I scan my site?",
        a: "After every significant change to the site, such as a new plugin, script or marketing tool, and at least once a quarter.",
      },
      {
        q: "Can an AI tool fix the issues for me?",
        a: "Yes. GDPR Fix has an MCP server that works with Claude Code, Cursor, VS Code and Claude Desktop. The AI tool can read the report, apply fixes and start a new scan to check them.",
      },
      {
        q: "What does “Copy to LLM” do?",
        a: "It copies a prompt containing the issue and the instructions to fix it, so you can paste it into any AI assistant.",
      },
    ],
    imageAlt:
      "GDPR Fix: find your cookie violations before a regulator does. A compliance score gauge showing 82 out of 100, rated Good.",
    screenshots: [
      {
        alt: "GDPR Fix report overview with a compliance score, a summary and counts of cookies set before consent",
        caption: "Report overview",
      },
      {
        alt: "GDPR Fix fix plan listing issues in order of priority, each with the steps to fix it",
        caption: "Issues and fix plan",
      },
      {
        alt: "GDPR Fix cookie report comparing cookies before consent, after accepting and after rejecting",
        caption: "Cookies by consent stage",
      },
      {
        alt: "GDPR Fix cookie policy checklist with passed and failed checks and a generated cookie policy",
        caption: "Cookie policy check",
      },
      {
        alt: "GDPR Fix dialog for connecting Claude Code, Cursor or VS Code over MCP",
        caption: "Connect your AI tool",
      },
      {
        alt: "GDPR Fix Google Consent Mode v2 generator with the code ready to paste",
        caption: "Consent Mode v2 generator",
      },
    ],
  },

  memo: {
    name: "Memo",
    category: "QR code photo sharing for events",
    tagline:
      "Collect every guest's photos at an event with one QR code. No app, no sign-up.",
    title: "Memo — Collect Event & Wedding Photos with One QR Code",
    description:
      "Guests scan one QR code and upload their photos from the phone camera. No app, no sign-up. Live photo wall, full-quality downloads and print-ready QR cards.",
    keywords: [
      "wedding photo sharing QR code",
      "event photo collection",
      "QR code photo album",
      "guest photo upload",
      "live photo wall",
      "wedding guest photos app",
    ],
    h1: "Memo: collect every event photo with one QR code",
    lead: "Memo gathers the photos your guests take. They scan one QR code with their phone camera and upload, with no app and no sign-up. You get every photo in one album, in full quality.",
    facts: [
      { label: "Type", value: "Web application" },
      { label: "For", value: "Weddings, parties, corporate events" },
      { label: "Guests need", value: "Only a phone camera" },
      { label: "Languages", value: "6, including English and Romanian" },
    ],
    overview: [
      "The best photos of an event are usually on the guests' phones, and most of them never reach the hosts. Memo fixes that with a single QR code. You create an album, print the code on a card for the tables, and guests upload their photos by scanning it.",
      "Photos arrive as they are taken, so you can show them on a screen at the venue as a live photo wall. Afterwards, everything is kept at original quality and can be downloaded at any time as a ZIP archive. Albums are unlisted, and you can review uploads before anyone else sees them.",
    ],
    features: [
      {
        title: "One QR code for all guests",
        body: "Guests scan it with their phone camera, tap the link and upload. No app to download and no account to create.",
      },
      {
        title: "QR designer and print templates",
        body: "Pick a style or design your own card, then download a print-ready PDF in A3, A4, A5 or A6.",
      },
      {
        title: "Live photo wall",
        body: "Photos appear on a screen at the venue as guests upload them, turning the album into part of the event.",
      },
      {
        title: "Sections for each part of the day",
        body: "Guests choose where their photos belong, for example ceremony, reception or after-party, so the album arrives already organised.",
      },
      {
        title: "Private, with moderation",
        body: "Albums are unlisted. Moderators can review uploads before they become visible to other guests.",
      },
      {
        title: "Full original quality",
        body: "Photos are kept at full resolution, with GPS and camera metadata stripped. Download everything at any time as a ZIP.",
      },
      {
        title: "Photos, video and an audio guestbook",
        body: "Guests can upload video as well as photos, and leave voice messages in an audio guestbook.",
      },
    ],
    audience: [
      "Couples planning a wedding",
      "Families hosting birthdays, baptisms and anniversaries",
      "Companies running corporate events and team gatherings",
      "Schools and families organising graduations",
      "Event planners and photographers who want the guests' photos too",
    ],
    steps: [
      {
        title: "Create your album",
        body: "Add the event name, date and venue. It takes about a minute.",
      },
      {
        title: "Print the QR card",
        body: "Choose a template and download a print-ready PDF for the tables, the entrance or the invitations.",
      },
      {
        title: "Watch the photos arrive",
        body: "Guests scan and upload. You see every photo in real time and can show them on the photo wall.",
      },
    ],
    freeTools: [
      {
        name: "Photo scavenger hunt",
        body: "A printable card with photo prompts and your album's QR code.",
        href: "https://me-mo.ro/en/tools/wedding-photo-scavenger-hunt",
      },
      {
        name: "Photo shot list",
        body: "The must-have photos of the day, to edit, print and give your photographer.",
        href: "https://me-mo.ro/en/tools/wedding-shot-list",
      },
      {
        name: "Event timeline builder",
        body: "Printable schedules for weddings, baptisms and anniversaries.",
        href: "https://me-mo.ro/en/tools/wedding-timeline",
      },
    ],
    faqs: [
      {
        q: "Do my guests need an app?",
        a: "No. They scan the QR code with their phone camera, tap the link and upload. Nothing to install and no account to create.",
      },
      {
        q: "Is the album private?",
        a: "Yes. Albums are unlisted, so only people with the QR code or link can reach them, and moderators can review uploads before they go public.",
      },
      {
        q: "Can I download all the photos?",
        a: "Yes. Photos are stored at full original resolution and you can download the whole album at any time as a ZIP archive.",
      },
      {
        q: "Does Memo support video?",
        a: "Yes. Guests can upload videos as well as photos.",
      },
      {
        q: "What kind of events is Memo for?",
        a: "Weddings, birthdays, baptisms, anniversaries, graduations and corporate events: any occasion where many people take photos and you want them in one place.",
      },
      {
        q: "Which languages does Memo support?",
        a: "Memo is available in English, Romanian, French, German, Italian and Spanish.",
      },
    ],
    imageAlt:
      "Memo: digital photo albums for events, where guests contribute photos in real time by scanning a QR code.",
    screenshots: [
      {
        alt: "Memo guest page for a wedding album with buttons to take a photo, record a video or upload from the gallery",
        caption: "Guest upload page",
      },
      {
        alt: "Memo album view with all guest uploads, filtered by section",
        caption: "All uploads",
      },
      {
        alt: "Memo QR designer with templates for the album's QR code",
        caption: "QR designer",
      },
      {
        alt: "Memo print editor for a table card with the album's QR code",
        caption: "Print editor",
      },
      {
        alt: "Memo guest gallery on a phone showing photos shared by guests",
        caption: "Guest gallery",
      },
      {
        alt: "Memo full-screen slideshow of guest photos",
        caption: "Live slideshow",
      },
    ],
  },
};
