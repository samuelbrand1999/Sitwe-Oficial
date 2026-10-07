import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTRAIT_IMAGE } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onStartProject }) => {
  return (
    <section
      className="relative min-h-[92vh] pt-32 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between border-b border-neutral-800/60 overflow-hidden bg-[#0a0a0a]"
    >
      {/* 1. Subtle Analog Film Grain Texture (Minimalist Paper/Film Depth) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.038] mix-blend-screen select-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />

      {/* 2. Soft Atmospheric Light Drifts (Kinetic Ambient Aurora, 26s-32s cycle) */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[680px] h-[680px] rounded-full bg-neutral-400/[0.05] blur-[150px] animate-drift-slow-1 z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 right-0 w-[740px] h-[740px] rounded-full bg-stone-400/[0.04] blur-[180px] animate-drift-slow-2 z-0"
        aria-hidden="true"
      />

      {/* 3. Subtle architectural vertical grid guides (clean, static lines) */}
      <div className="absolute inset-0 pointer-events-none max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex justify-between z-0">
        <div className="w-[1px] h-full bg-neutral-900/40" />
        <div className="w-[1px] h-full bg-neutral-900/40 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-900/40" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full z-10">
        {/* Hero Composition: Asymmetric Split between Typography & Integrated Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Typographic Column */}
          <motion.div
            initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col justify-between"
          >
            <div>
              <h1 className="font-display text-[38px] sm:text-[54px] md:text-[68px] lg:text-[76px] xl:text-[84px] leading-[1.02] tracking-[-0.03em] font-extrabold text-white text-balance mb-8">
                Seu próximo cliente <br className="hidden sm:inline" />
                <span className="text-neutral-400 font-serif italic font-normal tracking-tight pr-1.5">
                  pesquisa você
                </span> <br />
                antes de entrar <br className="hidden sm:inline" />
                em contato.
              </h1>

              <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed text-pretty mb-10">
                Crio sites e landing pages personalizados para apresentar seu negócio com clareza, transmitir confiança e transformar interesse em clientes.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-900">
              <button
                onClick={onStartProject}
                className="btn-sheen group inline-flex items-center gap-3 px-6 py-4 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-all duration-200 cursor-pointer shadow-sm"
              >
                <span>Quero criar meu site</span>
                <ArrowUpRight className="arrow-subtle w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onExploreProjects}
                className="group inline-flex items-center gap-2 px-6 py-4 border border-neutral-700 hover:border-white text-neutral-300 hover:text-white text-xs font-medium uppercase tracking-widest transition-all duration-200 cursor-pointer bg-neutral-950/40"
              >
                <span>Ver projetos</span>
                <span className="text-neutral-500 font-mono text-[11px]">(05)</span>
              </button>
            </div>
          </motion.div>

          {/* Integrated Portrait Photography Column */}
          <motion.div
            initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative mt-4 lg:mt-0"
          >
            <div className="relative group">
              {/* Hairline geometric frame */}
              <div className="relative aspect-3/4 max-w-md mx-auto lg:max-w-none overflow-hidden bg-neutral-900 border border-neutral-800">
                <img
                  src="/dante_bracos_cruzados.webp"
                  alt="Dantes Brandão | Web Designer"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  width={480}
                  height={640}
                  onError={(e) => {
                    e.currentTarget.src = PORTRAIT_IMAGE;
                  }}
                  className="w-full h-full object-cover object-[center_15%] grayscale contrast-105 filter transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle dark gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Editorial corner captions */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none text-white text-[11px] font-mono tracking-wider">
                  <div>
                    <span className="block uppercase text-neutral-400">Dantes Brandão</span>
                    <span className="text-neutral-500">Fundador & Designer</span>
                  </div>
                  <div className="text-right text-neutral-500">
                    <span>Brasil / Global</span>
                  </div>
                </div>
              </div>

              {/* Minimal aesthetic accent line */}
              <div className="hidden lg:block absolute -bottom-3 -right-3 w-16 h-[1px] bg-neutral-600" />
              <div className="hidden lg:block absolute -bottom-3 -right-3 w-[1px] h-16 bg-neutral-600" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar with subtle scroll indication */}
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 w-full pt-12">
        <div className="flex items-center justify-between text-xs font-mono text-neutral-500 uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <span>Scroll para explorar</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <span>Direção Editorial</span>
            <span>·</span>
            <span>Design Autoral</span>
            <span>·</span>
            <span>Desenvolvimento Web</span>
          </div>
        </div>
      </div>
    </section>
  );
};
