import { Check } from "lucide-react";
import Button from "@/components/shared/Button";
import { whatsappLink } from "@/lib/site-config";
import type { ServiceTreatment } from "@/types";

interface TreatmentCardProps {
  treatment: ServiceTreatment;
}

export default function TreatmentCard({ treatment }: TreatmentCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="font-semibold text-secondary">{treatment.name}</h3>
      <p className="mt-1 text-sm text-zinc-600">{treatment.description}</p>
      <ul className="mt-4 space-y-2">
        {treatment.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-zinc-700">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-third" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        href={whatsappLink(`Hi, I'd like to book the ${treatment.name}.`)}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        size="sm"
        className="mt-6"
      >
        Book This Treatment
      </Button>
    </div>
  );
}
