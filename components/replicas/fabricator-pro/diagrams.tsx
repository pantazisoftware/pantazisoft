import { d } from "../frames";
import { A, DK, Path, pt, style, textSize, type Pt } from "./dk";

/*
 * FabricatorPro's diagrams, ported line by line from their SwiftUI Canvas code
 * (file named on each). Same layout maths, labels and number formatting; the
 * only additions are <g> wrappers carrying motion classes.
 */

const fmt = (v: number, p: number) => {
  const s = v.toFixed(p);
  return /^-0\.?0*$/.test(s) ? s.slice(1) : s;
};
const len = (v: number, p = 1, u = "mm") => `${fmt(v, p)} ${u}`;

// MARK: - Features/Angles/Visualization/MiterPreview2D.swift

export function MiterDiagram({ w, h, jointAngleDeg = 90, profileWidth = 50 }: { w: number; h: number; jointAngleDeg?: number; profileWidth?: number }) {
  const dk = new DK(w, h);
  const miterAngle = (180 - jointAngleDeg) / 2;
  const cutLen = profileWidth / Math.max(Math.cos((miterAngle * Math.PI) / 180), 0.01);
  const joint = (Math.max(10, Math.min(jointAngleDeg, 170)) * Math.PI) / 180;
  const half = joint / 2;

  const drawW = w * 0.7;
  const inner = pt(drawW * 0.5, h * 0.7);
  let armLen = Math.min(drawW * 0.46, h * 0.62);
  const jointText = `${fmt(jointAngleDeg, 1)}°`;
  const jointTextW = textSize(jointText, "dimension").width;
  const k = Math.min(0.3 / Math.max(Math.sin(half), 0.01), 0.85);
  const narrow = 2 * (armLen * 0.34 + 14) * Math.tan(half) < jointTextW + 10;
  const topY = 30;
  armLen = Math.min(armLen, (inner.y - topY - (narrow ? 22 : 0)) / (k + (narrow ? 1 : Math.cos(half))));
  const wd = armLen * 0.3;

  const d1 = pt(-Math.sin(half), -Math.cos(half));
  const d2 = pt(Math.sin(half), -Math.cos(half));
  const outerDist = Math.min(wd / Math.max(Math.sin(half), 0.01), armLen * 0.85);
  const outer = pt(inner.x, inner.y - outerDist);
  const at = (o: Pt, dir: Pt, dist: number) => pt(o.x + dir.x * dist, o.y + dir.y * dist);

  dk.g("rp-slide", d(0.1, { "--from-x": "-14px", "--from-y": "10px" }), () => {
    dk.part(new Path().move(inner).line(at(inner, d1, armLen)).line(at(outer, d1, armLen)).line(outer).close());
  });
  dk.g("rp-slide", d(0.3, { "--from-x": "14px", "--from-y": "10px" }), () => {
    dk.part(new Path().move(inner).line(at(inner, d2, armLen)).line(at(outer, d2, armLen)).line(outer).close(), true);
  });

  // Miter cut
  dk.cutLine(Path.segment(inner, outer), false, "fp-draw");

  const a1 = Math.atan2(d1.y, d1.x);
  const a2 = Math.atan2(d2.y, d2.x);
  dk.g("rp-in", d(1.0), () => {
    dk.angularDimension(outer, armLen * 0.34, a1, a2, jointText, {
      labelRadius: narrow ? armLen + 12 : armLen * 0.34 + 14,
    });
  });

  const squareRef = a2 + Math.PI / 2;
  dk.g("rp-in", d(1.3), () => {
    dk.hidden(
      new Path()
        .move(inner).line(pt(inner.x + Math.cos(squareRef) * wd * 1.3, inner.y + Math.sin(squareRef) * wd * 1.3))
        .move(inner).line(pt(inner.x, inner.y + wd * 1.3)),
    );
    dk.angularDimension(inner, wd, squareRef, Math.PI / 2, `${fmt(miterAngle, 1)}°`, { emphasis: true, labelRadius: wd + 18 });
  });

  const wText = `W ${fmt(profileWidth, 1)} mm`;
  const wHalf = textSize(wText, "dimension").width / 2 + 6;
  let wt = 0.8;
  while (wt > 0.5 && (at(inner, d1, armLen * wt).x + at(outer, d1, armLen * wt).x) / 2 - wHalf < 4) wt -= 0.04;
  const wa = at(inner, d1, armLen * wt);
  const wb = at(outer, d1, armLen * wt);
  dk.g("rp-in", d(1.6), () => {
    dk.linearDimension(wb, wa, 0, wText, { extensionLines: false });
  });

  const midCut = pt(inner.x, (inner.y + outer.y) / 2);
  dk.g("rp-in", d(1.8), () => {
    dk.leader(midCut, pt(inner.x - armLen * 0.42, inner.y + 16), `Cut ${fmt(cutLen, 1)} mm`, A.trailing);
  });

  // Saw reference inset
  const sawR = Math.min(w * 0.11, h * 0.2);
  const c = pt(w - sawR - 18, h - sawR - 30);
  dk.g("rp-in", d(0.5), () => {
    dk.hidden(Path.ellipse(c.x - sawR, c.y - sawR, sawR * 2, sawR * 2));
    dk.outline(Path.segment(pt(c.x - sawR * 1.15, c.y), pt(c.x + sawR * 1.15, c.y)));
  });
  const blade = Math.PI / 2 - (miterAngle * Math.PI) / 180;
  const bx = sawR * 0.85 * Math.cos(blade), by = sawR * 0.85 * Math.sin(blade);
  dk.g("fp-swing", d(0.7, { transformOrigin: `${c.x}px ${c.y}px`, "--from-r": "-45deg" }), () => {
    dk.cutLine(Path.segment(pt(c.x - bx, c.y + by), pt(c.x + bx, c.y - by)));
  });
  dk.g("rp-pop", d(2.1), () => {
    dk.label(`SAW ${fmt(miterAngle, 1)}°`, pt(c.x, c.y + sawR + 12), A.center, "emphasis", style.cut);
  });

  dk.legend([["Profile", "part"], ["Cut line", "cut"]], pt(12, 14));
  return dk.render();
}

// MARK: - PipeMath.saddleCut + Features/PipeCuts/Visualization/PipeCutTemplate2D.swift

export function saddleCut(mainD: number, branchD: number, angleDeg: number, steps = 72) {
  const r1 = mainD / 2, r2 = branchD / 2;
  const ang = (angleDeg * Math.PI) / 180;
  const pts: Pt[] = [];
  let maxH = -Infinity, minH = Infinity;
  for (let i = 0; i <= steps; i++) {
    const th = (i * 2 * Math.PI) / steps;
    const lateral = r2 * Math.sin(th);
    const inside = r1 * r1 - lateral * lateral;
    if (inside < 0) continue;
    const hh = (r2 * Math.cos(th)) / Math.tan(ang) + Math.sqrt(inside) / Math.sin(ang);
    pts.push(pt(r2 * th, hh));
    maxH = Math.max(maxH, hh);
    minH = Math.min(minH, hh);
  }
  return { points: pts.map((p) => pt(p.x, p.y - minH)), templateWidth: 2 * Math.PI * r2, height: maxH - minH };
}

/** PipeDiagram.pipeTextSize: label size plus halo padding. */
const pts = (t: string, role: Parameters<typeof textSize>[1]) => {
  const s = textSize(t, role);
  return { width: s.width + 6, height: s.height + 3 };
};

export function PipeTemplateDiagram({ w, h, points, templateWidth, maxHeight }: {
  w: number; h: number; points: Pt[]; templateWidth: number; maxHeight: number;
}) {
  const dk = new DK(w, h);
  const xs = points.map((p) => p.x), ys = points.map((p) => p.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const dataW = maxX - minX;
  const k = templateWidth / dataW;
  const baseModelY = minY;
  const dataH = maxY - baseModelY;
  const maxText = len(maxHeight);
  const maxSize = pts(maxText, "emphasis");
  const qSize = pts("270°", "label");
  const dimOffset = 18;
  const left = Math.max(16, qSize.width / 2 + 4);
  const right = dimOffset + maxSize.width / 2 + 8;
  const top = qSize.height + 10;
  const ordH = pts("0", "dimension").height;
  const bottom = 22 + ordH * 2 + 6 + 14;
  const area = { x: left, y: top, w: w - left - right, h: h - top - bottom };
  const sx = area.w / dataW;
  // PipeDiagram.verticalScale
  const fit = area.h / dataH;
  const sy = fit < sx ? fit : dataH * sx >= area.h * 0.45 ? sx : Math.min(fit, sx * 6);
  const drawnH = dataH * sy;
  const baseY = area.y + area.h / 2 + drawnH / 2;
  const P = (q: Pt) => pt(area.x + (q.x - minX) * sx, baseY - (q.y - baseModelY) * sy);
  const L = area.x, R = area.x + area.w;
  const screen = points.map(P);
  const first = screen[0]!, last = screen[screen.length - 1]!;
  void k;

  dk.g("fp-fade", d(1.4), () => {
    const region = Path.polyline(screen).line(pt(last.x, baseY)).line(pt(first.x, baseY)).close();
    dk.cutFill(region);
  });

  const labels = ["0°", "90°", "180°", "270°"];
  const labelY = area.y - 4;
  for (let q = 0; q <= 4; q++) {
    const x = L + (area.w * q) / 4;
    dk.g("rp-in", d(0.1 + q * 0.08), () => {
      dk.construction(Path.segment(pt(x, labelY + 2), pt(x, baseY + 6)));
      if (q < 4) dk.label(labels[q]!, pt(x, labelY), A.bottom, "label");
    });
  }

  dk.outline(Path.segment(pt(L, baseY), pt(R, baseY)), style.thin);
  dk.outline(Path.segment(pt(first.x, baseY), first), style.thin);
  dk.outline(Path.segment(pt(last.x, baseY), last), style.thin);

  dk.cutLine(Path.polyline(screen), false, "fp-draw");

  const hi = screen.reduce((a, b) => (b.y < a.y ? b : a));
  dk.g("rp-pop", d(1.8), () => {
    if (R - hi.x > 2) dk.hidden(Path.segment(hi, pt(R, hi.y)));
    dk.linearDimension(pt(R, baseY), pt(R, hi.y), dimOffset, maxText, { emphasis: true });
  });

  // drawRunningDimensions
  const lineY = baseY + 16;
  const width = R - L;
  dk.g("rp-in", d(2.0), () => {
    dk.stroke(Path.segment(pt(L, lineY), pt(R, lineY)), style.dimension, style.thin);
    dk.fill(Path.ellipse(L - 3, lineY - 3, 6, 6), style.dimension);
  });
  const texts = [0, 1, 2, 3].map((q) => (q === 0 ? "0" : fmt((templateWidth * q) / 4, 1)));
  for (let q = 0; q <= 4; q++) {
    const x = L + (width * q) / 4;
    dk.g("rp-in", d(2.1 + q * 0.12), () => {
      dk.stroke(Path.segment(pt(x, baseY + 2), pt(x, lineY + 4)), style.dimension, style.thin);
      if (q > 0) dk.arrowhead(pt(x, lineY), pt(1, 0), style.dimension, 5);
      if (q < 4) dk.label(texts[q]!, pt(x, lineY + 5), q === 0 ? A.topLeading : A.top, "dimension");
    });
  }
  dk.g("rp-in", d(2.7), () => {
    dk.label(`Wrap ${len(templateWidth)}`, pt(R, lineY + 5 + ordH + 2), A.topTrailing, "emphasis", style.ink);
  });

  if (Math.abs(sy / sx - 1) > 0.05) {
    dk.label("Height not to scale — the PDF template prints 1:1", pt(w / 2, h - 4), A.bottom, "note", undefined, false);
  }
  return dk.render();
}

// MARK: - HopperMath.truncatedCone + ConeDevelopment2D.swift + SectorPatternDrawing.swift

export function truncatedCone(topD: number, bottomD: number, height: number) {
  const rTop = topD / 2, rBottom = bottomD / 2;
  const diff = Math.abs(rTop - rBottom);
  const slant = Math.sqrt(height * height + diff * diff);
  const rL = Math.max(rTop, rBottom), rS = Math.min(rTop, rBottom);
  const outer = (slant * rL) / (rL - rS);
  const inner = (slant * rS) / (rL - rS);
  return { outer, inner, angle: (2 * Math.PI * rL) / outer };
}

export function ConeDiagram({ w, h, outer, inner, angle }: { w: number; h: number; outer: number; inner: number; angle: number }) {
  const dk = new DK(w, h);
  const mid = Math.PI / 2;
  const start = mid - angle / 2, end = mid + angle / 2;
  const sp = (r: number, th: number) => pt(r * Math.cos(th), r * Math.sin(th));

  // RingSectorPattern.extremes / bounds
  const cand = [sp(outer, start), sp(outer, end), sp(inner, start), sp(inner, end)];
  const quarter = Math.PI / 2;
  for (let q = Math.ceil(start / quarter); q * quarter <= end; q++) cand.push(sp(outer, q * quarter));
  let l = cand[0]!, r = cand[0]!, t = cand[0]!, b = cand[0]!;
  for (const p of cand) {
    if (p.x < l.x) l = p;
    if (p.x > r.x) r = p;
    if (p.y < t.y) t = p;
    if (p.y > b.y) b = p;
  }
  const sheet = { x: l.x, y: t.y, w: r.x - l.x, h: b.y - t.y };

  const angleText = `${fmt((angle * 180) / Math.PI, 1)}°`;
  const outerText = `R ${len(outer)}`;
  const innerText = `r ${len(inner)}`;
  const widthText = len(sheet.w);
  const heightText = len(sheet.h);

  // drawSectorPattern
  const right = textSize(heightText, "dimension").width + 30;
  const bottom = 42;
  const view = { x: 16, y: 16, w: Math.max(w - 16 - right, 20), h: Math.max(h - 16 - bottom, 20) };
  // DiagramFit(model: sheet ∪ origin, into: view, padding: 0)
  const mx = Math.min(sheet.x, 0), my = Math.min(sheet.y, 0);
  const mw = Math.max(sheet.x + sheet.w, 0.0001) - mx, mh = Math.max(sheet.y + sheet.h, 0.0001) - my;
  const scale = Math.min(view.w / mw, view.h / mh);
  const off = pt(view.x + (view.w - mw * scale) / 2 - mx * scale, view.y + (view.h - mh * scale) / 2 - my * scale);
  const F = (p: Pt) => pt(off.x + p.x * scale, off.y + p.y * scale);
  const c = F(pt(0, 0));
  const ro = outer * scale, ri = inner * scale;

  const sheetPath = new Path().arc(c, ro, start, end, false).arc(c, ri, end, start, true).close();

  dk.g("fp-fade", d(1.3), () => dk.cutFill(sheetPath));
  dk.g("rp-in", d(0.2), () => {
    const radial = new Path();
    for (const th of [start, end]) radial.move(c).line(F(sp(inner, th)));
    dk.construction(radial);
  });
  dk.cutLine(sheetPath, false, "fp-draw");
  dk.g("rp-pop", d(0.1), () => dk.centerMark(c));

  // Angle on the bisector
  const rm = (ro + Math.max(ri, 0)) / 2;
  dk.g("rp-pop", d(1.9), () => {
    dk.angularDimension(c, rm, start, end, angleText, { emphasis: true, labelRadius: rm });
  });

  // drawRadii
  const offA = Math.max(angle * 0.25, (28 * Math.PI) / 180);
  const oa = mid + offA;
  const osz = textSize(outerText, "emphasis");
  const asz0 = textSize(angleText, "emphasis");
  const angleBox = { x: c.x + rm * Math.cos(mid) - asz0.width / 2 - 4, y: c.y + rm * Math.sin(mid) - asz0.height / 2 - 2, w: asz0.width + 8, h: asz0.height + 4 };
  const box = (fr: number) => {
    const p = pt(c.x + ro * fr * Math.cos(oa), c.y + ro * fr * Math.sin(oa));
    return { x: p.x - osz.width / 2 - 3, y: p.y - osz.height / 2 - 1.5, w: osz.width + 6, h: osz.height + 3 };
  };
  const crosses = (rc: { x: number; y: number; w: number; h: number }, radius: number) => {
    const nx = Math.min(Math.max(c.x, rc.x), rc.x + rc.w), ny = Math.min(Math.max(c.y, rc.y), rc.y + rc.h);
    const near = Math.hypot(nx - c.x, ny - c.y);
    const far = Math.max(...[[rc.x, rc.y], [rc.x + rc.w, rc.y], [rc.x, rc.y + rc.h], [rc.x + rc.w, rc.y + rc.h]].map(([x, y]) => Math.hypot(x! - c.x, y! - c.y)));
    return near < radius + 3 && far > radius - 3;
  };
  const intersects = (p: { x: number; y: number; w: number; h: number }, q: typeof p) =>
    p.x < q.x + q.w && q.x < p.x + p.w && p.y < q.y + q.h && q.y < p.y + p.h;
  const ok = (fr: number) => {
    const rc = box(fr);
    return !(ri > 2 && crosses(rc, ri)) && !crosses(rc, ro) && !intersects(rc, angleBox);
  };
  const candidates = [0.55, (ro + ri) / 2 / ro, 0.45, 0.65, 0.75, Math.max(0.1, (ri * 0.5) / ro), 0.35];
  const bandFits = ri > 2 && ro - ri >= osz.width - 8;
  const frac = candidates.find(ok) ?? (bandFits ? (ro + ri) / 2 / ro : 0.55);
  dk.g("rp-in", d(1.5), () => dk.radiusDimension(c, ro, oa, outerText, true, frac));

  // Inner radius (ri < 60: arrow from outside onto the arc, label beyond it)
  dk.g("rp-in", d(1.7), () => {
    if (ri >= 60) {
      dk.radiusDimension(c, ri, mid - offA, innerText);
      return;
    }
    const tsz = textSize(innerText, "dimension");
    const asz = textSize(angleText, "emphasis");
    const rmi = (ro + ri) / 2;
    const angleRect = { x: c.x + rmi * Math.cos(mid) - asz.width / 2 - 6, y: c.y + rmi * Math.sin(mid) - asz.height / 2 - 4, w: asz.width + 12, h: asz.height + 8 };
    const textRect = (a: number, tt: number) => {
      const ux = Math.cos(a), uy = Math.sin(a);
      const p = pt(c.x + ux * (tt + 4), c.y + uy * (tt + 4));
      return { x: (ux >= 0 ? p.x : p.x - tsz.width) - 3, y: p.y - tsz.height / 2 - 1.5, w: tsz.width + 6, h: tsz.height + 3 };
    };
    const fits = (a: number, tt: number) => {
      const rc = textRect(a, tt);
      const corners = [[rc.x, rc.y], [rc.x + rc.w, rc.y], [rc.x, rc.y + rc.h], [rc.x + rc.w, rc.y + rc.h]];
      return corners.every(([x, y]) => Math.hypot(x! - c.x, y! - c.y) <= ro - 3) && !intersects(rc, angleRect);
    };
    const base = Math.min(offA, (50 * Math.PI) / 180);
    let ang = mid - base, lead = 34;
    search: for (const deg of [0, 40, 30, 22, 15, 10]) {
      const spread = deg === 0 ? base : (deg * Math.PI) / 180;
      if (spread > base) continue;
      for (let ll = 34; ll >= 8; ll -= 2) {
        if (fits(mid - spread, ri + ll)) {
          ang = mid - spread;
          lead = ll;
          break search;
        }
      }
    }
    const ux = Math.cos(ang), uy = Math.sin(ang);
    const tip = pt(c.x + ux * ri, c.y + uy * ri);
    const tail = pt(c.x + ux * (ri + lead), c.y + uy * (ri + lead));
    dk.stroke(Path.segment(tail, tip), style.dimension, style.thin);
    dk.arrowhead(tip, pt(-ux, -uy), style.dimension);
    dk.label(innerText, pt(tail.x + ux * 4, tail.y + uy * 4), ux >= 0 ? A.leading : A.trailing, "dimension");
  });

  // drawSheetSize
  dk.g("rp-in", d(2.2), () => {
    const y = sheet.y + sheet.h;
    const a = F(pt(l.x, y)), bb = F(pt(r.x, y));
    dk.featureExtension(F(l), a);
    dk.featureExtension(F(r), bb);
    dk.linearDimension(a, bb, 22, widthText);
  });
  dk.g("rp-in", d(2.4), () => {
    const x = sheet.x + sheet.w;
    const tp = F(pt(x, t.y)), bt = F(pt(x, b.y));
    dk.featureExtension(F(t), tp);
    dk.featureExtension(F(b), bt);
    dk.linearDimension(bt, tp, textSize(heightText, "dimension").width / 2 + 10, heightText);
  });
  return dk.render();
}

// MARK: - Features/Gates/Visualization/BarSpacingPreview2D.swift (+ DimHelp.fitted)

function fitted(dk: DK, a: Pt, b: Pt, offset: number, text: string, emphasis = false) {
  const role = emphasis ? "emphasis" : "dimension";
  const sz = textSize(text, role);
  const dx = b.x - a.x, dy = b.y - a.y;
  const L = Math.hypot(dx, dy);
  if (L <= 0.5) return;
  const ux = dx / L, uy = dy / L;
  const along = Math.abs(ux) * sz.width + Math.abs(uy) * sz.height;
  if (L >= along + 12) {
    dk.linearDimension(a, b, offset, text, { emphasis });
    return;
  }
  const nx = -uy, ny = ux;
  const a2 = pt(a.x + nx * offset, a.y + ny * offset);
  const b2 = pt(b.x + nx * offset, b.y + ny * offset);
  const color = emphasis ? style.cut : style.dimension;
  if (Math.abs(offset) > 1) {
    const s = offset >= 0 ? 1 : -1;
    dk.stroke(
      new Path()
        .move(pt(a.x + nx * 2 * s, a.y + ny * 2 * s)).line(pt(a2.x + nx * 4 * s, a2.y + ny * 4 * s))
        .move(pt(b.x + nx * 2 * s, b.y + ny * 2 * s)).line(pt(b2.x + nx * 4 * s, b2.y + ny * 4 * s)),
      color, style.thin, { opacity: 0.6 },
    );
  }
  const tail = 11;
  dk.stroke(Path.segment(pt(a2.x - ux * tail, a2.y - uy * tail), pt(b2.x + ux * tail, b2.y + uy * tail)), color, style.thin);
  dk.arrowhead(a2, pt(ux, uy), color);
  dk.arrowhead(b2, pt(-ux, -uy), color);
  if (L >= along + 4) {
    dk.label(text, pt((a2.x + b2.x) / 2, (a2.y + b2.y) / 2), A.center, role, color);
    return;
  }
  const gap = tail + 5 + along / 2;
  dk.label(text, pt(b2.x + ux * gap, b2.y + uy * gap), A.center, role, color);
}

export function BarSpacingDiagram({ w, h, innerWidth, barWidth, numberOfBars, spacing }: {
  w: number; h: number; innerWidth: number; barWidth: number; numberOfBars: number; spacing: number;
}) {
  const dk = new DK(w, h);
  const row = 20;
  const margin = 26;
  const topRows = numberOfBars >= 2 ? 2 : 1;
  const bottomRows = 2;
  const topY = 12 + row * topRows + 8;
  const bottomY = h - 12 - row * bottomRows - 6;
  const gateH = Math.max(bottomY - topY, 30);
  const drawW = w - margin * 2;
  const scale = drawW / innerWidth;
  const innerX = margin;
  const innerW = innerWidth * scale;
  const barW = Math.max(barWidth * scale, 1.5);
  const railH = Math.min(Math.max(gateH * 0.05, 4), 8);

  dk.g("rp-in", d(0), () => {
    dk.outline(Path.segment(pt(innerX, topY - 4), pt(innerX, topY + gateH + 4)), style.bold);
    dk.outline(Path.segment(pt(innerX + innerW, topY - 4), pt(innerX + innerW, topY + gateH + 4)), style.bold);
  });
  dk.g("rp-grow-x", d(0.15), () => dk.part(Path.rect(innerX, topY, innerW, railH), true));
  dk.g("rp-grow-x", d(0.25), () => dk.part(Path.rect(innerX, topY + gateH - railH, innerW, railH), true));

  const barX = (i: number) => innerX + (spacing + i * (spacing + barWidth)) * scale;
  for (let i = 0; i < numberOfBars; i++) {
    dk.g("rp-grow-y", d(0.45 + i * 0.07), () =>
      dk.part(Path.rect(barX(i), topY + railH, barW, gateH - 2 * railH)),
    );
  }
  const barTop = topY, barBottom = topY + gateH;
  const u = (v: number) => len(v);

  if (numberOfBars >= 2) {
    const x1 = barX(0) + barW, x2 = barX(1);
    dk.g("rp-pop", d(1.5), () => fitted(dk, pt(x1, barTop), pt(x2, barTop), -(row * 0.75), u(spacing), true));
    const c1 = barX(0) + barW / 2, c2 = barX(1) + barW / 2;
    dk.g("rp-in", d(1.75), () => fitted(dk, pt(c1, barTop), pt(c2, barTop), -(row * 1.75), `c/c ${u(spacing + barWidth)}`));
  }
  const y1 = row * 0.75;
  dk.g("rp-in", d(1.9), () => {
    if (numberOfBars >= 2) fitted(dk, pt(innerX, barBottom), pt(barX(0), barBottom), y1, `edge ${u(spacing)}`);
    const last = barX(numberOfBars - 1);
    const tip = pt(last + barW / 2, barBottom - railH - 10);
    const barText = `bar ${u(barWidth)}`;
    const toRight = last + barW / 2 + 26 + textSize(barText, "label").width + 8 <= w;
    if (toRight) dk.leader(tip, pt(last + barW / 2 + 26, barBottom + y1), barText);
    else {
      const th = textSize(barText, "label").height;
      dk.leader(tip, pt(Math.min(last + barW / 2 + 12, w - 8), barBottom + y1 - th / 2), barText, A.topTrailing);
    }
  });
  dk.g("rp-in", d(2.1), () => fitted(dk, pt(innerX, barBottom), pt(innerX + innerW, barBottom), row * 1.75 + 4, u(innerWidth)));
  dk.g("rp-pop", d(1.2), () =>
    dk.label(`${numberOfBars} bars`, pt(innerX + innerW / 2, topY + gateH / 2), A.center, "title"),
  );
  return dk.render();
}

// MARK: - CuttingOptimizerMath.optimize + CutLayoutPreview2D.swift (one bar, no numbers / stock dimension)

export type CutPiece = { length: number; quantity: number; label: string };
export type Bar = { barNumber: number; pieces: { length: number; label: string }[]; used: number; waste: number; wastePercent: number };

export function optimize(stock: number, kerf: number, pieces: CutPiece[]) {
  const all: { length: number; label: string }[] = [];
  for (const p of pieces) for (let i = 0; i < p.quantity; i++) all.push({ length: p.length, label: p.label });
  all.sort((a, b) => b.length - a.length);
  const bars: Bar[] = [];
  for (const p of all) {
    let placed = false;
    for (const bar of bars) {
      const needed = bar.pieces.length ? p.length + kerf : p.length;
      if (stock - bar.used >= needed) {
        bar.pieces.push(p);
        bar.used += needed;
        bar.waste = stock - bar.used;
        bar.wastePercent = (bar.waste / stock) * 100;
        placed = true;
        break;
      }
    }
    if (!placed)
      bars.push({ barNumber: bars.length + 1, pieces: [p], used: p.length, waste: stock - p.length, wastePercent: ((stock - p.length) / stock) * 100 });
  }
  return bars;
}

/** PiecePalette.color(index:) laid over partFill at 0.55 (optimizerPiece), as RGB. */
export function pieceTone(index: number) {
  const hues = [0.08, 0.58, 0.36, 0.75, 0.14, 0.95];
  const hh = hues[((index % 6) + 6) % 6]! * 6, s = 0.35, v = 0.8;
  const i = Math.floor(hh) % 6, fr = hh - Math.floor(hh);
  const p = v * (1 - s), q = v * (1 - s * fr), t = v * (1 - s * (1 - fr));
  const rgb = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][i]!;
  const base = 56 / 255;
  return `rgb(${rgb.map((c) => Math.round((c * 0.55 + base * 0.45) * 255)).join(" ")})`;
}

export function CutBarDiagram({ w, h = 34, bar, stock, kerf, numberOf, delay = 0 }: {
  w: number; h?: number; bar: Bar; stock: number; kerf: number; numberOf: (p: { length: number; label: string }) => number; delay?: number;
}) {
  const dk = new DK(w, h);
  const x0 = 1, barW = w - 2, y = 1, rowH = h - 2;
  const scale = barW / stock;
  const midY = y + rowH / 2;
  let x = x0;
  bar.pieces.forEach((piece, j) => {
    const pw = Math.max(piece.length * scale, 1);
    const num = numberOf(piece);
    const rx = x;
    dk.g("rp-grow-x", d(delay + j * 0.18), () => {
      const rect = Path.rect(rx, y, pw, rowH);
      dk.fill(rect, style.partFill);
      dk.fill(rect, pieceTone(num - 1));
      dk.stroke(rect, style.ink, style.thin);
      const lenT = fmt(piece.length, 0);
      const lenW = textSize(lenT, "dimension").width;
      const tag = `#${num}`;
      const tagW = textSize(tag, "note").width;
      if (pw >= lenW + tagW + 16) {
        dk.label(tag, pt(rx + 4, midY), A.leading, "note", undefined, false);
        const free = rx + tagW + 8;
        dk.label(lenT, pt((free + rx + pw) / 2, midY), A.center, "dimension", style.ink, false);
      } else if (pw >= lenW + 6) {
        dk.label(lenT, pt(rx + pw / 2, midY), A.center, "dimension", style.ink, false);
      }
    });
    x += pw;
    const isLast = j === bar.pieces.length - 1;
    if (!isLast || bar.waste > 0.5) {
      const k = kerf * scale;
      const kx = x + k / 2;
      dk.g("rp-in", d(delay + j * 0.18 + 0.25), () =>
        dk.stroke(Path.segment(pt(kx, y - 2), pt(kx, y + rowH + 2)), style.ink, Math.max(style.thin * 1.4, Math.min(k, 3))),
      );
      x += k;
    }
  });
  const ww = Math.max(x0 + barW - x, 0);
  if (ww > 0.5) {
    const wx = x;
    dk.g("rp-in", d(delay + bar.pieces.length * 0.18 + 0.2), () => {
      const id = `fp-clip-${bar.barNumber}-${Math.round(wx)}`;
      // optimizerWaste: 45° hatch clipped to the offcut, hidden-line outline.
      const hatch = new Path();
      for (let hx = wx - rowH; hx < wx + ww; hx += 5) hatch.move(pt(hx, y + rowH)).line(pt(hx + rowH, y));
      dk.raw(
        <g key={id}>
          <clipPath id={id}>
            <rect x={wx} y={y} width={ww} height={rowH} />
          </clipPath>
          <path d={hatch.toString()} clipPath={`url(#${id})`} stroke={style.ink} strokeOpacity={0.25} strokeWidth={0.6} fill="none" />
        </g>,
      );
      dk.hidden(Path.rect(wx, y, ww, rowH));
      const cands = [`${fmt(bar.waste, 0)} mm`, fmt(bar.waste, 0)];
      const text = cands.find((t) => textSize(t, "note").width + 8 < ww);
      if (text) dk.label(text, pt(wx + ww / 2, midY), A.center, "note");
    });
  }
  return dk.render();
}
