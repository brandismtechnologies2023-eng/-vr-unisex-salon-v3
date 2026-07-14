import type { InstagramPost } from "@/types";
import ImagePlaceholder from "./ImagePlaceholder";

interface InstagramPostCardProps {
  post: InstagramPost;
  href: string;
  aspectClassName?: string;
}

export default function InstagramPostCard({
  post,
  href,
  aspectClassName = "aspect-square",
}: InstagramPostCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full overflow-hidden rounded-xl"
    >
      {post.image ? (
        // Plain <img>, not next/image: Instagram CDN URLs are signed/expiring
        // and we want the browser to size the box off the real, unknown
        // aspect ratio instead of forcing a crop.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.image}
          alt={post.caption || "Instagram post"}
          loading="lazy"
          className="block h-auto w-full transition-transform group-hover:scale-105"
        />
      ) : (
        <ImagePlaceholder className={`w-full ${aspectClassName}`} />
      )}
    </a>
  );
}
