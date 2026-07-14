import { Expand } from "lucide-react";
import type { GalleryImage } from "@/types";
import ImagePlaceholder from "./ImagePlaceholder";

interface GalleryCardProps {
  image: GalleryImage;
  onClick?: () => void;
  className?: string;
}

export default function GalleryCard({
  image,
  onClick,
  className = "",
}: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative block w-full overflow-hidden rounded-xl ${className}`}
    >
      <ImagePlaceholder className="h-full w-full" label={image.category} />
      <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
        <Expand className="h-6 w-6 text-white" />
      </span>
    </button>
  );
}
