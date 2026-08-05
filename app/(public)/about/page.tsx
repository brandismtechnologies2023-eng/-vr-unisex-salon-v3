import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import AboutServices from "@/components/about/AboutServices";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import ContactCta from "@/components/home/ContactCta";
import { getSetting } from "@/lib/content/settings";
import { siteConfig } from "@/lib/site-config";

// Dynamic so edits made in the admin panel's Pages editor take effect.
export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getSetting("about");
  return {
    title: `${meta.titlePrefix} | ${siteConfig.name}`,
    description: meta.description,
  };
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhatMakesUsDifferent />
      <AboutServices />
      <MeetTheTeam />
      <ContactCta />
    </>
  );
}
