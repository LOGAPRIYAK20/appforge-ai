export default function BuildabilityScore() {
  const metrics = [
    { title: "Difficulty", value: "6/10" },
    { title: "Frontend Complexity", value: "Low" },
    { title: "Backend Complexity", value: "Medium" },
    { title: "AI Complexity", value: "Medium" },
    { title: "Success Probability", value: "82%" },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">
        Buildability Analysis
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {metrics.map((item) => (
          <div
            key={item.title}
            className="border rounded-lg p-4 shadow-sm"
          >
            <p className="text-sm text-gray-500">
              {item.title}
            </p>

            <p className="text-2xl font-bold">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}