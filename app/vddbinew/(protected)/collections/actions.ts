"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/guard";
import { saveImage } from "@/lib/admin/storage";
import { getCollection, type FieldSpec } from "@/lib/admin/collections";

async function fieldValue(field: FieldSpec, formData: FormData, key: string) {
  const raw = formData.get(field.name);
  switch (field.type) {
    case "number": {
      const n = Number(raw);
      return Number.isFinite(n) && String(raw).trim() !== "" ? n : undefined;
    }
    case "boolean":
      return raw === "on" || raw === "true";
    case "stringlist":
      return String(raw ?? "")
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);
    case "image": {
      if (raw instanceof File && raw.size > 0) return saveImage(raw, key);
      return String(formData.get(`${field.name}_current`) ?? "") || undefined;
    }
    default: {
      const v = String(raw ?? "").trim();
      return v === "" ? undefined : v;
    }
  }
}

async function buildData(key: string, formData: FormData) {
  const config = getCollection(key);
  if (!config) throw new Error(`Unknown collection: ${key}`);
  const data: Record<string, unknown> = {};
  for (const field of config.fields) {
    const value = await fieldValue(field, formData, key);
    if (value !== undefined) data[field.name] = value;
  }
  return { config, data };
}

export async function saveItem(key: string, formData: FormData) {
  await requireAdmin();
  const { config, data } = await buildData(key, formData);
  const id = String(formData.get("id") ?? "") || null;

  if (id) await config.content.update(id, data);
  else await config.content.create(data);

  config.revalidate.forEach((p) => revalidatePath(p));
  revalidatePath(`/vddbinew/collections/${key}`);
  redirect(`/vddbinew/collections/${key}`);
}

export async function duplicateItem(key: string, id: string) {
  await requireAdmin();
  const config = getCollection(key);
  if (!config) return;
  await config.content.duplicate(id);
  config.revalidate.forEach((p) => revalidatePath(p));
  revalidatePath(`/vddbinew/collections/${key}`);
}

export async function deleteItem(key: string, id: string) {
  await requireAdmin();
  const config = getCollection(key);
  if (!config) return;
  await config.content.remove(id);
  config.revalidate.forEach((p) => revalidatePath(p));
  revalidatePath(`/vddbinew/collections/${key}`);
}

export async function reorderItems(key: string, orderedIds: string[]) {
  await requireAdmin();
  const config = getCollection(key);
  if (!config) return;
  await config.content.reorder(orderedIds);
  config.revalidate.forEach((p) => revalidatePath(p));
  revalidatePath(`/vddbinew/collections/${key}`);
}
