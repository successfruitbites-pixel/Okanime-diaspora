import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

export function Countdown({ targetDate, title }: { targetDate: Date; title: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now > targetDate) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: differenceInDays(targetDate, now),
        hours: differenceInHours(targetDate, now) % 24,
        minutes: differenceInMinutes(targetDate, now) % 60,
        seconds: differenceInSeconds(targetDate, now) % 60,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="bg-igbo-dark text-igbo-light p-6 rounded-xl border-t-4 border-igbo-gold shadow-xl">
      <h3 className="text-center text-igbo-gold font-semibold mb-4 uppercase tracking-wider text-sm">{title}</h3>
      <div className="flex justify-center gap-4 text-center">
        <div className="flex flex-col">
          <span className="text-3xl md:text-4xl font-bold font-mono">{timeLeft.days.toString().padStart(2, '0')}</span>
          <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">Days</span>
        </div>
        <span className="text-3xl md:text-4xl font-bold text-igbo-gold">:</span>
        <div className="flex flex-col">
          <span className="text-3xl md:text-4xl font-bold font-mono">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">Hrs</span>
        </div>
        <span className="text-3xl md:text-4xl font-bold text-igbo-gold">:</span>
        <div className="flex flex-col">
          <span className="text-3xl md:text-4xl font-bold font-mono">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">Min</span>
        </div>
        <span className="text-3xl md:text-4xl font-bold text-igbo-gold">:</span>
        <div className="flex flex-col">
          <span className="text-3xl md:text-4xl font-bold font-mono">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">Sec</span>
        </div>
      </div>
    </div>
  );
}
