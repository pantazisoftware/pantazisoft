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

export type AppProject = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  logo: string;
  appStoreUrl: string;
  appStoreId?: string;
  screenshots: AppScreenshot[];
  features: AppFeature[];
  capabilities: AppCapability[];
  toolCategories: AppToolCategory[];
  pricing: {
    model: string;
    freeTierNote: string;
    proNote: string;
  };
  supportEmail: string;
  companyName: string;
  effectiveDate: string;
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
    appStoreUrl: "https://apps.apple.com/app/fabricator-pro",
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
    capabilities: [
      { label: "30 tools", detail: "across 7 categories" },
      { label: "1:1 PDF", detail: "printable templates" },
      { label: "DXF export", detail: "for CAD & CNC" },
      { label: "Works offline", detail: "no signal needed" },
      { label: "Metric & imperial", detail: "live unit switching" },
      { label: "2D & 3D previews", detail: "on every fit-sensitive tool" },
    ],
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
    supportEmail: "support@pantazisoft.com",
    companyName: "PantaziSoft",
    effectiveDate: "April 22, 2026",
  },
];

export function getApp(slug: string): AppProject | undefined {
  return apps.find((a) => a.slug === slug);
}
