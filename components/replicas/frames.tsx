import type { CSSProperties, ReactNode } from "react";

/**
 * Frames that replicas sit in. All coordinates are in the 480 × 360 stage.
 * A frame is usually placed so it runs off one or two edges of the card,
 * the way product shots are cropped, and the card's colour shows around it.
 */

type Box = { x: number; y: number; w: number; h: number };

const place = ({ x, y, w, h }: Box): CSSProperties => ({
  position: "absolute",
  left: x,
  top: y,
  width: w,
  height: h,
});

/** A desktop browser window: traffic lights and a URL. */
export function Browser({
  url,
  dark = false,
  children,
  className = "",
  style,
  ...box
}: Box & {
  url?: string;
  dark?: boolean;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-[14px] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] ${
        dark ? "bg-[#111113] text-white" : "bg-white"
      } ${className}`}
      style={{ ...place(box), ...style }}
    >
      <div
        className={`flex h-[26px] shrink-0 items-center gap-[5px] px-[10px] ${
          dark ? "bg-[#1c1c1f]" : "border-b border-[#ececec] bg-[#f7f7f7]"
        }`}
      >
        <span className="h-[7px] w-[7px] rounded-full bg-[#ff5f57]" />
        <span className="h-[7px] w-[7px] rounded-full bg-[#febc2e]" />
        <span className="h-[7px] w-[7px] rounded-full bg-[#28c840]" />
        {url && (
          <span
            className={`mx-auto -translate-x-[14px] rounded-[5px] px-[10px] py-[2px] text-[8.5px] ${
              dark ? "bg-white/8 text-white/50" : "bg-[#ececec] text-[#777]"
            }`}
          >
            {url}
          </span>
        )}
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

/** An iPhone, black bezel and dynamic island. Height is usually taller than
 *  the stage, so the phone runs off the bottom of the card. */
export function Phone({
  children,
  time = "9:41",
  light = false,
  className = "",
  style,
  ...box
}: Box & {
  children: ReactNode;
  time?: string;
  /** Light screen (dark status bar text). */
  light?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`rounded-[38px] bg-[#1a1a1c] p-[6px] shadow-[0_30px_60px_-18px_rgba(0,0,0,0.5)] ring-1 ring-[#3a3a3e] ${className}`}
      style={{ ...place(box), ...style }}
    >
      <div
        className={`relative h-full w-full overflow-hidden rounded-[32px] ${
          light ? "bg-white text-[#0b0b0c]" : "bg-black text-white"
        }`}
      >
        <div className="flex h-[34px] items-center justify-between px-[22px] pt-[4px] text-[10px] font-semibold">
          <span>{time}</span>
          <span className="absolute top-[9px] left-1/2 h-[18px] w-[62px] -translate-x-1/2 rounded-full bg-black" />
          <span className="flex items-center gap-[3px]">
            <span className="flex items-end gap-[1.5px]">
              {[3, 5, 7, 9].map((h) => (
                <span key={h} className="w-[2px] rounded-[1px] bg-current" style={{ height: h }} />
              ))}
            </span>
            <span className="ml-[2px] h-[8px] w-[15px] rounded-[2.5px] border border-current/60 p-[1px]">
              <span className="block h-full w-[75%] rounded-[1px] bg-current" />
            </span>
          </span>
        </div>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

/** A floating card (popover, toast, widget) with a soft shadow. */
export function Float({
  children,
  className = "",
  style,
  ...box
}: Partial<Box> & {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`absolute rounded-[12px] bg-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.35)] ${className}`}
      style={{
        left: box.x,
        top: box.y,
        width: box.w,
        height: box.h,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Style with custom properties (--to, --steps, --from-x, …) allowed. */
export type Vars = CSSProperties & { [k: `--${string}`]: string | number };

/** Shorthand for an animation delay on rp-* elements, plus any other style. */
export const d = (seconds: number, extra?: Vars): CSSProperties =>
  ({ "--d": `${seconds}s`, ...extra }) as CSSProperties;
