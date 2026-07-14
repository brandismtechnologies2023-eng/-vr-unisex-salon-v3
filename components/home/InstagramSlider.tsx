"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InstagramPostCard from "@/components/shared/InstagramPostCard";
import { siteConfig } from "@/lib/site-config";
import type { InstagramPost } from "@/types";

const POSTS_PER_SLIDE = 15;

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

interface InstagramSliderProps {
  posts: InstagramPost[];
  isLive: boolean;
}

export default function InstagramSlider({ posts, isLive }: InstagramSliderProps) {
  const slides = chunk(posts, POSTS_PER_SLIDE);

  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (index: number) => {
    setDirection(index > slideIndex ? 1 : -1);
    setSlideIndex((index + slides.length) % slides.length);
  };

  if (slides.length === 0) return null;

  return (
    <div>
      <div className="relative">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slideIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-3 gap-3 sm:grid-cols-5"
            >
              {slides[slideIndex].map((post) => (
                <InstagramPostCard
                  key={post.id}
                  post={post}
                  href={isLive ? post.permalink : siteConfig.instagramUrl}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(slideIndex - 1)}
              aria-label="Previous posts"
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-md hover:bg-rose-50 hover:text-rose-600"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(slideIndex + 1)}
              aria-label="Next posts"
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-md hover:bg-rose-50 hover:text-rose-600"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to grid ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === slideIndex ? "w-6 bg-rose-600" : "w-2.5 bg-zinc-200"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
