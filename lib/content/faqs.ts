import { prisma } from "@/lib/db";
import { faqs as fallback } from "@/lib/data";
import { makeCollection } from "@/lib/content/collection";
import type { FaqItem } from "@/types";

export const faqsContent = makeCollection<FaqItem>(
  () => prisma.faqItem as never,
  fallback
);
