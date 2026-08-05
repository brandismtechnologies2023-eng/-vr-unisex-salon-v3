import { prisma } from "@/lib/db";
import { siteContent } from "@/lib/data";

type SiteContent = typeof siteContent;

// Deep-merge DB overrides on top of the static siteContent. Static is the
// base so any keys the DB doesn't carry — notably the function-valued
// entries (WhatsApp/email templates), which can't be serialised — survive.
function deepMerge<T>(base: T, override: unknown): T {
  if (override === null || override === undefined) return base;
  if (typeof base !== "object" || base === null) return override as T;
  if (Array.isArray(base)) return (Array.isArray(override) ? override : base) as T;

  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  if (typeof override === "object" && !Array.isArray(override)) {
    for (const [k, v] of Object.entries(override as Record<string, unknown>)) {
      out[k] = k in out ? deepMerge(out[k], v) : v;
    }
  }
  return out as T;
}

// Merged read for public pages: DB copy over static fallback.
export async function getSetting<K extends keyof SiteContent>(
  namespace: K
): Promise<SiteContent[K]> {
  try {
    const row = await prisma.siteSetting.findUnique({
      where: { namespace: namespace as string },
    });
    if (!row) return siteContent[namespace];
    return deepMerge(siteContent[namespace], row.data);
  } catch {
    return siteContent[namespace];
  }
}

// Some siteContent entries are template functions (WhatsApp/email wording).
// They can't be stored or edited, and would make structuredClone throw in the
// save action, so they're dropped from what the editor sees.
function stripFunctions(value: unknown): unknown {
  if (typeof value === "function") return undefined;
  if (Array.isArray(value)) return value.map(stripFunctions);
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      const cleaned = stripFunctions(v);
      if (cleaned !== undefined) out[k] = cleaned;
    }
    return out;
  }
  return value;
}

// Shape shown in the admin editor. Merged over the static source the same way
// the public reads are, so a field newly added to lib/data.ts appears for
// editing straight away instead of waiting for a re-seed.
export async function getSettingRaw(namespace: string): Promise<unknown> {
  const fallback = stripFunctions(
    (siteContent as Record<string, unknown>)[namespace] ?? null
  );
  try {
    const row = await prisma.siteSetting.findUnique({ where: { namespace } });
    if (row) return deepMerge(fallback, row.data);
  } catch {
    /* fall through to static */
  }
  return fallback;
}

export async function updateSetting(namespace: string, data: unknown): Promise<void> {
  await prisma.siteSetting.upsert({
    where: { namespace },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    create: { namespace, data: data as any },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    update: { data: data as any },
  });
}
