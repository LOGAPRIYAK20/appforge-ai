export default function StartupScorecard() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">
        📊 Startup Scorecard
      </h2>

      <div className="bg-slate-900/70 border border-purple-500/20 rounded-xl p-6">

        <div className="flex justify-between mb-3">
          <span>Innovation</span>
          <span>9/10</span>
        </div>

        <div className="flex justify-between mb-3">
          <span>Market Need</span>
          <span>8/10</span>
        </div>

        <div className="flex justify-between mb-3">
          <span>Technical Feasibility</span>
          <span>8/10</span>
        </div>

        <div className="flex justify-between mb-3">
          <span>Business Potential</span>
          <span>7/10</span>
        </div>

        <div className="mt-5 text-green-400 font-bold text-xl">
          Overall Score: 8.0/10
        </div>

      </div>
    </section>
  );
}