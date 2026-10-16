import React from 'react';
import { ArrowRight, Clock, CheckCircle2, Award, Sparkles, BookOpen } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Subtle paper background texture / geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#F3E39A]/20 blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-[#E9DFFF]/25 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            {/* Editorial micro-kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#777066] border-b border-[#DDD6C8] pb-1">
              <span>The Exam Experience</span>
              <span className="text-[#DDD6C8]">·</span>
              <span>Learn. Prepare. Perform.</span>
            </div>

            {/* Signature Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#30302E] leading-[1.08] tracking-tight text-balance">
              Think clearly.<br />
              Answer boldly.<br />
              <span className="inline-block mt-1 px-3 py-0.5 rounded-lg bg-[#E9DFFF] text-[#30302E] border border-[#D5C2F8] shadow-sm transform -rotate-1">
                Go beyond.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#777066] font-normal leading-relaxed max-w-lg">
              A calmer, smarter space to put your knowledge to the test. Purpose-built for engineering students seeking clarity, real evaluation, and zero friction.
            </p>

            {/* Primary CTA and Supporting Metric */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#30302E] rounded-xl hover:bg-[#1E1E1D] active:scale-[0.98] transition-all shadow-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#30302E]"
              >
                <span>Explore Examinations</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#777066] px-1 py-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#DDE9D9] border border-[#777066]/30"></span>
                <span>Active 2026 Academic Bank · 3 Core Subjects</span>
              </div>
            </div>

            {/* Quick Proof Kicker */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#DDD6C8] w-full max-w-md">
              <div>
                <p className="font-serif text-2xl font-bold text-[#30302E]">15 min</p>
                <p className="text-xs text-[#777066] mt-0.5">Strict Exam Sessions</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#30302E]">100%</p>
                <p className="text-xs text-[#777066] mt-0.5">Objective Scoring</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#30302E]">Instant</p>
                <p className="text-xs text-[#777066] mt-0.5">Concept Analysis</p>
              </div>
            </div>

          </div>

          {/* Right Column: Custom CSS & SVG Physical Exam Paper Illustration */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-6">
            
            {/* Background Layer 1: Butter Yellow tilted card */}
            <div 
              className="absolute w-72 sm:w-84 h-96 sm:h-104 rounded-2xl bg-[#F3E39A] border border-[#E4D17D] shadow-md -rotate-6 transform -translate-x-4 translate-y-3 pointer-events-none transition-transform duration-500"
              aria-hidden="true"
            >
              <div className="p-6 opacity-40 font-mono text-xs text-[#30302E] space-y-2 select-none">
                <div className="h-2 w-16 bg-[#30302E]/20 rounded"></div>
                <div className="h-2 w-32 bg-[#30302E]/20 rounded"></div>
                <div className="h-2 w-24 bg-[#30302E]/20 rounded"></div>
              </div>
            </div>

            {/* Background Layer 2: Dusty Lavender card */}
            <div 
              className="absolute w-72 sm:w-84 h-96 sm:h-104 rounded-2xl bg-[#E9DFFF] border border-[#D5C2F8] shadow-md rotate-4 transform translate-x-4 -translate-y-2 pointer-events-none transition-transform duration-500"
              aria-hidden="true"
            >
              <div className="p-6 opacity-40 font-mono text-xs text-[#30302E] space-y-2 select-none">
                <div className="h-2 w-20 bg-[#30302E]/20 rounded"></div>
                <div className="h-2 w-28 bg-[#30302E]/20 rounded"></div>
              </div>
            </div>

            {/* Foreground Layer: Crisp Primary Physical Examination Sheet */}
            <div className="relative w-full max-w-md bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-7 paper-shadow-lg animate-float">
              
              {/* Paper Header / Metadata */}
              <div className="flex items-center justify-between pb-4 border-b border-[#DDD6C8]/80 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#777066]">
                      Paper CS101
                    </span>
                    <span className="text-xs text-[#DDD6C8]">·</span>
                    <span className="text-[11px] font-medium text-[#777066]">
                      Semester I
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#30302E] mt-0.5">
                    Java Fundamentals
                  </h3>
                </div>

                {/* Floating Timer Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7EF] border border-[#DDD6C8] shadow-sm text-xs font-semibold text-[#30302E]">
                  <Clock className="w-3.5 h-3.5 text-[#30302E]" />
                  <span className="font-mono tabular-nums">14:18 left</span>
                </div>
              </div>

              {/* Progress Indicator Row */}
              <div className="mb-5">
                <div className="flex items-center justify-between text-xs text-[#777066] mb-1.5">
                  <span className="font-medium">Question 4 of 8</span>
                  <span className="font-mono text-[11px]">87% Answered</span>
                </div>
                <div className="w-full h-1.5 bg-[#FAF7EF] rounded-full overflow-hidden border border-[#DDD6C8]/60">
                  <div className="h-full bg-[#30302E] rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>

              {/* Sample Multiple-Choice Question */}
              <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#777066] mb-1">
                  Item 04 · Object Semantics
                </p>
                <p className="text-sm font-medium text-[#30302E] leading-snug">
                  Where are local primitive variables stored during Java method execution?
                </p>
              </div>

              {/* 4 Answer Rows */}
              <div className="space-y-2 mb-5">
                {/* Option A (Unselected) */}
                <div className="flex items-center gap-3 p-2.5 rounded-lg border border-[#DDD6C8] bg-white transition-colors">
                  <div className="w-5 h-5 rounded-full border border-[#DDD6C8] flex items-center justify-center text-[11px] font-semibold text-[#777066]">
                    A
                  </div>
                  <span className="text-xs text-[#777066]">Heap memory with class metadata</span>
                </div>

                {/* Option B (Selected with Lavender Accent) */}
                <div className="flex items-center gap-3 p-2.5 rounded-lg border-2 border-[#30302E] bg-[#E9DFFF]/40 shadow-sm transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#30302E] text-white flex items-center justify-center text-[11px] font-bold">
                    ✓
                  </div>
                  <span className="text-xs font-semibold text-[#30302E]">
                    Stack frame of the executing thread
                  </span>
                </div>

                {/* Option C (Unselected) */}
                <div className="flex items-center gap-3 p-2.5 rounded-lg border border-[#DDD6C8] bg-white transition-colors">
                  <div className="w-5 h-5 rounded-full border border-[#DDD6C8] flex items-center justify-center text-[11px] font-semibold text-[#777066]">
                    C
                  </div>
                  <span className="text-xs text-[#777066]">Metaspace permanent memory</span>
                </div>

                {/* Option D (Unselected) */}
                <div className="flex items-center gap-3 p-2.5 rounded-lg border border-[#DDD6C8] bg-white transition-colors">
                  <div className="w-5 h-5 rounded-full border border-[#DDD6C8] flex items-center justify-center text-[11px] font-semibold text-[#777066]">
                    D
                  </div>
                  <span className="text-xs text-[#777066]">Shared String Constant Pool</span>
                </div>
              </div>

              {/* Distinction Stamp / Completion Marker */}
              <div className="pt-3 border-t border-[#DDD6C8]/60 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#777066]">
                  <CheckCircle2 className="w-4 h-4 text-[#777066]" />
                  <span>Autosave active</span>
                </div>

                {/* Stamp Seal */}
                <div className="rotate-3 border-2 border-dashed border-[#E9B6AC] bg-[#FAF7EF] px-3 py-1 rounded text-center shadow-xs">
                  <span className="block font-serif text-[11px] font-bold uppercase tracking-wider text-[#30302E]">
                    Distinction Standard
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
