"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";
import ImageUploadField from "@/components/admin/ImageUploadField";
import { saveItem } from "@/app/admin/(protected)/collections/actions";
import type { FieldSpec } from "@/lib/admin/collections";

// Config-driven form shared by every simple collection. The server action
// dispatches over fetch (client component) so it works on dynamic routes.
export default function CollectionForm({
  collectionKey,
  fields,
  item,
  backHref,
}: {
  collectionKey: string;
  fields: FieldSpec[];
  item?: Record<string, unknown> & { id?: string };
  backHref: string;
}) {
  const save = saveItem.bind(null, collectionKey);

  return (
    <form action={save} className="max-w-xl space-y-5">
      <input type="hidden" name="id" value={item?.id ?? ""} />
      {fields.map((field) => (
        <FieldInput key={field.name} field={field} value={item?.[field.name]} />
      ))}
      <SubmitRow backHref={backHref} />
    </form>
  );
}

function FieldInput({ field, value }: { field: FieldSpec; value: unknown }) {
  const labelEl = (
    <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-secondary">
      {field.label}
      {field.required && <span className="text-red-500"> *</span>}
    </label>
  );
  const base =
    "w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm outline-none focus:border-secondary";

  if (field.type === "image") {
    return (
      <ImageUploadField
        name={field.name}
        label={field.label}
        currentValue={typeof value === "string" ? value : undefined}
        accept={field.accept}
      />
    );
  }

  if (field.type === "boolean") {
    return (
      <label className="flex items-center gap-2 text-sm font-medium text-secondary">
        <input
          type="checkbox"
          name={field.name}
          defaultChecked={Boolean(value)}
          className="h-4 w-4 rounded border-zinc-300"
        />
        {field.label}
      </label>
    );
  }

  if (field.type === "textarea") {
    return (
      <div>
        {labelEl}
        <textarea
          id={field.name}
          name={field.name}
          rows={4}
          required={field.required}
          defaultValue={typeof value === "string" ? value : ""}
          className={base}
        />
      </div>
    );
  }

  if (field.type === "stringlist") {
    const text = Array.isArray(value) ? value.join("\n") : "";
    return (
      <div>
        {labelEl}
        <textarea
          id={field.name}
          name={field.name}
          rows={5}
          defaultValue={text}
          className={base}
        />
        {field.help && <p className="mt-1 text-xs text-zinc-400">{field.help}</p>}
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <div>
        {labelEl}
        <select
          id={field.name}
          name={field.name}
          required={field.required}
          defaultValue={typeof value === "string" ? value : ""}
          className={base}
        >
          <option value="">—</option>
          {field.options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div>
      {labelEl}
      <input
        id={field.name}
        name={field.name}
        type={field.type === "number" ? "number" : "text"}
        required={field.required}
        defaultValue={value === undefined || value === null ? "" : String(value)}
        className={base}
      />
      {field.help && <p className="mt-1 text-xs text-zinc-400">{field.help}</p>}
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
