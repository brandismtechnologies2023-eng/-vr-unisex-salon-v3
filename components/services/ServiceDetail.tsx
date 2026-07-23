"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  CalendarCheck,
  Check,
  ClipboardList,
  Clock,
  Droplets,
  Gem,
  Hand,
  HeartPulse,
  Leaf,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  Wind,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";
import SectionHeading from "@/components/shared/SectionHeading";
import TreatmentCard from "@/components/shared/TreatmentCard";
import FaqAccordion from "@/components/shared/FaqAccordion";
import ContactCta from "@/components/home/ContactCta";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import type { Service } from "@/types";

const benefitIcons: Record<string, LucideIcon> = {
  ClipboardList,
  Scissors,
  BookOpen,
  Droplets,
  Wind,
  HeartPulse,
  Leaf,
  Gem,
  ShieldCheck,
  Clock,
  Hand,
};

const processColsClass: Record<number, string> = {
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-3",
};

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const categories = service.treatments
    ? Array.from(new Set(service.treatments.map((t) => t.category)))
    : [];
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? "");

  const visibleTreatments =
    service.treatments?.filter((t) => t.category === activeCategory) ?? [];

  // No global fallback: each page shows only its own questions.
  const faqItems = service.faqs ?? [];
  const processGridClass = processColsClass[service.process?.length ?? 0] ?? "lg:grid-cols-3";

  return (
    <>
      <section className="bg-primary/15">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            {service.heroBadge && (
              <Badge className="mb-4">
                <Sparkles className="h-3.5 w-3.5 text-third" />
                {service.heroBadge}
              </Badge>
            )}
            {service.tagline && (
              <span className="block text-sm font-semibold uppercase tracking-wider text-third">
                {service.tagline}
              </span>
            )}
            <h1 className="mt-2 text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            {service.heroSubtitle && (
              <p className="mt-2 italic text-zinc-500">{service.heroSubtitle}</p>
            )}
            <p className="mt-4 max-w-lg text-zinc-600">
              {service.longDescription ?? service.description}
            </p>

            {service.highlights && service.highlights.length > 0 && (
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-sm text-zinc-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white">
                      <Check className="h-3 w-3 text-secondary" />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg" icon={<CalendarCheck className="h-5 w-5" />}>
                Book Appointment
              </Button>
              <Button
                href={whatsappLink(`Hi, I'd like to know more about ${service.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="bg-[#25D366] text-white hover:bg-[#1ebe5d]"
                icon={<WhatsAppIcon className="h-5 w-5" />}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={service.image ?? `/images/services/${service.slug}.webp`}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <Badge className="absolute -bottom-5 left-6 shadow-md">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {siteConfig.rating} rating from {siteConfig.reviewCount}+ clients
            </Badge>
          </div>
        </div>
      </section>

      {service.journeyIntro && (
        <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
            {service.journeyIntro.title}
          </h2>
          <p className="mt-4 text-zinc-600">{service.journeyIntro.description}</p>
        </section>
      )}

      {service.benefits && service.benefits.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why It Works"
            title={service.benefitsTitle ?? `Benefits of ${service.title}`}
            subtitle={service.benefitsSubtitle}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit) => {
              const Icon = benefitIcons[benefit.icon] ?? Sparkles;
              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/40">
                    <Icon className="h-5 w-5 text-secondary" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 font-semibold text-secondary">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {categories.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            title={service.treatmentsTitle ?? `Choose Your ${service.title} Treatment`}
            subtitle={
              service.treatmentsSubtitle ??
              "Whether you're maintaining your signature style or embracing a fresh new look, we offer personalized haircut experiences designed to suit every hair type and personality."
            }
          />

          {/* A lone category isn't a choice — don't render a one-tab bar. */}
          {categories.length > 1 && (
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-secondary text-white"
                      : "bg-primary/30 text-secondary hover:bg-primary/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          <div
            className={`mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 ${
              service.treatmentColumns === 2 ? "max-w-5xl" : "lg:grid-cols-3"
            }`}
          >
            {visibleTreatments.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </section>
      )}

      {service.process && service.process.length > 0 && (
        <section className="bg-primary/15 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How It Works"
              title={service.processTitle ?? "Your Visit, Step by Step"}
              subtitle={service.processSubtitle}
            />
            <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 ${processGridClass}`}>
              {service.process.map((step) => (
                <div key={step.step} className="relative rounded-2xl bg-white p-6 shadow-sm">
                  <span className="text-4xl font-bold text-primary">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-semibold text-secondary">{step.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.comparison && (
        <section className="bg-primary/15 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Find Your Match"
              title={service.comparison.title}
              subtitle={service.comparison.description}
            />
            <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold">
                      {service.comparison.goalLabel ?? "Your Goal"}
                    </th>
                    <th className="px-6 py-4 font-semibold">
                      {service.comparison.recommendedLabel ?? "Recommended"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {service.comparison.rows.map((row) => (
                    <tr key={row.goal}>
                      <td className="px-6 py-4 text-zinc-700">{row.goal}</td>
                      <td className="px-6 py-4 font-medium text-secondary">
                        {row.recommended}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {service.highlightGroup && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Difference"
            title={service.highlightGroup.title}
            subtitle={service.highlightGroup.description}
          />
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
            {service.highlightGroup.items.map((item, i) => (
              <div key={item.title} className="flex gap-4 border-t border-third/20 pt-6">
                <span className="text-2xl font-bold leading-none text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-secondary">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {service.expert && (
        <section className="bg-primary/15 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Your Specialist"
              title={service.expert.title ?? "Meet Your Expert"}
            />
            <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl border border-primary/40 bg-white p-6 lg:flex-row lg:items-start lg:gap-10 lg:p-8">
              <div className="relative mx-auto aspect-square w-full max-w-64 shrink-0 overflow-hidden rounded-2xl bg-primary/40 lg:mx-0">
                <Image
                  src={service.expert.image}
                  alt={service.expert.name}
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-secondary">
                  {service.expert.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-third">
                  {service.expert.role}
                </p>
                <span className="mt-4 block h-px w-12 bg-third/40" />
                {service.expert.bio.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-sm leading-relaxed text-zinc-600">
                    {paragraph}
                  </p>
                ))}

                <p className="mt-6 text-sm font-semibold text-secondary">
                  {service.expert.expertiseLabel ?? "Areas of Expertise"}
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {service.expert.expertise.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-third" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  href={whatsappLink(
                    `Hi ${siteConfig.shortName}! I'd like to book a ${service.title} consultation.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  className="mt-7 bg-[#25D366] text-white hover:bg-[#1ebe5d]"
                  icon={<WhatsAppIcon className="h-4 w-4" />}
                >
                  Book Your Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {service.careTips && (
        <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Aftercare"
            title={service.careTips.title}
            subtitle={service.careTips.description}
          />
          <ul className="space-y-3">
            {service.careTips.tips.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-white p-4 text-sm text-zinc-700"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-third" />
                {tip}
              </li>
            ))}
          </ul>
          {service.careTips.note && (
            <p className="mt-6 text-center text-sm text-zinc-500">
              {service.careTips.note}
            </p>
          )}
        </section>
      )}

      {faqItems.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title={service.faqTitle ?? `${service.title} — Common Questions`}
          />
          <FaqAccordion items={faqItems} />
        </section>
      )}

      <ContactCta
        title={service.ctaTitle ?? `Ready to Book Your ${service.title}?`}
        description={
          service.ctaDescription ??
          "Reach out on WhatsApp, give us a call, or book online — whichever is easiest for you."
        }
      />
    </>
  );
}
