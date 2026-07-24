import type { Metadata } from "next";
import Services from "@/components/home/Services";
import { siteContent } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

const { meta } = siteContent.servicesPage;

export const metadata: Metadata = {
  title: `${meta.titlePrefix} | ${siteConfig.name}`,
  description: meta.description,
};

export default function ServicesPage() {
  // No limit: the listing shows every service. `as="h1"` because this
  // heading leads the page rather than sitting inside one.
  return <Services as="h1" />;
}
