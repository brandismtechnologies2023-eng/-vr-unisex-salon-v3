"use client";

import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { services, siteContent } from "@/lib/data";

const content = siteContent.breadcrumb;

function humanize(segment: string) {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function labelFor(segment: string) {
  const service = services.find((s) => s.slug === segment);
  return service ? service.title : humanize(segment);
}

// Mounted once in the root layout so every non-home page gets a
// breadcrumb automatically, derived from the URL — no per-page wiring.
export default function GlobalBreadcrumb() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  // No breadcrumb on the home page. Guard against the pathname arriving as
  // "/", "", or the prerendered "/index" form — all mean home.
  if (segments.length === 0 || (segments.length === 1 && segments[0] === "index")) {
    return null;
  }
  const items = [
    { label: content.homeLabel, href: "/" },
    ...segments.map((segment, i) => {
      const href = "/" + segments.slice(0, i + 1).join("/");
      const isLast = i === segments.length - 1;
      return { label: labelFor(segment), href: isLast ? undefined : href };
    }),
  ];

  return (
    <div className="border-b border-zinc-100 bg-primary/10">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <Breadcrumb items={items} icon={<Home className="h-3.5 w-3.5" />} />
      </div>
    </div>
  );
}
