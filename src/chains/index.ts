import { runResearchChain } from "./researchChain";
import { runAnalysisChain } from "./analysisChain";
import { runRecommendationChain } from "./recommendationChain";
import { AnalysisResult, InvestmentRecommendation } from "../types";

export async function runInvestmentResearchAgent(companyName: string): Promise<AnalysisResult> {
  if (!companyName || companyName.trim() === "") {
    throw new Error("Company name cannot be empty.");
  }

  // Step 1: Research
  const researchData = await runResearchChain(companyName.trim());
  
  // Step 2: Analysis
  const analysisData = await runAnalysisChain(researchData);
  
  // Step 3: Recommendation
  const recommendationData = await runRecommendationChain(researchData, analysisData);

  // Recalculate/verify weighted final score programmatically to avoid any LLM math bugs
  const businessQuality = Math.min(100, Math.max(0, Number(recommendationData.scores?.businessQuality ?? 0)));
  const growthPotential = Math.min(100, Math.max(0, Number(recommendationData.scores?.growthPotential ?? 0)));
  const competitiveAdvantage = Math.min(100, Math.max(0, Number(recommendationData.scores?.competitiveAdvantage ?? 0)));
  const riskLevel = Math.min(100, Math.max(0, Number(recommendationData.scores?.riskLevel ?? 0)));
  const marketOpportunity = Math.min(100, Math.max(0, Number(recommendationData.scores?.marketOpportunity ?? 0)));

  // SCORING SYSTEM
  // Business Quality: 25%
  // Growth Potential: 20%
  // Competitive Advantage: 20%
  // Risk Level: 15%
  // Market Opportunity: 20%
  const calculatedFinalScore = Math.round(
    (businessQuality * 0.25) +
    (growthPotential * 0.20) +
    (competitiveAdvantage * 0.20) +
    (riskLevel * 0.15) +
    (marketOpportunity * 0.20)
  );

  // If score: 80+ Invest, 60-79 Watchlist, Below 60 Pass
  let verifiedRecommendation: InvestmentRecommendation = "Pass";
  if (calculatedFinalScore >= 80) {
    verifiedRecommendation = "Invest";
  } else if (calculatedFinalScore >= 60) {
    verifiedRecommendation = "Watchlist";
  }

  const confidenceScore = Math.min(100, Math.max(0, Number(recommendationData.confidenceScore ?? 80)));

  // Assemble the final result object strictly typed
  const result: AnalysisResult = {
    companyName: researchData.companyName || companyName,
    companyOverview: researchData.companyOverview || "",
    industry: researchData.industry || "",
    businessModel: researchData.businessModel || "",
    revenueSources: Array.isArray(researchData.revenueSources) ? researchData.revenueSources : [],
    competitiveAdvantages: Array.isArray(researchData.competitiveAdvantages) ? researchData.competitiveAdvantages : [],
    
    swot: {
      strengths: Array.isArray(analysisData.swot?.strengths) ? analysisData.swot.strengths : [],
      weaknesses: Array.isArray(analysisData.swot?.weaknesses) ? analysisData.swot.weaknesses : [],
      opportunities: Array.isArray(analysisData.swot?.opportunities) ? analysisData.swot.opportunities : [],
      threats: Array.isArray(analysisData.swot?.threats) ? analysisData.swot.threats : []
    },
    growthDrivers: Array.isArray(analysisData.growthDrivers) ? analysisData.growthDrivers : [],
    financialHealth: analysisData.financialHealth || "",
    marketPosition: analysisData.marketPosition || "",
    competitiveLandscape: analysisData.competitiveLandscape || "",
    keyRisks: Array.isArray(analysisData.keyRisks) ? analysisData.keyRisks : [],
    
    investmentHorizon: {
      shortTerm: recommendationData.investmentHorizon?.shortTerm || "",
      mediumTerm: recommendationData.investmentHorizon?.mediumTerm || "",
      longTerm: recommendationData.investmentHorizon?.longTerm || ""
    },
    
    scores: {
      businessQuality,
      growthPotential,
      competitiveAdvantage,
      riskLevel,
      marketOpportunity
    },
    finalScore: calculatedFinalScore,
    recommendation: verifiedRecommendation,
    confidenceScore,
    recommendationReasoning: recommendationData.recommendationReasoning || ""
  };

  return result;
}
