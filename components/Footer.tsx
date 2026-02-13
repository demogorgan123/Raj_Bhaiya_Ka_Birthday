import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center relative z-10">
      <div className="flex items-center justify-center gap-2 text-slate-500 text-sm font-mono">
        <span>Built with</span>
        <CodeIcon />
        <span>and</span>
        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
        <span>by your juniors</span>
      </div>
      <div className="mt-2 text-slate-700 text-xs">
        © {new Date().getFullYear()} Version 1.0.0
      </div>
    </footer>
  );
};

const CodeIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="text-neon-blue"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export default Footer;