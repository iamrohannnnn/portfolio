
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="gradient-text">Education</span>
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="glass-card rounded-lg p-6">
            <h3 className="font-bold text-xl text-white">{edu.institution}</h3>
            <p className="text-indigo-400">{edu.degree}</p>
            <p className="text-sm text-slate-500 mt-2">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
