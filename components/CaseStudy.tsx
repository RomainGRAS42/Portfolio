
import React, { useState, useEffect } from 'react';

interface CaseStudyProps {
  onBack: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ onBack }) => {
  const [isLoading, setIsLoading] = useState(true);
  const pdfEmbedUrl = "https://1drv.ms/b/c/94886addc276660f/IQQPZnbC3WqIIICUbaUFAAAAAT3uWVzITQKiSDDs5Mkm0cc";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-32 px-4 md:px-6 max-w-7xl mx-auto pb-20 min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 hover:text-white transition-colors group mb-4"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au Portfolio
          </button>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase text-white">
            Bachelor <span className="text-zinc-400">UX/UI Design</span>
          </h1>
          <p className="text-zinc-300 text-[10px] uppercase tracking-[0.2em] font-bold mt-2">Dossier de synthèse professionnelle — 2024</p>
        </div>
        
        <div className="flex gap-4">
          <a 
            href={pdfEmbedUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-black px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-xl"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Plein écran (Direct)
          </a>
        </div>
      </div>

      <div className="glass-card rounded-[2.5rem] overflow-hidden border border-white/10 w-full relative shadow-2xl bg-black h-[75vh] md:h-[85vh]">
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-black flex flex-col items-center justify-center p-8 text-center space-y-12">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 border-4 border-white/5 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-t-white rounded-full animate-spin"></div>
              <div className="absolute inset-6 border-2 border-b-indigo-500 rounded-full animate-spin-slow"></div>
            </div>
            <div className="max-w-2xl">
              <p className="text-sm md:text-base font-black uppercase tracking-[0.3em] leading-relaxed mb-8 text-white">
                Merci de patienter durant le chargement de mon <br/>
                <span className="inline-block mt-4">
                  Bachelor Chef de projet digital <br/>
                  <span className="text-indigo-500 mt-2 block">je suis timide....</span>
                </span>
              </p>
              <div className="w-64 h-1.5 bg-zinc-900 mx-auto rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-white animate-progress shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
              </div>
            </div>
          </div>
        )}
        
        <iframe
          src={pdfEmbedUrl}
          title="Bachelor Case Study PDF"
          className={`w-full h-full border-none transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          allowFullScreen
          loading="lazy"
        />
        
        {!isLoading && (
          <div className="absolute top-4 right-4 pointer-events-none">
               <span className="text-[8px] font-black text-black uppercase tracking-widest bg-white px-3 py-1.5 rounded-full shadow-lg border border-black/5">Visualisation HD</span>
          </div>
        )}
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <span className="text-[9px] font-black text-zinc-300 uppercase tracking-[0.3em] block mb-3">Objectif</span>
              <p className="text-xs text-zinc-200 font-medium leading-relaxed">Présentation complète du cursus, des recherches utilisateurs et des livrables de fin d'études.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <span className="text-[9px] font-black text-zinc-300 uppercase tracking-[0.3em] block mb-3">Expertise</span>
              <p className="text-xs text-zinc-200 font-medium leading-relaxed">Design Thinking, Prototypage haute fidélité, Stratégie Produit & Tests Utilisateurs.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <span className="text-[9px] font-black text-zinc-300 uppercase tracking-[0.3em] block mb-3">Logiciels</span>
              <p className="text-xs text-zinc-200 font-medium leading-relaxed">Figma, Adobe Suite (AE, PR), No-code ecosystem & Intelligence Artificielle.</p>
          </div>
      </div>
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CaseStudy;
