import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-24 sm:py-32 lg:py-40 border-b border-neutral-800/60 bg-[#070707]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Headline */}
        <ScrollReveal duration={0.9} yOffset={26} className="mb-20 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              O que eu crio
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Soluções sob medida desenhadas a partir do modelo de cada profissional, sem templates prontos e com arquitetura orientada à clareza.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest hidden md:block">
            <span>Direção Visual Personalizada</span>
          </div>
        </ScrollReveal>

        {/* Editorial Service Rows with subtle hover depth */}
        <div className="divide-y divide-neutral-800/80 border-t border-b border-neutral-800/80">
          {SERVICES.map((service, index) => (
            <ScrollReveal
              key={service.title}
              duration={0.85}
              delay={index * 0.1}
              yOffset={24}
              className="block"
            >
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="py-12 lg:py-16 transition-all duration-300 group cursor-default"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Service Title */}
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight group-hover:text-neutral-300 transition-colors duration-200">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5">
                    <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Action - Matching Hero Primary Button Style */}
                  <div className="lg:col-span-3 flex lg:justify-end items-start pt-2 lg:pt-0">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="btn-sheen group/btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-all duration-200 cursor-pointer shadow-sm whitespace-nowrap"
                      aria-label={`Solicitar projeto de ${service.title}`}
                    >
                      <span>Solicitar projeto</span>
                      <ArrowUpRight className="arrow-subtle w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
