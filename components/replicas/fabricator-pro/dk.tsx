import type { CSSProperties, ReactNode } from "react";

/*
 * A port of FabricatorPro's DiagramKit (Shared/Diagram/DiagramKit.swift) to SVG.
 * Every primitive keeps the Swift version's maths, stroke widths, dash
 * patterns and label metrics, drawn with the dark-mode screen style
 * (`DiagramStyle.screen(.dark)`), so diagrams ported line by line from the
 * app's Canvas code come out the same.
 */

export type Pt = { x: number; y: number };
export const pt = (x: number, y: number): Pt => ({ x, y });

const f = (n: number) => (Math.round(n * 100) / 100).toString();

/** SwiftUI `Path` with the calls the diagrams use. */
export class Path {
  private parts: string[] = [];
  private cur: Pt | null = null;
  private start: Pt | null = null;

  move(p: Pt) {
    this.parts.push(`M${f(p.x)} ${f(p.y)}`);
    this.cur = p;
    this.start = p;
    return this;
  }
  line(p: Pt) {
    if (!this.cur) return this.move(p);
    this.parts.push(`L${f(p.x)} ${f(p.y)}`);
    this.cur = p;
    return this;
  }
  /** `addArc(center:radius:startAngle:endAngle:clockwise:)`, angles in radians.
   *  As in SwiftUI's y-down space, `clockwise: false` runs through increasing angles. */
  arc(c: Pt, r: number, a0: number, a1: number, clockwise: boolean) {
    const s = pt(c.x + r * Math.cos(a0), c.y + r * Math.sin(a0));
    if (this.cur) this.line(s);
    else this.move(s);
    let delta = clockwise ? a0 - a1 : a1 - a0;
    const TAU = Math.PI * 2;
    while (delta < 0) delta += TAU;
    while (delta > TAU) delta -= TAU;
    if (delta < 1e-9) return this;
    // An SVG arc can't draw a full turn: split it in two.
    const steps = delta > Math.PI * 1.9 ? 2 : 1;
    for (let i = 1; i <= steps; i++) {
      const a = clockwise ? a0 - (delta * i) / steps : a0 + (delta * i) / steps;
      const e = pt(c.x + r * Math.cos(a), c.y + r * Math.sin(a));
      const large = delta / steps > Math.PI ? 1 : 0;
      this.parts.push(`A${f(r)} ${f(r)} 0 ${large} ${clockwise ? 0 : 1} ${f(e.x)} ${f(e.y)}`);
      this.cur = e;
    }
    return this;
  }
  close() {
    this.parts.push("Z");
    this.cur = this.start;
    return this;
  }
  static rect(x: number, y: number, w: number, h: number) {
    return new Path().move(pt(x, y)).line(pt(x + w, y)).line(pt(x + w, y + h)).line(pt(x, y + h)).close();
  }
  static ellipse(x: number, y: number, w: number, h: number) {
    const rx = w / 2, ry = h / 2, cx = x + rx, cy = y + ry;
    const p = new Path();
    p.parts.push(
      `M${f(cx + rx)} ${f(cy)}A${f(rx)} ${f(ry)} 0 1 1 ${f(cx - rx)} ${f(cy)}A${f(rx)} ${f(ry)} 0 1 1 ${f(cx + rx)} ${f(cy)}Z`,
    );
    return p;
  }
  static polyline(pts: Pt[]) {
    const p = new Path();
    pts.forEach((q, i) => (i ? p.line(q) : p.move(q)));
    return p;
  }
  static segment(a: Pt, b: Pt) {
    return new Path().move(a).line(b);
  }
  toString() {
    return this.parts.join("");
  }
}

/** `DiagramStyle.screen(.dark, dynamicType: .large)`. */
export const style = {
  ink: "rgb(224 224 224)", // white 0.88
  partFill: "rgb(56 56 56)", // white 0.22
  partFillAlt: "rgb(77 77 77)", // white 0.30
  cut: "var(--fp-accent)",
  construction: "rgb(115 166 255)", // (0.45, 0.65, 1.0)
  dimension: "rgb(179 179 179)", // white 0.70
  labelHalo: "#000",
  mutedText: "rgb(158 158 158)", // white 0.62
  thin: 0.75,
  regular: 1.25,
  bold: 2,
};

export type Role = "dimension" | "emphasis" | "label" | "note" | "title";
const FONT: Record<Role, { size: number; weight: number }> = {
  dimension: { size: 10.5, weight: 600 },
  emphasis: { size: 12.5, weight: 700 },
  label: { size: 10, weight: 500 },
  note: { size: 9, weight: 400 },
  title: { size: 10.5, weight: 700 },
};

/** SF Mono: 0.6 em advance, 1.193 em line height. */
export function textSize(text: string, role: Role = "label") {
  const { size } = FONT[role];
  return { width: [...text].length * size * 0.6, height: size * 1.193 };
}

export type Anchor = { x: number; y: number };
export const A = {
  center: { x: 0.5, y: 0.5 },
  leading: { x: 0, y: 0.5 },
  trailing: { x: 1, y: 0.5 },
  top: { x: 0.5, y: 0 },
  bottom: { x: 0.5, y: 1 },
  topLeading: { x: 0, y: 0 },
  topTrailing: { x: 1, y: 0 },
  bottomLeading: { x: 0, y: 1 },
  bottomTrailing: { x: 1, y: 1 },
} satisfies Record<string, Anchor>;

const defaultColor = (role: Role) =>
  role === "dimension" ? style.dimension : role === "emphasis" ? style.cut : role === "note" ? style.mutedText : style.ink;

type Group = { cls?: string; style?: CSSProperties; els: ReactNode[] };

/** `DiagramContext`: draw calls append SVG elements, optionally into animated groups. */
export class DK {
  private stack: Group[] = [{ els: [] }];
  private n = 0;
  constructor(public width: number, public height: number) {}

  private push(el: (key: number) => ReactNode) {
    this.stack[this.stack.length - 1]!.els.push(el(this.n++));
  }

  /** Wraps the drawing done in `fn` in a <g> carrying motion classes. */
  g(cls: string, st: CSSProperties | undefined, fn: () => void) {
    this.stack.push({ cls, style: st, els: [] });
    fn();
    const grp = this.stack.pop()!;
    this.push((k) => (
      <g key={k} className={grp.cls} style={grp.style}>
        {grp.els}
      </g>
    ));
  }

  render(className?: string) {
    return (
      <svg
        className={className}
        width={this.width}
        height={this.height}
        viewBox={`0 0 ${this.width} ${this.height}`}
        style={{ display: "block", overflow: "visible" }}
      >
        {this.stack[0]!.els}
      </svg>
    );
  }

  // Raw

  raw(el: ReactNode) {
    this.push(() => el);
  }
  fill(p: Path, color: string, opacity?: number) {
    this.push((k) => <path key={k} d={p.toString()} fill={color} fillOpacity={opacity} />);
  }
  stroke(p: Path, color: string, width: number, extra?: { dash?: string; opacity?: number; cap?: "round"; cls?: string }) {
    this.push((k) => (
      <path
        key={k}
        d={p.toString()}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeOpacity={extra?.opacity}
        strokeDasharray={extra?.dash}
        strokeLinecap={extra?.cap}
        strokeLinejoin={extra?.cap}
        className={extra?.cls}
        pathLength={extra?.cls ? 1 : undefined}
      />
    ));
  }

  // Shapes

  part(p: Path, alt = false, highlighted = false) {
    this.fill(p, alt ? style.partFillAlt : style.partFill);
    this.stroke(p, highlighted ? style.cut : style.ink, style.regular);
  }
  outline(p: Path, width = style.regular) {
    this.stroke(p, style.ink, width);
  }
  /** Accent cut line. `drawCls` makes it draw itself in (see .fp-draw). */
  cutLine(p: Path, dashed = false, drawCls?: string) {
    this.stroke(p, style.cut, style.bold, { dash: dashed ? "7 4" : undefined, cap: "round", cls: drawCls });
  }
  cutFill(p: Path) {
    this.fill(p, style.cut, 0.14);
  }
  construction(p: Path) {
    this.stroke(p, style.construction, style.thin, { dash: "10 3 2 3", opacity: 0.85 });
  }
  hidden(p: Path) {
    this.stroke(p, style.ink, style.thin, { dash: "4 3", opacity: 0.55 });
  }
  centerMark(p: Pt, size = 8) {
    const path = new Path()
      .move(pt(p.x - size, p.y)).line(pt(p.x + size, p.y))
      .move(pt(p.x, p.y - size)).line(pt(p.x, p.y + size));
    this.stroke(path, style.construction, style.thin);
  }

  // Text

  textSize(text: string, role: Role = "label") {
    return textSize(text, role);
  }

  label(text: string, at: Pt, anchor: Anchor = A.center, role: Role = "label", color?: string, halo = true) {
    if (!text) return;
    const sz = textSize(text, role);
    const p = { ...at };
    // Keep the chip on the canvas (bounds inset 5 × 3).
    const inner = { minX: 5, minY: 3, maxX: this.width - 5, maxY: this.height - 3 };
    const minX = p.x - sz.width * anchor.x, minY = p.y - sz.height * anchor.y;
    if (sz.width <= inner.maxX - inner.minX)
      p.x += Math.max(inner.minX - minX, 0) - Math.max(minX + sz.width - inner.maxX, 0);
    if (sz.height <= inner.maxY - inner.minY)
      p.y += Math.max(inner.minY - minY, 0) - Math.max(minY + sz.height - inner.maxY, 0);
    const ox = p.x - sz.width * anchor.x, oy = p.y - sz.height * anchor.y;
    const { size, weight } = FONT[role];
    this.push((k) => (
      <g key={k}>
        {halo && (
          <rect x={ox - 3} y={oy - 1.5} width={sz.width + 6} height={sz.height + 3} fill={style.labelHalo} fillOpacity={0.92} />
        )}
        <text
          x={ox}
          y={oy + sz.height / 2}
          dominantBaseline="central"
          fontSize={size}
          fontWeight={weight}
          fill={color ?? defaultColor(role)}
          className="fp-mono"
          style={{ whiteSpace: "pre" }}
        >
          {text}
        </text>
      </g>
    ));
  }

  // Dimensions

  arrowhead(tip: Pt, dir: Pt, color = style.dimension, size = 6) {
    const s = size;
    const back = pt(tip.x - dir.x * s, tip.y - dir.y * s);
    const px = -dir.y * s * 0.38, py = dir.x * s * 0.38;
    const tri = new Path().move(tip).line(pt(back.x + px, back.y + py)).line(pt(back.x - px, back.y - py)).close();
    this.fill(tri, color);
  }

  linearDimension(
    a: Pt, b: Pt, offset: number, text: string,
    o: { emphasis?: boolean; extensionLines?: boolean; labelOutside?: boolean; labelShift?: number } = {},
  ) {
    const { emphasis = false, extensionLines = true, labelOutside = false, labelShift = 0 } = o;
    const dx = b.x - a.x, dy = b.y - a.y;
    const len = Math.max(Math.hypot(dx, dy), 0.001);
    const ux = dx / len, uy = dy / len;
    const nx = -uy, ny = ux;
    const a2 = pt(a.x + nx * offset, a.y + ny * offset);
    const b2 = pt(b.x + nx * offset, b.y + ny * offset);
    const color = emphasis ? style.cut : style.dimension;
    if (extensionLines && Math.abs(offset) > 1) {
      const sign = offset >= 0 ? 1 : -1;
      const ext = new Path()
        .move(pt(a.x + nx * 2 * sign, a.y + ny * 2 * sign)).line(pt(a2.x + nx * 4 * sign, a2.y + ny * 4 * sign))
        .move(pt(b.x + nx * 2 * sign, b.y + ny * 2 * sign)).line(pt(b2.x + nx * 4 * sign, b2.y + ny * 4 * sign));
      this.stroke(ext, color, style.thin, { opacity: 0.6 });
    }
    this.stroke(Path.segment(a2, b2), color, style.thin);
    this.arrowhead(a2, pt(-ux, -uy), color);
    this.arrowhead(b2, pt(ux, uy), color);
    const mid = pt((a2.x + b2.x) / 2 + ux * labelShift, (a2.y + b2.y) / 2 + uy * labelShift);
    const role: Role = emphasis ? "emphasis" : "dimension";
    if (labelOutside) {
      const sign = offset >= 0 ? 1 : -1;
      const ox = nx * sign, oy = ny * sign;
      const sz = textSize(text, role);
      const gap = (Math.abs(ox) * sz.width) / 2 + (Math.abs(oy) * sz.height) / 2 + 6;
      this.label(text, pt(mid.x + ox * gap, mid.y + oy * gap), A.center, role, color);
    } else {
      this.label(text, mid, A.center, role, color);
    }
  }

  angularDimension(
    center: Pt, radius: number, start: number, end: number, text: string,
    o: { emphasis?: boolean; labelRadius?: number; labelAngle?: number } = {},
  ) {
    const color = o.emphasis ? style.cut : style.dimension;
    this.stroke(new Path().arc(center, radius, start, end, end < start), color, style.thin);
    const mid = o.labelAngle ?? (start + end) / 2;
    const r = o.labelRadius ?? radius + 14;
    this.label(text, pt(center.x + r * Math.cos(mid), center.y + r * Math.sin(mid)), A.center,
      o.emphasis ? "emphasis" : "dimension", color);
  }

  radiusDimension(center: Pt, radius: number, angle: number, text: string, emphasis = false, labelFraction = 0.55) {
    const color = emphasis ? style.cut : style.dimension;
    const ux = Math.cos(angle), uy = Math.sin(angle);
    const tip = pt(center.x + ux * radius, center.y + uy * radius);
    this.stroke(Path.segment(center, tip), color, style.thin);
    this.arrowhead(tip, pt(ux, uy), color);
    this.label(text, pt(center.x + ux * radius * labelFraction, center.y + uy * radius * labelFraction), A.center,
      emphasis ? "emphasis" : "dimension", color);
  }

  leader(feature: Pt, textPoint: Pt, text: string, anchor: Anchor = A.leading) {
    this.stroke(Path.segment(feature, textPoint), style.dimension, style.thin);
    this.fill(Path.ellipse(feature.x - 2, feature.y - 2, 4, 4), style.dimension);
    this.label(text, pt(textPoint.x + (anchor === A.leading ? 3 : -3), textPoint.y), anchor, "label");
  }

  /** Thin extension line bridging a feature point to a dimension baseline. */
  featureExtension(a: Pt, b: Pt) {
    if (Math.hypot(b.x - a.x, b.y - a.y) <= 1) return;
    this.stroke(Path.segment(a, b), style.dimension, style.thin, { opacity: 0.6 });
  }

  legend(items: [string, "part" | "cut"][], origin: Pt) {
    let x = origin.x;
    for (const [text, kind] of items) {
      const sample = { x, y: origin.y - 4, w: 16, h: 8 };
      if (kind === "part") this.part(Path.rect(sample.x, sample.y, sample.w, sample.h));
      else this.cutLine(Path.segment(pt(sample.x, origin.y), pt(sample.x + 16, origin.y)));
      this.label(text, pt(sample.x + 20, origin.y), A.leading, "note", style.mutedText, false);
      x = sample.x + 20 + textSize(text, "note").width + 14;
    }
  }
}
