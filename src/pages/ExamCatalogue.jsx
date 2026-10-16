import React, { useState } from 'react';
import ExamCard from '../components/ExamCard.jsx';
import ExamConfirmation from '../components/ExamConfirmation.jsx';
import { EXAMINATIONS } from '../data/exams.js';
import { BookOpen, Search, Sparkles, Filter } from 'lucide-react';

export default function ExamCatalogue({ onStartExam }) {
  const [selectedExamForModal, setSelectedExamForModal] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredExams = EXAMINATIONS.filter((exam) => {
    const matchesSearch = 
      exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.courseCode.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'cs') return matchesSearch && exam.category.includes('Computer Science');
    if (selectedFilter === 'systems') return matchesSearch && (exam.category.includes('Systems') || exam.category.includes('Information'));
    return matchesSearch;
  });

  const handleOpenConfirm = (exam) => {
    setSelectedExamForModal(exam);
  };

  const handleCloseConfirm = () => {
    setSelectedExamForModal(null);
  };

  const handleConfirmBegin = () => {
    if (selectedExamForModal) {
      const examToStart = selectedExamForModal;
      setSelectedExamForModal(null);
      onStartExam(examToStart);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#777066] mb-2">
          <span>Curriculum Modules</span>
          <span aria-hidden="true">·</span>
          <span>First-Year Engineering</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#30302E] tracking-tight leading-tight mb-3">
          Examination Catalogue
        </h1>
        <p className="text-base sm:text-lg text-[#777066] leading-relaxed">
          Select an academic paper to test your mastery. Each examination features 8 standardized multiple-choice items, an uninterrupted 15-minute timer, and immediate diagnostic review.
        </p>
      </div>

      {/* Filter and Search Bar (Single-line controls adhering to Anti-Slop rule) */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#DDD6C8]">
        {/* Interactive Segmented Tabs (Functional filter buttons) */}
        <div className="flex items-center gap-1.5 p-1 bg-white border border-[#DDD6C8] rounded-xl self-start">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedFilter === 'all'
                ? 'bg-[#30302E] text-white shadow-xs'
                : 'text-[#777066] hover:text-[#30302E]'
            }`}
          >
            All Papers ({EXAMINATIONS.length})
          </button>
          <button
            onClick={() => setSelectedFilter('cs')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedFilter === 'cs'
                ? 'bg-[#30302E] text-white shadow-xs'
                : 'text-[#777066] hover:text-[#30302E]'
            }`}
          >
            Programming
          </button>
          <button
            onClick={() => setSelectedFilter('systems')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedFilter === 'systems'
                ? 'bg-[#30302E] text-white shadow-xs'
                : 'text-[#777066] hover:text-[#30302E]'
            }`}
          >
            Systems & Infrastructure
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-[#777066] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search subject or code..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-[#DDD6C8] rounded-xl text-[#30302E] placeholder-[#777066] focus:outline-none focus:ring-2 focus:ring-[#30302E] transition-shadow"
          />
        </div>
      </div>

      {/* Grid of Examination Cards */}
      {filteredExams.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredExams.map((exam) => (
            <ExamCard
              key={exam.id}
              exam={exam}
              onSelectExam={handleOpenConfirm}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-[#DDD6C8] rounded-2xl p-12 text-center max-w-md mx-auto paper-shadow">
          <BookOpen className="w-8 h-8 text-[#777066] mx-auto mb-3" />
          <h3 className="font-serif text-lg font-bold text-[#30302E] mb-1">
            No examinations found
          </h3>
          <p className="text-xs text-[#777066] mb-4">
            No active test matches "{searchQuery}". Try clearing your search query.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFilter('all');
            }}
            className="px-4 py-2 text-xs font-semibold text-[#30302E] bg-[#FAF7EF] border border-[#DDD6C8] rounded-lg hover:bg-[#F3E39A]/30 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Confirmation Modal */}
      {selectedExamForModal && (
        <ExamConfirmation
          exam={selectedExamForModal}
          onConfirm={handleConfirmBegin}
          onCancel={handleCloseConfirm}
        />
      )}
    </div>
  );
}
