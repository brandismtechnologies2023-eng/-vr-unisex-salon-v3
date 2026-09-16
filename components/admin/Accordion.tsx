"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Plain collapsible section for grouping a page's fields by which on-page
// block they belong to (e.g. "Hero", "Services"). Starts open so nothing
// looks hidden on first load; state is local, not persisted.
export default function Accordion({
  title,
  count,
  defaultOpen = true,
  children,
}: {
  title: string;
  count?: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="overflow-hidden rounded-xl border border-zinc-200">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 bg-zinc-50 px-5 py-3.5 text-left"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
          {title}
          {typeof count === "number" && (
            <span className="ml-2 font-normal normal-case text-zinc-400">
              {count} field{count === 1 ? "" : "s"}
            </span>
          )}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="space-y-4 p-5">{children}</div>}
    </section>
  );
}
