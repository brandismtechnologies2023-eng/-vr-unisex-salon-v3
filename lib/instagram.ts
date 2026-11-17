import type { InstagramPost, InstagramProfile } from "@/types";

const GRAPH_API_VERSION = "v21.0";

interface GraphMediaItem {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  like_count?: number;
  comments_count?: number;
  timestamp?: string;
}

interface BeholdSize {
  mediaUrl: string;
  width: number;
  height: number;
}

type BeholdSizes = Partial<Record<"small" | "medium" | "large" | "full", BeholdSize>>;

interface BeholdChild {
  mediaType: "IMAGE" | "VIDEO";
  mediaUrl: string;
  sizes?: BeholdSizes;
}

interface BeholdPost {
  id: string;
  timestamp?: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  thumbnailUrl?: string;
  sizes?: BeholdSizes;
  caption?: string;
  likeCount?: number;
  commentsCount?: number;
  children?: BeholdChild[];
}

interface BeholdFeed {
  followersCount?: number;
  posts?: BeholdPost[];
}

// Behold's free plan refreshes the feed once a day, but the reel MP4 URLs in
// it expire within about a day, so re-read every 2 hours to pick up fresh
// links soon after each refresh. That's ~360 requests a month, well under the
// free plan's 1,200.
const BEHOLD_REVALIDATE = 2 * 60 * 60;

// Behold (behold.so) JSON feed: Behold's own Meta app talks to Instagram and
// we only read the public feed URL, so no token of ours is involved. Both
// getInstagramPosts and getInstagramProfile call this; Next dedupes the
// identical fetch, so it costs one request per revalidation.
async function getBeholdFeed(): Promise<BeholdFeed | null> {
  const feedUrl = process.env.BEHOLD_FEED_URL;
  if (!feedUrl) return null;

  try {
    const res = await fetch(feedUrl, { next: { revalidate: BEHOLD_REVALIDATE } });
    if (!res.ok) {
      console.warn("Behold feed request failed:", res.status, await res.text());
      return null;
    }
    return (await res.json()) as BeholdFeed;
  } catch (err) {
    console.warn("Failed to fetch Behold feed:", err);
    return null;
  }
}

// Returns null (rather than throwing) whenever no feed source is configured
// or the request fails, so callers can leave the reels strip out instead of
// breaking the page. Behold is tried first, then the Graph API.
export async function getInstagramPosts(limit = 6): Promise<InstagramPost[] | null> {
  const behold = await getBeholdFeed();
  if (behold?.posts?.length) {
    return behold.posts.slice(0, limit).map((post) => ({
      id: post.id,
      // Behold's sizes are square crops, which lose too much in our 9:16
      // cards, so lead with Instagram's original (reel cover or photo). Those
      // URLs expire after a few days; the square copy is the fallback.
      image: (post.mediaType === "VIDEO" ? post.thumbnailUrl : post.mediaUrl) ?? post.sizes?.large?.mediaUrl,
      fallbackImage: post.sizes?.large?.mediaUrl ?? post.sizes?.medium?.mediaUrl,
      videoUrl: post.mediaType === "VIDEO" ? post.mediaUrl : undefined,
      // A video slide's mediaUrl is the MP4, so its still is Behold's image.
      children: post.children?.map((child) => ({
        image: child.mediaType === "VIDEO" ? child.sizes?.large?.mediaUrl : child.mediaUrl,
        fallbackImage: child.sizes?.large?.mediaUrl,
        videoUrl: child.mediaType === "VIDEO" ? child.mediaUrl : undefined,
      })),
      caption: post.caption ?? "",
      likes: post.likeCount ?? 0,
      comments: post.commentsCount ?? 0,
      timestamp: post.timestamp,
      permalink: post.permalink,
      isVideo: post.mediaType === "VIDEO",
    }));
  }

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const businessAccountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!accessToken || !businessAccountId) return null;

  const fields =
    "id,caption,media_type,media_url,thumbnail_url,permalink,like_count,comments_count,timestamp";
  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${businessAccountId}/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      // warn, not error: falling back to placeholder posts is the designed
      // behaviour here, and console.error would surface it as a crash in the
      // Next.js dev overlay even though the page renders fine.
      console.warn("Instagram Graph API request failed:", res.status, await res.text());
      return null;
    }

    const json = (await res.json()) as { data?: GraphMediaItem[] };

    return (json.data ?? []).map((item) => ({
      id: item.id,
      image: item.media_type === "VIDEO" ? item.thumbnail_url : item.media_url,
      videoUrl: item.media_type === "VIDEO" ? item.media_url : undefined,
      caption: item.caption ?? "",
      likes: item.like_count ?? 0,
      comments: item.comments_count ?? 0,
      timestamp: item.timestamp,
      permalink: item.permalink,
      isVideo: item.media_type === "VIDEO",
    }));
  } catch (err) {
    // Network-level failure (DNS, timeout, blocked host). Same rationale as
    // above: the placeholder fallback keeps the page working.
    console.warn("Failed to fetch Instagram feed:", err);
    return null;
  }
}

// Follower/media counts for the profile header. Returns null when the API
// isn't configured or the request fails, so the header can fall back to the
// stats we always know (Google rating and review count).
export async function getInstagramProfile(): Promise<InstagramProfile | null> {
  const behold = await getBeholdFeed();
  if (typeof behold?.followersCount === "number") {
    return { followersCount: behold.followersCount, mediaCount: behold.posts?.length ?? 0 };
  }

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const businessAccountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!accessToken || !businessAccountId) return null;

  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${businessAccountId}?fields=followers_count,media_count&access_token=${accessToken}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.warn("Instagram profile request failed:", res.status, await res.text());
      return null;
    }
    const json = (await res.json()) as {
      followers_count?: number;
      media_count?: number;
    };
    return {
      followersCount: json.followers_count ?? 0,
      mediaCount: json.media_count ?? 0,
    };
  } catch (err) {
    console.warn("Failed to fetch Instagram profile:", err);
    return null;
  }
}
