
import React from 'react';
import { Play, Send, MessageCircle } from 'lucide-react';

const StickyActions: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 md:hidden z-[100] bg-black/60 backdrop-blur-xl border-t border-white/10">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a 
          href="#" 
          className="flex-1 flex flex-col items-center justify-center py-2 gold-bg rounded-lg text-black font-black text-[10px] tracking-tighter"
        >
          <Play className="w-5 h-5 mb-0.5 fill-black" />
          PLAY NOW
        </a>
        
        <a 
          href="https://t.me/thesupportersking" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 bg-[#229ED9] rounded-lg text-white font-bold text-[10px]"
        >
          <Send className="w-5 h-5 mb-0.5" />
          TELEGRAM
        </a>

        <a 
          href="https://wa.me/91xxxxxxxxxx" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 bg-[#25D366] rounded-lg text-white font-bold text-[9px] text-center leading-none"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          MSG ON WHATSAPP
        </a>
      </div>
    </div>
  );
};

export default StickyActions;
