import React, { useEffect } from 'react';
import { X, Clock, HelpCircle, CheckCircle, ShieldAlert, ArrowRight } from 'lucide-react';

export default function ExamConfirmation({ exam, onConfirm, onCancel }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onCancel]);

  if (!exam) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#30302E]/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-8 paper-shadow-lg transform transition-all">
        
        {/* Close button */}
        <button
          onClick={onCancel}
          className="absolute top-5 right-5 p-1.5 text-[#777066] hover:text-[#30302E] hover:bg-[#FAF7EF] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#777066] mb-2">
          <span>{exam.courseCode}</span>
          <span aria-hidden="true">·</span>
          <span>Examination Confirmation</span>
        </div>

        {/* Title */}
        <h2 id="confirmation-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#30302E] leading-tight mb-3">
          {exam.title}
        </h2>

        {/* Overview paragraph */}
        <p className="text-sm text-[#777066] leading-relaxed mb-6">
          {exam.overview}
        </p>

        {/* Examination Rules & Specs Box */}
        <div className="bg-[#FAF7EF] border border-[#DDD6C8] rounded-xl p-4 sm:p-5 space-y-3 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-[#30302E]">
            Session Guidelines & Protocols
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs text-[#30302E] pt-1">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#777066]" />
              <span><strong>{exam.durationMinutes} Minutes</strong> timed duration</span>
            </div>
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#777066]" />
              <span><strong>{exam.totalQuestions} Questions</strong> multiple choice</span>
            </div>
          </div>

          <div className="border-t border-[#DDD6C8]/70 pt-3 space-y-1.5 text-xs text-[#777066]">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#30302E] shrink-0 mt-0.5" />
              <span>Free navigation: jump between questions and update answers at any time.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#30302E] shrink-0 mt-0.5" />
              <span>Continuous countdown: the timer will start immediately upon confirmation.</span>
            </div>
            <div className="flex items-start gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-[#E9B6AC] shrink-0 mt-0.5" />
              <span>Auto-submission: answers submit automatically if time reaches 00:00.</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            onClick={onCancel}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-[#777066] hover:text-[#30302E] bg-white hover:bg-[#FAF7EF] border border-[#DDD6C8] rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E]"
          >
            Cancel & Return
          </button>
          <button
            onClick={onConfirm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#30302E] hover:bg-[#1E1E1D] rounded-xl active:scale-[0.98] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#30302E]"
          >
            <span>Confirm & Begin Examination</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
