
import React from 'react';

interface StudyProjectProps {
  onOpenStudy?: () => void;
}

const StudyProject: React.FC<StudyProjectProps> = ({ onOpenStudy }) => {
  const pdfDirectUrl = "https://1drv.ms/b/c/94886addc276660f/IQQPZnbC3WqIIICUbaUFAAAAAT3uWVzITQKiSDDs5Mkm0cc";

  const handleOpenDirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(pdfDirectUrl, '_blank');
  };

  return (
    <div className="glass-card rounded-[2rem] md:rounded-[40px] p-6 sm:p-10 md:p-16 relative overflow-hidden group mb-10 md:mb-20 border border-white/10 transition-all duration-500 hover:border-blue-600/40 hover:shadow-[0_0_40px_-15px_rgba(37,99,235,0.2)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4 md:mb-6 block group-hover:text-blue-500 transition-colors duration-300">Academic Highlights</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tighter leading-tight uppercase mb-6 md:mb-8 text-white">
            Bachelor UX/UI <br /> <span className="text-zinc-500 transition-colors group-hover:text-white/60">Study Showcase</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            This final year project demonstrates my ability to analyze markets, define user personas, and design end-to-end digital experiences.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
             {["Project Management", "UX Research", "Prototyping"].map((skill) => (
               <div key={skill} className="bg-white/5 border border-white/10 group-hover:border-blue-600/20 px-3 py-1.5 rounded-xl transition-colors">
                 <span className="text-[8px] md:text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-hover:text-blue-400 transition-colors">{skill}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="relative group/img cursor-pointer order-1 lg:order-2" onClick={onOpenStudy}>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-zinc-900 group-hover:scale-[1.01] group-hover:border-blue-600/40 transition-all duration-500">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
             <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 text-center">
                <h3 className="text-xl md:text-3xl font-heading font-black uppercase tracking-widest mb-2 text-white">Romain Gras</h3>
                <p className="text-[8px] md:text-xs uppercase tracking-[0.2em] font-bold text-zinc-400">Chef De Projet Digital | 2023 / 2024</p>
             </div>
             <img 
               src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768327539/projet_reudo0.avif" 
               alt="Portfolio Preview" 
               className="w-full h-full object-cover opacity-30 group-hover/img:scale-110 transition-transform duration-1000"
             />
          </div>
          <button 
            onClick={handleOpenDirect}
            className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-2xl z-20 hover:scale-110 active:scale-95 transition-all"
          >
             <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
             </svg>
          </button>
          <p className="text-[8px] md:text-[10px] uppercase font-bold text-center mt-5 md:mt-6 tracking-widest text-zinc-500 group-hover:text-blue-500 transition-colors">Click to view in full screen</p>
        </div>
      </div>
    </div>
  );
};

export default StudyProject;
