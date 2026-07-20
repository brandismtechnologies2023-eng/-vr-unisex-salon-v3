import Button from "@/components/shared/Button";
import InstagramSlider from "@/components/home/InstagramSlider";
import { InstagramIcon } from "@/components/shared/SocialIcons";
import { instagramPosts as placeholderPosts } from "@/lib/data";
import { getInstagramPosts } from "@/lib/instagram";
import { siteConfig } from "@/lib/site-config";

// Dark navy body that fades from white at the top (matching the Gallery
// section above) into blush at the bottom (matching Testimonials' bg-primary/20
// below), so the section blends seamlessly with both neighbours.
const sectionGradient =
  "linear-gradient(to bottom, #ffffff 0%, #272939 8%, #272939 92%, #fbf7f5 100%)";

export default async function InstagramFeed() {
  const livePosts = await getInstagramPosts(30);
  const posts = livePosts ?? placeholderPosts;

  return (
    <section className="relative overflow-hidden" style={{ background: sectionGradient }}>
      {/* Slow-drifting decorative shapes, aquarium-style. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <span className="animate-drift-1 absolute left-[8%] top-24 h-40 w-40 rounded-full border border-primary/20" />
        <span className="animate-drift-2 absolute right-[10%] top-32 h-28 w-28 rounded-3xl border border-white/10 bg-white/5" />
        <span className="animate-drift-3 absolute bottom-28 left-[18%] h-24 w-24 rounded-full bg-third/10 blur-2xl" />
        <span className="animate-drift-2 absolute right-[22%] bottom-40 h-px w-48 rotate-12 bg-primary/20" />
        <span className="animate-drift-1 absolute right-[6%] bottom-24 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Follow Along
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Latest From Our Instagram
          </h2>
        </div>

        <InstagramSlider posts={posts} isLive={!!livePosts} />

        <div className="mt-10 flex justify-center">
          <Button
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 bg-white/5 text-white hover:bg-white/15"
            icon={<InstagramIcon />}
          >
            Follow @{siteConfig.instagramHandle}
          </Button>
        </div>
      </div>
    </section>
  );
}
