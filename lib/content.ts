const BASE_URL = "https://escalapreco.com.br";
const APP_LOGIN = "https://app.escalapreco.com.br/login";
const APP_REGISTRO = "https://app.escalapreco.com.br/registro";

export const site = {
  name: "Escala Preço",
  tagline: "Controle preços do Mercado Livre e saiba exatamente quanto vai receber.",
  baseUrl: BASE_URL,
  appLogin: APP_LOGIN,
  appRegistro: APP_REGISTRO,
};

export const navLinks = [
  { href: "/recursos", label: "Recursos" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/precos", label: "Preços" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
] as const;

export const features = [
  {
    id: "simular-taxas",
    title: "Simular taxas",
    description:
      "Veja quanto o Mercado Livre cobra em cada venda antes de anunciar. Simule por categoria e tipo de anúncio.",
  },
  {
    id: "preco-efetivo",
    title: "Preço efetivo",
    description:
      "Saiba exatamente quanto vai cair na sua conta após todas as taxas e comissões.",
  },
  {
    id: "comparar-tiers",
    title: "Comparar tiers por quantidade",
    description:
      "Compare o custo por venda em diferentes faixas de quantidade e escolha o melhor plano para você.",
  },
  {
    id: "evitar-prejuizo",
    title: "Evitar vender no prejuízo",
    description:
      "Configure seu lucro mínimo e veja na hora se o preço cobre custos e taxas.",
  },
  {
    id: "decisao-rapida",
    title: "Decisão rápida",
    description:
      "Responda em segundos: vale a pena esse preço? Quanto recebo líquido?",
  },
] as const;

export const howItWorks = [
  {
    step: 1,
    title: "Cadastre-se",
    description: "Crie sua conta no Escala Preço em poucos segundos. Não precisa instalar nada.",
  },
  {
    step: 2,
    title: "Configure sua conta ML",
    description: "Informe sua categoria e tipo de venda. O simulador usa as regras do Mercado Livre.",
  },
  {
    step: 3,
    title: "Simule e decida",
    description: "Digite o preço, veja as taxas e o valor líquido. Ajuste até bater sua meta.",
  },
] as const;

export const faqs = [
  {
    id: "precisa-instalar",
    question: "Precisa instalar algo?",
    answer:
      "Não. O Escala Preço funciona no navegador. Basta acessar o app, fazer login e usar. Nenhuma extensão ou app para baixar.",
  },
  {
    id: "funciona-ml",
    question: "Funciona com Mercado Livre?",
    answer:
      "Sim. O simulador foi feito pensando nas taxas e regras do Mercado Livre Brasil. Você simula por categoria e tipo de anúncio.",
  },
  {
    id: "tem-teste",
    question: "Tem período de teste?",
    answer:
      "Sim. Você pode testar o Escala Preço antes de assinar. Crie sua conta e use o período de avaliação para conhecer todas as funcionalidades.",
  },
  {
    id: "como-cancelo",
    question: "Como cancelo?",
    answer:
      "O cancelamento pode ser feito a qualquer momento pela área da sua conta. Não há fidelidade. Após cancelar, você continua com acesso até o fim do período já pago.",
  },
  {
    id: "dados-seguros",
    question: "Meus dados ficam seguros?",
    answer:
      "Sim. Tratamos seus dados com cuidado e em conformidade com a LGPD. Não vendemos suas informações. Consulte nossa política de privacidade para mais detalhes.",
  },
] as const;

export const testimonials = [
  {
    id: 1,
    name: "Ana C.",
    role: "Vendedora ML",
    text: "Finalmente sei quanto vou receber antes de anunciar. Deixei de vender no prejuízo.",
  },
  {
    id: 2,
    name: "Roberto M.",
    role: "Lojista",
    text: "Uso todo dia para fechar preço. Rápido e direto ao ponto.",
  },
  {
    id: 3,
    name: "Carla S.",
    role: "Seller ML",
    text: "A comparação por quantidade me ajudou a escolher o melhor plano de taxas.",
  },
] as const;

export const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "R$ 29",
    period: "/mês",
    description: "Para quem está começando",
    features: [
      "Simulador de taxas",
      "Preço efetivo por venda",
      "Até 50 simulações/mês",
      "Suporte por e-mail",
    ],
    cta: "Criar conta",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "R$ 59",
    period: "/mês",
    description: "Para vendedores ativos",
    features: [
      "Tudo do Starter",
      "Simulações ilimitadas",
      "Comparação por quantidade",
      "Histórico de simulações",
      "Suporte prioritário",
    ],
    cta: "Criar conta",
    highlighted: true,
  },
  {
    id: "business",
    name: "Business",
    price: "R$ 99",
    period: "/mês",
    description: "Para lojas e equipes",
    features: [
      "Tudo do Pro",
      "Múltiplos usuários",
      "Relatórios exportáveis",
      "API de simulação",
      "Suporte dedicado",
    ],
    cta: "Criar conta",
    highlighted: false,
  },
] as const;

export const mainResources = [
  {
    title: "Simulador de taxas",
    description:
      "Simule as taxas do Mercado Livre por categoria e tipo de anúncio. Veja comissão, frete e valor líquido.",
    href: "/recursos#simulador",
  },
  {
    title: "Preço efetivo",
    description:
      "Digite o preço de venda e descubra quanto vai receber na prática, após todas as deduções.",
    href: "/recursos#preco-efetivo",
  },
  {
    title: "Comparação por quantidade",
    description:
      "Compare o custo por venda em diferentes faixas de quantidade e escolha o melhor tier.",
    href: "/recursos#comparacao",
  },
] as const;

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-calcular-taxas-mercado-livre",
    title: "Como calcular as taxas do Mercado Livre",
    excerpt:
      "Entenda como o Mercado Livre cobra por venda e como usar um simulador para planejar seus preços.",
    date: "2024-02-15",
    author: "Escala Preço",
    content: `
      <p>As taxas do Mercado Livre variam por categoria, tipo de anúncio e volume de vendas. Neste post, explicamos de forma simples como elas funcionam.</p>
      <h2>Tipos de cobrança</h2>
      <p>O ML cobra comissão sobre o valor da venda, além de possíveis custos de frete e anúncio destacado. A comissão muda conforme a categoria do produto.</p>
      <h2>Por que simular?</h2>
      <p>Simular antes de anunciar evita surpresas e ajuda a definir um preço que cubra custos e deixe margem de lucro. Use o Escala Preço para ver o valor líquido antes de publicar.</p>
      <p><a href="/">Experimente o simulador Escala Preço</a> e planeje suas vendas com clareza.</p>
    `,
  },
  {
    slug: "preco-efetivo-vendas-online",
    title: "Preço efetivo: o que você realmente recebe nas vendas online",
    excerpt:
      "Preço de venda não é igual ao que cai na conta. Aprenda a calcular o preço efetivo e evite prejuízo.",
    date: "2024-02-01",
    author: "Escala Preço",
    content: `
      <p>Muitos vendedores anunciam por um preço e se surpreendem com o valor que recebem. A diferença está nas taxas da plataforma e no frete.</p>
      <h2>O que é preço efetivo?</h2>
      <p>É o valor que sobra após descontar comissão, frete (quando aplicável) e outros custos. É esse número que deve ser usado para saber se a venda vale a pena.</p>
      <h2>Como calcular?</h2>
      <p>No Escala Preço você informa o preço de venda e vê na hora o valor líquido. Assim você define preços com base no que realmente vai receber.</p>
      <p><a href="/">Acesse o Escala Preço</a> e simule agora.</p>
    `,
  },
  {
    slug: "dicas-para-vendedores-mercado-livre",
    title: "5 dicas para vendedores do Mercado Livre",
    excerpt:
      "Dicas práticas para vender mais e com melhor margem no Mercado Livre.",
    date: "2024-01-20",
    author: "Escala Preço",
    content: `
      <p>Reunimos cinco dicas que todo vendedor do ML pode usar no dia a dia.</p>
      <h2>1. Conheça suas taxas</h2>
      <p>Antes de anunciar, saiba quanto a plataforma cobra na sua categoria. Use um simulador para não errar.</p>
      <h2>2. Defina margem mínima</h2>
      <p>Estabeleça um lucro mínimo por venda e não venda abaixo disso.</p>
      <h2>3. Compare por quantidade</h2>
      <p>Se vende em volume, compare os tiers de preço do ML. Às vezes vender mais unidades reduz o custo por venda.</p>
      <h2>4. Revise preços com frequência</h2>
      <p>Taxas e regras podem mudar. Mantenha seus preços alinhados à realidade.</p>
      <h2>5. Use ferramentas</h2>
      <p>Ferramentas como o Escala Preço ajudam a tomar decisões rápidas sem planilhas.</p>
      <p><a href="/">Experimente o Escala Preço</a> gratuitamente.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export const footerLinks = {
  produto: [
    { href: "/recursos", label: "Recursos" },
    { href: "/como-funciona", label: "Como funciona" },
    { href: "/precos", label: "Preços" },
  ],
  empresa: [
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ],
  legais: [
    { href: "/privacidade", label: "Privacidade" },
    { href: "/termos", label: "Termos de Uso" },
  ],
};

export const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "YouTube", href: "#", icon: "youtube" },
] as const;

export const contactInfo = {
  email: "contato@escalapreco.com.br",
  messagePlaceholder:
    "Conte como podemos ajudar. Para suporte técnico ou dúvidas sobre o produto, use o e-mail acima.",
};

export const legalPages = {
  privacidade: {
    title: "Política de Privacidade",
    lastUpdated: "2024-03-01",
    content: `
      <h2>1. Introdução</h2>
      <p>Esta Política de Privacidade descreve como o Escala Preço coleta, usa e protege suas informações quando você utiliza nosso site e aplicativo.</p>
      <h2>2. Dados que coletamos</h2>
      <p>Coletamos dados que você nos fornece ao se cadastrar e usar o serviço, como nome, e-mail e informações necessárias para a simulação de taxas. Também podemos coletar dados de uso para melhorar o produto.</p>
      <h2>3. Uso dos dados</h2>
      <p>Utilizamos os dados para fornecer e melhorar o Escala Preço, enviar comunicações sobre o serviço e cumprir obrigações legais. Não vendemos seus dados a terceiros.</p>
      <h2>4. Segurança</h2>
      <p>Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração.</p>
      <h2>5. Seus direitos</h2>
      <p>De acordo com a LGPD, você pode solicitar acesso, correção, exclusão ou portabilidade dos seus dados entrando em contato conosco.</p>
      <h2>6. Contato</h2>
      <p>Para dúvidas sobre esta política: contato@escalapreco.com.br.</p>
    `,
  },
  termos: {
    title: "Termos de Uso",
    lastUpdated: "2024-03-01",
    content: `
      <h2>1. Aceitação</h2>
      <p>Ao acessar ou usar o site e o aplicativo Escala Preço, você concorda com estes Termos de Uso.</p>
      <h2>2. Serviço</h2>
      <p>O Escala Preço oferece ferramentas de simulação de taxas para vendedores do Mercado Livre. As simulações têm caráter informativo e não substituem a consulta às regras oficiais do Mercado Livre.</p>
      <h2>3. Uso permitido</h2>
      <p>Você se compromete a usar o serviço de forma lícita, sem violar direitos de terceiros ou as políticas do Mercado Livre.</p>
      <h2>4. Conta e pagamento</h2>
      <p>Planos pagos estão sujeitos aos preços e condições vigentes no momento da assinatura. O cancelamento pode ser feito a qualquer momento.</p>
      <h2>5. Limitação de responsabilidade</h2>
      <p>O Escala Preço não se responsabiliza por decisões de negócio tomadas com base nas simulações. Consulte sempre as fontes oficiais quando necessário.</p>
      <h2>6. Alterações</h2>
      <p>Podemos alterar estes termos. Alterações relevantes serão comunicadas por e-mail ou no aplicativo.</p>
      <h2>7. Contato</h2>
      <p>Dúvidas: contato@escalapreco.com.br.</p>
    `,
  },
};

export const seoLandings = {
  calculadora: {
    title: "Calculadora de Taxas Mercado Livre",
    description:
      "Simule as taxas do Mercado Livre antes de anunciar. Veja comissão, frete e valor líquido. Use a calculadora Escala Preço.",
    headline: "Calculadora de taxas do Mercado Livre",
    subheadline:
      "Simule quanto o Mercado Livre cobra na sua venda e quanto você recebe de fato. Não prometemos dados oficiais — use nossa ferramenta para ter uma ideia e simule no app para resultados detalhados.",
    body: `
      <p>As taxas do Mercado Livre dependem da categoria do produto, do tipo de anúncio (clássico ou premium) e do volume de vendas. Uma calculadora ajuda a ter uma noção do custo antes de publicar.</p>
      <h2>O que a calculadora faz?</h2>
      <p>Ela permite que você informe o preço de venda e veja uma estimativa de:</p>
      <ul>
        <li>Comissão do Mercado Livre</li>
        <li>Custos de frete (quando aplicável)</li>
        <li>Valor líquido que você deve receber</li>
      </ul>
      <p>Os valores são apenas estimativas. Para simulações mais precisas e personalizadas à sua conta e categoria, use o <strong>Escala Preço</strong> no app.</p>
      <h2>Como usar no Escala Preço</h2>
      <p>No aplicativo Escala Preço você pode configurar sua categoria, tipo de anúncio e quantidade, e obter simulações detalhadas. Crie sua conta e teste grátis.</p>
    `,
  },
  taxas: {
    title: "Taxas do Mercado Livre: como funcionam",
    description:
      "Entenda como o Mercado Livre cobra taxas por venda. Comissão, frete e custos. Simule no Escala Preço.",
    headline: "Taxas do Mercado Livre: como funcionam",
    subheadline:
      "O Mercado Livre cobra comissão e pode haver custos de frete e anúncio. Este conteúdo explica de forma geral; para simular com seus dados, use o app Escala Preço.",
    body: `
      <p>Conhecer as taxas do Mercado Livre é essencial para precificar certo e não vender no prejuízo.</p>
      <h2>Principais tipos de cobrança</h2>
      <ul>
        <li><strong>Comissão por venda:</strong> percentual sobre o valor vendido, que varia por categoria.</li>
        <li><strong>Frete:</strong> pode ser pago pelo comprador ou pelo vendedor, conforme a modalidade.</li>
        <li><strong>Anúncio destacado:</strong> custo opcional para dar mais visibilidade ao anúncio.</li>
      </ul>
      <h2>Onde consultar valores oficiais</h2>
      <p>Os valores e regras oficiais estão no site do Mercado Livre, na seção de ajuda para vendedores. Consulte sempre a fonte oficial para decisões definitivas.</p>
      <h2>Simule no Escala Preço</h2>
      <p>No Escala Preço você simula as taxas com base na categoria e no tipo de anúncio, e vê o valor líquido estimado. Use o app para planejar seus preços e depois confira no ML.</p>
    `,
  },
};
