import type { AnalyzeResult } from "@/lib/types";

export default function Buildability({ result }: { result: AnalyzeResult }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Buildability Score</h2>
      <p>Score: {result.buildability.score}%</p>
      <p>Estimated Time: {result.buildability.timeline}</p>
      <p>Team Size: {result.buildability.team_size} Members</p>
    </section>
  );
}