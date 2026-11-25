"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Feedfast?: {
      /** Re-scan the DOM for `data-feedfast` mount points. */
      mount: () => void;
      openChangelog: () => void;
      openFeedback: () => void;
    };
  }
}

/**
 * Loads the FeedFast embed once, for the whole site.
 *
 * There is no SDK and no key in the client: the one script tag carries the
 * project slug, and every widget is mounted from a `data-feedfast` attribute in
 * the markup — see the uptime badge and feedback button in `components/footer.tsx`.
 * Exactly one of these may exist per page; a second tag pointed at a different
 * project would make the winner depend on execution order.
 *
 * `window.Feedfast` is allowed to stay undefined forever — the script is
 * deferred and a content blocker may drop it — so every call through it is
 * optional and nothing on the page waits for it or renders conditionally on it.
 */
export function FeedFast() {
  const pathname = usePathname();
  const mounted = useRef(false);

  // Re-scan after each route change so mount points rendered by the new page
  // are picked up. The first pass is skipped: the script's own load does it,
  // and calling before it arrives is a no-op anyway.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    window.Feedfast?.mount();
  }, [pathname]);

  return (
    <Script
      src="https://feedfa.st/embed.js"
      data-project="pantazi-soft"
      // No floating "What's new" badge: the footer's mounts are the only
      // FeedFast UI on the site.
      data-badge="false"
      strategy="afterInteractive"
    />
  );
}
