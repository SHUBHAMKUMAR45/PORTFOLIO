import React, { useEffect, useState } from 'react';

const AnimatedChart = ({ type }) => {
  const [lossData, setLossData] = useState([1.2, 0.95, 0.72, 0.55, 0.41, 0.32, 0.25, 0.18]);
  const [activeEpoch, setActiveEpoch] = useState(0);

  useEffect(() => {
    if (type === 'nielit') {
      const interval = setInterval(() => {
        setActiveEpoch((prev) => (prev + 1) % lossData.length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [type, lossData.length]);

  if (type === 'nielit') {
    // Neural training epoch loss plot
    return (
      <div className="w-full mt-4 p-4 bg-[#0f111a]/40 rounded-xl border border-cyber-purple/20 cyber-glow relative overflow-hidden">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-orbitron text-cyber-purple uppercase tracking-wider">Model Training Loss</span>
          <span className="text-[10px] text-white-600 font-mono">Epoch {activeEpoch + 1}/8 - Loss: {lossData[activeEpoch]}</span>
        </div>
        <div className="h-28 w-full flex items-end relative pt-2">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[8px] text-white-500 font-mono">
            <span>1.5</span>
            <span>1.0</span>
            <span>0.5</span>
            <span>0.0</span>
          </div>
          
          <svg className="w-full h-full pl-6 overflow-visible" viewBox="0 0 100 50">
            {/* Grid lines */}
            <line x1="0" y1="12.5" x2="100" y2="12.5" stroke="#1a1c2e" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="0" y1="25" x2="100" y2="25" stroke="#1a1c2e" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="0" y1="37.5" x2="100" y2="37.5" stroke="#1a1c2e" strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#1a1c2e" strokeWidth="0.5" />

            {/* Line Path */}
            <path
              d={`M 0 ${50 - lossData[0] * 30} L 14 ${50 - lossData[1] * 30} L 28 ${50 - lossData[2] * 30} L 42 ${50 - lossData[3] * 30} L 56 ${50 - lossData[4] * 30} L 70 ${50 - lossData[5] * 30} L 84 ${50 - lossData[6] * 30} L 100 ${50 - lossData[7] * 30}`}
              fill="none"
              stroke="#bd00ff"
              strokeWidth="1.5"
            />

            {/* Glowing Active Point */}
            <circle
              cx={(activeEpoch * (100 / (lossData.length - 1)))}
              cy={50 - lossData[activeEpoch] * 30}
              r="2"
              fill="#00f0ff"
              className="animate-ping"
            />
            <circle
              cx={(activeEpoch * (100 / (lossData.length - 1)))}
              cy={50 - lossData[activeEpoch] * 30}
              r="1.5"
              fill="#bd00ff"
            />
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'uwl') {
    // Bar chart comparing query speeds (UWL)
    return (
      <div className="w-full mt-4 p-4 bg-[#0f111a]/40 rounded-xl border border-cyber-blue/20 cyber-glow relative overflow-hidden">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-orbitron text-cyber-blue uppercase tracking-wider">Database Query Speedup</span>
          <span className="text-[10px] text-green-400 font-mono font-bold">+35% Efficiency</span>
        </div>
        <div className="flex justify-around items-end h-20 gap-4 pt-2 relative">
          <div className="flex flex-col items-center w-1/3">
            <div className="w-full bg-[#1b263b] h-16 rounded-t-md relative flex justify-center items-end border-t border-white-500/20">
              <span className="text-[10px] font-mono text-white-600 mb-1">100ms</span>
            </div>
            <span className="text-[10px] text-white-500 mt-1 font-spacegrotesk">Before</span>
          </div>

          <div className="flex flex-col items-center w-1/3">
            <div className="w-full bg-gradient-to-t from-cyber-purple to-cyber-blue h-10 rounded-t-md relative flex justify-center items-end border-t border-cyber-blue/50 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <span className="text-[10px] font-mono text-white font-bold mb-1">65ms</span>
              <span className="absolute -top-6 text-[10px] text-green-400 font-bold font-orbitron tracking-tight animate-float-badge">⚡-35%</span>
            </div>
            <span className="text-[10px] text-white-500 mt-1 font-spacegrotesk">Optimized</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'protrainy') {
    // Marketing ad expenditure dashboard KPI counter (Protrainy)
    return (
      <div className="w-full mt-4 p-4 bg-[#0f111a]/40 rounded-xl border border-cyber-pink/20 cyber-glow relative overflow-hidden">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-orbitron text-cyber-pink uppercase tracking-wider">Campaign Metrics</span>
          <span className="text-[10px] text-cyber-pink font-mono">15+ Dashboards Live</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#140c1a] border border-cyber-pink/10 rounded-lg p-2 flex flex-col justify-center items-center">
            <span className="text-[9px] font-orbitron text-white-600 uppercase">Cost Savings</span>
            <span className="text-lg font-bold font-orbitron text-green-400 mt-0.5 animate-pulse">12.4%</span>
            <span className="text-[8px] text-white-500 mt-0.5">Ad Optimization</span>
          </div>
          
          <div className="bg-[#140c1a] border border-cyber-pink/10 rounded-lg p-2 flex flex-col justify-center items-center">
            <span className="text-[9px] font-orbitron text-white-600 uppercase">Weekly Reports</span>
            <span className="text-lg font-bold font-orbitron text-cyber-blue mt-0.5">&lt;5 min</span>
            <span className="text-[8px] text-white-500 mt-0.5">Automated from 6h</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default AnimatedChart;
