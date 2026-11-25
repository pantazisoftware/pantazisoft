type Props = {
  href: string;
  small: string;
  big: string;
  label: string;
};

export function AppStoreBadge({ href, small, big, label }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-[3.25rem] items-center gap-2.5 rounded-xl bg-ink px-4 text-white transition-colors hover:bg-[#2a2a2e]"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M17.564 12.65c-.02-2.06 1.68-3.05 1.76-3.1-.96-1.4-2.45-1.59-2.98-1.61-1.27-.13-2.48.75-3.12.75-.65 0-1.65-.73-2.71-.71-1.39.02-2.68.81-3.4 2.05-1.45 2.52-.37 6.24 1.04 8.29.69 1 1.51 2.13 2.57 2.09 1.03-.04 1.42-.67 2.67-.67 1.24 0 1.6.67 2.69.65 1.11-.02 1.81-1.02 2.49-2.03.78-1.16 1.1-2.29 1.12-2.35-.02-.01-2.14-.82-2.13-3.26zM15.53 6.76c.57-.69.95-1.65.85-2.6-.82.03-1.81.54-2.4 1.23-.53.61-.99 1.59-.87 2.53.92.07 1.85-.46 2.42-1.16z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[0.6875rem]">{small}</span>
        <span className="block text-lg font-semibold">{big}</span>
      </span>
    </a>
  );
}
