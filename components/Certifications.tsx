
import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="gradient-text">Licenses & Certifications</span>
      </h2>
      <div className="max-w-4xl mx-auto">
        {CERTIFICATIONS.map((cert, index) => (
          <div key={index} className="glass-card rounded-lg p-4 mb-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-white">{cert.name}</h3>
              <p className="text-sm text-slate-400">{cert.issuer}</p>
              <p className="text-xs text-slate-500 mt-1">{cert.date}</p>
            </div>
            <button className="text-sm bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Show Credential
            </button>
          </div>
        ))}
        <p className="text-center mt-8 text-slate-400">... and 25+ more!</p>
      </div>
    </section>
  );
};

export default Certifications;
