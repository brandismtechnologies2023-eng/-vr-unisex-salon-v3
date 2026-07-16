import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { InstagramIcon, WhatsAppIcon } from "@/components/shared/SocialIcons";
import { team } from "@/lib/data";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export default function MeetTheTeam() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Our Team"
        title="Meet the Skilled Hands Behind VR Salon"
        subtitle="The founders and stylists who make every visit feel effortless."
      />

      <div className="space-y-8">
        {team.map((member, i) => {
          // Flip the row so the photo alternates between the box's left and
          // right edge down the column.
          const isReversed = i % 2 === 1;

          return (
            <div
              key={member.id}
              className={`group flex flex-col gap-8 rounded-3xl border border-primary/40 bg-primary/15 p-6 lg:flex-row lg:items-center lg:gap-10 lg:p-8 ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Fixed-width and shrink-0 so the photo sits flush against the
                  box edge instead of floating mid-row. Square panel matches
                  the 1:1 cutout, so the tint reads as the backdrop. */}
              <div className="relative mx-auto aspect-square w-full max-w-72 shrink-0 overflow-hidden rounded-2xl bg-primary/50 transition-colors duration-300 group-hover:bg-secondary lg:mx-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 288px, 288px"
                  className="object-cover"
                />
              </div>

              {/* Fills the remaining width so no dead space is left beside
                  the copy. */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-secondary sm:text-3xl">{member.name}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-third">
                  {member.role}
                </p>
                <span className="mt-4 block h-px w-12 bg-third/40" />
                <p className="mt-4 leading-relaxed text-zinc-600">{member.bio}</p>

                <div className="mt-6 flex gap-3">
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Instagram`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/50 bg-white text-secondary transition-colors hover:bg-primary"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={whatsappLink(`Hi, I'd like to book an appointment with ${member.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${member.name} on WhatsApp`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/50 bg-white text-secondary transition-colors hover:bg-primary"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
