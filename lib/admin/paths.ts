// Flatten a JSON value into a list of editable leaves keyed by dot-path
// (e.g. "hero.subtitle", "whyChooseUs.features.0.title"), and set a value
// back by that same path. Shared by the site-copy editor (Step 5) and the
// Services section editor (Step 6). Functions are skipped — they're never
// admin-editable.

export type LeafKind = "text" | "textarea" | "number" | "boolean";

export interface Leaf {
  path: string;
  label: string;
  value: string | number | boolean;
  kind: LeafKind;
}

function humanize(path: string): string {
  const parts = path.split(".");
  // Keep the last non-numeric segment (plus an index suffix if present) so
  // labels read like "Title" or "Features 2 — Title".
  const tail = parts.slice(-2);
  return tail
    .map((p) => (/^\d+$/.test(p) ? `#${Number(p) + 1}` : p.replace(/([A-Z])/g, " $1")))
    .join(" ")
    .replace(/^\w/, (c) => c.toUpperCase())
    .trim();
}

export function flattenLeaves(obj: unknown, prefix = ""): Leaf[] {
  const leaves: Leaf[] = [];

  const walk = (val: unknown, path: string) => {
    if (val === null || val === undefined) return;
    if (typeof val === "string") {
      leaves.push({
        path,
        label: humanize(path),
        value: val,
        kind: val.length > 60 || val.includes("\n") ? "textarea" : "text",
      });
    } else if (typeof val === "number") {
      leaves.push({ path, label: humanize(path), value: val, kind: "number" });
    } else if (typeof val === "boolean") {
      leaves.push({ path, label: humanize(path), value: val, kind: "boolean" });
    } else if (Array.isArray(val)) {
      val.forEach((v, i) => walk(v, `${path}.${i}`));
    } else if (typeof val === "object") {
      for (const [k, v] of Object.entries(val)) {
        walk(v, path ? `${path}.${k}` : k);
      }
    }
    // functions and other types are intentionally skipped
  };

  walk(obj, prefix);
  return leaves;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setPath(root: any, path: string, value: unknown): void {
  const parts = path.split(".");
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur == null) return;
    cur = cur[parts[i]];
  }
  if (cur != null) cur[parts[parts.length - 1]] = value;
}
