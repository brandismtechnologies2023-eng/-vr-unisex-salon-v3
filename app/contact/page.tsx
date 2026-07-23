import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactSection from "@/components/home/ContactSection";
import ContactCta from "@/components/home/ContactCta";
import { siteConfig, telLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description:
    "Book an appointment at VR Unisex Salon — inside Crown Park Hotel, Burjuman, Dubai. Call, WhatsApp, or send us a booking request.",
};

const details = [
  { icon: MapPin, label: "Visit Us", value: siteConfig.address },
  { icon: Phone, label: "Call Us", value: siteConfig.phone, href: telLink() },
  {
    icon: Mail,
    label: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary/15 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Contact Us"
            title="Get in Touch with VR Unisex Salon"
            subtitle="Book your appointment, ask a question, or connect with our team. We're here to help you enjoy a premium salon experience in Dubai."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/40">
                  <detail.icon className="h-5 w-5 text-secondary" strokeWidth={1.5} />
                </span>
                <h2 className="mt-4 font-semibold text-secondary">{detail.label}</h2>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="mt-1 block text-sm text-zinc-600 hover:text-secondary"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-zinc-600">{detail.value}</p>
                )}
              </div>
            ))}

            <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/40">
                <Clock className="h-5 w-5 text-secondary" strokeWidth={1.5} />
              </span>
              <h2 className="mt-4 font-semibold text-secondary">Opening Hours</h2>
              <div className="mt-1 space-y-0.5 text-sm text-zinc-600">
                {siteConfig.hours.map((h) => (
                  <p key={h.day}>
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <ContactCta />
    </>
  );
}
