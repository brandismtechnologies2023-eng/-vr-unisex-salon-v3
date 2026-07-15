"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import GalleryCard from "@/components/shared/GalleryCard";
import Carousel from "@/components/shared/Carousel";
import MasonryColumns from "@/components/shared/MasonryColumns";
import Modal from "@/components/shared/Modal";
import { galleryMedia } from "@/lib/data";
import type { GalleryMedia } from "@/types";

const AUTO_PLAY_INTERVAL = 4000;
// With only a handful of real photos/videos, repeat the same set across
// a few slides (each rotated to a different starting item) so every
// slide is still a full, dense Pinterest-style grid instead of a sparse
// one, while the slider still has multiple slides to loop through. Once
// the media library grows, swap this for real chunking again.
const SLIDE_REPEATS = 3;

function buildRepeatingSlides<T>(items: T[], repeats: number): T[][] {
  if (items.length === 0) return [];
  const step = Math.max(1, Math.ceil(items.length / repeats));
  return Array.from({ length: repeats }, (_, i) => {
    const offset = (i * step) % items.length;
    return [...items.slice(offset), ...items.slice(0, offset)];
  });
}

export default function Gallery() {
  const slides = buildRepeatingSlides(galleryMedia, SLIDE_REPEATS);
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeMedia = galleryMedia.find((m) => m.id === activeId) ?? null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Gallery"
        title="A Glimpse Inside VR Salon"
        subtitle="Real transformations and moments from our salon floor."
      />

      <Carousel
        slides={slides}
        autoPlayInterval={AUTO_PLAY_INTERVAL}
        arrowLabel="photos"
        renderSlide={(slideMedia) => (
          <MasonryColumns
            items={slideMedia}
            maxColumns={6}
            minColumnWidth={180}
            getKey={(media: GalleryMedia) => media.id}
            getAspectRatio={(media: GalleryMedia) =>
              media.width && media.height ? media.width / media.height : 9 / 16
            }
            renderItem={(media: GalleryMedia) => (
              <GalleryCard media={media} onClick={() => setActiveId(media.id)} />
            )}
          />
        )}
      />

      <Modal isOpen={!!activeMedia} onClose={() => setActiveId(null)}>
        {activeMedia && (
          <div className="max-h-[85vh] w-[90vw] max-w-2xl overflow-hidden rounded-xl bg-black">
            {activeMedia.type === "video" ? (
              <video
                src={activeMedia.src}
                className="max-h-[85vh] w-full"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <Image
                src={activeMedia.src}
                alt={activeMedia.alt}
                width={activeMedia.width ?? 1200}
                height={activeMedia.height ?? 1200}
                className="max-h-[85vh] w-full object-contain"
              />
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
