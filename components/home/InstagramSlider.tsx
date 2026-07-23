"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InstagramPostCard from "@/components/shared/InstagramPostCard";
import InstagramPostModal from "@/components/shared/InstagramPostModal";
import Modal from "@/components/shared/Modal";
import { useLoopingSlider } from "@/hooks/useLoopingSlider";
import { siteConfig } from "@/lib/site-config";
import type { InstagramPost } from "@/types";

// Peek slider: shows four posts at once on desktop (two on small, one on
// mobile) but steps a single post per click/swipe, so the loop needs at
// least as many clones on each end as the widest visible window.
const CLONE_COUNT = 4;
const AUTO_PLAY_INTERVAL = 4000;

interface InstagramSliderProps {
  posts: InstagramPost[];
  isLive: boolean;
}

export default function InstagramSlider({ posts, isLive }: InstagramSliderProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePost = activeIndex !== null ? posts[activeIndex] : null;

  const {
    loop,
    trackRef,
    trackIndex,
    slideIndex,
    withTransition,
    slideGap,
    slideDuration,
    stepDistance,
    canDrag,
    justDraggedRef,
    goTo,
    step,
    onDragEnd,
    setIsHovering,
  } = useLoopingSlider({
    slideCount: posts.length,
    cloneCount: CLONE_COUNT,
    autoPlayInterval: AUTO_PLAY_INTERVAL,
    pausedExternally: activeIndex !== null,
  });

  if (posts.length === 0) return null;

  const trackItems = loop
    ? [...posts.slice(-CLONE_COUNT), ...posts, ...posts.slice(0, CLONE_COUNT)]
    : posts;

  const openPost = (post: InstagramPost) => {
    const idx = posts.findIndex((p) => p.id === post.id);
    if (idx >= 0) setActiveIndex(idx);
  };

  return (
    <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className="relative sm:px-12 lg:px-14">
        <div className="overflow-hidden">
          <motion.div
            className="flex touch-pan-y pb-3"
            style={{ gap: slideGap }}
            drag={canDrag ? "x" : false}
            dragConstraints={{ left: -(trackItems.length - 1) * stepDistance, right: 0 }}
            dragElastic={0.1}
            animate={{ x: -trackIndex * stepDistance }}
            transition={
              withTransition ? { ease: "easeInOut", duration: slideDuration } : { duration: 0 }
            }
            onDragEnd={onDragEnd}
          >
            {trackItems.map((post, idx) => (
              <div
                key={`${post.id}-${idx}`}
                ref={idx === 0 ? trackRef : undefined}
                className="w-full shrink-0 sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-48px)/4)]"
              >
                <InstagramPostCard
                  post={post}
                  onClick={() => {
                    if (justDraggedRef.current) return;
                    openPost(post);
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {posts.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous posts"
              className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zinc-700 shadow-md hover:bg-secondary hover:text-primary sm:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next posts"
              className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zinc-700 shadow-md hover:bg-secondary hover:text-primary sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {posts.length > 1 && (
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {posts.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to post ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === slideIndex ? "w-6 bg-secondary" : "w-2.5 bg-third/40"
              }`}
            />
          ))}
        </div>
      )}

      <Modal
        isOpen={activeIndex !== null}
        onClose={() => setActiveIndex(null)}
        maxWidthClassName="max-w-4xl"
        onPrev={() => setActiveIndex((idx) => Math.max((idx ?? 0) - 1, 0))}
        onNext={() =>
          setActiveIndex((idx) => Math.min((idx ?? 0) + 1, posts.length - 1))
        }
        hasPrev={(activeIndex ?? 0) > 0}
        hasNext={(activeIndex ?? 0) < posts.length - 1}
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
