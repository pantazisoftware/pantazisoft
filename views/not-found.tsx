import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";

export function NotFoundPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).notFound;
  return (
    <section className="wrap py-28 md:py-40">
      <p className="label">404</p>
      <h1 className="mt-3">{t.title}</h1>
      <p className="lead mt-5">{t.body}</p>
      <Link href={href(locale, "/")} className="btn btn-primary mt-9">
        {t.back}
      </Link>
    </section>
  );
}
