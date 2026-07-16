import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { InstagramIcon, WhatsAppIcon } from "@/components/shared/SocialIcons";
import { team } from "@/lib/data";
import { siteConfig, whatsappLink } from "@/lib/site-config";

// Arch/dome silhouette for the portraits — the team photos are transparent
// cutouts, so the tinted arch reads as the backdrop behind each person and
// can swap colour on hover.
const ARCH_RADIUS = "50% 50% 46% 46% / 60% 60% 40% 40%";

export default function MeetTheTeam() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Our Team"
        title="Meet the Skilled Hands Behind VR Salon"
        subtitle="The founders and stylists who make every visit feel effortless."
      />

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div key={member.id} className="group text-center">
            <div
              className="relative mx-auto aspect-3/4 w-full max-w-64 overflow-hidden bg-primary/40 transition-colors duration-300 group-hover:bg-secondary"
              style={{ borderRadius: ARCH_RADIUS }}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 640px) 256px, 100vw"
                className="object-cover object-bottom"
              />

              <div className="absolute inset-x-0 bottom-6 flex translate-y-3 justify-center gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on Instagram`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-secondary shadow-md transition-colors hover:bg-primary"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={whatsappLink(`Hi, I'd like to book an appointment with ${member.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book ${member.name} on WhatsApp`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-secondary shadow-md transition-colors hover:bg-primary"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <h3 className="mt-5 text-xl font-semibold text-secondary">{member.name}</h3>
            <p className="mt-1 text-sm text-third">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
