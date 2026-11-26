import type { ComponentType, ReactNode } from "react";
import { d } from "../frames";
import {
  AntennaRadiowaves,
  ArrowClockwise,
  ArrowCounterclockwise,
  BackwardFill,
  CheckmarkSealFill,
  ChevronRight,
  ChevronUpDown,
  DocTextFill,
  DotRadiowaves,
  EyeSlashFill,
  ForwardFill,
  GameControllerFill,
  Gearshape,
  Globe,
  Grid2x2Fill,
  HandPointFill,
  HandRaisedFill,
  HouseFill,
  IphoneRadiowaves,
  KeyboardFill,
  Line3,
  LockDocFill,
  LockShieldFill,
  PlayPauseFill,
  Power,
  Speaker,
  StackPlayFill,
  StopFill,
  SunMaxFill,
  TvMediabox,
  UturnBackward,
  Wifi,
} from "./icons";
import {
  ChannelRocker,
  DPad,
  Float,
  Footer,
  Group,
  GroupedBar,
  Header,
  Screen,
  SettingsIcon,
  SettingsRow,
  T,
  Toggle,
  VolumeRocker,
  cn,
  type BarButton,
} from "./ui";
import "./scope.css";

/*
 * Remoto (SwiftUI, iOS), one replica per feature in the order of `features`
 * in the copy. Each card's surface is a crop of a real Remoto screen, rebuilt
 * from the Swift source (tvremote+/Features, TVRemotePlusWidget) with its
 * colours, radii, spacing and labels, and measured against the App Store
 * screenshots in public/app/remoto. Screens are laid out in points at the
 * width of the iPhone those screenshots were taken on (440pt) and scaled.
 */

function Scene({ children }: { children: ReactNode }) {
  return <div className="rmt absolute inset-0">{children}</div>;
}

/* ── 1 · Never an ad: the Pro sheet, "No ads. Ever." ─────────────────── */

const PRO_ROWS = [
  { icon: <HandPointFill s={13} />, color: "#598cff", title: "Touchpad mode", sub: "Swipe to move, tap to select." },
  { icon: <KeyboardFill s={13} cut="#8c59f2" />, color: "#8c59f2", title: "iOS keyboard", sub: "Type into TV search fields." },
  { icon: <Grid2x2Fill s={13} />, color: "#f28c33", title: "Apps launcher", sub: "YouTube, Netflix, Prime, Disney+…" },
  { icon: <TvMediabox s={13} cut="#4dbf8c" />, color: "#4dbf8c", title: "Unlimited paired TVs", sub: "Free is one. Pro is every set." },
  { icon: <StackPlayFill s={13} cut="#fa6b8c" />, color: "#fa6b8c", title: "Widgets & Siri", sub: "Fire keys from the Lock Screen." },
];

function TrustPills() {
  const pills = [
    { icon: <LockShieldFill s={10} cut="#16161c" />, label: "mTLS" },
    { icon: <EyeSlashFill s={10} cut="#16161c" />, label: "No tracking" },
    { icon: <Wifi s={10} w={2.6} />, label: "Local only" },
  ];
  return (
    <div className="flex gap-[6px]">
      {pills.map((p, i) => (
        <div
          key={p.label}
          className="rp-pop flex flex-1 items-center justify-center gap-[4px] rounded-[9px] bg-white/5 py-[7px] text-white/75 shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.08)]"
          style={d(1.9 + i * 0.15)}
        >
          {p.icon}
          <span className={cn(T.caption2, "font-semibold")}>{p.label}</span>
        </div>
      ))}
    </div>
  );
}

function NeverAnAd() {
  const W = 416 / 0.78;
  return (
    <Scene>
      <Screen s={0.78} top={300} bg="var(--rmt-bg)">
        {/* PaywallBackground: the blue glow behind the hero. */}
        <div
          className="absolute rounded-full blur-[20px]"
          style={{
            width: 520,
            height: 520,
            left: W / 2 - 260,
            top: 478 - 280 - 260,
            background: "radial-gradient(closest-side, rgba(51,112,240,0.30), rgba(51,112,240,0) 100%)",
          }}
        />
        <div className="absolute" style={{ left: (W - 299) / 2, top: 315, width: 299 }}>
          <div className="overflow-hidden rounded-[16px] bg-white/5 shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.08)]">
            {PRO_ROWS.map((r, i) => (
              <div key={r.title} className="rp-in" style={d(0.1 + i * 0.14)}>
                <div className="flex items-center gap-[12px] px-[12px] py-[9px]">
                  <span className="flex size-[28px] items-center justify-center rounded-[7px] text-white" style={{ background: r.color }}>
                    {r.icon}
                  </span>
                  <div className="flex flex-col gap-[1px]">
                    <span className="text-[15px] leading-[18px] font-semibold tracking-[-0.016em]">{r.title}</span>
                    <span className="text-[12px] leading-[14px] text-white/55">{r.sub}</span>
                  </div>
                </div>
                <span className="ml-[52px] block h-[0.5px] bg-white/[0.06]" />
              </div>
            ))}
            <div className="flex items-center gap-[12px] px-[12px] py-[9px]">
              <span className="rp-pop flex size-[28px] items-center justify-center rounded-[7px] bg-[#52d18c] text-white" style={d(1.1)}>
                <HandRaisedFill s={13} />
              </span>
              <div className="rp-in flex flex-col gap-[1px]" style={d(1.1)}>
                <span className="text-[15px] leading-[18px] font-semibold tracking-[-0.016em] text-[#c7fadb]">No ads. Ever.</span>
                <span className="text-[12px] leading-[14px] text-white/55">Not now, not later.</span>
              </div>
            </div>
          </div>
          <div className="mt-[16px]">
            <TrustPills />
          </div>
        </div>
      </Screen>
      {/* The paywall hero: the shipped app icon, 84pt, 20pt corners. */}
      <Float x={44} y={-22} w={84} h={84} s={0.95} radius={20} className="rp-pop" style={d(0)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/app/remoto/remoto-icon.png" alt="" className="size-full object-cover" />
        <span className="absolute inset-0 rounded-[20px] shadow-[inset_0_0_0_0.8px_rgba(255,255,255,0.2)]" />
      </Float>
    </Scene>
  );
}

/* ── 2 · Instant discovery: the device list filling in ──────────────── */

type Device = { name: string; mac: string; icon: ReactNode; tint: string; paired?: boolean };

const DEVICES: Device[] = [
  { name: "Xiaomi - Living", mac: "4C:31:2D:89:02:56", tint: "#fa8c33", paired: true, icon: <TvMediabox s={20} /> },
  { name: "Bedroom Chromecast", mac: "F4:F5:D8:6A:1C:E3", tint: "#4d9eff", icon: <TvMediabox s={20} /> },
];
const SHIELD: Device = {
  name: "SHIELD Android TV",
  mac: "00:04:4B:A7:3E:91",
  tint: "#82d44a",
  icon: <GameControllerFill s={20} />,
};

/** DeviceRow + the NavigationLink chevron, inside an 81pt list cell. */
function DeviceRow({ dev, sep }: { dev: Device; sep?: boolean }) {
  const tintBg = `color-mix(in srgb, ${dev.tint} 16%, #1c1c1e)`;
  return (
    <div className="relative flex h-[81px] items-center pr-[18px] pl-[21px]">
      <span
        className="flex size-[42px] shrink-0 items-center justify-center rounded-[10px]"
        style={{
          background: tintBg,
          color: dev.tint,
          boxShadow: `inset 0 0 0 0.5px color-mix(in srgb, ${dev.tint} 32%, transparent)`,
        }}
      >
        {dev.icon && <IconWithCut icon={dev.icon} cut={tintBg} />}
      </span>
      <div className="ml-[14px] flex min-w-0 flex-col gap-[3px]">
        <span className={cn(T.body, "leading-[20px] font-medium")}>{dev.name}</span>
        <span className={cn(T.caption, "leading-[14px] text-[var(--rmt-label2)]")}>{dev.mac}</span>
      </div>
      <div className="ml-auto flex items-center gap-[9px] pl-[8px]">
        {dev.paired && (
          <span className="flex h-[22px] items-center gap-[4px] rounded-full bg-[#30d158]/15 px-[8px] text-[var(--rmt-green)] shadow-[inset_0_0_0_0.5px_rgba(48,209,88,0.25)]">
            <CheckmarkSealFill s={10} cut="#1f3726" />
            <span className={cn(T.caption2, "font-semibold")}>Paired</span>
          </span>
        )}
        <ChevronRight s={14} w={2.6} className="text-[#59595e]" />
      </div>
      {sep && <span className="absolute right-[20px] bottom-0 left-[77px] h-[0.5px] bg-[var(--rmt-sep)]" />}
    </div>
  );
}

/** Re-renders an icon element with the cut colour of the square behind it. */
function IconWithCut({ icon, cut }: { icon: ReactNode; cut: string }) {
  if (icon && typeof icon === "object" && "type" in icon) {
    const el = icon as React.ReactElement<{ cut?: string; s?: number }>;
    const Comp = el.type as ComponentType<{ cut?: string; s?: number }>;
    return <Comp {...el.props} cut={cut} />;
  }
  return <>{icon}</>;
}

function GlassButton({ children, x }: { children: ReactNode; x: number | string }) {
  return (
    <span
      className="absolute top-[68px] flex size-[44px] items-center justify-center rounded-full bg-[#141414] text-white shadow-[inset_0_0.5px_0_rgba(255,255,255,0.28),inset_0_0_0_0.5px_rgba(255,255,255,0.1)]"
      style={typeof x === "number" ? { left: x } : { right: 20 }}
    >
      {children}
    </span>
  );
}

function InstantDiscovery() {
  return (
    <Scene>
      <Screen s={0.8} top={46}>
        <GlassButton x={20}>
          <Gearshape s={22} />
        </GlassButton>
        <GlassButton x="right">
          <ArrowClockwise s={21} />
        </GlassButton>
        <div className={cn(T.largeTitle, "absolute top-[128px] left-[20px]")}>Remoto</div>

        {/* statusRow: "Searching for TVs…" until the browser is ready. */}
        <Group className="absolute inset-x-0 top-[177px] h-[51px] rounded-[25.5px]">
          <div className="rmt-out absolute inset-0 flex items-center text-[var(--rmt-blue)]" style={d(0.2)}>
            <span className="flex w-[61px] justify-center pl-[3px]"><AntennaRadiowaves s={24} /></span>
            <span className={T.body}>Searching for TVs…</span>
          </div>
          <div className="rp-in absolute inset-0 flex items-center text-[var(--rmt-green)]" style={d(1.1)}>
            <span className="flex w-[61px] justify-center pl-[3px]"><DotRadiowaves s={25} live /></span>
            <span className={T.body}>Listening</span>
          </div>
        </Group>

        <div className={cn(T.headline, "absolute top-[257px] left-[41px] text-[var(--rmt-label2)]")}>Discovered TVs</div>
        <Group className="absolute inset-x-0 top-[288px]">
          {DEVICES.map((dev, i) => (
            <div key={dev.name} className="rp-in" style={d(0.5 + i * 0.6)}>
              <DeviceRow dev={dev} sep={i === 0} />
            </div>
          ))}
        </Group>
      </Screen>
      {/* The next TV to answer the Bonjour browse, arriving in the list. */}
      <Float
        x={272}
        y={268}
        w={290}
        h={81}
        s={0.8}
        radius={26}
        bg="#1c1c1e"
        className="rp-slide"
        style={d(1.9, { "--from-x": "0px", "--from-y": "16px" })}
      >
        <DeviceRow dev={SHIELD} />
      </Float>
    </Scene>
  );
}

/* ── 3 · Full remote control: nav group, D-pad and rockers ──────────── */

const NAV = (at: Partial<Record<"power" | "back" | "home" | "menu", number>> = {}): BarButton[] => [
  { icon: <Power s={13} w={2.6} />, label: "Power", tint: "var(--rmt-power)", at: at.power },
  { icon: <UturnBackward s={13} w={2.6} />, label: "Back", at: at.back },
  { icon: <HouseFill s={13} />, label: "Home", at: at.home },
  { icon: <Line3 s={13} w={2.6} />, label: "Menu", at: at.menu },
];

const MEDIA = (at: Partial<Record<"rew" | "play" | "fwd" | "stop", number>> = {}): BarButton[] => [
  { icon: <BackwardFill s={13} />, label: "Rew", at: at.rew },
  { icon: <PlayPauseFill s={13} />, label: "Play", at: at.play },
  { icon: <ForwardFill s={13} />, label: "Fwd", at: at.fwd },
  { icon: <StopFill s={13} />, label: "Stop", at: at.stop },
];

/** RemoteView, centred in the space between the status bar and tab bar
 *  (at y 343 on a 956pt screen). */
function RemoteView({
  nav,
  media,
  dpad,
  ch = {},
  vol = {},
}: {
  nav?: BarButton[];
  media?: BarButton[];
  dpad?: Parameters<typeof DPad>[0]["press"];
  ch?: Parameters<typeof ChannelRocker>[0];
  vol?: Parameters<typeof VolumeRocker>[0];
}) {
  return (
    <div className="absolute inset-x-0 top-[343px] flex flex-col gap-[14px] px-[20px] py-[8px]">
      <GroupedBar buttons={nav ?? NAV()} />
      <div className="flex items-center justify-between gap-[10px]">
        <ChannelRocker {...ch} />
        <DPad press={dpad} />
        <VolumeRocker {...vol} />
      </div>
      <GroupedBar buttons={media ?? MEDIA()} />
    </div>
  );
}

/** RemoteStatusBar: device name, live dot, the app open on the TV. */
function StatusPill() {
  return (
    <div className="flex h-[60px] items-center gap-[12px] px-[18px]">
      <span className="rp-pulse size-[10px] rounded-full bg-[var(--rmt-green)] text-[var(--rmt-green)] shadow-[0_0_6px_rgba(48,209,88,0.7)]" />
      <div className="flex flex-col gap-[2px]">
        <span className={cn(T.headline, "leading-[20px]")}>Xiaomi - Living</span>
        <span className={cn(T.caption, "leading-[14px] text-[var(--rmt-subtle)]")}>Now: YouTube</span>
      </div>
      <ChevronUpDown s={13} w={2.4} className="ml-auto text-[var(--rmt-subtle)]" />
    </div>
  );
}

function FullRemote() {
  return (
    <Scene>
      <Screen s={0.85} top={305} bg="var(--rmt-bg)">
        <RemoteView
          nav={NAV({ home: 4.3, back: 5.0, power: 5.6 })}
          dpad={{ up: 0.5, right: 1.2, ok: 1.9, down: 2.7, left: 3.4 }}
          vol={{ up: 3.9 }}
        />
      </Screen>
      <Float
        x={90}
        y={-18}
        w={300}
        h={60}
        s={1}
        radius={22}
        bg="#1a1a20"
        className="rp-slide"
        style={d(0, { "--from-x": "0px", "--from-y": "-10px" })}
      >
        <span className="absolute inset-0 rounded-[22px] shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.08)]" />
        <StatusPill />
      </Float>
    </Scene>
  );
}

/* ── 4 · Media and channels: rockers, media bar, Lock Screen widget ──── */

/** The Lock Screen accessory widgets (rectangular + circular) on wallpaper. */
function LockWidgets() {
  const glass = "bg-white/[0.24] shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.12)]";
  const ink = "text-[#f6f1ff]";
  return (
    <div
      className="absolute inset-0 flex items-center gap-[14px] px-[10px]"
      style={{
        background:
          "radial-gradient(120% 140% at 85% 10%, #8a72cc 0%, rgba(138,114,204,0) 55%), linear-gradient(135deg, #5f4fae 0%, #3f3792 55%, #2b2a7a 100%)",
      }}
    >
      <div className={cn("flex h-[61px] w-[161px] items-stretch overflow-hidden rounded-[11px]", glass, ink)}>
        <span className="flex flex-1 items-center justify-center"><Speaker n={1} s={22} w={2.4} /></span>
        <span className="my-[4px] w-[0.5px] bg-white/[0.18]" />
        <span className="flex flex-1 items-center justify-center">
          <span className="rp-press" style={d(1.0)}><PlayPauseFill s={26} /></span>
        </span>
        <span className="my-[4px] w-[0.5px] bg-white/[0.18]" />
        <span className="flex flex-1 items-center justify-center"><Speaker n={3} s={22} w={2.4} /></span>
      </div>
      <div className={cn("flex size-[61px] items-center justify-center rounded-full", glass, ink)}>
        <span className="rp-press" style={d(4.6)}><PlayPauseFill s={26} /></span>
      </div>
    </div>
  );
}

function MediaAndChannels() {
  return (
    <Scene>
      <Screen s={0.8} top={380} bg="var(--rmt-bg)">
        <RemoteView
          media={MEDIA({ rew: 0.4, play: 1.0, fwd: 1.6, stop: 5.2 })}
          ch={{ up: 2.4, guide: 3.1, down: 3.8 }}
          vol={{ down: 4.4, level: 12 }}
        />
      </Screen>
      <Float
        x={131}
        y={311}
        w={256}
        h={81}
        s={0.85}
        radius={18}
        className="rp-slide"
        style={d(0.2, { "--from-x": "0px", "--from-y": "14px" })}
      >
        <LockWidgets />
      </Float>
    </Scene>
  );
}

/* ── 5 · Haptic feedback: Settings ▸ Preferences ─────────────────────── */

const PURPLE = "var(--rmt-purple)";

function Haptics() {
  const taps = [1.7, 3.1, 4.5];
  return (
    <Scene>
      <Screen s={0.94} top={0}>
        <Header>Preferences</Header>
        <Group>
          <SettingsRow
            icon={
              <span className="rp-press block" style={d(taps[0])}>
                <SettingsIcon color={PURPLE}><IphoneRadiowaves s={17} w={2} /></SettingsIcon>
              </span>
            }
            title="Haptic feedback"
            trailing={<Toggle at={0.6} />}
          />
          <SettingsRow
            icon={<SettingsIcon color="var(--rmt-pink)"><Speaker n={2} s={16} w={2.4} /></SettingsIcon>}
            title="Sound"
            trailing={<Toggle />}
            h={59}
          />
          <SettingsRow
            icon={<SettingsIcon color="var(--rmt-yellow)"><SunMaxFill s={17} w={2.2} /></SettingsIcon>}
            title="Keep screen awake"
            subtitle={<>Prevents your phone from locking while<br />the remote is open.</>}
            trailing={<Toggle />}
            h={80}
          />
          <SettingsRow
            icon={<SettingsIcon color="var(--rmt-blue)"><Globe s={17} w={1.8} /></SettingsIcon>}
            title="Language"
            trailing={
              <span className={cn(T.body, "flex items-center gap-[4px] text-[var(--rmt-label2)]")}>
                System default <ChevronUpDown s={14} w={2.4} />
              </span>
            }
            sep={false}
            h={60}
          />
        </Group>
      </Screen>
      {/* The D-pad's OK button, landing a tap with each press. */}
      <Float x={432} y={77} w={96} h={96} s={0.75} radius={48}>
        {taps.map((t) => (
          <span key={t} className="rmt-ring absolute inset-0 rounded-full border-[3px] border-white/70" style={d(t)} />
        ))}
        <span className="rp-press absolute inset-0" style={d(taps[0])}>
          <span className="rp-press absolute inset-0" style={d(taps[1] - taps[0])}>
            <span
              className="absolute inset-0 flex items-center justify-center rounded-full shadow-[0_6px_22px_rgba(38,89,217,0.55),inset_0_0_0_1px_rgba(255,255,255,0.16)]"
              style={{ background: "var(--rmt-accent)" }}
            >
              <span className="rmt-rounded pl-[1.5px] text-[22px] font-bold tracking-[1.5px]">OK</span>
            </span>
          </span>
        </span>
      </Float>
    </Scene>
  );
}

/* ── 6 · Private by design: Settings ▸ About, Advanced ───────────────── */

function Private() {
  return (
    <Scene>
      <Screen s={0.8} top={0}>
        <Header>About</Header>
        <Group>
          <div className="rp-in" style={d(0.1)}>
            <SettingsRow
              icon={<SettingsIcon color="var(--rmt-gray)"><LockDocFill s={16} cut="#8e8e93" /></SettingsIcon>}
              title="Privacy policy"
            />
          </div>
          <div className="rp-in" style={d(0.25)}>
            <SettingsRow
              icon={<SettingsIcon color="var(--rmt-gray)"><DocTextFill s={16} cut="#8e8e93" /></SettingsIcon>}
              title="Terms of use"
            />
          </div>
          <div className="rp-in flex items-center gap-[12px] py-[14px] pr-[20px] pl-[21px]" style={d(0.5)}>
            <span className="rp-pop block" style={d(0.9)}>
              <SettingsIcon color="var(--rmt-green)"><HandRaisedFill s={16} /></SettingsIcon>
            </span>
            <div className="flex flex-col gap-[3px] py-[2px]">
              <span className={cn(T.footnote, "leading-[16px] font-semibold")}>No ads. No tracking.</span>
              <span className={cn(T.caption, "leading-[14px] text-[var(--rmt-label2)]")}>
                Every command stays on your Wi-Fi. Your paired TVs are stored on-device only.
              </span>
            </div>
          </div>
        </Group>
        <Header>Advanced</Header>
        <Group>
          <SettingsRow
            icon={<SettingsIcon color="var(--rmt-red)"><ArrowCounterclockwise s={16} w={2.6} /></SettingsIcon>}
            title="Reset client identity"
            titleClass="text-[var(--rmt-red)]"
            sep={false}
          />
        </Group>
        <Footer>
          Wipes the on-device certificate used to pair with Android TVs and removes every paired
          device. Only useful if pairing is stuck refusing.
        </Footer>
      </Screen>
      {/* The paywall's trust row: mutual TLS, no tracking, local only. */}
      <Float
        x={252}
        y={292}
        w={315}
        h={43}
        s={0.8}
        radius={14}
        bg="#16161c"
        className="rp-slide"
        style={d(1.5, { "--from-x": "0px", "--from-y": "12px" })}
      >
        <div className="p-[8px]">
          <TrustPills />
        </div>
      </Float>
    </Scene>
  );
}

export const remotoReplicas: ComponentType[] = [
  NeverAnAd,
  InstantDiscovery,
  FullRemote,
  MediaAndChannels,
  Haptics,
  Private,
];
