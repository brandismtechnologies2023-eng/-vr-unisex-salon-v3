import Image from "next/image";
import type { InstagramPost } from "@/types";
import ImagePlaceholder from "./ImagePlaceholder";

interface InstagramPostCardProps {
  post: InstagramPost;
  href: string;
  className?: string;
}

export default function InstagramPostCard({
  post,
  href,
  className = "",
}: InstagramPostCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block w-full overflow-hidden rounded-xl ${className}`}
    >
      {post.image ? (
        <Image
          src={post.image}
          alt={post.caption || "Instagram post"}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      ) : (
        <ImagePlaceholder className="h-full w-full" />
      )}
    </a>
  );
}
