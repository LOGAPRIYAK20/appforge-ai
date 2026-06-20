import type { AnalyzeResult } from "@/lib/types";

export default function MarketAnalysis({ result }: { result: AnalyzeResult }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Market Analysis</h2>
      <p className="text-sm text-gray-500 mb-4">{result.domain} · {result.users}</p>

      <h3 className="font-bold mt-4 mb-2">Competitor Analysis</h3>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <p className="font-semibold">Direct</p>
          {result.competitors.direct.map((item) => <p key={item}>{item}</p>)}
        </div>
        <div>
          <p className="font-semibold">Indirect</p>
          {result.competitors.indirect.map((item) => <p key={item}>{item}</p>)}
        </div>
        <div>
          <p className="font-semibold">Hidden</p>
          {result.competitors.hidden.map((item) => <p key={item}>{item}</p>)}
        </div>
      </div>

      <p className="text-sm mb-4">
        Market Saturation: <strong>{result.market_saturation}%</strong> ·
        Original Novelty: <strong>{result.original_novelty_score}/10</strong>
      </p>

      <div className="mt-6">
        <h3 className="font-bold mb-2">Market Need Index</h3>
        <p>Pain Severity: {result.market_need.pain_severity}/10</p>
        <p>Audience Size: {result.market_need.audience_size}/10</p>
        <p>Urgency: {result.market_need.urgency}/10</p>
        <p>Willingness To Pay: {result.market_need.willingness_to_pay}/10</p>
        <p className="font-bold text-lg mt-2">Final Index: {result.market_need.market_need_index}%</p>
      </div>
    </section>
  );
}