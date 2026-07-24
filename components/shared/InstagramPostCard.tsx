"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { siteContent } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import type { InstagramPost } from "@/types";

const content = siteContent.instagramPost;

interface InstagramPostCardProps {
  post: InstagramPost;
  onClick: () => void;
}

// A reel-style card: the account header above a 9:16 media frame, mirroring
// how a post looks in-app.
export default function InstagramPostCard({ post, onClick }: InstagramPostCardProps) {
  // Instagram serves media from short-lived signed URLs; once they expire the
  // image 403s. Track that so a failed load shows a branded panel instead of
  // a black frame with the caption bleeding through as alt text.
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = post.image && !imageFailed;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <Image
          src="/images/logo.webp"
          alt={siteConfig.name}
          width={28}
          height={28}
          className="h-7 w-7 shrink-0 rounded-full object-cover"
        />
        <span className="truncate text-xs font-semibold text-secondary">
          {siteConfig.instagramHandle}
        </span>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto shrink-0 rounded-md bg-secondary px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-secondary/85"
        >
          {content.viewProfileLabel}
        </a>
      </div>

      <button
        type="button"
        onClick={onClick}
        aria-label="Open post"
        className="group relative block aspect-9/16 w-full overflow-hidden bg-secondary"
      >
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image}
            alt={content.reelAlt}
            loading="lazy"
            draggable={false}
            onError={() => setImageFailed(true)}
            className="h-full w-full scale-110 object-cover transition-transform duration-300 group-hover:scale-115"
          />
        ) : (
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-linear-to-br from-primary via-primary/60 to-third/40 px-4 text-center">
            <Image
              src="/images/logo.webp"
              alt={siteConfig.name}
              width={64}
              height={64}
              className="h-14 w-14 rounded-full object-cover shadow-sm"
            />
            <span className="text-xs font-medium text-secondary/80">
              @{siteConfig.instagramHandle}
            </span>
          </span>
        )}

        {post.isVideo && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 shadow-md">
              <Play className="h-5 w-5 translate-x-0.5 fill-secondary text-secondary" />
            </span>
          </span>
        )}
      </button>
    </div>
  );
}
