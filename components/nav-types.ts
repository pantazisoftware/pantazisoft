import type { ReactNode } from "react";

/** One entry in a header dropdown or the mobile menu. The visuals are
 *  rendered elements, built on the server, so no component functions cross
 *  into the client components that display them. */
export type NavItem = {
  href: string;
  label: string;
  description?: string;
  /** Small square tile: the mobile menu's row icon. */
  icon?: ReactNode;
  /** The desktop panel's picture: a product's colour plate with its
   *  screenshot, or a service's illustration on a soft plate. */
  plate?: ReactNode;
  /** Shown beside the name under the plate, e.g. a product's logo. */
  mark?: ReactNode;
};

export type NavGroup = {
  label: string;
  /** Short line in the panel's footer, beside the "All …" link. */
  intro: string;
  items: NavItem[];
  all: { href: string; label: string };
};

export type NavLink = { href: string; label: string };
