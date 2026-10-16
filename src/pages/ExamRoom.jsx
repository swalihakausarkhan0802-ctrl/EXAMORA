import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useCountdown } from '../hooks/useCountdown.js';
import ProgressBar from '../components/ProgressBar.jsx';
import QuestionNavigator from '../components/QuestionNavigator.jsx';
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  AlertTriangle, 
  CheckCircle2, 
  Send, 
  HelpCircle,
  X
} from 'lucide-react';

export default function ExamRoom({ 
  exam, 
  onFinishExam, 
  onRequestExit 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState({});
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [autoSubmittedReason, setAutoSubmittedReason] = useState(null);

  // Prevention of double submissions
  const isSubmittedRef = useRef(false);

  const totalQuestions = exam?.questions?.length || 0;
  const currentQuestion = exam?.questions?.[currentIndex] || null;
  const questionIds = exam?.questions?.map((q) => q.id) || [];

  // Centralized submission function
  const handleFinalSubmit = useCallback((reason = 'manual') => {
    if (isSubmittedRef.current) return;
    isSubmittedRef.current = true;

    setShowSubmitModal(false);
    onFinishExam({
      exam,
      answers,
      submittedAt: new Date().toISOString(),
      submissionReason: reason
    });
  }, [exam, answers, onFinishExam]);

  // Hook up countdown timer with auto-submit on expire
  const { 
    secondsLeft, 
    formattedTime, 
    isLowTime, 
    isUrgent, 
    isExpired 
  } = useCountdown({
    initialSeconds: exam?.durationSeconds || 900,
    isRunning: !isSubmittedRef.current,
    onExpire: () => {
      setAutoSubmittedReason('Time limit reached. Your answers are being automatically submitted.');
      handleFinalSubmit('timeout');
    }
  });

  // Handle option select
  const handleSelectOption = (optionId) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  // Toggle flag for review
  const handleToggleFlag = () => {
    if (!currentQuestion) return;
    setFlagged((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  // Navigation handlers
  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Keyboard shortcut listener: 1-4 for options, arrows for prev/next
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showSubmitModal) return;

      if (e.key === 'ArrowLeft') {
        handlePrevQuestion();
      } else if (e.key === 'ArrowRight') {
        handleNextQuestion();
      } else if (['1', '2', '3', '4'].includes(e.key) && currentQuestion) {
        const optionIndex = parseInt(e.key, 10) - 1;
        if (currentQuestion.options[optionIndex]) {
          handleSelectOption(currentQuestion.options[optionIndex].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentQuestion, showSubmitModal]);

  const answeredCount = Object.keys(answers).filter((k) => answers[k]).length;
  const unansweredCount = totalQuestions - answeredCount;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  if (!exam || !currentQuestion) {
    return (
      <div className="max-w-xl mx-auto py-20 text-center">
        <p className="text-sm text-[#777066]">No examination loaded.</p>
        <button 
          onClick={onRequestExit}
          className="mt-4 px-4 py-2 bg-[#30302E] text-white text-xs font-semibold rounded-lg"
        >
          Return to Catalogue
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4.5rem)] bg-[#FAF7EF] py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Control Bar: Subject Title, Question Count, and Live Timer */}
        <div className="bg-white border border-[#DDD6C8] rounded-2xl px-5 py-4 paper-shadow flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#777066]">
              <span className="font-semibold text-[#30302E]">{exam.courseCode}</span>
              <span aria-hidden="true">·</span>
              <span>{exam.title}</span>
            </div>
            <div className="font-serif text-lg font-bold text-[#30302E] mt-0.5">
              Question {currentIndex + 1} of {totalQuestions}
            </div>
          </div>

          {/* Timer Display with Warning States */}
          <div className="flex items-center gap-4">
            <div 
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all ${
                isLowTime
                  ? 'bg-[#E9B6AC]/25 border-[#E9B6AC] text-[#7A2A22]'
                  : 'bg-[#FAF7EF] border-[#DDD6C8] text-[#30302E]'
              }`}
              title={isLowTime ? 'Less than 2 minutes remaining' : 'Time remaining'}
            >
              <Clock className={`w-4 h-4 ${isLowTime ? 'text-[#7A2A22] animate-pulse' : 'text-[#777066]'}`} />
              <span className="font-mono text-base tracking-wider tabular-nums font-bold">
                {formattedTime}
              </span>
              {isLowTime && (
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A2A22] hidden sm:inline">
                  Final Minutes
                </span>
              )}
            </div>

            {/* Quick Finish CTA */}
            <button
              onClick={() => setShowSubmitModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#30302E] hover:bg-[#1E1E1D] rounded-xl transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Exam</span>
            </button>
          </div>
        </div>

        {/* Timeout Banner Notification if triggered */}
        {autoSubmittedReason && (
          <div className="bg-[#E9B6AC]/30 border border-[#E9B6AC] rounded-xl p-4 flex items-center gap-3 text-xs text-[#7A2A22] font-medium">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{autoSubmittedReason}</span>
          </div>
        )}

        {/* Main Grid: Left Question Stage (8 cols) vs Right Sidebar Navigator (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Question Card Stage */}
          <main className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-8 paper-shadow">
              
              {/* Question Header & Review Flag Toggle */}
              <div className="flex items-center justify-between pb-4 border-b border-[#DDD6C8]/70 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#FAF7EF] border border-[#DDD6C8] text-[#30302E] flex items-center justify-center font-mono text-xs font-bold">
                    {currentIndex + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#777066]">
                    Standard Multiple Choice
                  </span>
                </div>

                <button
                  onClick={handleToggleFlag}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                    flagged[currentQuestion.id]
                      ? 'bg-[#F3E39A] border-[#D8C76D] text-[#30302E]'
                      : 'bg-white border-[#DDD6C8] text-[#777066] hover:text-[#30302E]'
                  }`}
                  aria-pressed={Boolean(flagged[currentQuestion.id])}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>
                    {flagged[currentQuestion.id] ? 'Flagged for Review' : 'Flag Question'}
                  </span>
                </button>
              </div>

              {/* Question Statement */}
              <div className="mb-8">
                <h2 className="text-lg sm:text-xl font-medium text-[#30302E] leading-relaxed">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* 4 Selectable Answer Options */}
              <div 
                className="space-y-3"
                role="radiogroup"
                aria-label={`Options for Question ${currentIndex + 1}`}
              >
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion.id] === option.id;

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option.id)}
                      role="radio"
                      aria-checked={isSelected}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E] ${
                        isSelected
                          ? 'border-2 border-[#30302E] bg-[#E9DFFF]/35 shadow-xs'
                          : 'border-[#DDD6C8] bg-white hover:border-[#30302E]/60 hover:bg-[#FAF7EF]/60'
                      }`}
                    >
                      {/* Option Letter Indicator */}
                      <div 
                        className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-xs font-bold transition-colors mt-0.5 ${
                          isSelected
                            ? 'bg-[#30302E] text-white shadow-xs'
                            : 'border border-[#DDD6C8] text-[#777066] group-hover:border-[#30302E]'
                        }`}
                      >
                        {option.label}
                      </div>

                      {/* Option Text */}
                      <div className="flex-1 text-sm font-normal text-[#30302E] leading-relaxed pt-0.5">
                        {option.text}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Keyboard helper hint */}
              <div className="pt-6 mt-6 border-t border-[#DDD6C8]/60 flex items-center justify-between text-xs text-[#777066]">
                <div className="hidden sm:flex items-center gap-2">
                  <span className="px-1.5 py-0.5 bg-[#FAF7EF] border border-[#DDD6C8] rounded text-[10px] font-mono">1-4</span>
                  <span>Select option</span>
                  <span aria-hidden="true">·</span>
                  <span className="px-1.5 py-0.5 bg-[#FAF7EF] border border-[#DDD6C8] rounded text-[10px] font-mono">← / →</span>
                  <span>Navigate items</span>
                </div>

                <div className="text-right ml-auto">
                  {answers[currentQuestion.id] ? (
                    <span className="text-[#30302E] font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#30302E]" />
                      Response recorded
                    </span>
                  ) : (
                    <span className="text-[#777066]">Unanswered</span>
                  )}
                </div>
              </div>

            </div>

            {/* Bottom Navigation Buttons: Previous, Next, and Final Submit */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <button
                onClick={handlePrevQuestion}
                disabled={currentIndex === 0}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E] ${
                  currentIndex === 0
                    ? 'opacity-40 cursor-not-allowed border-[#DDD6C8] bg-white text-[#777066]'
                    : 'bg-white border-[#DDD6C8] text-[#30302E] hover:bg-[#FAF7EF]'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Question</span>
              </button>

              <div className="flex items-center gap-3">
                {isLastQuestion ? (
                  <button
                    onClick={() => setShowSubmitModal(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#30302E] hover:bg-[#1E1E1D] rounded-xl shadow-xs transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#30302E]"
                  >
                    <span>Finish & Submit</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#30302E] hover:bg-[#1E1E1D] rounded-xl shadow-xs transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#30302E]"
                  >
                    <span>Next Question</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

          </main>

          {/* Right Sidebar: Progress + Question Navigator */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Progress Card */}
            <div className="bg-white border border-[#DDD6C8] rounded-2xl p-5 sm:p-6 paper-shadow">
              <ProgressBar
                current={answeredCount}
                total={totalQuestions}
                percentage={Math.round((answeredCount / totalQuestions) * 100)}
              />
              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#DDD6C8]/60 text-xs">
                <div>
                  <span className="text-[#777066] block">Answered</span>
                  <span className="font-serif text-lg font-bold text-[#30302E]">
                    {answeredCount}
                  </span>
                </div>
                <div>
                  <span className="text-[#777066] block">Unanswered</span>
                  <span className="font-serif text-lg font-bold text-[#777066]">
                    {unansweredCount}
                  </span>
                </div>
              </div>
            </div>

            {/* Question Navigator */}
            <QuestionNavigator
              totalQuestions={totalQuestions}
              currentIndex={currentIndex}
              onSelectIndex={setCurrentIndex}
              answers={answers}
              flagged={flagged}
              questionIds={questionIds}
            />

            {/* Session Protocol Card */}
            <div className="p-4 rounded-xl bg-[#FAF7EF] border border-[#DDD6C8] text-xs text-[#777066] space-y-2">
              <div className="font-semibold text-[#30302E]">Continuous Autosave</div>
              <p>
                Every selection is preserved in local state immediately. You can safely cycle between items without loss.
              </p>
            </div>

          </aside>

        </div>

      </div>

      {/* Submission Confirmation Modal */}
      {showSubmitModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#30302E]/60 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-8 max-w-md w-full paper-shadow-lg relative">
            <button
              onClick={() => setShowSubmitModal(false)}
              className="absolute top-5 right-5 p-1 text-[#777066] hover:text-[#30302E] rounded-lg"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl font-bold text-[#30302E] mb-2">
              Submit Examination?
            </h3>

            <p className="text-sm text-[#777066] leading-relaxed mb-5">
              Are you ready to submit your responses for final grading? Once submitted, your answers cannot be altered.
            </p>

            {/* Unanswered items warning */}
            {unansweredCount > 0 && (
              <div className="p-4 rounded-xl bg-[#F3E39A]/30 border border-[#D8C76D] mb-5 text-xs text-[#4E4112] flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 shrink-0 text-[#8C761C] mt-0.5" />
                <div>
                  <strong>{unansweredCount} question{unansweredCount > 1 ? 's' : ''} remaining unanswered.</strong>
                  <p className="mt-0.5 text-[#635520]">
                    You have {formattedTime} remaining. You may return to complete them or submit as is.
                  </p>
                </div>
              </div>
            )}

            <div className="bg-[#FAF7EF] border border-[#DDD6C8] rounded-xl p-3 mb-6 text-xs text-[#30302E] flex justify-between">
              <span>Total Questions: <strong>{totalQuestions}</strong></span>
              <span>Answered: <strong>{answeredCount}</strong></span>
              <span>Time Left: <strong>{formattedTime}</strong></span>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2.5 text-xs font-semibold text-[#777066] hover:text-[#30302E] border border-[#DDD6C8] rounded-xl bg-white hover:bg-[#FAF7EF]"
              >
                Return to Exam
              </button>
              <button
                onClick={() => handleFinalSubmit('manual')}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#30302E] hover:bg-[#1E1E1D] rounded-xl shadow-xs"
              >
                Confirm & Grade
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
