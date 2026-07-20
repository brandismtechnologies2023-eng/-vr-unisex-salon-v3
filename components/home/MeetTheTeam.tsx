import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { InstagramIcon, WhatsAppIcon } from "@/components/shared/SocialIcons";
import { team } from "@/lib/data";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import type { TeamMember } from "@/types";

interface MeetTheTeamProps {
  // "detailed" gives each member a full-width row with their bio;
  // "compact" is a three-up grid of just photo, name and role — for pages
  // that already carry a lot of copy.
  variant?: "detailed" | "compact";
}

function SocialLinks({ member, className = "" }: { member: TeamMember; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={siteConfig.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} on Instagram`}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-white text-secondary transition-colors hover:bg-primary"
      >
        <InstagramIcon className="h-4 w-4" />
      </a>
      <a
        href={whatsappLink(
          `Hi ${siteConfig.shortName}! I'd like to book an appointment with ${member.name}.`
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1ebe5d]"
      >
        <WhatsAppIcon className="h-4 w-4 shrink-0" />
        Chat with {member.name}
      </a>
    </div>
  );
}

// Square panel matches the 1:1 cutout, so the tint reads as the backdrop
// behind each person and can swap colour on hover.
function Portrait({ member, className = "" }: { member: TeamMember; className?: string }) {
  return (
    <div
      className={`relative aspect-square overflow-hidden rounded-2xl bg-primary/50 transition-colors duration-300 group-hover:bg-secondary ${className}`}
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(min-width: 1024px) 288px, 288px"
        className="object-cover"
      />
    </div>
  );
}

export default function MeetTheTeam({ variant = "detailed" }: MeetTheTeamProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Our Team"
        title="Meet the Skilled Hands Behind VR Salon"
        subtitle="The founders and stylists who make every visit feel effortless."
      />

      {variant === "compact" ? (
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3">
          {team.map((member) => (
            <div key={member.id} className="group text-center">
              <Portrait member={member} className="mx-auto w-full max-w-64" />
              <h3 className="mt-5 text-xl font-semibold text-secondary">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-third">{member.role}</p>
              <SocialLinks member={member} className="mt-4 justify-center" />
            </div>
          ))}
        </div>
      ) : (
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
                    box edge instead of floating mid-row. */}
                <Portrait
                  member={member}
                  className="mx-auto w-full max-w-72 shrink-0 lg:mx-0"
                />

                {/* Fills the remaining width so no dead space is left beside
                    the copy. */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-secondary sm:text-3xl">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-third">
                    {member.role}
                  </p>
                  <span className="mt-4 block h-px w-12 bg-third/40" />
                  <p className="mt-4 leading-relaxed text-zinc-600">{member.bio}</p>
                  <SocialLinks member={member} className="mt-6" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
