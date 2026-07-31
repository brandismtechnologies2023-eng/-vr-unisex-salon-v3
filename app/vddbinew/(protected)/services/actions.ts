"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/guard";
import { saveImage } from "@/lib/admin/storage";
import {
  getServiceById,
  updateService,
  duplicateService,
  deleteService,
  reorderServices,
} from "@/lib/content/services";
import { flattenLeaves, setPath } from "@/lib/admin/paths";
import type { Service } from "@/types";

function revalidateServices(slug?: string) {
  revalidatePath("/");
  revalidatePath("/services");
  if (slug) revalidatePath(`/services/${slug}`);
  revalidatePath("/vddbinew/services");
}

async function resolveImage(formData: FormData, current?: string): Promise<string | undefined> {
  const file = formData.get("image");
  if (file instanceof File && file.size > 0) return saveImage(file, "services");
  return current;
}

const str = (formData: FormData, k: string) => String(formData.get(k) ?? "").trim();

export async function saveService(id: string, formData: FormData) {
  await requireAdmin();
  const current = await getServiceById(id);
  if (!current) return;

  // Section bag = everything except the flat columns/id.
  const {
    id: _id,
    slug: _s,
    title: _t,
    shortTitle: _st,
    description: _d,
    startingPrice: _p,
    image: _i,
    ...sections
  } = current;
  void _id, void _s, void _t, void _st, void _d, void _p, void _i;

  const sectionBag = structuredClone(sections) as Record<string, unknown>;
  for (const leaf of flattenLeaves(sectionBag)) {
    const field = formData.get(`sec.${leaf.path}`);
    let value: string | number | boolean;
    if (leaf.kind === "boolean") value = field === "on";
    else if (leaf.kind === "number") value = Number(field);
    else value = String(field ?? "");
    setPath(sectionBag, leaf.path, value);
  }

  const shortTitle = str(formData, "shortTitle");
  const updated = {
    id,
    slug: str(formData, "slug"),
    title: str(formData, "title"),
    shortTitle: shortTitle || undefined,
    description: str(formData, "description"),
    startingPrice: Number(formData.get("startingPrice")) || 0,
    image: await resolveImage(formData, current.image),
    ...sectionBag,
  } as Service;

  await updateService(id, updated);
  revalidateServices(updated.slug);
  redirect("/vddbinew/services");
}

export async function duplicateServiceAction(id: string) {
  await requireAdmin();
  await duplicateService(id);
  revalidateServices();
}

export async function deleteServiceAction(id: string) {
  await requireAdmin();
  await deleteService(id);
  revalidateServices();
}

export async function reorderServicesAction(orderedIds: string[]) {
  await requireAdmin();
  await reorderServices(orderedIds);
  revalidateServices();
}
