"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";
import { resetSection, saveSetting } from "@/app/vddbinew/(protected)/content/actions";
import { LeafField } from "@/components/admin/LeafFields";
import Accordion from "@/components/admin/Accordion";
import { groupLeaves, type Leaf } from "@/lib/admin/paths";

// Generic path-keyed editor for a site-copy namespace. Each leaf's input is
// named by its dot-path; the server action rebuilds the object from those.
// Fields are grouped by which on-page block they belong to (hero, services,
// etc.) so a page with several sections doesn't read as one long form.
export default function JsonEditor({
  namespace,
  leaves,
  seoLeaves = [],
  backHref,
}: {
  namespace: string;
  leaves: Leaf[];
  /** Rendered first, in a highlighted box — how the page appears in Google. */
  seoLeaves?: Leaf[];
  backHref: string;
}) {
  const save = saveSetting.bind(null, namespace);
  const reset = resetSection.bind(null, namespace);
  const { top, groups } = groupLeaves(leaves);

  return (
    <form action={save} className="max-w-2xl space-y-5">
      {seoLeaves.length > 0 && (
        <section className="rounded-xl border border-sky-200 bg-sky-50/70 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-900">
            SEO &amp; Search Listing
          </h2>
          <p className="mt-1 mb-4 text-xs text-sky-800/70">
            How this page shows up on Google.
          </p>
          <div className="space-y-4">
            {seoLeaves.map((leaf) => (
              <LeafField key={leaf.path} leaf={leaf} />
            ))}
          </div>
        </section>
      )}

      {top.length > 0 && (
        <section className="space-y-4 rounded-xl border border-zinc-200 p-5">
          {top.map((leaf) => (
            <LeafField key={leaf.path} leaf={leaf} />
          ))}
        </section>
      )}

      {groups.map((group) => (
        <Accordion key={group.key} title={group.label} count={group.leaves.length}>
          {group.leaves.map((leaf) => (
            <LeafField key={leaf.path} leaf={leaf} />
          ))}
        </Accordion>
      ))}

      <p className="text-xs text-zinc-400">
        Leave a field blank and save to hide that line on the live site — it
        won&apos;t show as empty space.
      </p>

      <SubmitRow backHref={backHref} resetAction={reset} />
    </form>
  );
}

function SubmitRow({
  backHref,
  resetAction,
}: {
  backHref: string;
  resetAction: () => Promise<void>;
}) {
  const { pending } = useFormStatus();
  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-secondary px-6 py-2.5 text-sm font-medium text-white hover:bg-secondary/90 disabled:opacity-50"
      >
        {pending ? "Saving..." : "Save"}
      </button>
      <Link
        href={backHref}
        className="rounded-full px-6 py-2.5 text-sm font-medium text-zinc-500 hover:bg-zinc-100"
      >
        Cancel
      </Link>
      <button
        type="submit"
        formAction={resetAction}
        onClick={(e) => {
          if (!confirm("Reset this whole section back to the original text? This can't be undone.")) {
            e.preventDefault();
          }
        }}
        className="ml-auto rounded-full px-4 py-2 text-xs font-medium text-red-500 hover:bg-red-50"
      >
        Reset section to default
      </button>
    </div>
  );
}
