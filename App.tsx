import React from 'react';
import MatrixBackground from './components/MatrixBackground';
import Hero from './components/Hero';
import TerminalTribute from './components/TerminalTribute';
import Celebration from './components/Celebration';
import Appreciation from './components/Appreciation';
import MessageWall from './components/MessageWall';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-neon-blue selection:text-black">
      {/* Background Effect */}
      <MatrixBackground />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <TerminalTribute />
        <Celebration />
        <Appreciation />
        <MessageWall />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;