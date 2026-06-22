export default function ArchitectureFlow() {
  const steps = [
    "Problem",
    "AI Analysis",
    "Idea Evolution",
    "Architecture",
    "Roadmap",
    "Launch",
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">
        Architecture Flow
      </h2>

      <div className="flex flex-col items-center gap-3">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div className="border rounded-lg px-6 py-3 w-52 text-center">
              {step}
            </div>

            {index < steps.length - 1 && (
              <div className="text-2xl">↓</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}