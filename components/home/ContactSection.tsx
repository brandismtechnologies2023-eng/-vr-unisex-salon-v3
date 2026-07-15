import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site-config";

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Visit or Reach Out to Us"
        subtitle="We'd love to hear from you. Stop by, call, or send us a message."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="overflow-hidden rounded-2xl border border-zinc-100">
            <iframe
              title="Salon location"
              src={siteConfig.mapEmbedUrl}
              className="h-72 w-full border-0"
              loading="lazy"
            />
          </div>

          <ul className="space-y-4 text-sm text-zinc-700">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              {siteConfig.address}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-secondary" />
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-secondary" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              <div className="space-y-0.5">
                {siteConfig.hours.map((h) => (
                  <p key={h.day}>
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
