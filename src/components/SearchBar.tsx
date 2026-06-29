import React, { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

interface SearchBarProps {
  onSearch: (company: string) => void;
  isLoading: boolean;
}

export function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const suggestions = ["NVIDIA", "Tesla", "Apple", "Microsoft", "Reliance Industries"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a valid company name");
      return;
    }
    setError("");
    onSearch(query.trim());
  };

  const handleSuggestionClick = (name: string) => {
    if (isLoading) return;
    setQuery(name);
    setError("");
    onSearch(name);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          {/* Input field */}
          <input
            type="text"
            className={cn(
              "w-full bg-slate-950/80 backdrop-blur-md text-slate-100 placeholder-slate-500 rounded-2xl pl-12 pr-44 py-4 border text-base font-medium shadow-2xl focus:outline-none transition-all duration-300",
              error
                ? "border-rose-500/50 shadow-rose-950/20"
                : "border-slate-800 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20"
            )}
            placeholder="Search company (e.g. NVIDIA, Tesla, Apple...)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (error) setError("");
            }}
            disabled={isLoading}
          />
          
          {/* Search Icon */}
          <Search className="absolute left-4 w-5 h-5 text-slate-500 pointer-events-none" />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="absolute right-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white font-semibold text-sm flex items-center gap-1.5 shadow-lg shadow-teal-500/10 active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200"
          >
            {isLoading ? (
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Analyzing
              </span>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Analyze Company
              </>
            )}
          </button>
        </div>
        
        {/* Error message */}
        {error && (
          <p className="text-xs text-rose-400 font-medium pl-3 animate-pulse mt-2.5">
            {error}
          </p>
        )}
      </form>

      {/* Suggestion Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
        <span className="text-xs text-slate-500 font-medium mr-1.5">Try searching:</span>
        {suggestions.map((name) => (
          <button
            key={name}
            type="button"
            disabled={isLoading}
            onClick={() => handleSuggestionClick(name)}
            className="text-xs font-semibold px-3.5 py-1.5 rounded-full border border-slate-800/80 bg-slate-900/40 text-slate-400 hover:text-slate-200 hover:border-slate-700/60 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
