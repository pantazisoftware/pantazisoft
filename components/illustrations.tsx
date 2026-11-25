/**
 * Flat interface illustrations for the home page: services and process
 * steps. Drawn as small UI scenes in the site's own palette (paper cards,
 * hairlines, ink and lime) so they read as one set with the screenshots.
 * Decorative only: every one is aria-hidden and carries no text, so nothing
 * needs translating.
 */

type Art = { className?: string };

function Frame({ children, className }: Art & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 320 200"
      aria-hidden="true"
      fill="none"
      className={className}
    >
      {children}
    </svg>
  );
}

/** A window with traffic-light dots and a hairline under its title bar. */
function Window({
  x,
  y,
  w,
  h,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
}) {
  return (
    <>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="12"
        className="fill-paper stroke-line"
        strokeWidth="1.5"
      />
      <circle cx={x + 14} cy={y + 13} r="3" className="fill-line" />
      <circle cx={x + 24} cy={y + 13} r="3" className="fill-line" />
      <circle cx={x + 34} cy={y + 13} r="3" className="fill-line" />
      <path
        d={`M${x} ${y + 26}H${x + w}`}
        className="stroke-line"
        strokeWidth="1.5"
      />
    </>
  );
}

function Bar({
  x,
  y,
  w,
  className = "fill-line",
  h = 6,
}: {
  x: number;
  y: number;
  w: number;
  className?: string;
  h?: number;
}) {
  return (
    <rect x={x} y={y} width={w} height={h} rx={h / 2} className={className} />
  );
}

function Check({ cx, cy, r = 7 }: { cx: number; cy: number; r?: number }) {
  return (
    <>
      <circle cx={cx} cy={cy} r={r} className="fill-lime" />
      <path
        d={`M${cx - r * 0.4} ${cy}l${r * 0.28} ${r * 0.3} ${r * 0.52}-${r * 0.6}`}
        className="stroke-paper"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

/* ── Services ──────────────────────────────────────────────────────────── */

/** MVP: a launch chart climbing, with a "live" tag pinned to its peak. */
export function MvpArt({ className }: Art) {
  return (
    <Frame className={className}>
      <Window x={36} y={30} w={248} h={146} />
      {[88, 116, 144].map((y) => (
        <path
          key={y}
          d={`M54 ${y}H266`}
          className="stroke-line"
          strokeDasharray="3 5"
        />
      ))}
      <path
        d="M54 160 94 146l34 6 34-28 36 6 34-34 34-24V164H54Z"
        className="fill-lime"
        fillOpacity=".12"
      />
      <path
        d="M54 160 94 146l34 6 34-28 36 6 34-34 34-24"
        className="stroke-lime"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="266" cy="72" r="6" className="fill-ink" />
      <circle
        cx="266"
        cy="72"
        r="12"
        className="stroke-ink"
        strokeOpacity=".15"
        strokeWidth="6"
      />
      <rect
        x="172"
        y="44"
        width="72"
        height="22"
        rx="11"
        className="fill-ink"
      />
      <circle cx="185" cy="55" r="4" className="fill-lime" />
      <Bar x={195} y={52} w={38} className="fill-paper" />
    </Frame>
  );
}

/** Custom applications: a dashboard with a sidebar, KPI tiles and a table. */
export function DashboardArt({ className }: Art) {
  return (
    <Frame className={className}>
      <Window x={30} y={22} w={260} h={160} />
      <path d="M92 48V182" className="stroke-line" strokeWidth="1.5" />
      <Bar x={42} y={60} w={38} className="fill-ink" />
      {[78, 94, 110, 126].map((y) => (
        <Bar key={y} x={42} y={y} w={y === 78 ? 30 : 36} />
      ))}
      {[104, 166, 228].map((x, i) => (
        <g key={x}>
          <rect
            x={x}
            y={58}
            width={52}
            height={40}
            rx="8"
            className="fill-soft"
          />
          <Bar x={x + 8} y={66} w={22} h={5} />
          <Bar
            x={x + 8}
            y={80}
            w={i === 1 ? 30 : 26}
            h={9}
            className="fill-ink"
          />
        </g>
      ))}
      {[112, 132, 152].map((y, i) => (
        <g key={y}>
          <Bar x={104} y={y} w={64} />
          <Bar x={182} y={y} w={40} />
          <rect
            x={240}
            y={y - 3}
            width={36}
            height={12}
            rx="6"
            className={i === 1 ? "fill-line" : "fill-lime"}
            fillOpacity={i === 1 ? 1 : 0.35}
          />
        </g>
      ))}
    </Frame>
  );
}

/** Mobile: two phones, one with a list and one with a product screen. */
export function MobileArt({ className }: Art) {
  const phone = (x: number, y: number) => (
    <>
      <rect x={x} y={y} width="92" height="170" rx="18" className="fill-ink" />
      <rect
        x={x + 5}
        y={y + 5}
        width="82"
        height="160"
        rx="14"
        className="fill-paper"
      />
      <rect
        x={x + 34}
        y={y + 10}
        width="24"
        height="6"
        rx="3"
        className="fill-ink"
      />
    </>
  );
  return (
    <Frame className={className}>
      <g transform="rotate(-6 128 110)">
        {phone(82, 22)}
        {[48, 80, 112, 144].map((y, i) => (
          <g key={y}>
            <rect
              x={94}
              y={y}
              width={22}
              height={22}
              rx="6"
              className={i === 0 ? "fill-lime" : "fill-soft"}
            />
            <Bar x={122} y={y + 4} w={40} />
            <Bar x={122} y={y + 13} w={26} h={5} />
          </g>
        ))}
      </g>
      <g transform="rotate(5 196 110)">
        {phone(150, 18)}
        <rect
          x={160}
          y={40}
          width={72}
          height={64}
          rx="10"
          className="fill-soft"
        />
        <circle
          cx={196}
          cy={72}
          r={14}
          className="fill-lime"
          fillOpacity=".35"
        />
        <Bar x={160} y={114} w={58} className="fill-ink" />
        <Bar x={160} y={126} w={44} />
        <rect
          x={160}
          y={150}
          width={72}
          height={20}
          rx="10"
          className="fill-ink"
        />
      </g>
    </Frame>
  );
}

/** AI integration: a chat exchange with a lime spark on the answer. */
export function AiArt({ className }: Art) {
  return (
    <Frame className={className}>
      <Window x={40} y={20} w={240} h={162} />
      <rect
        x={150}
        y={58}
        width={112}
        height={32}
        rx="12"
        className="fill-ink"
      />
      <Bar x={162} y={66} w={80} className="fill-paper" />
      <Bar x={162} y={77} w={52} className="fill-paper/60" />
      <rect
        x={78}
        y={100}
        width={130}
        height={44}
        rx="12"
        className="fill-soft"
      />
      <Bar x={90} y={110} w={96} />
      <Bar x={90} y={121} w={106} />
      <Bar x={90} y={132} w={64} />
      <path
        d="M62 112c0-6 4-10 10-10-6 0-10-4-10-10 0 6-4 10-10 10 6 0 10 4 10 10Z"
        className="fill-lime"
      />
      <rect
        x={56}
        y={154}
        width={208}
        height={20}
        rx="10"
        className="stroke-line"
        strokeWidth="1.5"
      />
      <Bar x={68} y={161} w={70} />
      <circle cx={253} cy={164} r={7} className="fill-lime" />
    </Frame>
  );
}

/* ── Process ───────────────────────────────────────────────────────────── */

/** Scope: a written brief with items ticked off. */
export function ScopeArt({ className }: Art) {
  return (
    <Frame className={className}>
      <rect
        x={96}
        y={18}
        width={128}
        height={166}
        rx="10"
        className="fill-paper stroke-line"
        strokeWidth="1.5"
      />
      <Bar x={112} y={36} w={60} h={8} className="fill-ink" />
      <Bar x={112} y={52} w={92} h={5} />
      {[78, 104, 130].map((y) => (
        <g key={y}>
          <Check cx={119} cy={y + 3} />
          <Bar x={134} y={y} w={y === 104 ? 54 : 70} />
        </g>
      ))}
      <rect
        x={112}
        y={150}
        width={14}
        height={14}
        rx="4"
        className="stroke-line"
        strokeWidth="1.5"
      />
      <Bar x={134} y={154} w={48} />
    </Frame>
  );
}

/** Design: a wireframe on an artboard, one block selected under a cursor. */
export function DesignArt({ className }: Art) {
  return (
    <Frame className={className}>
      <rect
        x={60}
        y={22}
        width={200}
        height={156}
        rx="10"
        className="fill-paper stroke-line"
        strokeWidth="1.5"
      />
      <rect
        x={76}
        y={38}
        width={168}
        height={58}
        rx="6"
        className="fill-soft"
      />
      <path
        d="m76 96 50-38 38 26 24-14 56 26"
        className="stroke-line"
        strokeWidth="1.5"
      />
      <Bar x={76} y={110} w={96} h={8} className="fill-ink" />
      <Bar x={76} y={126} w={140} />
      <Bar x={76} y={138} w={110} />
      <rect
        x={72}
        y={150}
        width={66}
        height={22}
        rx="11"
        className="stroke-lime"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <rect x={76} y={154} width={58} height={14} rx="7" className="fill-ink" />
      {[
        [72, 150],
        [138, 150],
        [72, 172],
        [138, 172],
      ].map(([x, y]) => (
        <rect
          key={`${x}-${y}`}
          x={x - 3}
          y={y - 3}
          width="6"
          height="6"
          className="fill-paper stroke-lime"
          strokeWidth="1.5"
        />
      ))}
      <path
        d="m150 160 0 26 7-7 5 11 5-2-5-11h10Z"
        className="fill-ink stroke-paper"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Frame>
  );
}

/** Build: an editor with code and a passing build. */
export function BuildArt({ className }: Art) {
  const lines: [number, number, string][] = [
    [0, 52, "fill-ink"],
    [14, 80, "fill-line"],
    [14, 46, "fill-lime"],
    [28, 92, "fill-line"],
    [28, 60, "fill-line"],
    [14, 38, "fill-lime"],
    [0, 24, "fill-ink"],
  ];
  return (
    <Frame className={className}>
      <Window x={40} y={20} w={240} h={150} />
      {lines.map(([indent, w, cls], i) => (
        <g key={i}>
          <Bar x={54} y={60 + i * 14} w={8} h={5} />
          <Bar x={72 + indent} y={60 + i * 14} w={w} h={5} className={cls} />
        </g>
      ))}
      <rect
        x={176}
        y={146}
        width={120}
        height={36}
        rx="12"
        className="fill-paper stroke-line"
        strokeWidth="1.5"
      />
      <Check cx={196} cy={164} r={8} />
      <Bar x={212} y={156} w={62} className="fill-ink" />
      <Bar x={212} y={168} w={40} h={5} />
    </Frame>
  );
}

/** Ship: a live site on its own domain, every check green. */
export function ShipArt({ className }: Art) {
  return (
    <Frame className={className}>
      <rect
        x={40}
        y={20}
        width={240}
        height={160}
        rx="12"
        className="fill-paper stroke-line"
        strokeWidth="1.5"
      />
      <rect
        x={54}
        y={32}
        width={212}
        height={22}
        rx="11"
        className="fill-soft"
      />
      <path
        d="M66 41h8v8h-8zM67.5 41v-2.5a2.5 2.5 0 0 1 5 0V41"
        className="stroke-ink"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <Bar x={82} y={40} w={90} />
      <circle cx={252} cy={43} r={4} className="fill-lime" />
      <circle
        cx={252}
        cy={43}
        r={8}
        className="stroke-lime"
        strokeOpacity=".4"
        strokeWidth="2"
      />
      {[76, 106, 136].map((y, i) => (
        <g key={y}>
          <Check cx={72} cy={y + 8} r={9} />
          <Bar x={90} y={y + 2} w={[70, 92, 58][i]} className="fill-ink" />
          <Bar x={90} y={y + 12} w={[110, 80, 96][i]} h={5} />
          <Bar x={226} y={y + 5} w={36} />
        </g>
      ))}
    </Frame>
  );
}

/* ── Product steps: set up, connect, results ───────────────────────────── */

/** Set up: a short form with a field being typed into and a primary button. */
export function SetupArt({ className }: Art) {
  return (
    <Frame className={className}>
      <rect
        x={70}
        y={24}
        width={180}
        height={152}
        rx="12"
        className="fill-paper stroke-line"
        strokeWidth="1.5"
      />
      <Bar x={88} y={42} w={70} h={8} className="fill-ink" />
      <Bar x={88} y={58} w={110} h={5} />
      <rect
        x={88}
        y={76}
        width={144}
        height={26}
        rx="8"
        className="stroke-lime"
        strokeWidth="1.5"
      />
      <Bar x={98} y={86} w={64} />
      <path
        d="M168 83v14"
        className="stroke-ink"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x={88}
        y={110}
        width={144}
        height={26}
        rx="8"
        className="stroke-line"
        strokeWidth="1.5"
      />
      <Bar x={98} y={120} w={44} />
      <rect
        x={88}
        y={146}
        width={144}
        height={20}
        rx="10"
        className="fill-ink"
      />
      <Bar x={138} y={153} w={44} className="fill-paper" />
    </Frame>
  );
}

/** Connect: a snippet and a share link, joined to a live page. */
export function ConnectArt({ className }: Art) {
  return (
    <Frame className={className}>
      <rect
        x={30}
        y={44}
        width={118}
        height={92}
        rx="12"
        className="fill-ink"
      />
      <Bar x={44} y={60} w={26} h={5} className="fill-lime" />
      <Bar x={76} y={60} w={50} h={5} className="fill-paper/40" />
      <Bar x={54} y={74} w={70} h={5} className="fill-paper/40" />
      <Bar x={54} y={88} w={46} h={5} className="fill-lime" />
      <Bar x={44} y={102} w={30} h={5} className="fill-paper/40" />
      <rect
        x={44}
        y={114}
        width={60}
        height={12}
        rx="6"
        className="fill-paper/15"
      />
      <path
        d="M152 90h20"
        className="stroke-lime"
        strokeWidth="2"
        strokeDasharray="3 4"
        strokeLinecap="round"
      />
      <Window x={176} y={30} w={116} h={140} />
      <rect
        x={188}
        y={68}
        width={92}
        height={36}
        rx="8"
        className="fill-soft"
      />
      <Bar x={188} y={114} w={70} className="fill-ink" />
      <Bar x={188} y={126} w={86} />
      <rect
        x={188}
        y={142}
        width={56}
        height={16}
        rx="8"
        className="fill-lime"
      />
    </Frame>
  );
}

/** Results: notifications arriving over a rising chart. */
export function ResultArt({ className }: Art) {
  return (
    <Frame className={className}>
      <rect
        x={40}
        y={60}
        width={200}
        height={120}
        rx="12"
        className="fill-paper stroke-line"
        strokeWidth="1.5"
      />
      {[86, 70, 104, 92, 124, 140].map((h, i) => (
        <rect
          key={i}
          x={60 + i * 28}
          y={168 - h * 0.7}
          width="16"
          height={h * 0.7}
          rx="4"
          className={i === 5 ? "fill-lime" : "fill-line"}
        />
      ))}
      {[
        [150, 18, 0],
        [168, 50, 1],
      ].map(([x, y, i]) => (
        <g key={i}>
          <rect
            x={x}
            y={y}
            width={132}
            height={34}
            rx="10"
            className="fill-paper stroke-line"
            strokeWidth="1.5"
          />
          <Check cx={x + 17} cy={y + 17} r={8} />
          <Bar x={x + 32} y={y + 10} w={70} className="fill-ink" />
          <Bar x={x + 32} y={y + 21} w={50} h={5} />
        </g>
      ))}
    </Frame>
  );
}

/* ── Sets ──────────────────────────────────────────────────────────────── */

export const serviceArt = {
  "mvp-development": MvpArt,
  "custom-applications": DashboardArt,
  "mobile-app-development": MobileArt,
  "ai-integration": AiArt,
} as const;

/** A four-step project: scope, design, build, ship. */
export const processArt = [ScopeArt, DesignArt, BuildArt, ShipArt];

/** A three-step product flow: set up, connect, see results. */
export const productStepArt = [SetupArt, ConnectArt, ResultArt];
