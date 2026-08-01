"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin/guard";
import { deleteSubmission } from "@/lib/content/submissions";

export async function deleteSubmissionAction(id: string) {
  await requireAdmin();
  await deleteSubmission(id);
  revalidatePath("/vddbinew/submissions");
}
