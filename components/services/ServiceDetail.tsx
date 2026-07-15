"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CalendarCheck,
  Check,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";
import SectionHeading from "@/components/shared/SectionHeading";
import TreatmentCard from "@/components/shared/TreatmentCard";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { faqs as generalFaqs } from "@/lib/data";
import { siteConfig, telLink, whatsappLink } from "@/lib/site-config";
import type { Service } from "@/types";

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

  const faqItems = service.faqs ?? generalFaqs;

  return (
    <>
      <section className="bg-primary/15">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            {service.tagline && (
              <span className="text-sm font-semibold uppercase tracking-wider text-third">
                {service.tagline}
              </span>
            )}
            <h1 className="mt-2 text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
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
                variant="outline"
                size="lg"
                icon={<MessageCircle className="h-5 w-5" />}
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

      {categories.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Treatment Options"
            title={`Choose Your ${service.title} Treatment`}
            subtitle="Pick the option that fits your time and how much pampering you're after."
          />

          <div className="mb-10 flex justify-center gap-2">
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

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleTreatments.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </section>
      )}

      {service.process && service.process.length > 0 && (
        <section className="bg-primary/15 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="How It Works" title="Your Visit, Step by Step" />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title={`${service.title} — Common Questions`} />
        <FaqAccordion items={faqItems} />
      </section>

      <section className="bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Book Your {service.title}?
          </h2>
          <p className="max-w-xl text-primary/80">
            Reach out on WhatsApp, give us a call, or book online — whichever
            is easiest for you.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              href={whatsappLink(`Hi, I'd like to book ${service.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={<MessageCircle className="h-5 w-5" />}
            >
              WhatsApp
            </Button>
            <Button
              href={telLink()}
              size="lg"
              className="bg-white text-secondary hover:bg-primary"
              icon={<Phone className="h-5 w-5" />}
            >
              Call {siteConfig.phone}
            </Button>
            <Button
              href="/contact"
              size="lg"
              className="border border-white bg-transparent text-white hover:bg-white/10"
              icon={<CalendarCheck className="h-5 w-5" />}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
