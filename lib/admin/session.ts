// Edge-safe (Web Crypto only — no node:crypto), so it can be used from both
// middleware (Edge runtime) and server actions/components (Node runtime).
// A session is a signed token "<exp>.<hmacBase64Url>" where exp is a unix-ms
// expiry; the HMAC-SHA256 is over the exp string, keyed by ADMIN_SESSION_SECRET.

export const SESSION_COOKIE = "vr_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not set");
  return secret;
}

function base64UrlEncode(bytes: ArrayBuffer): string {
  const b = btoa(String.fromCharCode(...new Uint8Array(bytes)));
  return b.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmac(message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return base64UrlEncode(sig);
}

export async function createSessionToken(): Promise<string> {
  const exp = String(Date.now() + SESSION_TTL_MS);
  return `${exp}.${await hmac(exp)}`;
}

export async function isValidSessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig) return false;
  if (Number(exp) < Date.now()) return false;
  const expected = await hmac(exp);
  // Constant-time-ish compare; lengths are fixed for SHA-256 output.
  if (sig.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < sig.length; i++) diff |= sig.charCodeAt(i) ^ expected.charCodeAt(i);
  return diff === 0;
}
