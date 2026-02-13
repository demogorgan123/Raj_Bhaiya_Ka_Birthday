import React, { useState, useEffect, useRef } from 'react';
import { PartyPopper, Play, CheckCircle, Volume2, VolumeX } from 'lucide-react';

const Celebration: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio
  useEffect(() => {
    // Using a fun 8-bit chiptune track that fits the hacker/retro theme
    audioRef.current = new Audio("https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
      setIsPlaying(true);
    }
  };

  const handleRunScript = () => {
    if (isRunning) return;
    setIsRunning(true);
    
    // Start Music
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
      setIsPlaying(true);
    }
    
    // Initial blast
    triggerConfetti();

    // Random bursts
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      triggerConfetti();
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        setIsRunning(false);
        setIsDone(true);
      }
    };
    frame();
  };

  const triggerConfetti = () => {
    if (window.confetti) {
      window.confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#00f3ff', '#bc13fe', '#0aff0a']
      });
      window.confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#00f3ff', '#bc13fe', '#0aff0a']
      });
    }
  };

  return (
    <section className="py-24 px-4 text-center relative">
      <div className="max-w-2xl mx-auto">
        <PartyPopper className="w-16 h-16 text-neon-purple mx-auto mb-6 animate-bounce" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Celebrate?
        </h2>
        <p className="text-slate-400 mb-10 text-lg">
          We've compiled a special celebration package just for you.
          Execute the script below to unpack the joy!
        </p>

        <div className="flex flex-col items-center gap-6">
          <button
            onClick={handleRunScript}
            disabled={isDone}
            className={`
              group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300
              ${isDone 
                ? 'bg-slate-800 text-green-400 border border-green-500/50 cursor-default' 
                : 'bg-gradient-to-r from-neon-blue to-neon-purple text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(188,19,254,0.5)]'
              }
            `}
          >
            {isDone ? (
              <>
                <CheckCircle className="w-6 h-6" />
                <span>Script Executed Successfully</span>
              </>
            ) : (
              <>
                <Play className="w-6 h-6 fill-current" />
                <span>{isRunning ? 'Running Script...' : 'Run Birthday Script'}</span>
              </>
            )}
            
            {/* Button Glow Effect */}
            {!isDone && (
              <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            )}
          </button>

          {/* Music Control - Appears after interaction or if playing */}
          {(isPlaying || isDone) && (
            <button 
              onClick={toggleMusic}
              className="flex items-center gap-2 text-sm font-mono text-neon-blue hover:text-white transition-colors bg-slate-900/50 px-4 py-2 rounded-full border border-slate-700"
            >
              {isPlaying ? <Volume2 size={16} className="animate-pulse" /> : <VolumeX size={16} />}
              <span>{isPlaying ? "Music Playing (8-bit Mode)" : "Music Paused"}</span>
            </button>
          )}
        </div>

        {isDone && (
          <p className="mt-8 text-neon-green font-mono animate-pulse">
            {">"} Joy initialized. Let the party continue!
          </p>
        )}
      </div>
    </section>
  );
};

export default Celebration;