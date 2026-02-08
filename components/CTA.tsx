
import React from 'react';
import { Crown } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto rounded-3xl p-12 relative overflow-hidden group">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-yellow-900/20 opacity-80 z-0"></div>
        <div className="absolute inset-0 border border-yellow-500/20 rounded-3xl z-0 transition-all duration-500 group-hover:border-yellow-500/50"></div>
        
        <div className="relative z-10 flex flex-col items-center space-y-8">
          <Crown className="w-16 h-16 text-yellow-500 animate-bounce" />
          
          <h3 className="text-4xl md:text-6xl font-royal font-black text-white leading-tight">
            Join TSK Today & <br />
            <span className="gold-gradient">Play Like a King 👑</span>
          </h3>
          
          <p className="text-xl text-gray-400 max-w-lg">
            Experience the royal treatment with instant payouts and the largest collection of games in the industry.
          </p>

          <a 
            href="#" 
            className="px-12 py-5 gold-bg text-black font-black text-xl rounded-full tracking-[0.2em] transform transition-all duration-300 hover:scale-110 hover:glow-gold animate-glow active:scale-95 uppercase font-royal"
          >
            START PLAYING NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
