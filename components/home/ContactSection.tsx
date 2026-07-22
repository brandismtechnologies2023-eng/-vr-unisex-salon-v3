import Image from "next/image";
import { Check } from "lucide-react";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { siteConfig } from "@/lib/site-config";

const points = [
  "Personalised Consultation",
  "International Expertise",
  "Premium Products",
  "Luxury Experience",
  "Prime Location",
];

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-2xl border border-zinc-100">
            <iframe
              title={`${siteConfig.name} location`}
              src={siteConfig.mapEmbedUrl}
              className="h-96 w-full border-0"
              loading="lazy"
            />
          </div>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-secondary">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Check className="h-3.5 w-3.5 text-secondary" />
                </span>
                <span className="font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8 text-center">
            <Image
              src="/images/logo.webp"
              alt={siteConfig.name}
              width={72}
              height={72}
              className="mx-auto h-16 w-16 rounded-lg object-cover"
            />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-third">
              Schedule Appointment
            </p>
            <h2 className="mt-2 text-2xl font-bold text-secondary sm:text-3xl">
              Book Your Appointment
            </h2>
            <p className="mt-3 text-sm text-zinc-600">
              Complete the form below and our team will get in touch to confirm
              your appointment.
            </p>
          </div>

          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
