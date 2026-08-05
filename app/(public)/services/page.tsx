import type { Metadata } from "next";
import Services from "@/components/home/Services";
import ServicesHero from "@/components/services/ServicesHero";
import { getServices } from "@/lib/content/services";
import { getSetting } from "@/lib/content/settings";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 60;

// Dynamic so edits made in the admin panel's Pages editor take effect.
export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getSetting("servicesPage");
  return {
    title: `${meta.titlePrefix} | ${siteConfig.name}`,
    description: meta.description,
  };
}

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
