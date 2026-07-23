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
    <section className="bg-primary/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-secondary sm:text-4xl">{title}</h2>
        <p className="max-w-8xl text-secondary">{description}</p>
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
            className="bg-secondary/60 text-white hover:bg-secondary hover:text-primary"
            icon={<Phone className="h-5 w-5" />}
          >
            Call {siteConfig.phone}
          </Button>
          <Button
            href="/contact"
            size="lg"
            className="border border-secondary bg-primary/50 text-secondary hover:bg-white/10"
            icon={<CalendarCheck className="h-5 w-5" />}
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
