type ArtComponent = (props: { className?: string }) => React.ReactNode;

/** Numbered steps, each with an illustration panel above its title. Used for
 *  the project process (four steps) and product how-it-works (three). */
export function IllustratedSteps({
  steps,
  art,
}: {
  steps: { title: string; body: string }[];
  art: ArtComponent[];
}) {
  return (
    <ol
      className={`grid gap-x-8 gap-y-10 sm:grid-cols-2 ${
        steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
      }`}
    >
      {steps.map((step, i) => {
        const Art = art[i % art.length];
        return (
          <li key={step.title}>
            <div className="relative rounded-2xl border border-line bg-soft p-4">
              <span className="absolute top-3 left-3 grid h-7 w-7 place-items-center rounded-full bg-ink font-heading text-[0.75rem] font-semibold text-white tabular-nums">
                {i + 1}
              </span>
              <Art className="mx-auto w-full max-w-[16rem]" />
            </div>
            <h3 className="mt-5">{step.title}</h3>
            <p className="mt-1.5 text-[0.9375rem]">{step.body}</p>
          </li>
        );
      })}
    </ol>
  );
}
