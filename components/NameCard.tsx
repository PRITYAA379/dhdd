import React, { useState } from 'react';
import { Entity } from '../types';
import { Copy, Check, Hammer, Smartphone, Box } from 'lucide-react';

interface NameCardProps {
  data: Entity;
  index: number;
  mode?: 'TOOL' | 'APP';
}

const NameCard: React.FC<NameCardProps> = ({ data, index, mode = 'TOOL' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(data.name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isApp = mode === 'APP';

  return (
    <div 
      className={`group relative bg-dark-800 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        isApp ? 'hover:border-neon-pink/50 hover:shadow-[0_0_30px_rgba(255,0,255,0.1)]' : 'hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)]'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Tech decoration lines */}
      <div className={`absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/5 rounded-tr-xl transition-colors ${isApp ? 'group-hover:border-neon-pink/30' : 'group-hover:border-neon-cyan/30'}`} />
      <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/5 rounded-bl-xl transition-colors ${isApp ? 'group-hover:border-neon-purple/30' : 'group-hover:border-neon-purple/30'}`} />

      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col">
            <span className={`text-xs font-mono mb-1 opacity-70 tracking-widest ${isApp ? 'text-neon-pink' : 'text-neon-cyan'}`}>
              {isApp ? 'VER' : 'MODEL'}: {data.designation}
            </span>
            <h3 className={`text-2xl font-display font-bold text-white transition-colors truncate ${isApp ? 'group-hover:text-neon-pink' : 'group-hover:text-neon-cyan'}`}>
              {data.name}
            </h3>
          </div>
          <button
            onClick={handleCopy}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            title="Copy Name"
          >
            {copied ? <Check className="w-5 h-5 text-neon-green" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            {isApp ? <Smartphone className="w-3 h-3 text-neon-pink" /> : <Hammer className="w-3 h-3 text-neon-cyan" />}
            <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
              Category
            </span>
          </div>
          <span className={`inline-block px-3 py-1 rounded text-xs font-bold border ${
            isApp 
              ? 'bg-neon-pink/10 text-neon-pink border-neon-pink/20' 
              : 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20'
          }`}>
            {data.primaryFunction}
          </span>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
          {data.description}
        </p>
      </div>

      {/* Hover scanning effect */}
      <div className={`absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
        isApp ? 'from-neon-pink/5' : 'from-neon-cyan/5'
      }`} />
    </div>
  );
};

export default NameCard;