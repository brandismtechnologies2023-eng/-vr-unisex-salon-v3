"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import {
  BookOpen,
  CalendarCheck,
  Check,
  ClipboardList,
  Clock,
  Droplets,
  ExternalLink,
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
import GalleryCard from "@/components/shared/GalleryCard";
import Modal from "@/components/shared/Modal";
import { InstagramIcon, WhatsAppIcon } from "@/components/shared/SocialIcons";
import SectionHeading from "@/components/shared/SectionHeading";
import TreatmentCard from "@/components/shared/TreatmentCard";
import FaqAccordion from "@/components/shared/FaqAccordion";
import ContactCta from "@/components/home/ContactCta";
import Testimonials from "@/components/home/Testimonials";
import { galleryMedia, siteContent } from "@/lib/data";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import type { Service } from "@/types";

const content = siteContent.serviceDetail;
const { common } = siteContent;

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
  // Rendered server-side by the route and passed through as a slot, since
  // InstagramFeed is an async Server Component and this file is a Client
  // Component (it needs the treatment-tab state below).
  instagramFeed?: ReactNode;
}

export default function ServiceDetail({ service, instagramFeed }: ServiceDetailProps) {
  const categories = service.treatments
    ? Array.from(new Set(service.treatments.map((t) => t.category)))
    : [];
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? "");
  const [activePortfolioId, setActivePortfolioId] = useState<string | null>(null);
  const activePortfolioMedia = galleryMedia.find((m) => m.id === activePortfolioId) ?? null;

  const visibleTreatments =
    service.treatments?.filter((t) => t.category === activeCategory) ?? [];

  // No global fallback: each page shows only its own questions.
  const faqItems = service.faqs ?? [];
  // The SEO title ("Ladies Waxing, Threading & Bleach Services in Dubai")
  // reads badly inline in a WhatsApp message — use the shorter name there.
  const whatsappName = service.shortTitle ?? service.title;
  const processGridClass = processColsClass[service.process?.length ?? 0] ?? "lg:grid-cols-3";

  // Most pages want the process/journey steps right up top, but a few
  // (e.g. Hair Colour) want it later, after the benefits and brand-trust
  // sections — `processPosition` controls which of the two slots below
  // actually renders it.
  const processSection = service.process && service.process.length > 0 && (
    <section className="bg-primary/15 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={content.eyebrows.howItWorks}
          title={service.processTitle ?? content.processTitleFallback}
          subtitle={service.processSubtitle}
        />
        <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 ${processGridClass}`}>
          {service.process?.map((step) => (
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
  );

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
                {service.bookLabel ?? common.bookAppointmentLabel}
              </Button>
              <Button
                href={whatsappLink(content.whatsappKnowMoreMessage(whatsappName))}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="bg-[#25D366] text-white hover:bg-[#1ebe5d]"
                icon={<WhatsAppIcon className="h-5 w-5" />}
              >
                {common.whatsappUsLabel}
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
              {content.ratingBadge(siteConfig.rating, siteConfig.reviewCount)}
            </Badge>
          </div>
        </div>
      </section>

      {service.whyChooseUs && (
        <section className="mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6 lg:px-8">
          <SectionHeading
            title={service.whyChooseUs.title}
            subtitle={service.whyChooseUs.subtitle}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.whyChooseUs.items.map((item) => {
              const Icon = benefitIcons[item.icon] ?? Sparkles;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/40">
                    <Icon className="h-5 w-5 text-secondary" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 font-semibold text-secondary">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {service.journeyIntro && (
        <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
            {service.journeyIntro.title}
          </h2>
          <p className="mt-4 text-zinc-600">{service.journeyIntro.description}</p>
        </section>
      )}

      {service.processPosition !== "late" && processSection}

      {service.benefits && service.benefits.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={content.eyebrows.whyItWorks}
            title={service.benefitsTitle ?? content.benefitsTitleFallback(service.title)}
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
            title={service.treatmentsTitle ?? content.treatmentsTitleFallback(service.title)}
            subtitle={service.treatmentsSubtitle ?? content.treatmentsSubtitleFallback}
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

      {service.secondaryTreatments && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            title={service.secondaryTreatments.title}
            subtitle={service.secondaryTreatments.subtitle}
          />
          <div
            className={`mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 ${
              service.secondaryTreatments.columns === 2 ? "max-w-5xl" : "lg:grid-cols-3"
            }`}
          >
            {service.secondaryTreatments.items.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </section>
      )}

      {service.comparison && (
        <section className="bg-primary/15 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={content.eyebrows.findYourMatch}
              title={service.comparison.title}
              subtitle={service.comparison.description}
            />
            <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold">
                      {service.comparison.goalLabel ?? content.comparisonGoalLabelFallback}
                    </th>
                    <th className="px-6 py-4 font-semibold">
                      {service.comparison.recommendedLabel ?? content.comparisonRecommendedLabelFallback}
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

      {service.brandsTrust && (
        <section className="bg-primary/15 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={content.eyebrows.productsWeTrust}
              title={service.brandsTrust.title}
              subtitle={service.brandsTrust.description}
            />
            <div className="flex flex-wrap justify-center gap-5">
              {service.brandsTrust.brands.map((brand) => (
                <div
                  key={brand.name}
                  className="w-full max-w-72 shrink-0 rounded-2xl border border-third/20 bg-white p-6 text-center sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]"
                >
                  {brand.logo ? (
                    <div className="relative mx-auto h-12 w-full max-w-40">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        sizes="160px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <h3 className="font-serif text-lg font-semibold tracking-wide text-secondary">
                      {brand.name}
                    </h3>
                  )}
                  <p className="mt-3 text-sm text-zinc-600">{brand.description}</p>
                </div>
              ))}
            </div>
            {service.brandsTrust.note && (
              <p className="mt-8 text-center text-sm text-zinc-500">
                {service.brandsTrust.note}
              </p>
            )}
          </div>
        </section>
      )}

      {service.processPosition === "late" && processSection}

      {service.highlightGroup && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={content.eyebrows.theDifference}
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

      {service.secondaryHighlightGroup && (
        <section className="bg-primary/15 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={content.eyebrows.secondHighlightGroup}
              title={service.secondaryHighlightGroup.title}
              subtitle={service.secondaryHighlightGroup.description}
            />
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
              {service.secondaryHighlightGroup.items.map((item, i) => (
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
          </div>
        </section>
      )}

      {service.idealFor && (
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={content.eyebrows.isThisForYou}
            title={service.idealFor.title}
            subtitle={service.idealFor.description}
          />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.idealFor.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-white p-4 text-sm text-zinc-700"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/40">
                  <Check className="h-3 w-3 text-secondary" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {service.expert && (
        <section className="bg-primary/15 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={content.eyebrows.yourSpecialist}
              title={service.expert.title ?? content.expertTitleFallback}
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
                  {service.expert.expertiseLabel ?? content.expertiseLabelFallback}
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
                  href={whatsappLink(content.consultationMessage(siteConfig.shortName, whatsappName))}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  className="mt-7 bg-[#25D366] text-white hover:bg-[#1ebe5d]"
                  icon={<WhatsAppIcon className="h-4 w-4" />}
                >
                  {content.bookConsultationLabel}
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {service.careTips && (
        <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={content.eyebrows.aftercare}
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

      {service.closingNote && (
        <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
            {service.closingNote.title}
          </h2>
          <p className="mt-4 text-zinc-600">{service.closingNote.description}</p>
        </section>
      )}

      {service.portfolio && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={content.eyebrows.realResults}
            title={service.portfolio.title}
            subtitle={service.portfolio.description}
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {galleryMedia.slice(0, 6).map((media) => (
              <GalleryCard
                key={media.id}
                media={media}
                onClick={() => setActivePortfolioId(media.id)}
              />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-third/40 bg-white px-5 py-2.5 text-sm font-medium text-secondary hover:bg-primary/40"
            >
              <InstagramIcon className="h-4 w-4" />
              {content.followOnInstagramLabel(siteConfig.shortName)}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>
      )}

      <Modal isOpen={!!activePortfolioMedia} onClose={() => setActivePortfolioId(null)}>
        {activePortfolioMedia && (
          <div className="max-h-[85vh] w-[90vw] max-w-2xl overflow-hidden rounded-xl bg-black">
            {activePortfolioMedia.type === "video" ? (
              <video
                src={activePortfolioMedia.src}
                className="max-h-[85vh] w-full"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <Image
                src={activePortfolioMedia.src}
                alt={activePortfolioMedia.alt}
                width={activePortfolioMedia.width ?? 1200}
                height={activePortfolioMedia.height ?? 1200}
                className="max-h-[85vh] w-full object-contain"
              />
            )}
          </div>
        )}
      </Modal>

      {instagramFeed}

      <Testimonials reviews={service.reviews ?? []} />

      {faqItems.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={content.eyebrows.faq}
            title={service.faqTitle ?? content.faqTitleFallback(service.title)}
          />
          <FaqAccordion items={faqItems} />
        </section>
      )}

      <ContactCta
        title={service.ctaTitle ?? content.ctaTitleFallback(service.title)}
        description={service.ctaDescription ?? content.ctaDescriptionFallback}
        bookLabel={service.bookLabel}
      />
    </>
  );
}
