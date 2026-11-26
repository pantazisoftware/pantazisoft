import { createElement, type SVGProps } from "react";

/*
 * WebScore's icons are Hugeicons (stroke rounded), drawn through
 * components/hugeicons/icon.tsx at a 1.75 stroke. pst does not depend on
 * @hugeicons, so the glyphs it needs are copied here verbatim from
 * @hugeicons/core-free-icons 4.x, and drawn the way HugeiconsIcon does.
 */

type Glyph = [string, Record<string, string>][];

const S = { stroke: "currentColor", strokeWidth: "1.5" };
const R = { ...S, strokeLinecap: "round" };
const RJ = { ...R, strokeLinejoin: "round" };

/** GaugeIcon */
const gauge: Glyph = [
  ["circle", { cx: "12", cy: "12", r: "10", ...S }],
  ["path", { d: "M18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12", ...R }],
  ["circle", { cx: "12", cy: "16", r: "2", ...S }],
  ["path", { d: "M12 14V10", ...R }],
];

/** Search01Icon (SearchIcon) */
const search: Glyph = [
  ["path", { d: "M17 17L21 21", ...RJ }],
  [
    "path",
    {
      d: "M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z",
      ...RJ,
    },
  ],
];

/** ShieldCheckIcon */
const shieldCheck: Glyph = [
  [
    "path",
    {
      d: "M20.9922 11.1833V8.28029C20.9922 6.64029 20.9922 5.82028 20.5881 5.28529C20.184 4.75029 19.2703 4.49056 17.4429 3.9711C16.1944 3.6162 15.0938 3.18863 14.2145 2.79829C13.0156 2.2661 12.4161 2 11.9922 2C11.5682 2 10.9688 2.2661 9.7699 2.79829C8.89057 3.18863 7.79002 3.61619 6.54152 3.9711C4.71411 4.49056 3.80041 4.75029 3.3963 5.28529C2.99219 5.82028 2.99219 6.64029 2.99219 8.28029V11.1833C2.99219 16.8085 8.05496 20.1835 10.5861 21.5194C11.1932 21.8398 11.4968 22 11.9922 22C12.4876 22 12.7911 21.8398 13.3982 21.5194C15.9294 20.1835 20.9922 16.8085 20.9922 11.1833Z",
      ...R,
    },
  ],
  [
    "path",
    { d: "M8.49219 11.8333C8.49219 11.8333 9.36719 11.8333 10.2422 13.5C10.2422 13.5 13.0216 9.33333 15.4922 8.5", ...RJ },
  ],
];

/** LockIcon */
const lock: Glyph = [
  [
    "path",
    {
      d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
      ...S,
    },
  ],
  [
    "path",
    {
      d: "M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 13L12 16",
      ...R,
    },
  ],
];

/** LightbulbIcon */
const lightbulb: Glyph = [
  [
    "path",
    {
      d: "M18.9961 9C18.9961 10.9476 18.2007 12.7095 16.917 13.9785C16.5411 14.35 16.3532 14.5357 16.3363 14.553C15.6101 15.2943 15.4889 15.5876 15.4796 16.6252C15.4793 16.6494 15.48 16.7344 15.4812 16.9043C15.4817 16.9799 15.482 17.0176 15.4812 17.0495C15.4549 18.1098 14.6056 18.9652 13.5456 18.999C13.5137 19 13.4759 19 13.4004 19H10.6207C10.5309 19 10.486 19 10.4481 18.9986C9.40314 18.9589 8.56516 18.1209 8.52547 17.0759C8.52402 17.038 8.52402 16.9931 8.52402 16.9033C8.52402 16.7241 8.52402 16.6345 8.52348 16.6059C8.50393 15.5845 8.38589 15.3019 7.67314 14.5701C7.65312 14.5495 7.46075 14.3594 7.07601 13.9792C5.79184 12.7102 4.99609 10.948 4.99609 9C4.99609 5.13401 8.1301 2 11.9961 2C15.8621 2 18.9961 5.13401 18.9961 9Z",
      ...S,
    },
  ],
  ["path", { d: "M9.99609 19V20C9.99609 21.1046 10.8915 22 11.9961 22C13.1007 22 13.9961 21.1046 13.9961 20V19", ...RJ }],
  ["path", { d: "M8.49609 16H15.4961", ...RJ }],
];

/** BotIcon */
const bot: Glyph = [
  [
    "path",
    {
      d: "M13 7H11C8.19108 7 6.78661 7 5.77772 7.67412C5.34096 7.96596 4.96596 8.34096 4.67412 8.77772C4 9.78661 4 11.1911 4 14C4 16.8089 4 18.2134 4.67412 19.2223C4.96596 19.659 5.34096 20.034 5.77772 20.3259C6.78661 21 8.19108 21 11 21H13C15.8089 21 17.2134 21 18.2223 20.3259C18.659 20.034 19.034 19.659 19.3259 19.2223C20 18.2134 20 16.8089 20 14C20 11.1911 20 9.78661 19.3259 8.77772C19.034 8.34096 18.659 7.96596 18.2223 7.67412C17.2134 7 15.8089 7 13 7Z",
      ...RJ,
    },
  ],
  ["path", { d: "M4 14H2", ...RJ }],
  ["path", { d: "M10 17H14", ...RJ }],
  ["path", { d: "M22 14H20", ...RJ }],
  ["path", { d: "M15 11V13", ...RJ }],
  ["path", { d: "M9 11V13", ...RJ }],
  ["path", { d: "M12 7C12 5.11438 12 4.17157 11.4142 3.58579C10.8284 3 9.88562 3 8 3", ...RJ }],
];

/** components/hugeicons/icon.tsx: slightly heavier than Hugeicons' 1.5. */
const STROKE = 1.75;

function icon(glyph: Glyph) {
  return function Icon({ className, ...props }: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        color="currentColor"
        stroke="currentColor"
        strokeWidth={STROKE}
        aria-hidden
        className={className}
        {...props}
      >
        {glyph.map(([tag, attrs], i) =>
          createElement(tag, { ...attrs, key: i, stroke: "currentColor", strokeWidth: STROKE }),
        )}
      </svg>
    );
  };
}

export const Gauge = icon(gauge);
export const Search = icon(search);
export const ShieldCheck = icon(shieldCheck);
export const Lock = icon(lock);
export const Lightbulb = icon(lightbulb);
export const Bot = icon(bot);
