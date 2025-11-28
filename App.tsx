import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import NameCard from './components/NameCard';
import InfoSection from './components/InfoSection';
import { Theme, Entity, GeneratorState } from './types';
import { generateEntities } from './services/geminiService';
import { AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [state, setState] = useState<GeneratorState>({
    isLoading: false,
    names: [],
    error: null,
    theme: Theme.FIT_ATHLETIC, 
    nameLength: 'SHORT', // Default for modern apps
    mode: 'TOOL', // Default mode
  });

  const handleGenerate = useCallback(async () => {
    if (state.isLoading) return;

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Pass all state parameters to the service
      const newNames = await generateEntities(state.theme, state.nameLength, state.mode);
      setState(prev => ({
        ...prev,
        isLoading: false,
        names: newNames,
      }));
    } catch (err) {
      console.error(err);
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: "Connection lost with JURA mainframe. Please check your API key or network connection.",
      }));
    }
  }, [state.theme, state.nameLength, state.mode, state.isLoading]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-neon-cyan/30">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-dark-900/80 to-dark-900 pointer-events-none" />

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 relative z-10 flex flex-col items-center">
        
        <Controls 
          currentTheme={state.theme}
          nameLength={state.nameLength}
          mode={state.mode}
          onThemeChange={(theme) => setState(prev => ({ ...prev, theme }))}
          onLengthChange={(nameLength) => setState(prev => ({ ...prev, nameLength }))}
          onModeChange={(mode) => setState(prev => ({ ...prev, mode }))}
          onGenerate={handleGenerate}
          isLoading={state.isLoading}
        />

        {/* Error Display */}
        {state.error && (
          <div className="w-full max-w-2xl bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-lg mb-8 flex items-center gap-3 animate-pulse">
            <AlertCircle className="w-6 h-6" />
            <p>{state.error}</p>
          </div>
        )}

        {/* Empty State */}
        {!state.isLoading && state.names.length === 0 && !state.error && (
          <div className="text-center text-white/30 py-20">
            <div className="w-20 h-20 border-2 border-dashed border-white/10 rounded-full mx-auto mb-6 flex items-center justify-center animate-spin-slow">
              <div className="w-2 h-2 bg-white/30 rounded-full" />
            </div>
            <p className="font-display tracking-widest text-lg">SYSTEM READY. INITIALIZE IDEATION SEQUENCE.</p>
          </div>
        )}

        {/* Results Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {state.names.map((item, index) => (
            <NameCard key={item.id} data={item} index={index} mode={state.mode} />
          ))}
        </div>

        {/* Info Section */}
        <InfoSection />
      </main>

      <footer className="w-full py-6 text-center text-white/20 text-xs font-mono uppercase border-t border-white/5 relative z-10">
        <p>Jura System 2029 // Powered by Gemini Neural Core</p>
      </footer>
    </div>
  );
};

export default App;