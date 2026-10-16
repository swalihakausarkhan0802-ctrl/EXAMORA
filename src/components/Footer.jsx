import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-white border-t border-[#DDD6C8] mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#30302E] text-[#FAF7EF] flex items-center justify-center font-serif text-base font-bold">
                E
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#30302E]">
                EXAMORA
              </span>
            </div>
            <p className="text-sm text-[#777066] max-w-sm leading-relaxed">
              Think clearly. Answer boldly. Go beyond. An intentional, quiet online examination platform crafted for first-year engineering coursework.
            </p>
            <p className="text-xs text-[#777066]/80 pt-1">
              Pure React.js frontend architecture · Zero backend dependency · Local question banks
            </p>
          </div>

          {/* Nav Col */}
          <div className="md:col-span-3 space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#30302E] mb-3">
              Navigation
            </h5>
            <ul className="space-y-2 text-sm text-[#777066]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#30302E] transition-colors focus:outline-none focus-visible:underline"
                >
                  Portal Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalogue')}
                  className="hover:text-[#30302E] transition-colors focus:outline-none focus-visible:underline"
                >
                  Examination Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#30302E] transition-colors focus:outline-none focus-visible:underline"
                >
                  Academic Guidelines
                </button>
              </li>
            </ul>
          </div>

          {/* Academic Modules Col */}
          <div className="md:col-span-4 space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#30302E] mb-3">
              Active Examinations
            </h5>
            <div className="space-y-2 text-xs text-[#777066]">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#DDD6C8]/60">
                <span className="font-medium text-[#30302E]">CS101 · Java Fundamentals</span>
                <span>8 Items · 15m</span>
              </div>
              <div className="flex items-center justify-between pb-1.5 border-b border-[#DDD6C8]/60">
                <span className="font-medium text-[#30302E]">CS102 · Database Systems</span>
                <span>8 Items · 15m</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-[#30302E]">CS103 · Computer Networks</span>
                <span>8 Items · 15m</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-6 border-t border-[#DDD6C8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777066]">
          <p>© {new Date().getFullYear()} EXAMORA Examination Portal. First-Year Engineering Project.</p>
          <div className="flex items-center gap-4">
            <span>WCAG AA Accessible</span>
            <span aria-hidden="true">·</span>
            <span>Deterministic Scoring</span>
            <span aria-hidden="true">·</span>
            <span>No Telemetry</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
