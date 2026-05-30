import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';


import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { calculateSizes } from '../constants/index.js';
import NeuralNetwork from '../components/NeuralNetwork.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="relative flex flex-col w-full min-h-screen justify-center items-center overflow-hidden" id="home">
      {/* Background Neural Network Grid */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Canvas className="w-full h-full" camera={{ position: [0, 0, 20], fov: 75 }}>
          <Suspense fallback={<CanvasLoader />}>
            <NeuralNetwork count={isMobile ? 50 : 90} />

            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero content */}
      <div className="flex flex-col w-full gap-5 mx-auto text-center z-10 c-space max-w-4xl px-4 select-none">
        <p className="text-xs sm:text-sm font-orbitron font-bold tracking-[0.25em] text-cyber-blue uppercase animate-pulse">
          SYSTEM ONLINE - CONNECTING TO CORE
        </p>
        <h1 className="hero_tag text-cyber-gradient font-orbitron font-black text-4xl sm:text-6xl md:text-7xl !leading-tight tracking-wider filter drop-shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          WELCOME TO MY <br className="hidden sm:block" />
          <span className="text-white">PORTFOLIO</span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-spacegrotesk font-medium text-white-700 max-w-2xl mx-auto">
          Hi, I am <span className="text-cyber-pink font-semibold">SHUBHAM</span>, exploring AI, ML & Data in a Way No One Thought Possible
        </p>

        {/* Floating tech stack badges below subtitle */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs font-orbitron text-white-600">
          <span className="px-3 py-1 bg-[#0f111a]/60 border border-cyber-blue/30 rounded-full backdrop-blur-sm">🧠 Deep Learning</span>
          <span className="px-3 py-1 bg-[#0f111a]/60 border border-cyber-purple/30 rounded-full backdrop-blur-sm">💬 NLP Specialist</span>
          <span className="px-3 py-1 bg-[#0f111a]/60 border border-cyber-pink/30 rounded-full backdrop-blur-sm">📊 Data Science</span>
        </div>
      </div>

      <div className="absolute left-0 right-0 z-10 w-full bottom-10 flex justify-center items-center">
        <a href="#about" className="w-fit">
          <Button name="Initialize System Scan" isBeam containerClass="sm:w-fit w-full sm:min-w-80 border border-cyber-blue/40 bg-black-200/80 hover:border-cyber-blue text-cyber-blue font-orbitron" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
