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
      className="hidden items-center gap-1 lg:flex"
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
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-[0.9375rem] transition-colors hover:text-ink ${
                isOpen ? "text-ink" : "text-body"
              }`}
            >
              {group.label}
              <ChevronDown
                aria-hidden="true"
                className={`h-4 w-4 text-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id={panelId}
              hidden={!isOpen}
              className="absolute top-full -left-2 w-[38rem] pt-3"
            >
              <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_24px_48px_-16px_rgb(0_0_0/0.18),0_2px_6px_rgb(0_0_0/0.04)]">
                <p className="label border-b border-line px-5 py-3">
                  {group.intro}
                </p>
                <ul className="grid grid-cols-2 gap-1 p-2">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(null)}
                        className="card group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-soft"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center">
                          {item.icon}
                        </span>
                        <span className="min-w-0">
                          <span className="card-title block text-[0.9375rem] font-semibold text-ink">
                            {item.label}
                          </span>
                          {item.description && (
                            <span className="mt-0.5 line-clamp-2 block text-[0.8125rem] leading-snug text-muted">
                              {item.description}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={group.all.href}
                  onClick={() => setOpen(null)}
                  className="group flex items-center justify-between border-t border-line bg-soft px-5 py-3 text-sm font-medium text-ink"
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
        );
      })}

      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-md px-3 py-2 text-[0.9375rem] text-body transition-colors hover:text-ink"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
