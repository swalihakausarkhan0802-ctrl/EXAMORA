import React from 'react';

export default function ProgressBar({ current, total, percentage }) {
  const safePercentage = Math.min(100, Math.max(0, percentage || Math.round((current / total) * 100)));

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-[#777066] mb-1.5 font-medium">
        <span>Progress Completion</span>
        <span className="font-mono tabular-nums text-[#30302E]">
          {current} of {total} answered ({safePercentage}%)
        </span>
      </div>

      <div 
        className="w-full h-2 bg-[#FAF7EF] rounded-full overflow-hidden border border-[#DDD6C8]"
        role="progressbar"
        aria-valuenow={safePercentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Examination answer completion progress"
      >
        <div 
          className="h-full bg-[#30302E] transition-all duration-300 ease-out rounded-full"
          style={{ width: `${safePercentage}%` }}
        />
      </div>
    </div>
  );
}
