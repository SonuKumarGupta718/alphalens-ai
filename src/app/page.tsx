"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowLeft, 
  AlertCircle, 
  FileText, 
  DollarSign, 
  Briefcase, 
  TrendingUp, 
  TrendingDown, 
  LineChart, 
  Calendar, 
  History, 
  Trash2, 
  Activity,
  Layers
} from "lucide-react";

import { SearchBar } from "@/components/SearchBar";
import { LoadingProgress } from "@/components/LoadingProgress";
import { ScoreCard } from "@/components/ScoreCard";
import { SWOTCard } from "@/components/SWOTCard";
import { ConfidenceMeter } from "@/components/ConfidenceMeter";
import { RecommendationBadge } from "@/components/RecommendationBadge";
import { Footer } from "@/components/Footer";
import { AnalysisResult, SearchHistoryItem } from "@/types";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [history, setHistory] = useState<SearchHistoryItem[]>([]);

  // Load history on mount
  useEffect(() => {
    const saved = localStorage.getItem("alphalens_history");
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse history", e);
      }
    }
  }, []);

  const saveToHistory = (res: AnalysisResult) => {
    const newItem: SearchHistoryItem = {
      companyName: res.companyName,
      recommendation: res.recommendation,
      finalScore: res.finalScore,
      timestamp: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      })
    };

    // Filter out existing duplicates of same company
    const updated = [
      newItem,
      ...history.filter(h => h.companyName.toLowerCase() !== res.companyName.toLowerCase())
    ].slice(0, 6); // Keep last 6 searches

    setHistory(updated);
    localStorage.setItem("alphalens_history", JSON.stringify(updated));
  };

  const handleSearch = async (companyName: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyName })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to analyze the company.");
      }

      setResult(data);
      saveToHistory(data);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "An unexpected API error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const loadHistoryItem = async (name: string) => {
    // Run search for this company
    handleSearch(name);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("alphalens_history");
  };

  const handleBack = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="flex-grow flex flex-col min-h-screen relative overflow-hidden bg-slate-950">
      {/* Background radial overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.02),transparent_50%),radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.03),transparent_50%)] pointer-events-none" />

      {/* Header Bar */}
      <header className="border-b border-slate-800/40 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 py-4 px-6 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleBack}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-teal-500/10">
              <Layers className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent">
              AlphaLens <span className="text-teal-400 font-extrabold font-mono">AI</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500 hidden sm:inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Gemini Direct Engine Active
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* SEARCH & IDLE STATE */}
          {!isLoading && !result && !error && (
            <motion.div
              key="search-idle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12 py-12"
            >
              {/* Landing Header */}
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  Intellectual Equity Research
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
                  Deep Financial Intelligence, <br />
                  <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    Generated in Seconds
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
                  AlphaLens processes company names, running detailed sequential chains to assess business models, strategic SWOT metrics, and risks.
                </p>
              </div>

              {/* Search Box */}
              <SearchBar onSearch={handleSearch} isLoading={isLoading} />

              {/* Recent Searches */}
              {history.length > 0 && (
                <div className="max-w-2xl mx-auto border border-white/5 bg-slate-900/20 backdrop-blur-sm rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <History className="w-3.5 h-3.5 text-indigo-400" />
                      RECENT TERMINAL SEARCHES
                    </span>
                    <button 
                      onClick={clearHistory}
                      className="hover:text-rose-400 transition-colors flex items-center gap-1 text-[10px]"
                    >
                      <Trash2 className="w-3 h-3" />
                      Clear History
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {history.map((h, i) => (
                      <button
                        key={i}
                        onClick={() => loadHistoryItem(h.companyName)}
                        className="flex items-center justify-between text-left p-3 rounded-xl border border-slate-800 bg-slate-950/40 hover:bg-slate-900 hover:border-slate-700/60 text-sm font-medium transition-all group duration-200"
                      >
                        <div className="truncate pr-2">
                          <p className="text-slate-200 font-semibold truncate group-hover:text-white">{h.companyName}</p>
                          <span className="text-[10px] text-slate-500 font-normal">{h.timestamp}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                            {h.finalScore}
                          </span>
                          <span className={`w-2 h-2 rounded-full ${
                            h.recommendation === "Invest" ? "bg-emerald-500" : h.recommendation === "Watchlist" ? "bg-amber-500" : "bg-rose-500"
                          }`} />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* LOADING STATE */}
          {isLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="py-16"
            >
              <LoadingProgress isLoading={isLoading} />
            </motion.div>
          )}

          {/* ERROR STATE */}
          {error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-md mx-auto py-12 text-center"
            >
              <div className="p-6 border border-rose-500/20 bg-rose-950/10 backdrop-blur-md rounded-2xl shadow-xl space-y-4">
                <AlertCircle className="w-12 h-12 text-rose-500 mx-auto animate-bounce" />
                <h3 className="text-lg font-bold text-slate-200">Analysis Failed</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {error}
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-semibold text-sm rounded-xl transition-all active:scale-95"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Terminal
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* RESULT STATE / DASHBOARD */}
          {result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 py-6"
            >
              {/* Nav & Action Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-2 border-b border-slate-800/40">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-900/60 hover:bg-slate-900 border border-slate-850 rounded-lg active:scale-95 transition-all duration-200"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  New Analysis
                </button>

                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    As of {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="text-slate-700">|</span>
                  <span className="flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
                    Confidence Metric Validated
                  </span>
                </div>
              </div>

              {/* Title Header Card */}
              <div className="border border-white/5 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-hidden relative">
                {/* Accent line based on recommendation */}
                <div className={`absolute left-0 top-0 bottom-0 w-[4px] ${
                  result.recommendation === "Invest" ? "bg-emerald-500" : result.recommendation === "Watchlist" ? "bg-amber-500" : "bg-rose-500"
                }`} />

                <div>
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest bg-indigo-950/30 border border-indigo-900/20 px-2.5 py-1 rounded-md">
                    {result.industry}
                  </span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-white mt-3.5 flex flex-wrap items-center gap-2.5">
                    {result.companyName}
                    {result.isSimulated ? (
                      <span className="text-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                        Offline Cache
                      </span>
                    ) : (
                      <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                        Live AI Report
                      </span>
                    )}
                  </h2>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed max-w-xl">
                    Comprehensive equity analysis dashboard and research summary generated via sequential intelligence.
                  </p>
                </div>

                <div className="flex items-center gap-5 pr-2">
                  <RecommendationBadge recommendation={result.recommendation} large />
                </div>
              </div>

              {/* SECTION 1: Summary Panel & Confidence */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Reason / Decision text */}
                <div className="lg:col-span-2 border border-white/5 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl flex flex-col justify-between relative overflow-hidden">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      <FileText className="w-4 h-4 text-indigo-400" />
                      Investment Case & Rationale
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed pt-1.5 font-normal">
                      {result.recommendationReasoning}
                    </p>
                  </div>
                  <div className="border-t border-slate-800/80 mt-6 pt-4 text-[11px] text-slate-500">
                    * recommendation is compiled dynamically using aggregate scores. Verify balance sheets and filings.
                  </div>
                </div>

                {/* Confidence circle */}
                <div className="border border-white/5 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center relative overflow-hidden">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 self-start flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-teal-400" />
                    LLM Confidence
                  </h4>
                  <ConfidenceMeter score={result.confidenceScore} />
                  <p className="text-[11px] text-slate-500 text-center max-w-[180px] mt-2">
                    Degree of certainty based on consistency of research chains
                  </p>
                </div>
              </div>

              {/* SECTION 2: Company Overview and Business Model */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 border border-white/5 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl space-y-5">
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2.5">Company Overview</h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">{result.companyOverview}</p>
                  </div>
                  <hr className="border-slate-850" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-slate-500" />
                      Business & Monetization Model
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">{result.businessModel}</p>
                  </div>
                </div>

                <div className="border border-white/5 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl space-y-6">
                  {/* Revenue Sources */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-emerald-400" />
                      Revenue Sources
                    </h3>
                    <ul className="space-y-2.5">
                      {result.revenueSources.map((source, index) => (
                        <li key={index} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                          <span className="text-emerald-400 select-none mt-0.5">•</span>
                          <span>{source}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className="border-slate-850" />

                  {/* Competitive Advantages */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                      Competitive Advantages (Moats)
                    </h3>
                    <ul className="space-y-2.5">
                      {result.competitiveAdvantages.map((adv, index) => (
                        <li key={index} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                          <span className="text-indigo-400 select-none mt-0.5">•</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* SECTION 3 & 4: Scores (ScoreCard) & SWOT (SWOTCard) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Score Breakdown (1/3 weight width) */}
                <div className="lg:col-span-1">
                  <ScoreCard scores={result.scores} finalScore={result.finalScore} />
                </div>
                {/* SWOT grid (2/3 width) */}
                <div className="lg:col-span-2 flex flex-col justify-between">
                  <SWOTCard swot={result.swot} />
                </div>
              </div>

              {/* SECTION 5: Growth Drivers vs Risks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Growth Drivers */}
                <div className="border border-white/5 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center gap-2 mb-4 text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">Growth Drivers</h3>
                  </div>
                  <ul className="space-y-3">
                    {result.growthDrivers.map((driver, index) => (
                      <li key={index} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                        <span className="text-emerald-400 font-bold mt-0.5">•</span>
                        <span>{driver}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Risks */}
                <div className="border border-white/5 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center gap-2 mb-4 text-rose-400">
                    <TrendingDown className="w-5 h-5" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">Key Risks & Headwinds</h3>
                  </div>
                  <ul className="space-y-3">
                    {result.keyRisks.map((risk, index) => (
                      <li key={index} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                        <span className="text-rose-400 font-bold mt-0.5">•</span>
                        <span>{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Qualitative Financial Health, Market Position & Landscape */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-white/5 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-teal-400" />
                    Financial Health
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{result.financialHealth}</p>
                </div>
                <div className="border border-white/5 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <LineChart className="w-4 h-4 text-indigo-400" />
                    Market Position
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{result.marketPosition}</p>
                </div>
                <div className="border border-white/5 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-purple-400" />
                    Competitive Landscape
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{result.competitiveLandscape}</p>
                </div>
              </div>

              {/* SECTION 6: Investment Horizon Timeline */}
              <div className="border border-white/5 bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 shadow-xl space-y-5">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">Investment Horizon Outlook</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Short term */}
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/30 space-y-1.5 hover:border-slate-700/40 transition-colors">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider font-mono">Short Term (1-2 Years)</span>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">{result.investmentHorizon.shortTerm}</p>
                  </div>
                  {/* Medium term */}
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/30 space-y-1.5 hover:border-slate-700/40 transition-colors">
                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider font-mono">Medium Term (3-5 Years)</span>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">{result.investmentHorizon.mediumTerm}</p>
                  </div>
                  {/* Long term */}
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/30 space-y-1.5 hover:border-slate-700/40 transition-colors">
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider font-mono">Long Term (5+ Years)</span>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">{result.investmentHorizon.longTerm}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
