const BASE = "https://pantazisoft.com";

/**
 * /.well-known/security.txt — machine-readable disclosure contact (RFC 9116).
 *
 * Regenerated daily rather than written as a static file: `Expires` is required
 * and a file whose date has passed is invalid, so pinning it at build time means
 * the document quietly rots if the site goes a year without a deploy.
 */
export const revalidate = 86400;

export function GET() {
  const expires = new Date();
  expires.setUTCFullYear(expires.getUTCFullYear() + 1);
  expires.setUTCHours(0, 0, 0, 0);

  const body = `Contact: mailto:contact@pantazisoft.com
Contact: ${BASE}/#contact
Expires: ${expires.toISOString()}
Preferred-Languages: en
Canonical: ${BASE}/.well-known/security.txt
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
