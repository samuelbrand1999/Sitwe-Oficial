import { Project, ServiceItem, ProcessStep, TestimonialItem } from '../types';

import portraitImg from '../assets/images/dante_bracos_cruzados.webp';
import karenImg from '../assets/images/project_karen_patricia_1790974541073.jpg';
import karenFullImg from '../assets/images/project_karen_patricia_full.webp';
import karlaImg from '../assets/images/project_karla_correa_1790974553999.jpg';
import karlaFullImg from '../assets/images/project_karla_correa_full.webp';
import silvanaImg from '../assets/images/project_silvana_castro_1790974564820.jpg';
import silvanaFullImg from '../assets/images/project_silvana_castro_full.webp';
import medeirosImg from '../assets/images/project_medeiros_bezerra_1790974574018.jpg';
import andradeFonsecaImg from '../assets/images/project_andrade_fonseca.webp';
import rickArqImg from '../assets/images/project_rick_arq_1790974582692.jpg';
import rickArqFullImg from '../assets/images/project_rick_arq_full.webp';

export const PORTRAIT_IMAGE = portraitImg;

export const PROJECTS: Project[] = [
  {
    id: 'karen-patricia',
    name: 'Karen Patrícia',
    client: 'Dra. Karen Patrícia',
    category: 'Site one page',
    tag: 'Psicologia & Psicoterapia Clínica',
    year: '2025',
    image: karenFullImg,
    fallbackImage: karenImg,
    scrollable: true,
    shortDescription: 'Site one page concebido para transmitir acolhimento ético, serenidade e autoridade clínica. A estrutura organiza toda a abordagem terapêutica, alivia hesitações do paciente e direciona agendamentos com naturalidade e discrição.',
    gridSpan: 'md:col-span-6 lg:col-span-6',
    aspectRatio: 'aspect-16/10',
    details: {
      challenge: 'Pacientes em busca de apoio psicológico precisam de uma experiência digital serena e contínua, que dissipe hesitações e demonstre acolhimento ético e rigor profissional.',
      solution: 'Direção de arte com respiração ampla, tons neutros que transmitem calma, tipografia editorial elegante e pontos de contato claros sem apelos comerciais vazios.',
      deliverables: ['Direção de Arte Digital', 'Site One Page Responsivo', 'Copywriting Estruturado', 'Integração WhatsApp Direct'],
      typography: 'Serif Clássica refinada para cabeçalhos e Sans-Serif legível para conteúdo terapêutico.',
      highlight: 'Aumento imediato na qualificação dos primeiros contatos recebidos via canal direto.'
    }
  },
  {
    id: 'karla-correa',
    name: 'Karla Corrêa',
    client: 'Karla Corrêa',
    category: 'Site one page',
    tag: 'Nutrição & Saúde Integrativa',
    year: '2025',
    image: karlaFullImg,
    fallbackImage: karlaImg,
    scrollable: true,
    shortDescription: 'Site one page autoral desenvolvido para posicionar a atuação em nutrição e saúde preventiva além das redes sociais. A interface equilibra fundamentação científica, clareza no método e apresentação convidativa dos formatos de consulta e acompanhamento.',
    gridSpan: 'md:col-span-6 lg:col-span-6',
    aspectRatio: 'aspect-16/10',
    details: {
      challenge: 'Diferenciar o consultório da nutricionista em meio à saturação de perfis de redes sociais, consolidando autoridade e clareza no método.',
      solution: 'Design minimalista focado em clareza alimentar, fotografia com luz natural e explicação intuitiva das modalidades de acompanhamento nutricional.',
      deliverables: ['Identidade Visual Web', 'Site One Page Responsivo', 'Estrutura de Serviços', 'Formulário Pré-Consulta'],
      typography: 'Grotesk contemporânea de alta precisão com hierarquia concisa.',
      highlight: 'Redução de 40% nas dúvidas prévias sobre formatos de atendimento.'
    }
  },
  {
    id: 'silvana-castro',
    name: 'Silvana Castro',
    client: 'Silvana Castro',
    category: 'Site one page',
    tag: 'Psicanálise Contemporânea',
    year: '2024',
    image: silvanaFullImg,
    fallbackImage: silvanaImg,
    scrollable: true,
    shortDescription: 'Site one page de atmosfera sóbria e reflexiva para prática psicanalítica, preservando o tempo de leitura e a profundidade ensaística. Uma composição visual contínua inspirada em periódicos contemporâneos, livre de apelos mercadológicos agressivos.',
    gridSpan: 'md:col-span-6 lg:col-span-6',
    aspectRatio: 'aspect-16/10',
    details: {
      challenge: 'A psicanálise exige uma presença digital que fuja de fórmulas imediatistas e preserve o espaço de reflexão e rigor teórico.',
      solution: 'Composição editorial assemelhada a publicações acadêmicas e de ensaios, com leitura imersiva e transições sem ruídos visuais.',
      deliverables: ['Arquitetura da Informação', 'Site One Page Editorial', 'Página de Atendimento Clínico', 'SEO Especializado'],
      typography: 'Tipografia editorial literária com entrelinha generosa para leitura prolongada.',
      highlight: 'Posicionamento institucional autêntico para pacientes e pares da comunidade psicanalítica.'
    }
  },
  {
    id: 'andrade-fonseca',
    name: 'Andrade & Fonseca',
    client: 'Andrade & Fonseca Advocacia',
    category: 'Concept Project',
    tag: 'Direito Empresarial & Estratégico',
    year: '2025',
    image: andradeFonsecaImg,
    scrollable: true,
    shortDescription: 'Concept project desenvolvido para banca de advocacia empresarial, unindo monocromia refinada, grid técnico com linhas ultra-finas e organização modular das áreas de prática jurídica para tomadores de decisão corporativos.',
    gridSpan: 'md:col-span-6 lg:col-span-6',
    aspectRatio: 'aspect-16/10',
    details: {
      challenge: 'Transmitir solidez e discrição técnica para clientes corporativos, afastando estereótipos antiquados e facilitando a compreensão das áreas de atuação.',
      solution: 'Monocromia refinada, grid com linhas ultra-finas e organização modular das áreas de prática jurídica do escritório.',
      deliverables: ['Direção de Arte Digital', 'Conceito Institucional Completo', 'Áreas de Atuação Estruturadas', 'Otimização Mobile'],
      typography: 'Display sans estruturado com números tabulares e precisão geométrica.',
      highlight: 'Estudo aprofundado de design editorial e prestígio visual para o setor corporativo.'
    }
  },
  {
    id: 'rick-arq',
    name: 'Rick Arq',
    client: 'Rick Arquitetura & Interiores',
    category: 'Concept Project',
    tag: 'Arquitetura & Urbanismo',
    year: '2024',
    image: rickArqFullImg,
    fallbackImage: rickArqImg,
    scrollable: true,
    shortDescription: 'Estudo de direção de arte para estúdio de arquitetura contemporânea que trata o espaço e a matéria como linguagem escultórica. Layout imersivo que explora tipografia imponente, grandes planos visuais e navegação contemplativa.',
    gridSpan: 'md:col-span-12 lg:col-span-12',
    aspectRatio: 'aspect-16/10',
    details: {
      challenge: 'Explorar os limites da direção de arte digital para estúdios que tratam o espaço, a luz e os materiais como linguagem escultórica.',
      solution: 'Grid assimétrico dinâmico, proporções monumentais e navegação contemplativa baseada em grandes planos visuais.',
      deliverables: ['Conceito de Navegação Espacial', 'Microinterações Customizadas', 'Curadoria de Projetos', 'Interações de Cursor'],
      typography: 'Sans-serif condensada contrastada.',
      highlight: 'Destaque em seleções curadas de design e referência em composição minimalista.'
    }
  }
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'SITES ONE PAGE',
    description: 'Uma página completa e estratégica para apresentar seu negócio, seus serviços, sua experiência e seus canais de contato.',
    deliverables: ['Arquitetura de informação completa', 'Navegação fluida em seção única', 'Área sobre, histórico e método', 'Canais diretos de contato']
  },
  {
    number: '02',
    title: 'LANDING PAGES',
    description: 'Uma página focada em uma oferta, serviço ou objetivo específico.',
    deliverables: ['Foco em um objetivo claro', 'Comunicação direta e sem ruído', 'Hierarquia visual precisa', 'Direcionamento ágil para conversão']
  },
  {
    number: '03',
    title: 'SITES INSTITUCIONAIS',
    description: 'Estruturas completas para empresas e profissionais que precisam apresentar diferentes áreas, serviços e informações.',
    deliverables: ['Visão corporativa consolidada', 'Organização de equipes e núcleos', 'Catálogo ou escopo de atuação', 'Credibilidade institucional sólida']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'CONVERSA',
    description: 'Entendo seu negócio e o que você precisa.',
    detail: 'Alinhamos expectativas, público, posicionamento e os reais objetivos da sua presença online.'
  },
  {
    number: '02',
    title: 'ESTRUTURA',
    description: 'Definimos conteúdo, páginas e organização.',
    detail: 'Planejamos a arquitetura de cada página, a hierarquia das mensagens e o fluxo de leitura.'
  },
  {
    number: '03',
    title: 'DESENVOLVIMENTO',
    description: 'Transformo a estrutura em um site personalizado.',
    detail: 'Criação visual exclusiva, com atenção milimétrica a tipografia, contraste, responsividade e código limpo.'
  },
  {
    number: '04',
    title: 'AJUSTES',
    description: 'Você avalia o projeto e fazemos os ajustes previstos.',
    detail: 'Revisão criteriosa em conjunto para refinar cada detalhe antes do lançamento.'
  },
  {
    number: '05',
    title: 'PUBLICAÇÃO',
    description: 'Depois da aprovação, o site vai para o ar.',
    detail: 'Configuração de domínio, hospedagem, testes finais de velocidade e entrega pronta para seus clientes.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'silvana-castro',
    author: 'Silvana Castro',
    role: 'Psicanalista',
    highlightQuote: 'Ele não fez apenas o que eu pedi: foi além e cuidou de cada detalhe.',
    fullQuote: 'Quero deixar a minha indicação e o meu agradecimento ao Dantes pelo trabalho incrível na criação do meu site. Desde o início, ele demonstrou muita dedicação, profissionalismo e uma agilidade fenomenal. O que mais me surpreendeu foi que ele não fez apenas aquilo que eu pedi, ele foi além, teve o cuidado com cada detalhe e buscou entregar um resultado ainda melhor do que eu imaginava. Super recomendo para quem procura alguém realmente comprometido com o que faz.',
    project: 'Site',
    projectId: 'silvana-castro',
    year: '2026',
    videoDuration: '01:00',
    videoUrl: '/videos/depoimento_silvana_h264.mp4',
    videoFallbackUrl: 'https://dantesbrandao.com.br/video/VID_20261006_142442_087.mp4',
    posterUrl: '/videos/capa_silvana.webp',
    aspect: 'Psicanálise Contemporânea'
  },
  {
    id: 'karla-correa',
    author: 'Karla Corrêa',
    role: 'Nutricionista',
    highlightQuote: 'Você conseguiu me traduzir enquanto profissional.',
    fullQuote: 'Você elaborou um site extremamente caprichado, detalhista. Você conseguiu me traduzir enquanto profissional naquele site. Colocando todas as informações necessárias.',
    project: 'Site',
    projectId: 'karla-correa',
    year: '2026',
    videoDuration: '00:36',
    videoUrl: '/videos/depoimento_karla_h264.mp4',
    videoFallbackUrl: 'https://dantesbrandao.com.br/video/VID_20260926_171404_093_bsl.mp4',
    posterUrl: '/videos/capa_karla.jpg',
    aspect: 'Nutrição Integrativa'
  },
  {
    id: 'karen-patricia',
    author: 'Karen Patrícia',
    role: 'Psicóloga Clínica',
    highlightQuote: 'É como se fosse uma obra de arte aquilo que eu vejo.',
    fullQuote: 'Desde o início, fui tratada com muito respeito e muita clareza de propósito. A forma como ele conduz é clara, muito gentil e elegante. Me surpreendi, de fato, positivamente. Super indico esse trabalho.',
    project: 'Landing Page Profissional',
    projectId: 'karen-patricia',
    year: '2026',
    videoDuration: '01:02',
    videoUrl: '/videos/depoimento_karen_h264.mp4',
    videoFallbackUrl: 'https://dantesbrandao.com.br/video/VID_20260927_071311_660_bsl.mp4',
    posterUrl: '/videos/capa_karen.jpg',
    aspect: 'Psicoterapia Humanista'
  }
];
