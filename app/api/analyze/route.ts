import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { problem } = await req.json();

  return NextResponse.json({
    domain: "Education",
    users: "College Students",
    problem,
    market_saturation: 62,
    original_novelty_score: 4,
    competitors: {
      direct: ["LinkedIn", "Internshala"],
      indirect: ["Discord", "Telegram"],
      hidden: ["WhatsApp Groups", "College Notice Boards"],
    },
    market_need: {
      pain_severity: 9,
      audience_size: 8,
      urgency: 7,
      willingness_to_pay: 6,
      market_need_index: 75,
    },
    mutations: [
      { idea: "AI Team Matchmaker", novelty_score: 8 },
      { idea: "Skill-based Project Network", novelty_score: 9 },
    ],
    failure_predictor: [
      "Fake skill claims",
      "Low retention",
      "Poor team compatibility",
    ],
    buildability: {
      score: 85,
      team_size: 3,
      timeline: "4 Weeks",
    },
    mentor_question: "How will you verify student skills before matching?",
  });
}