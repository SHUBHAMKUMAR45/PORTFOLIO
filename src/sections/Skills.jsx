import React, { useEffect, useState } from 'react';
import { skillsData } from '../constants/index.js';

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger progress bar animations after mounting
    const timer = setTimeout(() => setIsMounted(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    {
      id: 'ai',
      title: 'AI Engineering',
      skills: skillsData.ai
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      skills: skillsData.ml
    },
    {
      id: 'ds',
      title: 'Data Science & Visualization',
      skills: skillsData.ds
    },
    {
      id: 'web',
      title: 'Full-Stack MERN / Next.js',
      skills: skillsData.web
    }
  ];

  return (
    <section className="my-20 c-space" id="skills">
      <div className="w-full text-center mb-12">
        <p className="text-xs sm:text-sm font-orbitron font-bold tracking-[0.25em] text-cyber-blue uppercase animate-pulse mb-2">
          Technical Capabilities
        </p>
        <h2 className="text-4xl font-bold font-orbitron text-cyber-gradient filter drop-shadow-[0_0_12px_rgba(0,240,255,0.2)]">
          My Expertise & Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div 
            key={cat.id}
            className="rounded-2xl p-6 border border-cyber-blue/10 bg-[#07080f]/80 backdrop-blur-md shadow-2xl hover:border-cyber-blue/30 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Card Title Header */}
            <h3 className="text-base sm:text-lg font-bold font-orbitron text-white text-center mb-6 border-b border-white-500/10 pb-2.5 tracking-wider">
              {cat.title}
            </h3>

            {/* List of Skills with Progress Bars */}
            <div className="flex flex-col gap-5">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col w-full">
                  
                  {/* Label Row */}
                  <div className="flex justify-between items-center text-xs font-spacegrotesk font-semibold text-white-700">
                    <div className="flex items-center gap-2 select-none">
                      <span className="text-sm">{skill.icon}</span>
                      <span className="hover:text-white transition-colors">{skill.name}</span>
                    </div>
                    <span className="text-cyber-purple font-mono text-[10px] tracking-wider">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progressive Bar track */}
                  <div className="w-full h-1.5 bg-[#131627] rounded-full mt-2 overflow-hidden relative">
                    <div 
                      style={{ width: isMounted ? `${skill.level}%` : '0%' }}
                      className="h-full rounded-full bg-gradient-to-r from-cyber-purple to-cyber-pink shadow-[0_0_8px_rgba(189,0,255,0.4)] transition-all duration-[1500ms] ease-out"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
