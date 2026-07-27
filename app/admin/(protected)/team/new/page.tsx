import TeamForm from "@/components/admin/TeamForm";

export default function NewTeamMemberPage() {
  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold text-secondary">Add Team Member</h1>
      <TeamForm />
    </div>
  );
}
