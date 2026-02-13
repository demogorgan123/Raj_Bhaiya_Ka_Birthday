import React, { useState, useEffect, useRef } from 'react';

const LOGS = [
  { text: "initializing respect.exe...", color: "text-gray-400" },
  { text: "loading core_memories...", color: "text-yellow-400" },
  { text: "compiling gratitude...", color: "text-blue-400" },
  { text: "optimizing joy algorithms...", color: "text-purple-400" },
  { text: "SUCCESS: Best Senior Found.", color: "text-neon-green font-bold" },
  { text: "executing: birthday_wishes.sh", color: "text-white" },
];

const TerminalTribute: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount(prev => {
        if (prev < LOGS.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Auto scroll
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleCount]);

  return (
    <section className="py-20 px-4 flex justify-center items-center bg-slate-900/50 relative overflow-hidden">
      <div className="w-full max-w-3xl relative z-10">
        
        {/* Terminal Header */}
        <div className="bg-slate-800 rounded-t-lg p-3 flex items-center gap-2 border border-slate-700">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-xs text-slate-400 font-mono">raj_bhaiya_tribute — bash — 80x24</div>
        </div>

        {/* Terminal Body */}
        <div 
          ref={containerRef}
          className="bg-slate-950/90 border-x border-b border-slate-700 rounded-b-lg p-6 font-mono text-sm md:text-base h-64 overflow-y-auto shadow-2xl backdrop-blur-sm"
        >
          {LOGS.slice(0, visibleCount).map((log, index) => (
            <div key={index} className={`mb-2 ${log.color}`}>
              <span className="text-slate-600 mr-2">$</span>
              {log.text}
            </div>
          ))}
          <div className="animate-cursor inline-block w-2 h-4 bg-neon-green ml-2 align-middle"></div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-900/[0.1] -z-10"></div>
    </section>
  );
};

export default TerminalTribute;