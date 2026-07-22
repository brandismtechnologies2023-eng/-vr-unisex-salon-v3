import type { ReactNode } from "react";
import { CalendarCheck, Phone } from "lucide-react";
import Button from "@/components/shared/Button";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";
import { siteConfig, telLink, whatsappLink } from "@/lib/site-config";

const DEFAULT_TITLE = "Ready to Experience Beauty, Redefined?";
const DEFAULT_DESCRIPTION = (
  <>
    Whether it is your regular self-care ritual or a special occasion, we are
    here to make every visit feel effortless, relaxing, and uniquely yours.
    <br />
    Visit us, unwind, and discover why so many clients across Dubai trust VR
    Unisex Salon for exceptional hair and beauty experiences.
  </>
);

interface ContactCtaProps {
  // Only the wording varies per page — the layout, colours and buttons stay
  // here so restyling this one file updates the CTA everywhere.
  title?: string;
  description?: ReactNode;
}

export default function ContactCta({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
}: ContactCtaProps) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-primary/80">{description}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="bg-[#25D366] text-white hover:bg-[#1ebe5d]"
            icon={<WhatsAppIcon className="h-5 w-5" />}
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
  );
}
