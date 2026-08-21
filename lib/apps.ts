export type AppScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type AppFeature = {
  title: string;
  description: string;
};

export type AppCapability = {
  label: string;
  detail: string;
};

export type ToolAccess = "free" | "pro";

export type AppTool = {
  name: string;
  access: ToolAccess;
  description: string;
};

export type AppToolCategory = {
  name: string;
  summary: string;
  tools: AppTool[];
};

/** Per-app accent color. `base` maps to `--app-accent`, `hover` to
 *  `--app-accent-hover`; the layout wrapper sets both as CSS variables and the
 *  `app` / `app-hover` Tailwind colors (see globals.css) resolve to them. */
export type AppAccent = {
  base: string;
  hover: string;
};

export type AppHeading = {
  eyebrow: string;
  title: string;
  body?: string;
};

export type AppPlan = {
  name: string;
  price: string;
  priceNote: string;
  items: string[];
  highlight?: boolean;
};

export type AppStep = {
  title: string;
  body: string;
};

export type AppFaq = {
  q: string;
  a: string;
};

/** A single section of a legal document. `body`/`outro` strings and `bullets`
 *  support inline **bold** and [links](https://…) via the renderRich helper. */
export type LegalSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
  outro?: string[];
};

export type LegalDoc = {
  intro?: string[];
  sections: LegalSection[];
  contactName: string;
  contactEmail: string;
};

export type AppProject = {
  slug: string;
  name: string;
  tagline: string;
  /** Optional shorter descriptor used on the home-page "Built by us" card;
   *  falls back to `tagline` when unset. */
  homeTagline?: string;
  description: string;
  longDescription: string;
  logo: string;
  /** App Store listing. `null` until the app is live — the download controls
   *  render a "Coming soon" state instead of linking somewhere that 404s. */
  appStoreUrl: string | null;
  appStoreId?: string;
  accent: AppAccent;
  screenshots: AppScreenshot[];
  capabilities: AppCapability[];
  features: AppFeature[];
  featuresHeading: AppHeading;
  /** FabricatorPro-style categorized tool list. */
  toolCategories?: AppToolCategory[];
  toolsHeading?: AppHeading;
  pricing?: {
    model: string;
    freeTierNote: string;
    proNote: string;
  };
  /** Free vs. Pro tier comparison. */
  plans?: {
    heading: AppHeading;
    tiers: AppPlan[];
  };
  devices?: {
    heading: AppHeading;
    intro: string;
    items: string[];
    requirement: string;
  };
  howItWorks?: {
    heading: AppHeading;
    steps: AppStep[];
  };
  voice?: {
    heading: AppHeading;
    body: string;
    examples: string[];
    note?: string;
  };
  pledge?: {
    heading: AppHeading;
    points: { label: string; detail: string }[];
  };
  faqs?: {
    heading: AppHeading;
    items: AppFaq[];
  };
  cta: {
    title: string;
    body: string;
  };
  legal: {
    privacy: LegalDoc;
    terms: LegalDoc;
  };
  supportEmail: string;
  companyName: string;
  effectiveDate: string;
  /** Small print rendered under the footer copyright (e.g. trademark notice). */
  footerNote?: string;
};

export const apps: AppProject[] = [
  {
    slug: "fabricator-pro",
    name: "FabricatorPro",
    tagline:
      "30 precision calculators for metal fabricators — miters, pipe saddles, hopper patterns, and shop references.",
    description:
      "Cut, weld, and build with confidence. FabricatorPro brings pipe saddles, cone and pyramid developments, gear train math, cutting optimization, and every reference chart you use daily into one offline iOS app.",
    longDescription:
      "FabricatorPro is the shop toolbox you can pull out with one hand. 30 purpose-built calculators across angles, pipe cuts, hopper patterns, gate geometry, workshop math, and reference charts — each one with clean 2D diagrams, optional 3D previews, and 1:1 PDF templates you can print or trace directly onto stock. Works fully offline, supports metric and imperial throughout, and stays out of your way while you work.",
    logo: "/app/fabricator-pro/fabricator-pro-logo.png",
    appStoreUrl: "https://apps.apple.com/us/app/fabricatorpro/id6762883398",
    appStoreId: "6762883398",
    accent: { base: "#f97316", hover: "#fb923c" },
    screenshots: [
      {
        src: "/app/fabricator-pro/categories.png",
        alt: "FabricatorPro home screen with all tool categories",
        caption: "Every tool, one tap away",
      },
      {
        src: "/app/fabricator-pro/round_on_round.png",
        alt: "FabricatorPro round-on-round saddle joint calculator",
        caption: "Round on Round",
      },
      {
        src: "/app/fabricator-pro/truncated_cone.png",
        alt: "FabricatorPro truncated cone flat pattern calculator",
        caption: "Truncated Cone",
      },
      {
        src: "/app/fabricator-pro/cutting_optimizer.png",
        alt: "FabricatorPro cutting optimizer with waste minimization",
        caption: "Cutting Optimizer",
      },
      {
        src: "/app/fabricator-pro/drill_tap_chart.png",
        alt: "FabricatorPro drill and tap reference chart",
        caption: "Drill & Tap Chart",
      },
      {
        src: "/app/fabricator-pro/truncated_pyramid.png",
        alt: "FabricatorPro truncated pyramid flat pattern calculator",
        caption: "Truncated Pyramid",
      },
      {
        src: "/app/fabricator-pro/auger_screw.png",
        alt: "FabricatorPro auger screw flight flat pattern",
        caption: "Auger Screw",
      },
      {
        src: "/app/fabricator-pro/bar_spacing.png",
        alt: "FabricatorPro bar spacing calculator for gates and fences",
        caption: "Bar Spacing",
      },
      {
        src: "/app/fabricator-pro/gate_counterweight.png",
        alt: "FabricatorPro gate counterweight balance calculator",
        caption: "Gate Counterweight",
      },
      {
        src: "/app/fabricator-pro/gear_train_rpm.png",
        alt: "FabricatorPro gear train RPM calculator",
        caption: "Gear Train RPM",
      },
      {
        src: "/app/fabricator-pro/weight_calculator.png",
        alt: "FabricatorPro material weight calculator",
        caption: "Weight Calculator",
      },
      {
        src: "/app/fabricator-pro/stair_calculator.png",
        alt: "FabricatorPro stair calculator",
        caption: "Stair Calculator",
      },
      {
        src: "/app/fabricator-pro/unit_converter.png",
        alt: "FabricatorPro unit converter",
        caption: "Unit Converter",
      },
      {
        src: "/app/fabricator-pro/history.png",
        alt: "FabricatorPro history of saved calculations",
        caption: "Saved History",
      },
    ],
    capabilities: [
      { label: "30 tools", detail: "across 7 categories" },
      { label: "1:1 PDF", detail: "printable templates" },
      { label: "DXF export", detail: "for CAD & CNC" },
      { label: "Works offline", detail: "no signal needed" },
      { label: "Metric & imperial", detail: "live unit switching" },
      { label: "2D & 3D previews", detail: "on every fit-sensitive tool" },
    ],
    featuresHeading: {
      eyebrow: "Features",
      title: "Every calculation, one tap away",
      body: "FabricatorPro is the shop toolbox you can pull out with one hand. 30 purpose-built calculators across angles, pipe cuts, hopper patterns, gate geometry, workshop math, and reference charts — each one with clean 2D diagrams, optional 3D previews, and 1:1 PDF templates you can print or trace directly onto stock. Works fully offline, supports metric and imperial throughout, and stays out of your way while you work.",
    },
    features: [
      {
        title: "Angles, Miters & Joints",
        description:
          "Simple miters, compound miters, profile join angles, and a full Pythagoras / 3-4-5 solver — plus a squareness table so frames go together right the first time.",
      },
      {
        title: "Pipe Saddles & Fish Mouths",
        description:
          "Round-on-round and round-on-flat templates, square-on-round, and Y-pipe connectors. 2D developed patterns with 3D preview, ready to print 1:1 and wrap around the pipe.",
      },
      {
        title: "Hoppers, Cones & Transitions",
        description:
          "Develop truncated cones and pyramids, round-to-square and rectangle-to-round transitions, plus auger flight flat patterns — no more trial-and-error on sheet stock.",
      },
      {
        title: "Gates & Fence Geometry",
        description:
          "Evenly space vertical bars with child-safety presets, plan sliding gates on sloped terrain, and balance swing gates with precise counterweight torque math.",
      },
      {
        title: "Workshop Power Tools",
        description:
          "Cutting Optimizer uses first-fit-decreasing bin-packing to minimize bar waste. Gear Train RPM solves multi-stage ratios. Hydraulic Cylinder sizes bore, force, and pressure.",
      },
      {
        title: "Drill, Tap & Torque Charts",
        description:
          "Offline-ready thread references — metric M2-M30 and UNC/UNF — with tap drills, clearance holes, bolt torques by strength class, and a live unit converter.",
      },
    ],
    toolsHeading: {
      eyebrow: "Complete toolbox",
      title: "30 tools across 7 categories",
      body: "Every calculator is built around real fabrication workflows. Free tools are free forever — Pro unlocks everything.",
    },
    toolCategories: [
      {
        name: "Angles & Cuts",
        summary: "Frame joints, compound cuts, and squareness checks.",
        tools: [
          {
            name: "Miter Calculator",
            access: "free",
            description:
              "Cut angle and cut length from joint angle and profile width.",
          },
          {
            name: "Compound Miter",
            access: "free",
            description:
              "Two-plane miter + bevel for crown molding, sloped frames, and roof work.",
          },
          {
            name: "Profile Join Angle",
            access: "pro",
            description:
              "Joins two profiles at arbitrary directions with gap/overlap analysis.",
          },
          {
            name: "Bisector",
            access: "free",
            description: "Angle bisector with profile offset calculation.",
          },
          {
            name: "Pythagoras / 3-4-5",
            access: "free",
            description:
              "Right-triangle solver, diagonal squareness check, and law-of-cosines.",
          },
        ],
      },
      {
        name: "Pipe Cuts",
        summary: "Saddle joints, fish mouths, and tube intersections.",
        tools: [
          {
            name: "Round on Round",
            access: "free",
            description:
              "Saddle / fish-mouth template with 2D pattern and 3D preview.",
          },
          {
            name: "Round on Flat",
            access: "free",
            description:
              "Pipe-on-plate elliptical cut as a developed sine-wave pattern.",
          },
          {
            name: "Square on Square",
            access: "pro",
            description:
              "Flat pattern for each face when square tubes intersect at any angle.",
          },
          {
            name: "Square on Round",
            access: "pro",
            description:
              "Square-tube-on-round-pipe intersection — each face solved independently.",
          },
          {
            name: "Y-Pipe Connector",
            access: "pro",
            description:
              "Two branches merging into one outlet. 2D schematic and 3D preview.",
          },
        ],
      },
      {
        name: "Hoppers & Funnels",
        summary: "Sheet-metal flat patterns for cones, transitions, and augers.",
        tools: [
          {
            name: "Truncated Cone",
            access: "free",
            description:
              "Round funnel / reducer pattern — annular sector with full sheet layout.",
          },
          {
            name: "Truncated Pyramid",
            access: "pro",
            description: "Square-funnel panels with shared edges and fold lines.",
          },
          {
            name: "Round to Square",
            access: "pro",
            description:
              "Transition piece from round to square — 4 corner triangles + 4 curved panels.",
          },
          {
            name: "Rectangle to Round",
            access: "pro",
            description:
              "Asymmetric rectangle-to-round transition, multi-panel development.",
          },
          {
            name: "Auger Screw",
            access: "pro",
            description:
              "Helical flight pattern — developed radii, sector angle, and material needed.",
          },
        ],
      },
      {
        name: "Gates & Fences",
        summary: "Bar spacing, sloped rails, and counterweight balance.",
        tools: [
          {
            name: "Bar Spacing",
            access: "free",
            description:
              "Evenly distribute bars by count, max spacing, or target spacing.",
          },
          {
            name: "Sliding Gate Slope",
            access: "free",
            description:
              "Post heights, ground clearance, and real rail length on uneven ground.",
          },
          {
            name: "Gate Counterweight",
            access: "pro",
            description:
              "Swing and cantilever gate torque balance with hinge-load analysis.",
          },
        ],
      },
      {
        name: "Workshop",
        summary: "Cutting lists, drive trains, and hydraulic sizing.",
        tools: [
          {
            name: "Cutting Optimizer",
            access: "pro",
            description:
              "First-fit-decreasing bin packing with kerf, waste %, and visual layout.",
          },
          {
            name: "Gear Train RPM",
            access: "pro",
            description:
              "Multi-stage ratios — output RPM, torque, efficiency, and rotation.",
          },
          {
            name: "Hydraulic Cylinder",
            access: "free",
            description:
              "Force, bore, pressure, speed, stroke time, and oil volume — hydraulic or pneumatic.",
          },
        ],
      },
      {
        name: "Geometry & Tools",
        summary: "Polygons, arcs, weights, stairs, and thermal expansion.",
        tools: [
          {
            name: "Polygon Calculator",
            access: "free",
            description:
              "All dimensions, angles, area, and perimeter for any regular polygon.",
          },
          {
            name: "Circle Division",
            access: "free",
            description:
              "Divide a circle into N equal parts with a 1:1 wrap-around paper template.",
          },
          {
            name: "Arc Length",
            access: "free",
            description:
              "Arc, chord, sagitta, radius — solve the rest from any two inputs.",
          },
          {
            name: "Weight Calculator",
            access: "pro",
            description:
              "Steel, stainless, aluminum, and copper by sheet, pipe, angle, flat, or round.",
          },
          {
            name: "Stair Calculator",
            access: "pro",
            description:
              "Rise, run, stringer length, and angle with Blondel comfort check.",
          },
          {
            name: "Thermal Expansion",
            access: "pro",
            description:
              "Linear expansion for common metals given length and temperature change.",
          },
        ],
      },
      {
        name: "Utilities",
        summary: "Reference charts always in your pocket.",
        tools: [
          {
            name: "Unit Converter",
            access: "free",
            description:
              "Length (with fractional inch), area, weight, pressure, temperature, torque.",
          },
          {
            name: "Drill & Tap Chart",
            access: "free",
            description:
              "Searchable metric (M2-M30) and UNC/UNF with tap drill and clearance sizes.",
          },
          {
            name: "Bolt Torque Chart",
            access: "free",
            description:
              "Torque by bolt size and strength class, dry and lubricated, with clamp force.",
          },
        ],
      },
    ],
    pricing: {
      model: "Freemium",
      freeTierNote:
        "Sixteen core tools are free forever — including Miter, Round on Round, Truncated Cone, Bar Spacing, and the full Drill & Tap, Torque, and Unit Converter charts.",
      proNote:
        "Unlock every tool, unlimited saved calculations, DXF export, and full 2D + 3D previews with a monthly subscription or a one-time lifetime purchase.",
    },
    cta: {
      title: "Ready to ship cleaner cuts?",
      body: "Download FabricatorPro and keep precision math on the shop floor, in your pocket.",
    },
    legal: {
      privacy: {
        contactName: "Pantazi Eduard Marius Robert",
        contactEmail: "eduard.pantazi@gmail.com",
        sections: [
          {
            heading: "Overview",
            body: [
              'FabricatorPro ("the App") is developed by Pantazi Eduard Marius Robert. We are committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights.',
            ],
          },
          {
            heading: "Data We Collect",
            body: [
              "**We do not collect personal data.** The App operates entirely on your device. Specifically:",
            ],
            bullets: [
              "**Calculations & Saved History** — stored locally on your device using SwiftData. Never transmitted to any server.",
              "**Preferences & Settings** — stored locally on your device using UserDefaults.",
              "**Favourites** — stored locally on your device.",
              "**No Account Required** — the App does not require registration, login, or any personal information.",
            ],
          },
          {
            heading: "Subscriptions & Purchases",
            body: [
              "Subscriptions and in-app purchases are processed entirely by Apple through the App Store. We do not have access to your payment information, credit card details, or Apple ID.",
              "Purchase and subscription status is verified on-device through StoreKit. No data is sent to any external server.",
            ],
          },
          {
            heading: "Third-Party Services",
            body: ["The App uses only:"],
            bullets: [
              "**Apple App Store / StoreKit** — for processing in-app purchases. Apple's privacy policy applies to these transactions.",
            ],
            outro: [
              "The App contains no ads, no analytics, no tracking, and no third-party SDKs.",
            ],
          },
          {
            heading: "Data Sharing",
            body: [
              "We do not sell, trade, or share your data with third parties. When you export a PDF or DXF file, it is generated locally on your device and shared only through the iOS share sheet at your discretion.",
            ],
          },
          {
            heading: "Data Storage & Security",
            body: [
              "All app data is stored locally on your device and protected by iOS built-in security features including device encryption. We do not operate any servers that store your data.",
              "If you delete the App, all locally stored data (saved calculations, preferences, favourites) will be permanently removed.",
            ],
          },
          {
            heading: "Children's Privacy",
            body: [
              "The App does not knowingly collect any data from children. Since we do not collect personal data from any user, no special provisions for children are necessary.",
            ],
          },
          {
            heading: "Changes to This Policy",
            body: [
              'We may update this Privacy Policy from time to time. Changes will be reflected in the "Last updated" date above. Continued use of the App after changes constitutes acceptance of the updated policy.',
            ],
          },
        ],
      },
      terms: {
        contactName: "Pantazi Eduard Marius Robert",
        contactEmail: "eduard.pantazi@gmail.com",
        sections: [
          {
            heading: "Acceptance of Terms",
            body: [
              'By downloading, installing, or using FabricatorPro ("the App"), you agree to be bound by these Terms of Use. If you do not agree, do not use the App.',
            ],
          },
          {
            heading: "Description of Service",
            body: [
              "FabricatorPro is a professional fabrication calculator app that provides mathematical calculations, templates, and reference data for metalworking, woodworking, and general fabrication tasks. The App is provided as a tool to assist professionals and hobbyists.",
            ],
          },
          {
            heading: "Disclaimer of Accuracy",
            body: [
              "**Important:** While we strive for accuracy in all calculations, the App is provided as a reference tool only. You are responsible for verifying all calculations before use in any project.",
            ],
            bullets: [
              'All calculations, templates, and reference data are provided "as is" without warranty of any kind.',
              "The App should not be the sole basis for safety-critical decisions.",
              "Always verify measurements, angles, and cut dimensions before cutting or fabricating.",
              "The developer assumes no liability for errors, material waste, injury, or damage resulting from use of the App's calculations.",
            ],
          },
          {
            heading: "Subscriptions & Purchases",
            body: ["The App offers optional in-app purchases to unlock Pro features:"],
            bullets: [
              "**Monthly Subscription** — auto-renewing monthly subscription.",
              "**Lifetime Purchase** — one-time purchase for permanent access.",
              "Payment is charged to your Apple ID account at confirmation of purchase.",
              "Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.",
              "You can manage and cancel subscriptions in your Apple ID Account Settings.",
              "Refund requests must be directed to Apple through the App Store.",
            ],
          },
          {
            heading: "Intellectual Property",
            body: [
              "The App, including its design, code, graphics, and content, is the intellectual property of Pantazi Eduard Marius Robert. You may not copy, modify, distribute, or reverse-engineer any part of the App.",
            ],
          },
          {
            heading: "Acceptable Use",
            body: ["You agree not to:"],
            bullets: [
              "Use the App for any unlawful purpose.",
              "Attempt to reverse-engineer, decompile, or disassemble the App.",
              "Redistribute, sublicense, or resell the App or its content.",
              "Remove or alter any proprietary notices or labels on the App.",
            ],
          },
          {
            heading: "Limitation of Liability",
            body: ["To the maximum extent permitted by applicable law:"],
            bullets: [
              'The App is provided "as is" and "as available" without warranties of any kind, whether express or implied.',
              "Pantazi Eduard Marius Robert shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.",
              "Our total liability shall not exceed the amount you paid for the App in the 12 months preceding the claim.",
            ],
          },
          {
            heading: "Export & Generated Files",
            body: [
              "PDF templates, DXF files, and other exports generated by the App are for your personal or professional use. You retain ownership of any files you generate. However, the App's formatting, branding, and layout design remain our intellectual property.",
            ],
          },
          {
            heading: "Termination",
            body: [
              "We reserve the right to terminate or suspend access to the App at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or the App.",
            ],
          },
          {
            heading: "Changes to Terms",
            body: [
              'We may update these Terms of Use from time to time. Changes will be reflected in the "Last updated" date above. Continued use of the App after changes constitutes acceptance of the updated terms.',
            ],
          },
          {
            heading: "Governing Law",
            body: [
              "These Terms shall be governed by and construed in accordance with the laws of Romania, without regard to conflict of law provisions.",
            ],
          },
        ],
      },
    },
    supportEmail: "support@pantazisoft.com",
    companyName: "PantaziSoft",
    effectiveDate: "April 22, 2026",
  },
  {
    slug: "remoto",
    name: "Remoto",
    tagline: "Your TV remote, without the ads.",
    homeTagline:
      "No ads. Remote for Android TV, Chromecast, Google TV, Mi Box & Nvidia Shield.",
    description:
      "A fast, native iPhone remote for Android TV, Google TV, Mi Box, Chromecast, and Nvidia Shield. No sign-in. No tracking. Never an ad.",
    longDescription:
      "Remoto is a clean, native iOS remote that pairs with your Android TV or Google TV device in under 30 seconds and stays out of your way. It replaces the plastic remote you lost between the couch cushions — nothing more.",
    logo: "/app/remoto/remoto-icon.png",
    appStoreUrl: "https://apps.apple.com/us/app/remoto-tv-remote/id6792331266",
    appStoreId: "6792331266",
    accent: { base: "#6366f1", hover: "#818cf8" },
    /* Ordered as the journey runs — pair, navigate, jump to an app, search,
       then the two places Remoto shows up outside the app itself. The home-page
       card only slides through the first five, so the story has to land there. */
    screenshots: [
      {
        src: "/app/remoto/pairing.png",
        alt: "Remoto listening for nearby TVs, with a Xiaomi box discovered and already paired",
        caption: "Finds your TV in seconds",
      },
      {
        src: "/app/remoto/touchpad.png",
        alt: "Remoto's full-screen touchpad, where a swipe navigates, a tap selects and a two-finger tap goes back",
        caption: "Swipe to navigate",
      },
      {
        src: "/app/remoto/shortcuts.png",
        alt: "Remoto's shortcut grid of favourite TV apps, including YouTube, Netflix, Prime Video, Disney+, Max, Hulu and Spotify",
        caption: "Jump straight into an app",
      },
      {
        src: "/app/remoto/keyboard.png",
        alt: "Typing a search into Remoto on the iPhone keyboard and sending the whole line to the TV at once",
        caption: "Type on your phone, not the TV",
      },
      {
        src: "/app/remoto/lockscreen.png",
        alt: "An iPhone lock screen with Remoto's playback and volume controls available without unlocking",
        caption: "Control it from the lock screen",
      },
      {
        src: "/app/remoto/home-widget.png",
        alt: "An iOS home screen widget showing Remoto's D-pad, volume and playback buttons",
        caption: "A widget on your home screen",
      },
      {
        src: "/app/remoto/settings.png",
        alt: "Remoto settings showing Pro status, paired TVs, and toggles for haptic feedback, sound and keeping the screen awake",
        caption: "Haptics, sound and 8 languages",
      },
    ],
    capabilities: [
      { label: "$5.99", detail: "one-time Pro unlock" },
      { label: "Zero ads", detail: "never, not once" },
      { label: "~30 sec", detail: "to pair your TV" },
      { label: "8 languages", detail: "localized throughout" },
    ],
    featuresHeading: {
      eyebrow: "Why Remoto",
      title: "A real remote, minus the ads",
      body: 'Every other TV-remote app on the App Store is drowning in banners, interstitials, and "watch a video to unlock" prompts. Yours shouldn\'t be. Remoto pairs over an encrypted local connection in seconds and then gets out of your way.',
    },
    features: [
      {
        title: "Never an ad",
        description:
          'No banners, no interstitials, no "watch a video to unlock." Just a remote that opens instantly and does its job.',
      },
      {
        title: "Instant discovery",
        description:
          "Finds every Android TV and Google TV device on your Wi-Fi automatically over Bonjour — no IP addresses to type in.",
      },
      {
        title: "Full remote control",
        description:
          "D-pad, OK, Back, Home, Menu, and Assistant, plus real volume and power buttons mirrored from the hardware remote.",
      },
      {
        title: "Media & channels",
        description:
          "Play, pause, rewind, and fast-forward, with channel up/down and a Guide button for live TV.",
      },
      {
        title: "Haptic feedback",
        description:
          "Every press lands with a real button feel, so you can drive the TV without looking down at your phone.",
      },
      {
        title: "Private by design",
        description:
          "No analytics SDKs, no account, no tracking. Commands are encrypted and sent straight to your TV — never through us.",
      },
    ],
    plans: {
      heading: {
        eyebrow: "Pricing",
        title: "Free forever. Pro when you want it.",
        body: "The core remote is free for good. Unlock Remoto Pro once — $5.99, no subscription, no auto-renewal. You buy it once, you own it.",
      },
      tiers: [
        {
          name: "Free, forever",
          price: "$0",
          priceNote: "no strings attached",
          items: [
            "Instant Wi-Fi discovery of your TVs",
            "Full D-pad — OK, Back, Home, Menu, Assistant",
            "Volume and power hardware buttons",
            "Media transport: play, pause, rewind, fast-forward",
            "Channel up/down and Guide for live TV",
            "Haptic feedback on every press",
            "8 languages with a Settings override",
            "One paired device",
          ],
        },
        {
          name: "Remoto Pro",
          price: "$5.99",
          priceNote: "one-time unlock",
          highlight: true,
          items: [
            "Touchpad mode for cursor-driven TVs",
            "Full iOS keyboard — type on your TV instantly",
            "Apps grid + favourites: YouTube, Netflix, Prime Video, Disney+, Spotify, Twitch and more, one tap away",
            "Unlimited paired devices, switched from the top of the remote",
            "Home Screen & Lock Screen widgets",
            'Hey Siri support — "make the TV louder", "mute the TV", "confirm on the TV"',
            "Multi-TV smart targeting for Siri and widgets",
            "Priority support",
          ],
        },
      ],
    },
    devices: {
      heading: {
        eyebrow: "Compatibility",
        title: "Works with your Android TV",
      },
      intro:
        "Remoto works with any device that runs the Android TV Remote v2 protocol, including:",
      items: [
        "Xiaomi Mi Box S, Mi TV Stick, and Mi TV",
        "Google Chromecast with Google TV",
        "Nvidia Shield TV and Shield TV Pro",
        "TCL, Hisense, Philips, and Sony smart TVs on Android TV / Google TV",
        "Generic certified Android TV boxes (H96 / X96 with Google Play)",
      ],
      requirement:
        "Requires an iPhone on iOS 16 or later, on the same Wi-Fi network as your TV. Apple TV, Samsung, LG, Roku, and Fire TV use different protocols and are not supported.",
    },
    howItWorks: {
      heading: {
        eyebrow: "Setup",
        title: "Paired in three steps",
      },
      steps: [
        {
          title: "Open the app",
          body: "Remoto scans your Wi-Fi for compatible TVs using Apple's Bonjour discovery — no permission beyond Local Network access.",
        },
        {
          title: "Pair once",
          body: "Your TV shows a 6-digit code. Type it in. Remoto generates a private certificate on your iPhone, stored in the Keychain, and pairs over mutual TLS.",
        },
        {
          title: "Take control",
          body: "Every button press flows over an encrypted TLS channel straight from your iPhone to your TV. Nothing routes through our servers — we don't have any.",
        },
      ],
    },
    voice: {
      heading: {
        eyebrow: "Voice control · Pro",
        title: "Turn it up without lifting a finger",
      },
      body: "Drop the phone, keep talking. Remoto's App Intents let Siri drive your TV — perfect for skipping pre-roll ads without leaving the couch.",
      examples: [
        '"Hey Siri, make the TV louder."',
        '"Hey Siri, mute the TV."',
        '"Hey Siri, pause the TV."',
        '"Hey Siri, confirm on the TV."',
      ],
      note: "Because Apple requires the app name in default phrases, Remoto ships a 30-second Set up Siri tutorial that helps you record your own. Have several TVs? Pick a Target TV in Settings — Siri and every widget honour that choice.",
    },
    pledge: {
      heading: {
        eyebrow: "Privacy",
        title: "Privacy, without asterisks",
        body: "Nothing leaves your phone except the encrypted remote commands sent directly to your TV. There are no servers to leak, because we don't have any.",
      },
      points: [
        { label: "No analytics SDKs", detail: "No telemetry, screen views, or session data." },
        { label: "No account", detail: "No email, no password, no cloud sync." },
        { label: "No tracking", detail: "Nothing is collected, sold, or shared." },
        { label: "Data Not Collected", detail: "That's our App Store privacy label." },
      ],
    },
    faqs: {
      heading: {
        eyebrow: "FAQ",
        title: "Questions, answered",
      },
      items: [
        {
          q: "Does it work with Apple TV?",
          a: "No. Apple TV uses a different, proprietary protocol. Remoto is for Android TV, Google TV, and Mi Box only.",
        },
        {
          q: "What about Samsung, LG, Roku, or Fire TV?",
          a: "No — those use different protocols. We chose to ship one thing that works perfectly rather than four that work sort of.",
        },
        {
          q: "Do I need to be on the same Wi-Fi as my TV?",
          a: "Yes. Remoto talks to your TV directly on the local network. It's local-only by design — no cellular, no VPN, and no relay server in the cloud.",
        },
        {
          q: "Do I need a Google or Xiaomi account?",
          a: "No. Discovery and pairing are handled entirely by the Android TV Remote protocol built into your device.",
        },
        {
          q: "Will Pro become a subscription later?",
          a: "No plans to. If we ever add ongoing services that cost us money to run, they'd be a separate optional add-on — the current Pro unlock stays a lifetime purchase.",
        },
        {
          q: "What happens if I lose my iPhone?",
          a: "Restore from an iCloud backup and open the app — your Pro unlock restores from the App Store, and re-pairing your TV takes about 20 seconds.",
        },
        {
          q: "Which TV does Siri control when I have several?",
          a: "Whichever you set as Target TV in Settings ▸ Voice control. Widgets follow the same setting, so a Lock Screen play/pause always hits the TV you're actually watching.",
        },
        {
          q: "Do you support Apple Watch?",
          a: "Coming in a future update. Home Screen & Lock Screen widgets and Hey Siri support already ship today.",
        },
      ],
    },
    cta: {
      title: "Ditch the plastic remote.",
      body: "Download Remoto and get a fast, ad-free remote for your Android TV — free to start, Pro when you want it.",
    },
    legal: {
      privacy: {
        contactName: "Pantazi Eduard Marius Robert",
        contactEmail: "eduard.pantazi@gmail.com",
        intro: [
          'Remoto ("we", "us", the "App") is a local-only remote control for Android TV and Google TV devices. This is the shortest privacy policy you will read this year, because we do not collect, transmit, or store any personal data on any server we control.',
          "We do not have servers.",
        ],
        sections: [
          {
            heading: "What we collect",
            body: [
              "**Nothing.**",
              "The App does not collect, transmit, or share any personally identifiable information, usage analytics, crash reports (beyond Apple's built-in opt-in system-level crash reporting, which is anonymized and sent to Apple, not to us), advertising identifiers, location data, contacts, photos, microphone data, or any other information about you or your device.",
              "The App does not contain any third-party analytics SDK, advertising SDK, crash reporting SDK, or tracking library.",
              'Our App Store Privacy Nutrition Label lists "Data Not Collected". This policy is the underlying commitment.',
            ],
          },
          {
            heading: "What is stored on your device",
            body: [
              "The App stores the following data locally on your iPhone only, never leaving the device except as noted:",
            ],
            bullets: [
              "**A self-signed client certificate** — generated on first launch and stored in the iOS Keychain. Used to authenticate your iPhone to your TV over mutual TLS. It is never uploaded anywhere.",
              "**A list of paired TVs** — for each TV, its name (as advertised over Bonjour), its local IP address, and a fingerprint of its TLS certificate. Stored in Application Support / UserDefaults.",
              "**Your in-app preferences** — haptics, sound, keep-screen-awake, language override, and favourite apps. Stored in UserDefaults.",
              "**Your In-App Purchase entitlement** — whether you have purchased Remoto Pro. Queried directly from Apple's StoreKit; we do not receive it.",
            ],
            outro: [
              "If you use iCloud Backup, this data may be backed up to your iCloud account per your iOS backup settings. Apple, not us, handles the encryption and storage of that backup.",
            ],
          },
          {
            heading: "How the remote-control feature works",
            body: [
              "When you send a button press, keyboard input, or app-launch command from the App:",
            ],
            bullets: [
              "The command is sent directly from your iPhone to your TV over your local Wi-Fi network.",
              "The connection uses TLS 1.2+ with mutual authentication — your iPhone's client certificate and your TV's server certificate.",
              "The command never leaves your local network. It does not pass through any server operated by us or by any third party.",
            ],
            outro: [
              "Discovery of TVs uses Bonjour / mDNS, a local-network protocol built into iOS. This is why the App requests the Local Network permission — to see TVs advertising the _androidtvremote2._tcp service on your Wi-Fi.",
            ],
          },
          {
            heading: "Permissions the App requests",
            body: [
              "**Local Network access** — required to discover TVs on your Wi-Fi. If denied, the App cannot function.",
              "No other permissions are requested. The App does not use the microphone, camera, contacts, calendars, photos, motion sensors, HealthKit, Bluetooth, or location services.",
            ],
          },
          {
            heading: "In-App Purchases",
            body: [
              "The App offers a one-time non-consumable In-App Purchase for Remoto Pro, processed by Apple. From Apple we receive only the fact that a purchase was made under a given Apple ID (for aggregated revenue reporting) and no personally identifiable information about you. We do not maintain a user database.",
            ],
          },
          {
            heading: "Widgets & App Intents",
            body: [
              "If you use the App's Home Screen or Lock Screen widgets, or invoke its App Intents from Siri or Shortcuts:",
            ],
            bullets: [
              "Widget refreshes read the locally-stored paired-device list from a shared App Group container on your device.",
              "Sending a remote command from a widget uses the same local Wi-Fi TLS connection as the main App. No network traffic leaves your device to us.",
            ],
          },
          {
            heading: "Children",
            body: [
              "The App is safe for use by children in the sense that it collects no data and shows no ads. It is not, however, directed at children under 13, and we do not knowingly collect information from anyone.",
            ],
          },
          {
            heading: "Third parties",
            body: [
              "The App does not integrate any third-party service that would receive your data. Specifically:",
            ],
            bullets: [
              "No advertising networks.",
              "No analytics providers (no Firebase, Mixpanel, Amplitude, Google Analytics, or Meta SDK).",
              "No crash reporting beyond Apple's system-level opt-in.",
            ],
            outro: [
              "Package dependencies (SwiftProtobuf, swift-crypto, swift-certificates, swift-asn1) are open-source Swift libraries compiled into the App binary. They have no network access of their own and do not phone home.",
            ],
          },
          {
            heading: "Changes to this policy",
            body: [
              'If we ever change what data the App collects (we do not plan to), we will post an updated version of this policy with a new "Last updated" date, surface an in-app notice before the change takes effect, and never retroactively apply new data collection to actions you have already taken.',
            ],
          },
          {
            heading: "Your rights",
            body: [
              "Because we do not collect or store any personal data on our side, there is no data for us to give you, correct, or delete. All App data lives on your iPhone under your control. To fully erase it, uninstall the App; to delete iCloud-backed copies, remove the App's backup slot in Settings ▸ Apple ID ▸ iCloud ▸ Manage Storage.",
              "Under GDPR (EU/EEA), CCPA (California), UK GDPR, and similar regimes, the App does not qualify as a data controller with respect to your personal information, because none is collected.",
            ],
          },
        ],
      },
      terms: {
        contactName: "Pantazi Eduard Marius Robert",
        contactEmail: "eduard.pantazi@gmail.com",
        sections: [
          {
            heading: "Agreement",
            body: [
              'By downloading, installing, or using Remoto (the "App"), you agree to these Terms of Use. If you do not agree, do not use the App. The App is published by Pantazi Eduard Marius Robert ("we", "us", "our").',
              "These Terms apply in addition to Apple's standard [End User License Agreement (EULA)](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/), which governs your download of the App from the App Store.",
            ],
          },
          {
            heading: "What the App does",
            body: [
              "Remoto is a software remote control that runs on your iPhone and communicates directly over your local Wi-Fi network with third-party TV devices that implement the Android TV Remote v2 protocol (including devices sold under the Xiaomi Mi Box, Google Chromecast with Google TV, Nvidia Shield, TCL, Hisense, Philips, and Sony brands).",
              "The App is a client-only tool. It does not modify, jailbreak, root, or otherwise alter your TV. It sends standard commands that your TV is designed to accept.",
            ],
          },
          {
            heading: "Not affiliated",
            body: [
              'Remoto is **not affiliated with, endorsed by, sponsored by, or approved by** Google LLC, Xiaomi Corporation, Nvidia Corporation, TCL Corporation, Hisense Group, Koninklijke Philips N.V., Sony Group Corporation, or any manufacturer of a compatible device. "Android TV" and "Google TV" are trademarks of Google LLC. Other trademarks are the property of their respective owners. Their use is for compatibility identification only, in a manner permitted by nominative fair use.',
            ],
          },
          {
            heading: "License",
            body: [
              "Subject to your compliance with these Terms, we grant you a limited, personal, non-transferable, non-exclusive, revocable license to install and use the App on Apple-branded devices you own or control, for your personal, non-commercial use.",
              "You **may not**:",
            ],
            bullets: [
              "Reverse engineer, decompile, disassemble, or attempt to derive source code from the App, except to the limited extent that applicable law expressly permits it despite this restriction.",
              "Copy, modify, translate, or create derivative works of the App.",
              "Sell, rent, lease, sublicense, distribute, or transfer the App or your license to it.",
              "Remove or alter any copyright, trademark, or other proprietary notices.",
              "Use the App to build a competing product.",
              "Use the App in a way that violates applicable law or the rights of any third party.",
            ],
          },
          {
            heading: "In-App Purchases",
            body: [
              'The App offers a one-time non-consumable In-App Purchase, "Remoto Pro" ("Pro Unlock"), which unlocks additional features described in the App and on this site.',
            ],
            bullets: [
              "**All purchases are handled by Apple** under the standard EULA and the Apple Media Services Terms. We do not collect payment information.",
              '**Restoration** — because the Pro Unlock is non-consumable, you can restore it for free on any device signed into the same Apple ID, using "Restore Purchases" in Settings.',
              "**Refunds** are issued at Apple's discretion, not ours. To request one, use Apple's [Report a Problem](https://reportaproblem.apple.com) page. Where non-waivable statutory rights apply, you retain those rights against the seller of record (Apple).",
              "**Price changes** — pricing may change over time. Any change applies only to new purchases; existing Pro owners keep their unlock for the lifetime of the App.",
              "**No subscriptions** — the Pro Unlock is a one-time purchase, not a recurring subscription. No amount is charged on a recurring basis.",
            ],
          },
          {
            heading: "Ownership",
            body: [
              "The App, including its code, design, name, logo, and all associated intellectual property, is and remains the property of Pantazi Eduard Marius Robert. These Terms do not transfer any ownership to you.",
              "The App incorporates open-source components, each governed by its own license. Notices are included in the App and available on request.",
            ],
          },
          {
            heading: "Local network & compatibility",
            body: [
              "The App requires an iPhone running iOS 16.0 or later, a Wi-Fi network that both your iPhone and your TV are connected to, and a TV device that advertises the _androidtvremote2._tcp mDNS service and accepts pairing.",
              "We do not guarantee that the App will work with every device that meets the above criteria. Manufacturer-specific firmware, network configurations (isolated guest Wi-Fi, Access Point Isolation, strict firewalls, VPN split-tunneling), or regional variants may prevent discovery or pairing. **Please test the free tier before purchasing Pro.**",
            ],
          },
          {
            heading: "Local Network permission",
            body: [
              "The App requires iOS Local Network permission to discover TVs. If you deny this permission, the App will not function. You can change it at any time in Settings ▸ Privacy & Security ▸ Local Network.",
            ],
          },
          {
            heading: "Disclaimer of warranties",
            body: [
              '**The App is provided "AS IS" and "AS AVAILABLE", without warranty of any kind**, express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted availability. We do not warrant that:',
            ],
            bullets: [
              "The App will meet your requirements.",
              "The App will operate error-free, uninterrupted, or free from security vulnerabilities.",
              "Defects will be corrected.",
            ],
            outro: [
              "Some jurisdictions do not allow the exclusion of certain warranties, in which case the above exclusions apply only to the extent permitted by law.",
            ],
          },
          {
            heading: "Limitation of liability",
            body: [
              "To the maximum extent permitted by applicable law, in no event shall Pantazi Eduard Marius Robert, its owners, employees, or contractors be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, goodwill, or business opportunity, arising out of or in connection with your use of, or inability to use, the App — even if we have been advised of the possibility of such damages.",
              "Our total aggregate liability for any claim arising out of or relating to the App shall not exceed the amount you paid us for the App in the twelve (12) months preceding the event giving rise to the claim, or **five (5) US dollars**, whichever is greater.",
              "Nothing in these Terms excludes or limits liability for (a) death or personal injury caused by our negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot be excluded or limited under applicable law.",
            ],
          },
          {
            heading: "Indemnification",
            body: [
              "You agree to indemnify and hold harmless Pantazi Eduard Marius Robert from and against any claims, damages, liabilities, costs, and expenses (including reasonable legal fees) arising from your misuse of the App, your violation of these Terms, or your violation of any law or third-party right.",
            ],
          },
          {
            heading: "Termination",
            body: [
              "These Terms remain in effect until terminated. Your license to use the App terminates automatically if you breach any of these Terms. Upon termination, you must uninstall the App. The License restrictions, Ownership, Disclaimer, Limitation of liability, Indemnification, Governing law, and Miscellaneous sections survive termination.",
              "We may discontinue the App or any of its features at any time. If the App is permanently discontinued and you have an active Pro Unlock, contact us to discuss reasonable options.",
            ],
          },
          {
            heading: "Governing law & disputes",
            body: [
              "These Terms are governed by the laws of Romania, without regard to its conflict-of-laws rules. Subject to any non-waivable statutory consumer rights available to you in your country of residence, the courts of Bucharest, Romania shall have exclusive jurisdiction over any dispute arising out of or relating to these Terms or the App.",
              "If you are a consumer resident in the European Union, you retain the right to bring proceedings in the courts of your country of residence and to rely on mandatory consumer-protection provisions of your local law.",
            ],
          },
          {
            heading: "Apple-specific terms",
            body: ["You acknowledge that:"],
            bullets: [
              "These Terms are between you and Pantazi Eduard Marius Robert only, not with Apple.",
              "**We, not Apple, are solely responsible** for the App and its content.",
              "Apple has no obligation to provide maintenance or support for the App.",
              "In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price of the App (if any) to you. To the maximum extent permitted by applicable law, Apple has no other warranty obligation with respect to the App.",
              "We, not Apple, are responsible for addressing any claims relating to the App, including product-liability claims and claims that the App fails to conform to legal or regulatory requirements.",
              "We, not Apple, are responsible for the investigation, defense, settlement, and discharge of any third-party intellectual-property infringement claim relating to the App.",
              "Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.",
            ],
          },
          {
            heading: "Miscellaneous",
            body: [
              "**Entire agreement** — these Terms, together with our Privacy Policy and Apple's standard EULA, constitute the entire agreement between you and us regarding the App.",
            ],
            bullets: [
              "**Severability** — if any provision is held unenforceable, the remaining provisions remain in full force.",
              "**No waiver** — our failure to enforce any provision is not a waiver of that provision.",
              "**Assignment** — you may not assign these Terms. We may assign them in connection with a merger, acquisition, or sale of assets.",
              "**Changes** — we may update these Terms from time to time. Material changes will be communicated in-app or via the App Store update notes.",
            ],
          },
        ],
      },
    },
    supportEmail: "support@pantazisoft.com",
    companyName: "PantaziSoft",
    effectiveDate: "July 18, 2026",
    footerNote:
      "Android TV and Google TV are trademarks of Google LLC. Remoto is not affiliated with, endorsed by, or sponsored by Google, Xiaomi, Nvidia, TCL, Hisense, Philips, or Sony.",
  },
];

export function getApp(slug: string): AppProject | undefined {
  return apps.find((a) => a.slug === slug);
}

/** Nav/anchor links present on an app's landing page, in display order. */
export function getAppNavLinks(app: AppProject): { href: string; label: string }[] {
  const links: { href: string; label: string }[] = [
    { href: `/app/${app.slug}#features`, label: "Features" },
  ];
  if (app.toolCategories) links.push({ href: `/app/${app.slug}#tools`, label: "Tools" });
  if (app.plans) links.push({ href: `/app/${app.slug}#plans`, label: "Pricing" });
  if (app.devices) links.push({ href: `/app/${app.slug}#devices`, label: "Devices" });
  if (app.screenshots.length > 0)
    links.push({ href: `/app/${app.slug}#gallery`, label: "Gallery" });
  if (app.faqs) links.push({ href: `/app/${app.slug}#faq`, label: "FAQ" });
  return links;
}
