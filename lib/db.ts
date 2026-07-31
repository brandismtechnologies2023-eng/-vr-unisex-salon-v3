import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/lib/generated/prisma/client";

// Prisma 7 requires a driver adapter. Postgres connection string comes from
// DATABASE_URL (a hosted Neon / Vercel Postgres / Supabase database), used
// both locally and on Vercel so admin edits persist in one shared store.
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// Cache the client on globalThis so Next.js hot-reload in dev doesn't spin up
// a new connection on every change.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
