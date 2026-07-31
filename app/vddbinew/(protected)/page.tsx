import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { getServices } from "@/lib/content/services";
import { teamContent } from "@/lib/content/team";
import { testimonialsContent } from "@/lib/content/testimonials";
import { galleryContent } from "@/lib/content/gallery";
import { pricingContent } from "@/lib/content/pricing";
import { faqsContent } from "@/lib/content/faqs";
import { contentSections } from "@/lib/admin/content-sections";

export default async function AdminDashboardPage() {
  const [services, team, testimonials, gallery, pricing, faqs] = await Promise.all([
    getServices(),
    teamContent.getAll(),
    testimonialsContent.getAll(),
    galleryContent.getAll(),
    pricingContent.getAll(),
    faqsContent.getAll(),
  ]);

  const cards = [
    { label: "Services", count: services.length, href: "/vddbinew/services" },
    { label: "Team", count: team.length, href: "/vddbinew/collections/team" },
    { label: "Testimonials", count: testimonials.length, href: "/vddbinew/collections/testimonials" },
    { label: "Gallery", count: gallery.length, href: "/vddbinew/collections/gallery" },
    { label: "Pricing", count: pricing.length, href: "/vddbinew/collections/pricing" },
    { label: "FAQs", count: faqs.length, href: "/vddbinew/collections/faqs" },
    { label: "Site Text", count: contentSections.length, href: "/vddbinew/content" },
  ];

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary">Dashboard</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Manage everything shown on the VR Salon website.
          </p>
        </div>
        <Link
          href="/"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-secondary hover:bg-zinc-50"
        >
          View Site
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-secondary/40"
          >
            <div className="flex items-start justify-between">
              <span className="text-4xl font-bold text-secondary">{card.count}</span>
              <ArrowRight className="h-5 w-5 text-zinc-300 transition-colors group-hover:text-secondary" />
            </div>
            <p className="mt-2 font-medium text-secondary">{card.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
