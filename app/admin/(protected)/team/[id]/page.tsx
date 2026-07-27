import { notFound } from "next/navigation";
import TeamForm from "@/components/admin/TeamForm";
import { getTeamMember } from "@/lib/content/team";

export default async function EditTeamMemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = await getTeamMember(id);
  if (!member) notFound();

  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold text-secondary">Edit Team Member</h1>
      <TeamForm member={member} />
    </div>
  );
}
