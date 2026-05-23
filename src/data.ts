import { Service, TeamMember, Project, Testimonial } from "./types";

export const SERVICES: Service[] = [
  {
    id: "service-1",
    num: "01",
    title: "Direção de Arte & Branding",
    description: "Esculpimos identidades visuais raras e magnéticas que contam histórias sem pronunciar uma palavra.",
    deliverables: ["Arquitetura de Marca", "Identidade Visual Completa", "Estética de Marca (Noir/High-Contrast)", "Manuais de Tom de Voz"],
    metrics: "+140% Reconhecimento de Marca médio",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "service-2",
    num: "02",
    title: "Produção de Filmes & Campanhas",
    description: "Criamos comerciais de nível cinematográfico com alta taxa de retenção visual e profundidade artística.",
    deliverables: ["Comerciais de Lançamento", "Conteúdo em Mini-Documentário", "Fotografia Conceitual", "Edição & Gráficos Cinematográficos"],
    metrics: "45M+ Visualizações orgânicas geradas",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "service-3",
    num: "03",
    title: "UI/UX & Engenharia Digital",
    description: "Interfaces digitais brutas e limpas projetadas para fluidez extraordinária e engajamento brutal.",
    deliverables: ["Wireframes de Alta Fidelidade", "Websites Customizados (Headless/Vite)", "Aplicações de Alta Performance", "Auditoria de Usabilidade Metrificada"],
    metrics: "3.4x Aumento de Conversão em Landing Pages",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "service-4",
    num: "04",
    title: "Amplificação & Tráfego de Elite",
    description: "Marketing digital impiedoso focado em dominação de buscas e conversões de alto valor.",
    deliverables: ["Estratégia de Tráfego Pago (PPC)", "SEO Técnico de Ultra-Impacto", "Social Media Orgânica", "Retargeting Dinâmico de Alta Conversão"],
    metrics: "220% Média de aumento de ROI sobre anúncios",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f311?auto=format&fit=crop&q=80&w=800"
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "member-1",
    name: "Jane Smith",
    role: "CEO & Founder",
    experience: "12 Anos de Experiência • Ex-Diretora de Criação em Nova York",
    bio: "Pioneira na fusão de estética cinematográfica com estratégias de funil de conversão. Lidera a direção criativa de todos os projetos principais na Omen.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "member-2",
    name: "John Doe",
    role: "Diretor de Operações & Produção",
    experience: "9 Anos de Experiência • Produtor Audiovisual Premiado",
    bio: "Especialista em orquestrar sets de filmagem de alta fidelidade e garantir que cada frame entregue a mensagem correta ao usuário.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "member-3",
    name: "Michael Brown",
    role: "Head de SEO & Performance",
    experience: "7 Anos de Experiência • Engenheiro de Analytics",
    bio: "Decifra os algoritmos de busca com precisão cirúrgica. Responsável por posicionar mais de 80 marcas no topo orgânico nacional.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "member-4",
    name: "Emily Johnson",
    role: "Diretora de Mídia Paga (PPC)",
    experience: "8 Anos de Experiência • Especialista certificada em Meta & Google Ads",
    bio: "Gerencia canais de escala global. Sua obsessão por testes A/B gera estruturas de anúncios altamente rentáveis e previsíveis.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "member-5",
    name: "Brian Williams",
    role: "Especialista de Tráfego & Social",
    experience: "6 Anos de Experiência • Arquiteto Viral",
    bio: "Projeta tendências narrativas rápidas que capturam a atenção humana em pouquíssimos segundos, otimizando o ROAS orgânico das campanhas.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "member-6",
    name: "Sarah Kim",
    role: "Especialista em Copywriting & SEO",
    experience: "5 Anos de Experiência • Formada em Filosofia & Cinema",
    bio: "Une a poesia do branding comercial com o SEO focado em intenção de compra. Suas páginas vendem mesmo em mercados saturados.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Monolith Branding",
    category: "Direção de Arte & Lançamento",
    year: "2025",
    metrics: "+180% Conversão • 2.5M visualizações",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    description: "Inovação visual radical para uma renomada incorporadora de edifícios monumentais.",
    fullStory: "A Monolith exigia um posicionamento que transcendesse o marketing imobiliário tradicional com foco em luxo e estética bruta. Desenvolvemos uma campanha focada em iluminação de alto contraste, cinema noir e um site interativo monocromático que resultou na reserva de 100% das unidades residenciais em apenas 18 dias."
  },
  {
    id: "project-2",
    title: "Vanguard Athletics",
    category: "Comercial & Tráfego Pago",
    year: "2025",
    metrics: "+320% ROI • 45M visualizações",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&q=80&w=1200",
    description: "Orquestramos o maior lançamento viral da marca de calçados de corrida de alta performance.",
    fullStory: "A Vanguard queria competir com gigantes de forma inovadora. Propusemos uma direção de vídeo esteticamente crua, filmada em altíssima velocidade em pistas de asfalto periféricas sob neblina. Combinado com um funil de tráfego pago ultra segmentado, o filme gerou engajamento massivo orgânico e conversões impressionantes."
  },
  {
    id: "project-3",
    title: "The Obsidian App",
    category: "Design UI/UX & Growth",
    year: "2026",
    metrics: "250K+ Signups • 4.1x Retenção",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    description: "Construção de interface minimalista de alta performance e growth loop para ferramenta SaaS.",
    fullStory: "Unindo a inteligência de produto com a arte, redesenhamos a experiência móvel do Obsidian da estaca zero. Eliminamos todo o ruído visual, focando no contraste estrito e respostas de micro-interação. O resultado foi um prêmio internacional de design e um crescimento explosivo em receita recorrente."
  },
  {
    id: "project-4",
    title: "Chronos Timepieces",
    category: "Campanha Cinematográfica",
    year: "2026",
    metrics: "+420% Vendas • Escala Internacional",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200",
    description: "Estratégia criativa luxuosa para manufatura suíça de relógios automáticos.",
    fullStory: "Fotografia e cinema macro no seu melhor. Cada detalhe do mecanismo rotativo do Chronos foi catalogado e transformado em anúncios imersivos em preto e branco. Os anúncios apelaram diretamente aos colecionadores e entusiastas mais exigentes de altíssima renda."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Alan Baker",
    role: "CEO",
    company: "Redline Company",
    quote: "Trabalhar com a Omen Picture foi uma experiência inesquecível. Eles quebraram todas as regras convencionais e criaram um posicionamento lendário para nós. Nosso ROI duplicou no primeiro trimestre.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-2",
    author: "Theresa Webb",
    role: "Diretora de Marca",
    company: "TechSpace Inc.",
    quote: "Queríamos um aspecto cinematográfico cru nas nossas campanhas digitais de ponta. A Omen entregou obras de arte. Nosso público sentiu a diferença instantaneamente, gerando fila de espera orgânica.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-3",
    author: "David Miller",
    role: "Creative Partner",
    company: "Apex Labs",
    quote: "Eles operam em um patamar de execução inacessível para agências normais. O minimalismo estrito em preto e branco foi a melhor decisão de marca que já tomamos.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

export const AGENCY_STATS = [
  { value: "450M+", label: "Visualizações de Vídeo", desc: "Campanhas virais otimizadas" },
  { value: "+300%", label: "Média de Crescimento de Clientes", desc: "No primeiro ano de parceria" },
  { value: "10+", label: "Premios Criativos", desc: "Reconhecimento internacional estrito" },
  { value: "$150M+", label: "Faturamento Gerado", desc: "Rastreado de forma transparente" }
];
