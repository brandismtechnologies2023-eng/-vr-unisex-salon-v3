import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/prisma/client";
import type { Prisma } from "../lib/generated/prisma/client";
import {
  services,
  team,
  testimonials,
  galleryMedia,
  faqs,
  pricingPackages,
  siteContent,
} from "../lib/data";

// Seeding runs DDL-adjacent bulk writes, so prefer the direct (non-pooling)
// connection when available; fall back to DATABASE_URL / pooled.
const connectionString =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.POSTGRES_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// Our content interfaces are JSON-serializable but don't carry the index
// signature Prisma's InputJsonValue expects, so bridge them explicitly.
const toJson = (v: unknown) => v as Prisma.InputJsonValue;

async function main() {
  // Services: real columns + the rest of the shape as `sections` JSON.
  for (const [i, s] of services.entries()) {
    const { id, slug, title, shortTitle, description, startingPrice, image, ...sections } = s;
    await prisma.service.upsert({
      where: { id },
      create: {
        id,
        slug,
        title,
        shortTitle: shortTitle ?? null,
        description,
        startingPrice,
        image: image ?? null,
        order: i,
        sections: toJson(sections),
      },
      update: {
        slug,
        title,
        shortTitle: shortTitle ?? null,
        description,
        startingPrice,
        image: image ?? null,
        order: i,
        sections: toJson(sections),
      },
    });
  }

  // Flat collections: whole object in `data`, position in `order`.
  const collections = [
    { model: prisma.teamMember, rows: team },
    { model: prisma.testimonial, rows: testimonials },
    { model: prisma.galleryItem, rows: galleryMedia },
    { model: prisma.faqItem, rows: faqs },
    { model: prisma.pricingPkg, rows: pricingPackages },
  ] as const;

  for (const { model, rows } of collections) {
    for (const [i, row] of rows.entries()) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (model as any).upsert({
        where: { id: row.id },
        create: { id: row.id, order: i, data: toJson(row) },
        update: { order: i, data: toJson(row) },
      });
    }
  }

  // Free-form site copy: one row per top-level siteContent namespace.
  // Function-valued entries can't be persisted as JSON — skip them; those
  // stay sourced from lib/data.ts and are not admin-editable.
  for (const [namespace, value] of Object.entries(siteContent)) {
    const data = toJson(stripFunctions(value));
    await prisma.siteSetting.upsert({
      where: { namespace },
      create: { namespace, data },
      update: { data },
    });
  }

  const counts = {
    services: await prisma.service.count(),
    team: await prisma.teamMember.count(),
    testimonials: await prisma.testimonial.count(),
    gallery: await prisma.galleryItem.count(),
    faqs: await prisma.faqItem.count(),
    pricing: await prisma.pricingPkg.count(),
    settings: await prisma.siteSetting.count(),
  };
  console.log("Seeded:", counts);
}

// Recursively drop function-valued keys so a namespace subtree is JSON-safe.
function stripFunctions(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stripFunctions);
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      if (typeof v === "function") continue;
      out[k] = stripFunctions(v);
    }
    return out;
  }
  return value;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
