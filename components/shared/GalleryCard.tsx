import Image from "next/image";
import { Expand, Play } from "lucide-react";
import type { GalleryMedia } from "@/types";

interface GalleryCardProps {
  media: GalleryMedia;
  onClick?: () => void;
}

export default function GalleryCard({ media, onClick }: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-secondary/5"
    >
      {media.type === "video" ? (
        <video
          src={media.src}
          className="h-full w-full object-cover"
          preload="metadata"
          muted
          playsInline
        />
      ) : (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 50vw"
          className="object-cover"
        />
      )}

      {media.type === "video" && (
        <span className="absolute inset-0 flex items-center justify-center bg-black/20">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90">
            <Play className="h-5 w-5 fill-secondary text-secondary" />
          </span>
        </span>
      )}

      <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
        <Expand className="h-6 w-6 text-white" />
      </span>
    </button>
  );
}
