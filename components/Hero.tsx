
import React from 'react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[60vh] flex flex-col justify-center text-center">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4">
        <span className="gradient-text">{PROFILE_DATA.name}</span>
      </h1>
      <p className="text-lg md:text-2xl text-slate-400 max-w-4xl mx-auto mb-8">
        {PROFILE_DATA.tagline}
      </p>
      <div className="flex justify-center items-center space-x-4 text-sm text-slate-500">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        <span>{PROFILE_DATA.location}</span>
      </div>
       <div className="mt-8">
            <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105">
                Open to Opportunities
            </a>
       </div>
    </section>
  );
};

export default Hero;
