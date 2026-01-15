
import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'about' | 'case-study' | 'focus-shield' | 'praline-brand') => void;
  currentPage: 'home' | 'about' | 'case-study' | 'focus-shield' | 'praline-brand';
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleNavigation = (page: 'home' | 'about' | 'case-study' | 'focus-shield' | 'praline-brand') => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper logic for standard navigation links (Portfolio & About)
  // Portfolio link is white only if we are on 'home' page.
  const isPortfolioActive = currentPage === 'home';
  const isAboutActive = currentPage === 'about';

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center py-6 px-4 pointer-events-none"
      aria-label="Main Navigation"
    >
      <div 
        ref={menuRef}
        className="glass-card flex items-center justify-between md:justify-center gap-4 md:gap-8 w-full max-w-[95%] md:w-auto px-4 md:px-8 py-2 rounded-full border border-white/20 shadow-2xl transition-all duration-300 pointer-events-auto relative bg-black/80 md:bg-zinc-900/40 backdrop-blur-xl"
      >
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}
          className={`text-[12px] font-black tracking-[0.3em] uppercase pl-2 rounded-lg px-2 transition-colors ${currentPage === 'home' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
        >
          RG
        </a>

        <div className="hidden md:flex items-center gap-6 border-l border-white/10 pl-8">
          <a 
            href="#portfolio" 
            onClick={scrollToPortfolio}
            className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${isPortfolioActive ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
          >
            Portfolio
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}
            className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${isAboutActive ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
          >
            About
          </a>
          <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
            Blog
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={onContactClick}
            className="bg-white text-black text-[10px] font-black px-4 md:px-5 py-2.5 rounded-full uppercase tracking-[0.15em] hover:bg-zinc-200 transition-all active:scale-95 shadow-lg"
          >
            Contact
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all rounded-full"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`absolute top-[120%] left-0 right-0 glass-card rounded-3xl border border-white/20 p-6 flex flex-col gap-4 transition-all duration-300 origin-top shadow-2xl bg-zinc-900/95 backdrop-blur-2xl md:hidden ${isMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}
        >
          <a 
            href="#portfolio" 
            onClick={scrollToPortfolio}
            className={`text-sm font-black uppercase tracking-[0.3em] text-center py-4 border-b border-white/5 rounded-xl transition-colors ${isPortfolioActive ? 'text-white bg-white/5' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
          >
            Portfolio
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}
            className={`text-sm font-black uppercase tracking-[0.3em] text-center py-4 border-b border-white/5 rounded-xl transition-colors ${isAboutActive ? 'text-white bg-white/5' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
          >
            About
          </a>
          <button 
            onClick={onContactClick}
            className="text-sm font-black uppercase tracking-[0.3em] text-center py-4 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
