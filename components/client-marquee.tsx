import { ArrowUpRight } from "lucide-react";
import { SiteFavicon } from "@/components/site-favicon";

type Client = { name: string; url: string };

/**
 * A single row of client sites, running slowly to the left. The track holds two
 * identical copies of the list and travels exactly -50%, so the loop closes on
 * itself with no visible seam. It pauses on hover, which is also what makes the
 * links usable rather than decorative.
 */
export function ClientMarquee({ clients }: { clients: Client[] }) {
  const run = [...clients, ...clients];

  return (
    <div className="marquee-mask overflow-hidden py-5">
      <ul
        className="marquee-track flex w-max items-center"
        style={{ ["--dur" as string]: "44s" }}
      >
        {run.map((client, i) => {
          const domain = new URL(client.url).hostname;
          return (
            <li key={`${domain}-${i}`} className="shrink-0">
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={i >= clients.length ? "true" : undefined}
                tabIndex={i >= clients.length ? -1 : undefined}
                className="group mx-3 inline-flex items-center gap-2.5 border border-line bg-surface px-4 py-2.5 text-sm font-medium text-body transition-colors hover:border-ink hover:text-ink"
              >
                <SiteFavicon domain={domain} />
                {client.name}
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
