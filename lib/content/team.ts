import { prisma } from "@/lib/db";
import { team as fallback } from "@/lib/data";
import { makeCollection } from "@/lib/content/collection";
import type { TeamMember } from "@/types";

// Team uses the same generic collection machinery as the other content
// types. `getTeam` is kept as a named alias for the public homepage.
export const teamContent = makeCollection<TeamMember>(
  () => prisma.teamMember as never,
  fallback,
  (t) => ({ ...t, name: `${t.name} (copy)` })
);

export const getTeam = () => teamContent.getAll();
