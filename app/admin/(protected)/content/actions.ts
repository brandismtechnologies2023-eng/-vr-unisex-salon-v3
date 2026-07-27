"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/guard";
import { getSettingRaw, updateSetting } from "@/lib/content/settings";
import { flattenLeaves, setPath } from "@/lib/admin/paths";

export async function saveSetting(namespace: string, formData: FormData) {
  await requireAdmin();

  // Start from the current stored shape, then apply each edited leaf back by
  // its path (coerced to the leaf's original type). This preserves structure
  // and any values not surfaced in the form.
  const raw = structuredClone(await getSettingRaw(namespace)) as unknown;
  for (const leaf of flattenLeaves(raw)) {
    const field = formData.get(leaf.path);
    let value: string | number | boolean;
    if (leaf.kind === "boolean") value = field === "on";
    else if (leaf.kind === "number") value = Number(field);
    else value = String(field ?? "");
    setPath(raw, leaf.path, value);
  }

  await updateSetting(namespace, raw);

  // Site copy can appear on any page — refresh the main ones.
  ["/", "/about", "/contact", "/services"].forEach((p) => revalidatePath(p));
  revalidatePath(`/admin/content/${namespace}`);
  redirect("/admin/content");
}
