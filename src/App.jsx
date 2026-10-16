import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ExamCatalogue from './pages/ExamCatalogue.jsx';
import ExamRoom from './pages/ExamRoom.jsx';
import Results from './pages/Results.jsx';
import About from './pages/About.jsx';
import ExamConfirmation from './components/ExamConfirmation.jsx';
import { AlertTriangle, X } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'catalogue' | 'exam-room' | 'results' | 'about'
  const [activeExam, setActiveExam] = useState(null);
  const [examResults, setExamResults] = useState(null);
  
  // Pending exit state when student is in active exam
  const [abandonPendingAction, setAbandonPendingAction] = useState(null);

  // Quick launch modal from Home page
  const [quickLaunchExam, setQuickLaunchExam] = useState(null);

  // Navigate handler
  const handleNavigate = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start Exam flow
  const handleStartExam = (exam) => {
    setActiveExam(exam);
    setExamResults(null);
    setCurrentView('exam-room');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Finish / Submit Exam flow
  const handleFinishExam = (submissionData) => {
    setExamResults(submissionData);
    setCurrentView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retake Exam flow
  const handleRetakeExam = (exam) => {
    setActiveExam(exam);
    setExamResults(null);
    setCurrentView('exam-room');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Request to exit an active examination
  const handleRequestExitExam = (onConfirmExit) => {
    setAbandonPendingAction(() => onConfirmExit);
  };

  const handleConfirmAbandon = () => {
    if (abandonPendingAction) {
      abandonPendingAction();
    } else {
      setCurrentView('catalogue');
    }
    setActiveExam(null);
    setAbandonPendingAction(null);
  };

  const handleCancelAbandon = () => {
    setAbandonPendingAction(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7EF] text-[#30302E]">
      {/* Top Bar Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        isExamActive={currentView === 'exam-room' && Boolean(activeExam)}
        onRequestExitExam={handleRequestExitExam}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onSelectExam={(exam) => setQuickLaunchExam(exam)}
          />
        )}

        {currentView === 'catalogue' && (
          <ExamCatalogue
            onStartExam={handleStartExam}
          />
        )}

        {currentView === 'exam-room' && activeExam && (
          <ExamRoom
            exam={activeExam}
            onFinishExam={handleFinishExam}
            onRequestExit={() => handleRequestExitExam(() => handleNavigate('catalogue'))}
          />
        )}

        {currentView === 'results' && examResults && (
          <Results
            resultData={examResults}
            onRetakeExam={handleRetakeExam}
            onBackToCatalogue={() => handleNavigate('catalogue')}
          />
        )}

        {currentView === 'about' && (
          <About
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer (hidden inside active exam room for absolute focus) */}
      {currentView !== 'exam-room' && (
        <Footer onNavigate={handleNavigate} />
      )}

      {/* Quick Launch Confirmation Dialog (when launched from Home page) */}
      {quickLaunchExam && (
        <ExamConfirmation
          exam={quickLaunchExam}
          onConfirm={() => {
            const ex = quickLaunchExam;
            setQuickLaunchExam(null);
            handleStartExam(ex);
          }}
          onCancel={() => setQuickLaunchExam(null)}
        />
      )}

      {/* Abandon Examination Confirmation Modal */}
      {abandonPendingAction && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#30302E]/60 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-7 max-w-md w-full paper-shadow-lg relative">
            <button
              onClick={handleCancelAbandon}
              className="absolute top-5 right-5 p-1 text-[#777066] hover:text-[#30302E] rounded-lg"
              aria-label="Cancel"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A2A22] mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Session In Progress</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#30302E] mb-2">
              Abandon Examination?
            </h3>

            <p className="text-sm text-[#777066] leading-relaxed mb-6">
              You are currently inside an active timed examination session. If you leave now, your current answers will be discarded and the countdown will terminate.
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={handleCancelAbandon}
                className="px-4 py-2.5 text-xs font-semibold text-[#30302E] bg-white border border-[#DDD6C8] hover:bg-[#FAF7EF] rounded-xl transition-colors"
              >
                Resume Examination
              </button>
              <button
                onClick={handleConfirmAbandon}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-[#8A2B23] hover:bg-[#72211A] rounded-xl shadow-xs transition-colors"
              >
                Discard & Leave
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
