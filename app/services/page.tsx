import type { Metadata } from "next";
import Services from "@/components/home/Services";
import ServicesHero from "@/components/services/ServicesHero";
import { siteContent } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

const { meta } = siteContent.servicesPage;

export const metadata: Metadata = {
  title: `${meta.titlePrefix} | ${siteConfig.name}`,
  description: meta.description,
};

export default function ServicesPage() {
  // ServicesHero renders the page's h1, so the listing's own heading is
  // hidden to avoid repeating it.
  return (
    <>
      <ServicesHero />
      <Services hideHeading />
    </>
  );
}
