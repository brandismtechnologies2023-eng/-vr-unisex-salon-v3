"use client";

import { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";
import type { InstagramPost } from "@/types";
import { siteConfig } from "@/lib/site-config";
import { formatInstagramTimestamp } from "@/utils/formatInstagramTimestamp";
import ImagePlaceholder from "./ImagePlaceholder";

interface InstagramPostModalProps {
  post: InstagramPost;
  href: string;
}

function renderCaption(caption: string) {
  return caption.split(/(#\S+)/g).map((part, i) =>
    part.startsWith("#") ? (
      <span key={i} className="text-sky-600">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function InstagramPostModal({ post, href }: InstagramPostModalProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = post.image && !imageFailed;

  return (
    <div className="flex max-h-[85vh] w-[92vw] max-w-4xl flex-col overflow-hidden rounded-xl bg-white sm:h-[75vh] sm:flex-row">
      <div className="h-72 shrink-0 bg-secondary sm:h-full sm:flex-1">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image}
            alt="Instagram reel"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <ImagePlaceholder className="h-full w-full" />
        )}
      </div>

      <div className="flex w-full flex-1 flex-col overflow-hidden sm:w-80 sm:flex-none">
        <div className="flex items-center gap-3 border-b border-zinc-100 p-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-secondary">
            VR
          </div>
          <span className="text-sm font-semibold text-secondary">
            {siteConfig.instagramHandle}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto p-4 text-sm text-zinc-700">
          <p>
            <span className="font-semibold text-secondary">
              {siteConfig.instagramHandle}
            </span>{" "}
            {renderCaption(post.caption)}
          </p>
        </div>

        <div className="border-t border-zinc-100 p-4">
          <div className="flex items-center gap-4">
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Like on Instagram">
              <Heart className="h-6 w-6 text-zinc-700 hover:text-secondary" />
            </a>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Comment on Instagram">
              <MessageCircle className="h-6 w-6 text-zinc-700 hover:text-secondary" />
            </a>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Share">
              <Send className="h-6 w-6 text-zinc-700 hover:text-secondary" />
            </a>
          </div>
          <p className="mt-2 text-sm font-semibold text-secondary">
            {post.likes} likes · {post.comments} comments
          </p>
          {post.timestamp && (
            <p className="mt-1 text-xs uppercase tracking-wide text-zinc-400">
              {formatInstagramTimestamp(post.timestamp)}
            </p>
          )}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center text-sm font-medium text-secondary"
          >
            View on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
