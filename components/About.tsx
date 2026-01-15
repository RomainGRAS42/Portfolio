
import React from 'react';
import InteractiveText from './InteractiveText';

interface AboutProps {
  onContactClick: () => void;
}

const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const skills = [
    { name: "Figma", icon: "https://res.cloudinary.com/di4iuss0t/image/upload/v1768328850/Figma_mqoqte.avif" },
    { name: "Adobe XD", icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg" },
    { name: "After Effects", icon: "https://cdn.worldvectorlogo.com/logos/after-effects-1.svg" },
    { name: "Premiere Pro", icon: "https://res.cloudinary.com/di4iuss0t/image/upload/v1768329013/Premier_Pro_jyvkeq.avif" },
    { name: "Lottie", icon: "https://res.cloudinary.com/di4iuss0t/image/upload/v1768329012/Lottie_ljjnse.avif" },
    { name: "Framer", icon: "https://res.cloudinary.com/di4iuss0t/image/upload/v1768329379/Framer_f4kxxl.png" },
    { name: "Webflow", icon: "https://res.cloudinary.com/di4iuss0t/image/upload/v1768329014/Webflow_fpqbu9.avif" },
    { name: "Bubble.io", icon: "https://res.cloudinary.com/di4iuss0t/image/upload/v1768329011/Bubble_njdrqd.webp" },
    { name: "N8N", icon: "https://res.cloudinary.com/di4iuss0t/image/upload/v1768329012/N8N_pb56zh.png" },
    { name: "Make.com", icon: "https://res.cloudinary.com/di4iuss0t/image/upload/v1768329012/Make_qbsc5n.avif" },
    { name: "Lovable", icon: "https://lovable.dev/favicon.ico" },
    { name: "AI Prompting", icon: "https://res.cloudinary.com/di4iuss0t/image/upload/v1768333399/prompt_axlaug.png" },
  ];

  return (
    <div className="pt-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto pb-20">
      {/* Hero Section */}
      <section className="mb-16 md:mb-24">
        <div className="flex items-center gap-4 md:gap-6 text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.5em] uppercase text-zinc-500 mb-8">
          <span className="bg-zinc-800/50 px-3 py-1 rounded-full border border-white/5">About Me</span>
          <span className="w-10 md:w-16 h-px bg-zinc-800/50"></span>
          <span>Background</span>
        </div>
        <h1 className="text-[14vw] sm:text-[10vw] md:text-[8vw] font-heading font-black tracking-tighter leading-[0.9] md:leading-[0.8] uppercase mb-12 text-white select-none">
          <InteractiveText text="PRODUCT" hoverColor="hover:text-blue-500/70" /> <br /> 
          <InteractiveText text="MINDSET." hoverColor="hover:text-blue-500/70" className="text-zinc-500" />
        </h1>
      </section>

      {/* Profile Card */}
      <section className="mb-20 md:mb-28 max-w-3xl mx-auto">
        <div className="glass-card rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border border-white/10 relative overflow-hidden transition-all duration-500 hover:border-blue-600/40">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 pb-6 border-b border-white/5 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/10 bg-zinc-800">
                <img src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768327539/projet_reudo0.avif" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-white">Romain Gras</h4>
                <p className="text-[9px] md:text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Available for Hire</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
            <div className="flex flex-col items-start gap-2">
              <div className="bg-zinc-800/50 px-5 md:px-6 py-3 rounded-2xl rounded-tl-none text-[13px] md:text-sm text-zinc-300 border border-white/5">Who are you?</div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="bg-white text-black px-5 md:px-6 py-3 rounded-2xl rounded-tr-none text-[13px] md:text-sm font-medium max-w-[90%] shadow-lg">I'm Romain G, a UX/UI Designer and Product Builder passionate about creating digital experiences that are both useful and accessible.</div>
            </div>
          </div>

          <button 
            onClick={onContactClick}
            className="w-full py-4 border border-white/10 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden relative group transition-all duration-300 hover:border-blue-600/50"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Get in touch</span>
            <div className="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-32">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter mb-4 text-white">My Skills</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-[11px] md:text-sm uppercase tracking-widest font-bold leading-relaxed px-4">
            I make sure every product I design is accessible, offering an inclusive experience that adapts to all users' needs.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="glass-card group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center gap-3 md:gap-4 border border-white/5 hover:border-blue-600/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]">
              <div className="w-10 h-10 md:w-12 md:h-12 grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-blue-500 text-center transition-colors duration-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Creative Side Section */}
      <section className="mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter mb-4 text-white">Creative Side</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-[11px] md:text-sm uppercase tracking-widest font-bold leading-relaxed px-4">
            Besides UX/UI, I also explore other creative fields that inspire my design work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Motion Design */}
          <a 
            href="https://www.behance.net/romaingras" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group space-y-6 block"
          >
            <div className="relative aspect-[16/11] rounded-[2.5rem] overflow-hidden border border-white/10 glass-card">
              <img 
                src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768329739/MotionDesign_qcxofi.avif" 
                alt="Motion Design Showcase" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">View on Behance</span>
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                 </div>
              </div>
            </div>
            <div className="px-4">
              <h3 className="text-xl md:text-2xl font-heading font-black uppercase tracking-tighter text-white mb-3 group-hover:text-blue-500 transition-colors">Motion Design</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md font-medium">
                I create short animations and motion experiments that bring ideas and interfaces to life.
              </p>
            </div>
          </a>

          {/* Music Production */}
          <a 
            href="https://soundcloud.com/sesotris" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group space-y-6 block"
          >
            <div className="relative aspect-[16/11] rounded-[2.5rem] overflow-hidden border border-white/10 glass-card">
              <img 
                src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768329739/Soundcloud_w7ferq.avif" 
                alt="Music Production Showcase" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Listen on SoundCloud</span>
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                 </div>
              </div>
            </div>
            <div className="px-4">
              <h3 className="text-xl md:text-2xl font-heading font-black uppercase tracking-tighter text-white mb-3 group-hover:text-blue-500 transition-colors">Music</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md font-medium">
                I produce electronic music as a way to explore rhythm, mood, and storytelling in another medium.
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
