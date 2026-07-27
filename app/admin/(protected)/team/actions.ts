"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/guard";
import { saveImage } from "@/lib/admin/storage";
import {
  createTeamMember,
  updateTeamMember,
  duplicateTeamMember,
  deleteTeamMember,
  reorderTeamMembers,
} from "@/lib/content/team";

// Public pages that render the team, plus the admin list, refreshed after
// every change so edits show immediately (matters for production ISR).
function revalidateTeam() {
  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/admin/team");
}

// Reads a form's image field: a newly uploaded file wins, otherwise keep the
// existing path carried in the hidden `<field>_current` input.
async function resolveImage(formData: FormData, field: string): Promise<string> {
  const file = formData.get(field);
  if (file instanceof File && file.size > 0) return saveImage(file, "team");
  return String(formData.get(`${field}_current`) ?? "");
}

export async function saveTeamMember(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "") || null;
  const data = {
    name: String(formData.get("name") ?? "").trim(),
    role: String(formData.get("role") ?? "").trim(),
    bio: String(formData.get("bio") ?? "").trim(),
    image: await resolveImage(formData, "image"),
  };

  if (id) await updateTeamMember(id, data);
  else await createTeamMember(data);

  revalidateTeam();
  redirect("/admin/team");
}

export async function duplicateTeamMemberAction(id: string) {
  await requireAdmin();
  await duplicateTeamMember(id);
  revalidateTeam();
}

export async function deleteTeamMemberAction(id: string) {
  await requireAdmin();
  await deleteTeamMember(id);
  revalidateTeam();
}

export async function reorderTeamAction(orderedIds: string[]) {
  await requireAdmin();
  await reorderTeamMembers(orderedIds);
  revalidateTeam();
}
