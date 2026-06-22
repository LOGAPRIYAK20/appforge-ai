export default function ProgressBar({
  step,
}: {
  step: number;
}) {
  const steps = [
    "Problem",
    "Analysis",
    "Evolution",
    "Buildability",
    "Roadmap",
    "Blueprint",
  ];

  return (
    <div className="flex justify-between mb-8">
      {steps.map((item, index) => (
        <div
          key={item}
          className={`text-sm font-medium ${
            index + 1 <= step
              ? "text-black"
              : "text-gray-400"
          }`}
        >
          {index + 1}. {item}
        </div>
      ))}
    </div>
  );
}