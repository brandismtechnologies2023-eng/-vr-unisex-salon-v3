import { prisma } from "@/lib/db";
import { services as fallback } from "@/lib/data";
import type { Service } from "@/types";

// Services have real columns (slug/title/… for routing and sorting) plus a
// `sections` JSON bag holding the ~18 optional section shapes. DB-first with
// the static lib/data.ts array as fallback so the public site never breaks.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToService(row: any): Service {
  const { id, slug, title, shortTitle, description, startingPrice, image, sections } = row;
  return {
    id,
    slug,
    title,
    shortTitle: shortTitle ?? undefined,
    description,
    startingPrice,
    image: image ?? undefined,
    ...(sections as object),
  } as Service;
}

function splitService(data: Service) {
  const { slug, title, shortTitle, description, startingPrice, image, ...rest } = data;
  // `id` is handled separately by callers; strip it from the sections bag.
  const sections = { ...rest } as Record<string, unknown>;
  delete sections.id;
  return {
    columns: {
      slug,
      title,
      shortTitle: shortTitle ?? null,
      description,
      startingPrice,
      image: image ?? null,
    },
    sections,
  };
}

export async function getServices(): Promise<Service[]> {
  try {
    const rows = await prisma.service.findMany({ orderBy: { order: "asc" } });
    if (rows.length === 0) return fallback;
    return rows.map(rowToService);
  } catch {
    return fallback;
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const row = await prisma.service.findUnique({ where: { slug } });
    if (row) return rowToService(row);
  } catch {
    /* fall through */
  }
  return fallback.find((s) => s.slug === slug) ?? null;
}

export async function getServiceById(id: string): Promise<Service | null> {
  const row = await prisma.service.findUnique({ where: { id } });
  return row ? rowToService(row) : null;
}

async function nextOrder() {
  const max = await prisma.service.aggregate({ _max: { order: true } });
  return (max._max.order ?? -1) + 1;
}

export async function updateService(id: string, data: Service): Promise<void> {
  const { columns, sections } = splitService(data);
  await prisma.service.update({
    where: { id },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: { ...columns, sections: sections as any },
  });
}

export async function duplicateService(id: string): Promise<string> {
  const source = await prisma.service.findUnique({ where: { id } });
  if (!source) throw new Error("Service not found");
  const newId = crypto.randomUUID();
  const suffix = newId.slice(0, 6);
  await prisma.service.create({
    data: {
      id: newId,
      slug: `${source.slug}-copy-${suffix}`,
      title: `${source.title} (copy)`,
      shortTitle: source.shortTitle,
      description: source.description,
      startingPrice: source.startingPrice,
      image: source.image,
      order: await nextOrder(),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sections: source.sections as any,
    },
  });
  return newId;
}

export async function deleteService(id: string): Promise<void> {
  await prisma.service.delete({ where: { id } });
}

export async function reorderServices(orderedIds: string[]): Promise<void> {
  await Promise.all(
    orderedIds.map((id, i) => prisma.service.update({ where: { id }, data: { order: i } }))
  );
}
