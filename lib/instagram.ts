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

// Returns null (rather than throwing) whenever the Graph API isn't
// configured or the request fails, so callers can fall back to placeholder
// content instead of breaking the page.
export async function getInstagramPosts(limit = 6): Promise<InstagramPost[] | null> {
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
