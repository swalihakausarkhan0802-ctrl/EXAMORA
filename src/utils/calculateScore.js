/**
 * Utility to calculate examination results accurately.
 */

export const calculateScore = (exam, userAnswers = {}) => {
  if (!exam || !exam.questions) {
    return {
      totalQuestions: 0,
      answeredCount: 0,
      unansweredCount: 0,
      correctCount: 0,
      incorrectCount: 0,
      score: 0,
      maxScore: 0,
      percentage: 0,
      status: 'Incomplete',
      statusMessage: 'No questions evaluated.'
    };
  }

  const totalQuestions = exam.questions.length;
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  const questionBreakdown = exam.questions.map((q) => {
    const selectedOptionId = userAnswers[q.id];
    const isAnswered = Boolean(selectedOptionId);
    const isCorrect = isAnswered && selectedOptionId === q.correctAnswer;

    if (!isAnswered) {
      unansweredCount += 1;
    } else if (isCorrect) {
      correctCount += 1;
    } else {
      incorrectCount += 1;
    }

    const selectedOption = q.options.find((opt) => opt.id === selectedOptionId) || null;
    const correctOption = q.options.find((opt) => opt.id === q.correctAnswer) || null;

    return {
      questionId: q.id,
      number: q.number,
      questionText: q.question,
      options: q.options,
      selectedOptionId,
      selectedOption,
      correctOptionId: q.correctAnswer,
      correctOption,
      isAnswered,
      isCorrect,
      explanation: q.explanation
    };
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const passScorePercentage = exam.passScorePercentage || 60;
  const isPassed = percentage >= passScorePercentage;

  let performanceTitle = 'Satisfactory Progress';
  let performanceNote = 'You demonstrated steady understanding across foundational questions. Review missed concepts below to reinforce your mastery.';

  if (percentage >= 90) {
    performanceTitle = 'Exceptional Mastery';
    performanceNote = 'Outstanding performance! You demonstrated comprehensive grasp of both theoretical principles and system semantics.';
  } else if (percentage >= 75) {
    performanceTitle = 'Commendable Proficiency';
    performanceNote = 'Strong conceptual grasp across the majority of topics. A quick review of subtle edge cases will elevate your score to perfection.';
  } else if (percentage < passScorePercentage) {
    performanceTitle = 'Recommended Revision';
    performanceNote = 'A solid foundation is forming, but several core concepts require deeper review before academic evaluations.';
  }

  return {
    totalQuestions,
    answeredCount: totalQuestions - unansweredCount,
    unansweredCount,
    correctCount,
    incorrectCount,
    score: correctCount,
    maxScore: totalQuestions,
    percentage,
    isPassed,
    performanceTitle,
    performanceNote,
    questionBreakdown
  };
};

export const formatDuration = (totalSeconds) => {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  const mm = String(mins).padStart(2, '0');
  const ss = String(secs).padStart(2, '0');
  return `${mm}:${ss}`;
};
