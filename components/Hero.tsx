
import React from 'react';
import { PlayCircle, MessageCircle, Send } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 text-center max-w-6xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-7xl font-royal font-black gold-gradient tracking-tight leading-tight">
            TSK – The Supporters King
          </h2>
          <div className="h-1 w-24 mx-auto gold-bg rounded-full"></div>
          <p className="text-lg md:text-2xl font-semibold text-yellow-500/90 tracking-wide uppercase">
            500+ Games Available | 24×7 Online | Fastest Deposit & Withdrawal
          </p>
        </div>

        <p className="max-w-2xl text-gray-400 text-base md:text-xl leading-relaxed">
          Play Teen Patti, Cricket, Batting, and Casino games on India’s most trusted gaming platform. 
          Enjoy <span className="text-[#bf953f] font-bold">easy deposits</span>, 
          <span className="text-[#bf953f] font-bold"> instant withdrawals</span>, and 24×7 dedicated support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mt-12">
          <a 
            href="#" 
            className="group relative flex items-center justify-center gap-3 py-5 px-6 gold-bg rounded-xl text-black font-bold text-lg transition-all duration-300 hover:scale-[1.05] hover:glow-gold-intense active:scale-95 shadow-2xl"
          >
            <PlayCircle className="w-6 h-6" />
            <span>PLAY NOW</span>
          </a>
          
          <a 
            href="https://t.me/thesupportersking" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 py-5 px-6 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:scale-[1.05] active:scale-95 shadow-lg shadow-blue-900/40"
          >
            <Send className="w-6 h-6" />
            <span>JOIN TELEGRAM</span>
          </a>

          <a 
            href="https://wa.me/91xxxxxxxxxx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 py-5 px-6 bg-green-600 hover:bg-green-500 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:scale-[1.05] active:scale-95 shadow-lg shadow-green-900/40"
          >
            <MessageCircle className="w-6 h-6" />
            <span>MSG ON WHATSAPP</span>
          </a>
        </div>
      </div>
      
      {/* Visual embellishment */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#bf953f]/20 rounded-full animate-pulse pointer-events-none hidden md:block"></div>
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#bf953f]/10 rounded-full animate-ping pointer-events-none hidden md:block"></div>
    </section>
  );
};

export default Hero;
