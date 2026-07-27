import { prisma } from "@/lib/db";
import { pricingPackages as fallback } from "@/lib/data";
import { makeCollection } from "@/lib/content/collection";
import type { PricingPackage } from "@/types";

export const pricingContent = makeCollection<PricingPackage>(
  () => prisma.pricingPkg as never,
  fallback,
  (p) => ({ ...p, name: `${p.name} (copy)` })
);
