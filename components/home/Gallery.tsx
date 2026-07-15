"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import GalleryCard from "@/components/shared/GalleryCard";
import Carousel from "@/components/shared/Carousel";
import Modal from "@/components/shared/Modal";
import { galleryMedia } from "@/lib/data";

const AUTO_PLAY_INTERVAL = 4000;
const MOBILE_BREAKPOINT = 640;
// Mobile shows just 2 items per slide (one short row) instead of the
// whole library stacked into a tall 2-column grid. 10 items / 2 divides
// evenly, so this naturally produces 5 full slides with no repeats
// needed. Desktop still repeats the set across a few dense grids (see
// buildRepeatingSlides) since 10 items only fills one 5-column grid.
const MOBILE_MEDIA_PER_SLIDE = 2;
const DESKTOP_SLIDE_REPEATS = 3;

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

function buildRepeatingSlides<T>(items: T[], repeats: number): T[][] {
  if (items.length === 0) return [];
  const step = Math.max(1, Math.ceil(items.length / repeats));
  return Array.from({ length: repeats }, (_, i) => {
    const offset = (i * step) % items.length;
    return [...items.slice(offset), ...items.slice(0, offset)];
  });
}

function useIsMobile(breakpoint: number) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

export default function Gallery() {
  const isMobile = useIsMobile(MOBILE_BREAKPOINT);
  const slides = isMobile
    ? chunk(galleryMedia, MOBILE_MEDIA_PER_SLIDE)
    : buildRepeatingSlides(galleryMedia, DESKTOP_SLIDE_REPEATS);
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
        slideClassName="grid grid-cols-2 gap-3 sm:grid-cols-5"
        renderSlide={(slideMedia) => (
          <>
            {slideMedia.map((media) => (
              <GalleryCard
                key={media.id}
                media={media}
                onClick={() => setActiveId(media.id)}
              />
            ))}
          </>
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
