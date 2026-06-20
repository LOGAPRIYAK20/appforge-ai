import type { AnalyzeResult } from "@/lib/types";

export default function FailurePredictor({ result }: { result: AnalyzeResult }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Failure Predictor</h2>
      <ul className="space-y-2">
        {result.failure_predictor.map((risk) => (
          <li key={risk}>❌ {risk}</li>
        ))}
      </ul>
    </section>
  );
}