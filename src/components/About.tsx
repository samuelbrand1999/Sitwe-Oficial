import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32 lg:py-40 border-b border-neutral-800/60 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Title Column */}
          <ScrollReveal duration={0.9} yOffset={26} className="lg:col-span-4">
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Por trás dos projetos
            </h2>
            <div className="text-xs font-mono text-neutral-400 space-y-2 uppercase tracking-wider">
              <p>Dantes Brandão</p>
              <p>Web Designer & Art Director</p>
              <p className="text-neutral-400">Atendimento Brasil & Exterior</p>
            </div>
          </ScrollReveal>

          {/* Right Statement Column */}
          <div className="lg:col-span-8 space-y-10">
            <ScrollReveal duration={0.9} delay={0.12} yOffset={24} className="space-y-8 text-xl sm:text-2xl lg:text-3xl text-neutral-200 font-light leading-relaxed">
              <p className="text-white font-medium">
                Crio sites e landing pages personalizados para negócios que querem apresentar seu trabalho de forma clara, profissional e convincente.
              </p>
              <p className="text-neutral-300">
                Cada projeto começa pelo entendimento do negócio. Depois, transformo essas informações em uma estrutura que organiza a mensagem, valoriza o serviço e conduz o visitante até o próximo passo.
              </p>
              <p className="text-neutral-400">
                Porque um bom site não precisa apenas ser bonito. Ele precisa fazer sentido para quem está do outro lado.
              </p>
            </ScrollReveal>

            {/* Core Values / Anti-Slop Principles */}
            <ScrollReveal duration={0.8} delay={0.22} yOffset={20} className="pt-12 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs font-mono">
              <div>
                <span className="text-neutral-400 block uppercase tracking-widest mb-2">01 / Rigor</span>
                <p className="text-neutral-300 leading-relaxed font-sans">
                  Sem templates genéricos ou layouts pré-fabricados. Cada linha e espaçamento é concebido para a sua marca.
                </p>
              </div>

              <div>
                <span className="text-neutral-400 block uppercase tracking-widest mb-2">02 / Clareza</span>
                <p className="text-neutral-300 leading-relaxed font-sans">
                  Hierarquia de leitura limpa. O cliente em potencial encontra rapidamente o que você faz e como contratar.
                </p>
              </div>

              <div>
                <span className="text-neutral-400 block uppercase tracking-widest mb-2">03 / Longevidade</span>
                <p className="text-neutral-300 leading-relaxed font-sans">
                  Design minimalista e atemporal que preserva valor e sofisticação ao longo dos anos, sem modismos passageiros.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
