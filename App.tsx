
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import StudyProject from './components/StudyProject';
import About from './components/About';
import CaseStudy from './components/CaseStudy';
import FocusShieldStudy from './components/FocusShieldStudy';
import PralineStudy from './components/PralineStudy';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'case-study' | 'focus-shield' | 'praline-brand'>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    if (page === 'case-study') {
      setCurrentPage('case-study');
    } else if (page === 'focus-shield') {
      setCurrentPage('focus-shield');
    } else if (page === 'praline-brand') {
      setCurrentPage('praline-brand');
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const toggleContact = () => setIsContactOpen(!isContactOpen);

  return (
    <div className="min-h-screen hero-gradient overflow-x-hidden">
      <Navbar 
        onNavigate={setCurrentPage} 
        currentPage={currentPage} 
        onContactClick={toggleContact} 
      />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onContactClick={toggleContact} />
            <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
              <div className="flex items-center justify-between mb-16">
                <h2 className="text-4xl font-heading font-black tracking-tighter sm:text-6xl uppercase">
                  Portfolio <span className="text-zinc-500">Selected Works</span>
                </h2>
                <div className="h-px flex-1 bg-zinc-800 mx-8 hidden md:block"></div>
              </div>
              <Projects onProjectClick={(id) => {
                if (id === 'focus-shield') setCurrentPage('focus-shield');
                if (id === 'praline-brand') setCurrentPage('praline-brand');
              }} />
              <StudyProject onOpenStudy={() => setCurrentPage('case-study')} />
            </section>
          </>
        )}
        {currentPage === 'about' && <About onContactClick={toggleContact} />}
        {currentPage === 'case-study' && <CaseStudy onBack={() => setCurrentPage('home')} />}
        {currentPage === 'focus-shield' && <FocusShieldStudy onBack={() => setCurrentPage('home')} />}
        {currentPage === 'praline-brand' && <PralineStudy onBack={() => setCurrentPage('home')} />}
      </main>

      <Footer onContactClick={toggleContact} onNavigate={setCurrentPage} />
      
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
};

export default App;
