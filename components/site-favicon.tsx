type Props = {
  /** Bare hostname, e.g. "example.com". */
  domain: string;
};

/**
 * Decorative favicon for an external site, served through /api/site-icon.
 *
 * The icon service has no entry for some domains. The proxy answers those with a
 * transparent pixel, so a miss leaves an empty slot — the site name next to it
 * carries the meaning — without the 404 a direct request would log to the
 * console. The reserved slot also keeps chip labels aligned with one another.
 */
export function SiteFavicon({ domain }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/api/site-icon?domain=${encodeURIComponent(domain)}`}
      alt=""
      width={16}
      height={16}
      loading="lazy"
      decoding="async"
      className="rounded-sm"
    />
  );
}
