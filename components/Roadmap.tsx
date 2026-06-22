export default function Roadmap() {
  const roadmap = [
    {
      week: "Week 1",
      task: "Research & Requirement Analysis",
    },
    {
      week: "Week 2",
      task: "Frontend Development",
    },
    {
      week: "Week 3",
      task: "Backend & AI Integration",
    },
    {
      week: "Week 4",
      task: "Testing & Deployment",
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">
        Development Roadmap
      </h2>

      <div className="space-y-4">
        {roadmap.map((item) => (
          <div
            key={item.week}
            className="border rounded-lg p-4 shadow-sm"
          >
            <h3 className="font-bold">
              {item.week}
            </h3>

            <p className="text-white">
              {item.task}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}