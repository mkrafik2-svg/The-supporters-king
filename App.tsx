
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GamesSection from './components/GamesSection';
import Features from './components/Features';
import LiveScores from './components/LiveScores';
import CTA from './components/CTA';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';

const App: React.FC = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#bf953f] selection:text-black relative overflow-x-hidden">
      {/* Background radial glow */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#bf953f]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#bf953f]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col">
        <Header />
        
        <main>
          <Hero />
          <GamesSection />
          <Features />
          <LiveScores />
          <CTA />
        </main>

        <Footer />
        <StickyActions />
      </div>
    </div>
  );
};

export default App;
