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
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-rose-100 via-amber-50 to-rose-50 text-rose-300 ${className}`}
    >
      <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
      {label && <span className="text-xs font-medium text-rose-400">{label}</span>}
    </div>
  );
}
