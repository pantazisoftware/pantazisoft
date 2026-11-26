/* eslint-disable @next/next/no-img-element -- static decorative replicas */
import type { ComponentType, CSSProperties, ReactNode } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Camera,
  Check,
  Download,
  FolderTree,
  Image as ImageIcon,
  Images,
  LayoutGrid,
  Loader2,
  Mail,
  Mic,
  PenLine,
  Printer,
  QrCode,
  Save,
  Settings,
  Smile,
  Square,
  Trash2,
  Tv,
  Users,
  Video,
  X,
} from "lucide-react";
import { d } from "../frames";
import {
  ALBUM,
  Badge,
  Button,
  Card,
  GUEST_VARS,
  PHOTO,
  Scene,
  THEME,
  Viewport,
  cn,
  qr,
} from "./ui";
import "./scope.css";

/*
 * Memo, one replica per feature in the order of `features` in the copy.
 *
 * Memo has no per-feature illustrations, so each replica is the real screen
 * behind the feature, ported from the Memo codebase with its markup, classes
 * and English strings unchanged: the guest page (components/album/*), the
 * album dashboard (app/(dashboard)/albums/[albumId]/*), the moderator view
 * (app/m/[albumId]), the QR designer (components/qr/QRDesigner.tsx), the live
 * slideshow (components/album/Slideshow.tsx) and the hero's QR card and toast
 * (components/marketing/HeroVisualAnimated.tsx). The album is the one /demo
 * shows: "Anna & Mike" at Villa Rosa. Pages are laid out at a page width and
 * scaled into the surface, like a screenshot. Additions are the rp-* motion
 * classes; viewport variants are fixed to the form that width shows.
 */

/** A floating card: breaks out past the colour card, with the shared lifted shadow. */
const FLOAT = "rp-lift";

/** Surface size inside the stage (.rp-fill). */
const SW = 416;

/** A float placed in stage coordinates, its content laid out at 1/k and scaled. */
function Float({
  x,
  y,
  w,
  k = 1,
  className,
  style,
  children,
}: {
  x: number;
  y: number;
  /** Width in the float's own (unscaled) pixels. */
  w: number;
  k?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div className={cn("absolute z-10", className)} style={{ left: x, top: y, ...style }}>
      <div className="origin-top-left" style={{ width: w, scale: String(k) }}>
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Guest page pieces: components/album/UploadControls.tsx, CameraCaptureButtons,
   GuestActions, with the terracotta theme (lib/album/themes.ts).            */

function SectionPill({ active, label, className, style }: { active: boolean; label: string; className?: string; style?: CSSProperties }) {
  return (
    <span
      className={cn("px-3.5 py-1.5 rounded-full text-sm border transition-colors", className)}
      style={{
        ...(active
          ? { background: THEME.accent, color: THEME.accentFg, borderColor: THEME.accent }
          : {
              background: "white",
              borderColor: "rgba(0,0,0,0.08)",
              color: "var(--theme-ink, currentColor)",
            }),
        ...style,
      }}
    >
      {label}
    </span>
  );
}

function SectionPicker({ active, pressAt }: { active: "main" | "ceremony" | "party"; pressAt?: number }) {
  return (
    <div className="w-full max-w-md">
      <div
        className="text-xs uppercase tracking-wider text-center mb-2"
        style={{ color: "var(--theme-ink-soft, currentColor)", opacity: 0.7 }}
      >
        Where are these from?
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <SectionPill active={active === "main"} label="Main album" />
        <span className={pressAt !== undefined ? "rp-press inline-flex" : "inline-flex"} style={pressAt !== undefined ? d(pressAt) : undefined}>
          <SectionPill active={active === "ceremony"} label="Ceremony" />
        </span>
        <SectionPill active={active === "party"} label="Party" />
      </div>
    </div>
  );
}

function CaptureButtons({ pressPhoto, pressVideo }: { pressPhoto?: number; pressVideo?: number }) {
  const kinds = [
    { kind: "photo", icon: <Camera className="w-6 h-6" />, label: "Take photo", press: pressPhoto },
    { kind: "video", icon: <Video className="w-6 h-6" />, label: "Record video", press: pressVideo },
  ];
  return (
    <div
      className="flex w-full max-w-md rounded-2xl overflow-hidden shadow-warm"
      style={{ background: THEME.accent, color: THEME.accentFg }}
    >
      {kinds.map((k, i) => (
        <span
          key={k.kind}
          className="flex-1 min-w-0"
          style={i > 0 ? { boxShadow: `inset 1px 0 0 ${THEME.accentFg}40` } : undefined}
        >
          <span
            className={cn(
              "flex flex-col items-center justify-center gap-1 h-[4.5rem] px-2 text-sm font-medium text-center leading-tight",
              k.press !== undefined && "rp-press",
            )}
            style={k.press !== undefined ? d(k.press) : undefined}
          >
            {k.icon}
            {k.label}
          </span>
        </span>
      ))}
    </div>
  );
}

/** `section` null: an album without sections, which shows no picker. */
function UploadControls({ section, sectionPress, pressPhoto, pressVideo }: { section: "main" | "ceremony" | "party" | null; sectionPress?: number; pressPhoto?: number; pressVideo?: number }) {
  return (
    <>
      {section && (
        <div className="mb-4 w-full max-w-md">
          <SectionPicker active={section} pressAt={sectionPress} />
        </div>
      )}
      <div className="w-full max-w-md flex flex-col items-stretch gap-3">
        <CaptureButtons pressPhoto={pressPhoto} pressVideo={pressVideo} />
        <span className="block">
          <span
            className="flex items-center justify-center gap-2 h-14 px-6 rounded-2xl font-medium text-base border"
            style={{ borderColor: THEME.accent, color: THEME.accentText, background: THEME.surface }}
          >
            <Images className="w-5 h-5" /> From gallery
          </span>
        </span>
      </div>
      <div className="mt-2 text-xs opacity-60 text-center">Videos up to 3 minutes</div>
    </>
  );
}

function GuestActions({ voicePress, children }: { voicePress?: number; children?: ReactNode }) {
  const secondary = {
    color: THEME.accentText,
    background: THEME.surface,
    borderColor: `${THEME.accent}55`,
  };
  const action = (icon: ReactNode, label: string, press?: number) => (
    <span key={label} className={press !== undefined ? "rp-press inline-flex" : "inline-flex"} style={press !== undefined ? d(press) : undefined}>
      <Button variant="ghost" size="sm" className="border" style={secondary}>
        {icon} {label}
      </Button>
    </span>
  );
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-2 mt-3">
        {action(<Smile className="w-4 h-4" />, "My uploads")}
        {action(<PenLine className="w-4 h-4" />, "Sign photos")}
        {action(<Images className="w-4 h-4" />, "See all photos")}
        {action(<Mic className="w-4 h-4" />, "Voice message", voicePress)}
      </div>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* 1 · One QR code: the hero's QR card, scanned; the guest page it opens
   (GuestLanding + UploadControls), and the upload banner (QuickAddPhotos). */

function GuestScan() {
  const k = 0.7;
  return (
    <Scene>
      <div className="rp-fill" style={GUEST_VARS}>
        <Viewport w={SW / k} scale={k}>
          {/* GuestLanding, with the cover (42vh on a phone) cropped short. */}
          <div className="flex-1">
            <div className="relative w-full h-[190px] overflow-hidden">
              <img src={PHOTO.cover} alt="" className="w-full h-full object-cover object-[50%_8%]" />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to bottom, transparent 65%, ${THEME.bg} 100%)` }}
              />
            </div>
            <div className="max-w-2xl mx-auto px-6 -mt-24 relative">
              <div className="text-center rp-in" style={d(0.9)}>
                <h1 className="font-serif tracking-tight text-5xl text-balance break-words" style={{ color: THEME.ink }}>
                  {ALBUM.title}
                </h1>
                <p className="mt-3" style={{ color: THEME.inkSoft }}>
                  {ALBUM.dateLine}
                </p>
              </div>
              <div className="mt-12 flex flex-col items-center gap-3 rp-in" style={d(1.1)}>
                <UploadControls section={null} pressPhoto={2.0} />
              </div>
            </div>
          </div>
        </Viewport>
      </div>

      {/* HeroVisualAnimated: the QR card, here being scanned. */}
      <div className="absolute left-[-20px] top-[52px] z-10 -rotate-6">
        <div className="rp-pop" style={d(0)}>
          <div className={cn("relative bg-white rounded-xl p-2.5 border border-cream-200", FLOAT)}>
            <div className="relative w-[64px] h-[64px] overflow-hidden">
              <img src={qr("hero")} alt="" className="w-full h-full" />
              <span className="mm-scan absolute inset-x-0 top-0 h-[2px] rounded-full" style={{ background: THEME.accent, boxShadow: `0 0 8px ${THEME.accent}`, ...d(0.3) }} />
            </div>
            <div className="text-[7.5px] text-center mt-1 text-ink-700 font-medium uppercase tracking-wider">
              Scan me
            </div>
          </div>
        </div>
      </div>

      {/* QuickAddPhotos: the upload banner, pinned to the bottom. */}
      <Float x={230} y={256} w={370} k={0.74} className="rp-slide" style={d(2.3, { "--from-x": "0px", "--from-y": "16px", ...GUEST_VARS, background: "none" })}>
        <div
          className={cn("mx-auto max-w-md rounded-2xl border bg-white/95 backdrop-blur px-4 py-3", FLOAT)}
          style={{ borderColor: `${THEME.accent}55` }}
        >
          <div className="flex items-start gap-3">
            <span className="shrink-0 mt-0.5" style={{ color: THEME.accent }}>
              <Loader2 className="w-5 h-5 animate-spin" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-ink-900">
                Uploading <span className="rp-count" style={d(2.5, { "--to": 4 })} /> of 5
              </div>
              <div className="text-xs text-ink-500 mt-0.5">Keep this page open until it finishes</div>
            </div>
            <span className="shrink-0 -mr-1 -mt-1 h-8 w-8 inline-flex items-center justify-center rounded-full text-ink-500">
              <X className="w-4 h-4" />
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-cream-200 overflow-hidden mt-2.5">
            <div className="h-full rp-grow-x" style={d(2.5, { width: "80%", background: THEME.accent })} />
          </div>
        </div>
      </Float>
    </Scene>
  );
}

/* ------------------------------------------------------------------------ */
/* 2 · QR designer: the templates tab, and the preview card with the
   template applied (components/qr/QRDesigner.tsx, lib/qr/types.ts).         */

const QR_TEMPLATES = [
  { id: "botanical", name: "Botanical", description: "Sage green on cream", bg: "#FDFBF7" },
  { id: "minimal", name: "Minimal", description: "Bold black on white", bg: "#FFFFFF" },
  { id: "romantic", name: "Romantic", description: "Classy curves in warm gold", bg: "#F8F3EC" },
  { id: "modern", name: "Modern Geometric", description: "Terracotta corners + ink", bg: "#EFE5D3" },
  { id: "sunset", name: "Sunset", description: "Warm coral → terracotta gradient", bg: "#FFF7EE" },
  { id: "ocean", name: "Ocean", description: "Coastal teal → blue gradient", bg: "#F1F4F6" },
];

function QrDesigner() {
  const k = 0.72;
  const selected = "romantic";
  return (
    <Scene>
      <div className="rp-fill bg-cream-50">
        <Viewport w={SW / k} scale={k}>
          <div className="px-8 py-8">
            <h2 className="font-serif text-2xl text-ink-900 mb-2">QR designer</h2>
            <p className="text-sm text-ink-500 mb-6 w-[330px]">
              Design the QR code your guests will scan. Pick a template or build your own.
            </p>
            <div className="w-[350px] space-y-5">
              <div className="flex gap-2 border-b border-cream-200">
                <span className="px-4 py-2 text-sm font-medium border-b-2 -mb-px border-terracotta-500 text-terracotta-700">
                  Templates
                </span>
                <span className="px-4 py-2 text-sm font-medium border-b-2 -mb-px border-transparent text-ink-500">
                  Custom
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {QR_TEMPLATES.map((t, i) => (
                  <div key={t.id} className="rp-pop" style={d(0.1 + i * 0.08)}>
                    <div
                      className={cn(
                        "p-3 rounded-2xl border-2 text-left transition-all",
                        t.id === selected
                          ? "border-terracotta-500 ring-2 ring-terracotta-300/30 bg-cream-50 shadow-warm-lg"
                          : "border-cream-200",
                        t.id === selected && "rp-press",
                      )}
                      style={t.id === selected ? d(1.0) : undefined}
                    >
                      <div
                        className="w-full aspect-square rounded-lg overflow-hidden p-2"
                        style={{ background: t.bg, border: "1px solid #EFE5D3" }}
                      >
                        <img src={qr(t.id)} alt="" className="w-full h-full" />
                      </div>
                      <div className="mt-3 px-1">
                        <div className="font-medium text-sm text-ink-900">{t.name}</div>
                        <div className="text-xs text-ink-500 mt-0.5 leading-snug">{t.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Viewport>
      </div>

      {/* The preview card (the designer's right column). */}
      <Float x={345} y={52} w={218} k={0.72} className="rp-slide" style={d(0.5, { "--from-x": "16px" })}>
        <Card className={cn("p-5 flex flex-col items-center", FLOAT)}>
          <div className="mb-5 w-[176px] h-[176px] rp-pop" style={d(1.2)}>
            <img src={qr(selected)} alt="" className="w-full h-full" />
          </div>
          <div className="text-xs text-ink-500 text-center mb-4 break-all">{ALBUM.url}</div>
          <div className="flex gap-2 w-full">
            <Button variant="outline" size="sm" className="flex-1 px-0">
              <Download className="w-4 h-4" /> PNG
            </Button>
            <Button variant="outline" size="sm" className="flex-1 px-0">
              <Download className="w-4 h-4" /> SVG
            </Button>
          </div>
          <span className="rp-press mt-3 w-full flex" style={d(2.4)}>
            <Button size="sm" className="w-full">
              <Save className="w-4 h-4" /> Save design
            </Button>
          </span>
        </Card>
      </Float>
    </Scene>
  );
}

/* ------------------------------------------------------------------------ */
/* 3 · Live photo wall: /slideshow/[slug] (components/album/Slideshow.tsx),
   advancing through photos, with the hero's "just shared" toast.           */

const SLIDES = [PHOTO.friends, PHOTO.couple, PHOTO.sparklers];

function PhotoWall() {
  return (
    <Scene>
      <div className="rp-fill bg-black text-white">
        <div className="absolute inset-0">
          {SLIDES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={cn("absolute inset-0 w-full h-full object-contain", i > 0 && "mm-slide")}
              style={i > 0 ? d(i * 2) : undefined}
            />
          ))}
        </div>
        <div className="absolute bottom-5 right-5 flex gap-2 bg-black/40 backdrop-blur rounded-full px-4 py-2 text-xs">
          <span className="px-2">‹</span>
          <span className="px-2">Pause</span>
          <span className="px-2">›</span>
          <span className="relative px-2 opacity-60 whitespace-nowrap">
            <span className="mm-first">1 / 12</span>
            {[2, 3].map((n) => (
              <span key={n} className="mm-slide absolute inset-0 px-2" style={d((n - 1) * 2)}>
                {n} / 12
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* HeroVisualAnimated: the upload notification. */}
      <Float x={330} y={20} w={200} k={0.85} className="rp-slide" style={d(0.4, { "--from-x": "0px", "--from-y": "-10px" })}>
        <div className={cn("bg-white rounded-2xl border border-cream-200 px-3 py-2 flex items-center gap-2.5 max-w-[220px]", FLOAT)}>
          <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0">
            <img src={PHOTO.friends} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <div className="text-[11px] font-medium text-ink-900 leading-tight">Sofia just shared</div>
            <div className="text-[10px] text-sage-400 flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-400 animate-pulse" />
              new photo
            </div>
          </div>
        </div>
      </Float>
    </Scene>
  );
}

/* ------------------------------------------------------------------------ */
/* 4 · Sections: the host's "All uploads" page filtered to a section
   (photos/page.tsx), and the guest's section picker (UploadControls).      */

const CEREMONY = [
  { src: PHOTO.hands, guest: "Daniel" },
  { src: PHOTO.couple, guest: "Sofia" },
  { src: PHOTO.aisle, guest: "Alex" },
  { src: PHOTO.rings, guest: "Alex" },
];

function FilterPill({ active, children, className, style }: { active: boolean; children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <span
      className={cn(
        "px-4 py-1.5 rounded-full text-sm border transition-colors",
        active
          ? "bg-terracotta-500 text-white border-terracotta-500"
          : "border-cream-200 text-ink-700 bg-white",
        className,
      )}
      style={style}
    >
      {children}
    </span>
  );
}

function Sections() {
  const k = 0.7;
  return (
    <Scene>
      <div className="rp-fill bg-cream-50">
        <Viewport w={SW / k} scale={k}>
          <div className="px-8 py-8">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="font-serif text-2xl text-ink-900">All uploads</h2>
              <div className="text-sm text-ink-500">
                <span className="rp-count" style={d(1.4, { "--to": 4 })} /> of 12 shown
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <FilterPill active={false}>All · 12</FilterPill>
              <FilterPill active={false}>Main · 2</FilterPill>
              <FilterPill active className="rp-press" style={d(1.1)}>
                Ceremony · 4
              </FilterPill>
              <FilterPill active={false}>Party · 6</FilterPill>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {CEREMONY.map((m, i) => (
                <div key={i} className="rp-pop" style={d(1.4 + i * 0.12)}>
                  <Card className="overflow-hidden p-0">
                    <div className="aspect-square bg-cream-100 relative overflow-hidden">
                      <img src={m.src} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-2 text-xs text-ink-500 truncate">{m.guest} · 1 hour ago</div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Viewport>
      </div>

      {/* The guest's side: where the photos go. */}
      <Float x={-22} y={246} w={325} k={0.8} className="rp-slide" style={d(0.2, { "--from-x": "0px", "--from-y": "14px", ...GUEST_VARS, background: "none" })}>
        <div className={cn("rounded-2xl px-4 py-4", FLOAT)} style={{ background: THEME.bg }}>
          <SectionPicker active="ceremony" pressAt={0.7} />
        </div>
      </Float>
    </Scene>
  );
}

/* ------------------------------------------------------------------------ */
/* 5 · Moderation: the moderator view (app/m/[albumId]/page.tsx), with the
   album setting that turns it on (settings/page.tsx → Toggle).             */

const QUEUE = [
  { src: PHOTO.cake, guest: "Sofia" },
  { src: PHOTO.sparklers, guest: "Alex" },
  { src: PHOTO.dinner, guest: "anonymous", rejected: true },
  { src: PHOTO.table, guest: "Daniel" },
];

function Moderation() {
  const k = 0.7;
  return (
    <Scene>
      <div className="rp-fill bg-cream-50">
        <Viewport w={SW / k} scale={k}>
          <header className="border-b border-cream-200 bg-white">
            <div className="px-8 pt-7 pb-5 flex items-center justify-between">
              <div>
                <span className="font-serif text-xl text-terracotta-700">Memo</span>
                <span className="ml-3 text-ink-500 text-sm">Moderator view</span>
              </div>
              <div className="text-xs text-ink-500">ioana@example.com</div>
            </div>
          </header>
          <main className="px-8 py-8">
            <h1 className="font-serif text-3xl text-ink-900 mb-2">{ALBUM.title}</h1>
            <p className="text-ink-500 text-sm mb-6">Review uploads from guests.</p>
            <div className="grid grid-cols-4 gap-3">
              {QUEUE.map((m, i) => (
                <div key={i} className="rp-pop" style={d(0.3 + i * 0.12)}>
                  <Card className="overflow-hidden p-0">
                    <div className="aspect-square bg-cream-100 relative">
                      <img src={m.src} alt="" className="w-full h-full object-cover" />
                      {m.rejected ? (
                        <div
                          className="rp-in absolute inset-0 flex items-center justify-center pointer-events-none"
                          style={d(1.9, { background: "rgba(0,0,0,0.5)" })}
                        >
                          <span className="text-white text-xs font-medium uppercase tracking-wider px-2 py-1 rounded bg-destructive/80">
                            Rejected
                          </span>
                        </div>
                      ) : (
                        <Badge className="absolute top-2 left-2">ready</Badge>
                      )}
                    </div>
                    <div className="p-2 flex items-center justify-between">
                      <span className="text-xs text-ink-500 truncate">{m.guest} · 1 hour ago</span>
                      <div className="flex gap-2">
                        {!m.rejected && (
                          <span className={i === 0 ? "rp-press inline-flex" : "inline-flex"} style={i === 0 ? d(1.2) : undefined}>
                            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                              <Check className="w-4 h-4 text-sage-400" />
                            </Button>
                          </span>
                        )}
                        <span className={m.rejected ? "rp-press inline-flex" : "inline-flex"} style={m.rejected ? d(1.6) : undefined}>
                          <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                            {m.rejected ? (
                              <Check className="w-4 h-4 text-sage-400" />
                            ) : (
                              <Trash2 className="w-4 h-4 text-destructive" />
                            )}
                          </Button>
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </main>
        </Viewport>
      </div>

      {/* Album settings: the switch that sends uploads through review. */}
      <Float x={230} y={286} w={340} k={0.8} className="rp-slide" style={d(2.4, { "--from-x": "0px", "--from-y": "14px" })}>
        <div className={cn("rounded-2xl bg-white p-1", FLOAT)}>
          <label className="flex items-center gap-3 p-3 rounded-xl">
            <input
              type="checkbox"
              checked
              readOnly
              tabIndex={-1}
              className="w-4 h-4 rounded border-cream-300 text-terracotta-500"
            />
            <span className="text-sm text-ink-700">Require moderator approval before public</span>
          </label>
        </div>
      </Float>
    </Scene>
  );
}

/* ------------------------------------------------------------------------ */
/* 6 · Full original quality: the album dashboard (albums/[albumId]/layout
   and AlbumNav) and its "Export the whole album" card (DownloadZipButton),
   preparing the ZIP and then offering it.                                  */

const NAV = [
  {
    key: "Album",
    items: [
      { label: "Overview", icon: LayoutGrid, active: true },
      { label: "Photos", icon: ImageIcon },
      { label: "Sub-albums", icon: FolderTree },
      { label: "Voice messages", icon: Mic },
    ],
  },
  {
    key: "People",
    items: [
      { label: "Guests", icon: Mail },
      { label: "Moderators", icon: Users },
    ],
  },
  {
    key: "Share with guests",
    items: [
      { label: "QR design", icon: QrCode },
      { label: "Print", icon: Printer },
      { label: "Slideshow", icon: Tv },
    ],
  },
];

function ZipExport() {
  const k = 0.7;
  return (
    <Scene>
      <div className="rp-fill bg-cream-50">
        <Viewport w={SW / k} scale={k}>
          <div className="border-b border-cream-200 bg-cream-50">
            <div className="px-8 pt-8 pb-2">
              <span className="inline-flex items-center gap-2 text-sm text-ink-500 mb-4">
                <ArrowLeft className="w-3.5 h-3.5" /> All albums
              </span>
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-2 min-w-0">
                    <h1 className="font-serif text-3xl text-ink-900 line-clamp-2 break-words text-balance min-w-0">
                      {ALBUM.title}
                    </h1>
                    <Badge variant="soft">active</Badge>
                  </div>
                  <p className="text-sm text-ink-500 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span>September 12, 2026</span>
                    <span aria-hidden>·</span>
                    <span className="inline-flex items-center gap-1 text-terracotta-600 break-all">
                      me-mo.ro/a/anna-and-mike
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                    </span>
                  </p>
                </div>
                <span className="shrink-0 inline-flex items-center gap-2 h-10 px-4 rounded-full border border-cream-300 text-sm text-ink-700">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </span>
              </div>
              <nav className="grid grid-cols-3 gap-3">
                {NAV.map((group) => (
                  <div key={group.key} className="rounded-2xl border border-cream-200 bg-white/60 p-3">
                    <div className="text-[11px] uppercase tracking-wider text-ink-500 px-2 pb-1.5">{group.key}</div>
                    <div className="flex flex-col">
                      {group.items.map((tab) => (
                        <span
                          key={tab.label}
                          className={cn(
                            "px-2 py-2 rounded-lg text-sm flex items-center gap-2.5",
                            tab.active ? "text-terracotta-700 font-medium" : "text-ink-700",
                          )}
                        >
                          <tab.icon className={cn("w-4 h-4 shrink-0", tab.active ? "text-terracotta-600" : "text-ink-500")} />
                          <span className="truncate">{tab.label}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </Viewport>
      </div>

      {/* The overview page's export card. */}
      {/* Its phone layout (flex-col below sm), compact enough to float. */}
      <Float x={278} y={146} w={340} k={0.66} className="rp-slide" style={d(0.2, { "--from-x": "14px" })}>
        <Card className={cn("p-6 flex flex-col gap-4", FLOAT)}>
          <div className="flex-1">
            <div className="font-serif text-lg text-ink-900">Export the whole album</div>
            <div className="text-sm text-ink-500 mt-1">
              Build a ZIP of every original photo and video. We&apos;ll email you a download link when it&apos;s
              ready, usually 1–3 minutes for a typical album.
            </div>
          </div>
          <div className="grid">
            {/* Preparing… */}
            <div className="mm-swap-out min-w-[220px] [grid-area:1/1] self-center" style={d(0)}>
              <Button variant="outline" size="sm" disabled>
                <Loader2 className="w-4 h-4 animate-spin" /> Preparing ZIP…
              </Button>
              <div className="mt-2">
                <div className="h-1.5 rounded-full bg-cream-200 overflow-hidden">
                  <div className="rp-grow-x h-full bg-terracotta-500" style={d(0.3, { width: "100%" })} />
                </div>
                <div className="text-xs text-ink-500 mt-1">
                  <span className="rp-count" style={d(0.3, { "--to": 112 })} /> / 112 items
                </div>
              </div>
            </div>
            {/* …ready. */}
            <div className="mm-swap-in min-w-[220px] [grid-area:1/1]" style={d(0)}>
              <Button variant="primary" size="sm">
                <Download className="w-4 h-4" /> Download ZIP
              </Button>
              <div className="text-xs text-ink-500 mt-2 flex items-center gap-1">
                <Check className="w-3 h-3 text-sage-400" />
                112 items · link refreshes automatically
              </div>
              <div className="text-xs text-ink-500 mt-0.5">Kept for 7 days after it&apos;s built.</div>
              <span className="text-xs text-ink-500 underline mt-1 inline-block">Rebuild ZIP</span>
            </div>
          </div>
        </Card>
      </Float>
    </Scene>
  );
}

/* ------------------------------------------------------------------------ */
/* 7 · Photos, video and voice: the guest page's capture buttons and
   actions, with the voice recorder open and recording
   (components/album/AudioGuestbook.tsx).                                   */

function Guestbook() {
  const k = 0.6;
  const seconds = 14;
  return (
    <Scene>
      <div className="rp-fill" style={GUEST_VARS}>
        <Viewport w={SW / k} scale={k}>
          <div className="max-w-2xl mx-auto px-6 pt-5">
            <div className="flex flex-col items-center gap-3">
              <div className="w-full max-w-md flex flex-col items-stretch gap-3">
                <CaptureButtons pressPhoto={0.3} pressVideo={0.7} />
                <span className="block">
                  <span
                    className="flex items-center justify-center gap-2 h-14 px-6 rounded-2xl font-medium text-base border"
                    style={{ borderColor: THEME.accent, color: THEME.accentText, background: THEME.surface }}
                  >
                    <Images className="w-5 h-5" /> From gallery
                  </span>
                </span>
              </div>
              <div className="mt-2 text-xs opacity-60 text-center">Videos up to 3 minutes</div>
              <GuestActions voicePress={1.1}>
                <div className="mt-4 w-full flex justify-center rp-slide" style={d(1.3, { "--from-x": "0px", "--from-y": "12px" })}>
                  <div
                    className="relative w-full max-w-md rounded-2xl border p-5 text-center"
                    style={{ borderColor: `${THEME.accent}55`, background: `${THEME.surface}66` }}
                  >
                    <div className="font-medium" style={{ color: THEME.ink }}>
                      Leave a voice message
                    </div>
                    <p className="text-xs mt-1" style={{ color: THEME.inkSoft }}>
                      Say something to the hosts: they&apos;ll hear it with the photos
                    </p>
                    <div className="mt-4 font-mono text-3xl tabular-nums" style={{ color: THEME.ink }}>
                      0:<span className="rp-count" style={d(1.6, { "--to": seconds })} />
                    </div>
                    <div className="h-1.5 rounded-full bg-cream-200 overflow-hidden mt-3">
                      <div
                        className="h-full rp-grow-x"
                        style={d(1.6, { width: `${(seconds / 120) * 100}%`, background: THEME.accent })}
                      />
                    </div>
                    <span
                      className="mt-4 inline-flex items-center gap-2 h-12 px-6 rounded-full font-medium border"
                      style={{ borderColor: THEME.accent, color: THEME.accent }}
                    >
                      <Square className="w-4 h-4" /> Stop
                    </span>
                    <div className="text-xs mt-2" style={{ color: THEME.inkSoft }}>
                      {120 - seconds}s left
                    </div>
                  </div>
                </div>
              </GuestActions>
            </div>
          </div>
        </Viewport>
      </div>
    </Scene>
  );
}

export const memoReplicas: ComponentType[] = [
  GuestScan,
  QrDesigner,
  PhotoWall,
  Sections,
  Moderation,
  ZipExport,
  Guestbook,
];
