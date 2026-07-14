import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { InstagramIcon } from "@/components/shared/SocialIcons";
import { instagramPosts } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export default function InstagramFeed() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Follow Along"
        title="Latest From Our Instagram"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <ImagePlaceholder className="aspect-square rounded-xl" />
          </a>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          icon={<InstagramIcon />}
        >
          Follow @{siteConfig.shortName.replace(/\s+/g, "").toLowerCase()}
        </Button>
      </div>
    </section>
  );
}
