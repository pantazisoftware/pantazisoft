"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { NavGroup, NavLink } from "@/components/nav-types";

/**
 * Desktop navigation: dropdown panels for groups (Products, Services) and
 * plain links for the rest. A panel opens on hover with a short close delay,
 * so the pointer can travel from the trigger into the panel, and on click or
 * Enter for keyboard and touch users. Escape, a click outside, or focus
 * leaving the menu closes it.
 */
/** Bar items: a pill that fills on hover and while its panel is open. */
const TRIGGER =
  "flex h-9 items-center rounded-full px-3.5 text-[0.9375rem] transition-colors hover:bg-soft hover:text-ink";

/** One plate's width in a panel. */
const COLUMN = "10.5rem";

export function NavMenu({
  groups,
  links,
}: {
  groups: NavGroup[];
  links: NavLink[];
}) {
  const [open, setOpen] = useState<string | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  useEffect(() => cancelClose, []);

  return (
    <div
      ref={root}
      className="hidden items-center gap-0.5 lg:flex"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null);
      }}
    >
      {groups.map((group) => {
        const isOpen = open === group.label;
        const panelId = `nav-${group.label.toLowerCase().replace(/\W+/g, "-")}`;
        return (
          <div
            key={group.label}
            className="relative"
            onPointerEnter={(e) => {
              if (e.pointerType !== "mouse") return;
              cancelClose();
              setOpen(group.label);
            }}
            onPointerLeave={(e) => {
              if (e.pointerType === "mouse") scheduleClose();
            }}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : group.label)}
              className={`${TRIGGER} gap-1 ${isOpen ? "bg-soft text-ink" : "text-body"}`}
            >
              {group.label}
              <ChevronDown
                aria-hidden="true"
                className={`h-4 w-4 text-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* The panel: the group's plates side by side, one column each,
                with the intro and the "All …" link in a footer row. Its
                corners are concentric with the plates': 28 = 16 + 12. */}
            <div
              id={panelId}
              hidden={!isOpen}
              className="absolute top-full -left-2 pt-3"
              style={{
                width: `calc(${group.items.length} * ${COLUMN} + ${
                  group.items.length - 1
                } * 0.5rem + 1.5rem)`,
              }}
            >
              <div className="nav-panel rounded-[1.75rem] bg-paper p-3 shadow-[0_0_0_1px_rgb(0_0_0/0.05),0_2px_4px_rgb(0_0_0/0.04),0_16px_32px_-12px_rgb(0_0_0/0.16),0_40px_80px_-24px_rgb(0_0_0/0.24)]">
                <ul
                  className="grid gap-2"
                  style={{
                    gridTemplateColumns: `repeat(${group.items.length}, minmax(0, 1fr))`,
                  }}
                >
                  {group.items.map((item, i) => (
                    <li
                      key={item.href}
                      className="nav-item"
                      style={{ animationDelay: `${40 + i * 35}ms` }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(null)}
                        className="card group block rounded-2xl outline-offset-2"
                      >
                        {item.plate}
                        <span className="mt-3 flex items-center gap-2 px-1">
                          {item.mark}
                          <span className="card-title font-display text-[1.375rem] leading-none text-ink">
                            {item.label}
                          </span>
                        </span>
                        {item.description && (
                          <span className="mt-1.5 line-clamp-2 block px-1 pb-1 text-[0.8125rem] leading-snug text-muted">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mx-1 mt-3 flex items-center justify-between gap-6 border-t border-line pt-3 pb-1">
                  <p className="label">{group.intro}</p>
                  <Link
                    href={group.all.href}
                    onClick={() => setOpen(null)}
                    className="group inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-soft"
                  >
                    {group.all.label}
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${TRIGGER} text-body`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
