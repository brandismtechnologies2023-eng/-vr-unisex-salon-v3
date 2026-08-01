import { prisma } from "@/lib/db";

// Search-engine visibility is stored in the database so the owner can toggle
// it from the admin panel without a redeploy. Default is OFF: a new/preview
// deployment must never be indexed by accident.
const NAMESPACE = "seo";

export interface SeoSettings {
  allowIndexing: boolean;
}

export async function getSeoSettings(): Promise<SeoSettings> {
  try {
    const row = await prisma.siteSetting.findUnique({ where: { namespace: NAMESPACE } });
    const data = row?.data as { allowIndexing?: boolean } | undefined;
    return { allowIndexing: data?.allowIndexing === true };
  } catch {
    // If the database is unreachable, stay hidden rather than risk exposing
    // an unfinished site to search engines.
    return { allowIndexing: false };
  }
}

export async function setAllowIndexing(allowIndexing: boolean): Promise<void> {
  await prisma.siteSetting.upsert({
    where: { namespace: NAMESPACE },
    create: { namespace: NAMESPACE, data: { allowIndexing } },
    update: { data: { allowIndexing } },
  });
}
