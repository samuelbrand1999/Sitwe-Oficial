import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, CheckCircle2, ArrowUpRight, X } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onBack]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Política de Privacidade"
      className="fixed inset-0 z-[100] overflow-y-auto bg-[#070707] text-neutral-300 selection:bg-white selection:text-black animate-fade-in"
    >
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#070707]/95 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Voltar para a página inicial"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Voltar ao início</span>
            </button>
          </div>

          <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="block">
            <img
              src="https://github.com/samuelbrand1999/Meu-site/blob/main/Logo%20sem%20fundo.png?raw=true"
              alt="Dantes Brandão | Web Designer"
              className="h-7 w-auto max-w-[150px] object-contain"
            />
          </a>

          <div className="flex items-center">
            <button
              type="button"
              onClick={onBack}
              className="w-9 h-9 flex items-center justify-center border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors cursor-pointer"
              aria-label="Fechar política de privacidade"
              title="Fechar (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[900px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
        {/* Header Tag & Title */}
        <div className="mb-14 border-b border-neutral-900 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900/80 border border-neutral-800 text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-6">
            <Shield className="w-3.5 h-3.5 text-neutral-300" />
            <span>LGPD · Lei nº 13.709/2018</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Política de Privacidade
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-2xl">
            Transparência, sobriedade e respeito à confidencialidade dos seus dados pessoais e informações de projeto.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
            <span>Última atualização: Outubro de 2026</span>
            <span>·</span>
            <span>Controlador: Dantes Brandão</span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 text-sm sm:text-base leading-relaxed text-neutral-300 font-normal">
          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span className="text-white">01</span>
              <span>/</span>
              <span>Compromisso e Finalidade</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              1. Visão Geral e Princípios
            </h2>
            <p>
              Esta Política de Privacidade descreve de forma clara e objetiva como <strong>Dantes Brandão — Web Design & Direção de Arte Digital</strong> coleta, utiliza, armazena e protege os dados pessoais coletados por meio deste website (<span className="text-neutral-200 font-mono text-xs">dantesbrandao.com.br</span>) e em comunicações diretas via WhatsApp ou e-mail.
            </p>
            <p>
              Operamos com estrita observância à Lei Geral de Proteção de Dados Pessoais (LGPD – Lei Federal nº 13.709/2018), pautando nossas práticas nos princípios da finalidade, adequação, necessidade, livre acesso e segurança da informação.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span className="text-white">02</span>
              <span>/</span>
              <span>Coleta de Informações</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              2. Dados Pessoais Coletados
            </h2>
            <p>
              Coletamos estritamente as informações necessárias para viabilizar o primeiro contato profissional, o diagnóstico de marca e a elaboração de propostas comerciais personalizadas:
            </p>
            <ul className="space-y-2.5 my-4 pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-1" />
                <span>
                  <strong>Dados de Identificação e Contato:</strong> Nome completo, endereço de e-mail e número de telefone/WhatsApp fornecidos voluntariamente através do nosso formulário de contato.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-1" />
                <span>
                  <strong>Informações do Projeto:</strong> Tipo de serviço de interesse (Landing Page, Site Institucional, Redesign), profissão/nicho de atuação, site atual e detalhes do escopo informados na mensagem.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-1" />
                <span>
                  <strong>Dados Técnicos de Navegação:</strong> Informações anônimas de desempenho e métricas essenciais de carregamento de recursos através de tecnologias padrão de protocolo HTTP/HTTPS, sem rastreamento abusivo ou perfilamento comercial para terceiros.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span className="text-white">03</span>
              <span>/</span>
              <span>Finalidades e Base Legal</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              3. Finalidade e Base Legal do Tratamento
            </h2>
            <p>
              Os dados coletados são tratados sob as seguintes hipóteses legais autorizadas pelo artigo 7º da LGPD:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 bg-neutral-900/50 border border-neutral-800">
                <h3 className="text-sm font-semibold text-white mb-1.5">Atendimento e Proposta</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Responder a solicitações de orçamento, avaliar a viabilidade técnica e elaborar contratos de prestação de serviços digitais.
                </p>
              </div>
              <div className="p-4 bg-neutral-900/50 border border-neutral-800">
                <h3 className="text-sm font-semibold text-white mb-1.5">Comunicação Direta</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Contato exclusivo entre o profissional e o cliente via WhatsApp ou e-mail, sem envio de newsletters em massa ou spam.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span className="text-white">04</span>
              <span>/</span>
              <span>Armazenamento e Segurança</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              4. Armazenamento e Medidas de Segurança
            </h2>
            <p>
              Adotamos práticas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, perda, alteração ou vazamento:
            </p>
            <div className="space-y-3 my-4">
              <div className="flex items-start gap-3 p-3.5 bg-neutral-900/40 border border-neutral-800/80">
                <Lock className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Criptografia de ponta a ponta em trânsito através de certificado SSL/TLS (HTTPS em todo o domínio).
                </p>
              </div>
              <div className="flex items-start gap-3 p-3.5 bg-neutral-900/40 border border-neutral-800/80">
                <Eye className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Acesso restrito unicamente ao profissional responsável pelo desenvolvimento e atendimento do projeto.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span className="text-white">05</span>
              <span>/</span>
              <span>Compartilhamento</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              5. Compartilhamento de Dados com Terceiros
            </h2>
            <p>
              <strong>Não vendemos, não alugamos e não comercializamos dados pessoais</strong> sob qualquer hipótese. O compartilhamento ocorre exclusivamente nos limites estritamente necessários para a prestação do serviço:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-400 pl-2">
              <li>
                <strong className="text-neutral-200">Serviços de Hospedagem e Nuvem:</strong> Infraestrutura de servidores segura para disponibilização do site e roteamento seguro de formulários.
              </li>
              <li>
                <strong className="text-neutral-200">WhatsApp / Meta:</strong> Quando você opta por iniciar uma conversa pelo canal direto do WhatsApp, os dados trafegam de acordo com a política de privacidade da respectiva plataforma.
              </li>
              <li>
                <strong className="text-neutral-200">Cumprimento Legal:</strong> Para atender a obrigações judiciais, regulatórias ou ordens de autoridades competentes.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span className="text-white">06</span>
              <span>/</span>
              <span>Direitos do Titular</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              6. Seus Direitos (Artigo 18 da LGPD)
            </h2>
            <p>
              Como titular dos seus dados pessoais, você pode solicitar a qualquer momento:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs font-mono">
              <div className="p-3 border border-neutral-800 bg-neutral-900/30">
                <span className="text-white font-medium block mb-1">Acesso e Confirmação</span>
                <span className="text-neutral-400">Confirmar a existência de tratamento e acessar seus dados.</span>
              </div>
              <div className="p-3 border border-neutral-800 bg-neutral-900/30">
                <span className="text-white font-medium block mb-1">Correção</span>
                <span className="text-neutral-400">Solicitar a retificação de dados incompletos ou inexatos.</span>
              </div>
              <div className="p-3 border border-neutral-800 bg-neutral-900/30">
                <span className="text-white font-medium block mb-1">Eliminação e Revogação</span>
                <span className="text-neutral-400">Pedir a exclusão de dados tratados com base no seu consentimento.</span>
              </div>
              <div className="p-3 border border-neutral-800 bg-neutral-900/30">
                <span className="text-white font-medium block mb-1">Portabilidade</span>
                <span className="text-neutral-400">Solicitar a cópia estruturada das informações fornecidas.</span>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 pt-6 border-t border-neutral-900">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span className="text-white">07</span>
              <span>/</span>
              <span>Canal de Contato</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              7. Encarregado de Proteção de Dados (DPO)
            </h2>
            <p>
              Para esclarecer qualquer dúvida sobre esta política ou exercer seus direitos de titular, entre em contato diretamente com o responsável:
            </p>
            <div className="p-6 bg-neutral-900/60 border border-neutral-800 space-y-3 font-mono text-xs">
              <div>
                <span className="text-neutral-400 uppercase tracking-widest block text-[10px]">Profissional Responsável</span>
                <span className="text-white font-semibold text-sm">Dantes Brandão</span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-widest block text-[10px]">WhatsApp Direto</span>
                <a
                  href="https://wa.me/5575981078595?text=Ol%C3%A1%20Dantes%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20a%20pol%C3%ADtica%20de%20privacidade."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>(75) 98107-8595</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-widest block text-[10px]">Instagram</span>
                <a
                  href="https://www.instagram.com/dantes.brandao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>@dantes.brandao</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom CTA to return */}
        <div className="mt-16 pt-10 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-3 px-6 py-3 border border-neutral-800 bg-neutral-900 text-white text-xs font-mono uppercase tracking-widest hover:border-neutral-500 hover:bg-neutral-800 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Retornar ao Portfólio</span>
          </button>

          <p className="text-xs font-mono text-neutral-400">
            © {new Date().getFullYear()} Dantes Brandão · Direção de Arte Digital
          </p>
        </div>
      </main>
    </div>
  );
};
