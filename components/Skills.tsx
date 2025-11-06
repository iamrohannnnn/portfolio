
import React from 'react';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="glass-card rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-slate-800/60 hover:-translate-y-2">
        {skill.icon}
        <h3 className="mt-4 font-semibold text-lg">{skill.name}</h3>
    </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Top Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {SKILLS.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
            ))}
        </div>
    </section>
  );
};

export default Skills;
