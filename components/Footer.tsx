
import React from 'react';

interface FooterProps {
  onContactClick: () => void;
  onNavigate: (page: 'home' | 'about' | 'case-study' | 'focus-shield' | 'praline-brand') => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick, onNavigate }) => {
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer id="contact" className="py-20 md:py-28 px-6 sm:px-10 md:px-16 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">
          <div className="max-w-xl w-full">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black tracking-tighter leading-tight uppercase mb-8 md:mb-10 text-white">
              Let's build <br /> <span className="text-zinc-500">something</span> <br /> meaningful.
            </h2>
            <button 
              onClick={onContactClick}
              className="w-full sm:w-auto group relative bg-white text-black px-10 md:px-12 py-4 md:py-5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.3em] overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-blue-600/30"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start a Conversation</span>
              <div className="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-24 w-full lg:w-auto">
            <div className="flex flex-col gap-4 md:gap-5">
              <span className="text-[9px] md:text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-2">Navigation</span>
              <button onClick={() => onNavigate('home')} className="text-left text-xs md:text-sm font-black text-white hover:text-blue-500 transition-colors uppercase tracking-[0.2em]">Home</button>
              <button onClick={scrollToPortfolio} className="text-left text-xs md:text-sm font-black text-white hover:text-blue-500 transition-colors uppercase tracking-[0.2em]">Work</button>
              <button onClick={() => onNavigate('about')} className="text-left text-xs md:text-sm font-black text-white hover:text-blue-500 transition-colors uppercase tracking-[0.2em]">About</button>
            </div>
            <div className="flex flex-col gap-4 md:gap-5">
              <span className="text-[9px] md:text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-2">Social</span>
              <a href="https://www.linkedin.com/in/romain-gras-france/" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-black text-white hover:text-blue-500 transition-colors uppercase tracking-[0.2em] flex items-center gap-2">
                LinkedIn
                <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[8px] md:text-[9px] font-bold text-zinc-600 tracking-widest uppercase">© 2026 ROMAIN GRAS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 md:gap-8 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
            <span className="text-[8px] md:text-[9px] font-bold text-zinc-500 tracking-widest uppercase">Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
