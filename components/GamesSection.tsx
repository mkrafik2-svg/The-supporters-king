
import React from 'react';
import { Spade, Trophy, Target, Gem } from 'lucide-react';

const GameCard: React.FC<{ title: string; icon: React.ReactNode; image: string }> = ({ title, icon, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-yellow-900/30 bg-black/40 backdrop-blur-sm transition-all duration-500 hover:border-yellow-500/50 hover:bg-black/60">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 flex flex-col justify-end">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-yellow-600/20 rounded-lg text-yellow-500 group-hover:text-yellow-400 transition-colors">
            {icon}
          </div>
          <h4 className="text-xl font-royal font-bold tracking-wider">{title}</h4>
        </div>
        <p className="text-sm text-gray-400 group-hover:text-gray-300">Play with the best odds and instant payout.</p>
      </div>
    </div>
  );
};

const GamesSection: React.FC = () => {
  const games = [
    { 
      title: "Teen Patti", 
      icon: <Spade className="w-6 h-6" />, 
      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      title: "Cricket", 
      icon: <Trophy className="w-6 h-6" />, 
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      title: "Batting Games", 
      icon: <Target className="w-6 h-6" />, 
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      title: "Casino Games", 
      icon: <Gem className="w-6 h-6" />, 
      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=800&auto=format&fit=crop" 
    },
  ];

  return (
    <section id="games" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-12 space-y-4">
        <div className="inline-block px-4 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-bold uppercase tracking-widest">
          The King's Collection
        </div>
        <h3 className="text-3xl md:text-5xl font-royal font-bold text-center">
          <span className="gold-gradient">500+ Games</span> Available
        </h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game, idx) => (
          <GameCard key={idx} {...game} />
        ))}
      </div>
    </section>
  );
};

export default GamesSection;
