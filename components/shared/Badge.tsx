import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-secondary shadow-sm ${className}`}
    >
      {children}
    </span>
  );
}
