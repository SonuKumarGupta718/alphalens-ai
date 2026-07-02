export type InvestmentRecommendation = 'Invest' | 'Watchlist' | 'Pass';

export interface Scores {
  businessQuality: number;      // 0-100
  growthPotential: number;      // 0-100
  competitiveAdvantage: number; // 0-100
  riskLevel: number;            // 0-100, where higher represents lower risk / safer
  marketOpportunity: number;    // 0-100
}

export interface SWOT {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface InvestmentHorizon {
  shortTerm: string;
  mediumTerm: string;
  longTerm: string;
}

export interface AnalysisResult {
  companyName: string;
  companyOverview: string;
  industry: string;
  businessModel: string;
  revenueSources: string[];
  competitiveAdvantages: string[];
  swot: SWOT;
  growthDrivers: string[];
  financialHealth: string;
  marketPosition: string;
  competitiveLandscape: string;
  keyRisks: string[];
  investmentHorizon: InvestmentHorizon;
  scores: Scores;
  finalScore: number;
  recommendation: InvestmentRecommendation;
  confidenceScore: number;
  recommendationReasoning: string;
  isSimulated?: boolean;
}

export interface SearchHistoryItem {
  companyName: string;
  recommendation: InvestmentRecommendation;
  finalScore: number;
  timestamp: string;
}
