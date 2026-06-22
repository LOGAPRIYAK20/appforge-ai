"use client";
import { useState } from "react";
import type { AnalyzeResult } from "@/lib/types";

export default function IdeaEvolution({
  result,
}: {
  result: AnalyzeResult;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [answer, setAnswer] = useState("");

  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">
        Evolved Ideas
      </h2>

      <div className="grid gap-3 mb-6">
        {result.mutations.map((m, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`text-left border rounded-lg p-4 ${
              selected === i
                ? "border-black bg-gray-50"
                : "border-gray-200"
            }`}
          >
            <p className="font-medium">{m.idea}</p>

            <p className="text-xs text-gray-500 mt-1">
              Novelty {m.novelty_score}/10
            </p>
          </button>
        ))}
      </div>

      <div className="bg-slate-900/70 border border-purple-500/20 rounded-xl p-4 backdrop-blur-lg">
        <p className="text-sm font-semibold mb-2">
          🧠 Mentor: {result.mentor_question}
        </p>

        <textarea
          className="w-full border border-purple-500/20 rounded-lg p-2 text-sm bg-slate-800 text-white"
          rows={3}
          placeholder="Answer this before moving forward..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        {answer.length > 20 && (
          <p className="text-xs text-green-600 mt-1">
            ✓ Good — now you're ready for the next step.
          </p>
        )}
      </div>
    </section>
  );
}