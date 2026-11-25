import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { pageMeta } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { getProduct } from "@/lib/products";
import { legal } from "@/lib/legal";

/* Legal documents exist in English only: the English text is authoritative,
   and the App Store listings link to these exact URLs. */

type Kind = "privacy" | "terms";

const titles: Record<Kind, string> = {
  privacy: "Privacy Policy",
  terms: "Terms of Use",
};

/** Renders a plain string with lightweight inline markup: **bold** and
 *  [label](https://url). Everything else is passed through as text. */
function renderRich(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    if (match[1] !== undefined) {
      nodes.push(
        <strong key={`${keyPrefix}-${i}`} className="font-semibold text-ink">
          {match[1]}
        </strong>,
      );
    } else {
      nodes.push(
        <a
          key={`${keyPrefix}-${i}`}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          {match[2]}
        </a>,
      );
    }
    last = regex.lastIndex;
    i += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function legalMetadata(slug: string, kind: Kind) {
  const product = getProduct("en", slug);
  if (!product || !legal[slug]) return {};
  return pageMeta({
    locale: "en",
    path: `${product.path}/${kind}`,
    title: `${titles[kind]} — ${product.name}`,
    description: `${titles[kind]} for ${product.name}, an iOS app by PantaziSoft.`,
    translated: false,
  });
}

export function LegalPage({ slug, kind }: { slug: string; kind: Kind }) {
  const product = getProduct("en", slug);
  const docs = legal[slug];
  if (!product || !docs) return null;

  const t = getDictionary("en").legal;
  const doc = docs[kind];

  return (
    <article className="wrap max-w-3xl pt-10 pb-24 md:pt-14">
      <Link
        href={product.path}
        className="label inline-flex items-center gap-2 transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.back(product.name)}
      </Link>

      <h1 className="mt-8">{titles[kind]}</h1>
      <p className="label mt-4">
        {product.name} · {t.updated}: {docs.effectiveDate}
      </p>

      <div className="mt-12 grid gap-10">
        {doc.intro && (
          <div className="grid gap-3">
            {doc.intro.map((p, i) => (
              <p key={i}>{renderRich(p, `intro-${i}`)}</p>
            ))}
          </div>
        )}

        {doc.sections.map((section, si) => (
          <section key={section.heading} className="grid gap-3">
            <h2 className="text-xl">{section.heading}</h2>
            {section.body?.map((p, i) => (
              <p key={`b-${i}`}>{renderRich(p, `s${si}-b${i}`)}</p>
            ))}
            {section.bullets && (
              <ul className="grid list-disc gap-2 pl-5 marker:text-muted">
                {section.bullets.map((b, i) => (
                  <li key={`li-${i}`}>{renderRich(b, `s${si}-li${i}`)}</li>
                ))}
              </ul>
            )}
            {section.outro?.map((p, i) => (
              <p key={`o-${i}`}>{renderRich(p, `s${si}-o${i}`)}</p>
            ))}
          </section>
        ))}

        <section className="grid gap-3">
          <h2 className="text-xl">{t.contact}</h2>
          <p>{kind === "terms" ? t.contactTerms : t.contactPrivacy}</p>
          <p>
            <strong className="font-semibold text-ink">
              {doc.contactName}
            </strong>
            <br />
            {t.email}:{" "}
            <a href={`mailto:${doc.contactEmail}`} className="link">
              {doc.contactEmail}
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
