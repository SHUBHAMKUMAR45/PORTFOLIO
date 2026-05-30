import React, { useState, useRef, useEffect } from 'react';

const AIAvatar = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); // -1 to 1
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); // -1 to 1
      
      // Limit values to stay in bounds
      setMousePos({
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y))
      });
    };

    const container = containerRef.current;
    if (container) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Compute offset transformations for the eye scanner and cores
  const eyeOffsetX = mousePos.x * 6;
  const eyeOffsetY = mousePos.y * 4;
  const coreOffsetX = mousePos.x * 3;
  const coreOffsetY = mousePos.y * 2;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className="size-48 flex items-center justify-center relative cursor-pointer select-none"
    >
      {/* Outer Glow Ring */}
      <div 
        className={`absolute inset-0 rounded-full border border-cyber-blue/10 transition-all duration-500 ${
          isHovered ? 'scale-110 border-cyber-blue/30 bg-cyber-blue/5 shadow-[0_0_30px_rgba(0,240,255,0.2)]' : 'scale-100'
        }`}
      />

      {/* SVG AI Interface */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <filter id="avatar-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Orbit Tracks */}
        <circle
          cx="100"
          cy="100"
          r="85"
          fill="none"
          stroke="#00f0ff"
          strokeWidth="1"
          strokeDasharray="40 120"
          className="origin-center animate-[spin_10s_linear_infinite]"
          opacity="0.3"
        />
        <circle
          cx="100"
          cy="100"
          r="75"
          fill="none"
          stroke="#bd00ff"
          strokeWidth="1.5"
          strokeDasharray="10 50"
          className="origin-center animate-[spin_6s_linear_infinite_reverse]"
          opacity="0.5"
        />

        {/* Outer Hexagon Shell */}
        <polygon
          points="100,30 160,65 160,135 100,170 40,135 40,65"
          fill="none"
          stroke="#1a1c32"
          strokeWidth="2"
        />
        <polygon
          points="100,30 160,65 160,135 100,170 40,135 40,65"
          fill="none"
          stroke="#00f0ff"
          strokeWidth="1.5"
          strokeDasharray="30 180"
          className="origin-center animate-[spin_15s_linear_infinite]"
          opacity="0.6"
        />

        {/* Inner Hologram Rings */}
        <g transform={`translate(${coreOffsetX}, ${coreOffsetY})`} className="transition-all duration-200 ease-out">
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="none"
            stroke="#ff007f"
            strokeWidth="1.5"
            strokeDasharray="5 15"
            className="origin-center animate-[spin_8s_linear_infinite]"
            opacity="0.7"
            filter="url(#avatar-glow)"
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="#060814"
            stroke="#00f0ff"
            strokeWidth="2"
            opacity="0.9"
            filter="url(#avatar-glow)"
          />
        </g>

        {/* Cybernetic Eyes - follows cursor */}
        <g transform={`translate(${eyeOffsetX}, ${eyeOffsetY})`} className="transition-all duration-150 ease-out">
          {/* Left Eye Unit */}
          <g transform="translate(75, 95)">
            <rect x="-12" y="-3" width="24" height="6" rx="3" fill="#0c0e1e" stroke="#bd00ff" strokeWidth="1" />
            <circle cx="0" cy="0" r="2.5" fill="#00f0ff" filter="url(#avatar-glow)" className={isHovered ? 'scale-125' : 'scale-100'} />
          </g>

          {/* Right Eye Unit */}
          <g transform="translate(125, 95)">
            <rect x="-12" y="-3" width="24" height="6" rx="3" fill="#0c0e1e" stroke="#bd00ff" strokeWidth="1" />
            <circle cx="0" cy="0" r="2.5" fill="#00f0ff" filter="url(#avatar-glow)" className={isHovered ? 'scale-125' : 'scale-100'} />
          </g>

          {/* Holographic HUD grid overlay in eyes region */}
          <line x1="60" y1="95" x2="140" y2="95" stroke="#00f0ff" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
        </g>

        {/* Central Core Processor */}
        <g transform={`translate(${coreOffsetX}, ${coreOffsetY})`} className="transition-all duration-200 ease-out">
          <circle
            cx="100"
            cy="115"
            r="12"
            fill="url(#core-grad)"
            className="animate-pulse"
          />
          <circle
            cx="100"
            cy="115"
            r="6"
            fill="#00f0ff"
            filter="url(#avatar-glow)"
            className={isHovered ? 'animate-ping' : ''}
          />
        </g>

        {/* Frequency Waveform Meters (bottom of avatar) */}
        <g transform="translate(70, 140)">
          <rect x="0" y="0" width="3" height={isHovered ? 12 : 5} rx="1" fill="#00f0ff" className="origin-bottom transition-all duration-300 animate-[pulse_0.4s_infinite]" />
          <rect x="8" y="0" width="3" height={isHovered ? 18 : 8} rx="1" fill="#bd00ff" className="origin-bottom transition-all duration-300 animate-[pulse_0.6s_infinite_0.1s]" />
          <rect x="16" y="0" width="3" height={isHovered ? 24 : 12} rx="1" fill="#ff007f" className="origin-bottom transition-all duration-300 animate-[pulse_0.5s_infinite_0.2s]" />
          <rect x="24" y="0" width="3" height={isHovered ? 24 : 12} rx="1" fill="#ff007f" className="origin-bottom transition-all duration-300 animate-[pulse_0.5s_infinite_0.3s]" />
          <rect x="32" y="0" width="3" height={isHovered ? 18 : 8} rx="1" fill="#bd00ff" className="origin-bottom transition-all duration-300 animate-[pulse_0.6s_infinite_0.4s]" />
          <rect x="40" y="0" width="3" height={isHovered ? 12 : 5} rx="1" fill="#00f0ff" className="origin-bottom transition-all duration-300 animate-[pulse_0.4s_infinite_0.5s]" />
        </g>

        {/* Gradients */}
        <defs>
          <radialGradient id="core-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="60%" stopColor="#bd00ff" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AIAvatar;
