import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Image, title and the title arrow all open the detail page; only the
  // Book Now button goes to WhatsApp.
  const detailHref = `/services/${service.slug}`;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={detailHref} className="relative block h-44 w-full overflow-hidden">
        <Image
          src={service.image ?? `/images/services/${service.slug}.webp`}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <Link
            href={detailHref}
            className="text-lg font-semibold text-secondary transition-colors hover:text-third"
          >
            {service.title}
          </Link>
          <Link
            href={detailHref}
            aria-label={`View ${service.title} details`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary/25 text-secondary transition-colors hover:border-third hover:bg-primary/40 hover:text-third"
          >
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-1.5 text-sm text-zinc-600">{service.description}</p>

        {/* mt-auto keeps the CTA on the baseline across cards whose
            descriptions run to different lengths. */}
        <div className="mt-auto flex justify-end pt-4">
          <a
            href={whatsappLink(
              `Hi ${siteConfig.shortName}! I saw the ${service.title} service on your website and would like to book it. Could you please share your available slots?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#25D366] px-3.5 py-2 text-sm font-medium text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
