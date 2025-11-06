
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        <span className="gradient-text">Experience</span>
      </h2>
      <div className="relative border-l-2 border-indigo-800 pl-10">
        {EXPERIENCE.map((item, index) => (
          <div key={index} className="mb-12">
            <div className="absolute -left-3.5 mt-1.5 h-6 w-6 rounded-full bg-indigo-600 border-4 border-[#0a0a0a]"></div>
            <p className="text-sm text-slate-400">{item.period}</p>
            <h3 className="text-xl font-bold text-white mt-1">{item.role}</h3>
            <p className="text-indigo-400 font-semibold">{item.company}</p>
            <p className="text-xs text-slate-500 mb-4">{item.location}</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
                {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.map((skill, i) => (
                <span key={i} className="bg-slate-800 text-indigo-300 text-xs font-medium px-2.5 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
