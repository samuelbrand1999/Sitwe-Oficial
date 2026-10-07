import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="processo" className="py-24 sm:py-32 lg:py-40 border-b border-neutral-800/60 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Headline */}
        <ScrollReveal duration={0.9} yOffset={26} className="mb-20 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              Como funciona
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Um processo estruturado em cinco etapas transparentes, do primeiro alinhamento até a publicação final.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest hidden md:block">
            <span>5 Etapas Concisas</span>
          </div>
        </ScrollReveal>

        {/* Process Flow - Desktop (Horizontal Connected Grid) & Mobile (Vertical Connected Guide) */}
        <div className="relative">
          {/* Connecting hairline guide across desktop */}
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[1px] bg-neutral-800 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const isSelected = activeStep === index;

              return (
                <ScrollReveal
                  key={step.number}
                  duration={0.8}
                  delay={index * 0.08}
                  yOffset={24}
                  className="flex flex-col justify-between"
                >
                  <div
                    onMouseEnter={() => setActiveStep(index)}
                    className="group relative flex flex-col justify-between pt-6 lg:pt-0 cursor-default h-full"
                  >
                    {/* Step node on the line */}
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 text-xs font-mono border transition-all duration-300 ${
                          isSelected
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-[#0a0a0a] text-neutral-400 border-neutral-800 group-hover:border-neutral-500'
                        }`}
                      >
                        {step.number}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 lg:hidden">
                        Fase {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-300 font-medium leading-relaxed">
                        “{step.description}”
                      </p>
                      <p className="text-xs text-neutral-400 font-sans leading-relaxed pt-2 border-t border-neutral-900">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
