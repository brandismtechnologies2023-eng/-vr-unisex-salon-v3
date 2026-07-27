"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";
import { saveSetting } from "@/app/admin/(protected)/content/actions";
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
        <Field key={leaf.path} leaf={leaf} />
      ))}
      <SubmitRow backHref={backHref} />
    </form>
  );
}

function Field({ leaf }: { leaf: Leaf }) {
  const base =
    "w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm outline-none focus:border-secondary";

  if (leaf.kind === "boolean") {
    return (
      <label className="flex items-center gap-2 text-sm font-medium text-secondary">
        <input
          type="checkbox"
          name={leaf.path}
          defaultChecked={Boolean(leaf.value)}
          className="h-4 w-4 rounded border-zinc-300"
        />
        {leaf.label}
      </label>
    );
  }

  const label = (
    <label htmlFor={leaf.path} className="mb-1.5 block text-sm font-medium text-secondary">
      {leaf.label}
      <span className="ml-2 font-normal text-zinc-300">{leaf.path}</span>
    </label>
  );

  if (leaf.kind === "textarea") {
    return (
      <div>
        {label}
        <textarea
          id={leaf.path}
          name={leaf.path}
          rows={3}
          defaultValue={String(leaf.value)}
          className={base}
        />
      </div>
    );
  }

  return (
    <div>
      {label}
      <input
        id={leaf.path}
        name={leaf.path}
        type={leaf.kind === "number" ? "number" : "text"}
        defaultValue={String(leaf.value)}
        className={base}
      />
    </div>
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
