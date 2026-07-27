import { prisma } from "@/lib/db";
import { team as fallbackTeam } from "@/lib/data";
import type { TeamMember } from "@/types";

// DB-first, with the static lib/data.ts array as fallback so the public site
// still renders if the DB is empty or unreachable. This read layer is the
// only thing public pages and the admin talk to.

export async function getTeam(): Promise<TeamMember[]> {
  try {
    const rows = await prisma.teamMember.findMany({ orderBy: { order: "asc" } });
    if (rows.length === 0) return fallbackTeam;
    return rows.map((r) => r.data as unknown as TeamMember);
  } catch {
    return fallbackTeam;
  }
}

export async function getTeamMember(id: string): Promise<TeamMember | null> {
  const row = await prisma.teamMember.findUnique({ where: { id } });
  return row ? (row.data as unknown as TeamMember) : null;
}

export async function createTeamMember(data: Omit<TeamMember, "id">): Promise<string> {
  const id = crypto.randomUUID();
  const max = await prisma.teamMember.aggregate({ _max: { order: true } });
  await prisma.teamMember.create({
    data: {
      id,
      order: (max._max.order ?? -1) + 1,
      data: { ...data, id } as unknown as object,
    },
  });
  return id;
}

export async function updateTeamMember(id: string, data: Omit<TeamMember, "id">): Promise<void> {
  await prisma.teamMember.update({
    where: { id },
    data: { data: { ...data, id } as unknown as object },
  });
}

export async function duplicateTeamMember(id: string): Promise<string> {
  const source = await prisma.teamMember.findUnique({ where: { id } });
  if (!source) throw new Error("Team member not found");
  const newId = crypto.randomUUID();
  const sourceData = source.data as unknown as TeamMember;
  const max = await prisma.teamMember.aggregate({ _max: { order: true } });
  await prisma.teamMember.create({
    data: {
      id: newId,
      order: (max._max.order ?? -1) + 1,
      data: { ...sourceData, id: newId, name: `${sourceData.name} (copy)` } as unknown as object,
    },
  });
  return newId;
}

export async function deleteTeamMember(id: string): Promise<void> {
  await prisma.teamMember.delete({ where: { id } });
}

export async function reorderTeamMembers(orderedIds: string[]): Promise<void> {
  await prisma.$transaction(
    orderedIds.map((id, i) =>
      prisma.teamMember.update({ where: { id }, data: { order: i } })
    )
  );
}
