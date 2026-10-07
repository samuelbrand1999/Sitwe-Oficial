import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ContactCTAProps {
  onScrollToForm: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onScrollToForm }) => {
  return (
    <section className="py-28 sm:py-36 lg:py-48 border-b border-neutral-800/60 bg-[#070707] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center lg:text-left">
        <ScrollReveal duration={0.9} yOffset={28} className="max-w-4xl mx-auto lg:mx-0">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-6">
            Contato & Proposta
          </span>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-8 text-balance">
            Vamos conversar sobre o seu projeto?
          </h2>

          <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-12">
            Você me conta sobre seu trabalho e o que gostaria de construir. A partir disso, conversamos sobre a melhor estrutura para o seu projeto.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button
              onClick={onScrollToForm}
              className="btn-sheen group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg"
            >
              <span>Iniciar meu projeto</span>
              <ArrowDown className="arrow-subtle w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <a
              href="https://wa.me/5575981078595?text=Ol%C3%A1%20Dantes%2C%20gostaria%20de%20conversar%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20um%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 border border-neutral-800 hover:border-neutral-500 text-neutral-300 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors cursor-pointer"
            >
              <span>Conversar pelo WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
