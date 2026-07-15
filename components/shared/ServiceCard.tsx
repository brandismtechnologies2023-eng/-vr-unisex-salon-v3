import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={`/images/services/${service.slug}.webp`}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-secondary">{service.title}</h3>
        <p className="mt-1 text-sm text-zinc-600">{service.description}</p>
        <div className="mt-4 flex items-center justify-end">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-secondary group-hover:text-third"
          >
            Book Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
