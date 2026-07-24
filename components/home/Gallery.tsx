"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import GalleryCard from "@/components/shared/GalleryCard";
import Carousel from "@/components/shared/Carousel";
import Modal from "@/components/shared/Modal";
import { galleryMedia, siteContent } from "@/lib/data";
import type { GalleryMedia } from "@/types";

const content = siteContent.gallery;

const AUTO_PLAY_INTERVAL = 4000;
const MOBILE_BREAKPOINT = 640;

// Desktop lays out a fixed 6-column x 2-row masonry grid per slide so the
// block is always a clean rectangle (flush top and bottom, per the
// client's reference) instead of a true bin-packed masonry, which can't
// guarantee equal column heights. Mobile keeps a single row of 2 square
// cards, matching the earlier "max 2 per slide" requirement.
const DESKTOP_COLUMNS = 6;
const DESKTOP_ROWS = 2;
const DESKTOP_SLIDE_COUNT = 3;
const MOBILE_COLUMNS = 2;
const MOBILE_ROWS = 1;

// Builds `slideCount` slides of `columns` x `rows` media grids, cycling
// through `items` with wraparound so every cell always has real media —
// no blank cells — even when the slot count exceeds the media count.
function buildMasonrySlides(
  items: GalleryMedia[],
  columns: number,
  rows: number,
  slideCount: number
): GalleryMedia[][][] {
  if (items.length === 0) return [];
  const perSlide = columns * rows;
  return Array.from({ length: slideCount }, (_, slideIndex) => {
    const slideOffset = slideIndex * perSlide;
    return Array.from({ length: columns }, (_, colIndex) =>
      Array.from({ length: rows }, (_, rowIndex) => {
        const flatIndex = slideOffset + colIndex * rows + rowIndex;
        return items[flatIndex % items.length];
      })
    );
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
  const columns = isMobile ? MOBILE_COLUMNS : DESKTOP_COLUMNS;
  const rows = isMobile ? MOBILE_ROWS : DESKTOP_ROWS;
  const slideCount = isMobile
    ? Math.ceil(galleryMedia.length / (MOBILE_COLUMNS * MOBILE_ROWS))
    : DESKTOP_SLIDE_COUNT;
  const slides = buildMasonrySlides(galleryMedia, columns, rows, slideCount);

  const [activeId, setActiveId] = useState<string | null>(null);
  const activeMedia = galleryMedia.find((m) => m.id === activeId) ?? null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading title={content.title} subtitle={content.subtitle} />

      <Carousel
        slides={slides}
        autoPlayInterval={AUTO_PLAY_INTERVAL}
        arrowLabel={content.arrowLabel}
        slideClassName={`grid gap-3 ${isMobile ? "grid-cols-2" : "grid-cols-6"}`}
        renderSlide={(slideColumns) => (
          <>
            {slideColumns.map((column, colIndex) => (
              <div
                key={colIndex}
                className={`flex flex-col gap-3 ${isMobile ? "h-44" : "h-130"}`}
              >
                {column.map((media, rowIndex) => {
                  // Alternate tall-top/short-bottom and short-top/tall-bottom
                  // columns so the grid reads as masonry while every column
                  // still sums to the exact same total height.
                  const isTall =
                    rows === 1 ||
                    (colIndex % 2 === 0) === (rowIndex === 0);
                  return (
                    <GalleryCard
                      key={`${media.id}-${colIndex}-${rowIndex}`}
                      media={media}
                      onClick={() => setActiveId(media.id)}
                      className={isTall ? "flex-3" : "flex-2"}
                    />
                  );
                })}
              </div>
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
