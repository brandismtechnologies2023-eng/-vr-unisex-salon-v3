import type { Leaf } from "@/lib/admin/paths";

// Renders one editable leaf (string/number/boolean) named by its dot-path.
// `prefix` lets a parent namespace the field names (e.g. "sections.").
export function LeafField({ leaf, prefix = "" }: { leaf: Leaf; prefix?: string }) {
  const name = `${prefix}${leaf.path}`;
  const base =
    "w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm outline-none focus:border-secondary";

  if (leaf.kind === "boolean") {
    return (
      <label className="flex items-center gap-2 text-sm font-medium text-secondary">
        <input
          type="checkbox"
          name={name}
          defaultChecked={Boolean(leaf.value)}
          className="h-4 w-4 rounded border-zinc-300"
        />
        {leaf.label}
      </label>
    );
  }

  const label = (
    <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-secondary">
      {leaf.label}
      <span className="ml-2 font-normal text-zinc-300">{leaf.path}</span>
    </label>
  );

  if (leaf.kind === "textarea") {
    return (
      <div>
        {label}
        <textarea
          id={name}
          name={name}
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
        id={name}
        name={name}
        type={leaf.kind === "number" ? "number" : "text"}
        defaultValue={String(leaf.value)}
        className={base}
      />
    </div>
  );
}
