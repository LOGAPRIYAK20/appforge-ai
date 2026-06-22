import type { AnalyzeResult } from "@/lib/types";

export default function MarketAnalysis({
  result,
}: {
  result: AnalyzeResult;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">
        Market Analysis
      </h2>

      <p className="text-sm text-gray-500 mb-3">
        {result.domain} · {result.users}
      </p>

      <div className="space-y-1 mb-5">
        {result.competitors.map((c) => (
          <div key={c.name} className="text-sm">
            <span className="font-medium">
              {c.name}
            </span>
            {" "}— {c.note}
          </div>
        ))}
      </div>

      <div className="flex gap-6">
        <div>
          <p>
            Market Saturation:
            {result.market_saturation}/100
          </p>
        </div>

        <div>
          <p>
            Original Novelty:
            {result.original_novelty_score}/10
          </p>
        </div>
      </div>
    </section>
  );
}