import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import AboutServices from "@/components/about/AboutServices";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import ContactCta from "@/components/home/ContactCta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description:
    "Founded by brothers Vishal and Raju, VR Unisex Salon brings over 8 years of hair, skin and beauty expertise to Burjuman, Dubai — inside the 5-star Crown Park Hotel.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhatMakesUsDifferent />
      <AboutServices />
      <MeetTheTeam variant="compact" />
      <ContactCta />
    </>
  );
}
