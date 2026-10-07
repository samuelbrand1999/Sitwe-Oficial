import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
  isReady?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, isReady = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);

      const sections = ['projetos', 'servicos', 'sobre', 'processo', 'contato'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out ${
        isReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      } ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-800/80 py-4 shadow-sm'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center hover:opacity-85 transition-opacity"
            aria-label="Dantes Brandão | Web Designer - Página inicial"
          >
            <img
              src="https://github.com/samuelbrand1999/Meu-site/blob/main/Logo%20sem%20fundo.png?raw=true"
              alt="Dantes Brandão | Web Designer"
              className="h-8 sm:h-9 w-auto max-w-[200px] object-contain"
            />
          </a>

          {/* Zone 2: 4 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <button
              onClick={() => scrollTo('projetos')}
              className={`hover:text-white transition-colors cursor-pointer py-1 relative ${
                activeSection === 'projetos' ? 'text-white' : ''
              }`}
            >
              Projetos
              {activeSection === 'projetos' && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all" />
              )}
            </button>
            <button
              onClick={() => scrollTo('servicos')}
              className={`hover:text-white transition-colors cursor-pointer py-1 relative ${
                activeSection === 'servicos' ? 'text-white' : ''
              }`}
            >
              Serviços
              {activeSection === 'servicos' && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all" />
              )}
            </button>
            <button
              onClick={() => scrollTo('sobre')}
              className={`hover:text-white transition-colors cursor-pointer py-1 relative ${
                activeSection === 'sobre' ? 'text-white' : ''
              }`}
            >
              Sobre
              {activeSection === 'sobre' && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all" />
              )}
            </button>
            <button
              onClick={() => scrollTo('contato')}
              className={`hover:text-white transition-colors cursor-pointer py-1 relative ${
                activeSection === 'contato' ? 'text-white' : ''
              }`}
            >
              Contato
              {activeSection === 'contato' && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all" />
              )}
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <button
              onClick={onOpenContact}
              className="btn-sheen inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-medium uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors duration-150 cursor-pointer whitespace-nowrap"
            >
              <span>Vamos conversar</span>
              <ArrowUpRight className="arrow-subtle w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-[#0a0a0a]/98 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium">
            <button
              onClick={() => scrollTo('projetos')}
              className="text-left py-2 text-neutral-300 hover:text-white transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollTo('servicos')}
              className="text-left py-2 text-neutral-300 hover:text-white transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollTo('sobre')}
              className="text-left py-2 text-neutral-300 hover:text-white transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollTo('processo')}
              className="text-left py-2 text-neutral-300 hover:text-white transition-colors"
            >
              Processo
            </button>
            <button
              onClick={() => scrollTo('contato')}
              className="text-left py-2 text-neutral-300 hover:text-white transition-colors"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
