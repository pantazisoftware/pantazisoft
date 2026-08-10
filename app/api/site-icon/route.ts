/**
 * /api/site-icon?domain=example.com — favicon proxy for external site chips.
 *
 * The icon service 404s for domains it has never crawled. Requesting it straight
 * from the browser meant those misses surfaced as console errors: an onError
 * handler can hide the broken image, but the failed request is already logged by
 * then. Proxying lets a miss come back as a valid (transparent) image instead,
 * and keeps the third-party origin out of the browser's connection list.
 */

// 1×1 transparent PNG.
const TRANSPARENT_PNG = Uint8Array.from(
  atob(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
  ),
  (c) => c.charCodeAt(0)
);

const DOMAIN = /^[a-z0-9-]+(\.[a-z0-9-]+)+$/i;

const CACHE = "public, max-age=86400, s-maxage=604800, immutable";

function transparent() {
  return new Response(TRANSPARENT_PNG, {
    headers: { "Content-Type": "image/png", "Cache-Control": CACHE },
  });
}

export async function GET(request: Request) {
  const domain = new URL(request.url).searchParams.get("domain") ?? "";
  if (!DOMAIN.test(domain)) return transparent();

  try {
    const upstream = await fetch(
      `https://icons.duckduckgo.com/ip3/${encodeURIComponent(domain)}.ico`,
      { signal: AbortSignal.timeout(5000) }
    );
    if (!upstream.ok) return transparent();

    return new Response(upstream.body, {
      headers: {
        "Content-Type": upstream.headers.get("content-type") ?? "image/x-icon",
        "Cache-Control": CACHE,
      },
    });
  } catch {
    // Upstream down or too slow — a missing chip icon isn't worth a failed request.
    return transparent();
  }
}
