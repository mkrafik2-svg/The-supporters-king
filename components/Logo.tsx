
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
        {/* Decorative Crown/Shield Background */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(191,149,63,0.8)]">
          <path 
            d="M50 5 L85 20 L85 50 C85 75 50 95 50 95 C50 95 15 75 15 50 L15 20 L50 5 Z" 
            fill="none" 
            stroke="#bf953f" 
            strokeWidth="2"
          />
          <path 
            d="M30 15 L40 10 L50 15 L60 10 L70 15" 
            fill="none" 
            stroke="#fcf6ba" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
        <span className="font-royal text-4xl md:text-5xl font-black gold-gradient z-10">TSK</span>
      </div>
      <h1 className="font-royal text-xs md:text-sm tracking-[0.3em] gold-gradient font-bold mt-2 text-center uppercase">
        The Supporters King
      </h1>
    </div>
  );
};

export default Logo;
