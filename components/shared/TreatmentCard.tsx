import { Check, Sparkles } from "lucide-react";
import Button from "@/components/shared/Button";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import type { ServiceTreatment } from "@/types";

interface TreatmentCardProps {
  treatment: ServiceTreatment;
}

export default function TreatmentCard({ treatment }: TreatmentCardProps) {
  const hasSummary = !!(treatment.bestFor || treatment.result);

  return (
    <div className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold text-secondary">{treatment.name}</h3>

      {treatment.tagline && (
        <p className="mt-1 text-sm italic text-third">{treatment.tagline}</p>
      )}

      {/* Accent rule doubles as the divider when a tagline is present. */}
      <span className="mt-4 block h-px w-10 bg-third/40" />

      <p className="mt-4 text-sm leading-relaxed text-zinc-600">
        {treatment.description}
      </p>

      <p className="mt-5 text-sm font-semibold text-secondary">
        {treatment.featuresLabel ?? "Features"}
      </p>
      <ul className="mt-3 space-y-2">
        {treatment.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-zinc-700">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-third" />
            {feature}
          </li>
        ))}
      </ul>

      {hasSummary && (
        <div className="mt-5 space-y-1.5 rounded-xl bg-primary/20 p-4 text-sm">
          {treatment.bestFor && (
            <p className="text-zinc-700">
              <span className="font-semibold text-secondary">Best for: </span>
              {treatment.bestFor}
            </p>
          )}
          {treatment.result && (
            <p className="flex gap-1.5 text-zinc-700">
              <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-third" />
              <span>
                <span className="font-semibold text-secondary">Result: </span>
                {treatment.result}
              </span>
            </p>
          )}
        </div>
      )}

      {/* mt-auto pins the CTA to the bottom so cards of differing text
          length still line their buttons up. */}
      <div className="mt-auto pt-6">
        <Button
          href={whatsappLink(
            `Hi ${siteConfig.shortName}! I saw the ${treatment.name} service on your website and would like to book it. Could you please share your available slots?`
          )}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          size="sm"
          className="w-full"
        >
          Book This Treatment
        </Button>
      </div>
    </div>
  );
}
