"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";
import ImageUploadField from "@/components/admin/ImageUploadField";
import { LeafField } from "@/components/admin/LeafFields";
import { saveService } from "@/app/admin/(protected)/services/actions";
import type { Leaf } from "@/lib/admin/paths";
import type { Service } from "@/types";

// Flat service fields plus a path-keyed editor for every text leaf inside the
// service's optional sections (names prefixed "sec." so the action can tell
// them apart from the flat columns).
export default function ServiceForm({
  service,
  sectionLeaves,
}: {
  service: Service;
  sectionLeaves: Leaf[];
}) {
  const save = saveService.bind(null, service.id);
  const base =
    "w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm outline-none focus:border-secondary";

  return (
    <form action={save} className="max-w-2xl space-y-5">
      <div>
        <label htmlFor="title" className="mb-1.5 block text-sm font-medium text-secondary">
          Title
        </label>
        <input id="title" name="title" defaultValue={service.title} className={base} />
      </div>
      <div>
        <label htmlFor="shortTitle" className="mb-1.5 block text-sm font-medium text-secondary">
          Short Title (menu label)
        </label>
        <input
          id="shortTitle"
          name="shortTitle"
          defaultValue={service.shortTitle ?? ""}
          className={base}
        />
      </div>
      <div>
        <label htmlFor="slug" className="mb-1.5 block text-sm font-medium text-secondary">
          URL Slug
          <span className="ml-2 font-normal text-zinc-300">/services/&lt;slug&gt;</span>
        </label>
        <input id="slug" name="slug" defaultValue={service.slug} className={base} />
      </div>
      <div>
        <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-secondary">
          Short Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={2}
          defaultValue={service.description}
          className={base}
        />
      </div>
      <div>
        <label htmlFor="startingPrice" className="mb-1.5 block text-sm font-medium text-secondary">
          Starting Price (AED)
        </label>
        <input
          id="startingPrice"
          name="startingPrice"
          type="number"
          defaultValue={service.startingPrice}
          className={base}
        />
      </div>
      <ImageUploadField name="image" label="Main Image" currentValue={service.image} />

      {sectionLeaves.length > 0 && (
        <div className="space-y-5 border-t border-zinc-200 pt-6">
          <h2 className="text-lg font-semibold text-secondary">Page Sections</h2>
          <p className="-mt-3 text-sm text-zinc-500">
            Every piece of text on this service&apos;s page. The grey path shows where each
            field appears.
          </p>
          {sectionLeaves.map((leaf) => (
            <LeafField key={leaf.path} leaf={leaf} prefix="sec." />
          ))}
        </div>
      )}

      <SubmitRow />
    </form>
  );
}

function SubmitRow() {
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
        href="/admin/services"
        className="rounded-full px-6 py-2.5 text-sm font-medium text-zinc-500 hover:bg-zinc-100"
      >
        Cancel
      </Link>
    </div>
  );
}
