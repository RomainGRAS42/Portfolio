
import React from 'react';
import InteractiveText from './InteractiveText';

interface PralineStudyProps {
  onBack: () => void;
}

const PralineStudy: React.FC<PralineStudyProps> = ({ onBack }) => {
  const typographyData = [
    { style: "Text Style 3", font: "PlayfairDisplay", hex: "#ffffff", color: "#ffffff", variant: "Bold", size: "72px", spacing: "-1.8px", height: "72px", sample: "Playfair" },
    { style: "Text Style 4", font: "PlayfairDisplay", hex: "#f0c2c9", color: "#f0c2c9", variant: "Bold", size: "72px", spacing: "-1.8px", height: "72px", sample: "Playfair" },
    { style: "Text Style", font: "PlayfairDisplay", hex: "#AA2B45", color: "#AA2B45", variant: "Bold", size: "56px", spacing: "None", height: "67.2px", sample: "Playfair" },
    { style: "Text Style 5", font: "PlayfairDisplay", hex: "#847062", color: "#847062", variant: "Regular", size: "20px", spacing: "None", height: "32.5px", sample: "Playfair" },
    { style: "Text Style 2", font: "Poppins", hex: "#F9F8F5", color: "#F9F8F5", variant: "Regular", size: "18px", spacing: "None", height: "27px", sample: "Poppins" }
  ];

  const h2Classes = "text-[8.5vw] sm:text-[9vw] md:text-7xl font-heading font-black uppercase tracking-tighter text-white leading-[0.9] mb-10";

  return (
    <div className="pt-32 pb-20 overflow-hidden bg-black min-h-screen selection:bg-rose-500/30">
      {/* Navigation Header */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-16">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 hover:text-white transition-all group"
        >
          <svg className="w-4 h-4 transform group-hover:-translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
          Index
        </button>
      </section>

      {/* Main Hero Section */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="bg-rose-600/10 border border-rose-600/20 text-rose-500 px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.3em] inline-block mb-8">Case Study 02</div>
            <h1 className="text-[14vw] sm:text-[12vw] md:text-[7vw] font-heading font-black uppercase tracking-tighter leading-[0.85] text-white mb-8">
              <InteractiveText text="PRALINE" hoverColor="hover:text-rose-500" /> <br/>
              <InteractiveText text="BRAND" hoverColor="hover:text-rose-500" className="text-zinc-500" />
            </h1>
            <p className="text-lg md:text-2xl font-heading text-zinc-400 uppercase tracking-tighter max-w-2xl leading-tight">
              Enhancing elegance and usability for a premium chocolate experience.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
             <div className="inline-flex flex-col gap-2">
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Year</span>
                <span className="text-white font-bold text-sm">2024 — Redesign</span>
             </div>
          </div>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900/50 mb-4">
           <img 
             src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768400948/OrignielHP_nmgbpp.avif" 
             alt="Praline Brand Hero" 
             className="w-full h-full object-cover object-top"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <p className="text-zinc-600 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] mt-4">MDPL Visual Identity Redesign — Premium Concept</p>
      </section>

      {/* 01 Research & Audit */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-24 md:mb-48">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24 mb-16">
          <div className="lg:w-1/2 space-y-8 md:space-y-12 py-10">
            <div>
              <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-6">01 / Research & Audit</span>
              <h2 className={h2Classes}>
                The Original website
              </h2>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 md:mb-12">
                I started by reviewing the existing Maison de la Praline website to understand what was working and what could be improved from a UI/UX perspective, accessibility, and product presentation.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              <h3 className="text-white text-xl font-heading font-black uppercase tracking-tighter">Current Homepage Analysis</h3>
              
              <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/5">
                <h4 className="text-white text-[11px] font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span> Strengths
                </h4>
                <div className="space-y-6 text-zinc-400 text-xs leading-relaxed">
                  <p><strong className="text-zinc-100 uppercase tracking-wide">Branding and Visual Identity —</strong> The hero banner effectively presents the brand with the Praline Rose product front and center. Warm, appetizing colors (reds, pinks, browns) match the confectionery theme, creating emotional engagement.</p>
                  <p><strong className="text-zinc-100 uppercase tracking-wide">Visual Hierarchy —</strong> Sections are clearly separated (hero → news/updates → product ranges), making scanning easy. The two product ranges are visually distinct, allowing quick recognition.</p>
                  <p><strong className="text-zinc-100 uppercase tracking-wide">Navigation —</strong> Top horizontal navigation has clear categories. The footer includes key links and partner logos, enhancing trust.</p>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-6 md:p-8 border border-rose-500/10">
                <h4 className="text-white text-[11px] font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.5)]"></span> Weaknesses / Areas for Improvement
                </h4>
                <div className="space-y-6 md:space-y-8 text-zinc-400 text-xs leading-relaxed">
                  <div>
                    <p><strong className="text-rose-400 uppercase tracking-wide">Readability —</strong> Central sections are text-heavy with little visual relief. Small font size reduces readability.</p>
                    <p className="mt-2 text-zinc-500 italic underline underline-offset-4">Recommendation: Use bullet points and icons to break up dense text.</p>
                  </div>
                  <div>
                    <p><strong className="text-rose-400 uppercase tracking-wide">CTA Visibility —</strong> Main CTA blends into the visuals. No strong textual CTA like “Voir la gamme complète.”</p>
                    <p className="mt-2 text-zinc-500 italic underline underline-offset-4">Recommendation: Use higher-contrast buttons in Z-pattern hot spots.</p>
                  </div>
                  <div>
                    <p><strong className="text-rose-400 uppercase tracking-wide">Mobile Responsiveness —</strong> Large images and multi-column sections may not adapt well to mobile. Navigation could feel cramped.</p>
                    <p className="mt-2 text-zinc-500 italic underline underline-offset-4">Recommendation: Stack sections for mobile-first design.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6 self-center h-full">
             <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900/40 aspect-[4/5] lg:h-[780px] w-full group">
                <img 
                  src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768400948/OrignielHP_nmgbpp.avif" 
                  alt="Original Homepage Analysis" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
             </div>
             <p className="text-zinc-600 text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] px-4 text-center">Fig A: Old responsive — Responsive on iPhone 12 Pro</p>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 max-w-4xl mx-auto text-center">
          <h4 className="text-white text-[11px] font-black uppercase tracking-[0.4em] mb-6">Overall Evaluation</h4>
          <p className="text-zinc-400 text-sm leading-relaxed italic max-w-2xl mx-auto">
            The homepage has strong branding and a consistent color palette aligned with artisanal chocolate. Optimizing readability, CTA visibility, accessibility, and adding subtle interactive cues would make it more engaging while respecting the brand's heritage.
          </p>
        </div>
      </section>

      {/* 02 Styleguide Section */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-24 md:mb-48">
        <div className="mb-12 md:mb-20 text-center lg:text-left">
          <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-6">02 / Design</span>
          <h2 className={h2Classes}>
            Local Styleguide.
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-3xl leading-relaxed lg:mx-0 mx-auto">
            The visual foundation is built on 7 core color tokens and a 5-tier typography system, ensuring accessibility and consistency.
          </p>
        </div>

        <div className="mb-20 md:mb-32">
          <h3 className="text-white text-[11px] font-black uppercase tracking-[0.4em] mb-8 md:mb-12 border-b border-white/10 pb-4">Local Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
            {[
              { name: "BGCOLOR", hex: "#AA2B45", desc: "Brand" },
              { name: "faded-red-95", hex: "#E5484D", desc: "95%" },
              { name: "white-95", hex: "#F9F8F5", desc: "95%" },
              { name: "very-light-purple", hex: "#FAEBED", desc: "Accent" },
              { name: "white", hex: "#F9F8F5", desc: "Base" },
              { name: "camo-green", hex: "#563C29", desc: "Chocolate" },
              { name: "faded-red", hex: "#E5484D", desc: "Primary" }
            ].map((color, idx) => (
              <div key={idx} className="space-y-3">
                <div 
                  className="aspect-square w-full rounded-xl border border-white/10 shadow-lg"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <div>
                  <p className="text-white text-[8px] md:text-[9px] font-black uppercase tracking-widest truncate">{color.name}</p>
                  <p className="text-zinc-500 text-[7px] md:text-[8px] uppercase font-bold mt-1">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 md:space-y-12">
          <h3 className="text-white text-[11px] font-black uppercase tracking-[0.4em] mb-8 border-b border-white/10 pb-4">Typography System</h3>
          
          <div className="hidden md:block glass-card rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden">
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr className="text-zinc-600 text-[8px] font-black uppercase tracking-[0.3em] border-b border-white/5 bg-white/[0.02]">
                  <th className="px-8 py-6 w-[24%]">Style</th>
                  <th className="px-8 py-6 w-[14%]">Font</th>
                  <th className="px-8 py-6 w-[14%]">Color</th>
                  <th className="px-8 py-6 w-[10%]">Variant</th>
                  <th className="px-8 py-6 w-[10%]">Size</th>
                  <th className="px-8 py-6 w-[10%]">Letter Spacing</th>
                  <th className="px-8 py-6 w-[10%]">Line Height</th>
                  <th className="px-8 py-6 w-[8%] text-right">Align</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                {typographyData.map((item, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                    <td className="px-8 py-10 align-baseline">
                      <div className="flex flex-col">
                        <span 
                          className={`text-xl md:text-2xl leading-none ${item.font === 'Poppins' ? 'font-sans' : 'font-serif'}`} 
                          style={{ color: item.color }}
                        >
                          {item.sample}
                        </span>
                        <span className="text-[10px] text-zinc-600 font-black uppercase tracking-widest mt-3">
                          {item.style}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-10 align-baseline">
                      <span className="font-black text-[9px] uppercase tracking-widest text-zinc-500 leading-none inline-block">
                        {item.font}
                      </span>
                    </td>
                    <td className="px-8 py-10 align-baseline">
                      <div className="flex items-center gap-3 leading-none">
                        <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: item.hex }}></div>
                        <span className="text-[9px] font-bold uppercase text-zinc-600">{item.hex}</span>
                      </div>
                    </td>
                    <td className="px-8 py-10 align-baseline text-white">
                      <span className="font-bold text-[10px] uppercase leading-none inline-block">
                        {item.variant}
                      </span>
                    </td>
                    <td className="px-8 py-10 align-baseline text-white">
                      <span className="font-bold text-[10px] leading-none inline-block">
                        {item.size}
                      </span>
                    </td>
                    <td className="px-8 py-10 align-baseline text-zinc-500">
                      <span className="font-bold text-[10px] leading-none inline-block">
                        {item.spacing}
                      </span>
                    </td>
                    <td className="px-8 py-10 align-baseline text-zinc-500">
                      <span className="font-bold text-[10px] leading-none inline-block">
                        {item.height}
                      </span>
                    </td>
                    <td className="px-8 py-10 text-right align-baseline">
                      <svg className="w-3 h-3 text-zinc-500 ml-auto inline-block align-middle" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/>
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 03 Visual Redesign Section */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-24 md:mb-48">
        <div className="mb-12 md:mb-20">
          <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-6">03 / Visual Redesign</span>
          <h2 className={h2Classes}>
            Digital <br className="md:hidden" /> Transformation.
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-3xl leading-relaxed">
            Reimaging the luxury chocolate shopping experience through high-fidelity interfaces and narrative-driven layouts.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12 mb-20 md:mb-32">
          <div className="flex items-center gap-6">
            <h3 className="text-white text-[11px] font-black uppercase tracking-[0.4em] whitespace-nowrap">Homepage Desktop</h3>
            <div className="h-px w-full bg-white/10"></div>
          </div>
          
          <div className="rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900/40 shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
            <img 
              src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768400948/NwDesign_HP_bugfka.webp" 
              alt="Praline Brand New Homepage Design" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Final Outcome */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-20 md:mb-48 pt-24 border-t border-white/5">
        <div className="bg-white/5 border border-white/5 rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 text-center">
          <span className="text-rose-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8 block">Project Outcome</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter text-white mb-10 max-w-4xl mx-auto">
            "The redesign transformed an outdated catalog into a premium digital storefront."
          </h2>
          <div className="pt-6">
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-rose-500 transition-all group"
            >
              <span className="w-12 h-px bg-white/20 group-hover:bg-rose-500 transition-all"></span>
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PralineStudy;
