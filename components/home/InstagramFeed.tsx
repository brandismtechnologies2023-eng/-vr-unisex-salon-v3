import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import { InstagramIcon } from "@/components/shared/SocialIcons";
import { instagramPosts as placeholderPosts } from "@/lib/data";
import { getInstagramPosts } from "@/lib/instagram";
import { siteConfig } from "@/lib/site-config";

export default async function InstagramFeed() {
  const livePosts = await getInstagramPosts(6);
  const posts = livePosts ?? placeholderPosts;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Follow Along"
        title="Latest From Our Instagram"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {posts.map((post) => (
          <a
            key={post.id}
            href={livePosts ? post.permalink : siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-xl"
          >
            {post.image ? (
              <Image
                src={post.image}
                alt={post.caption || "Instagram post"}
                width={300}
                height={300}
                className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
              />
            ) : (
              <ImagePlaceholder className="aspect-square rounded-xl" />
            )}
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
          Follow @{siteConfig.instagramHandle}
        </Button>
      </div>
    </section>
  );
}
