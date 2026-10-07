import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-900 bg-[#050505] text-neutral-400 py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Top Tier: Brand & Status & Quick Scroll */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-neutral-900">
          <div>
            <img
              src="https://github.com/samuelbrand1999/Meu-site/blob/main/Logo%20sem%20fundo.png?raw=true"
              alt="Dantes Brandão | Web Designer"
              className="h-8 sm:h-9 w-auto max-w-[200px] object-contain mb-2"
            />
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mt-1">
              Web Design & Direção de Arte Digital
            </p>
          </div>

          {/* Back to Top */}
          <div className="flex items-center text-xs font-mono">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer uppercase tracking-wider"
              aria-label="Voltar ao início da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Editorial Links & Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-xs font-mono">
          <div className="md:col-span-6 space-y-3">
            <span className="text-neutral-400 uppercase tracking-widest block">
              Canais Profissionais
            </span>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <a
                  href="https://wa.me/5575981078595?text=Ol%C3%A1%20Dantes%2C%20gostaria%20de%20conversar%20sobre%20o%20meu%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>WhatsApp: (75) 98107-8595</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@dantesbrandao.com.br"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>E-mail: contato@dantesbrandao.com.br</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dantes.brandao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Instagram: @dantes.brandao</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-6 space-y-3">
            <span className="text-neutral-400 uppercase tracking-widest block">
              Posicionamento
            </span>
            <p className="text-neutral-300 font-sans text-sm leading-relaxed max-w-md">
              Sites que ajudam seu negócio a ser percebido, entendido e escolhido.
            </p>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Legal */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <p>© {new Date().getFullYear()} Dantes Brandão. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-6">
            {onOpenPrivacy && (
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="hover:text-white transition-colors cursor-pointer underline underline-offset-4 decoration-neutral-800 hover:decoration-neutral-400"
              >
                Política de Privacidade
              </button>
            )}
            <p className="tracking-widest uppercase text-[10px]">
              Design Autoral & Desenvolvimento Web
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
