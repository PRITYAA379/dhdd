import React from 'react';
import { Lightbulb, Cpu, Layers, Shield } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-24 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      {/* About Us Section */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative h-full bg-dark-800 border border-white/10 rounded-2xl p-8 overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Lightbulb className="w-32 h-32 text-white" />
          </div>
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
             <div className="p-3 rounded-lg bg-neon-purple/10 border border-neon-purple/20">
               <Shield className="w-6 h-6 text-neon-purple" />
             </div>
             <h2 className="text-2xl font-display font-bold text-white tracking-wide">ABOUT JURA LAB</h2>
          </div>
          
          <div className="space-y-4 text-gray-400 font-sans text-lg leading-relaxed relative z-10">
            <p>
              <strong className="text-white">JURA</strong> is the premier digital incubator for the year 2029. Born from the convergence of advanced AI and rapid prototyping, we simulate future market trends to generate product concepts before they exist.
            </p>
            <p>
              Whether you need the next breakthrough in smart-home robotics or a revolutionary AR interface, JURA architects the blueprint. We bridge the gap between "now" and "next".
            </p>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan to-neon-green rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative h-full bg-dark-800 border border-white/10 rounded-2xl p-8 overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Layers className="w-32 h-32 text-white" />
          </div>

          <div className="flex items-center gap-3 mb-6 relative z-10">
             <div className="p-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20">
               <Cpu className="w-6 h-6 text-neon-cyan" />
             </div>
             <h2 className="text-2xl font-display font-bold text-white tracking-wide">IDEATION ENGINE</h2>
          </div>
          
          <div className="space-y-4 text-gray-400 font-sans text-lg leading-relaxed relative z-10">
            <p>
              Our engine is powered by the <strong className="text-neon-cyan">Gemini Neural Core</strong>, trained on patents and sci-fi literature from the last century.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2.5 bg-neon-cyan rounded-full shrink-0" />
                <span><strong className="text-white">Sector Analysis:</strong> We scan your selected industry (e.g., Health & Fitness) for technological gaps.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2.5 bg-neon-cyan rounded-full shrink-0" />
                <span><strong className="text-white">Concept Synthesis:</strong> We merge emerging tech (AR, Haptics, AI) with functional utility to create plausible 2029 products.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 mt-2.5 bg-neon-cyan rounded-full shrink-0" />
                <span><strong className="text-white">Branding:</strong> Every concept comes with a generated identity—Short & Punchy for startups, or Technical for enterprise.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;