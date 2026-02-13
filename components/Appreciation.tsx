import React from 'react';
import { Heart, Code, Coffee, GraduationCap } from 'lucide-react';
import { Memory } from '../types';

const MEMORIES: Memory[] = [
  {
    id: 1,
    title: "Always Supportive",
    description: "Whenever we get stuck on a bug or logic, you're always there to guide us without making us feel small.",
    icon: 'heart'
  },
  {
    id: 2,
    title: "Coding Wizard",
    description: "Watching you debug is like watching a magician at work. We learn so much just by observing your process.",
    icon: 'code'
  },
  {
    id: 3,
    title: "Party Host",
    description: "Thank you so much for the recent party! It was a blast and a much-needed break for all of us.",
    icon: 'party'
  },
  {
    id: 4,
    title: "Career Mentor",
    description: "Your advice on career paths and tech stacks has been invaluable to our growth as juniors.",
    icon: 'terminal'
  }
];

const Appreciation: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'heart': return <Heart className="w-8 h-8 text-pink-500" />;
      case 'code': return <Code className="w-8 h-8 text-neon-blue" />;
      case 'party': return <Coffee className="w-8 h-8 text-yellow-500" />; // Coffee acts as party/chill icon
      case 'terminal': return <GraduationCap className="w-8 h-8 text-neon-green" />;
      default: return <Code />;
    }
  };

  return (
    <section className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          <span className="text-neon-purple">&lt;</span>
          Appreciation Log
          <span className="text-neon-purple">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMORIES.map((memory) => (
            <div 
              key={memory.id}
              className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] group"
            >
              <div className="mb-4 bg-slate-900 w-14 h-14 rounded-lg flex items-center justify-center border border-slate-700 group-hover:border-neon-blue transition-colors">
                {getIcon(memory.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{memory.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {memory.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appreciation;