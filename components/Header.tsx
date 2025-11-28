import React from 'react';
import { Cpu, Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-8 flex flex-col items-center justify-center border-b border-white/5 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-neon-cyan/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex items-center gap-4 z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-dark-900 ring-1 ring-white/10 p-3 rounded-lg">
            <Cpu className="w-10 h-10 text-neon-cyan animate-pulse-slow" />
          </div>
        </div>
        <h1 className="text-6xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-cyan to-white select-none">
          JURA
        </h1>
      </div>
      <p className="mt-4 text-neon-cyan/60 font-sans tracking-widest text-sm uppercase">
        2029 Ideation Engine
      </p>
      
      {/* Decorative Lines */}
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
    </header>
  );
};

export default Header;