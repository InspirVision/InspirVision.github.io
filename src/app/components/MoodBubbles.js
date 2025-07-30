'use client'
import { useState, useEffect } from 'react';

// left side with calander
export function LeftMoodBubble() {
  return (
    <div
      style={{
        backgroundColor: "#f7e5ce",
        padding: "1rem",
        borderRadius: "50%",
        width: "180px",
        height: "180px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-geist-sans)",
        boxShadow: "2px 3px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div>
        <h2 className="text-md font-bold text-center mb-2">July 2025</h2>
        <div className="text-xs text-center">
          <p>Mon Tue Wed Thu Fri</p>
          <p>22  23  24  25  26</p>
          <p>29  30  31</p>
        </div>
      </div>
    </div>
  );
}

// right side with Digital clock

export function RightMoodBubble() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const timeString = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const dateString = time.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center w-full max-w-xs mx-auto border border-[#a44b08]">
      <div className="text-4xl font-mono text-[#5c2e0a] tracking-widest">
        {timeString}
      </div>
      <div className="mt-3 text-sm font-light italic text-[#7a4b26]">
        {dateString}
      </div>
    </div>
  );
}
