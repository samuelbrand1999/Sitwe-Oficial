import React, { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ContactFormProps {
  initialService?: string;
  initialProject?: string;
}

type ProjectType = 'Site' | 'Landing Page' | 'Ainda não sei';

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService,
  initialProject,
}) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [socialOrSite, setSocialOrSite] = useState('');
  const [projectType, setProjectType] = useState<ProjectType>(
    initialService?.toLowerCase().includes('landing')
      ? 'Landing Page'
      : initialService?.toLowerCase().includes('site')
      ? 'Site'
      : 'Ainda não sei'
  );
  const [description, setDescription] = useState(
    initialProject ? `Tenho interesse em um projeto com a mesma linha de ${initialProject}. ` : ''
  );
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim()) {
      setError('Por favor, preencha seu nome e seu WhatsApp para que eu possa responder.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá Dantes! Preenchi o formulário no seu site:\n\n*Nome:* ${name}\n*WhatsApp:* ${whatsapp}\n*Instagram/Site atual:* ${
      socialOrSite || 'Não informado'
    }\n*O que procuro:* ${projectType}\n*Sobre o projeto:* ${description || 'Quero entender a melhor estrutura.'}`
  );

  const whatsappUrl = `https://wa.me/5575981078595?text=${whatsappMessage}`;

  return (
    <section id="contato" className="py-24 sm:py-32 lg:py-40 bg-[#0a0a0a] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Context & Guidelines */}
          <ScrollReveal duration={0.9} yOffset={26} className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Conte um pouco sobre o que você tem em mente.
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8">
                Não precisa saber explicar tudo sobre um site. Quero entender primeiro o seu negócio e o que você gostaria de construir.
              </p>

              <div className="space-y-4 pt-8 border-t border-neutral-900 text-xs font-mono text-neutral-400">
                <div className="flex items-start gap-3">
                  <span className="text-white">01</span>
                  <p className="text-neutral-400">
                    Você envia o formulário e eu analiso o seu contexto em até 24 horas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white">02</span>
                  <p className="text-neutral-400">
                    Retorno via WhatsApp com uma sugestão de formato, escopo e investimento.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white">03</span>
                  <p className="text-neutral-400">
                    Sem compromisso ou pressão de vendas: apenas uma conversa direta entre profissionais.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-neutral-900 mt-12 hidden lg:block">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                Atendimento Direto
              </span>
              <a
                href="mailto:contato@dantesbrandao.com.br"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                contato@dantesbrandao.com.br
              </a>
            </div>
          </ScrollReveal>

          {/* Right Column: Premium Form / Review */}
          <ScrollReveal duration={0.9} delay={0.14} yOffset={28} className="lg:col-span-7">
            {submitted ? (
              <div className="border border-neutral-800 bg-neutral-950 p-8 sm:p-12 text-left space-y-6">
                <div>
                  <span className="inline-block px-2.5 py-1 mb-3 text-[10px] font-mono uppercase tracking-widest bg-neutral-900 text-neutral-300 border border-neutral-800">
                    Etapa 2 · Revisão dos Dados
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Resumo do seu Projeto
                  </h3>
                  <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                    Revise as informações abaixo. Para que eu receba sua mensagem com esses dados prontos, clique no botão para abrir diretamente no WhatsApp:
                  </p>
                </div>

                <div className="p-5 sm:p-6 bg-[#0e0e0e] border border-neutral-800/80 space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-neutral-800/60">
                    <div>
                      <span className="text-neutral-500 uppercase text-[10px] block">Nome</span>
                      <span className="text-white font-sans text-sm font-semibold">{name}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 uppercase text-[10px] block">WhatsApp</span>
                      <span className="text-white text-sm">{whatsapp}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-neutral-800/60">
                    <div>
                      <span className="text-neutral-500 uppercase text-[10px] block">O que procura</span>
                      <span className="text-white font-sans text-sm font-medium">{projectType}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 uppercase text-[10px] block">Instagram / Site atual</span>
                      <span className="text-neutral-300 font-sans text-sm">{socialOrSite || 'Não informado'}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-neutral-500 uppercase text-[10px] block mb-1">Sobre o projeto</span>
                    <p className="text-neutral-300 font-sans text-sm leading-relaxed whitespace-pre-wrap">
                      {description || 'Quero conversar sobre a melhor estrutura para o meu projeto.'}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sheen inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg"
                  >
                    <span>Enviar direto no WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-wider px-4 py-3 border border-neutral-800 hover:border-neutral-600 transition-colors cursor-pointer"
                  >
                    ← Editar dados
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="p-4 bg-neutral-900 border border-neutral-700 text-xs font-mono text-neutral-200">
                    {error}
                  </div>
                )}

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-neutral-400">
                    Seu Nome *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como prefere ser chamado(a)?"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-white px-4 py-3.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
                  />
                </div>

                {/* WhatsApp & Social / Site */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="block text-xs font-mono uppercase tracking-widest text-neutral-400">
                      WhatsApp *
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="(DDD) 99999-9999"
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-white px-4 py-3.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="social" className="block text-xs font-mono uppercase tracking-widest text-neutral-400">
                      Instagram ou site atual <span className="text-neutral-400">(opcional)</span>
                    </label>
                    <input
                      id="social"
                      type="text"
                      value={socialOrSite}
                      onChange={(e) => setSocialOrSite(e.target.value)}
                      placeholder="@seu.perfil ou seudominio.com.br"
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-white px-4 py-3.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* O que você procura? */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400">
                    O que você procura?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {(['Site', 'Landing Page', 'Ainda não sei'] as ProjectType[]).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProjectType(type)}
                        className={`py-3.5 px-4 text-xs font-mono uppercase tracking-wider border text-center transition-all cursor-pointer ${
                          projectType === type
                            ? 'bg-white text-black border-white font-semibold'
                            : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Conte um pouco sobre o projeto */}
                <div className="space-y-2">
                  <label htmlFor="description" className="block text-xs font-mono uppercase tracking-widest text-neutral-400">
                    Conte um pouco sobre o projeto
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Qual é a sua área de atuação? O que você gostaria que o seu novo site transmitisse?"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-white px-4 py-3.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="btn-sheen group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer shadow-md"
                  >
                    <span>Revisar e enviar no WhatsApp</span>
                    <Send className="arrow-subtle w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <span className="text-[11px] font-mono text-neutral-400">
                    Gera um resumo e abre direto no seu WhatsApp
                  </span>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
