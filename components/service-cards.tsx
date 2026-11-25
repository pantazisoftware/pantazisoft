import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { href, type Locale } from "@/lib/i18n";
import type { Service } from "@/lib/services";
import { serviceArt } from "@/components/illustrations";

/** Services as a bordered grid of cards, each led by its illustration. */
export function ServiceCards({
  services,
  locale,
}: {
  services: Service[];
  locale: Locale;
}) {
  return (
    <ul
      className={`grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 ${
        services.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
      }`}
    >
      {services.map((service) => {
        const Art = serviceArt[service.slug];
        return (
          <li key={service.slug} className="bg-paper">
            <Link
              href={href(locale, service.path)}
              className="card group flex h-full flex-col"
            >
              <span className="block bg-soft p-4 transition-colors group-hover:bg-lime/10">
                <Art className="mx-auto w-full max-w-[18rem] transition-transform duration-500 group-hover:-translate-y-1" />
              </span>
              <span className="flex flex-1 flex-col p-6">
                <h3 className="card-title flex items-center justify-between gap-3 text-[1.125rem]">
                  {service.name}
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
                </h3>
                <p className="mt-2 text-[0.9375rem]">{service.tagline}</p>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
