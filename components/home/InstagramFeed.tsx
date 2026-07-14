import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import InstagramSlider from "@/components/home/InstagramSlider";
import { InstagramIcon } from "@/components/shared/SocialIcons";
import { instagramPosts as placeholderPosts } from "@/lib/data";
import { getInstagramPosts } from "@/lib/instagram";
import { siteConfig } from "@/lib/site-config";

export default async function InstagramFeed() {
  const livePosts = await getInstagramPosts(30);
  const posts = livePosts ?? placeholderPosts;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Follow Along"
        title="Latest From Our Instagram"
      />

      <InstagramSlider posts={posts} isLive={!!livePosts} />

      <div className="mt-10 flex justify-center">
        <Button
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          icon={<InstagramIcon />}
        >
          Follow @{siteConfig.instagramHandle}
        </Button>
      </div>
    </section>
  );
}
