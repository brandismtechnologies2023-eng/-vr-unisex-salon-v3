import { ChevronLeft, ChevronRight, Heart, MessageCircle, Send } from "lucide-react";
import type { InstagramPost } from "@/types";
import { siteConfig } from "@/lib/site-config";
import { formatInstagramTimestamp } from "@/utils/formatInstagramTimestamp";
import ImagePlaceholder from "./ImagePlaceholder";

interface InstagramPostModalProps {
  post: InstagramPost;
  href: string;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
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

export default function InstagramPostModal({
  post,
  href,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
}: InstagramPostModalProps) {
  return (
    <div className="flex max-h-[85vh] w-[92vw] max-w-4xl flex-col overflow-hidden rounded-xl bg-white sm:h-[75vh] sm:flex-row">
      <div className="relative h-72 shrink-0 bg-black sm:h-full sm:flex-1">
        {post.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image}
            alt={post.caption || "Instagram post"}
            className="h-full w-full object-contain"
          />
        ) : (
          <ImagePlaceholder className="h-full w-full" />
        )}

        {hasPrev && (
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous post"
            className="absolute left-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-zinc-700 shadow-md hover:text-rose-600"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}
        {hasNext && (
          <button
            type="button"
            onClick={onNext}
            aria-label="Next post"
            className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-zinc-700 shadow-md hover:text-rose-600"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="flex w-full flex-1 flex-col overflow-hidden sm:w-80 sm:flex-none">
        <div className="flex items-center gap-3 border-b border-zinc-100 p-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-xs font-semibold text-rose-600">
            VR
          </div>
          <span className="text-sm font-semibold text-zinc-900">
            {siteConfig.instagramHandle}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto p-4 text-sm text-zinc-700">
          <p>
            <span className="font-semibold text-zinc-900">
              {siteConfig.instagramHandle}
            </span>{" "}
            {renderCaption(post.caption)}
          </p>
        </div>

        <div className="border-t border-zinc-100 p-4">
          <div className="flex items-center gap-4">
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Like on Instagram">
              <Heart className="h-6 w-6 text-zinc-700 hover:text-rose-600" />
            </a>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Comment on Instagram">
              <MessageCircle className="h-6 w-6 text-zinc-700 hover:text-rose-600" />
            </a>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Share">
              <Send className="h-6 w-6 text-zinc-700 hover:text-rose-600" />
            </a>
          </div>
          <p className="mt-2 text-sm font-semibold text-zinc-900">
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
            className="mt-3 block text-center text-sm font-medium text-rose-600"
          >
            View on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
