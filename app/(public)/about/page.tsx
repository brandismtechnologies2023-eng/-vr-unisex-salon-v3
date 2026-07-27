import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import AboutServices from "@/components/about/AboutServices";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import ContactCta from "@/components/home/ContactCta";
import { siteContent } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

const { meta } = siteContent.about;

export const metadata: Metadata = {
  title: `${meta.titlePrefix} | ${siteConfig.name}`,
  description: meta.description,
};

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
