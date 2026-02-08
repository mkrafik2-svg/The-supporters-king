
import React from 'react';
import { Trophy, Activity, ExternalLink } from 'lucide-react';

const MatchCard: React.FC<{
  team1: string;
  team2: string;
  score1: string;
  score2: string;
  status: string;
  isLive?: boolean;
}> = ({ team1, team2, score1, score2, status, isLive }) => (
  <div className="relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-black/60 p-6 transition-all duration-300 hover:border-yellow-500/40 hover:bg-black/80 group">
    {isLive && (
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Live</span>
      </div>
    )}
    
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">{team1}</span>
          <span className="text-sm text-gray-500 font-medium">{score1}</span>
        </div>
        <span className="text-gray-600 font-royal font-bold text-sm">VS</span>
        <div className="flex flex-col items-end">
          <span className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">{team2}</span>
          <span className="text-sm text-gray-500 font-medium">{score2}</span>
        </div>
      </div>
      
      <div className="pt-4 border-t border-white/5 flex justify-between items-center">
        <span className="text-xs text-yellow-600/80 font-semibold uppercase tracking-wider">{status}</span>
        <button className="text-[10px] text-gray-400 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-tighter">
          Details <Activity className="w-3 h-3" />
        </button>
      </div>
    </div>
  </div>
);

const LiveScores: React.FC = () => {
  const matches = [
    {
      team1: "IND",
      team2: "AUS",
      score1: "342/6 (50)",
      score2: "124/2 (18.4)",
      status: "2nd Innings - Aus need 219 runs",
      isLive: true
    },
    {
      team1: "ENG",
      team2: "NZ",
      score1: "215/10",
      score2: "218/4",
      status: "New Zealand won by 6 wickets",
      isLive: false
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="flex flex-col items-center mb-12 space-y-4">
        <div className="p-3 bg-yellow-600/10 rounded-full text-yellow-500 mb-2">
          <Trophy className="w-8 h-8" />
        </div>
        <h3 className="text-3xl md:text-5xl font-royal font-bold text-center gold-gradient">
          Live Cricket Scores
        </h3>
        <p className="text-gray-400 text-center max-w-xl">
          Stay updated with real-time match stats. Bet with confidence on the most accurate data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {matches.map((match, idx) => (
          <MatchCard key={idx} {...match} />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center gap-2 text-xs text-gray-600 uppercase tracking-[0.2em]">
          <span>Data Provider</span>
          <div className="w-8 h-[1px] bg-gray-800"></div>
        </div>
        
        <a 
          href="https://www.cricapi.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-yellow-600/60 hover:text-yellow-500 transition-colors text-sm font-medium border border-yellow-900/20 px-4 py-2 rounded-lg bg-yellow-900/5"
        >
          Reliable Sports API: CricAPI <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none -z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-yellow-500">
          <circle cx="50" cy="50" r="40" fill="none" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </div>
    </section>
  );
};

export default LiveScores;
