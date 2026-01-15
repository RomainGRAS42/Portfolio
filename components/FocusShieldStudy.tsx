
import React from 'react';
import InteractiveText from './InteractiveText';

interface FocusShieldStudyProps {
  onBack: () => void;
}

const FocusShieldStudy: React.FC<FocusShieldStudyProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-20 overflow-hidden bg-black min-h-screen selection:bg-blue-500/30">
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
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="bg-blue-600/10 border border-blue-600/20 text-blue-500 px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.3em] inline-block mb-8">Case Study 01</div>
            <h1 className="text-[12vw] md:text-[7vw] font-heading font-black uppercase tracking-tighter leading-[0.85] text-white mb-8">
              <InteractiveText text="ZORYA" hoverColor="hover:text-blue-500" />
            </h1>
            <p className="text-xl md:text-2xl font-heading text-zinc-400 uppercase tracking-tighter max-w-2xl leading-tight">
              Reclaiming focus in the age of infinite scroll.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
             <div className="inline-flex flex-col gap-2">
                <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Year</span>
                <span className="text-white font-bold text-sm">2024 — Ongoing</span>
             </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900/50 mb-4">
           <img 
             src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768387179/LH0rJ9zNXxq6qrdvQQNqHEG3mhk_i4ecil.avif" 
             alt="Zorya Hero Concept" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.3em] mt-4">Zorya Visual Identity Concept — Focus Shield v1.0</p>

        {/* Intro Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-16 mt-16">
          <div className="lg:col-span-8">
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Zorya is a cross-platform mobile app designed to help users reduce digital distractions and build healthier tech habits.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              The project began from my original concept and grew into a full product vision, from defining the user experience to crafting the brand identity. I led the overall direction, designed the interface in Figma, and developed a playful, engaging style inspired by apps like Duolingo. Working closely with a Flutter developer, I ensured smooth alignment between design and development, while iterating directly in the Figma file to refine every detail. The app is now under active development.
            </p>
          </div>
          <div className="lg:col-span-4 space-y-8">
            <div>
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest block mb-2">Role</span>
              <p className="text-white text-sm font-bold">Product Lead, UX/UI Designer, Branding</p>
            </div>
            <div>
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest block mb-2">Tools</span>
              <p className="text-white text-sm font-bold">Figma, AI, Dev. Team collaboration</p>
            </div>
            <div>
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest block mb-2">Timeline</span>
              <p className="text-white text-sm font-bold">3 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* 01 Project Presentation */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 space-y-8">
            <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] block">01 / Project Presentation</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-white leading-none">
              Zorya, a Focus App for the Scroll-Distracted Generation
            </h2>
            <div className="text-zinc-400 text-sm leading-relaxed space-y-4">
              <p>For this project, I initiated, designed, and currently lead the development of Zorya, a cross-platform mobile app built with Flutter to help adults regain control over their focus and screen time. Unlike traditional productivity tools or apps designed for students, Zorya addresses a specific pain point: the compulsive, unconscious use of platforms like TikTok and Instagram, which affects more than just Gen Z.</p>
              <p>According to Statista, the average adult now spends over 3 hours per day on their smartphone, with 50% of that time on social media apps. This often leads to stress, fatigue, and reduced productivity, especially for those working remotely or in high-distraction environments.</p>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4">
             <div className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900/40 aspect-[4/3] lg:aspect-video flex items-center justify-center p-8">
                <img 
                  src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768383061/graph_ikzm3o.png" 
                  alt="Market Stats Graph" 
                  className="w-full h-auto rounded-xl opacity-100"
                />
             </div>
             <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.3em] px-4">Fig A: Screen Time Analysis — Statista Data Insights</p>
          </div>
        </div>
      </section>

      {/* 02 Problem & Insight */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 space-y-8 lg:order-2">
            <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] block">02 / Problem & Insight</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-white leading-none">
              Bridging the <br/> Discipline Gap.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              After observing these behavioral patterns and discussing them with my circle (freelancers, students, remote workers), I realized there was a gap: existing apps are either too strict (blocking everything) or too vague (just timers). I wanted to create a tool that’s intelligent, non-judgmental, and helps build long-term digital discipline.
            </p>
          </div>
          <div className="lg:col-span-7 lg:order-1 flex flex-col gap-4">
             <div className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900/40 aspect-[4/3] lg:aspect-video">
                <img 
                  src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768385174/phoneorrun_rvyoj0.avif" 
                  alt="Problem Visualization" 
                  className="w-full h-full object-cover object-top opacity-100" 
                />
             </div>
             <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.3em] px-4 text-right">Insight Visualization: The internal struggle for control</p>
          </div>
        </div>
      </section>

      {/* 03 UX Direction & Product Thinking */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 space-y-8">
            <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] block">03 / UX & Product Thinking</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-white leading-none">
              A Supportive <br/> Companion.
            </h2>
            <div className="text-zinc-400 text-sm leading-relaxed space-y-4">
              <p>I started by mapping the user experience in Figma, designing a flow that minimizes friction from onboarding to activating focus mode. I drew inspiration from Duolingo’s gamified logic and Calm’s emotional tone, to make sure users feel supported, not judged.</p>
              <p>I led a multidisciplinary team working simultaneously on the Figma design system and the Flutter development, ensuring alignment between vision, UX, and technical constraints. Thanks to my UI Designer certification, I have a deep understanding of Figma, which allowed me to make major design adjustments directly from refining screen layouts to improving hierarchy and accessibility.</p>
              <p>I also created a custom mascot to humanize the experience and make the app emotionally relatable. To me, this mascot is a turning point: it elevates Zorya from just another focus app to an engaging, memorable tool a supportive companion for your brain.</p>
              <p>I iterated quickly inside Figma to maintain a cohesive, high-quality design system before moving forward with the development phase.</p>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4">
             <div className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900/40 aspect-[4/3] lg:aspect-video">
                <img 
                  src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768385174/homepage_of_the_app_bg1rkv.avif" 
                  alt="App Interface Design" 
                  className="w-full h-full object-cover opacity-100"
                />
             </div>
             <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.3em] px-4">Fig B: Final Prototype — High-fidelity Dashboard & Gamification Elements</p>
          </div>
        </div>
      </section>

      {/* 04 Team & Technical Oversight */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 space-y-8 lg:order-2">
            <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] block">04 / Oversight</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-white leading-none">
              Project Management <br/> & Delivery.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              I collaborate with a foreign Flutter developer, whom I personally fund. We hold bi-weekly meetings in English, during which I provide updated designs, clarify product requirements, and review implementation progress. I lead the project end-to-end from product vision to delivery, ensuring that each feature aligns with the user’s needs and the technical reality. My role bridges UX strategy, interface design, team coordination, and product execution.
            </p>
          </div>
          <div className="lg:col-span-7 lg:order-1 flex flex-col gap-4">
             <div className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900/40 aspect-[4/3] lg:aspect-video">
                <img 
                  src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768385174/teamprojet_c5osr9.avif" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover opacity-100"
                />
             </div>
             <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.3em] px-4 text-right">Workflow Illustration: Remote coordination & Sprint planning</p>
          </div>
        </div>
      </section>

      {/* Screen Gallery */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-24">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-white/5 pb-12">
           <div>
             <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-white">Screens.</h2>
             <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-2 italic">
               Visualizing the interface architecture and user flows.
             </p>
           </div>
        </div>

        {/* Dynamic Screen Grid */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-32">
           {/* Row 1: 3 Screens */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32 w-full">
              {/* Welcome */}
              <div className="space-y-6 flex flex-col">
                 <div className="aspect-[9/16] w-full max-w-[240px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/5">
                    <img src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768386288/welcomescren_tyhmvp.avif" className="w-full h-full object-contain p-4 opacity-100" />
                 </div>
                 <div className="text-center pt-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">01 / Onboarding</h4>
                    <p className="text-[8px] text-zinc-600 font-bold uppercase tracking-widest mt-2 italic">Initial focus shield state</p>
                 </div>
              </div>

              {/* Homepage */}
              <div className="space-y-6 lg:mt-32 flex flex-col">
                 <div className="aspect-[9/16] w-full max-w-[240px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/5">
                    <img src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768385174/homepage_lccwfg.avif" className="w-full h-full object-contain p-4 opacity-100" />
                 </div>
                 <div className="text-center pt-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">02 / Dashboard</h4>
                    <p className="text-[8px] text-zinc-600 font-bold uppercase tracking-widest mt-2 italic">Active habits overview</p>
                 </div>
              </div>

              {/* Stats */}
              <div className="space-y-6 flex flex-col">
                 <div className="aspect-[9/16] w-full max-w-[240px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/5">
                    <img src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768385175/Statistique_nlilw6.avif" className="w-full h-full object-contain p-4 opacity-100" />
                 </div>
                 <div className="text-center pt-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">03 / Analytics</h4>
                    <p className="text-[8px] text-zinc-600 font-bold uppercase tracking-widest mt-2 italic">Deep focus metrics</p>
                 </div>
              </div>
           </div>

           {/* Row 2: 2 Screens Centered */}
           <div className="flex flex-col sm:flex-row gap-x-12 gap-y-32 justify-center w-full">
              {/* Blocked App */}
              <div className="space-y-6 flex flex-col w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-3rem)] max-w-[320px]">
                 <div className="aspect-[9/16] w-full max-w-[240px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/5">
                    <img src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768385175/Blocked_App_ga6ihw.avif" className="w-full h-full object-contain p-4 opacity-100" />
                 </div>
                 <div className="text-center pt-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">04 / Shielding</h4>
                    <p className="text-[8px] text-zinc-600 font-bold uppercase tracking-widest mt-2 italic">Prevention layer interface</p>
                 </div>
              </div>

              {/* Time Session */}
              <div className="space-y-6 flex flex-col w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-3rem)] max-w-[320px]">
                 <div className="aspect-[9/16] w-full max-w-[240px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/5">
                    <img src="https://res.cloudinary.com/di4iuss0t/image/upload/v1768385174/Timefocussession_kotx9f.avif" className="w-full h-full object-contain p-4 opacity-100" />
                 </div>
                 <div className="text-center pt-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">05 / Focus Session</h4>
                    <p className="text-[8px] text-zinc-600 font-bold uppercase tracking-widest mt-2 italic">Countdown and session control</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Outcome Section - Moved to End */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-48 pt-24 border-t border-white/5">
        <div className="bg-white/5 border border-white/5 rounded-[3rem] p-12 md:p-20 text-center">
          <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8 block">Outcome & Next Steps</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-white mb-10 max-w-4xl mx-auto">
            "Zorya laid the foundation for a meaningful product vision: a playful, empathetic assistant to help users manage screen time in a healthier way."
          </h2>
          <div className="max-w-2xl mx-auto space-y-12">
            <p className="text-zinc-400 text-base leading-relaxed italic">
              While the project was self-funded and eventually paused for financial reasons, it remains a strong demonstration of my ability to originate ideas, lead product direction, and craft a complete UX/UI and brand identity. The learnings from Zorya continue to inspire my future work and collaborations.
            </p>
            
            <div className="pt-6">
              <button 
                onClick={onBack}
                className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-blue-500 transition-all group"
              >
                <span className="w-12 h-px bg-white/20 group-hover:bg-blue-500 transition-all"></span>
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 md:px-16 max-w-4xl mx-auto text-center mb-20">
         <div className="glass-card rounded-[3rem] p-12 md:p-20 border border-white/5 shadow-inner">
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-white mb-8">Ready for impact?</h2>
            <button 
              onClick={onBack}
              className="bg-white text-black px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-zinc-200 transition-all active:scale-95 shadow-2xl"
            >
              Contact me
            </button>
         </div>
      </section>
    </div>
  );
};

export default FocusShieldStudy;
