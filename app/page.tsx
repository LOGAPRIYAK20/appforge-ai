"use client";
import { useState } from "react";
import ProblemInput from "@/components/ProblemInput";
import MarketAnalysis from "@/components/MarketAnalysis";
import IdeaEvolution from "@/components/IdeaEvolution";
import FailurePredictor from "@/components/FailurePredictor";
import Buildability from "@/components/Buildability";
import type { AnalyzeResult } from "@/lib/types";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalyzeResult | null>(null);
  const [error, setError] = useState("");

  async function handleAnalyze(problem: string) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ problem }),
      });
      if (!res.ok) throw new Error();
      setResult(await res.json());
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="px-4 pb-20 max-w-2xl mx-auto">
      <ProblemInput onAnalyze={handleAnalyze} loading={loading} />
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      {result && (
        <div className="mt-10 space-y-10">
          <MarketAnalysis result={result} />
          <IdeaEvolution result={result} />
          <FailurePredictor result={result} />
          <Buildability result={result} />
        </div>
      )}
    </main>
  );
}