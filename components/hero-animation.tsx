export function HeroAnimation() {
  return (
    <div className="w-full max-w-md mx-auto lg:max-w-full">
      <svg
        viewBox="0 0 520 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-hidden="true"
      >
        <defs>
          <filter id="s" x="-8%" y="-6%" width="116%" height="124%">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="8"
              floodColor="#18181b"
              floodOpacity="0.07"
            />
          </filter>
          <filter id="sl" x="-6%" y="-4%" width="112%" height="120%">
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="16"
              floodColor="#18181b"
              floodOpacity="0.09"
            />
          </filter>
        </defs>

        {/* ── Dashboard (main, center) ── */}
        <g style={{ animation: "hero-float 7s ease-in-out infinite" }}>
          <rect
            x="60"
            y="60"
            width="340"
            height="290"
            rx="16"
            fill="white"
            filter="url(#sl)"
          />

          {/* Title bar */}
          <circle cx="80" cy="80" r="4.5" fill="#e4e4e7" />
          <circle cx="94" cy="80" r="4.5" fill="#e4e4e7" />
          <circle cx="108" cy="80" r="4.5" fill="#e4e4e7" />
          <rect x="175" y="73" width="55" height="14" rx="5" fill="#f4f4f5" />
          <rect x="234" y="73" width="55" height="14" rx="5" fill="white" stroke="#f4f4f5" strokeWidth="1" />
          <line x1="60" y1="96" x2="400" y2="96" stroke="#f4f4f5" />

          {/* Sidebar */}
          <line x1="114" y1="96" x2="114" y2="350" stroke="#f4f4f5" />
          <rect x="68" y="108" width="38" height="24" rx="7" fill="#18181b" />
          <rect x="76" y="116" width="22" height="8" rx="3" fill="white" />
          <rect x="76" y="144" width="22" height="8" rx="3" fill="#d4d4d8" />
          <rect x="76" y="164" width="22" height="8" rx="3" fill="#d4d4d8" />
          <rect x="76" y="184" width="22" height="8" rx="3" fill="#e4e4e7" />
          <circle cx="87" cy="330" r="11" fill="#f4f4f5" />
          <circle cx="87" cy="330" r="7" fill="#e4e4e7" />

          {/* Metric cards */}
          <rect
            x="124"
            y="106"
            width="85"
            height="54"
            rx="10"
            fill="#fafafa"
          />
          <rect x="134" y="118" width="40" height="10" rx="4" fill="#27272a" />
          <rect x="134" y="133" width="58" height="5" rx="2" fill="#d4d4d8" />
          <rect
            x="134"
            y="143"
            width="26"
            height="5"
            rx="2"
            fill="#22c55e"
            opacity="0.55"
          />

          <rect
            x="217"
            y="106"
            width="85"
            height="54"
            rx="10"
            fill="#fafafa"
          />
          <rect x="227" y="118" width="45" height="10" rx="4" fill="#27272a" />
          <rect x="227" y="133" width="58" height="5" rx="2" fill="#d4d4d8" />
          <rect
            x="227"
            y="143"
            width="20"
            height="5"
            rx="2"
            fill="#71717a"
            opacity="0.45"
          />

          <rect
            x="310"
            y="106"
            width="80"
            height="54"
            rx="10"
            fill="#fafafa"
          />
          <rect x="320" y="118" width="36" height="10" rx="4" fill="#27272a" />
          <rect x="320" y="133" width="52" height="5" rx="2" fill="#d4d4d8" />
          <rect
            x="320"
            y="143"
            width="30"
            height="5"
            rx="2"
            fill="#f59e0b"
            opacity="0.45"
          />

          {/* Chart area */}
          <rect
            x="124"
            y="170"
            width="266"
            height="112"
            rx="10"
            fill="#fafafa"
          />
          <rect x="134" y="180" width="50" height="6" rx="3" fill="#d4d4d8" />
          {/* Grid lines */}
          <line
            x1="134"
            y1="200"
            x2="380"
            y2="200"
            stroke="#f4f4f5"
            strokeWidth="0.5"
          />
          <line
            x1="134"
            y1="224"
            x2="380"
            y2="224"
            stroke="#f4f4f5"
            strokeWidth="0.5"
          />
          <line
            x1="134"
            y1="248"
            x2="380"
            y2="248"
            stroke="#f4f4f5"
            strokeWidth="0.5"
          />
          {/* Chart bars */}
          <rect
            x="144"
            y="242"
            width="17"
            height="28"
            rx="4"
            fill="#e4e4e7"
          />
          <rect
            x="168"
            y="228"
            width="17"
            height="42"
            rx="4"
            fill="#d4d4d8"
          />
          <rect
            x="192"
            y="214"
            width="17"
            height="56"
            rx="4"
            fill="#a1a1aa"
          />
          <rect
            x="216"
            y="232"
            width="17"
            height="38"
            rx="4"
            fill="#d4d4d8"
          />
          <rect
            x="240"
            y="204"
            width="17"
            height="66"
            rx="4"
            fill="#71717a"
          />
          <rect
            x="264"
            y="218"
            width="17"
            height="52"
            rx="4"
            fill="#a1a1aa"
          />
          <rect
            x="288"
            y="198"
            width="17"
            height="72"
            rx="4"
            fill="#52525b"
          />
          <rect
            x="312"
            y="210"
            width="17"
            height="60"
            rx="4"
            fill="#a1a1aa"
          />
          <rect
            x="336"
            y="222"
            width="17"
            height="48"
            rx="4"
            fill="#d4d4d8"
          />
          <rect
            x="360"
            y="236"
            width="17"
            height="34"
            rx="4"
            fill="#e4e4e7"
          />

          {/* Table rows */}
          <rect
            x="124"
            y="292"
            width="266"
            height="16"
            rx="5"
            fill="#fafafa"
          />
          <rect x="134" y="296" width="65" height="8" rx="3" fill="#e4e4e7" />
          <rect x="225" y="296" width="38" height="8" rx="3" fill="#f4f4f5" />
          <rect x="366" y="296" width="16" height="8" rx="3" fill="#d4d4d8" />

          <rect x="134" y="316" width="80" height="8" rx="3" fill="#e4e4e7" />
          <rect x="240" y="316" width="30" height="8" rx="3" fill="#f4f4f5" />
          <rect x="366" y="316" width="16" height="8" rx="3" fill="#e4e4e7" />

          <rect
            x="124"
            y="332"
            width="266"
            height="16"
            rx="5"
            fill="#fafafa"
          />
          <rect x="134" y="336" width="55" height="8" rx="3" fill="#e4e4e7" />
          <rect x="215" y="336" width="45" height="8" rx="3" fill="#f4f4f5" />
          <rect x="366" y="336" width="16" height="8" rx="3" fill="#d4d4d8" />
        </g>

        {/* ── Terminal (dark, top-left, overlapping) ── */}
        <g
          style={{ animation: "hero-float 6s ease-in-out 0.5s infinite" }}
        >
          <rect
            x="0"
            y="15"
            width="195"
            height="118"
            rx="12"
            fill="#18181b"
            filter="url(#s)"
          />
          {/* Traffic lights */}
          <circle cx="16" cy="33" r="3.5" fill="#ef4444" opacity="0.8" />
          <circle cx="27" cy="33" r="3.5" fill="#eab308" opacity="0.8" />
          <circle cx="38" cy="33" r="3.5" fill="#22c55e" opacity="0.8" />
          <text
            x="75"
            y="37"
            fontSize="8"
            fill="#52525b"
            fontFamily="ui-monospace, monospace"
          >
            terminal
          </text>
          {/* Commands */}
          <rect
            x="14"
            y="52"
            width="8"
            height="5"
            rx="1.5"
            fill="#a1a1aa"
          />
          <rect
            x="26"
            y="52"
            width="90"
            height="5"
            rx="1.5"
            fill="#71717a"
          />
          <rect
            x="14"
            y="65"
            width="105"
            height="4"
            rx="1.5"
            fill="#3f3f46"
          />
          <rect
            x="14"
            y="74"
            width="78"
            height="4"
            rx="1.5"
            fill="#3f3f46"
          />
          {/* Success */}
          <circle cx="18" cy="90" r="3.5" fill="#22c55e" opacity="0.7" />
          <rect
            x="26"
            y="87"
            width="100"
            height="5"
            rx="1.5"
            fill="#52525b"
          />
          {/* Prompt + blinking cursor */}
          <rect
            x="14"
            y="102"
            width="8"
            height="5"
            rx="1.5"
            fill="#a1a1aa"
          />
          <rect x="26" y="100" width="2" height="10" rx="1" fill="#a1a1aa">
            <animate
              attributeName="opacity"
              values="0.8;0;0.8"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </rect>
        </g>

        {/* ── Mobile phone (bottom-right, overlapping) ── */}
        <g style={{ animation: "hero-float 8s ease-in-out 1s infinite" }}>
          <rect
            x="358"
            y="215"
            width="128"
            height="228"
            rx="22"
            fill="white"
            stroke="#d4d4d8"
            strokeWidth="1.5"
            filter="url(#s)"
          />
          {/* Dynamic island */}
          <rect x="401" y="224" width="42" height="11" rx="5.5" fill="#18181b" />
          {/* Status bar hints */}
          <rect
            x="372"
            y="226"
            width="18"
            height="5"
            rx="2"
            fill="#e4e4e7"
          />
          <rect
            x="458"
            y="226"
            width="18"
            height="5"
            rx="2"
            fill="#e4e4e7"
          />

          {/* App card */}
          <rect
            x="372"
            y="248"
            width="100"
            height="52"
            rx="10"
            fill="#fafafa"
          />
          <rect x="382" y="258" width="38" height="10" rx="4" fill="#27272a" />
          <rect x="382" y="273" width="62" height="5" rx="2" fill="#d4d4d8" />
          <rect
            x="382"
            y="283"
            width="24"
            height="5"
            rx="2"
            fill="#22c55e"
            opacity="0.5"
          />

          {/* Mini chart */}
          <rect
            x="372"
            y="310"
            width="100"
            height="62"
            rx="10"
            fill="#fafafa"
          />
          <rect x="382" y="319" width="32" height="5" rx="2" fill="#d4d4d8" />
          <rect
            x="384"
            y="348"
            width="9"
            height="15"
            rx="2.5"
            fill="#e4e4e7"
          />
          <rect
            x="397"
            y="340"
            width="9"
            height="23"
            rx="2.5"
            fill="#d4d4d8"
          />
          <rect
            x="410"
            y="334"
            width="9"
            height="29"
            rx="2.5"
            fill="#a1a1aa"
          />
          <rect
            x="423"
            y="342"
            width="9"
            height="21"
            rx="2.5"
            fill="#d4d4d8"
          />
          <rect
            x="436"
            y="330"
            width="9"
            height="33"
            rx="2.5"
            fill="#71717a"
          />
          <rect
            x="449"
            y="338"
            width="9"
            height="25"
            rx="2.5"
            fill="#d4d4d8"
          />

          {/* List items */}
          <rect
            x="372"
            y="382"
            width="100"
            height="12"
            rx="4"
            fill="#fafafa"
          />
          <rect x="380" y="385" width="55" height="6" rx="2" fill="#e4e4e7" />
          <rect
            x="372"
            y="399"
            width="100"
            height="12"
            rx="4"
            fill="#fafafa"
          />
          <rect x="380" y="402" width="65" height="6" rx="2" fill="#e4e4e7" />

          {/* Bottom nav */}
          <circle cx="397" cy="425" r="3.5" fill="#18181b" />
          <circle cx="422" cy="425" r="3.5" fill="#d4d4d8" />
          <circle cx="447" cy="425" r="3.5" fill="#d4d4d8" />
          {/* Home indicator */}
          <rect
            x="400"
            y="436"
            width="44"
            height="3.5"
            rx="1.75"
            fill="#d4d4d8"
          />
        </g>

        {/* ── Floating code tokens ── */}
        <g style={{ animation: "hero-float 5s ease-in-out 1.5s infinite" }}>
          <rect
            x="420"
            y="68"
            width="56"
            height="30"
            rx="10"
            fill="white"
            filter="url(#s)"
          />
          <text
            x="431"
            y="88"
            fontSize="14"
            fill="#71717a"
            fontFamily="ui-monospace, monospace"
            fontWeight="600"
          >
            &lt;/&gt;
          </text>
        </g>
        <g style={{ animation: "hero-float 6s ease-in-out 2.2s infinite" }}>
          <rect
            x="0"
            y="320"
            width="44"
            height="30"
            rx="10"
            fill="white"
            filter="url(#s)"
          />
          <text
            x="9"
            y="340"
            fontSize="14"
            fill="#a1a1aa"
            fontFamily="ui-monospace, monospace"
            fontWeight="600"
          >
            {"{ }"}
          </text>
        </g>

        {/* ── Notification badge ── */}
        <g style={{ animation: "hero-float 7s ease-in-out infinite" }}>
          <circle cx="386" cy="68" r="7" fill="#ef4444" opacity="0.85">
            <animate
              attributeName="r"
              values="7;8;7"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <text
            x="383"
            y="71.5"
            fontSize="8"
            fill="white"
            fontFamily="system-ui, sans-serif"
            fontWeight="700"
          >
            3
          </text>
        </g>

        {/* ── Sparkle stars ── */}
        <path
          d="M 310 38 L 313 48 L 323 51 L 313 54 L 310 64 L 307 54 L 297 51 L 307 48 Z"
          fill="#d4d4d8"
          className="hero-sparkle"
        />
        <path
          d="M 505 175 L 507 181 L 513 183 L 507 185 L 505 191 L 503 185 L 497 183 L 503 181 Z"
          fill="#e4e4e7"
          className="hero-sparkle"
          style={{ animationDelay: "1.5s" }}
        />
        <path
          d="M 215 450 L 217 454 L 221 456 L 217 458 L 215 462 L 213 458 L 209 456 L 213 454 Z"
          fill="#e4e4e7"
          className="hero-sparkle"
          style={{ animationDelay: "2.2s" }}
        />

        {/* ── Ambient dots ── */}
        <circle
          cx="250"
          cy="12"
          r="2.5"
          fill="#d4d4d8"
          style={{ animation: "hero-float 5s ease-in-out 0.3s infinite" }}
        />
        <circle
          cx="512"
          cy="300"
          r="2"
          fill="#e4e4e7"
          style={{ animation: "hero-float 6s ease-in-out 1.2s infinite" }}
        />
        <circle
          cx="12"
          cy="230"
          r="2"
          fill="#d4d4d8"
          style={{ animation: "hero-float 4.5s ease-in-out 0.8s infinite" }}
        />
        <circle
          cx="495"
          cy="440"
          r="2"
          fill="#e4e4e7"
          style={{ animation: "hero-float 5.5s ease-in-out 1.8s infinite" }}
        />
      </svg>
    </div>
  );
}
