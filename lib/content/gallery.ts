import { prisma } from "@/lib/db";
import { galleryMedia as fallback } from "@/lib/data";
import { makeCollection } from "@/lib/content/collection";
import type { GalleryMedia } from "@/types";

export const galleryContent = makeCollection<GalleryMedia>(
  () => prisma.galleryItem as never,
  fallback
);
