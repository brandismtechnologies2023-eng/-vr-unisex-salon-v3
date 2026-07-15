import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  className?: string;
  label?: string;
}

// Stand-in for real photography until public/images is populated.
export default function ImagePlaceholder({
  className = "",
  label,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary via-primary/50 to-third/30 text-third ${className}`}
    >
      <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
      {label && <span className="text-xs font-medium text-secondary/60">{label}</span>}
    </div>
  );
}
