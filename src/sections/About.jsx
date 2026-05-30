import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import PipelineFlowchart from '../components/PipelineFlowchart.jsx';
import InteractiveSandbox from '../components/InteractiveSandbox.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [showSandbox, setShowSandbox] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('contact.shubhamkumar20@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        {/* Profile Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container border border-cyber-blue/10 hover:border-cyber-blue/30 transition-all duration-300">
            <img src="/assets/grid1.png" alt="shubham-avatar" className="w-full sm:h-[276px] h-fit object-contain rounded-xl" />
            <div>
              <p className="grid-headtext text-cyber-gradient font-orbitron">Hi, I’m Shubham Kumar</p>
              <p className="grid-subtext font-spacegrotesk leading-relaxed">
                Graduate AI Engineer & Full-Stack Developer passionate about engineering intelligent systems, optimizing APIs, and building high-performance applications.
                <span className="text-white block mt-2 font-medium">Fluent in algorithms, MERN development, and caffeine.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container border border-cyber-purple/10 hover:border-cyber-purple/30 transition-all duration-300">
            <div className="w-full sm:h-[180px] h-fit flex flex-wrap gap-2 content-center items-center justify-center p-2 bg-[#060814]/40 rounded-xl border border-cyber-purple/15">
              {/* Custom styled neon badges for stack */}
              <div className="px-3 py-1.5 text-xs font-orbitron font-bold text-cyber-blue border border-cyber-blue/35 bg-cyber-blue/5 rounded-md hover:bg-cyber-blue/15 transition-colors">Python</div>
              <div className="px-3 py-1.5 text-xs font-orbitron font-bold text-cyber-purple border border-cyber-purple/35 bg-cyber-purple/5 rounded-md hover:bg-cyber-purple/15 transition-colors">TensorFlow</div>
              <div className="px-3 py-1.5 text-xs font-orbitron font-bold text-cyber-pink border border-cyber-pink/35 bg-cyber-pink/5 rounded-md hover:bg-cyber-pink/15 transition-colors">HuggingFace</div>
              <div className="px-3 py-1.5 text-xs font-orbitron font-bold text-[#ffd166] border border-[#ffd166]/35 bg-[#ffd166]/5 rounded-md hover:bg-[#ffd166]/15 transition-colors">Power BI</div>
              <div className="px-3 py-1.5 text-xs font-orbitron font-bold text-[#06d6a0] border border-[#06d6a0]/35 bg-[#06d6a0]/5 rounded-md hover:bg-[#06d6a0]/15 transition-colors">Flask</div>
              <div className="px-3 py-1.5 text-xs font-orbitron font-bold text-[#118ab2] border border-[#118ab2]/35 bg-[#118ab2]/5 rounded-md hover:bg-[#118ab2]/15 transition-colors">PyTorch</div>
              <div className="px-3 py-1.5 text-xs font-orbitron font-bold text-white-800 border border-white-800/35 bg-white-800/5 rounded-md hover:bg-white-800/15 transition-colors">SQL</div>
              <div className="px-3 py-1.5 text-xs font-orbitron font-bold text-cyber-blue border border-cyber-blue/35 bg-cyber-blue/5 rounded-md hover:bg-cyber-blue/15 transition-colors">React / Node.js</div>
            </div>
            <div>
              <p className="grid-headtext text-cyber-gradient-alt font-orbitron">Core Tech Stack</p>
              <p className="grid-subtext font-spacegrotesk">
                I specialize in a variety of languages, deep learning frameworks, and analytics tools that allow me to develop robust predictive models and deploy MERN stack full-stack applications.
              </p>
            </div>
          </div>
        </div>

        {/* Globe Section */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container border border-cyber-blue/10 hover:border-cyber-blue/30 transition-all duration-300">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center overflow-hidden bg-[#0f111a]/30">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.4}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 25.5941, lng: 85.1376, text: 'Patna, India', color: '#00f0ff', size: 25 }]}
              />
            </div>
            <div>
              <p className="grid-headtext font-orbitron">Global Collaboration</p>
              <p className="grid-subtext font-spacegrotesk">I&apos;m based in Delhi NCR, India, and open to remote opportunities worldwide.</p>
              <a href="#contact">
                <Button name="Let's Establish Link" isBeam containerClass="w-full mt-10 border border-cyber-blue/30 hover:border-cyber-blue text-cyber-blue font-orbitron" />
              </a>
            </div>
          </div>
        </div>

        {/* Toggleable Pipeline & Sandbox Section */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container border border-cyber-pink/10 hover:border-cyber-pink/30 transition-all duration-300 justify-between">
            <div className="w-full flex flex-col flex-1">

              {/* Sandbox Toggle Header */}
              <div className="flex justify-between items-center mb-3 border-b border-white-500/10 pb-2">
                <p className="grid-headtext text-cyber-gradient font-orbitron !mb-0">
                  {showSandbox ? 'Model Training Simulation' : 'Intelligent Workflow Architecture'}
                </p>
                <div className="flex border border-cyber-pink/35 bg-[#060814]/40 rounded overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setShowSandbox(false)}
                    className={`px-2.5 py-1 text-[9px] font-orbitron font-bold transition-all select-none cursor-pointer ${!showSandbox ? 'bg-cyber-pink/15 text-cyber-pink' : 'text-white-500 hover:text-white'
                      }`}
                  >
                    Pipeline
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSandbox(true)}
                    className={`px-2.5 py-1 text-[9px] font-orbitron font-bold transition-all select-none cursor-pointer ${showSandbox ? 'bg-cyber-pink/15 text-cyber-pink' : 'text-white-500 hover:text-white'
                      }`}
                  >
                    Simulator
                  </button>
                </div>
              </div>

              {/* Toggle Area */}
              <div className="flex-1 w-full flex items-center justify-center">
                {showSandbox ? (
                  <InteractiveSandbox />
                ) : (
                  <PipelineFlowchart />
                )}
              </div>
            </div>

            <div className="mt-3">
              <p className="grid-subtext font-spacegrotesk text-sm">
                {showSandbox
                  ? "Experiment with training algorithms! Select a dataset, adjust the learning rate or data noise, and trigger the gradient descent model fit animation live inside your browser."
                  : "I design clean architectures to process pipeline data. Model building is more than code—it is an art of optimizing loss vectors, embedding meanings, and extracting signals from noise."
                }
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container border border-cyber-blue/10 hover:border-cyber-blue/30 transition-all duration-300">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top rounded-xl opacity-80"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center font-orbitron uppercase text-xs tracking-wider">Secured Comm Line</p>
              <button
                type="button"
                className="copy-container bg-[#080a14] border border-cyber-blue/20 rounded-xl p-3 hover:border-cyber-blue/60 transition-colors w-full"
                onClick={handleCopy}
              >
                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" className="size-5" />
                <p className="lg:text-sm md:text-base font-bold text-cyber-blue font-mono">
                  contact.shubhamkumar20@gmail.com
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
