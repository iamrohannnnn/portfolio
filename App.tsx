import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import FeaturedPosts from './components/FeaturedPosts';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-slate-300">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-5" style={{backgroundImage: "url('https://picsum.photos/seed/space/2000/3000')"}}></div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-12 py-12">
          <Hero />
          <div className="space-y-24 md:space-y-32 mt-24 md:mt-32">
            <About />
            <Skills />
            <Experience />
            <FeaturedPosts />
            <Certifications />
            <Contact />
          </div>
        </main>
        <AIAssistant />
      </div>
    </div>
  );
};

export default App;