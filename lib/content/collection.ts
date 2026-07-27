import type { Prisma } from "@/lib/generated/prisma/client";

// Shared CRUD for the "row = id + order + data JSON" collections
// (testimonials, gallery, faqs, pricing — team predates this and has its
// own file). DB-first with a static lib/data.ts fallback so the public site
// still renders when the DB is empty/unreachable. "Duplicate" clones a row
// with a new id, which is why the whole item lives in `data`.

// The Prisma model delegates share this surface; typed loosely so one helper
// can drive any of them.
interface Delegate {
  findMany: (args: unknown) => Promise<{ id: string; order: number; data: unknown }[]>;
  findUnique: (args: unknown) => Promise<{ id: string; data: unknown } | null>;
  create: (args: unknown) => Promise<unknown>;
  update: (args: unknown) => Promise<unknown>;
  delete: (args: unknown) => Promise<unknown>;
  aggregate: (args: unknown) => Promise<{ _max: { order: number | null } }>;
}

const toJson = (v: unknown) => v as Prisma.InputJsonValue;

export function makeCollection<T extends { id: string }>(
  getDelegate: () => Delegate,
  fallback: T[],
  duplicateTransform: (item: T) => T = (i) => i
) {
  async function nextOrder(d: Delegate) {
    const max = await d.aggregate({ _max: { order: true } });
    return (max._max.order ?? -1) + 1;
  }

  return {
    async getAll(): Promise<T[]> {
      try {
        const rows = await getDelegate().findMany({ orderBy: { order: "asc" } });
        if (rows.length === 0) return fallback;
        return rows.map((r) => r.data as T);
      } catch {
        return fallback;
      }
    },

    async getOne(id: string): Promise<T | null> {
      const row = await getDelegate().findUnique({ where: { id } });
      return row ? (row.data as T) : null;
    },

    async create(data: Omit<T, "id">): Promise<string> {
      const d = getDelegate();
      const id = crypto.randomUUID();
      await d.create({
        data: { id, order: await nextOrder(d), data: toJson({ ...data, id }) },
      });
      return id;
    },

    async update(id: string, data: Omit<T, "id">): Promise<void> {
      await getDelegate().update({
        where: { id },
        data: { data: toJson({ ...data, id }) },
      });
    },

    async duplicate(id: string): Promise<string> {
      const d = getDelegate();
      const source = await d.findUnique({ where: { id } });
      if (!source) throw new Error("Item not found");
      const newId = crypto.randomUUID();
      const cloned = duplicateTransform({ ...(source.data as T), id: newId });
      await d.create({
        data: { id: newId, order: await nextOrder(d), data: toJson(cloned) },
      });
      return newId;
    },

    async remove(id: string): Promise<void> {
      await getDelegate().delete({ where: { id } });
    },

    async reorder(orderedIds: string[]): Promise<void> {
      const d = getDelegate();
      await Promise.all(
        orderedIds.map((id, i) => d.update({ where: { id }, data: { order: i } }))
      );
    },
  };
}
