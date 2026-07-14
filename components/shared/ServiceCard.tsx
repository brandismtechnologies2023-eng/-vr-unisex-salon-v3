import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { siteConfig } from "@/lib/site-config";
import ImagePlaceholder from "./ImagePlaceholder";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <ImagePlaceholder className="h-44 w-full" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-zinc-900">{service.title}</h3>
        <p className="mt-1 text-sm text-zinc-600">{service.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-rose-600">
            Starting {siteConfig.currency} {service.startingPrice}
          </span>
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 group-hover:text-rose-600"
          >
            Book Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
