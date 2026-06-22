export default function IdeaComparison() {
  const ideas = [
    {
      idea: "AI Hackathon Team Matcher",
      novelty: "8/10",
      feasibility: "9/10",
    },
    {
      idea: "Campus Skill Marketplace",
      novelty: "7/10",
      feasibility: "8/10",
    },
    {
      idea: "Personality-Based Team Builder",
      novelty: "9/10",
      feasibility: "6/10",
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">
        Idea Comparison
      </h2>

      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Idea</th>
            <th className="border p-2">Novelty</th>
            <th className="border p-2">Feasibility</th>
          </tr>
        </thead>

        <tbody>
          {ideas.map((item) => (
            <tr key={item.idea}>
              <td className="border p-2">{item.idea}</td>
              <td className="border p-2">{item.novelty}</td>
              <td className="border p-2">{item.feasibility}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}