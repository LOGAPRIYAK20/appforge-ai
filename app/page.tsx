"use client";

import { useState } from "react";
import ProblemInput from "@/components/ProblemInput";
import MarketAnalysis from "@/components/MarketAnalysis";
import IdeaEvolution from "@/components/IdeaEvolution";
import InnovationDashboard from "@/components/InnovationDashboard";
import IdeaComparison from "@/components/IdeaComparison";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import MentorReview from "@/components/MentorReview";
import Roadmap from "@/components/Roadmap";
import BuildabilityScore from "@/components/BuildabilityScore";
import ProgressBar from "@/components/ProgressBar";
import Blueprint from "@/components/Blueprint";
import WinningChance from "@/components/WinningChance";
import StartupScorecard from "@/components/StartupScorecard";
const MOCK = {
  domain: "Education",
  users: "College Students",
  competitors: [
    {
      name: "DevPost",
      note: "Hackathon listings"
    },
    {
      name: "LinkedIn",
      note: "Professional networking"
    }
  ],
  market_saturation: 62,
  original_novelty_score: 4,
  mutations: [
    {
      idea: "AI Hackathon Team Matcher",
      novelty_score: 8,
      why: "Matches students by skills"
    },
    {
      idea: "Campus Skill Marketplace",
      novelty_score: 7,
      why: "Connects students within campus"
    },
    {
      idea: "Personality-Based Team Builder",
      novelty_score: 9,
      why: "Matches working styles"
    }
  ],
  mentor_question:
    "Why would students use this instead of WhatsApp groups?"
};

export default function Home() {
  const [loading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [step, setStep] = useState(1);

  function handleAnalyze() {
    setResult(MOCK);
    setStep(2);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
      <ProblemInput
        onAnalyze={handleAnalyze}
        loading={loading}
      />

      <ProgressBar step={step} />

      
      {result && (
        <div className="mt-10 space-y-10">
          {step === 1 && (
            <div className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold">
                Welcome to AppForge AI
              </h2>

              <p className="mt-2 text-white">
                Click Next to begin analyzing your idea.
              </p>
            </div>
          )}

          {step === 2 && (
            <>
              <InnovationDashboard />
              <MarketAnalysis result={result} />
            </>
          )}

          {step === 3 && (
            <>
              <IdeaComparison />
              <IdeaEvolution result={result} />
            </>
          )}

          {step === 4 && (
            <>
              <ArchitectureFlow />
              <BuildabilityScore />
              <WinningChance />
            </>
          )}

          {step === 5 && (
            <>
              <Roadmap />
              <MentorReview />
            </>
          )}
          {step === 6 && (
            <>
              <Blueprint />
              <StartupScorecard />
            
          
              <div className = "space-y-3 bg-slate-900/70 p-6 rounded-xl">

                <p><strong>Project:</strong> AI Hackathon Team Matcher</p>

                <p><strong>Target Users:</strong> College Students</p>

                <p><strong>Tech Stack:</strong> React, Node.js, Firebase, AI API</p>

                <p><strong>Core Features:</strong></p>

                <ul className="list-disc ml-6 mt-2">
                  <li>Skill Matching</li>
                  <li>Team Formation</li>
                  <li>AI Recommendations</li>
                  <li>Collaboration Dashboard</li>
                </ul>
                <p> 
                  <strong>Success Probability:</strong>82%
                </p>
              </div>
            </>
          )}
        </div>
      )}
      {result && (
        <div className="flex justify-between mt-8 mb-8">
          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className="border px-4 py-2 rounded"
          >
            Previous
          </button>

          <button
           onClick={() => setStep(step + 1)}
           disabled={step === 6}
           className="bg-black text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      )}
      </div>
    </main>
  );
}