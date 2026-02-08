
import React from 'react';
import { Rocket } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="w-full pt-8 pb-4 px-4 flex flex-col items-center gap-6 sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50">
      <div className="w-full flex justify-center">
        <Logo />
      </div>
      
      <div className="w-full max-w-4xl px-4">
        <a 
          href="#" 
          className="group block w-full py-3 md:py-4 px-8 gold-bg rounded-xl text-black font-bold text-center text-lg md:text-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 animate-glow flex items-center justify-center gap-3"
        >
          <Rocket className="w-6 h-6 animate-bounce" />
          <span className="tracking-widest font-royal">VISIT NOW THIS WEBSITE</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
