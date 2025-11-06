
import React from 'react';
import { PROFILE_DATA } from '../constants';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const About: React.FC = () => {
  return (
    <section id="about">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">About Me</span>
        </h2>
        <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
                <img 
                    src={`https://picsum.photos/seed/rohan/500/500`} 
                    alt="Rohan Hiwrale" 
                    className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto border-4 border-indigo-500 shadow-lg"
                />
            </div>
            <div className="md:col-span-3">
                <p className="text-lg text-slate-400 mb-6">{PROFILE_DATA.about}</p>
                <ul className="space-y-4">
                    {PROFILE_DATA.aboutHighlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-3">
                            <CheckIcon />
                            <span>{highlight}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  );
};

export default About;
