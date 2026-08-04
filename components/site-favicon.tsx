"use client";

import { useState } from "react";

type Props = {
  /** Bare hostname, e.g. "example.com". */
  domain: string;
};

/**
 * Decorative favicon for an external site. The icon service returns 404 for
 * some domains, so the image removes itself rather than leaving a broken-image
 * glyph in the chip — the site name next to it carries the meaning.
 */
export function SiteFavicon({ domain }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://icons.duckduckgo.com/ip3/${domain}.ico`}
      alt=""
      width={16}
      height={16}
      loading="lazy"
      onError={() => setFailed(true)}
      className="rounded-sm"
    />
  );
}
