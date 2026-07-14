"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InstagramPostCard from "@/components/shared/InstagramPostCard";
import InstagramPostModal from "@/components/shared/InstagramPostModal";
import Modal from "@/components/shared/Modal";
import { siteConfig } from "@/lib/site-config";
import type { InstagramPost } from "@/types";

const POSTS_PER_SLIDE = 15;
const AUTO_PLAY_INTERVAL = 4000;
const SWIPE_THRESHOLD = 60;
const SLIDE_DURATION = 0.3;

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
  const loop = slides.length > 1;
  // Clone the last/first slide onto each end so wrapping continues
  // sliding forward instead of snapping backward across every slide.
  const trackSlides = loop ? [slides[slides.length - 1], ...slides, slides[0]] : slides;

  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  const [trackIndex, setTrackIndex] = useState(loop ? 1 : 0);
  const [withTransition, setWithTransition] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const slideIndex = loop ? (trackIndex - 1 + slides.length) % slides.length : trackIndex;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => setTrackWidth(el.offsetWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    setWithTransition(true);
    setTrackIndex(loop ? index + 1 : index);
  };

  const step = (delta: number) => {
    setWithTransition(true);
    setTrackIndex((i) => i + delta);
  };

  useEffect(() => {
    if (!loop || isPaused || activeIndex !== null) return;
    const timer = setInterval(() => step(1), AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [loop, isPaused, activeIndex]);

  // Seamlessly reset from a cloned end slide back to the matching real
  // slide the instant the (invisible) jump completes.
  const handleAnimationComplete = () => {
    if (!loop) return;
    if (trackIndex === 0) {
      setWithTransition(false);
      setTrackIndex(slides.length);
    } else if (trackIndex === trackSlides.length - 1) {
      setWithTransition(false);
      setTrackIndex(1);
    }
  };

  useEffect(() => {
    if (!withTransition) {
      const id = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(id);
    }
  }, [withTransition]);

  if (slides.length === 0) return null;

  const currentSlidePosts = slides[slideIndex];
  const activePost = activeIndex !== null ? currentSlidePosts[activeIndex] : null;
  const canDrag = loop && trackWidth > 0;

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative">
        <div ref={trackRef} className="overflow-hidden">
          <motion.div
            className="flex touch-pan-y"
            drag={canDrag ? "x" : false}
            dragConstraints={{ left: -(trackSlides.length - 1) * trackWidth, right: 0 }}
            dragElastic={0.1}
            animate={{ x: -trackIndex * trackWidth }}
            transition={
              withTransition ? { ease: "linear", duration: SLIDE_DURATION } : { duration: 0 }
            }
            onAnimationComplete={handleAnimationComplete}
            onDragEnd={(_e, info) => {
              if (info.offset.x < -SWIPE_THRESHOLD) step(1);
              else if (info.offset.x > SWIPE_THRESHOLD) step(-1);
            }}
          >
            {trackSlides.map((slidePosts, idx) => (
              <div
                key={idx}
                className="grid w-full shrink-0 grid-cols-3 gap-3 sm:grid-cols-5"
                style={{ width: trackWidth || "100%" }}
              >
                {slidePosts.map((post, i) => (
                  <InstagramPostCard
                    key={post.id}
                    post={post}
                    onClick={() => {
                      if (idx === trackIndex) setActiveIndex(i);
                    }}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous posts"
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-md hover:bg-rose-50 hover:text-rose-600"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
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

      <Modal
        isOpen={activePost !== null}
        onClose={() => setActiveIndex(null)}
        maxWidthClassName="max-w-4xl"
        onPrev={() => setActiveIndex((idx) => Math.max((idx ?? 0) - 1, 0))}
        onNext={() =>
          setActiveIndex((idx) =>
            Math.min((idx ?? 0) + 1, currentSlidePosts.length - 1)
          )
        }
        hasPrev={(activeIndex ?? 0) > 0}
        hasNext={(activeIndex ?? 0) < currentSlidePosts.length - 1}
      >
        {activePost && (
          <InstagramPostModal
            post={activePost}
            href={isLive ? activePost.permalink : siteConfig.instagramUrl}
          />
        )}
      </Modal>
    </div>
  );
}
