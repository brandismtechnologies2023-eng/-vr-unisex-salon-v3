"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";
import { saveSetting } from "@/app/vddbinew/(protected)/content/actions";
import { LeafField } from "@/components/admin/LeafFields";
import type { Leaf } from "@/lib/admin/paths";

// Generic path-keyed editor for a site-copy namespace. Each leaf's input is
// named by its dot-path; the server action rebuilds the object from those.
export default function JsonEditor({
  namespace,
  leaves,
  backHref,
}: {
  namespace: string;
  leaves: Leaf[];
  backHref: string;
}) {
  const save = saveSetting.bind(null, namespace);
  return (
    <form action={save} className="max-w-2xl space-y-5">
      {leaves.map((leaf) => (
        <LeafField key={leaf.path} leaf={leaf} />
      ))}
      <SubmitRow backHref={backHref} />
    </form>
  );
}

function SubmitRow({ backHref }: { backHref: string }) {
  const { pending } = useFormStatus();
  return (
    <div className="flex items-center gap-3 pt-2">
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
    </div>
  );
}
