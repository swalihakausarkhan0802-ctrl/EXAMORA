import React from 'react';
import { Bookmark, Check } from 'lucide-react';

export default function QuestionNavigator({
  totalQuestions,
  currentIndex,
  onSelectIndex,
  answers = {},
  flagged = {},
  questionIds = []
}) {
  return (
    <div className="bg-white border border-[#DDD6C8] rounded-2xl p-5 sm:p-6 paper-shadow">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#30302E]">
          Question Navigator
        </h4>
        <span className="text-xs text-[#777066] font-mono tabular-nums">
          {Object.keys(answers).filter((k) => answers[k]).length}/{totalQuestions} Answered
        </span>
      </div>

      {/* Grid of Numbered Question Buttons */}
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-2.5 mb-5">
        {Array.from({ length: totalQuestions }).map((_, idx) => {
          const qId = questionIds[idx];
          const isCurrent = idx === currentIndex;
          const isAnswered = Boolean(answers[qId]);
          const isFlagged = Boolean(flagged[qId]);

          // Determine styling based on clear state priorities
          let buttonClasses = 'border border-[#DDD6C8] bg-[#FAF7EF] text-[#30302E] hover:border-[#30302E]';
          let statusText = 'Unanswered';

          if (isCurrent) {
            buttonClasses = 'bg-[#30302E] text-white border-2 border-[#30302E] shadow-sm scale-[1.03]';
            statusText = 'Current';
          } else if (isAnswered) {
            buttonClasses = 'bg-[#E9DFFF]/60 text-[#30302E] border border-[#C5B3E8] hover:bg-[#E9DFFF]';
            statusText = 'Answered';
          }

          return (
            <button
              key={idx}
              onClick={() => onSelectIndex(idx)}
              aria-label={`Question ${idx + 1}: ${statusText}${isFlagged ? ', flagged for review' : ''}`}
              className={`relative h-11 rounded-xl flex items-center justify-center font-mono text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E] ${buttonClasses}`}
            >
              <span>{idx + 1}</span>

              {/* Status indicator icons (not color alone) */}
              {isAnswered && !isCurrent && (
                <span className="absolute top-1 right-1 text-[#30302E]" title="Answered">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
              )}

              {/* Flagged for Review Marker */}
              {isFlagged && (
                <span 
                  className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#F3E39A] border border-[#9E8B2C]" 
                  title="Marked for review"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Accessible Legend */}
      <div className="pt-4 border-t border-[#DDD6C8]/60 space-y-2 text-xs text-[#777066]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded bg-[#30302E]"></span>
            <span>Current Item</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded bg-[#E9DFFF] border border-[#C5B3E8] flex items-center justify-center text-[8px] text-[#30302E]">✓</span>
            <span>Answered</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded bg-[#FAF7EF] border border-[#DDD6C8]"></span>
            <span>Unanswered</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F3E39A] border border-[#9E8B2C]"></span>
            <span>Flagged</span>
          </div>
        </div>
      </div>
    </div>
  );
}
