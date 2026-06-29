import React from "react";
import { ShieldCheck, Database, Award } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/80 backdrop-blur-md py-8 px-4 mt-16 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="font-semibold text-slate-200 flex items-center gap-1.5 justify-center md:justify-start">
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent font-bold">AlphaLens AI</span>
            <span className="text-[10px] bg-slate-800 text-teal-400 px-2 py-0.5 rounded-full font-mono uppercase tracking-wider">v1.0.0</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Enterprise-grade investment research powered by LangChain & Gemini.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-xs">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Structured Framework</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Database className="w-4 h-4 text-indigo-400" />
            <span>Zero-Retention Compute</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Award className="w-4 h-4 text-teal-400" />
            <span>Weighted Scoring Engine</span>
          </div>
        </div>
        
        <div className="text-xs text-slate-500 text-center md:text-right">
          &copy; {new Date().getFullYear()} AlphaLens AI. For educational and demonstrative purposes only.
        </div>
      </div>
    </footer>
  );
}
