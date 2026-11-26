import type { CSSProperties, ComponentType, ReactNode } from "react";
import { Inter } from "next/font/google";
import { d } from "../frames";
import { cn } from "./cn";
import {
  ArrowPathMicro,
  BanknotesMicro,
  BellMicro,
  CalendarDaysMini,
  ChatBubbleLeftRightOutline,
  CheckCircleMicro,
  ChevronDownMicro,
  ChevronLeftMini,
  ChevronRightMini,
  ClockMicro,
  CreditCardMicro,
  EnvelopeMicro,
  GlobeAltMicro,
  LockClosedMicro,
  MapMicro,
  MapPinMicro,
  PlusMicro,
  ShieldCheckMicro,
  TrashMini,
  UserGroupMicro,
  XMarkMicro,
} from "./icons";
import "./scope.css";

/*
 * Bookify, one replica per feature in the order of `features` in the copy.
 *
 * The markup and classes are Bookify's own (the Laravel app, bookify:
 * resources/views): the marketing pages' 1:1 copies of the product
 * (components/marketing/booking-page-preview, calendar-preview,
 * booking-demo), the app's Livewire components (calendar-connections,
 * team-manager), and the product illustrations
 * (components/marketing/illustrations/*). Flux components are written out
 * as the classes their stubs render, with Bookify's Flux skin applied.
 * Everything is drawn inside `.bk` (scope.css) for Bookify's neutral zinc,
 * radii, lines and Inter. The only additions are the rp-* motion classes.
 */

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--bk-font-inter",
});

/** The surface is 416 × 296 (.rp-fill); `w` is the width the UI is laid out at. */
const SURFACE_W = 416;
const SURFACE_H = 296;

function Scene({ children }: { children: ReactNode }) {
  return <div className={cn(inter.variable, "bk absolute inset-0")}>{children}</div>;
}

/** Lays the real UI out at `w` CSS px and scales it to fill the surface. */
function Fit({ w, children, className }: { w: number; children: ReactNode; className?: string }) {
  const s = SURFACE_W / w;
  return (
    <div
      className={cn("origin-top-left", className)}
      style={{ width: w, height: SURFACE_H / s, transform: `scale(${s})` }}
    >
      {children}
    </div>
  );
}

/** A floating card across the surface's edge. */
const FLOAT = "rp-lift";

/** product-illustration.blade.php: $card, $muted, $ink. */
const CARD = "rounded-[0.9em] border border-line bg-white";
const MUTED = "text-zinc-500";
const INK = "text-zinc-900";

/** flux:badge size="sm" (Bookify skins badges to rounded-md). */
function Badge({
  children,
  color,
  className,
  style,
}: {
  children: ReactNode;
  color?: "emerald" | "blue";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      style={style}
      className={cn(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium whitespace-nowrap",
        color === "emerald"
          ? "bg-emerald-400/20 text-emerald-800"
          : color === "blue"
            ? "bg-blue-400/20 text-blue-800"
            : "bg-zinc-400/15 text-zinc-700",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** flux:switch, checked or not; `flip` animates it being switched on. */
function Switch({ on, flip }: { on: boolean; flip?: CSSProperties }) {
  return (
    <span
      className={cn(
        "relative inline-flex h-5 w-8 min-w-8 items-center rounded-full",
        on && !flip ? "bg-[var(--color-accent)]" : "bg-zinc-800/15",
      )}
    >
      {on && flip && <span className="rp-in absolute inset-0 rounded-full bg-[var(--color-accent)]" style={flip} />}
      <span
        className={cn(flip && "rp-slide", "relative")}
        style={flip ? ({ ...flip, "--from-x": "-12px" } as CSSProperties) : undefined}
      >
        <span
          className={cn(
            "block size-3.5 rounded-full",
            on ? "translate-x-[0.9375rem] bg-[var(--color-accent-foreground)]" : "translate-x-[0.1875rem] bg-white",
          )}
        />
      </span>
    </span>
  );
}

/** x-ui.tab-bar */
function TabBar({ tabs, current, className }: { tabs: string[]; current: string; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="flex min-w-max gap-6 border-b border-zinc-200">
        {tabs.map((tab) => (
          <span
            key={tab}
            className={cn(
              "-mb-px shrink-0 border-b-2 pb-2.5 text-sm font-medium whitespace-nowrap",
              tab === current ? "border-zinc-900 text-zinc-900" : "border-transparent text-zinc-500",
            )}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── 1 · One booking link ────────────────────────────────────────────────
   welcome.blade.php: the hero's browser window on the booking page, its
   address typed in, and booking-page-preview at the "Pick a time" step.
   The text that follows is booking-demo's own: the customer's SMS. */

const PHOTOS = [
  ["hair-salons", "The colour bar"],
  ["beauty-spa", "Treatment room"],
  ["barbershops", "Fades and beard trims"],
  ["nail-studios", "Nails by Bianca"],
] as const;

const DAYS = [
  ["Fri", "23"],
  ["Sat", "24"],
  ["Sun", "25"],
  ["Mon", "26"],
  ["Tue", "27"],
  ["Wed", "28"],
  ["Thu", "29"],
] as const;

const SLOTS = ["09:00", "09:45", "10:30", "11:15", "13:00", "14:30", "15:15", "16:00"];

function BookingLink() {
  return (
    <Scene>
      <div className="rp-fill border border-line bg-subtle">
        <Fit w={520}>
          <div className="flex items-center gap-3 border-b border-line px-7 pt-4 pb-2.5">
            <span className="flex gap-1.5">
              <span className="size-2.5 rounded-full border border-[var(--color-line-strong)]" />
              <span className="size-2.5 rounded-full border border-[var(--color-line-strong)]" />
              <span className="size-2.5 rounded-full border border-[var(--color-line-strong)]" />
            </span>
            <span className="mx-auto flex h-7 w-full max-w-md min-w-0 items-center gap-1.5 rounded-md border border-line bg-[var(--color-canvas)] px-2.5 text-xs text-zinc-500">
              <LockClosedMicro className="size-3 text-zinc-400" />
              <span className="truncate">
                bookify.one/
                <span className="rp-type inline-block font-medium text-zinc-900" style={d(0, { "--steps": 12 })}>
                  north-studio
                </span>
              </span>
            </span>
            <span className="block w-11" />
          </div>

          <div className="h-full overflow-hidden bg-zinc-50 px-6">
            <div className="-mt-[132px] rounded-2xl border border-line bg-white p-5 text-start">
              <div className="-mx-1 flex gap-2 overflow-hidden px-1 pb-1">
                {PHOTOS.map(([file]) => (
                  <div
                    key={file}
                    className="relative aspect-square w-32 shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/replicas/bookify/${file}.webp`} alt="" className="size-full object-cover" />
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
                  <Badge>Iuliu Maniu Studio</Badge>
                  <Badge className="rp-pop" style={d(0.5)}>Haircut</Badge>
                  <span className="ml-auto text-sm text-zinc-500">Back</span>
                </div>

                <p className="bk-heading mb-4 text-sm font-medium text-zinc-800">Pick a time</p>

                <div className="-mx-1 mb-5 flex gap-2 overflow-hidden px-1 pb-2">
                  {DAYS.map(([weekday, day], i) => (
                    <span
                      key={day}
                      className={cn(
                        "rp-in relative flex w-14 shrink-0 flex-col items-center gap-0.5 overflow-hidden rounded-xl border px-2 py-2",
                        i === 0 ? "border-[#4338ca] bg-[#4f46e5] text-white" : "border-zinc-200 text-zinc-600",
                      )}
                      style={d(0.7 + i * 0.06)}
                    >
                      <span className="text-[11px] uppercase">{weekday}</span>
                      <span className="text-sm font-semibold tabular-nums">{day}</span>
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {SLOTS.map((slot, i) => (
                    <span
                      key={slot}
                      className="rp-in relative overflow-hidden rounded-lg border border-zinc-200 py-2 text-center text-sm font-medium text-zinc-800 tabular-nums"
                      style={d(1.1 + i * 0.06)}
                    >
                      {slot}
                      {slot === "10:30" && (
                        <span
                          className="rp-in absolute inset-0 flex items-center justify-center rounded-lg bg-[#4f46e5] text-white"
                          style={d(2.2)}
                        >
                          {slot}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Fit>
      </div>

      <div
        className={cn("rp-slide absolute top-[258px] left-[-20px] w-[364px]", "rounded-xl border border-line bg-white p-3", FLOAT)}
        style={d(2.9, { "--from-x": "-14px", "--from-y": "0px" })}
      >
        <div className="flex items-center gap-1.5">
          <span className="flex size-4 items-center justify-center rounded-full bg-emerald-100">
            <ChatBubbleLeftRightOutline className="size-2.5 text-emerald-600" />
          </span>
          <span className="text-[10px] font-medium tracking-wide text-zinc-500 uppercase">
            SMS · Maria&rsquo;s phone
          </span>
        </div>
        <p className="mt-1.5 text-xs text-zinc-700">
          North Studio: Haircut booked for 23 Oct at 10:30 with Alex.
        </p>
      </div>
    </Scene>
  );
}

/* ── 2 · A booking page that looks like you ──────────────────────────────
   booking-page-preview: the page's header, with North Studio's cover, logo,
   address and links. The search result is the booking-page illustration's. */

function BookingPage() {
  const chip =
    "inline-flex h-9 items-center gap-1.5 rounded-full border border-zinc-200 px-3.5 text-sm font-medium text-zinc-700";
  return (
    <Scene>
      <div className="rp-fill border border-line bg-white">
        <Fit w={500}>
          <div className="space-y-3 p-6 text-start">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/replicas/bookify/header.webp"
                alt=""
                className="rp-in aspect-3/1 w-full rounded-2xl object-cover"
                style={d(0)}
              />
              <div className="relative -mt-8 px-3">
                <span className="rp-pop inline-block" style={d(0.5)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/replicas/bookify/logo.webp"
                    alt=""
                    className="size-16 rounded-2xl border-4 border-white object-cover shadow-[0_2px_8px_rgb(23_23_23/0.2)] ring-1 ring-zinc-900/10"
                  />
                </span>
              </div>
            </div>

            <div className="rp-in space-y-1 px-1" style={d(0.8)}>
              <p className="bk-heading text-2xl font-medium text-zinc-800">North Studio</p>
              <p className="text-sm text-zinc-500">Cuts, colour and styling in central Bucharest.</p>
            </div>

            <p className="rp-in flex items-center gap-1.5 px-1 text-sm text-zinc-500" style={d(1.1)}>
              <MapPinMicro className="text-zinc-400" />
              Bd. Iuliu Maniu, 228, Bucharest
            </p>

            <div className="flex flex-wrap gap-2 px-1">
              <span className={cn(chip, "rp-pop")} style={d(1.4)}>
                <MapMicro className="text-zinc-400" />
                Directions
              </span>
              <span className={cn(chip, "rp-pop")} style={d(1.55)}>
                <GlobeAltMicro className="text-zinc-400" />
                Website
              </span>
            </div>
          </div>
        </Fit>
      </div>

      <div
        className={cn("rp-slide absolute top-[16px] right-[-22px] w-[224px] text-[11.5px] leading-snug", CARD, FLOAT, "p-[0.9em] text-[0.86em]")}
        style={d(2.2, { "--from-x": "14px", "--from-y": "0px" })}
      >
        <p className={cn("flex items-center gap-[0.4em] text-[0.85em]", MUTED)}>
          <svg className="size-[1.1em] shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          hair salon bucharest
        </p>
        <p className="mt-[0.6em] text-[0.82em] text-emerald-700">bookify.one › north-studio</p>
        <p className="font-semibold text-sky-700">North Studio · Hair salon in Bucharest</p>
        <p className={cn("mt-[0.2em] text-[0.88em]", MUTED)}>
          Book a haircut, colour or styling online. See prices and free times.
        </p>
      </div>
    </Scene>
  );
}

/* ── 3 · One calendar for the whole team ─────────────────────────────────
   calendar-preview: the week view with its toolbar, closed-hours hatching
   and appointment blocks (the week of the product shot). The drag note is
   the calendar illustration's. */

type Appt = { start: string; min: number; who: string; service?: string; paid?: boolean; pending?: boolean };

const WEEK: { day: string; n: number; today?: boolean; hours: [number, number] | null; appts: Appt[] }[] = [
  {
    day: "Mon", n: 19, hours: [9, 17],
    appts: [
      { start: "10:30", min: 45, who: "Oana", service: "Haircut", paid: true },
      { start: "11:15", min: 90, who: "Simona", service: "Color & style" },
      { start: "13:00", min: 45, who: "Dan", service: "Haircut", paid: true },
      { start: "14:00", min: 45, who: "Alex", service: "Haircut", pending: true },
      { start: "15:30", min: 45, who: "George", service: "Haircut" },
    ],
  },
  {
    day: "Tue", n: 20, hours: [9, 17],
    appts: [
      { start: "10:00", min: 30, who: "Ioana", service: "Consultation", pending: true },
      { start: "10:45", min: 45, who: "George", service: "Haircut", paid: true },
      { start: "11:45", min: 45, who: "George", service: "Haircut" },
      { start: "12:30", min: 45, who: "George", service: "Haircut" },
      { start: "13:30", min: 90, who: "Maria", service: "Color & style", paid: true },
      { start: "15:15", min: 45, who: "Radu", service: "Haircut", paid: true },
    ],
  },
  {
    day: "Wed", n: 21, hours: [9, 17],
    appts: [
      { start: "10:00", min: 45, who: "Vlad", service: "Haircut" },
      { start: "10:45", min: 45, who: "Maria", service: "Haircut" },
      { start: "11:30", min: 45, who: "George", service: "Haircut" },
      { start: "12:15", min: 45, who: "Cristina", service: "Haircut" },
      { start: "13:15", min: 45, who: "Laura", service: "Haircut", pending: true },
      { start: "14:45", min: 90, who: "Vlad", service: "Color & style" },
    ],
  },
  {
    day: "Thu", n: 22, today: true, hours: [9, 17],
    appts: [
      { start: "09:00", min: 45, who: "Laura", service: "Haircut" },
      { start: "09:45", min: 30, who: "Ioana", service: "Consultation" },
      { start: "10:30", min: 45, who: "Paula", service: "Haircut" },
      { start: "12:00", min: 90, who: "Oana", service: "Color & style" },
      { start: "13:30", min: 30, who: "Radu", service: "Consultation" },
      { start: "14:00", min: 45, who: "Roxana", service: "Haircut" },
      { start: "15:45", min: 45, who: "Maria", service: "Haircut", paid: true },
    ],
  },
  {
    day: "Fri", n: 23, hours: [9, 17],
    appts: [
      { start: "09:00", min: 30, who: "Dan", service: "Consultation" },
      { start: "09:30", min: 30, who: "Diana", service: "Consultation" },
      { start: "11:30", min: 30, who: "Maria", service: "Consultation" },
      { start: "12:00", min: 30, who: "Roxana", service: "Consultation" },
      { start: "12:30", min: 45, who: "Mihai", service: "Haircut", paid: true },
      { start: "14:15", min: 45, who: "Vlad", service: "Haircut" },
      { start: "15:00", min: 45, who: "Irina", service: "Haircut", paid: true, pending: true },
    ],
  },
  {
    day: "Sat", n: 24, hours: [10, 14],
    appts: [
      { start: "10:00", min: 90, who: "Bianca", service: "Color & style" },
      { start: "11:30", min: 30, who: "Ana", service: "Consultation" },
      { start: "13:00", min: 45, who: "Roxana", service: "Haircut", paid: true },
    ],
  },
  { day: "Sun", n: 25, hours: null, appts: [] },
];

const HOUR = 48;
const GRID_START = 8;
const GRID_END = 18;

function TeamCalendar() {
  const total = (GRID_END - GRID_START) * HOUR;
  const toY = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    return (h! + m! / 60 - GRID_START) * HOUR;
  };
  const outline = "inline-flex h-8 items-center justify-center border border-[var(--color-line-strong)] bg-white text-sm font-medium text-zinc-800";
  return (
    <Scene>
      <div className="rp-fill border border-line bg-white">
        <Fit w={800}>
          <div className="flex flex-col gap-3 px-9 pt-9 text-start">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2">
                <div className="flex">
                  <span className={cn(outline, "w-8 rounded-md rounded-e-none")}>
                    <ChevronLeftMini />
                  </span>
                  <span className={cn(outline, "rounded-none border-s-0 px-3")}>Today</span>
                  <span className={cn(outline, "w-8 rounded-md rounded-s-none border-s-0")}>
                    <ChevronRightMini />
                  </span>
                </div>
                <p className="bk-heading ml-1 truncate text-base font-medium text-zinc-800">19 Oct – 25 Oct 2026</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="flex h-8 items-center gap-2 rounded-lg border border-zinc-200 bg-white ps-2 pe-3 text-sm text-zinc-800">
                  <UserGroupMicro className="text-zinc-400" />
                  All staff
                  <ChevronDownMicro className="text-zinc-400" />
                </span>
                <div className="inline-flex overflow-hidden rounded-lg border border-[var(--color-line-strong)] bg-white">
                  {["Day", "Week", "Month"].map((view) => (
                    <span
                      key={view}
                      className={cn(
                        "flex h-8 items-center border-e border-[var(--color-line-strong)] px-3 text-sm font-medium last:border-e-0",
                        view === "Week" ? "bg-zinc-100 text-zinc-950" : "bg-white text-zinc-600",
                      )}
                    >
                      {view}
                    </span>
                  ))}
                </div>
                <span className="inline-flex h-8 items-center justify-center gap-2 rounded-md bg-[var(--color-accent)] ps-2 pe-3 text-sm font-medium text-[var(--color-accent-foreground)]">
                  <PlusMicro />
                  New
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
              <div className="flex min-w-fit">
                <div className="relative z-10 w-12 shrink-0 border-e border-zinc-200 bg-white">
                  <div className="h-10 border-b border-zinc-200" />
                  {Array.from({ length: GRID_END - GRID_START }, (_, i) => GRID_START + i).map((hour) => (
                    <div key={hour} className="relative text-right" style={{ height: HOUR }}>
                      {hour > GRID_START && (
                        <span className="absolute -top-2 right-1.5 text-[11px] text-zinc-500 tabular-nums">
                          {String(hour).padStart(2, "0")}:00
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {WEEK.map((col, c) => {
                  const closed = col.hours
                    ? [
                        { top: 0, height: (col.hours[0] - GRID_START) * HOUR },
                        { top: (col.hours[1] - GRID_START) * HOUR, height: (GRID_END - col.hours[1]) * HOUR },
                      ]
                    : [{ top: 0, height: total }];
                  return (
                    <div key={col.day} className="w-28 min-w-28 flex-1 border-e border-zinc-200/80 last:border-e-0">
                      <div className="flex h-10 w-full items-center justify-center gap-1 border-b border-zinc-200 bg-white px-1 text-sm">
                        <span className={cn("truncate font-medium", col.today ? "text-[var(--color-accent-content)]" : "text-zinc-600")}>
                          {col.day}
                        </span>
                        <span
                          className={cn(
                            "flex size-6 shrink-0 items-center justify-center rounded-full text-xs tabular-nums",
                            col.today ? "bg-accent font-semibold text-accent-foreground" : "text-zinc-500",
                          )}
                        >
                          {col.n}
                        </span>
                      </div>
                      <div className="relative" style={{ height: total }}>
                        {closed.map((z, i) =>
                          z.height > 0 ? (
                            <div
                              key={i}
                              className="cal-closed absolute inset-x-0 border-y border-zinc-200/80"
                              style={{ top: z.top, height: z.height }}
                            />
                          ) : null,
                        )}
                        {Array.from({ length: GRID_END - GRID_START - 1 }, (_, i) => GRID_START + 1 + i).map((hour) => (
                          <div
                            key={hour}
                            className="absolute inset-x-0 border-t border-zinc-200/80"
                            style={{ top: (hour - GRID_START) * HOUR }}
                          />
                        ))}
                        {col.appts.map((a, i) => {
                          const height = (a.min / 60) * HOUR;
                          const moved = col.day === "Fri" && a.who === "Maria";
                          return (
                            <div
                              key={a.start}
                              className={cn(moved ? "rp-slide" : "rp-in", "absolute inset-x-0.5 rounded-md")}
                              style={{
                                top: toY(a.start),
                                height,
                                ...d(moved ? 2.6 : 0.2 + c * 0.12 + i * 0.05, moved ? { "--from-x": "0px", "--from-y": "-72px" } : undefined),
                              }}
                            >
                              <div
                                style={moved ? d(2.9) : undefined}
                                className={cn(
                                  moved && "bk-flash",
                                  "h-full overflow-hidden rounded-md px-2 py-1 text-start text-xs leading-tight",
                                  a.pending ? "bg-amber-400/20 text-amber-950" : "bg-orange-600/10 text-orange-950",
                                )}
                              >
                                <span className="flex items-center gap-1 font-medium">
                                  <span className="min-w-0 truncate">
                                    {a.start} · {a.who}
                                  </span>
                                  {a.paid && (
                                    <span className="shrink-0 text-emerald-600">
                                      <BanknotesMicro className="size-3" />
                                    </span>
                                  )}
                                </span>
                                {height >= 30 && <span className="block truncate opacity-70">{a.service}</span>}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Fit>
      </div>

      <div
        className={cn(
          "rp-pop absolute top-[298px] right-[-22px] text-[13px] leading-snug",
          "rounded-[0.5em] border-2 border-dashed border-brand bg-white px-[0.7em] py-[0.45em] text-[0.82em] font-semibold text-brand",
          FLOAT,
        )}
        style={d(2.4)}
      >
        Moving to 11:30 · Maria gets a text
      </div>
    </Scene>
  );
}

/* ── 4 · Zero double bookings ────────────────────────────────────────────
   illustrations/scheduling: one day of slots, taken, buffer, open, the one
   being booked, and the lock. */

function DoubleBookings() {
  const rows = [
    ["09:00", "Booked", "taken"],
    ["09:45", "Buffer · 15 min", "buffer"],
    ["10:00", "Free", "free"],
    ["10:45", "Booking now", "picked"],
    ["11:30", "Free", "free"],
    ["12:15", "Lunch", "closed"],
  ] as const;
  return (
    <Scene>
      <div className={cn(CARD, "rp-fill flex flex-col justify-center px-[1.6em] text-[13px] leading-snug")}>
        <div className="flex items-center justify-between">
          <p className={cn("font-semibold", INK)}>Friday 23 October</p>
          <p className={cn("text-[0.85em]", MUTED)}>Alex · Haircut 45 min</p>
        </div>

        <div className="mt-[1em] space-y-[0.45em] text-[0.92em]">
          {rows.map(([time, state, kind], i) => (
            <div
              key={time}
              className={cn(
                "rp-in relative flex items-center justify-between overflow-hidden rounded-[0.55em] border px-[0.8em] py-[0.5em]",
                kind === "taken" && "border-line bg-zinc-100 text-zinc-400 line-through",
                kind === "buffer" && "border-dashed border-amber-300 bg-amber-50 text-amber-700",
                (kind === "free" || kind === "picked") && cn("border-line", INK),
                kind === "closed" && "cal-closed border-line text-zinc-400",
              )}
              style={d(0.2 + i * 0.12)}
            >
              <span className="font-medium tabular-nums">{time}</span>
              <span className="text-[0.9em]">{kind === "picked" ? "Free" : state}</span>
              {kind === "picked" && (
                <span
                  className="rp-in absolute inset-0 flex items-center justify-between bg-zinc-900 px-[0.8em] text-white"
                  style={d(1.6)}
                >
                  <span className="font-medium tabular-nums">{time}</span>
                  <span className="text-[0.9em]">{state}</span>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className={cn("rp-pop absolute top-[150px] right-[-24px] text-[13px] leading-snug", CARD, FLOAT, "flex items-center gap-[0.5em] px-[0.8em] py-[0.6em]")}
        style={d(2.1)}
      >
        <LockClosedMicro className="size-[1.2em] text-brand" />
        <span className={cn("text-[0.85em] font-semibold", INK)}>10:45 locked for Maria</span>
      </div>

      <div
        className={cn("rp-slide absolute top-[288px] left-[-22px] text-[13px] leading-snug", CARD, FLOAT, "flex items-center gap-[0.5em] px-[0.8em] py-[0.6em]")}
        style={d(2.7, { "--from-x": "-12px", "--from-y": "0px" })}
      >
        <ShieldCheckMicro className="size-[1.2em] text-emerald-600" />
        <span className={cn("text-[0.85em] font-medium", INK)}>Only genuinely free slots are offered</span>
      </div>
    </Scene>
  );
}

/* ── 5 · Two-way calendar sync ───────────────────────────────────────────
   settings/schedule, Calendar tab: the calendar-connections component with
   a Google and an Apple / CalDAV account. The chip is the calendar
   illustration's. */

function CalendarSync() {
  const connections = [
    {
      email: "alex@example.com",
      provider: "Google Calendar",
      calendars: [
        { name: "Alex Ionescu", blocks: true, target: true },
        { name: "Holidays in Romania", blocks: true, target: false, toggles: true },
      ],
    },
    {
      email: "alex@icloud.com",
      provider: "CalDAV",
      calendars: [{ name: "Home", blocks: true, target: false }],
    },
  ];
  return (
    <Scene>
      <div className="rp-fill border border-line bg-white">
        <Fit w={640}>
          <div className="p-8 text-start">
            <p className="bk-heading text-sm font-medium text-zinc-800">Schedule</p>
            <p className="mt-2 text-sm text-zinc-500">Your working hours, time off, and calendar sync</p>

            <div className="mt-5 w-full max-w-lg">
              <div className="mt-6 space-y-6">
                <TabBar tabs={["Working hours", "Time off", "Calendar"]} current="Calendar" />

                <div className="space-y-4">
                  {connections.map((connection, c) => (
                    <div
                      key={connection.email}
                      className="rp-in rounded-xl border border-line bg-white"
                      style={d(0.3 + c * 0.5)}
                    >
                      <div className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3">
                        <CalendarDaysMini className="text-zinc-400" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-zinc-900">{connection.email}</p>
                          <p className="text-xs text-zinc-500">{connection.provider}</p>
                        </div>
                        <Badge color="emerald">Connected</Badge>
                        <span className="inline-flex size-6 items-center justify-center rounded-md text-zinc-800">
                          <XMarkMicro />
                        </span>
                      </div>

                      <div className="divide-y divide-zinc-50">
                        {connection.calendars.map((calendar) => (
                          <div key={calendar.name} className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2.5">
                            <span className="min-w-0 flex-1 truncate text-sm text-zinc-700">{calendar.name}</span>
                            <span className="flex items-center gap-2 text-xs text-zinc-500">
                              <Switch on={calendar.blocks} flip={"toggles" in calendar ? d(1.8) : undefined} />
                              Blocks availability
                            </span>
                            {calendar.target ? (
                              <Badge color="blue">Receives appointments</Badge>
                            ) : (
                              <span className="inline-flex h-6 items-center justify-center rounded-md px-2 text-xs font-medium whitespace-nowrap text-zinc-500">
                                Sync appointments here
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Fit>
      </div>

      <div
        className={cn("rp-pop absolute top-[20px] right-[-22px] text-[13px] leading-snug", CARD, FLOAT, "flex items-center gap-[0.5em] px-[0.8em] py-[0.55em]")}
        style={d(1.2)}
      >
        <span className="rp-spin inline-flex" style={{ animationDuration: "2.4s" }}>
          <ArrowPathMicro className="size-[1.2em] text-emerald-600" />
        </span>
        <span className={cn("text-[0.85em] font-medium", INK)}>Google Calendar · synced</span>
      </div>
    </Scene>
  );
}

/* ── 6 · SMS reminders ───────────────────────────────────────────────────
   illustrations/notifications with sms-thread: the texts of one booking as
   the platform sends them (AppointmentSmsComposer), and what triggers each. */

function SmsReminders() {
  const thread = [
    ["When booked", "North Studio: Haircut booked for 24 Oct at 10:30 with Alex."],
    ["24 h before", "North Studio: reminder - Haircut on 24 Oct at 10:30 with Alex."],
    ["2 h before", "North Studio: reminder - Haircut on 24 Oct at 10:30 with Alex."],
  ];
  const triggers = [
    [CheckCircleMicro, "On booking", "Confirmation"],
    [ClockMicro, "24 h before", "Reminder"],
    [BellMicro, "2 h before", "Reminder"],
    [ArrowPathMicro, "On any change", "Update text"],
  ] as const;
  return (
    <Scene>
      <div className="rp-fill border border-line bg-subtle text-[12px] leading-snug">
        <div className="bg-grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_75%_75%_at_50%_45%,#000_25%,transparent_80%)]" />
        <div className="relative flex size-full items-start justify-center gap-[1.2em] px-[1.8em] pt-[1.8em]">
          <div className="w-[54%] rounded-t-[2em] border border-b-0 border-line bg-white p-[0.7em] pb-[2em]">
            <div className="mx-auto h-[0.35em] w-[28%] rounded-full bg-zinc-200" />
            <p className={cn("mt-[0.8em] text-center text-[0.78em] font-medium", MUTED)}>SMS</p>

            <div className="mt-[0.6em] space-y-[0.7em] px-[0.3em] pb-[0.6em] text-[0.88em]">
              {thread.map(([when, text], i) => (
                <div key={when} className="rp-in" style={d(0.3 + i * 0.9)}>
                  <p className="text-center text-[0.8em] text-zinc-500">{when}</p>
                  <p className="mt-1 w-fit max-w-[92%] rounded-[1em] rounded-bl-[0.3em] bg-zinc-100 px-[0.8em] py-[0.55em] text-zinc-700">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[1.6em] w-[38%] space-y-[0.6em] text-[0.85em]">
            {triggers.map(([Icon, when, what], i) => (
              <div
                key={when}
                className={cn(CARD, "rp-slide flex items-center gap-[0.6em] px-[0.7em] py-[0.55em]")}
                style={d(0.2 + i * 0.9, { "--from-x": "16px" })}
              >
                <Icon className="size-[1.2em] shrink-0 text-brand" />
                <span className="min-w-0">
                  <span className={cn("block font-semibold", INK)}>{what}</span>
                  <span className={cn("block text-[0.88em]", MUTED)}>{when}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Scene>
  );
}

/* ── 7 · Pay to book ─────────────────────────────────────────────────────
   illustrations/payments: a deposit checkout, the hold timer, and the
   payment landing. */

function PayToBook() {
  return (
    <Scene>
      <div className={cn(CARD, "rp-fill flex flex-col justify-center px-[2em] text-[13px] leading-snug")}>
        <p className={cn(MUTED, "text-[0.85em]")}>North Studio</p>
        <p className={cn("mt-[0.2em] font-semibold", INK)}>Colour &amp; style · Fri 10:30</p>

        <div className="mt-[1em] space-y-[0.4em] border-y border-line py-[0.8em] text-[0.92em]">
          <p className={cn("rp-in flex justify-between", MUTED)} style={d(0.3)}>
            <span>Service price</span>
            <span className="tabular-nums">€120.00</span>
          </p>
          <p className={cn("rp-in flex justify-between font-semibold", INK)} style={d(0.5)}>
            <span>Deposit due now</span>
            <span className="tabular-nums">€30.00</span>
          </p>
        </div>

        <div className={cn("mt-[1em] flex items-center gap-[0.6em] rounded-[0.55em] border border-line px-[0.8em] py-[0.6em] text-[0.9em]", MUTED)}>
          <CreditCardMicro className="size-[1.2em]" />
          <span className="rp-type tabular-nums" style={d(0.8, { "--steps": 19 })}>
            •••• •••• •••• 4242
          </span>
          <span className="ms-auto">12/29</span>
        </div>

        <div className="rp-press mt-[0.8em] flex items-center justify-center rounded-[0.55em] bg-zinc-900 py-[0.7em] text-[0.92em] font-medium text-white" style={d(2.4)}>
          Pay €30 and book
        </div>
        <p className={cn("mt-[0.6em] text-center text-[0.75em]", MUTED)}>Secure checkout by Stripe</p>
      </div>

      <div
        className={cn("rp-pop absolute top-[20px] right-[-22px] text-[13px] leading-snug", CARD, FLOAT, "flex items-center gap-[0.5em] px-[0.8em] py-[0.55em]")}
        style={d(0.6)}
      >
        <ClockMicro className="size-[1.2em] text-amber-600" />
        <span className={cn("text-[0.85em] font-medium", INK)}>Slot held · 9:58</span>
      </div>

      <div
        className={cn("rp-slide absolute top-[282px] left-[-22px] text-[13px] leading-snug", FLOAT, "flex items-center gap-[0.6em] rounded-[0.9em] border border-emerald-200 bg-white px-[0.9em] py-[0.6em]")}
        style={d(2.8, { "--from-x": "-14px", "--from-y": "0px" })}
      >
        <span className="flex size-[2em] items-center justify-center rounded-[0.5em] bg-emerald-50">
          <BanknotesMicro className="size-[1.2em] text-emerald-600" />
        </span>
        <span>
          <span className={cn("block text-[0.9em] font-semibold", INK)}>Deposit received</span>
          <span className={cn("block text-[0.78em]", MUTED)}>€30.00 · to your Stripe account</span>
        </span>
      </div>
    </Scene>
  );
}

/* ── 8 · Team roles ──────────────────────────────────────────────────────
   organization/edit, Team tab: the team-manager component, its members
   with their role selects and a pending invitation. The note is the teams
   illustration's. */

function TeamRoles() {
  const members = [
    ["AI", "Alex Ionescu", "alex@example.com", "Owner", true],
    ["IP", "Ioana Pop", "ioana@example.com", "Admin", false],
    ["MR", "Mihai Radu", "mihai@example.com", "Manager", false],
    ["DS", "Diana Stan", "diana@example.com", "Staff", false],
  ] as const;
  return (
    <Scene>
      <div className="rp-fill border border-line bg-white">
        <Fit w={640}>
          <div className="px-8 pt-8 text-start">
            <div className="flex justify-end overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_40px)]">
              <TabBar
                tabs={["General", "Booking page", "Share", "Business hours", "Notifications", "Payments", "Team"]}
                current="Team"
                className="shrink-0"
              />
            </div>

            <div className="space-y-6 pt-6">
              <div className="rp-in space-y-2" style={d(2.6)}>
                <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase">Pending invitations</p>
                <div className="rounded-xl border border-line bg-white">
                  <div className="flex items-center gap-4 px-4 py-2.5">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm text-zinc-900">radu@example.com</p>
                      <p className="text-xs text-zinc-500">Staff · expires 30 Oct</p>
                    </div>
                    <span className="inline-flex size-6 items-center justify-center rounded-md text-zinc-800">
                      <XMarkMicro />
                    </span>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-zinc-100 rounded-xl border border-line bg-white">
                {members.map(([initials, name, email, role, you], i) => (
                  <div key={name} className="rp-in flex items-center gap-4 px-4 py-3" style={d(0.2 + i * 0.15)}>
                    <span className="relative isolate flex size-8 flex-none items-center justify-center rounded-md bg-zinc-200 text-sm font-medium text-zinc-800 after:absolute after:inset-0 after:rounded-md after:inset-ring-[1px] after:inset-ring-black/7">
                      {initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-zinc-900">
                        {name}
                        {you && <span className="text-xs text-zinc-400"> (you)</span>}
                      </p>
                      <p className="truncate text-xs text-zinc-500">{email}</p>
                    </div>
                    <span className="flux-select block h-8 w-32 rounded-md border border-[var(--color-line-strong)] bg-white py-1.5 ps-3 pe-10 text-sm leading-[1.125rem] text-zinc-700">
                      {role}
                    </span>
                    <span className="inline-flex size-8 items-center justify-center rounded-md text-zinc-800">
                      <TrashMini />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fit>
      </div>

      <div
        className={cn("rp-slide absolute top-[284px] left-[-22px] text-[13px] leading-snug", CARD, FLOAT, "flex items-center gap-[0.6em] px-[0.9em] py-[0.6em]")}
        style={d(2.2, { "--from-x": "-14px", "--from-y": "0px" })}
      >
        <EnvelopeMicro className="size-[1.2em] text-brand" />
        <span>
          <span className={cn("block text-[0.88em] font-semibold", INK)}>Invitation sent to Radu</span>
          <span className={cn("block text-[0.78em]", MUTED)}>Staff · joins on accept</span>
        </span>
      </div>
    </Scene>
  );
}

export const bookifyReplicas: ComponentType[] = [
  BookingLink,
  BookingPage,
  TeamCalendar,
  DoubleBookings,
  CalendarSync,
  SmsReminders,
  PayToBook,
  TeamRoles,
];
