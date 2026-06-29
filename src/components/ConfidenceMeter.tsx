import React, { useEffect, useState } from "react";

interface ConfidenceMeterProps {
  score: number; // 0-100
  size?: number;
}

export function ConfidenceMeter({ score, size = 120 }: ConfidenceMeterProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  
  useEffect(() => {
    // Start animation on mount
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 200);
    return () => clearTimeout(timer);
  }, [score]);

  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  // Choose colors based on score level
  const getColor = (s: number) => {
    if (s >= 80) return "stroke-teal-400";
    if (s >= 60) return "stroke-amber-400";
    return "stroke-rose-400";
  };

  const getGlowColor = (s: number) => {
    if (s >= 80) return "text-teal-400/20";
    if (s >= 60) return "text-amber-400/20";
    return "text-rose-400/20";
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="w-full h-full transform -rotate-90" viewBox={`0 0 ${size} ${size}`}>
          {/* Background circle */}
          <circle
            className="stroke-slate-800"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          {/* Progress circle */}
          <circle
            className={`transition-all duration-1000 ease-out ${getColor(score)}`}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>
        {/* Glow backdrop inside */}
        <div className={`absolute inset-0 rounded-full flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-[2px] border border-white/5`}>
          <span className="text-2xl font-bold font-mono tracking-tight text-white">
            {score}%
          </span>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
            Conf.
          </span>
        </div>
      </div>
    </div>
  );
}
