"use client";

import { useState, useTransition } from "react";
import { toggleIndexing } from "@/app/vddbinew/(protected)/seo/actions";

export default function IndexingToggle({ initial }: { initial: boolean }) {
  const [on, setOn] = useState(initial);
  const [pending, startTransition] = useTransition();

  function flip() {
    const next = !on;
    setOn(next); // optimistic — the switch should feel instant
    startTransition(async () => {
      try {
        await toggleIndexing(next);
      } catch {
        setOn(!next); // put it back if the save didn't land
      }
    });
  }

  return (
    <div className="flex items-center justify-between gap-6 rounded-xl border border-zinc-200 bg-white p-5">
      <div className="min-w-0">
        <p className="font-medium text-secondary">Search engine visibility</p>
        <p className="mt-1 text-sm text-zinc-500">
          {on
            ? "Google and other search engines can find and list this website."
            : "The website is hidden from Google. Keep it off while the site is a demo."}
        </p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label="Search engine visibility"
        onClick={flip}
        disabled={pending}
        className={`relative h-7 w-12 shrink-0 rounded-full transition-colors disabled:opacity-60 ${
          on ? "bg-emerald-500" : "bg-zinc-300"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            on ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
