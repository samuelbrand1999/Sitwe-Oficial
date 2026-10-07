import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Project } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { ProjectMockup } from './ProjectMockup';

interface ProjectCardProps {
  project: Project;
  isFullWidth: boolean;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isFullWidth, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ScrollReveal
      key={project.id}
      duration={0.9}
      delay={index * 0.08}
      yOffset={28}
      className={`${project.gridSpan} flex flex-col justify-between`}
    >
      <div className="group flex flex-col justify-between h-full">
        {/* Visual Image Container with interactive full-page scroll on hover/mobile click */}
        <div className="mb-6">
          <ProjectMockup
            project={project}
            priority={true}
            aspectClass={
              isFullWidth
                ? 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/9] lg:max-h-[640px]'
                : 'aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10]'
            }
          />
        </div>

        {/* Editorial Metadata Block (Zero-Pills: Clean Unboxed Text) */}
        <div className="space-y-4">
          <div className="flex items-center text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="uppercase tracking-widest text-neutral-400 font-medium">
                {project.category}
              </span>
              <span className="text-neutral-700">·</span>
              <span className="text-neutral-400">{project.tag}</span>
            </div>
          </div>

          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.name}
            </h3>
          </div>

          {/* Description Section with Expand/Collapse ("Ver mais") */}
          <div className="space-y-2.5">
            <div className="relative">
              <p
                className={`text-sm sm:text-base text-neutral-300 font-normal leading-relaxed transition-all duration-300 ${
                  isExpanded ? 'line-clamp-none' : 'line-clamp-2'
                }`}
              >
                {project.shortDescription}
              </p>
            </div>

            {/* Editorial Toggle Button */}
            <div className="pt-0.5">
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer group focus:outline-none"
                aria-expanded={isExpanded}
                aria-label={
                  isExpanded
                    ? `Ocultar descrição completa de ${project.name}`
                    : `Ver descrição completa de ${project.name}`
                }
              >
                <span className="border-b border-neutral-700/60 group-hover:border-white transition-colors pb-0.5">
                  {isExpanded ? 'Ver menos' : 'Ver mais'}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 text-white' : 'text-neutral-500 group-hover:text-white'
                  }`}
                />
              </button>
            </div>

            {/* Smooth expansion of full project case context & specifications */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden space-y-3 pt-2"
                >
                  {/* Escopo & Entregas */}
                  {project.details?.deliverables && (
                    <div className="pt-3 border-t border-neutral-800/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-neutral-400">
                      <span className="text-neutral-400 uppercase tracking-widest font-medium">
                        Escopo:
                      </span>
                      {project.details.deliverables.map((item, idx) => (
                        <span key={idx} className="flex items-center gap-2 text-neutral-300">
                          <span>{item}</span>
                          {idx < project.details.deliverables.length - 1 && (
                            <span className="text-neutral-700">/</span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Destaque / Resultado */}
                  {project.details?.highlight && (
                    <div className="text-xs font-sans text-neutral-400 flex items-baseline gap-2 pt-2 border-t border-neutral-800/60">
                      <span className="text-neutral-400 font-mono uppercase tracking-wider text-[11px] shrink-0">
                        Resultado:
                      </span>
                      <span className="text-neutral-300 leading-normal">
                        {project.details.highlight}
                      </span>
                    </div>
                  )}

                  {/* Desafio */}
                  {project.details?.challenge && (
                    <div className="text-xs text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-2.5">
                      <span className="font-mono uppercase tracking-wider text-[11px] text-neutral-400 block mb-1">
                        Desafio:
                      </span>
                      <p className="text-neutral-300">{project.details.challenge}</p>
                    </div>
                  )}

                  {/* Solução */}
                  {project.details?.solution && (
                    <div className="text-xs text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-2.5">
                      <span className="font-mono uppercase tracking-wider text-[11px] text-neutral-400 block mb-1">
                        Solução:
                      </span>
                      <p className="text-neutral-300">{project.details.solution}</p>
                    </div>
                  )}

                  {/* Tipografia & Estilo */}
                  {project.details?.typography && (
                    <div className="text-xs text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-2.5">
                      <span className="font-mono uppercase tracking-wider text-[11px] text-neutral-400 block mb-1">
                        Tipografia & Estilo:
                      </span>
                      <p className="text-neutral-300">{project.details.typography}</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

interface PortfolioProps {
  projects: Project[];
}

export const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  return (
    <section id="projetos" className="py-24 sm:py-32 lg:py-40 border-b border-neutral-800/60 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Headline */}
        <ScrollReveal duration={0.9} yOffset={26} className="mb-20 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              Projetos selecionados
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Cada interface é construída a partir da identidade particular de cada cliente, unindo direção de arte, clareza funcional e acabamento técnico.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest hidden md:block">
            <span>Curadoria · 05 Trabalhos Selecionados</span>
          </div>
        </ScrollReveal>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFullWidth={index === 4}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
