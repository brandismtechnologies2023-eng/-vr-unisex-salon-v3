import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@/lib/generated/prisma/client";

// Prisma 7 requires a driver adapter. The SQLite file path comes from
// DATABASE_URL (file:./dev.db, resolved relative to the prisma dir).
const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./dev.db",
});

// Cache the client on globalThis so Next.js hot-reload in dev doesn't spin up
// a new connection on every change.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
