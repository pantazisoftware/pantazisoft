import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { apps } from "@/lib/apps";

const BASE = "https://pantazisoft.com";

/**
 * /llms.txt — a curated Markdown map of the site for AI models
 * (https://llmstxt.org). Generated from the same data as the pages
 * themselves so it can't drift out of date.
 */
export function GET() {
  const body = `# PantaziSoft

> A software studio building modern web applications since 2020. We work in three areas — MVP development, custom web applications, and AI integration — with fixed scope, fixed price, and a codebase the client owns outright.

Founded by Eduard Pantazi. Every engagement starts with a free scoping call, is quoted as a fixed price in writing, and ships in weekly working builds. Enquiries are answered within 24 hours.

## Services

${services
  .map(
    (service) =>
      `- [${service.name}](${BASE}/services/${service.slug}): ${service.tagline}. From ${service.price}, ${service.timeline}.`
  )
  .join("\n")}
- [All services](${BASE}/services): Comparison of the three engagements, what each includes, and how pricing works.

## Products we built

${projects
  .map(
    (project) =>
      `- [${project.name}](${BASE}/projects/${project.slug}): ${project.tagline}. Live at ${project.url}.`
  )
  .join("\n")}

## iOS apps

${apps
  .map((app) => `- [${app.name}](${BASE}/app/${app.slug}): ${app.tagline}`)
  .join("\n")}

## Optional

- [Contact](${BASE}/#contact): Project enquiry form; replies within 24 hours.
- [About](${BASE}/#about): Studio background and founder.
${apps
  .flatMap((app) => [
    `- [${app.name} privacy policy](${BASE}/app/${app.slug}/privacy)`,
    `- [${app.name} terms of use](${BASE}/app/${app.slug}/terms)`,
  ])
  .join("\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
