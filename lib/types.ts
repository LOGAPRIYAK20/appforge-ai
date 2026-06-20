export interface AnalyzeResult {
  domain: string;
  users: string;
  problem: string;
  market_saturation: number;
  original_novelty_score: number;
  competitors: {
    direct: string[];
    indirect: string[];
    hidden: string[];
  };
  market_need: {
    pain_severity: number;
    audience_size: number;
    urgency: number;
    willingness_to_pay: number;
    market_need_index: number;
  };
  mutations: { idea: string; novelty_score: number }[];
  failure_predictor: string[];
  buildability: {
    score: number;
    team_size: number;
    timeline: string;
  };
  mentor_question: string;
}