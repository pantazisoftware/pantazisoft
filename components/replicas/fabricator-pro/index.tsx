import type { ComponentType, ReactNode } from "react";
import { d } from "../frames";
import {
  BarSpacingDiagram,
  ConeDiagram,
  CutBarDiagram,
  MiterDiagram,
  PipeTemplateDiagram,
  optimize,
  saddleCut,
  truncatedCone,
} from "./diagrams";
import {
  CopyIcon,
  DiagramCard,
  DiagramTabs,
  Floating,
  InkBorder,
  ResultHero,
  Screen,
  SectionTitle,
  Segmented,
  SplitIcon,
  WrenchIcon,
  cn,
  type HeroItem,
} from "./ui";
import "./scope.css";

/*
 * FabricatorPro, one replica per feature in the order of `features` in the copy.
 *
 * Each surface is a crop of the app's real screen in dark mode, laid out in iOS
 * points from the SwiftUI source (`/Volumes/Mac Data/XCode-Extended/FabCalc Pro`)
 * and scaled into the card: CalculatorScreen's DiagramCard with the calculator's
 * own diagram ported from its Canvas code, or the reference table. The pinned
 * ResultHero (or the sheet a tap opens) floats over the card, overhanging its outer edge.
 * Default inputs are the app's own defaults, so every number is what the app shows.
 */

const FLOAT = 0.7;
const SHEET = 0.56;

/** The pinned result readout, floating over the card's top-right edge. */
function HeroFloat({ items, W, delay = 0.2 }: { items: HeroItem[]; W: number; delay?: number }) {
  return (
    <Floating
      right={-24}
      top={-20}
      W={W}
      scale={FLOAT}
      className="rp-slide"
      style={d(delay, { "--from-x": "0px", "--from-y": "-14px" })}
    >
      <ResultHero items={items} width={W} delay={delay + 0.3} />
    </Floating>
  );
}

/** A calculator's diagram card at the top of a screen `W` points wide. */
function DiagramScreen({ W, height, top = 16, children }: { W: number; height: number; top?: number; children: ReactNode }) {
  return (
    <Screen W={W}>
      <div className="px-[16px]" style={{ paddingTop: top }}>
        <DiagramCard height={height}>{children}</DiagramCard>
      </div>
    </Screen>
  );
}

/** 1 · Angles: Miter Calculator (MiterCalcView + MiterPreview2D), 90° joint, 50 mm profile. */
function Miter() {
  const W = 472;
  return (
    <div className="absolute inset-0">
      <DiagramScreen W={W} height={280}>
        <MiterDiagram w={W - 32} h={280} />
      </DiagramScreen>
      <HeroFloat W={250} items={[{ label: "Saw Angle", value: "45.00", unit: "°", hint: "Set this on the saw" }]} />
    </div>
  );
}

/** 2 · Pipe saddles: Round on Round (RoundOnRoundView + PipeCutTemplate2D), Ø100 main, Ø50 branch, 90°. */
function Saddle() {
  const W = 480;
  const cut = saddleCut(100, 50, 90);
  return (
    <div className="absolute inset-0">
      <DiagramScreen W={W} height={320}>
        <DiagramTabs flatTitle="Template">
          <PipeTemplateDiagram w={W - 32} h={259} points={cut.points} templateWidth={cut.templateWidth} maxHeight={cut.height} />
        </DiagramTabs>
      </DiagramScreen>
      <HeroFloat
        W={390}
        items={[
          { label: "Cut Height (High to Low)", value: cut.height.toFixed(1), unit: "mm", hint: "Depth of the fish-mouth from its lowest to highest point" },
          { label: "Template Width", value: cut.templateWidth.toFixed(1), unit: "mm", hint: "Branch circumference: wrap length of the template" },
        ]}
      />
    </div>
  );
}

/** 3 · Hoppers: Truncated Cone (ConeView + ConeDevelopment2D), Ø500 / Ø200 × 400. */
function Cone() {
  const W = 520;
  const c = truncatedCone(500, 200, 400);
  return (
    <div className="absolute inset-0">
      <DiagramScreen W={W} height={320} top={10}>
        <DiagramTabs flatTitle="Flat pattern">
          <ConeDiagram w={W - 32} h={259} outer={c.outer} inner={c.inner} angle={c.angle} />
        </DiagramTabs>
      </DiagramScreen>
      <HeroFloat
        W={390}
        items={[
          { label: "Outer Radius", value: c.outer.toFixed(1), unit: "mm", hint: "Swing the large arc from the centre point" },
          { label: "Sector Angle", value: ((c.angle * 180) / Math.PI).toFixed(2), unit: "°", hint: "Angle between the two seam lines" },
        ]}
      />
    </div>
  );
}

/** 4 · Gates: Bar Spacing (BarSpacingView + BarSpacingPreview2D), 1000 mm between posts, 10 × 12 mm bars. */
function Bars() {
  const W = 495;
  const inner = 1000, bar = 12, n = 10;
  const gap = (inner - n * bar) / (n + 1);
  return (
    <div className="absolute inset-0">
      <DiagramScreen W={W} height={300}>
        <BarSpacingDiagram w={W - 32} h={300} innerWidth={inner} barWidth={bar} numberOfBars={n} spacing={gap} />
      </DiagramScreen>
      <HeroFloat
        W={390}
        items={[
          { label: "Gap Between Bars", value: gap.toFixed(1), unit: "mm", hint: "Clear space between bars and at each post" },
          { label: "Center to Center", value: (gap + bar).toFixed(1), unit: "mm", hint: "Mark bar centres at this pitch" },
        ]}
      />
    </div>
  );
}

/** 5 · Workshop: Cutting Optimizer's cut plan (CutResultCard + CutLayoutPreview2D), default cut list. */
function Cutting() {
  const W = 440;
  const stock = 6000, kerf = 2;
  const list = [
    { length: 2350, quantity: 4, label: "Rail" },
    { length: 1850, quantity: 6, label: "Cross" },
    { length: 1200, quantity: 8, label: "Diagonal" },
  ];
  const bars = optimize(stock, kerf, list);
  const numberOf = (p: { length: number; label: string }) => list.findIndex((q) => q.label === p.label && q.length === p.length) + 1;
  const used = bars.reduce((s, b) => s + b.used, 0); // utilisation counts kerf as used, like the app
  const wasteColor = (pc: number) => (pc > 20 ? "var(--fp-red)" : pc > 10 ? "var(--fp-accent)" : "var(--fp-green)");
  return (
    <div className="absolute inset-0">
      <Screen W={W}>
        <div className="flex flex-col gap-[10px] px-[16px] pt-[14px]">
          <SectionTitle icon={<SplitIcon />}>CUT PLAN</SectionTitle>
          {bars.slice(0, 3).map((bar, i) => (
            <div key={bar.barNumber} className="relative flex flex-col gap-[10px] bg-black p-[16px]">
              <div className="flex items-baseline justify-between">
                <span className="fp-mono text-[17px] font-extrabold">BAR {bar.barNumber}</span>
                <span className="fp-mono rp-in text-[15px] font-bold tabular-nums" style={{ color: wasteColor(bar.wastePercent), ...d(0.9 + i * 0.5) }}>
                  WASTE {bar.waste.toFixed(0)} MM · {bar.wastePercent.toFixed(1)}%
                </span>
              </div>
              <CutBarDiagram w={W - 64} bar={bar} stock={stock} kerf={kerf} numberOf={numberOf} delay={0.2 + i * 0.5} />
              <p className="fp-mono text-[13px] whitespace-pre-wrap text-[var(--fp-ink2)] tabular-nums">
                {bar.pieces.map((p) => `#${numberOf(p)} ${p.length} ${p.label}`).join("  +  ")}
              </p>
              <InkBorder />
            </div>
          ))}
        </div>
      </Screen>
      <Floating
        right={-24}
        bottom={-20}
        W={390}
        scale={FLOAT}
        className="rp-slide"
        style={d(1.9, { "--from-x": "0px", "--from-y": "14px" })}
      >
        <ResultHero
          width={390}
          delay={2.1}
          items={[
            { label: "Bars Needed", value: String(bars.length), countTo: bars.length, hint: `${stock.toFixed(1)} mm stock` },
            { label: "Utilisation", value: ((used / (bars.length * stock)) * 100).toFixed(1), unit: "%", hint: "Material used by pieces" },
          ]}
        />
      </Floating>
    </div>
  );
}

// MARK: - 6 · Bolt Torque Chart (BoltTorqueChartView + BoltTorqueData)

const SIZES: [string, number, number[]][] = [
  ["M5", 8, [2.1, 3.5, 5.5, 8.0, 9.5]],
  ["M6", 10, [3.6, 5.9, 9.5, 14, 16]],
  ["M8", 13, [8.6, 14, 23, 33, 39]],
  ["M10", 17, [17, 29, 46, 66, 77]],
];
const CLASSES = ["4.6", "5.8", "8.8", "10.9", "12.9"];
const torque = (v: number) => v.toFixed(v >= 100 ? 0 : 1);
const heat = (v: number) => (v > 500 ? "var(--fp-red)" : v > 100 ? "var(--fp-accent)" : v > 20 ? "var(--fp-yellow)" : "var(--fp-green)");

function CopyRow({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <div className="relative flex min-h-[56px] items-center gap-[12px] bg-black px-[14px]">
      <div className="flex flex-1 flex-col gap-[2px]">
        <span className="fp-mono text-[13px] font-bold text-[var(--fp-ink2)]">{label.toUpperCase()}</span>
        {detail && <span className="fp-mono text-[12px] text-[var(--fp-ink2)]">{detail}</span>}
      </div>
      <span className="fp-mono text-[20px] font-bold tabular-nums">{value}</span>
      <span className="flex min-w-[28px] justify-end">
        <CopyIcon />
      </span>
      <InkBorder width={1} />
    </div>
  );
}

function Torque() {
  const W = 480;
  const tap = { row: 1, col: 0 }; // M6 · 4.6
  return (
    <div className="absolute inset-0">
      <Screen W={W}>
        <div className="flex flex-col gap-[16px] px-[16px] pt-[16px]">
          <Segmented options={["Dry", "Lubricated"]} selected={0} minH={56} />
          <div className="flex flex-col gap-[8px]">
            <SectionTitle icon={<WrenchIcon />}>TIGHTENING TORQUE (N·M) · TAP A VALUE FOR DETAILS</SectionTitle>
            <div className="relative">
              <div className="flex min-h-[44px] items-stretch bg-[var(--fp-ink)] text-black">
                <span className="fp-mono flex w-[74px] items-center pl-[10px] text-[15px] font-extrabold">SIZE</span>
                {CLASSES.map((c) => (
                  <span key={c} className="flex flex-1">
                    <span className="w-px bg-black/35" />
                    <span className="fp-mono flex flex-1 items-center justify-center text-[15px] font-extrabold">{c}</span>
                  </span>
                ))}
              </div>
              {SIZES.map(([size, key, values], r) => (
                <div key={size} className="rp-in" style={d(0.1 + r * 0.12)}>
                  {r > 0 && <div className="h-px bg-[var(--fp-rule)]" />}
                  <div className="flex min-h-[56px] items-stretch">
                    <span className="flex w-[74px] flex-col justify-center gap-px pl-[10px]">
                      <span className="fp-mono text-[17px] font-bold">{size}</span>
                      <span className="fp-mono text-[11px] font-semibold text-[var(--fp-ink2)]">{key} MM KEY</span>
                    </span>
                    {values.map((v, c) => (
                      <span key={c} className="flex flex-1">
                        <span className="w-px bg-[var(--fp-rule)]" />
                        <span
                          className={cn("relative flex flex-1 items-center justify-center", r === tap.row && c === tap.col && "fp-tap")}
                          style={r === tap.row && c === tap.col ? d(1.3) : undefined}
                        >
                          <span className="fp-mono text-[16px] font-semibold tabular-nums">{torque(v)}</span>
                          <span className="absolute top-[4px] right-[4px] size-[6px]" style={{ background: heat(v) }} />
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <InkBorder />
            </div>
          </div>
        </div>
      </Screen>
      {/* BoltDetailSheet for the tapped value (a .medium detent sheet, top of it) */}
      <Floating
        right={-24}
        bottom={-20}
        W={440}
        scale={SHEET}
        className="rp-slide"
        style={d(1.6, { "--from-x": "0px", "--from-y": "22px" })}
      >
        <div className="relative flex flex-col gap-[16px] bg-black px-[16px] pt-[22px] pb-[16px] ring-1 ring-white/25">
          <span className="absolute top-[5px] left-1/2 h-[5px] w-[36px] -translate-x-1/2 rounded-full bg-white/30" />
          <div className="flex flex-col gap-[4px]">
            <span className="fp-mono text-[22px] font-bold">M6 × 1.00</span>
            <span className="fp-mono text-[13px] font-bold tracking-[1px] text-[var(--fp-ink2)]">STRENGTH CLASS 4.6</span>
          </div>
          <div className="flex flex-col gap-[8px]">
            <CopyRow label="Torque (dry)" value="3.6 N·m" detail="Current table setting" />
            <CopyRow label="Torque (lubricated)" value="2.5 N·m" detail="≈ 70% of dry" />
          </div>
        </div>
      </Floating>
    </div>
  );
}

export const fabricatorProReplicas: ComponentType[] = [Miter, Saddle, Cone, Bars, Cutting, Torque];
