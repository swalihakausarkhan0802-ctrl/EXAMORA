import React from 'react';
import { BookOpen, AlertCircle } from 'lucide-react';

/**
 * Navbar - Adheres to Top Bar Contract:
 * [Brand Wordmark] — [3 Nav Links] — [1 Primary Action]
 */
export default function Navbar({ currentView, onNavigate, isExamActive, onRequestExitExam }) {
  const handleNavClick = (viewName) => {
    if (isExamActive && currentView === 'exam-room') {
      onRequestExitExam(() => onNavigate(viewName));
    } else {
      onNavigate(viewName);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7EF]/95 backdrop-blur-md border-b border-[#DDD6C8] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text wordmark with subtle academic insignia */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E] rounded-md px-1 py-1"
        >
          <div className="w-8 h-8 rounded-lg bg-[#30302E] text-[#FAF7EF] flex items-center justify-center font-serif text-lg font-bold shadow-sm transition-transform group-hover:scale-105">
            E
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-[#30302E] whitespace-nowrap">
            EXAMORA
          </span>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#777066]" aria-label="Main Navigation">
          <button
            onClick={() => handleNavClick('home')}
            className={`whitespace-nowrap transition-colors hover:text-[#30302E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E] rounded py-1 ${
              currentView === 'home' ? 'text-[#30302E] font-semibold underline underline-offset-8 decoration-2 decoration-[#F3E39A]' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('catalogue')}
            className={`whitespace-nowrap transition-colors hover:text-[#30302E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E] rounded py-1 ${
              currentView === 'catalogue' ? 'text-[#30302E] font-semibold underline underline-offset-8 decoration-2 decoration-[#E9DFFF]' : ''
            }`}
          >
            Examinations
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`whitespace-nowrap transition-colors hover:text-[#30302E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E] rounded py-1 ${
              currentView === 'about' ? 'text-[#30302E] font-semibold underline underline-offset-8 decoration-2 decoration-[#DDE9D9]' : ''
            }`}
          >
            About & Guidelines
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {currentView === 'exam-room' ? (
            <button
              onClick={() => onRequestExitExam(() => onNavigate('catalogue'))}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#30302E] bg-[#FAF7EF] border border-[#DDD6C8] hover:bg-[#F3E39A]/40 rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E]"
            >
              <AlertCircle className="w-3.5 h-3.5 text-[#777066]" />
              Exit Session
            </button>
          ) : (
            <button
              onClick={() => handleNavClick('catalogue')}
              className="px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#30302E] rounded-lg hover:bg-[#1E1E1D] active:scale-[0.98] transition-all whitespace-nowrap shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#30302E]"
            >
              Explore Examinations
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
