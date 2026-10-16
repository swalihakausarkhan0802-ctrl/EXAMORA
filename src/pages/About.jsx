import React from 'react';
import { BookOpen, Shield, Clock, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About({ onNavigate }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#777066] mb-2">
          <span>About EXAMORA</span>
          <span aria-hidden="true">·</span>
          <span>Academic Portal Brief</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#30302E] tracking-tight mb-4">
          Built for clarity.<br />Engineered for truth.
        </h1>
        <p className="text-base sm:text-lg text-[#777066] leading-relaxed">
          EXAMORA was conceived as a first-year engineering coursework assignment to rethink digital examinations. Standard examination software often burdens students with aggressive countdown animations, cluttered toolbars, and opaque scoring. We prioritized editorial typography, calm paper aesthetics, and instant diagnostic feedback.
        </p>
      </div>

      {/* Design Principles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        <div className="p-6 rounded-2xl bg-white border border-[#DDD6C8] paper-shadow space-y-3">
          <div className="w-8 h-8 rounded-lg bg-[#E9DFFF] flex items-center justify-center text-[#30302E] font-serif font-bold text-sm">
            01
          </div>
          <h3 className="font-serif text-xl font-bold text-[#30302E]">
            Zero Cognitive Noise
          </h3>
          <p className="text-sm text-[#777066] leading-relaxed">
            Pastel tones (#FAF7EF warm paper, #E9DFFF dusty lavender, #F3E39A butter yellow) keep contrast readable without inducing screen fatigue.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#DDD6C8] paper-shadow space-y-3">
          <div className="w-8 h-8 rounded-lg bg-[#F3E39A] flex items-center justify-center text-[#30302E] font-serif font-bold text-sm">
            02
          </div>
          <h3 className="font-serif text-xl font-bold text-[#30302E]">
            Continuous Determinism
          </h3>
          <p className="text-sm text-[#777066] leading-relaxed">
            All grading is deterministic and local. Every multiple-choice question is validated directly against canonical academic solutions.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#DDD6C8] paper-shadow space-y-3">
          <div className="w-8 h-8 rounded-lg bg-[#DDE9D9] flex items-center justify-center text-[#30302E] font-serif font-bold text-sm">
            03
          </div>
          <h3 className="font-serif text-xl font-bold text-[#30302E]">
            No Backend Fragility
          </h3>
          <p className="text-sm text-[#777066] leading-relaxed">
            Implemented strictly in pure React JS with client state management. Runs reliably offline and locally without server latency.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#DDD6C8] paper-shadow space-y-3">
          <div className="w-8 h-8 rounded-lg bg-[#E9B6AC]/40 flex items-center justify-center text-[#30302E] font-serif font-bold text-sm">
            04
          </div>
          <h3 className="font-serif text-xl font-bold text-[#30302E]">
            Educational Feedback Loop
          </h3>
          <p className="text-sm text-[#777066] leading-relaxed">
            Results provide not just numbers, but thorough concept-level rationales so the student learns from each attempt.
          </p>
        </div>

      </div>

      {/* Examination Protocol Specification */}
      <div className="bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-8 paper-shadow space-y-6">
        <h3 className="font-serif text-2xl font-bold text-[#30302E]">
          Standard Examination Regulations
        </h3>

        <div className="space-y-3 text-sm text-[#777066]">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#30302E] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#30302E]">Session Timing:</strong> Exactly 15 minutes (900 seconds) allotted per examination. The countdown begins only after the candidate acknowledges the confirmation modal.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#30302E] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#30302E]">Scoring Scheme:</strong> Standard 1 mark awarded per correct answer. Zero negative marking for incorrect or omitted items.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#30302E] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#30302E]">Navigation Liberty:</strong> Candidates may toggle between any of the 8 items freely via the Question Navigator or keyboard shortcuts (1-4, arrow keys).
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#30302E] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#30302E]">Submission Safeguards:</strong> In the event the timer reaches 00:00, the system automatically grades all responses recorded in state without loss.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-[#DDD6C8]/60 flex items-center justify-between">
          <span className="text-xs text-[#777066]">
            Department of Computer Science & Engineering
          </span>
          <button
            onClick={() => onNavigate('catalogue')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#30302E] rounded-xl hover:bg-[#1E1E1D] transition-colors"
          >
            <span>Begin a Test</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}
