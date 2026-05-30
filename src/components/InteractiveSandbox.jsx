import React, { useState, useEffect, useRef, useCallback } from 'react';

const InteractiveSandbox = () => {
  const [dataset, setDataset] = useState('linear'); // linear | sine | clusters
  const [learningRate, setLearningRate] = useState(0.05);
  const [epochs, setEpochs] = useState(100);
  const [noise, setNoise] = useState(15);
  const [isTraining, setIsTraining] = useState(false);
  
  // Simulation Metrics
  const [currentEpoch, setCurrentEpoch] = useState(0);
  const [currentLoss, setCurrentLoss] = useState(0);
  const [lossHistory, setLossHistory] = useState([]);
  
  // Model Parameters (State)
  const [modelParams, setModelParams] = useState({ w: 0.1, b: 5 }); // for linear/sine
  const [clusterLine, setClusterLine] = useState({ w1: 1, w2: -1, b: 0 }); // classification line

  const [points, setPoints] = useState([]);
  const trainingRef = useRef(null);

  const calculateInitialLoss = useCallback((w, b) => {
    if (points.length === 0) return 0;
    let sumErr = 0;
    points.forEach(p => {
      const pred = dataset === 'linear' ? (w * p.x + b) : (w * Math.sin(p.x / 12) + b);
      sumErr += Math.pow(pred - p.y, 2);
    });
    return parseFloat((sumErr / points.length).toFixed(2));
  }, [points, dataset]);

  const resetModel = useCallback(() => {
    setIsTraining(false);
    setCurrentEpoch(0);
    setLossHistory([]);
    if (trainingRef.current) clearInterval(trainingRef.current);

    if (dataset === 'linear') {
      setModelParams({ w: 0.05, b: 10 });
      setCurrentLoss(calculateInitialLoss(0.05, 10));
    } else if (dataset === 'sine') {
      // Amplitude parameter w, vertical shift b
      setModelParams({ w: 5, b: 30 });
      setCurrentLoss(calculateInitialLoss(5, 30));
    } else if (dataset === 'clusters') {
      setClusterLine({ w1: 0.1, w2: -0.1, b: 0.5 });
      setCurrentLoss(0.5); // normalized classification error
    }
  }, [dataset, calculateInitialLoss]);

  // Generate Data Points
  const generateData = useCallback(() => {
    const tempPoints = [];
    const count = 40;
    
    if (dataset === 'linear') {
      // Linear: y = 0.6x + 20 + noise
      const targetW = 0.6;
      const targetB = 20;
      for (let i = 0; i < count; i++) {
        const x = (i / count) * 100;
        const randomNoise = (Math.random() - 0.5) * noise * 2;
        const y = targetW * x + targetB + randomNoise;
        tempPoints.push({ x, y });
      }
    } else if (dataset === 'sine') {
      // Sine wave: y = 20 * sin(x / 15) + 40 + noise
      for (let i = 0; i < count; i++) {
        const x = (i / count) * 100;
        const randomNoise = (Math.random() - 0.5) * noise * 1.5;
        const y = 20 * Math.sin(x / 12) + 40 + randomNoise;
        tempPoints.push({ x, y });
      }
    } else if (dataset === 'clusters') {
      // Two distinct classes of clusters (0: purple, 1: blue)
      for (let i = 0; i < count; i++) {
        const isClassA = i < count / 2;
        const base = isClassA ? { cx: 30, cy: 30 } : { cx: 70, cy: 70 };
        const x = base.cx + (Math.random() - 0.5) * noise * 2;
        const y = base.cy + (Math.random() - 0.5) * noise * 2;
        tempPoints.push({ x, y, label: isClassA ? 0 : 1 });
      }
    }
    
    setPoints(tempPoints);
    resetModel();
  }, [dataset, noise, resetModel]);

  // Generate data when dataset or noise changes
  useEffect(() => {
    generateData();
    const currentTraining = trainingRef.current;
    return () => {
      if (currentTraining) clearInterval(currentTraining);
    };
  }, [generateData]);

  // Gradient Descent Iteration
  const runGradientDescentStep = (epochNum, currentW, currentB, currentW1, currentW2) => {
    if (dataset === 'linear' || dataset === 'sine') {
      let gradW = 0;
      let gradB = 0;
      let loss = 0;

      points.forEach(p => {
        const xVal = p.x;
        const yVal = p.y;
        
        const feature = dataset === 'linear' ? xVal : Math.sin(xVal / 12);
        const pred = currentW * feature + currentB;
        const err = pred - yVal;
        
        loss += Math.pow(err, 2);
        gradW += err * feature;
        gradB += err;
      });

      loss = loss / points.length;
      gradW = (2 * gradW) / points.length;
      gradB = (2 * gradB) / points.length;

      // Adjust model parameters
      const nextW = currentW - learningRate * gradW;
      const nextB = currentB - learningRate * 10 * gradB; // Higher learning rate for bias to shift faster

      setModelParams({ w: nextW, b: nextB });
      setCurrentLoss(parseFloat(loss.toFixed(2)));
      setLossHistory(prev => [...prev.slice(-20), loss]); // save last 20 losses
      
      return { nextW, nextB };
    } else {
      // Classification: Perceptron Learning Algorithm for Clusters
      let w1 = currentW1;
      let w2 = currentW2;
      let b = clusterLine.b;
      let misclassified = 0;

      points.forEach(p => {
        // Output prediction: sign of w1*x + w2*y + b
        const activation = w1 * p.x + w2 * p.y + b;
        const pred = activation >= 0 ? 1 : 0;
        const target = p.label;
        const err = target - pred;

        if (err !== 0) {
          misclassified++;
          // Update weights
          w1 += learningRate * err * p.x * 0.1;
          w2 += learningRate * err * p.y * 0.1;
          b += learningRate * err * 10;
        }
      });

      const loss = misclassified / points.length;
      setClusterLine({ w1, w2, b });
      setCurrentLoss(parseFloat(loss.toFixed(3)));
      setLossHistory(prev => [...prev.slice(-20), loss]);

      return { w1, w2 };
    }
  };

  const handleTrain = () => {
    if (isTraining) {
      setIsTraining(false);
      if (trainingRef.current) clearInterval(trainingRef.current);
      return;
    }

    setIsTraining(true);
    let epoch = currentEpoch;
    
    // Initial states
    let localW = modelParams.w;
    let localB = modelParams.b;
    let localW1 = clusterLine.w1;
    let localW2 = clusterLine.w2;

    trainingRef.current = setInterval(() => {
      if (epoch >= epochs) {
        setIsTraining(false);
        clearInterval(trainingRef.current);
        return;
      }

      epoch++;
      setCurrentEpoch(epoch);

      const next = runGradientDescentStep(epoch, localW, localB, localW1, localW2);
      if (dataset === 'clusters') {
        localW1 = next.w1;
        localW2 = next.w2;
      } else {
        localW = next.nextW;
        localB = next.nextB;
      }
    }, 40); // 40ms per training step (approx 25 fps)
  };

  // Helper to map classification line to SVG coordinates
  // w1*x + w2*y + b = 0  => y = (-w1*x - b)/w2
  const getClassificationLinePath = () => {
    const { w1, w2, b } = clusterLine;
    if (Math.abs(w2) < 0.001) return '';
    const y0 = (-w1 * 0 - b) / w2;
    const y100 = (-w1 * 100 - b) / w2;
    return `M 0 ${100 - y0} L 100 ${100 - y100}`;
  };

  return (
    <div className="w-full flex flex-col items-center justify-between p-4 sm:p-6 bg-[#060814]/60 backdrop-blur-md rounded-2xl border border-cyber-pink/20 relative overflow-hidden h-[330px]">
      
      {/* Title Header */}
      <div className="w-full flex items-center justify-between mb-3 z-10">
        <span className="text-xs font-orbitron font-bold text-cyber-pink tracking-wider uppercase">
          Interactive ML Model Sandbox
        </span>
        <div className="flex gap-1.5 items-center">
          <span className={`w-2 h-2 rounded-full ${isTraining ? 'bg-green-400 animate-ping' : 'bg-red-400'}`} />
          <span className="text-[10px] text-white-600 font-mono tracking-tighter">
            {isTraining ? 'TRAINING LIVE...' : 'STANDBY'}
          </span>
        </div>
      </div>

      {/* Main Sandbox Grid */}
      <div className="w-full grid grid-cols-5 gap-3 items-center flex-1 z-10">
        
        {/* Left Panel: Hyperparameter Controls */}
        <div className="col-span-2 flex flex-col justify-center gap-2 text-left h-full border-r border-white-500/10 pr-2">
          
          {/* Dataset selection */}
          <div className="flex flex-col gap-1">
            <label htmlFor="dataset-select" className="text-[9px] font-orbitron text-white-500 uppercase">Dataset</label>
            <select
              id="dataset-select"
              value={dataset}
              onChange={(e) => setDataset(e.target.value)}
              className="bg-[#141624] border border-cyber-pink/25 text-white text-[10px] rounded p-1 focus:outline-none focus:border-cyber-pink font-spacegrotesk"
              disabled={isTraining}
            >
              <option value="linear">Linear Trend</option>
              <option value="sine">Sine Wave</option>
              <option value="clusters">Perceptron Clusters</option>
            </select>
          </div>

          {/* Learning Rate selection */}
          <div className="flex flex-col gap-1">
            <label htmlFor="learning-rate-select" className="text-[9px] font-orbitron text-white-500 uppercase">Learning Rate (α)</label>
            <select
              id="learning-rate-select"
              value={learningRate}
              onChange={(e) => setLearningRate(parseFloat(e.target.value))}
              className="bg-[#141624] border border-cyber-pink/25 text-white text-[10px] rounded p-1 focus:outline-none focus:border-cyber-pink font-spacegrotesk"
              disabled={isTraining}
            >
              <option value="0.01">0.01 (Slow)</option>
              <option value="0.05">0.05 (Default)</option>
              <option value="0.1">0.1 (Fast)</option>
              <option value="0.2">0.2 (Aggressive)</option>
            </select>
          </div>

          {/* Noise Slider */}
          <div className="flex flex-col gap-0.5">
            <div className="flex justify-between text-[9px] font-orbitron text-white-500">
              <label htmlFor="noise-slider" className="uppercase">Data Noise</label>
              <span>{noise}px</span>
            </div>
            <input
              id="noise-slider"
              type="range"
              min="2"
              max="25"
              value={noise}
              onChange={(e) => setNoise(parseInt(e.target.value))}
              className="w-full accent-cyber-pink h-1 rounded"
              disabled={isTraining}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-1.5 mt-1.5">
            <button
              type="button"
              onClick={handleTrain}
              className={`flex-1 text-[9px] font-orbitron font-bold py-1.5 rounded transition-all select-none border border-cyber-pink/40 hover:bg-cyber-pink/10 active:scale-95 ${
                isTraining ? 'text-cyber-pink border-cyber-pink bg-cyber-pink/15' : 'text-white'
              }`}
            >
              {isTraining ? 'Pause' : 'Fit Model'}
            </button>
            
            <button
              type="button"
              onClick={resetModel}
              className="px-2 text-[9px] font-orbitron py-1.5 rounded border border-white-500/20 hover:border-white-500/40 text-white-600 hover:text-white transition-all active:scale-95"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Right Panel: Active Plot View */}
        <div className="col-span-3 h-full flex flex-col justify-between pl-1">
          
          {/* Main SVG Plot */}
          <div className="w-full h-32 bg-[#04060f] border border-cyber-pink/15 rounded-lg relative overflow-hidden flex items-center justify-center shadow-inner">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              {/* Grid Lines */}
              <line x1="0" y1="50" x2="100" y2="50" stroke="#101328" strokeWidth="0.5" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="#101328" strokeWidth="0.5" />

              {/* Data points */}
              {points.map((p, idx) => (
                <circle
                  key={idx}
                  cx={p.x}
                  cy={100 - p.y} // Invert Y for SVG coordinates
                  r="1.6"
                  fill={dataset === 'clusters' ? (p.label === 0 ? '#ff007f' : '#00f0ff') : '#bd00ff'}
                  opacity="0.8"
                />
              ))}

              {/* Fit Line / Curve */}
              {!isTraining && currentEpoch === 0 ? null : (
                dataset === 'linear' ? (
                  <line
                    x1="0"
                    y1={100 - (modelParams.w * 0 + modelParams.b)}
                    x2="100"
                    y2={100 - (modelParams.w * 100 + modelParams.b)}
                    stroke="#00f0ff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    filter="drop-shadow(0 0 2px rgba(0, 240, 255, 0.8))"
                  />
                ) : dataset === 'sine' ? (
                  <path
                    d={Array.from({ length: 101 }, (_, i) => {
                      const x = i;
                      const y = modelParams.w * Math.sin(x / 12) + modelParams.b;
                      return `${i === 0 ? 'M' : 'L'} ${x} ${100 - y}`;
                    }).join(' ')}
                    fill="none"
                    stroke="#00f0ff"
                    strokeWidth="1.5"
                    filter="drop-shadow(0 0 2px rgba(0, 240, 255, 0.8))"
                  />
                ) : (
                  <path
                    d={getClassificationLinePath()}
                    fill="none"
                    stroke="#00f0ff"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                    filter="drop-shadow(0 0 2px rgba(0, 240, 255, 0.6))"
                  />
                )
              )}
            </svg>
          </div>

          {/* Loss / Status Tracking */}
          <div className="w-full flex justify-between items-center bg-[#070b19] border border-white-500/10 px-2 py-1 rounded mt-1 font-mono text-[9px] text-white-600">
            <div>
              Epoch: <span className="text-white font-bold">{currentEpoch}</span>
            </div>
            <div>
              {dataset === 'clusters' ? 'Error Rate' : 'MSE Loss'}: <span className="text-cyber-pink font-bold">{currentLoss}</span>
            </div>
          </div>
          
          {/* Real-time Loss mini sparkline */}
          <div className="w-full h-5 flex items-end justify-between mt-1 px-1 bg-[#131627]/40 rounded border border-cyber-pink/5 overflow-hidden">
            {lossHistory.length > 0 ? (
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path
                  d={lossHistory.map((val, idx) => {
                    const maxVal = Math.max(...lossHistory, 1);
                    const minVal = Math.min(...lossHistory, 0);
                    const range = maxVal - minVal || 1;
                    const x = (idx / (lossHistory.length - 1)) * 100;
                    const y = 20 - ((val - minVal) / range) * 16 - 2;
                    return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }).join(' ')}
                  fill="none"
                  stroke="#ff007f"
                  strokeWidth="1"
                />
              </svg>
            ) : (
              <span className="text-[7px] text-white-500 w-full text-center pb-0.5 uppercase tracking-widest font-orbitron">
                No telemetry
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveSandbox;
