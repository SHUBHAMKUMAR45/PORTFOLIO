import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import { myProjects, archiveProjects } from '../constants/index.js';
import ProjectDashboard from '../components/ProjectDashboard.jsx';

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'archive'
    ? archiveProjects
    : myProjects.filter(p => activeFilter === 'all' || p.category === activeFilter);
  const projectCount = filteredProjects.length;

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setSelectedProjectIndex(0);
  };

  useGSAP(() => {
    if (projectCount > 0) {
      gsap.fromTo(`.animatedText`, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' });
    }
  }, [selectedProjectIndex, activeFilter, projectCount]);

  const currentProject = filteredProjects[selectedProjectIndex] || null;

  return (
    <section className="my-20 c-space" id="project">
      <p className="head-text text-cyber-gradient font-orbitron">My Selected Work</p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 sm:gap-4 justify-center items-center mt-8 mb-4">
        {[
          { id: 'all', label: 'All Collections' },
          { id: 'ai', label: 'AI & Agents' },
          { id: 'fullstack', label: 'Full-Stack' },
          { id: 'backend', label: 'Backend' },
          { id: 'mlds', label: 'ML & Data Science' },
          { id: 'devops', label: 'DevOps' },
          { id: 'archive', label: 'Archived Work' }
        ].map(tab => (
          <button
            type="button"
            key={tab.id}
            onClick={() => handleFilterChange(tab.id)}
            className={`px-4 py-2 rounded-lg text-xs font-orbitron font-bold transition-all duration-300 border select-none cursor-pointer ${
              activeFilter === tab.id
                ? 'bg-cyber-blue/15 border-cyber-blue text-cyber-blue shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                : 'border-cyber-blue/10 hover:border-cyber-blue/40 bg-[#060814]/40 text-white-600 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {projectCount > 0 && currentProject ? (
        <div className="grid w-full grid-cols-1 gap-5 mt-10 lg:grid-cols-2">
          {/* Project details card */}
          <div className="lg:h-[420px] h-auto relative flex flex-col justify-between px-5 py-10 rounded-2xl border border-cyber-blue/10 bg-[#07080f]/40 backdrop-blur-sm shadow-2xl sm:p-10 shadow-black-200/50 hover:border-cyber-blue/35 transition-all duration-300">
            <div className="absolute top-0 right-0 pointer-events-none opacity-20">
              <img src={currentProject.spotlight} alt="spotlight" className="object-cover w-full h-96 rounded-xl" />
            </div>

            <div className="flex flex-col gap-5 my-5 text-white-600 z-10">
              <p className="text-2xl font-bold font-orbitron text-white animatedText filter drop-shadow-[0_0_8px_rgba(0,240,255,0.2)]">
                {currentProject.title}
              </p>

              <p className="animatedText font-spacegrotesk leading-relaxed text-sm">
                {currentProject.desc}
              </p>
              <p className="animatedText font-spacegrotesk leading-relaxed text-xs text-cyber-blue/85">
                {currentProject.subdesc}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-5 z-10 mt-5">
              <a
                className="flex items-center gap-2 cursor-pointer text-white-600 hover:text-cyber-blue transition-colors font-orbitron text-sm font-semibold border border-cyber-blue/20 hover:border-cyber-blue/60 bg-cyber-blue/5 px-4 py-2 rounded-lg"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer">
                <p>Source Code</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="size-3 invert brightness-0" />
              </a>

              <div className="flex items-center gap-4">
                <button type="button" aria-label="Previous Project" className="arrow-btn border border-cyber-blue/20 hover:border-cyber-blue/60 transition-colors" onClick={() => handleNavigation('previous')}>
                  <img src="/assets/left-arrow.png" alt="left arrow" />
                </button>

                <button type="button" aria-label="Next Project" className="arrow-btn border border-cyber-blue/20 hover:border-cyber-blue/60 transition-colors" onClick={() => handleNavigation('next')}>
                  <img src="/assets/right-arrow.png" alt="right arrow" className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Cyber Dashboard Screen */}
          <div className="flex items-center justify-center relative overflow-hidden">
            <ProjectDashboard project={currentProject} />
          </div>
        </div>
      ) : (
        <div className="w-full text-center py-20 text-white-500 font-spacegrotesk">
          No projects configured in this domain.
        </div>
      )}
    </section>
  );
};

export default Projects;
