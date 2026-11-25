import type { ReactNode } from "react";

/** One entry in a header dropdown or the mobile menu. `icon` is a rendered
 *  element, built on the server, so no component functions cross into the
 *  client components that display it. */
export type NavItem = {
  href: string;
  label: string;
  description?: string;
  icon?: ReactNode;
};

export type NavGroup = {
  label: string;
  /** Short line at the top of the dropdown panel. */
  intro: string;
  items: NavItem[];
  all: { href: string; label: string };
};

export type NavLink = { href: string; label: string };
