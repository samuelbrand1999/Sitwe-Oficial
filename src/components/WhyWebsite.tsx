import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const WhyWebsite: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 border-b border-neutral-800/60 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Large Conceptual Title */}
        <ScrollReveal duration={0.9} yOffset={26} className="max-w-5xl mb-20 lg:mb-28">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance">
            Antes de entrar em contato, <br className="hidden sm:inline" />
            as pessoas procuram saber <br className="hidden sm:inline" />
            <span className="text-neutral-400 font-serif italic font-normal">
              quem está do outro lado.
            </span>
          </h2>
        </ScrollReveal>

        {/* Asymmetrical Editorial Comparison & Synthesis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: The Fragmented Digital Presence */}
          <ScrollReveal duration={0.9} delay={0.1} yOffset={24} className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6 text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed">
              <p className="border-l border-neutral-800 pl-6 py-1">
                Seu <span className="text-white font-medium">Instagram</span> mostra parte do seu trabalho.
              </p>
              <p className="border-l border-neutral-800 pl-6 py-1">
                O <span className="text-white font-medium">WhatsApp</span> facilita a conversa.
              </p>
              <p className="bg-white text-black font-semibold px-4 sm:px-5 py-2.5 inline-block">
                Mas o site organiza tudo em um só lugar.
              </p>
            </div>

            <div className="mt-16 pt-8 border-t border-neutral-900 hidden lg:block">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                Ponto de Ancoragem
              </span>
              <p className="text-xs text-neutral-400 leading-normal max-w-sm">
                Redes sociais são canais de passagem. O site é o seu território autoral e definitivo.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: The 5 Foundations of a Professional Space */}
          <div className="lg:col-span-7">
            <div className="border-t border-neutral-800 divide-y divide-neutral-900">
              {[
                { label: 'Identidade', text: 'Quem você é.' },
                { label: 'Especialidade', text: 'O que você faz.' },
                { label: 'Metodologia', text: 'Como trabalha.' },
                { label: 'Autoridade', text: 'O que já realizou.' },
                { label: 'Ação', text: 'E como entrar em contato.' },
              ].map((item, index) => (
                <ScrollReveal
                  key={index}
                  duration={0.7}
                  delay={0.06 * index}
                  yOffset={18}
                  className="py-6 sm:py-8 flex items-baseline justify-between group transition-colors duration-200"
                >
                  <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white group-hover:text-neutral-300 transition-colors">
                    {item.text}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 shrink-0 ml-4">
                    {item.label}
                  </span>
                </ScrollReveal>
              ))}
            </div>

            {/* Final Synthesis Statement */}
            <ScrollReveal duration={0.8} delay={0.25} yOffset={20} className="mt-14 pt-8 border-t border-neutral-800">
              <p className="font-display text-xl sm:text-2xl text-neutral-300 font-medium tracking-tight">
                Um espaço próprio para apresentar seu trabalho.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
