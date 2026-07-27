import { prisma } from "@/lib/db";
import { testimonials as fallback } from "@/lib/data";
import { makeCollection } from "@/lib/content/collection";
import type { Testimonial } from "@/types";

export const testimonialsContent = makeCollection<Testimonial>(
  () => prisma.testimonial as never,
  fallback,
  (t) => ({ ...t, name: `${t.name} (copy)` })
);
