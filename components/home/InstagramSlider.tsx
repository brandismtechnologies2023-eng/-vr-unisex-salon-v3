"use client";

import { useState } from "react";
import Carousel from "@/components/shared/Carousel";
import InstagramPostCard from "@/components/shared/InstagramPostCard";
import InstagramPostModal from "@/components/shared/InstagramPostModal";
import Modal from "@/components/shared/Modal";
import { siteConfig } from "@/lib/site-config";
import type { InstagramPost } from "@/types";

const POSTS_PER_SLIDE = 5;
const AUTO_PLAY_INTERVAL = 4000;

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

  const [activeSlidePosts, setActiveSlidePosts] = useState<InstagramPost[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePost = activeIndex !== null ? activeSlidePosts[activeIndex] : null;

  const openPost = (slidePosts: InstagramPost[], i: number) => {
    setActiveSlidePosts(slidePosts);
    setActiveIndex(i);
  };

  return (
    <div>
      <Carousel
        slides={slides}
        autoPlayInterval={AUTO_PLAY_INTERVAL}
        pausedExternally={activeIndex !== null}
        arrowLabel="posts"
        onDark
        slideClassName="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        renderSlide={(slidePosts, { isActive, justDraggedRef }) => (
          <>
            {slidePosts.map((post, i) => (
              <InstagramPostCard
                key={post.id}
                post={post}
                moreHref={isLive ? post.permalink : siteConfig.instagramUrl}
                onClick={() => {
                  if (justDraggedRef.current) return;
                  if (isActive) openPost(slidePosts, i);
                }}
              />
            ))}
          </>
        )}
      />

      <Modal
        isOpen={activeIndex !== null}
        onClose={() => setActiveIndex(null)}
        maxWidthClassName="max-w-4xl"
        onPrev={() => setActiveIndex((idx) => Math.max((idx ?? 0) - 1, 0))}
        onNext={() =>
          setActiveIndex((idx) =>
            Math.min((idx ?? 0) + 1, activeSlidePosts.length - 1)
          )
        }
        hasPrev={(activeIndex ?? 0) > 0}
        hasNext={(activeIndex ?? 0) < activeSlidePosts.length - 1}
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
