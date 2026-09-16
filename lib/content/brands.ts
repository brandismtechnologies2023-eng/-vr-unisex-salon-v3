import { prisma } from "@/lib/db";
import { brandsWeUse as fallback } from "@/lib/data";
import { makeCollection } from "@/lib/content/collection";

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export const brandsContent = makeCollection<Brand>(
  () => prisma.brand as never,
  fallback.map((b, i) => ({ ...b, id: String(i) })),
  (b) => ({ ...b, name: `${b.name} (copy)` })
);

export const getBrands = () => brandsContent.getAll();
