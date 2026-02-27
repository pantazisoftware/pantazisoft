import Image from "next/image";
import Link from "next/link";
import { Rocket, Layers, Sparkles, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { ContactForm } from "@/components/contact-form";
import { HeroAnimation } from "@/components/hero-animation";

const services = [
  {
    icon: Rocket,
    title: "MVP Development",
    price: "$500",
    description:
      "Go from idea to launch, fast. We design, build, and ship your minimum viable product so you can validate your idea with real users. Lean, focused, and ready for feedback.",
  },
  {
    icon: Layers,
    title: "Custom Applications",
    price: "$100",
    description:
      "Full-stack web applications built with modern technologies. Scalable architecture, clean code, and a product-first mindset — tailored to your specific business needs.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    price: "$250",
    description:
      "Add intelligence to your product. From chatbots to content generation, we integrate AI capabilities into your application to automate workflows and enhance user experience.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pantazisoft.com/#organization",
      name: "PantaziSoft",
      url: "https://pantazisoft.com",
      logo: "https://pantazisoft.com/android-chrome-512x512.png",
      image: "https://pantazisoft.com/og-image.png",
      foundingDate: "2020",
      founder: {
        "@type": "Person",
        name: "Eduard Pantazi",
        url: "https://www.linkedin.com/in/eduardpantazi/",
        sameAs: [
          "https://x.com/eduard_pantazi",
          "https://www.linkedin.com/in/eduardpantazi/",
        ],
      },
      sameAs: [
        "https://x.com/eduard_pantazi",
        "https://www.linkedin.com/in/eduardpantazi/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://pantazisoft.com/#website",
      url: "https://pantazisoft.com",
      name: "PantaziSoft",
      publisher: { "@id": "https://pantazisoft.com/#organization" },
    },
    {
      "@type": "Service",
      name: "MVP Development",
      provider: { "@id": "https://pantazisoft.com/#organization" },
      description:
        "Go from idea to launch, fast. We design, build, and ship your minimum viable product so you can validate your idea with real users.",
      offers: {
        "@type": "Offer",
        price: "500",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "500",
          priceCurrency: "USD",
          unitText: "project",
        },
      },
    },
    {
      "@type": "Service",
      name: "Custom Applications",
      provider: { "@id": "https://pantazisoft.com/#organization" },
      description:
        "Full-stack web applications built with modern technologies. Scalable architecture, clean code, and a product-first mindset.",
      offers: {
        "@type": "Offer",
        price: "100",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "100",
          priceCurrency: "USD",
          unitText: "project",
        },
      },
    },
    {
      "@type": "Service",
      name: "AI Integration",
      provider: { "@id": "https://pantazisoft.com/#organization" },
      description:
        "Add intelligence to your product. From chatbots to content generation, we integrate AI capabilities into your application.",
      offers: {
        "@type": "Offer",
        price: "250",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "250",
          priceCurrency: "USD",
          unitText: "project",
        },
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-primary leading-[1.05]">
                We build web apps that businesses love
              </h1>
              <p className="mt-6 text-lg md:text-xl text-secondary max-w-xl leading-[1.65]">
                From MVP to production — we help businesses launch, grow, and
                integrate AI into modern web applications.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-button text-sm font-medium hover:bg-zinc-700 transition-colors"
                >
                  Start a conversation
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 bg-accent-secondary text-primary px-7 py-3.5 rounded-button text-sm font-medium hover:bg-accent-secondary-hover transition-colors"
                >
                  See our work
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-primary">
              What we do
            </h2>
            <p className="mt-4 text-lg text-secondary">
              We specialize in three areas that help businesses build and
              enhance their digital products.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-surface rounded-card p-8 md:p-10 flex flex-col"
              >
                <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-zinc-600" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-secondary leading-[1.65] flex-1">
                  {service.description}
                </p>
                <div className="mt-8">
                  <p className="text-sm text-muted">Starting from</p>
                  <p className="font-heading text-3xl font-bold tracking-tight text-primary mt-1">
                    {service.price}
                  </p>
                  <a
                    href="#contact"
                    className="group mt-4 inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-button text-sm font-medium hover:bg-zinc-700 transition-colors"
                  >
                    Contact sales
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-primary">
              Built by us
            </h2>
            <p className="mt-4 text-lg text-secondary">
              A selection of products we&apos;ve designed, developed, and
              shipped.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block bg-surface rounded-card overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-zinc-100 relative overflow-hidden">
                  <Image
                    src={project.ogImage}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <Image
                      src={project.favicon}
                      alt={`${project.name} icon`}
                      width={20}
                      height={20}
                      className="rounded"
                    />
                    <h3 className="font-heading font-semibold text-primary">
                      {project.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-secondary text-sm">
                    {project.tagline}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-muted group-hover:text-primary transition-colors">
                    View project
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About & Founder */}
      <section id="about" className="py-24 md:py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-primary">
                About PantaziSoft
              </h2>
              <p className="mt-4 text-lg text-secondary leading-[1.65]">
                Founded in 2020, PantaziSoft is a software studio focused on
                building modern web applications. We partner with businesses of
                all sizes to bring their ideas to life — from early-stage MVPs
                to full-scale platforms with AI capabilities.
              </p>
              <p className="mt-4 text-secondary leading-[1.65]">
                With years of experience shipping products, we bring a
                product-first mindset to every engagement. Our work speaks
                through the applications we&apos;ve built and the businesses
                we&apos;ve helped grow.
              </p>
              <div className="mt-10 flex gap-10">
                <div>
                  <p className="font-heading text-3xl font-bold tracking-tight text-primary">
                    2020
                  </p>
                  <p className="text-sm text-muted mt-1">Founded</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold tracking-tight text-primary">
                    4+
                  </p>
                  <p className="text-sm text-muted mt-1">Products shipped</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold tracking-tight text-primary">
                    100%
                  </p>
                  <p className="text-sm text-muted mt-1">Web focused</p>
                </div>
              </div>
            </div>

            {/* Founder card */}
            <div className="bg-surface rounded-card p-8 md:p-10">
              <div className="flex items-center gap-4">
                <Image
                  src="/eduard-pantazi.webp"
                  alt="Eduard Pantazi - Founder Pantazi Soft"
                  width={64}
                  height={64}
                  className="rounded-full object-cover w-16 h-16"
                />
                <div>
                  <p className="font-heading font-semibold text-primary">
                    Eduard Pantazi
                  </p>
                  <p className="text-sm text-muted">Founder</p>
                </div>
              </div>
              <blockquote className="mt-6 text-secondary leading-[1.65] italic">
                &ldquo;I started PantaziSoft with a simple belief: every
                business deserves a well-crafted web application. We focus on
                building products that are fast, reliable, and designed to grow
                with your business. If you have an idea, I&apos;d love to hear
                about it.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://x.com/eduard_pantazi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-500 hover:text-primary hover:bg-zinc-200 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/eduardpantazi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-500 hover:text-primary hover:bg-zinc-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-primary">
                Let&apos;s build something together
              </h2>
              <p className="mt-4 text-lg text-secondary leading-[1.65]">
                Have a project in mind? We&apos;d love to hear about it. Tell us
                what you&apos;re building and we&apos;ll get back to you within
                24 hours.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Rocket className="w-4 h-4 text-zinc-500" />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm">
                      Quick turnaround
                    </p>
                    <p className="text-sm text-secondary">
                      We respond to every inquiry within 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-4 h-4 text-zinc-500" />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm">
                      No commitment
                    </p>
                    <p className="text-sm text-secondary">
                      Let&apos;s start with a conversation — no strings
                      attached.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
