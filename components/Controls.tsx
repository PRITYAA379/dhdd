import React from 'react';
import { Theme, NameLength, GenerationMode } from '../types';
import { Settings2, RefreshCw, Activity, Minimize2, Maximize2, Hammer, Smartphone } from 'lucide-react';

interface ControlsProps {
  currentTheme: Theme;
  nameLength: NameLength;
  mode: GenerationMode;
  onThemeChange: (theme: Theme) => void;
  onLengthChange: (length: NameLength) => void;
  onModeChange: (mode: GenerationMode) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const Controls: React.FC<ControlsProps> = ({ 
  currentTheme, 
  nameLength, 
  mode,
  onThemeChange, 
  onLengthChange, 
  onModeChange,
  onGenerate, 
  isLoading 
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto mb-12 px-4">
      <div className="glass-panel p-6 rounded-2xl flex flex-col xl:flex-row gap-6 items-end xl:items-center justify-between shadow-2xl shadow-neon-cyan/5">
        
        <div className="flex flex-col md:flex-row gap-6 w-full xl:w-auto flex-wrap">
          
          {/* Target Entity */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
             <label className="flex items-center gap-2 text-neon-cyan/80 text-xs font-bold uppercase tracking-widest">
              <Activity className="w-4 h-4" />
              Product Type
            </label>
            <div className="flex bg-dark-900 rounded-lg p-1 border border-white/10">
              <button
                onClick={() => onModeChange('TOOL')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-sans font-bold text-sm transition-all duration-300 ${
                  mode === 'TOOL' 
                    ? 'bg-neon-cyan text-black shadow-[0_0_15px_rgba(0,243,255,0.4)]' 
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <Hammer className="w-4 h-4" />
                HARDWARE
              </button>
              <button
                onClick={() => onModeChange('APP')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-sans font-bold text-sm transition-all duration-300 ${
                  mode === 'APP' 
                    ? 'bg-neon-pink text-black shadow-[0_0_15px_rgba(255,0,255,0.4)]' 
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                SOFTWARE
              </button>
            </div>
          </div>

          {/* Theme Selector */}
          <div className="flex flex-col gap-2 w-full md:w-auto flex-grow min-w-[200px]">
            <label className="flex items-center gap-2 text-neon-cyan/80 text-xs font-bold uppercase tracking-widest">
              <Settings2 className="w-4 h-4" />
              Industry Sector
            </label>
            <div className="relative">
              <select
                value={currentTheme}
                onChange={(e) => onThemeChange(e.target.value as Theme)}
                className="w-full bg-dark-800 text-white border border-white/10 rounded-lg px-4 py-2.5 appearance-none focus:outline-none focus:border-neon-cyan transition-colors font-sans text-lg cursor-pointer hover:bg-dark-700"
                disabled={isLoading}
              >
                {Object.values(Theme).map((theme) => (
                  <option key={theme} value={theme}>
                    {theme}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                ▼
              </div>
            </div>
          </div>

          {/* Length Protocol */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
             <label className="flex items-center gap-2 text-neon-cyan/80 text-xs font-bold uppercase tracking-widest">
              <Activity className="w-4 h-4" />
              Brand Style
            </label>
            <div className="flex bg-dark-900 rounded-lg p-1 border border-white/10">
              <button
                onClick={() => onLengthChange('SHORT')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-sans font-bold text-sm transition-all duration-300 ${
                  nameLength === 'SHORT' 
                    ? 'bg-neon-purple text-white shadow-[0_0_15px_rgba(188,19,254,0.4)]' 
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <Minimize2 className="w-4 h-4" />
                SHORT
              </button>
              <button
                onClick={() => onLengthChange('LONG')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-sans font-bold text-sm transition-all duration-300 ${
                  nameLength === 'LONG' 
                    ? 'bg-neon-purple text-white shadow-[0_0_15px_rgba(188,19,254,0.4)]' 
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <Maximize2 className="w-4 h-4" />
                LONG
              </button>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={onGenerate}
          disabled={isLoading}
          className={`
            group relative w-full xl:w-auto px-8 py-4 rounded-lg font-display font-bold text-xl tracking-wider
            overflow-hidden transition-all duration-300 min-w-[200px] shrink-0
            ${isLoading ? 'cursor-not-allowed opacity-50 grayscale' : 'hover:scale-105 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]'}
          `}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-80 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
          
          <span className="relative flex items-center justify-center gap-3 text-white">
            {isLoading ? (
              <>
                <RefreshCw className="w-6 h-6 animate-spin" />
                IDEATING...
              </>
            ) : (
              <>
                <Activity className="w-6 h-6" />
                GENERATE
              </>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Controls;