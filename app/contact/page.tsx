import type { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactSection from "@/components/home/ContactSection";
import ContactCta from "@/components/home/ContactCta";
import { siteContent } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

const content = siteContent.contactPage;

export const metadata: Metadata = {
  title: `${content.meta.titlePrefix} | ${siteConfig.name}`,
  description: content.meta.description,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary/15 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow={content.eyebrow}
            title={content.title}
            subtitle={content.subtitle}
          />
        </div>
      </section>

      <ContactSection />
      <ContactCta />
    </>
  );
}
