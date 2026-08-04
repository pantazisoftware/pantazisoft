type Props = {
  /** `null` while the app is still unpublished. */
  href: string | null;
};

const appleGlyph = (
  <svg
    viewBox="0 0 24 24"
    className="w-7 h-7"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.564 12.65c-.02-2.06 1.68-3.05 1.76-3.1-.96-1.4-2.45-1.59-2.98-1.61-1.27-.13-2.48.75-3.12.75-.65 0-1.65-.73-2.71-.71-1.39.02-2.68.81-3.4 2.05-1.45 2.52-.37 6.24 1.04 8.29.69 1 1.51 2.13 2.57 2.09 1.03-.04 1.42-.67 2.67-.67 1.24 0 1.6.67 2.69.65 1.11-.02 1.81-1.02 2.49-2.03.78-1.16 1.1-2.29 1.12-2.35-.02-.01-2.14-.82-2.13-3.26zM15.53 6.76c.57-.69.95-1.65.85-2.6-.82.03-1.81.54-2.4 1.23-.53.61-.99 1.59-.87 2.53.92.07 1.85-.46 2.42-1.16z" />
  </svg>
);

export function AppStoreBadge({ href }: Props) {
  // No listing yet — same badge shape, but nothing to link to.
  if (!href) {
    return (
      <div className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-button ring-1 ring-white/15">
        <span className="text-white/70">{appleGlyph}</span>
        <div className="text-left leading-tight">
          <div className="text-[10px] font-medium uppercase tracking-wide text-white/60">
            Coming soon to the
          </div>
          <div className="text-lg font-semibold font-heading -mt-0.5 text-white/80">
            App Store
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-button ring-1 ring-white/15 hover:ring-white/30 transition-colors"
    >
      {appleGlyph}
      <div className="text-left leading-tight">
        <div className="text-[10px] font-medium uppercase tracking-wide">
          Download on the
        </div>
        <div className="text-lg font-semibold font-heading -mt-0.5">
          App Store
        </div>
      </div>
    </a>
  );
}
