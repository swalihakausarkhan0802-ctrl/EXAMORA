import React from 'react';
import Hero from '../components/Hero.jsx';
import ExamCard from '../components/ExamCard.jsx';
import { EXAMINATIONS } from '../data/exams.js';
import { ArrowRight, BookOpen, Clock, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Home({ onNavigate, onSelectExam }) {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <Hero onExploreClick={() => onNavigate('catalogue')} />

      {/* 2. Supporting Brand Section: "Everything you need. Nothing in your way." */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#777066] mb-3">
            <span>Philosophy & Design</span>
            <span aria-hidden="true">·</span>
            <span>Zero Cognitive Load</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#30302E] tracking-tight leading-tight mb-4">
            Everything you need. Nothing in your way.
          </h2>
          <p className="text-base sm:text-lg text-[#777066] leading-relaxed">
            Most online test portals suffer from busy dashboards, aggressive timers, and distracting widgets. EXAMORA strips away the clutter so your focus stays on the problem.
          </p>
        </div>

        {/* 3 Core Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <div className="bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-7 paper-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7EF] border border-[#DDD6C8] flex items-center justify-center text-[#30302E] mb-5">
              <span className="font-serif font-bold text-lg">01</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#30302E] mb-2">
              Calm Typographic Clarity
            </h3>
            <p className="text-sm text-[#777066] leading-relaxed">
              Every font size, contrast level, and paper-tinted surface is calibrated to reduce eye strain and anxiety during sustained testing periods.
            </p>
          </div>

          <div className="bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-7 paper-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7EF] border border-[#DDD6C8] flex items-center justify-center text-[#30302E] mb-5">
              <span className="font-serif font-bold text-lg">02</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#30302E] mb-2">
              Controlled Countdown Clock
            </h3>
            <p className="text-sm text-[#777066] leading-relaxed">
              Synchronized 15-minute countdown starts strictly after your confirmation. Automatic submission ensures your work is recorded if time expires.
            </p>
          </div>

          <div className="bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-7 paper-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7EF] border border-[#DDD6C8] flex items-center justify-center text-[#30302E] mb-5">
              <span className="font-serif font-bold text-lg">03</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#30302E] mb-2">
              Deep Conceptual Analysis
            </h3>
            <p className="text-sm text-[#777066] leading-relaxed">
              Beyond a raw score, every question is paired with a verified explanation so you immediately understand the theory behind every correct answer.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Featured Examinations Catalogue Strip */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#777066] mb-1">
              Active Question Banks
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#30302E] tracking-tight">
              Curated Coursework Examinations
            </h2>
          </div>
          <button
            onClick={() => onNavigate('catalogue')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#30302E] hover:text-[#1E1E1D] underline underline-offset-4 decoration-[#DDD6C8] hover:decoration-[#30302E] transition-all"
          >
            <span>View all 3 modules</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {EXAMINATIONS.map((exam) => (
            <ExamCard
              key={exam.id}
              exam={exam}
              onSelectExam={onSelectExam}
            />
          ))}
        </div>
      </section>

      {/* 4. Academic Examination Protocols & Guidelines */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white border border-[#DDD6C8] rounded-2xl p-8 sm:p-10 paper-shadow">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#777066]">
                Academic Code & Conduct
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#30302E] leading-snug">
                Student Examination Protocols
              </h3>
              <p className="text-sm text-[#777066] leading-relaxed">
                Review the examination rules before launching a paper. The platform operates on determinism and fair evaluation.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#30302E]">
              <div className="p-4 rounded-xl bg-[#FAF7EF] border border-[#DDD6C8]/70 space-y-1.5">
                <span className="font-semibold block text-sm">1. Timed Sessions</span>
                <p className="text-[#777066] leading-relaxed">
                  Each test runs for exactly 15 minutes. The timer begins the moment you click "Confirm & Begin".
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7EF] border border-[#DDD6C8]/70 space-y-1.5">
                <span className="font-semibold block text-sm">2. Free Item Revisit</span>
                <p className="text-[#777066] leading-relaxed">
                  You can jump backwards and forwards between items without penalty. All selections are preserved.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7EF] border border-[#DDD6C8]/70 space-y-1.5">
                <span className="font-semibold block text-sm">3. Review Flags</span>
                <p className="text-[#777066] leading-relaxed">
                  Flag uncertain items to revisit later using the numbered question navigator sidebar.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7EF] border border-[#DDD6C8]/70 space-y-1.5">
                <span className="font-semibold block text-sm">4. Automatic Grading</span>
                <p className="text-[#777066] leading-relaxed">
                  Instant evaluation with comprehensive breakdowns upon manual submission or timer expiry.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
