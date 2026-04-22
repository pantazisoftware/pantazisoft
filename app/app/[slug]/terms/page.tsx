import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { apps, getApp } from "@/lib/apps";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};

  return {
    title: `Terms of Use — ${app.name}`,
    description: `Terms of Use for ${app.name}.`,
    alternates: { canonical: `/app/${slug}/terms` },
  };
}

export default async function TermsPage({ params }: Props) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href={`/app/${slug}`}
          className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-orange-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Back to {app.name}
        </Link>

        <h1 className="mt-8 font-heading text-3xl md:text-5xl font-extrabold tracking-tighter text-white">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-zinc-500">
          Last updated: {app.effectiveDate}
        </p>

        <div className="mt-12 space-y-10 text-zinc-300 leading-[1.75]">
          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Acceptance of Terms
            </h2>
            <p className="mt-3">
              By downloading, installing, or using FabricatorPro (&ldquo;the
              App&rdquo;), you agree to be bound by these Terms of Use. If
              you do not agree, do not use the App.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Description of Service
            </h2>
            <p className="mt-3">
              FabricatorPro is a professional fabrication calculator app
              that provides mathematical calculations, templates, and
              reference data for metalworking, woodworking, and general
              fabrication tasks. The App is provided as a tool to assist
              professionals and hobbyists.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Disclaimer of Accuracy
            </h2>
            <p className="mt-3">
              <strong className="text-white font-semibold">Important:</strong>{" "}
              While we strive for accuracy in all calculations, the App is
              provided as a reference tool only. You are responsible for
              verifying all calculations before use in any project.
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  All calculations, templates, and reference data are
                  provided &ldquo;as is&rdquo; without warranty of any kind.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  The App should not be the sole basis for safety-critical
                  decisions.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  Always verify measurements, angles, and cut dimensions
                  before cutting or fabricating.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  The developer assumes no liability for errors, material
                  waste, injury, or damage resulting from use of the
                  App&apos;s calculations.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Subscriptions &amp; Purchases
            </h2>
            <p className="mt-3">
              The App offers optional in-app purchases to unlock Pro
              features:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  <strong className="text-white font-semibold">
                    Monthly Subscription
                  </strong>{" "}
                  — auto-renewing monthly subscription.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  <strong className="text-white font-semibold">
                    Lifetime Purchase
                  </strong>{" "}
                  — one-time purchase for permanent access.
                </span>
              </li>
            </ul>
            <ul className="mt-3 space-y-2 list-none">
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  Payment is charged to your Apple ID account at
                  confirmation of purchase.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  Subscriptions automatically renew unless cancelled at
                  least 24 hours before the end of the current period.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  You can manage and cancel subscriptions in your Apple ID
                  Account Settings.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  Refund requests must be directed to Apple through the App
                  Store.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Intellectual Property
            </h2>
            <p className="mt-3">
              The App, including its design, code, graphics, and content,
              is the intellectual property of Pantazi Eduard Marius Robert.
              You may not copy, modify, distribute, or reverse-engineer any
              part of the App.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Acceptable Use
            </h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-3 space-y-2 list-none">
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>Use the App for any unlawful purpose.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  Attempt to reverse-engineer, decompile, or disassemble the
                  App.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  Redistribute, sublicense, or resell the App or its
                  content.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  Remove or alter any proprietary notices or labels on the
                  App.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Limitation of Liability
            </h2>
            <p className="mt-3">
              To the maximum extent permitted by applicable law:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  The App is provided &ldquo;as is&rdquo; and &ldquo;as
                  available&rdquo; without warranties of any kind, whether
                  express or implied.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  Pantazi Eduard Marius Robert shall not be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages arising from your use of the App.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-orange-500 shrink-0">
                  •
                </span>
                <span>
                  Our total liability shall not exceed the amount you paid
                  for the App in the 12 months preceding the claim.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Export &amp; Generated Files
            </h2>
            <p className="mt-3">
              PDF templates, DXF files, and other exports generated by the
              App are for your personal or professional use. You retain
              ownership of any files you generate. However, the App&apos;s
              formatting, branding, and layout design remain our
              intellectual property.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Termination
            </h2>
            <p className="mt-3">
              We reserve the right to terminate or suspend access to the App
              at any time, without notice, for conduct that we believe
              violates these Terms or is harmful to other users or the App.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Changes to Terms
            </h2>
            <p className="mt-3">
              We may update these Terms of Use from time to time. Changes
              will be reflected in the &ldquo;Last updated&rdquo; date
              above. Continued use of the App after changes constitutes
              acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Governing Law
            </h2>
            <p className="mt-3">
              These Terms shall be governed by and construed in accordance
              with the laws of Romania, without regard to conflict of law
              provisions.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Contact Us
            </h2>
            <p className="mt-3">
              If you have questions about these Terms of Use, contact us at:
            </p>
            <p className="mt-3">
              <strong className="text-white font-semibold">
                Pantazi Eduard Marius Robert
              </strong>
              <br />
              Email:{" "}
              <a
                href="mailto:eduard.pantazi@gmail.com"
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                eduard.pantazi@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
