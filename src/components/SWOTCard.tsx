import React from "react";
import { SWOT } from "../types";
import { PlusCircle, MinusCircle, Lightbulb, ShieldAlert } from "lucide-react";

interface SWOTCardProps {
  swot: SWOT;
}

export function SWOTCard({ swot }: SWOTCardProps) {
  const sections = [
    {
      title: "Strengths",
      items: swot.strengths,
      icon: PlusCircle,
      colors: "bg-emerald-950/20 border-emerald-500/20 text-emerald-400 font-semibold",
      itemIconColor: "text-emerald-400",
      accent: "from-emerald-500/10 to-transparent",
    },
    {
      title: "Weaknesses",
      items: swot.weaknesses,
      icon: MinusCircle,
      colors: "bg-amber-950/20 border-amber-500/20 text-amber-400 font-semibold",
      itemIconColor: "text-amber-400",
      accent: "from-amber-500/10 to-transparent",
    },
    {
      title: "Opportunities",
      items: swot.opportunities,
      icon: Lightbulb,
      colors: "bg-blue-950/20 border-blue-500/20 text-blue-400 font-semibold",
      itemIconColor: "text-blue-400",
      accent: "from-blue-500/10 to-transparent",
    },
    {
      title: "Threats",
      items: swot.threats,
      icon: ShieldAlert,
      colors: "bg-rose-950/20 border-rose-500/20 text-rose-400 font-semibold",
      itemIconColor: "text-rose-400",
      accent: "from-rose-500/10 to-transparent",
    },
  ] as const;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {sections.map((section) => {
        const Icon = section.icon;
        return (
          <div
            key={section.title}
            className={`border rounded-2xl p-5 bg-slate-900/30 backdrop-blur-md relative overflow-hidden shadow-lg hover:border-slate-700/50 transition-all duration-300 ${section.colors}`}
          >
            {/* Soft decorative glow */}
            <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${section.accent} rounded-full blur-2xl pointer-events-none`} />

            <div className="flex items-center gap-2 mb-4">
              <Icon className="w-5 h-5" />
              <h4 className="text-base font-bold tracking-wide text-slate-100">{section.title}</h4>
            </div>

            <ul className="space-y-3">
              {section.items.length > 0 ? (
                section.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed font-normal">
                    <span className={`text-base select-none mt-0.5 ${section.itemIconColor}`}>•</span>
                    <span>{item}</span>
                  </li>
                ))
              ) : (
                <li className="text-xs text-slate-500 italic">No analysis data provided.</li>
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
