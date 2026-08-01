"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin/guard";
import { setAllowIndexing } from "@/lib/content/seo-settings";

export async function toggleIndexing(allowIndexing: boolean) {
  await requireAdmin();
  await setAllowIndexing(allowIndexing);

  // robots.txt, the sitemap and every page's robots meta all derive from this.
  ["/", "/about", "/services", "/contact", "/robots.txt", "/sitemap.xml"].forEach((p) =>
    revalidatePath(p)
  );
  revalidatePath("/vddbinew/seo");
}
