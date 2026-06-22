"use client";
import { useState } from "react";

export default function ProblemInput({
  onAnalyze,
  loading,
}: {
  onAnalyze: (p: string) => void;
  loading: boolean;
}) {
  const [problem, setProblem] = useState("");

  return (
    <div className="mt-12 space-y-4">
      <h1 className="text-3xl font-bold">AppForge AI</h1>

      <p className="text-gray-500">
        Describe your idea or problem
      </p>

      <textarea
        className="w-full border rounded-lg p-3 h-28"
        placeholder="Students struggle to find project teammates"
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
      />

      <button
        disabled={loading || !problem.trim()}
        onClick={() => onAnalyze(problem)}
        className="bg-black text-white px-6 py-2 rounded-lg"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}