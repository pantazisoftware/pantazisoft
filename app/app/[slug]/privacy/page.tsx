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
    title: `Privacy Policy — ${app.name}`,
    description: `Privacy Policy for ${app.name}.`,
    alternates: { canonical: `/app/${slug}/privacy` },
  };
}

export default async function PrivacyPage({ params }: Props) {
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
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-zinc-500">
          Last updated: {app.effectiveDate}
        </p>

        <div className="mt-12 space-y-10 text-zinc-300 leading-[1.75]">
          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Overview
            </h2>
            <p className="mt-3">
              FabricatorPro (&ldquo;the App&rdquo;) is developed by Pantazi
              Eduard Marius Robert. We are committed to protecting your
              privacy. This policy explains what data we collect, how we use
              it, and your rights.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Data We Collect
            </h2>
            <p className="mt-3">
              <strong className="text-white font-semibold">
                We do not collect personal data.
              </strong>{" "}
              The App operates entirely on your device. Specifically:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="text-orange-500 shrink-0"
                >
                  •
                </span>
                <span>
                  <strong className="text-white font-semibold">
                    Calculations &amp; Saved History
                  </strong>{" "}
                  — stored locally on your device using SwiftData. Never
                  transmitted to any server.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="text-orange-500 shrink-0"
                >
                  •
                </span>
                <span>
                  <strong className="text-white font-semibold">
                    Preferences &amp; Settings
                  </strong>{" "}
                  — stored locally on your device using UserDefaults.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="text-orange-500 shrink-0"
                >
                  •
                </span>
                <span>
                  <strong className="text-white font-semibold">
                    Favourites
                  </strong>{" "}
                  — stored locally on your device.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="text-orange-500 shrink-0"
                >
                  •
                </span>
                <span>
                  <strong className="text-white font-semibold">
                    No Account Required
                  </strong>{" "}
                  — the App does not require registration, login, or any
                  personal information.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Subscriptions &amp; Purchases
            </h2>
            <p className="mt-3">
              Subscriptions and in-app purchases are processed entirely by
              Apple through the App Store. We do not have access to your
              payment information, credit card details, or Apple ID.
            </p>
            <p className="mt-3">
              Purchase and subscription status is verified on-device through
              StoreKit. No data is sent to any external server.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Third-Party Services
            </h2>
            <p className="mt-3">The App uses only:</p>
            <ul className="mt-3 space-y-2 list-none">
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="text-orange-500 shrink-0"
                >
                  •
                </span>
                <span>
                  <strong className="text-white font-semibold">
                    Apple App Store / StoreKit
                  </strong>{" "}
                  — for processing in-app purchases. Apple&apos;s privacy
                  policy applies to these transactions.
                </span>
              </li>
            </ul>
            <p className="mt-3">
              The App contains no ads, no analytics, no tracking, and no
              third-party SDKs.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Data Sharing
            </h2>
            <p className="mt-3">
              We do not sell, trade, or share your data with third parties.
              When you export a PDF or DXF file, it is generated locally on
              your device and shared only through the iOS share sheet at your
              discretion.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Data Storage &amp; Security
            </h2>
            <p className="mt-3">
              All app data is stored locally on your device and protected by
              iOS built-in security features including device encryption. We
              do not operate any servers that store your data.
            </p>
            <p className="mt-3">
              If you delete the App, all locally stored data (saved
              calculations, preferences, favourites) will be permanently
              removed.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              The App does not knowingly collect any data from children.
              Since we do not collect personal data from any user, no special
              provisions for children are necessary.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Changes
              will be reflected in the &ldquo;Last updated&rdquo; date above.
              Continued use of the App after changes constitutes acceptance
              of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-white">
              Contact Us
            </h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, contact us at:
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
