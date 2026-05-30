import React from 'react';

const PipelineFlowchart = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-6 bg-[#07080f]/50 backdrop-blur-sm border border-cyber-blue/20 rounded-2xl cyber-glow relative overflow-hidden">
      <div className="absolute top-2 right-4 flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-cyber-blue animate-ping" />
        <span className="text-xs text-cyber-blue font-orbitron tracking-wider">LIVE PIPELINE ACTIVATED</span>
      </div>
      
      <h4 className="text-sm font-semibold font-orbitron text-cyber-blue/80 mb-6 uppercase tracking-wider">
        AI/ML Pipeline Architecture
      </h4>

      <div className="w-full max-w-lg">
        <svg viewBox="0 0 500 280" className="w-full h-auto overflow-visible">
          {/* SVG Glow Filter */}
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* Animation for pulse */}
            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#bd00ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff007f" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Paths connecting nodes */}
          {/* Path 1: Data -> Preprocess */}
          <path
            d="M 90 60 H 210"
            fill="none"
            stroke="#1a1c2e"
            strokeWidth="3"
          />
          <path
            d="M 90 60 H 210"
            fill="none"
            stroke="url(#gradient-line)"
            strokeWidth="3"
            strokeDasharray="15, 100"
            className="animate-flow-dash"
          />

          {/* Path 2: Preprocess -> Model Training */}
          <path
            d="M 270 60 H 390"
            fill="none"
            stroke="#1a1c2e"
            strokeWidth="3"
          />
          <path
            d="M 270 60 H 390"
            fill="none"
            stroke="url(#gradient-line)"
            strokeWidth="3"
            strokeDasharray="15, 100"
            className="animate-flow-dash-delayed"
          />

          {/* Path 3: Model Training -> LLM Inference */}
          <path
            d="M 390 100 V 160 H 130 V 210"
            fill="none"
            stroke="#1a1c2e"
            strokeWidth="3"
          />
          <path
            d="M 390 100 V 160 H 130 V 210"
            fill="none"
            stroke="url(#gradient-line)"
            strokeWidth="3"
            strokeDasharray="20, 150"
            className="animate-flow-dash-long"
          />

          {/* Path 4: LLM Inference -> Prediction */}
          <path
            d="M 230 230 H 370"
            fill="none"
            stroke="#1a1c2e"
            strokeWidth="3"
          />
          <path
            d="M 230 230 H 370"
            fill="none"
            stroke="url(#gradient-line)"
            strokeWidth="3"
            strokeDasharray="15, 100"
            className="animate-flow-dash"
          />

          {/* Node 1: Raw Data Input */}
          <g transform="translate(10, 30)" className="cursor-pointer group">
            <rect
              width="80"
              height="60"
              rx="8"
              fill="#080a14"
              stroke="#00f0ff"
              strokeWidth="1.5"
              filter="url(#glow)"
              className="transition-all duration-300 group-hover:fill-cyber-blue/10"
            />
            <text x="40" y="28" fill="#e4e4e6" fontSize="10" textAnchor="middle" fontWeight="bold" fontFamily="Space Grotesk">
              RAW DATA
            </text>
            <text x="40" y="42" fill="#00f0ff" fontSize="8" textAnchor="middle" fontFamily="Orbitron">
              [ INGESTION ]
            </text>
          </g>

          {/* Node 2: Preprocessing */}
          <g transform="translate(190, 30)" className="cursor-pointer group">
            <rect
              width="80"
              height="60"
              rx="8"
              fill="#080a14"
              stroke="#bd00ff"
              strokeWidth="1.5"
              filter="url(#glow)"
              className="transition-all duration-300 group-hover:fill-cyber-purple/10"
            />
            <text x="40" y="28" fill="#e4e4e6" fontSize="10" textAnchor="middle" fontWeight="bold" fontFamily="Space Grotesk">
              PREPROCESS
            </text>
            <text x="40" y="42" fill="#bd00ff" fontSize="8" textAnchor="middle" fontFamily="Orbitron">
              [ CLEAN & TOKEN ]
            </text>
          </g>

          {/* Node 3: Model Training */}
          <g transform="translate(370, 30)" className="cursor-pointer group">
            <rect
              width="80"
              height="60"
              rx="8"
              fill="#080a14"
              stroke="#ff007f"
              strokeWidth="1.5"
              filter="url(#glow)"
              className="transition-all duration-300 group-hover:fill-cyber-pink/10"
            />
            <text x="40" y="28" fill="#e4e4e6" fontSize="10" textAnchor="middle" fontWeight="bold" fontFamily="Space Grotesk">
              MODEL TRAIN
            </text>
            <text x="40" y="42" fill="#ff007f" fontSize="8" textAnchor="middle" fontFamily="Orbitron">
              [ OPTIMIZATION ]
            </text>
          </g>

          {/* Node 4: LLM Inference */}
          <g transform="translate(90, 200)" className="cursor-pointer group">
            <rect
              width="140"
              height="60"
              rx="8"
              fill="#080a14"
              stroke="#00f0ff"
              strokeWidth="1.5"
              filter="url(#glow)"
              className="transition-all duration-300 group-hover:fill-cyber-blue/10"
            />
            <text x="70" y="28" fill="#e4e4e6" fontSize="11" textAnchor="middle" fontWeight="bold" fontFamily="Space Grotesk">
              LLM INFERENCE
            </text>
            <text x="70" y="42" fill="#00f0ff" fontSize="8" textAnchor="middle" fontFamily="Orbitron">
              [ RETRIEVE & GENERATE ]
            </text>
          </g>

          {/* Node 5: Output Prediction */}
          <g transform="translate(370, 200)" className="cursor-pointer group">
            <rect
              width="90"
              height="60"
              rx="8"
              fill="#080a14"
              stroke="#bd00ff"
              strokeWidth="1.5"
              filter="url(#glow)"
              className="transition-all duration-300 group-hover:fill-cyber-purple/10"
            />
            <text x="45" y="28" fill="#e4e4e6" fontSize="10" textAnchor="middle" fontWeight="bold" fontFamily="Space Grotesk">
              USER OUTPUT
            </text>
            <text x="45" y="42" fill="#bd00ff" fontSize="8" textAnchor="middle" fontFamily="Orbitron">
              [ RESPONSE ]
            </text>
          </g>
        </svg>
      </div>

      <style>{`
        @keyframes flowDash {
          to {
            stroke-dashoffset: -100;
          }
        }
        @keyframes flowDashLong {
          to {
            stroke-dashoffset: -200;
          }
        }
        .animate-flow-dash {
          animation: flowDash 3s linear infinite;
        }
        .animate-flow-dash-delayed {
          animation: flowDash 3s linear infinite;
          animation-delay: 1.5s;
        }
        .animate-flow-dash-long {
          animation: flowDashLong 5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PipelineFlowchart;
