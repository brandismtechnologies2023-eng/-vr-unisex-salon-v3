import type { Metadata } from "next";
import Services from "@/components/home/Services";
import ServicesHero from "@/components/services/ServicesHero";
import { siteContent } from "@/lib/data";
import { getServices } from "@/lib/content/services";
import { siteConfig } from "@/lib/site-config";

const { meta } = siteContent.servicesPage;

export const revalidate = 60;

export const metadata: Metadata = {
  title: `${meta.titlePrefix} | ${siteConfig.name}`,
  description: meta.description,
};

export default async function ServicesPage() {
  // ServicesHero renders the page's h1, so the listing's own heading is
  // hidden to avoid repeating it.
  const services = await getServices();
  return (
    <>
      <ServicesHero />
      <Services hideHeading items={services} />
    </>
  );
}
