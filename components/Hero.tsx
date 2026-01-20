
import React, { useEffect, useState } from 'react';
import InteractiveText from './InteractiveText';
import MouseTrailEffect from './MouseTrailEffect';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = ["UX-UI Strategy", "No-code Expert", "Motion Design", "WCAG"];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-6 sm:px-10 md:px-16 overflow-hidden text-white">
      
      {/* Background Blob Effect - Keep existing but maybe slightly subtler if needed */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none transition-transform duration-[2000ms] ease-out z-0"
        style={{ transform: `translate(${-50 + mousePos.x * 0.2}%, ${-50 + mousePos.y * 0.2}%)` }}
      ></div>

      {/* Mouse Trail Effect - Desktop Only (lg and up) */}
      <div className="hidden lg:block absolute inset-0 z-0 opacity-80">
        <MouseTrailEffect />
      </div>

      <div className="max-w-6xl w-full flex flex-col items-center text-center relative z-20">
        <div className="mb-8 md:mb-12 animate-reveal">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-[9px] md:text-[11px] font-black tracking-[0.4em] md:tracking-[0.5em] uppercase text-zinc-400">
            <span className="bg-white/5 px-4 py-1.5 rounded-full border border-white/10 whitespace-nowrap">Portfolio 2026</span>
            <span className="w-8 md:w-16 h-px bg-white/10 hidden xs:block"></span>
            <span className="whitespace-nowrap">Freelance Designer</span>
          </div>
        </div>

        <h1 
          className="text-[14vw] sm:text-[11vw] md:text-[10vw] lg:text-[11rem] font-heading font-black tracking-tighter leading-[0.85] md:leading-[0.8] mb-10 md:mb-14 select-none break-words"
          style={{ 
            transform: `translate3d(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <InteractiveText text="MAKING" hoverColor="hover:text-blue-500/70" /> <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>DIGITAL</span> <br />
          <InteractiveText text="IMPACT" hoverColor="hover:text-blue-500/70" />
        </h1>

        <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-6 max-w-3xl mb-12 md:mb-20">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2 md:gap-3 group">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full shadow-[0_0_12px_rgba(37,99,235,0.6)] transition-all group-hover:scale-125"></div>
              <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center w-full sm:w-auto">
          <button 
            onClick={onContactClick}
            className="w-full sm:w-auto group relative bg-white text-black px-10 md:px-14 py-5 md:py-6 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.3em] overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl hover:shadow-blue-600/30"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Get in Touch</span>
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
          
          <button 
            onClick={scrollToPortfolio}
            className="w-full sm:w-auto group relative px-10 md:px-14 py-5 md:py-6 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white border border-white/20 overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:border-blue-600/50 hover:shadow-blue-600/10"
          >
            <span className="relative z-10 group-hover:text-blue-400 transition-colors duration-300">Recent Works</span>
            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
