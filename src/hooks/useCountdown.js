import { useState, useEffect, useRef } from 'react';

/**
 * useCountdown - A robust, stable countdown hook for examination timers.
 * 
 * @param {Object} options
 * @param {number} options.initialSeconds - Starting seconds (default 900 = 15m)
 * @param {boolean} options.isRunning - Whether timer is actively counting
 * @param {Function} options.onExpire - Callback triggered when timer hits 0
 */
export const useCountdown = ({ initialSeconds = 900, isRunning = false, onExpire }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const onExpireRef = useRef(onExpire);
  const hasExpiredRef = useRef(false);

  // Keep latest onExpire callback without triggering interval recreation
  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  // Reset or adjust if initialSeconds changes when not running
  useEffect(() => {
    setSecondsLeft(initialSeconds);
    hasExpiredRef.current = false;
  }, [initialSeconds]);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          if (!hasExpiredRef.current) {
            hasExpiredRef.current = true;
            if (typeof onExpireRef.current === 'function') {
              // Defer callback slightly to let state settle
              setTimeout(() => {
                onExpireRef.current();
              }, 0);
            }
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
  // Warning threshold: under 2 minutes (120 seconds)
  const isLowTime = secondsLeft <= 120 && secondsLeft > 0;
  const isUrgent = secondsLeft <= 30 && secondsLeft > 0;
  const isExpired = secondsLeft === 0;

  return {
    secondsLeft,
    formattedTime,
    isLowTime,
    isUrgent,
    isExpired,
    setSecondsLeft
  };
};
