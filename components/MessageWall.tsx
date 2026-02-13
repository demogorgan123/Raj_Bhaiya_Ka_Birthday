import React from 'react';
import { Wish } from '../types';

const WISHES: Wish[] = [
  { id: 1, name: "Arjun", role: "Junior Dev", message: "Happy Birthday Bhaiya! Thanks for being the best mentor ever." },
  { id: 2, name: "Sneha", role: "Frontend Intern", message: "Your code reviews are tough but they make me better every day. HBD!" },
  { id: 3, name: "Rohan", role: "Backend Dev", message: "Wishing you a bug-free year ahead! Thanks for the party!" },
  { id: 4, name: "Priya", role: "UI/UX", message: "Happy Birthday! May your compilation times be short and your uptime high." },
  { id: 5, name: "Vikram", role: "Junior Dev", message: "You're an inspiration to us all. Have a great year ahead!" },
  { id: 6, name: "Team", role: "The Juniors", message: "We appreciate everything you do for us. Happy Belated Birthday!" },
];

const MessageWall: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Junior's Commit History
        </h2>
        <p className="text-center text-slate-400 mb-12 font-mono text-sm">
          git log --author="Juniors" --grep="Wishes"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WISHES.map((wish) => (
            <div 
              key={wish.id} 
              className="relative group bg-slate-900 border border-slate-800 p-6 rounded-lg overflow-hidden hover:border-slate-600 transition-colors"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-slate-800 -mr-8 -mt-8 rotate-45 group-hover:to-neon-purple/20 transition-colors"></div>

              <div className="relative z-10">
                <div className="font-mono text-neon-blue text-xs mb-2 opacity-70">
                  commit hash: {Math.random().toString(16).substring(2, 10)}
                </div>
                <p className="text-slate-300 italic mb-4">"{wish.message}"</p>
                <div className="flex items-center gap-3 mt-auto border-t border-slate-800 pt-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                    {wish.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{wish.name}</h4>
                    <span className="text-xs text-slate-500">{wish.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageWall;