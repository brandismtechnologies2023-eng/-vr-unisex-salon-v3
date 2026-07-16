import type { Metadata } from "next";
import Services from "@/components/home/Services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Services | ${siteConfig.name}`,
  description:
    "Explore the full range of services at VR Unisex Salon — haircuts, colour, treatments, nails, lashes, waxing, makeup and more, in Burjuman, Dubai.",
};

export default function ServicesPage() {
  // No limit: the listing shows every service. `as="h1"` because this
  // heading leads the page rather than sitting inside one.
  return <Services as="h1" />;
}
