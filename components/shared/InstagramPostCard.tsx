import type { InstagramPost } from "@/types";
import ImagePlaceholder from "./ImagePlaceholder";

interface InstagramPostCardProps {
  post: InstagramPost;
  onClick: () => void;
}

export default function InstagramPostCard({ post, onClick }: InstagramPostCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group block aspect-square w-full overflow-hidden rounded-lg"
    >
      {post.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.image}
          alt={post.caption || "Instagram post"}
          loading="lazy"
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      ) : (
        <ImagePlaceholder className="h-full w-full" />
      )}
    </button>
  );
}
