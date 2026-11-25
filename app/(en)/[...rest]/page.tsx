import { notFound } from "next/navigation";

/* Catches every unmatched URL in this language so it renders the styled
   not-found page (with the right <html lang>) instead of the framework's. */
export default function CatchAll() {
  notFound();
}
