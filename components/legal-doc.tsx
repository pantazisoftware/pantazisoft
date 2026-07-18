import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { AppProject, LegalDoc } from "@/lib/apps";

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
        <strong key={`${keyPrefix}-${i}`} className="text-white font-semibold">
          {match[1]}
        </strong>
      );
    } else {
      nodes.push(
        <a
          key={`${keyPrefix}-${i}`}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-app hover:text-app-hover transition-colors"
        >
          {match[2]}
        </a>
      );
    }
    last = regex.lastIndex;
    i += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

type Props = {
  app: AppProject;
  docTitle: string;
  doc: LegalDoc;
};

export function LegalDocView({ app, docTitle, doc }: Props) {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href={`/app/${app.slug}`}
          className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-app transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Back to {app.name}
        </Link>

        <h1 className="mt-8 font-heading text-3xl md:text-5xl font-extrabold tracking-tighter text-white">
          {docTitle}
        </h1>
        <p className="mt-3 text-sm text-zinc-500">
          Last updated: {app.effectiveDate}
        </p>

        <div className="mt-12 space-y-10 text-zinc-300 leading-[1.75]">
          {doc.intro && (
            <div>
              {doc.intro.map((p, i) => (
                <p key={i} className={i > 0 ? "mt-3" : undefined}>
                  {renderRich(p, `intro-${i}`)}
                </p>
              ))}
            </div>
          )}

          {doc.sections.map((section, si) => (
            <div key={section.heading}>
              <h2 className="font-heading text-xl font-semibold text-white">
                {section.heading}
              </h2>
              {section.body?.map((p, i) => (
                <p key={`b-${i}`} className="mt-3">
                  {renderRich(p, `s${si}-b${i}`)}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 space-y-2 list-none">
                  {section.bullets.map((b, i) => (
                    <li key={`li-${i}`} className="flex gap-3">
                      <span aria-hidden="true" className="text-app shrink-0">
                        •
                      </span>
                      <span>{renderRich(b, `s${si}-li${i}`)}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.outro?.map((p, i) => (
                <p key={`o-${i}`} className="mt-3">
                  {renderRich(p, `s${si}-o${i}`)}
                </p>
              ))}
            </div>
          ))}

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Contact Us
            </h2>
            <p className="mt-3">
              If you have questions about {docTitle === "Terms of Use" ? "these Terms" : "this policy"}, contact us at:
            </p>
            <p className="mt-3">
              <strong className="text-white font-semibold">
                {doc.contactName}
              </strong>
              <br />
              Email:{" "}
              <a
                href={`mailto:${doc.contactEmail}`}
                className="text-app hover:text-app-hover transition-colors"
              >
                {doc.contactEmail}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
