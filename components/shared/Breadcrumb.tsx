import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  icon?: ReactNode;
}

export default function Breadcrumb({ items, icon }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />}
          {item.href ? (
            <Link
              href={item.href}
              className="flex items-center gap-1.5 text-zinc-500 hover:text-secondary"
            >
              {i === 0 && icon}
              {item.label}
            </Link>
          ) : (
            <span className="flex items-center gap-1.5 font-medium text-secondary">
              {i === 0 && icon}
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
