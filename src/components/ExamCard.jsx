import React from 'react';
import { Clock, HelpCircle, ArrowRight, BookOpen, Layers } from 'lucide-react';

export default function ExamCard({ exam, onSelectExam }) {
  // Map subtle pastel background accents
  const accentStyles = {
    lavender: {
      border: 'hover:border-[#C5B3E8]',
      highlight: 'bg-[#E9DFFF]',
      tag: 'text-[#5E4D82]',
    },
    yellow: {
      border: 'hover:border-[#E2CE72]',
      highlight: 'bg-[#F3E39A]',
      tag: 'text-[#685817]',
    },
    sage: {
      border: 'hover:border-[#B7CEB0]',
      highlight: 'bg-[#DDE9D9]',
      tag: 'text-[#445E3D]',
    }
  }[exam.accentColor] || {
    border: 'hover:border-[#DDD6C8]',
    highlight: 'bg-[#FAF7EF]',
    tag: 'text-[#777066]',
  };

  return (
    <article className={`flex flex-col justify-between bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-7 paper-shadow paper-shadow-lift transition-all ${accentStyles.border}`}>
      <div>
        {/* Top Kicker & Code */}
        <div className="flex items-center justify-between gap-3 text-xs text-[#777066] mb-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-wider uppercase text-[#30302E]">
              {exam.courseCode}
            </span>
            <span aria-hidden="true">·</span>
            <span>{exam.category}</span>
          </div>

          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${accentStyles.highlight} ${accentStyles.tag}`}>
            {exam.difficulty}
          </span>
        </div>

        {/* Exam Title */}
        <h3 className="font-serif text-2xl font-bold text-[#30302E] leading-snug tracking-tight mb-2">
          {exam.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#777066] leading-relaxed mb-6">
          {exam.shortDescription}
        </p>

        {/* Key Metrics Strip (Zero-Pill discipline: clean unboxed text) */}
        <div className="grid grid-cols-2 gap-3 py-3 px-4 rounded-xl bg-[#FAF7EF] border border-[#DDD6C8]/70 text-xs mb-6">
          <div className="flex items-center gap-2 text-[#30302E]">
            <HelpCircle className="w-4 h-4 text-[#777066]" />
            <span>
              <strong className="font-semibold">{exam.totalQuestions}</strong> Questions
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#30302E]">
            <Clock className="w-4 h-4 text-[#777066]" />
            <span>
              <strong className="font-semibold">{exam.durationMinutes}</strong> Minutes
            </span>
          </div>
        </div>

        {/* Syllabus Coverage Topics (Clean typography with · separators) */}
        <div className="mb-6">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#777066] mb-2">
            Syllabus Topics
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#777066]">
            {exam.topics.map((topic, idx) => (
              <React.Fragment key={topic}>
                <span>{topic}</span>
                {idx < exam.topics.length - 1 && <span className="text-[#DDD6C8]" aria-hidden="true">/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-4 border-t border-[#DDD6C8]/60 flex items-center justify-between">
        <span className="text-xs text-[#777066]">
          1 mark / item · No negative penalty
        </span>
        <button
          onClick={() => onSelectExam(exam)}
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#30302E] rounded-xl hover:bg-[#1E1E1D] active:scale-[0.98] transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E]"
        >
          <span>Start Exam</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
}
