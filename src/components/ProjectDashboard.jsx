import { useState, useEffect, useRef } from 'react';

const ProjectDashboard = ({ project }) => {
  const [activeTab, setActiveTab] = useState('terminal');
  const [logs, setLogs] = useState([]);
  const containerRef = useRef(null);

  // Terminal log simulator (instantly loads to prevent jitter/scrolling)
  useEffect(() => {
    if (!project) return;
    
    const projectKey = project.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const techString = project.tags ? project.tags.join(', ') : 'React, Tailwind';
    
    const logsSequence = [
      `shubham@portfolio:~$ init --project=${projectKey}`,
      `⚙️  BOOTING CORE SYSTEM ENVIRONMENT...`,
      `📦 MOUNTING ARTIFACT: "${project.title}"`,
      `🔍 INTEGRATING DEPENDENCIES... [OK]`,
      `⚡ LOADED TECH STACK: [ ${techString} ]`,
      `📡 ESTABLISHING CONNECTION TO SECURE SERVICES...`,
      `   ├─ DATABASE: [${project.specs?.database || 'OK'}]`,
      `   ├─ HOSTING: [${project.specs?.hosting || 'OK'}]`,
      `   └─ SECURITY: [${project.specs?.security || 'VERIFIED'}]`,
      `🚀 APPLICATION LAUNCHED SUCCESSFULY.`,
      `🟢 RUNNING DIAGNOSTICS... [0 ERRORS, 0 WARNINGS]`,
      `📶 SYSTEM ONLINE | Latency: ${project.specs?.latency || '<50ms'} | Live Port: 3000`
    ];

    setLogs(logsSequence);
  }, [project]);

  // Scroll to bottom of terminal container only, preventing page jumping
  useEffect(() => {
    if (activeTab === 'terminal' && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs, activeTab]);

  if (!project) return null;

  // Custom colors based on project category to make it dynamic
  const getThemeColor = () => {
    switch (project.category) {
      case 'ai':
        return {
          border: 'border-cyber-blue/30 hover:border-cyber-blue/60',
          text: 'text-cyber-blue',
          bg: 'bg-cyber-blue/5',
          glow: 'shadow-[0_0_20px_rgba(0,240,255,0.15)]',
          badge: 'bg-cyber-blue/10 text-cyber-blue border-cyber-blue/30',
          progress: 'bg-cyber-blue shadow-[0_0_10px_rgba(0,240,255,0.7)]'
        };
      case 'fullstack':
        return {
          border: 'border-cyber-purple/30 hover:border-cyber-purple/60',
          text: 'text-cyber-purple',
          bg: 'bg-cyber-purple/5',
          glow: 'shadow-[0_0_20px_rgba(189,0,255,0.15)]',
          badge: 'bg-cyber-purple/10 text-cyber-purple border-cyber-purple/30',
          progress: 'bg-cyber-purple shadow-[0_0_10px_rgba(189,0,255,0.7)]'
        };
      case 'devops':
        return {
          border: 'border-cyber-pink/30 hover:border-cyber-pink/60',
          text: 'text-cyber-pink',
          bg: 'bg-cyber-pink/5',
          glow: 'shadow-[0_0_20px_rgba(255,0,127,0.15)]',
          badge: 'bg-cyber-pink/10 text-cyber-pink border-cyber-pink/30',
          progress: 'bg-cyber-pink shadow-[0_0_10px_rgba(255,0,127,0.7)]'
        };
      default:
        return {
          border: 'border-cyber-blue/30 hover:border-cyber-blue/60',
          text: 'text-cyber-blue',
          bg: 'bg-cyber-blue/5',
          glow: 'shadow-[0_0_20px_rgba(0,240,255,0.15)]',
          badge: 'bg-cyber-blue/10 text-cyber-blue border-cyber-blue/30',
          progress: 'bg-cyber-blue shadow-[0_0_10px_rgba(0,240,255,0.7)]'
        };
    }
  };

  const theme = getThemeColor();

  return (
    <div className={`w-full h-[420px] flex flex-col rounded-2xl border bg-[#05060b]/60 backdrop-blur-md overflow-hidden transition-all duration-500 ${theme.border} ${theme.glow}`}>
      {/* Console Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#080911]/80 border-b border-white-500/10">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="text-[10px] font-mono text-white-500 ml-2 select-none uppercase tracking-wider">
            SYSTEM_OS://{project.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.log
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse" />
          <span className="text-[9px] font-orbitron font-bold text-[#27c93f] tracking-wide select-none">
            ONLINE
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-[#07080e]/40 border-b border-white-500/5">
        {[
          { id: 'terminal', label: '💻 TERMINAL' },
          { id: 'metrics', label: '📊 ARCHITECTURE' },
          { id: 'specs', label: '⚙️ SYSTEM INFO' }
        ].map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2.5 text-center text-[10px] sm:text-xs font-orbitron font-bold border-r border-white-500/5 transition-all duration-300 select-none cursor-pointer ${
              activeTab === tab.id
                ? `${theme.bg} ${theme.text} border-b-2 border-b-current`
                : 'text-white-500 hover:text-white hover:bg-white-500/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* View Area */}
      <div ref={containerRef} className="flex-1 p-5 overflow-y-auto font-mono text-[11px] leading-relaxed text-[#cbe3db]">
        {activeTab === 'terminal' && (
          <div className="h-full flex flex-col justify-start align-baseline scrollbar-thin">
            {logs.map((log, i) => (
              <div key={i} className="mb-1.5 whitespace-pre-wrap font-mono">
                {log.startsWith('shubham') ? (
                  <span>
                    <span className="text-[#5af78e]">shubham@portfolio</span>
                    <span className="text-white-500">:</span>
                    <span className="text-[#57c7ff]">~$</span>{' '}
                    <span className="text-white font-semibold">{log.split('~$ ')[1]}</span>
                  </span>
                ) : log.includes('[OK]') || log.includes('[CONNECTED]') || log.includes('[VERIFIED]') || log.includes('SUCCESSFULY') || log.includes('ONLINE') ? (
                  <span>
                    {log.split(/(\[OK\]|\[CONNECTED\]|\[VERIFIED\]|SUCCESSFULY|ONLINE)/).map((part, index) => {
                      if (part === '[OK]' || part === '[CONNECTED]' || part === '[VERIFIED]' || part === 'SUCCESSFULY' || part === 'ONLINE') {
                        return <span key={index} className="text-[#5af78e] font-bold">{part}</span>;
                      }
                      return part;
                    })}
                  </span>
                ) : (
                  <span>{log}</span>
                )}
              </div>
            ))}
            {/* Blinking Cursor */}
            <div className="flex items-center mt-1">
              <span className="text-[#5af78e]">shubham@portfolio</span>
              <span className="text-white-500">:</span>
              <span className="text-[#57c7ff]">~$</span>
              <span className="w-2 h-4 bg-white ml-2 animate-pulse" />
            </div>
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="h-full flex flex-col justify-between">
            {/* Progress Bars */}
            <div className="space-y-4">
              {(project.metrics || [
                { label: "Execution Performance", value: 92 },
                { label: "Database Operations", value: 85 },
                { label: "UI Polish & UX", value: 95 },
                { label: "Resource Efficiency", value: 88 }
              ]).map((m, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[11px] font-orbitron font-bold">
                    <span className="text-white-400">{m.label}</span>
                    <span className={theme.text}>{m.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#0d0e15] rounded-full overflow-hidden border border-white-500/5">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${theme.progress}`}
                      style={{ width: `${m.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Badges Grid */}
            <div className="mt-5 border-t border-white-500/10 pt-4">
              <p className="text-[10px] font-orbitron font-bold text-white-500 mb-2.5 uppercase tracking-wider">
                Utilized Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {(project.tags || []).map((t, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 text-[9px] font-orbitron font-bold border rounded-md transition-colors duration-300 ${theme.badge} hover:bg-white-500/5`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="h-full flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4 font-spacegrotesk">
              {[
                { title: 'DATABASES & CACHING', value: project.specs?.database || 'MongoDB', icon: '🗄️' },
                { title: 'DEPLOYMENT PLATFORM', value: project.specs?.hosting || 'Vercel / Cloud', icon: '🚀' },
                { title: 'SECURITY PROTOCOL', value: project.specs?.security || 'JWT / OAuth', icon: '🔒' },
                { title: 'NETWORK LATENCY', value: project.specs?.latency || '<60ms', icon: '⚡' }
              ].map((spec, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl border border-white-500/5 bg-[#080910]/60 hover:border-white-500/20 transition-all duration-300 flex flex-col gap-1"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">{spec.icon}</span>
                    <span className="text-[9px] font-orbitron font-bold text-white-500 uppercase tracking-wider">
                      {spec.title}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-white mt-1">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center border border-[#ffa726]/10 bg-[#ffa726]/5 rounded-lg p-2.5 flex items-center justify-center gap-2">
              <span className="text-[#ffa726] animate-pulse">⚠️</span>
              <span className="text-[10px] text-[#ffa726]/90 font-mono tracking-tight">
                All mock operations execute sandboxed locally on node clusters.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDashboard;
