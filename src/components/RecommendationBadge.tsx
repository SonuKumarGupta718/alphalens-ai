import React from "react";
import { TrendingUp, AlertCircle, ShieldAlert } from "lucide-react";
import { InvestmentRecommendation } from "../types";
import { cn } from "../lib/utils";

interface RecommendationBadgeProps {
  recommendation: InvestmentRecommendation;
  className?: string;
  large?: boolean;
}

export function RecommendationBadge({ recommendation, className, large = false }: RecommendationBadgeProps) {
  const configs = {
    Invest: {
      text: "Invest",
      icon: TrendingUp,
      colors: "bg-emerald-950/40 border-emerald-500/30 text-emerald-400 shadow-emerald-500/10",
      description: "Strong structural tailwinds, high business quality, and clear growth trajectory.",
    },
    Watchlist: {
      text: "Watchlist",
      icon: AlertCircle,
      colors: "bg-amber-950/40 border-amber-500/30 text-amber-400 shadow-amber-500/10",
      description: "Solid fundamentals, but valuation, macro headwind, or short-term uncertainty warrants caution.",
    },
    Pass: {
      text: "Pass",
      icon: ShieldAlert,
      colors: "bg-rose-950/40 border-rose-500/30 text-rose-400 shadow-rose-500/10",
      description: "Unmitigated key risks, low margin of safety, or structural headwind.",
    },
  };

  const current = configs[recommendation] || configs.Watchlist;
  const Icon = current.icon;

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-lg backdrop-blur-sm font-semibold transition-all duration-300",
          large ? "px-6 py-2.5 text-lg font-bold tracking-wide" : "text-sm",
          current.colors
        )}
      >
        <Icon className={cn("animate-pulse", large ? "w-5 h-5" : "w-4 h-4")} />
        <span>{current.text.toUpperCase()}</span>
      </div>
      {large && (
        <p className="text-xs text-slate-400 text-center max-w-sm mt-1 leading-relaxed">
          {current.description}
        </p>
      )}
    </div>
  );
}
