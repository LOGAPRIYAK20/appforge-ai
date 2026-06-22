export default function InnovationDashboard() {
  const metrics = [
    { title: "Innovation Score", value: 80 },
    { title: "Buildability", value: 85 },
    { title: "Market Gap", value: 70 },
    { title: "Success Rate", value: 82 },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">
        Innovation Dashboard
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {metrics.map((item) => (
          <div
            key={item.title}
            className="border rounded-lg p-4 shadow-sm"
          >
            <p className="text-sm text-gray-500">
              {item.title}
            </p>

            <p className="text-2xl font-bold">
              {item.value}%
            </p>

            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
              <div
                className="h-2 bg-black rounded-full"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}