
import React from 'react';

interface ProjectProps {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  color: string;
  bgColor: string;
  objectFit?: "cover" | "contain";
  customScale?: string;
  isFocusShield?: boolean;
  onClick?: (id: string) => void;
}

const ProjectCard: React.FC<ProjectProps> = ({ id, title, category, image, color, bgColor, objectFit = "cover", customScale, isFocusShield, description, onClick }) => {
  return (
    <div className="group relative flex flex-col gap-6 cursor-pointer" onClick={() => onClick?.(id)}>
      <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden glass-card transition-all duration-500 border border-white/10 group-hover:border-blue-600/40 group-hover:shadow-[0_0_30px_-15px_rgba(37,99,235,0.3)]">
        <div 
          className="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle at center, ${color}10 0%, transparent 70%)` }}
        ></div>
        
        <div 
          className="relative w-full h-full overflow-hidden flex items-center justify-center transition-all duration-500"
          style={{ backgroundColor: isFocusShield ? '#040404' : bgColor }}
        >
          {isFocusShield && (
            <>
              <div className="absolute inset-0 bg-[#050505]"></div>
              <div className="absolute w-full h-full bg-blue-600/5 blur-[100px] rounded-full group-hover:bg-blue-600/15 transition-all duration-700"></div>
            </>
          )}
          
          <img 
            src={image} 
            alt={title} 
            className={`w-full h-full transition-all duration-1000 ease-out z-10 ${
              isFocusShield 
                ? 'scale-[1.6] group-hover:scale-[1.5] object-cover object-center' 
                : objectFit === "contain" 
                  ? `${customScale || 'scale-125'} group-hover:scale-[1.15] object-contain` 
                  : 'object-cover scale-100 group-hover:scale-[1.05]'
            }`}
          />
          
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 backdrop-blur-sm z-20">
             <p className="text-sm font-medium text-center text-zinc-300 max-w-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               {description}
             </p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-end px-4">
        <div>
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-2 block group-hover:text-blue-500 transition-colors duration-300">{category}</span>
          <h3 className="text-3xl font-heading font-black uppercase tracking-tighter group-hover:text-white transition-colors duration-300">{title}</h3>
        </div>
        <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600/50 transition-all duration-500 transform group-hover:-rotate-45">
           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
           </svg>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<{onProjectClick?: (id: string) => void}> = ({ onProjectClick }) => {
  const projects = [
    {
      id: "focus-shield",
      title: "Focus Shield",
      category: "Product Owner / Mobile",
      image: "https://res.cloudinary.com/di4iuss0t/image/upload/v1768302829/Focus_Shield_royys7.png", 
      description: "A revolutionary digital wellness app designed to reduce screen time and improve mental focus through AI-driven habit coaching.",
      color: "#2563eb",
      bgColor: "#0a0a0a", 
      objectFit: "cover" as const,
      isFocusShield: true 
    },
    {
      id: "praline-brand",
      title: "Praline Brand",
      category: "Page Redesign",
      image: "https://res.cloudinary.com/di4iuss0t/image/upload/v1768327446/Praline_o1yng7.avif",
      description: "Complete digital rebranding and e-commerce experience for a luxury artisanal chocolatier, focusing on high-conversion visual storytelling.",
      color: "#f43f5e",
      bgColor: "#111",
      objectFit: "cover" as const,
      isFocusShield: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-32">
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} onClick={onProjectClick} />
      ))}
    </div>
  );
};

export default Projects;
