"use client";
import { useScroll, useTransform, LazyMotion, domAnimation, m } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import AnimatedChart from "./AnimatedChart";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="c-space section-spacing py-20" ref={containerRef}>
        <h2 className="text-4xl font-bold font-orbitron text-cyber-blue mb-10 filter drop-shadow-[0_0_10px_rgba(0,240,255,0.2)]">
          Experience Timeline
        </h2>
        <div ref={ref} className="relative pb-20">
          {data.map((item) => (
            <div
              key={`${item.title}-${item.date}`}
              className="flex justify-start pt-10 md:pt-28 md:gap-10"
            >
              {/* Sticky Timeline Dot & Label */}
              <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
                <div className="absolute flex items-center justify-center size-10 rounded-full -left-[19px] bg-[#131627] border border-cyber-blue/35 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                  <div className="size-3 rounded-full bg-cyber-blue animate-pulse" />
                </div>
                <div className="flex flex-col hidden gap-1 text-left md:flex md:pl-16 w-full">
                  <span className="text-sm font-mono text-cyber-pink font-semibold">{item.date}</span>
                  <h3 className="text-xl font-bold font-orbitron text-white leading-tight">{item.title}</h3>
                  <h4 className="text-sm font-spacegrotesk text-cyber-blue/90 font-medium">{item.job}</h4>
                </div>
              </div>

              {/* Timeline details */}
              <div className="relative w-full pl-16 pr-4 md:pl-4">
                <div className="block mb-4 text-left md:hidden">
                  <span className="text-xs font-mono text-cyber-pink font-semibold">{item.date}</span>
                  <h3 className="text-lg font-bold font-orbitron text-white">{item.title}</h3>
                  <h4 className="text-sm font-spacegrotesk text-cyber-blue/90 font-medium">{item.job}</h4>
                </div>
                <div className="space-y-3">
                  {item.contents.map((content) => (
                    <p className="font-normal text-white-600 font-spacegrotesk text-sm leading-relaxed" key={content}>
                      {content}
                    </p>
                  ))}
                </div>
                
                {/* Dynamic Animated Charts mapping */}
                <div className="max-w-md">
                  {item.job.toLowerCase().includes('nielit') && <AnimatedChart type="nielit" />}
                  {item.job.toLowerCase().includes('docmize') && <AnimatedChart type="uwl" />}
                  {item.job.toLowerCase().includes('css') && <AnimatedChart type="protrainy" />}
                </div>
              </div>
            </div>
          ))}
          
          {/* Scroll Bar Track */}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-0 left-0 top-0 overflow-hidden w-[2px] bg-neutral-900 rounded-full"
          >
            <m.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink rounded-full"
            />
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};
