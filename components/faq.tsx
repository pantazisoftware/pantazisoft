/** Questions as native disclosures: every answer is in the HTML for search
 *  engines, and nothing needs a script to open. */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="rows">
      {items.map((item) => (
        <details key={item.q} className="py-5">
          <summary className="flex items-start font-medium text-ink">
            {item.q}
          </summary>
          <p className="mt-3 max-w-2xl">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
