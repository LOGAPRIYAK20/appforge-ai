import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { problem } = await req.json();

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY!,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1500,
      system: `You are an AI Innovation Analyst. Given a problem statement, return ONLY valid JSON with no markdown:
{
  "domain": string,
  "users": string,
  "problem": string,
  "market_saturation": number (0-100),
  "original_novelty_score": number (0-10),
  "competitors": {
    "direct": string[],
    "indirect": string[],
    "hidden": string[]
  },
  "market_need": {
    "pain_severity": number (0-10),
    "audience_size": number (0-10),
    "urgency": number (0-10),
    "willingness_to_pay": number (0-10),
    "market_need_index": number (0-100)
  },
  "mutations": [
    {"idea": string, "novelty_score": number}
  ],
  "failure_predictor": string[],
  "buildability": {
    "score": number (0-100),
    "team_size": number,
    "timeline": string
  },
  "mentor_question": string
}
Return EXACTLY 3 mutations. Be specific to the actual problem given.`,
      messages: [{ role: "user", content: problem }],
    }),
  });

  const data = await response.json();
  const raw = data.content?.[0]?.text ?? "{}";

  try {
    const result = JSON.parse(raw.replace(/```json|```/g, "").trim());
    result.problem = problem;
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "Analysis failed" }, { status: 500 });
  }
}