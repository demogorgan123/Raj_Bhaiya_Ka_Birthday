import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Code, Cpu, Upload } from 'lucide-react';

const TYPING_SPEED = 50;
const LINES = [
  "Loading birthday surprise...",
  "Analyzing profile: Raj Bhaiya...",
  "Mentor detected ✔",
  "Respect level: MAX",
  "Status: LEGENDARY"
];

const Hero: React.FC = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [imgError, setImgError] = useState(false);
  const [profileSrc, setProfileSrc] = useState("raj_bhaiya.jpg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentLineIndex >= LINES.length) {
      setIsTyping(false);
      return;
    }

    const currentLine = LINES[currentLineIndex];
    if (text.length < currentLine.length) {
      const timeout = setTimeout(() => {
        setText(currentLine.slice(0, text.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        if (currentLineIndex < LINES.length - 1) {
          setCurrentLineIndex(prev => prev + 1);
          setText("");
        } else {
          setIsTyping(false);
        }
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [text, currentLineIndex]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileSrc(url);
      setImgError(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20 pb-10">
      
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Profile Container */}
      <div className="relative group mb-10">
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div 
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-900 flex items-center justify-center cursor-pointer group-hover:border-neon-blue transition-all"
          onClick={() => fileInputRef.current?.click()}
          title="Click to upload photo"
        >
          {!imgError ? (
            <img 
              src={profileSrc} 
              onError={() => setImgError(true)}
              alt="Raj Bhaiya" 
              className="w-full h-full object-cover object-[50%_20%] transform transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-slate-500 text-center p-4 w-full h-full hover:bg-slate-800/80 transition-colors">
              <Upload className="w-12 h-12 mb-2 text-neon-blue animate-bounce" />
              <span className="text-xs font-mono text-neon-blue font-bold">UPLOAD TARGET</span>
              <span className="text-[10px] text-slate-400 mt-1">raj_bhaiya.jpg not found</span>
            </div>
          )}
        </div>
        {/* Decorative Badge */}
        <div className="absolute bottom-0 right-0 bg-slate-900 text-neon-green border border-neon-green px-3 py-1 rounded-full text-xs font-mono flex items-center gap-1 shadow-lg transform translate-y-1/2">
          <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
          ONLINE
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple text-center mb-4 tracking-tight drop-shadow-lg">
        Happy Belated Birthday,<br/>Raj Bhaiya!
      </h1>

      {/* Typing Subheading */}
      <div className="h-16 flex items-center justify-center">
        <div className="font-mono text-lg md:text-xl text-cyan-300 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-700 backdrop-blur-sm min-w-[300px] text-center">
          <span className="text-neon-purple mr-2">{'>'}</span>
          {text}
          {isTyping && <span className="animate-cursor ml-1">_</span>}
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-10 text-slate-700 animate-bounce delay-100 hidden md:block">
        <Terminal size={48} />
      </div>
      <div className="absolute bottom-1/4 right-10 text-slate-700 animate-bounce delay-700 hidden md:block">
        <Code size={48} />
      </div>
      <div className="absolute top-1/3 right-20 text-slate-700 animate-pulse delay-300 hidden md:block">
        <Cpu size={32} />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce text-slate-500">
        <span className="text-xs font-mono">SCROLL TO INITIALIZE</span>
      </div>
    </section>
  );
};

export default Hero;