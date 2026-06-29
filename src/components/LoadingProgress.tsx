import React, { useEffect, useState } from "react";
import { Loader2, CheckCircle2, Clock } from "lucide-react";
import { cn } from "../lib/utils";

interface LoadingProgressProps {
  isLoading: boolean;
}

export function LoadingProgress({ isLoading }: LoadingProgressProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: "Researching company fundamentals...", duration: 2500 },
    { label: "Analyzing business model & competitive advantage...", duration: 3000 },
    { label: "Evaluating financial health & market risks...", duration: 2500 },
    { label: "Generating investment score & final report...", duration: 2000 },
  ];

  useEffect(() => {
    if (!isLoading) {
      setCurrentStep(0);
      return;
    }

    let activeStep = 0;
    let timer: NodeJS.Timeout;

    const runStep = () => {
      if (activeStep < steps.length - 1) {
        timer = setTimeout(() => {
          activeStep += 1;
          setCurrentStep(activeStep);
          runStep();
        }, steps[activeStep].duration);
      }
    };

    runStep();

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  if (!isLoading) return null;

  // Calculate percentage of progress
  const progressPercent = Math.min(100, Math.round(((currentStep + 0.5) / steps.length) * 100));

  return (
    <div className="w-full max-w-xl mx-auto border border-white/5 bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 shadow-2xl relative overflow-hidden transition-all duration-300">
      {/* Decorative pulse line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-500/20 via-indigo-500/80 to-purple-500/20 animate-pulse" />

      <div className="flex flex-col items-center mb-6">
        <Loader2 className="w-8 h-8 text-teal-400 animate-spin mb-3" />
        <h3 className="text-lg font-bold text-slate-100">AI Analyst Executing</h3>
        <p className="text-xs text-slate-400 mt-1">Orchestrating multi-layered sequential research chains</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-slate-800 rounded-full mb-6 overflow-hidden relative">
        <div
          className="h-full bg-gradient-to-r from-teal-400 to-indigo-500 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Steps List */}
      <div className="space-y-4">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          
          return (
            <div
              key={index}
              className={cn(
                "flex items-center gap-3.5 transition-all duration-300 p-2.5 rounded-xl border border-transparent",
                isActive && "bg-slate-800/40 border-white/5 shadow-inner scale-[1.01]",
                isCompleted && "opacity-60"
              )}
            >
              <div className="flex-shrink-0">
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                ) : isActive ? (
                  <div className="w-5 h-5 rounded-full border-2 border-indigo-400 border-t-transparent animate-spin" />
                ) : (
                  <Clock className="w-5 h-5 text-slate-600" />
                )}
              </div>
              <span
                className={cn(
                  "text-sm font-medium",
                  isActive ? "text-slate-100 font-semibold" : isCompleted ? "text-slate-300" : "text-slate-500"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
