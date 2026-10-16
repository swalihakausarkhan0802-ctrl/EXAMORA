import React, { useMemo } from 'react';
import { calculateScore } from '../utils/calculateScore.js';
import { 
  Award, 
  RotateCcw, 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Clock, 
  Check, 
  X, 
  FileText,
  AlertCircle
} from 'lucide-react';

export default function Results({ 
  resultData, 
  onRetakeExam, 
  onBackToCatalogue 
}) {
  const { exam, answers, submissionReason } = resultData || {};

  const scoreData = useMemo(() => {
    return calculateScore(exam, answers);
  }, [exam, answers]);

  if (!exam) {
    return (
      <div className="max-w-xl mx-auto py-20 text-center">
        <p className="text-sm text-[#777066]">No result data available.</p>
        <button
          onClick={onBackToCatalogue}
          className="mt-4 px-4 py-2 bg-[#30302E] text-white text-xs font-semibold rounded-lg"
        >
          Return to Catalogue
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      
      {/* 1. Results Summary Hero Card */}
      <section className="bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-10 paper-shadow-lg relative overflow-hidden">
        
        {/* Subtle decorative watermark/seal */}
        <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-40 hidden sm:block">
          <div className="border-2 border-dashed border-[#DDD6C8] rounded-2xl px-4 py-2 text-center rotate-6">
            <span className="font-serif text-xs font-bold uppercase tracking-wider text-[#777066]">
              Evaluation Complete
            </span>
          </div>
        </div>

        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#777066] mb-2">
            <span>{exam.courseCode}</span>
            <span aria-hidden="true">·</span>
            <span>Performance Diagnostic</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#30302E] tracking-tight mb-2">
            {scoreData.performanceTitle}
          </h1>

          <p className="text-sm sm:text-base text-[#777066] leading-relaxed mb-8">
            {scoreData.performanceNote}
            {submissionReason === 'timeout' && (
              <span className="block mt-1 font-medium text-[#7A2A22]">
                (Note: Examination submitted automatically when the 15-minute countdown expired.)
              </span>
            )}
          </p>
        </div>

        {/* Primary Score & Metric Tiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#DDD6C8]/70 mb-8">
          
          {/* Main Percentage & Score Tile */}
          <div className="p-4 rounded-xl bg-[#FAF7EF] border border-[#DDD6C8]/80">
            <span className="text-xs font-medium text-[#777066] block">Overall Score</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#30302E]">
                {scoreData.score}
              </span>
              <span className="text-xs text-[#777066]">/ {scoreData.maxScore}</span>
            </div>
            <div className="text-xs font-mono font-semibold text-[#30302E] mt-0.5">
              {scoreData.percentage}% aggregate
            </div>
          </div>

          {/* Correct Count */}
          <div className="p-4 rounded-xl bg-[#DDE9D9]/40 border border-[#B7CEB0]">
            <span className="text-xs font-medium text-[#3E5C38] block flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              Correct
            </span>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#30302E] mt-1">
              {scoreData.correctCount}
            </div>
            <span className="text-xs text-[#3E5C38]">Accurate answers</span>
          </div>

          {/* Incorrect Count */}
          <div className="p-4 rounded-xl bg-[#E9B6AC]/25 border border-[#E9B6AC]">
            <span className="text-xs font-medium text-[#7A2A22] block flex items-center gap-1.5">
              <X className="w-3.5 h-3.5 stroke-[3]" />
              Incorrect
            </span>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#30302E] mt-1">
              {scoreData.incorrectCount}
            </div>
            <span className="text-xs text-[#7A2A22]">Revisions needed</span>
          </div>

          {/* Unanswered Count */}
          <div className="p-4 rounded-xl bg-[#FAF7EF] border border-[#DDD6C8]">
            <span className="text-xs font-medium text-[#777066] block flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              Unanswered
            </span>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#777066] mt-1">
              {scoreData.unansweredCount}
            </div>
            <span className="text-xs text-[#777066]">Omitted items</span>
          </div>

        </div>

        {/* Action Controls: Retake & Return */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="text-xs text-[#777066]">
            Target benchmark: {exam.passScorePercentage}% ({Math.ceil((exam.passScorePercentage / 100) * scoreData.maxScore)} marks)
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToCatalogue}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#30302E] bg-white border border-[#DDD6C8] hover:bg-[#FAF7EF] rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Examinations</span>
            </button>

            <button
              onClick={() => onRetakeExam(exam)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#30302E] hover:bg-[#1E1E1D] active:scale-[0.98] rounded-xl shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#30302E]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Examination</span>
            </button>
          </div>
        </div>

      </section>

      {/* 2. Detailed Question-by-Question Review */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#30302E] tracking-tight">
              Detailed Question Analysis
            </h2>
            <p className="text-xs text-[#777066] mt-0.5">
              Review your recorded choices alongside the canonical correct response and underlying theory.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {scoreData.questionBreakdown.map((item, index) => {
            let statusBadge = null;

            if (!item.isAnswered) {
              statusBadge = (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[#FAF7EF] text-[#777066] border border-[#DDD6C8]">
                  <HelpCircle className="w-3 h-3" />
                  <span>Unanswered</span>
                </span>
              );
            } else if (item.isCorrect) {
              statusBadge = (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[#DDE9D9] text-[#2F4F2A] border border-[#B7CEB0]">
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span>Correct (+1)</span>
                </span>
              );
            } else {
              statusBadge = (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[#E9B6AC]/40 text-[#7A2A22] border border-[#E9B6AC]">
                  <X className="w-3 h-3 stroke-[3]" />
                  <span>Incorrect (0)</span>
                </span>
              );
            }

            return (
              <div 
                key={item.questionId}
                className="bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-7 paper-shadow space-y-4"
              >
                {/* Header item row */}
                <div className="flex items-center justify-between pb-3 border-b border-[#DDD6C8]/60">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#777066]">
                      Question {index + 1} of {scoreData.totalQuestions}
                    </span>
                  </div>
                  {statusBadge}
                </div>

                {/* Question Text */}
                <h3 className="text-base font-medium text-[#30302E] leading-relaxed">
                  {item.questionText}
                </h3>

                {/* Options Review */}
                <div className="space-y-2 pt-1">
                  {item.options.map((opt) => {
                    const isSelectedByStudent = item.selectedOptionId === opt.id;
                    const isTheCorrectOption = item.correctOptionId === opt.id;

                    let optRowClasses = 'border-[#DDD6C8] bg-white text-[#777066]';
                    let optIcon = (
                      <span className="w-5 h-5 rounded-full border border-[#DDD6C8] text-[11px] font-semibold flex items-center justify-center">
                        {opt.label}
                      </span>
                    );

                    if (isTheCorrectOption) {
                      optRowClasses = 'border-2 border-[#5B8C51] bg-[#DDE9D9]/30 text-[#25421E] font-medium';
                      optIcon = (
                        <span className="w-5 h-5 rounded-full bg-[#5B8C51] text-white text-[11px] font-bold flex items-center justify-center">
                          ✓
                        </span>
                      );
                    } else if (isSelectedByStudent && !isTheCorrectOption) {
                      optRowClasses = 'border-2 border-[#C04C40] bg-[#E9B6AC]/30 text-[#6B201A]';
                      optIcon = (
                        <span className="w-5 h-5 rounded-full bg-[#C04C40] text-white text-[11px] font-bold flex items-center justify-center">
                          ✕
                        </span>
                      );
                    }

                    return (
                      <div 
                        key={opt.id}
                        className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-3 transition-colors ${optRowClasses}`}
                      >
                        <div className="shrink-0 mt-0.5">{optIcon}</div>
                        <div className="flex-1 leading-relaxed">
                          {opt.text}
                          {isTheCorrectOption && (
                            <span className="ml-2 font-mono text-[11px] font-bold text-[#3E5C38]">
                              [Correct Answer]
                            </span>
                          )}
                          {isSelectedByStudent && !isTheCorrectOption && (
                            <span className="ml-2 font-mono text-[11px] font-bold text-[#8A2B23]">
                              [Your Response]
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                <div className="p-4 rounded-xl bg-[#FAF7EF] border border-[#DDD6C8] text-xs text-[#30302E] space-y-1">
                  <span className="font-bold text-[#777066] uppercase tracking-wider block text-[10px]">
                    Academic Rationale
                  </span>
                  <p className="leading-relaxed text-[#777066]">
                    {item.explanation}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA Row */}
        <div className="pt-6 flex justify-center items-center gap-4">
          <button
            onClick={() => onRetakeExam(exam)}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#30302E] hover:bg-[#1E1E1D] rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E]"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake This Examination</span>
          </button>
        </div>

      </section>

    </div>
  );
}
