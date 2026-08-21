import type { CSSProperties } from "react";

/**
 * Hero illustration — "the stack".
 *
 * Three plates of interface sit at hard offsets from one another, the way sheets
 * of paper do on a desk. There are no shadows anywhere on this site, so depth is
 * carried entirely by two things instead: focus and speed. The back plates are
 * blurred and drift slowly, the front plate is crisp and drifts quickly, and the
 * parallax between them is what reads as volume. Two satellite chips rack in and
 * out of focus on their own cycles so the composition never settles.
 *
 * Everything is drawn with square corners, 1px strokes and flat fills, matching
 * the page around it. All motion is suppressed by the reduced-motion rule in
 * globals.css.
 */

const v = (vars: Record<string, string>) => vars as CSSProperties;

export function HeroIllustration() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 600 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="hero-chart-clip">
            <rect x="167" y="231" width="288" height="148" />
          </clipPath>
          <clipPath id="hero-plate-a">
            <rect x="80" y="105" width="390" height="290" />
          </clipPath>
          <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7ccf00" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#7ccf00" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ── Depth 0 — lime bloom, heavily out of focus ─────────────────── */}
        <g style={{ filter: "blur(46px)" }}>
          <ellipse
            cx="430"
            cy="165"
            rx="150"
            ry="120"
            fill="#7ccf00"
            className="breathe"
            style={v({ "--dur": "13s" })}
          />
          <ellipse
            cx="150"
            cy="420"
            rx="110"
            ry="90"
            fill="#0b0b0c"
            opacity="0.5"
            className="breathe"
            style={v({ "--dur": "17s", "--delay": "-4s" })}
          />
        </g>

        {/* ── Depth 3 — back plate ───────────────────────────────────────── */}
        <g
          className="drift"
          style={{ filter: "blur(3.5px)", ...v({ "--dur": "15s", "--dy": "-16px", "--dx": "6px" }) }}
          opacity="0.8"
        >
          <rect
            x="150"
            y="45"
            width="390"
            height="290"
            fill="#f8f8f6"
            stroke="#dcdcd6"
          />
          <rect x="150" y="45" width="390" height="30" fill="#eeeeea" />
          <rect x="172" y="98" width="120" height="9" fill="#dcdcd6" />
          <rect x="172" y="118" width="210" height="7" fill="#e7e7e2" />
          <rect x="172" y="134" width="170" height="7" fill="#e7e7e2" />
        </g>

        {/* ── Depth 2 — middle plate ─────────────────────────────────────── */}
        <g
          className="drift"
          style={{ filter: "blur(1.4px)", ...v({ "--dur": "12s", "--dy": "-11px", "--dx": "-4px" }) }}
          opacity="0.95"
        >
          <rect
            x="115"
            y="75"
            width="390"
            height="290"
            fill="#ffffff"
            stroke="#e0e0da"
          />
          <rect x="115" y="75" width="390" height="30" fill="#f8f8f6" />
          <line x1="115" y1="105" x2="505" y2="105" stroke="#e0e0da" />
          <rect x="137" y="86" width="46" height="8" fill="#e4e4e0" />
          <rect x="463" y="84" width="24" height="12" fill="#e4e4e0" />
        </g>

        {/* ── Depth 1 — the plate in focus ───────────────────────────────── */}
        <g className="drift" style={v({ "--dur": "9.5s", "--dy": "-7px" })}>
          <rect
            x="80"
            y="105"
            width="390"
            height="290"
            fill="#ffffff"
            stroke="#c9c9c2"
          />

          {/* Title bar */}
          <rect x="80" y="105" width="390" height="34" fill="#fbfbfa" />
          <line x1="80" y1="139" x2="470" y2="139" stroke="#e4e4e0" />
          <rect x="96" y="118" width="8" height="8" fill="#e0e0da" />
          <rect x="110" y="118" width="8" height="8" fill="#e0e0da" />
          <rect x="124" y="118" width="8" height="8" fill="#e0e0da" />
          <rect x="404" y="115" width="50" height="15" fill="#7ccf00" />
          <rect x="410" y="120" width="30" height="5" fill="#2c4a05" />

          {/* Sidebar */}
          <line x1="152" y1="139" x2="152" y2="395" stroke="#e4e4e0" />
          <rect x="94" y="153" width="44" height="11" fill="#0b0b0c" />
          <rect x="94" y="174" width="36" height="7" fill="#dcdcd6" />
          <rect x="94" y="190" width="42" height="7" fill="#dcdcd6" />
          <rect x="94" y="206" width="30" height="7" fill="#e7e7e2" />
          <line x1="94" y1="228" x2="138" y2="228" stroke="#e7e7e2" />
          <rect x="94" y="242" width="38" height="7" fill="#e7e7e2" />
          <rect x="94" y="258" width="34" height="7" fill="#e7e7e2" />

          {/* Two metric cells, sharing a hairline */}
          <rect
            x="167"
            y="153"
            width="143"
            height="62"
            fill="#f8f8f6"
            stroke="#e4e4e0"
          />
          <rect x="181" y="167" width="46" height="6" fill="#c9c9c2" />
          <rect x="181" y="183" width="62" height="14" fill="#0b0b0c" />
          <rect
            x="311"
            y="153"
            width="143"
            height="62"
            fill="#f8f8f6"
            stroke="#e4e4e0"
          />
          <rect x="325" y="167" width="38" height="6" fill="#c9c9c2" />
          <rect x="325" y="183" width="52" height="14" fill="#0b0b0c" />
          <rect x="385" y="186" width="20" height="8" fill="#7ccf00" />

          {/* Chart cell */}
          <rect
            x="167"
            y="231"
            width="288"
            height="148"
            fill="#ffffff"
            stroke="#e4e4e0"
          />

          <g clipPath="url(#hero-chart-clip)">
            {/* Gridlines */}
            <line x1="167" y1="268" x2="455" y2="268" stroke="#f1f1ee" />
            <line x1="167" y1="305" x2="455" y2="305" stroke="#f1f1ee" />
            <line x1="167" y1="342" x2="455" y2="342" stroke="#f1f1ee" />

            {/* Bars rise from the baseline, each a beat behind the last */}
            {[
              { x: 185, h: 44 },
              { x: 215, h: 68 },
              { x: 245, h: 52 },
              { x: 275, h: 86 },
              { x: 305, h: 72 },
              { x: 335, h: 104 },
              { x: 365, h: 88 },
              { x: 395, h: 118 },
              { x: 425, h: 96 },
            ].map((bar, i) => (
              <rect
                key={bar.x}
                x={bar.x}
                y={379 - bar.h}
                width="16"
                height={bar.h}
                fill={i === 7 ? "#7ccf00" : "#eeeeea"}
                style={{
                  transformOrigin: `${bar.x + 8}px 379px`,
                  animation: `bar-rise 4.5s cubic-bezier(0.22,1,0.36,1) ${
                    i * 0.09
                  }s infinite`,
                }}
              />
            ))}

            {/* Trend line, drawn on a loop */}
            <path
              d="M175 344 L205 322 L235 332 L265 300 L295 312 L325 276 L355 292 L385 254 L415 268 L447 240"
              stroke="#0b0b0c"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              style={{
                strokeDasharray: 420,
                animation: "trace 6s cubic-bezier(0.4,0,0.2,1) infinite",
                ...v({ "--len": "420" }),
              }}
            />

            {/* A lime sweep passes over the plot */}
            <rect
              x="167"
              y="231"
              width="288"
              height="3"
              fill="#7ccf00"
              opacity="0.55"
              style={{ animation: "scan 6.5s linear infinite" }}
            />
          </g>

          {/* Corner ticks — the frame motif, restated at illustration scale */}
          <g stroke="#0b0b0c" strokeWidth="1.5">
            <path d="M80 119 L80 105 L94 105" />
            <path d="M456 105 L470 105 L470 119" />
            <path d="M470 381 L470 395 L456 395" />
            <path d="M94 395 L80 395 L80 381" />
          </g>
        </g>

        {/* ── Connector, running from the plate to the front chip ────────── */}
        <path
          d="M470 300 L505 300 L505 372 L512 372"
          stroke="#c9c9c2"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          fill="none"
          style={{ animation: "dash-run 1.6s linear infinite" }}
        />
        <rect x="466" y="296" width="8" height="8" fill="#0b0b0c" />

        {/* ── Depth 0 — front chip, the crispest thing on the canvas ─────── */}
        <g className="drift" style={v({ "--dur": "7s", "--dy": "-13px", "--delay": "-2s" })}>
          <rect
            x="352"
            y="392"
            width="212"
            height="104"
            fill="#ffffff"
            stroke="#0b0b0c"
          />
          <rect x="352" y="392" width="212" height="4" fill="#7ccf00" />
          <circle cx="374" cy="422" r="5" fill="#7ccf00" />
          <circle
            cx="374"
            cy="422"
            r="5"
            fill="none"
            stroke="#7ccf00"
            className="breathe"
            style={v({ "--dur": "2.6s" })}
          />
          <rect x="390" y="417" width="74" height="9" fill="#0b0b0c" />
          <rect x="374" y="442" width="150" height="7" fill="#e4e4e0" />
          <rect x="374" y="456" width="110" height="7" fill="#eeeeea" />
          <rect x="374" y="472" width="58" height="12" fill="#0b0b0c" />
          <rect
            x="440"
            y="472"
            width="12"
            height="12"
            fill="#0b0b0c"
            style={{ animation: "blink 1.1s steps(1) infinite" }}
          />
        </g>

        {/* ── Satellites — these hunt for focus and lose it again ────────── */}
        <g
          className="rack-focus"
          style={v({ "--dur": "8s", "--delay": "-1s" })}
        >
          <rect
            x="22"
            y="286"
            width="148"
            height="70"
            fill="#ffffff"
            stroke="#0b0b0c"
          />
          <rect x="38" y="304" width="40" height="8" fill="#7ccf00" />
          <rect x="38" y="322" width="100" height="7" fill="#e4e4e0" />
          <rect x="38" y="336" width="72" height="7" fill="#eeeeea" />
        </g>

        <g
          className="rack-focus"
          style={v({ "--dur": "9.5s", "--delay": "-5s" })}
        >
          <rect
            x="452"
            y="42"
            width="126"
            height="58"
            fill="#0b0b0c"
            stroke="#0b0b0c"
          />
          <rect x="466" y="58" width="52" height="7" fill="#7ccf00" />
          <rect x="466" y="72" width="84" height="6" fill="#4a4a52" />
          <rect x="466" y="84" width="60" height="6" fill="#33333a" />
        </g>

        {/* ── Loose marks, for air ───────────────────────────────────────── */}
        <g className="drift" style={v({ "--dur": "11s", "--dy": "-18px" })}>
          <rect x="536" y="300" width="10" height="10" fill="#7ccf00" />
          <rect x="30" y="122" width="8" height="8" fill="#0b0b0c" />
          <path d="M562 236 L570 236 M566 232 L566 240" stroke="#c9c9c2" strokeWidth="1.5" />
          <path d="M46 486 L54 486 M50 482 L50 490" stroke="#c9c9c2" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}
