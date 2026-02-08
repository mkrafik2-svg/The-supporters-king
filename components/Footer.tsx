
import React from 'react';
import { Send, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/80">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-royal font-bold gold-gradient">TSK</span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-gray-500">The Supporters King</span>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://t.me/thesupportersking" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            <Send className="w-6 h-6" />
          </a>
          <a 
            href="https://wa.me/91xxxxxxxxxx" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-green-600 transition-colors duration-300"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>

        <p className="text-gray-600 text-sm text-center">
          &copy; {new Date().getFullYear()} TSK – The Supporters King | All Rights Reserved
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <span>Responsible Gaming</span>
          <span>•</span>
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Terms of Use</span>
        </div>
      </div>
      <div className="h-20 md:h-0"></div> {/* Spacer for sticky mobile actions */}
    </footer>
  );
};

export default Footer;
