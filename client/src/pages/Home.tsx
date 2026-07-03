import { MarketingLayout } from "@/components/MarketingLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  ChevronRight,
  FileSpreadsheet,
  Filter,
  Link2,
  Package,
  Percent,
  RefreshCw,
  Shield,
  ShoppingBag,
  Sparkles,
  Tag,
  TrendingUp,
  Upload,
  Wallet,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const N8N_LEAD_WEBHOOK_DEFAULT =
  "https://n8n.srv879986.hstgr.cloud/webhook/novo-lead-ep";

function getLeadWebhookUrl(): string {
  return (
    import.meta.env.VITE_N8N_LEAD_WEBHOOK_URL?.trim() || N8N_LEAD_WEBHOOK_DEFAULT
  );
}

const badges = [
  "Saiba quanto vai receber antes de mudar o preço no ML",
  "Ajuste centenas de anúncios por margem, não por chute",
  "Campanha ML com desconto certo — sem violar o mínimo de 5%",
  "Custo, PMA e lucro no mesmo lugar que o catálogo",
  "Simule à vontade; publique só quando quiser",
];

const tableColumns = [
  { label: "Preço atual (ML)", desc: "Último preço sincronizado" },
  { label: "Margem %", desc: "Margem líquida alvo — editável" },
  { label: "Preço Calculado", desc: "Preço bruto simulado" },
  { label: "Preço Final", desc: "Com arredondamento configurável" },
  { label: "Vai Receber", desc: "Após taxa ML e frete" },
  { label: "Lucro", desc: "Líquido real após custos" },
  { label: "Taxa ML · Frete", desc: "Valores em R$ e %" },
  { label: "Vendas 30d", desc: "Pedidos pagos recentes" },
  { label: "Competitividade", desc: "Competitivo, Atenção ou Alto" },
];

const steps = [
  {
    num: "01",
    title: "Conecte o Mercado Livre",
    desc: "OAuth com uma ou mais contas e sincronize anúncios, preço, estoque e variações.",
  },
  {
    num: "02",
    title: "Cadastre custos nos produtos",
    desc: "Custo, imposto, taxas, despesas fixas e PMA — a base do lucro real.",
  },
  {
    num: "03",
    title: "Simule na calculadora",
    desc: "Ajuste Margem % ou Preço Calculado linha a linha ou em lote. Tudo recalcula na hora.",
  },
  {
    num: "04",
    title: "Publique quando estiver pronto",
    desc: "Atualize preço no ML ou crie campanha promocional direto da seleção.",
  },
];

const featureCards = [
  {
    icon: Calculator,
    title: "Calculadora",
    desc: "Simule preços para todo o catálogo. Edite margem ou preço; veja lucro, taxa ML, frete e quanto vai receber. Aplique no ML quando estiver pronto.",
  },
  {
    icon: Wallet,
    title: "Margem real",
    desc: "Não é preço menos custo. É o que sobra depois de taxa ML, frete Mercado Líder, impostos e despesas.",
  },
  {
    icon: Zap,
    title: "Em massa",
    desc: "Filtros, seleção múltipla, CSV e ações em lote. Dois cliques para atualizar preços ou criar campanha no Mercado Livre.",
  },
  {
    icon: Shield,
    title: "Sem surpresa",
    desc: "Tudo é simulação até você confirmar. PMA e regras de campanha (mínimo 5% de desconto) são respeitados automaticamente.",
  },
];

const differentials = [
  {
    icon: Percent,
    title: "Margem alvo, não tentativa e erro",
    desc: "Informe a margem líquida desejada (%) e o sistema resolve o preço — em uma linha ou em centenas de anúncios.",
  },
  {
    icon: Wallet,
    title: "Lucro de verdade",
    desc: "Taxa ML por categoria, frete Mercado Líder, impostos, taxa extra e despesas fixas por unidade.",
  },
  {
    icon: TrendingUp,
    title: "Saiba quanto vai receber",
    desc: "A coluna Vai Receber mostra o valor líquido após taxas e frete — o número que importa na operação.",
  },
  {
    icon: Shield,
    title: "Respeita seu piso (PMA)",
    desc: "O preço calculado nunca fica abaixo do Preço Mínimo de Anúncio cadastrado no produto.",
  },
  {
    icon: Filter,
    title: "Filtros poderosos",
    desc: "Busca, SKU, fornecedor, status, Full, tags, vendas 30d, lucratividade, custo e PMA.",
  },
  {
    icon: FileSpreadsheet,
    title: "Planilha quando precisar",
    desc: "Importe e exporte CSV com preview e confirmação em lote. Exportação com 22 campos.",
  },
];

const ecosystem = [
  {
    icon: Link2,
    title: "Conexão Mercado Livre",
    items: [
      "OAuth com uma ou mais contas",
      "Sincronização de anúncios, preço, estoque e tags",
      "Reputação e Mercado Líder visíveis na configuração",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Anúncios",
    items: [
      "Importação em massa ou por MLB individual",
      "Tabela completa do catálogo com filtros e CSV",
      "Base para tudo que aparece na calculadora",
    ],
  },
  {
    icon: Package,
    title: "Produtos",
    items: [
      "Custo, imposto %, taxa extra, despesas e PMA",
      "Tags, fornecedor, dimensões e peso para frete",
      "Importação/exportação CSV em lote",
    ],
  },
  {
    icon: Tag,
    title: "Atacado",
    items: [
      "Preços por quantidade (tiers) por anúncio",
      "Edição inline, rascunho vs salvo",
      "Aplicar tiers direto no Mercado Livre",
    ],
  },
  {
    icon: Sparkles,
    title: "Promoções",
    items: [
      "Promoções ativas e convites do ML",
      "Lucro estimado por promoção com base no custo",
      "Participar em promoções em lote",
    ],
  },
  {
    icon: BarChart3,
    title: "Vendas & Dashboard",
    items: [
      "Pedidos dos últimos 30 dias com lucro por linha",
      "Margem média, anúncios em risco e alertas clicáveis",
      "Insights de top vendas, margem e risco",
    ],
  },
];

const personas = [
  "Precificam em planilha ou anúncio a anúncio",
  "Não sabem a margem líquida real após taxas e frete",
  "Perdem tempo criando promoções e atacado manualmente",
  "Querem ver vendas recentes junto com a margem na hora de decidir",
];

export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nomeTrim = nome.trim();
    const emailTrim = email.trim();
    const telefoneTrim = telefone.trim();

    if (!nomeTrim) {
      toast.error("Por favor, informe seu nome");
      return;
    }
    if (!emailTrim) {
      toast.error("Por favor, informe seu e-mail");
      return;
    }
    if (!telefoneTrim) {
      toast.error("Por favor, informe seu telefone");
      return;
    }
    if (telefoneTrim.replace(/\D/g, "").length < 8) {
      toast.error("Informe um telefone válido (com DDD)");
      return;
    }

    const url = getLeadWebhookUrl();
    setIsSubmitting(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nomeTrim,
          email: emailTrim,
          telefone: telefoneTrim,
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Erro ${res.status}`);
      }

      toast.success("Cadastro recebido! Entraremos em contato em breve.");
      setNome("");
      setEmail("");
      setTelefone("");
    } catch (err) {
      console.error(err);
      toast.error(
        "Não foi possível enviar agora. Tente de novo em instantes ou fale conosco pelo contato.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MarketingLayout>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36 section-glow">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(43,128,255,0.18),transparent)]" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#ff8a00]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-[#2b80ff]/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 text-sm text-muted-foreground mb-8">
              <Calculator className="w-4 h-4 text-[#2b80ff]" />
              Calculadora de Preços para Mercado Livre
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Precifique com{" "}
              <span className="brand-gradient-text">margem líquida real</span>
              {" "}— em todo o catálogo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Em uma única tabela, veja todo o catálogo sincronizado do Mercado Livre e simule novos preços em massa.
              Edite margem ou preço — o sistema recalcula taxa ML, frete, impostos e lucro na hora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="brand-gradient hover:opacity-90 text-white rounded-lg font-semibold group h-12 px-8"
                onClick={() =>
                  document
                    .getElementById("waitlist-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Criar conta grátis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border bg-card/50 hover:bg-card text-foreground rounded-lg font-semibold h-12 px-8"
                onClick={() =>
                  document
                    .getElementById("calculadora")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver a calculadora
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Simular não altera o Mercado Livre — você decide quando aplicar.
            </p>
          </div>
        </div>
      </section>

      {/* BADGES */}
      <section className="py-8 border-y border-border bg-card/30">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm bg-card border border-border text-muted-foreground"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8a00] shrink-0" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section id="problema" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-medium text-[#2b80ff] mb-3 uppercase tracking-wider">
              O problema
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Preço que parece bom na vitrine, margem negativa na prática
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vendedores ML costumam precificar no &ldquo;feeling&rdquo; ou em planilhas que ignoram taxa por categoria,
              frete do Mercado Líder, impostos e despesas fixas. O Escala Preço inverte isso: você trabalha com
              margem líquida real e o sistema encontra o preço certo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Planilha e feeling",
                desc: "Precificação manual que ignora taxa ML por categoria, frete e impostos.",
              },
              {
                title: "Margem ilusória",
                desc: "Preço menos custo não mostra o que realmente sobra no bolso.",
              },
              {
                title: "Tempo perdido",
                desc: "Horas criando promoções, atacado e atualizando anúncio por anúncio.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-[#2b80ff]/30 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO — CALCULADORA */}
      <section id="calculadora" className="py-20 md:py-28 bg-card/40 border-y border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-sm font-medium text-[#ff8a00] mb-3 uppercase tracking-wider">
                O carro-chefe
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Calculadora de Preços
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                O centro do Escala Preço. Em uma única tabela, você vê todo o catálogo sincronizado do Mercado Livre
                e simula novos preços em massa: edita margem ou preço, o sistema recalcula taxa ML, frete, impostos
                e lucro na hora.
              </p>
              <p className="text-sm text-muted-foreground border-l-2 border-[#2b80ff] pl-4">
                <strong className="text-foreground">Importante:</strong> simular aqui não altera o Mercado Livre.
                Você decide quando aplicar com <em>Atualizar preço ML</em> ou <em>Criar campanha ML</em>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className="p-5 rounded-xl bg-background border border-border hover:border-[#ff8a00]/30 transition-colors"
                >
                  <card.icon className="w-8 h-8 text-[#2b80ff] mb-3" />
                  <h3 className="font-bold text-sm mb-2">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshot da calculadora */}
          <div className="rounded-xl border border-border bg-background overflow-hidden glow-blue">
            <img
              src="/screenshots/calculadora-precos.png"
              alt="Tela da Calculadora de Preços do Escala Preço — tabela com margem, preço calculado, lucro, taxa ML e frete"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          <div className="mt-8 grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {tableColumns.map((col) => (
              <div key={col.label} className="p-3 rounded-lg bg-card border border-border">
                <div className="text-xs font-semibold text-foreground mb-1">{col.label}</div>
                <div className="text-xs text-muted-foreground">{col.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-medium text-[#2b80ff] mb-3 uppercase tracking-wider">
              Como funciona
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Do catálogo ao ML em 4 passos
            </h2>
            <p className="text-muted-foreground">
              O menu libera progressivamente para garantir que a calculadora já chegue com catálogo e custos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative">
                {idx < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute -right-3 top-8 w-6 h-6 text-border z-10" />
                )}
                <div className="h-full p-6 rounded-xl bg-card border border-border">
                  <div className="text-3xl font-bold brand-gradient-text mb-4">{step.num}</div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section id="recursos" className="py-20 md:py-28 bg-card/40 border-y border-border">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-medium text-[#ff8a00] mb-3 uppercase tracking-wider">
              Diferenciais
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Recursos da calculadora
            </h2>
            <p className="text-muted-foreground">
              Tudo em uma visão operacional: imagem, MLB, título, SKU e link para o anúncio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {differentials.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-background border border-border hover:border-[#2b80ff]/30 transition-colors group"
              >
                <item.icon className="w-8 h-8 text-[#2b80ff] mb-4 group-hover:text-[#ff8a00] transition-colors" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Ações em massa */}
          <div className="rounded-xl border border-border bg-background p-8">
            <h3 className="text-xl font-bold mb-6">Ações em massa e publicação</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-[#2b80ff] mb-4 uppercase tracking-wider">
                  Simulação em lote
                </h4>
                <ul className="space-y-3">
                  {[
                    "Definir desconto % (5% a 80%)",
                    "Aplicar margem líquida % nos selecionados",
                    "Restaurar preço calculado ao preço atual do ML",
                    "Recalcular taxa e frete para o catálogo filtrado",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <RefreshCw className="w-4 h-4 text-[#ff8a00] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#ff8a00] mb-4 uppercase tracking-wider">
                  Do simulador ao ML em um clique
                </h4>
                <ul className="space-y-3">
                  {[
                    "Atualizar preço ML — envia o Preço Calculado como novo preço",
                    "Criar campanha ML — desconto mínimo de 5%, respeitando PMA",
                    "Competitividade integrada — referências de preço do ML na mesma tabela",
                    "Import/export CSV com preview e confirmação em lote",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Upload className="w-4 h-4 text-[#2b80ff] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSSISTEMA */}
      <section id="ecossistema" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-medium text-[#2b80ff] mb-3 uppercase tracking-wider">
              Ecossistema
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tudo que alimenta sua precificação
            </h2>
            <p className="text-muted-foreground">
              A calculadora funciona melhor com o restante do produto — do catálogo ML aos custos, vendas e dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystem.map((module) => (
              <div
                key={module.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-[#ff8a00]/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#2b80ff]/10">
                    <module.icon className="w-5 h-5 text-[#2b80ff]" />
                  </div>
                  <h3 className="font-bold">{module.title}</h3>
                </div>
                <ul className="space-y-2">
                  {module.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ff8a00] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section id="para-quem" className="py-20 md:py-28 bg-card/40 border-y border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-[#ff8a00] mb-3 uppercase tracking-wider">
                Para quem é
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Vendedores ML com catálogo médio ou grande
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Se você gerencia dezenas ou centenas de anúncios e precisa de margem real — não estimativa —
                o Escala Preço foi feito para a sua rotina.
              </p>
              <ul className="space-y-4">
                {personas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2b80ff] shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl brand-gradient text-white">
              <h3 className="text-2xl font-bold mb-4">Visão gerencial no Dashboard</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Margem média 30d, anúncios em risco, % competitivos e cobertura de custos.
                Alertas clicáveis: sem custo, margem negativa, acima do mercado, sem atacado, sem vínculo SKU.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "30d", label: "Margem média" },
                  { value: "100%", label: "Cobertura custos" },
                  { value: "Live", label: "Alertas ativos" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-lg bg-white/10">
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="waitlist-form" className="py-20 md:py-28 section-glow">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="p-10 md:p-12 rounded-2xl bg-card border border-border">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Comece a precificar com margem real
              </h2>
              <p className="text-muted-foreground text-center mb-8 leading-relaxed">
                Cadastre-se para criar sua conta ou agendar uma demonstração.
                Conecte o ML, cadastre custos e simule preços em massa — sem alterar nada até você confirmar.
              </p>

              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="nome"
                  autoComplete="name"
                  placeholder="Nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="h-12 rounded-lg border-border bg-background focus:border-[#2b80ff] focus:ring-[#2b80ff]/20 text-base"
                />
                <Input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-lg border-border bg-background focus:border-[#2b80ff] focus:ring-[#2b80ff]/20 text-base"
                />
                <Input
                  type="tel"
                  name="telefone"
                  autoComplete="tel"
                  placeholder="Telefone com DDD (ex.: 41999998888)"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="h-12 rounded-lg border-border bg-background focus:border-[#2b80ff] focus:ring-[#2b80ff]/20 text-base"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 brand-gradient hover:opacity-90 text-white font-semibold rounded-lg text-base"
                >
                  {isSubmitting ? "Enviando..." : "Criar conta / Agendar demo"}
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Sem spam. Apenas atualizações importantes sobre o Escala Preço.
                </p>
              </form>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-3">Já tem conta?</p>
                <a
                  href="https://app.escalapreco.com.br/auth/login"
                  className="text-[#2b80ff] hover:text-[#ff8a00] font-medium transition text-sm"
                >
                  Entrar no app →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
