import Image from "next/image";
import { Play } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import { siteConfig } from "@/lib/site-config";
import type { InstagramPost } from "@/types";

interface InstagramPostCardProps {
  post: InstagramPost;
  onClick: () => void;
  // Where "View profile" and "View more on Instagram" point — the real post
  // permalink when live, the salon's profile otherwise.
  moreHref: string;
}

// A reel-style card: the account header, a 9:16 media frame, and a link out
// to Instagram — mirroring how a post looks in-app.
export default function InstagramPostCard({ post, onClick, moreHref }: InstagramPostCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg">
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
          View profile
        </a>
      </div>

      <button
        type="button"
        onClick={onClick}
        aria-label="Open post"
        className="group relative block aspect-9/16 w-full overflow-hidden bg-black"
      >
        {post.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image}
            alt={post.caption || "Instagram post"}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder className="h-full w-full" />
        )}

        {post.isVideo && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 shadow-md">
              <Play className="h-5 w-5 translate-x-0.5 fill-secondary text-secondary" />
            </span>
          </span>
        )}
      </button>

      <a
        href={moreHref}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-2.5 text-xs font-medium text-blue-600 hover:underline"
      >
        View more on Instagram
      </a>
    </div>
  );
}
