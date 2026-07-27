import { Check } from "lucide-react";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getSetting } from "@/lib/content/settings";
import { siteConfig } from "@/lib/site-config";

export default async function ContactSection() {
  const content = await getSetting("contactSection");
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* 5-column grid so the map column takes 40% and the form 60%. */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
              {content.title}
            </h2>
            <p className="mt-4 text-zinc-600">{content.paragraph}</p>
          </div>

          <ul className="mb-8 space-y-3">
            {content.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 rounded-xl border border-primary/50 bg-primary/15 px-4 py-3 transition-colors hover:bg-primary/25"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Check className="h-4 w-4 text-primary" />
                </span>
                <span className="font-semibold text-secondary">{point}</span>
              </li>
            ))}
          </ul>
          <div className="overflow-hidden rounded-2xl border border-zinc-100">
            <iframe
              title={`${siteConfig.name} location`}
              src={siteConfig.mapEmbedUrl}
              className="h-45 w-full border-0"
              loading="lazy"
            />
          </div>

        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm sm:p-8">
            {/* The intro in the left column already explains the form, so
                this header stays short rather than repeating it. */}
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-third">
                {content.formEyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-secondary sm:text-3xl">
                {content.formTitle}
              </h3>

              {/* Small rule-and-diamond flourish under the title. */}
              <span className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-third/40" />
                <span className="h-1.5 w-1.5 rotate-45 bg-third/60" />
                <span className="h-px w-8 bg-third/40" />
              </span>
            </div>

            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
