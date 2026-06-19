export interface AnalyzeResult {
  domain: string;
  users: string;
  pain_points: string[];
  competitors: { name: string; note: string }[];
  market_saturation: number;
  original_novelty_score: number;
  mutations: { idea: string; novelty_score: number; why: string }[];
  mentor_question: string;
}
