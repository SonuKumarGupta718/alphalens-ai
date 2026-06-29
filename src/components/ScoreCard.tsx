import React from "react";
import { Scores } from "../types";
import { Award, CheckCircle } from "lucide-react";
import { cn } from "../lib/utils";

interface ScoreCardProps {
  scores: Scores;
  finalScore: number;
}

export function ScoreCard({ scores, finalScore }: ScoreCardProps) {
  const categories = [
    {
      key: "businessQuality",
      name: "Business Quality",
      weight: 25,
      score: scores.businessQuality,
      color: "from-blue-500 to-indigo-500",
      description: "Product-market fit, scalability, and pricing power.",
    },
    {
      key: "growthPotential",
      name: "Growth Potential",
      weight: 20,
      score: scores.growthPotential,
      color: "from-emerald-500 to-teal-500",
      description: "Addressable market size and future growth vectors.",
    },
    {
      key: "competitiveAdvantage",
      name: "Competitive Advantage",
      weight: 20,
      score: scores.competitiveAdvantage,
      color: "from-indigo-500 to-purple-500",
      description: "Structural moats, switching costs, and brand equity.",
    },
    {
      key: "riskLevel",
      name: "Risk Mitigation",
      weight: 15,
      score: scores.riskLevel,
      color: "from-rose-500 to-orange-500",
      description: "Management of core risks (Higher score means lower risk).",
    },
    {
      key: "marketOpportunity",
      name: "Market Opportunity",
      weight: 20,
      score: scores.marketOpportunity,
      color: "from-pink-500 to-rose-500",
      description: "Industry tailwinds and macroeconomic support.",
    },
  ] as const;

  const getScoreTheme = (score: number) => {
    if (score >= 80) return "text-emerald-400 border-emerald-500/20 bg-emerald-950/20";
    if (score >= 60) return "text-amber-400 border-amber-500/20 bg-amber-950/20";
    return "text-rose-400 border-rose-500/20 bg-rose-950/20";
  };

  return (
    <div className="border border-white/5 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl relative overflow-hidden h-full">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center gap-3 mb-6">
        <Award className="w-5 h-5 text-indigo-400" />
        <h3 className="text-lg font-semibold text-slate-100">Weighted Scoring Breakdown</h3>
      </div>

      <div className="space-y-5">
        {categories.map((cat) => {
          const weightedContribution = ((cat.score * cat.weight) / 100).toFixed(1);
          return (
            <div key={cat.key} className="space-y-1">
              <div className="flex justify-between items-end text-sm">
                <div>
                  <span className="font-medium text-slate-200">{cat.name}</span>
                  <span className="text-xs text-slate-500 ml-1.5 font-mono">w: {cat.weight}%</span>
                </div>
                <div className="font-mono text-slate-300">
                  <span className="font-bold text-slate-100">{cat.score}</span>
                  <span className="text-slate-500 text-xs">/100</span>
                  <span className="text-[10px] text-indigo-400 ml-2 bg-indigo-950/30 border border-indigo-900/30 px-1.5 py-0.5 rounded-md">
                    +{weightedContribution}
                  </span>
                </div>
              </div>
              
              {/* Progress bar background */}
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden relative">
                <div
                  className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-1000", cat.color)}
                  style={{ width: `${cat.score}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-400 leading-tight pt-0.5">{cat.description}</p>
            </div>
          );
        })}
      </div>

      <div className="border-t border-slate-800/80 mt-6 pt-5 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-slate-200">Aggregate Investment Score</h4>
          <p className="text-[10px] text-slate-500">Calculated based on weight-matrix formula</p>
        </div>
        <div className={cn("px-4 py-2 border rounded-xl flex items-center gap-2", getScoreTheme(finalScore))}>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-extrabold font-mono tracking-tight">{finalScore}</span>
            <span className="text-[8px] uppercase tracking-wider font-semibold text-slate-500 -mt-1">Final Score</span>
          </div>
        </div>
      </div>
    </div>
  );
}
