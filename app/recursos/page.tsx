import Image from "next/image";
import { site, features, mainResources } from "@/lib/content";
import { FeatureCard } from "@/components/FeatureCard";
import { CTAButton } from "@/components/CTAButton";
import type { Metadata } from "next";

const resourceImages = ["/feature-calc.svg", "/feature-chart.svg", "/feature-compare.svg"];

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Recursos do Escala Preço: simulador de taxas, preço efetivo, comparação por quantidade. Feito para vendedores do Mercado Livre.",
  alternates: { canonical: site.baseUrl + "/recursos" },
  openGraph: {
    title: "Recursos | Escala Preço",
    description: "Simulador de taxas, preço efetivo e mais. Tudo para você vender no ML com lucro.",
    url: site.baseUrl + "/recursos",
  },
  twitter: { title: "Recursos | Escala Preço", description: "Ferramentas para vendedores do Mercado Livre." },
};

export default function RecursosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Recursos para você vender com lucro
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Ferramentas pensadas para vendedores do Mercado Livre.
        </p>
        <div className="mx-auto mt-10 max-w-lg">
          <Image
            src="/hero-illustration.svg"
            alt="Simulador Escala Preço"
            width={560}
            height={320}
            className="w-full h-auto rounded-xl border border-slate-200 shadow-md"
          />
        </div>
      </div>

      <section id="simulador" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-900">Simulador de taxas</h2>
        <p className="mt-2 text-slate-600">
          Simule as taxas do Mercado Livre por categoria e tipo de anúncio. Veja comissão, frete e valor líquido antes de publicar.
        </p>
        <div className="mt-6">
          <FeatureCard
            title={mainResources[0].title}
            description={mainResources[0].description}
            imageSrc={resourceImages[0]}
          />
        </div>
      </section>

      <section id="preco-efetivo" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-900">Preço efetivo</h2>
        <p className="mt-2 text-slate-600">
          Digite o preço de venda e descubra quanto vai receber na prática, após todas as deduções.
        </p>
        <div className="mt-6">
          <FeatureCard
            title={mainResources[1].title}
            description={mainResources[1].description}
            imageSrc={resourceImages[1]}
          />
        </div>
      </section>

      <section id="comparacao" className="mt-16">
        <h2 className="text-2xl font-bold text-slate-900">Comparação por quantidade</h2>
        <p className="mt-2 text-slate-600">
          Compare o custo por venda em diferentes faixas de quantidade e escolha o melhor tier do ML.
        </p>
        <div className="mt-6">
          <FeatureCard
            title={mainResources[2].title}
            description={mainResources[2].description}
            imageSrc={resourceImages[2]}
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-slate-900">Mais benefícios</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <FeatureCard key={f.id} title={f.title} description={f.description} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-primary-200 bg-primary-50/50 p-8 text-center">
        <h2 className="text-xl font-bold text-slate-900">Comece a usar agora</h2>
        <p className="mt-2 text-slate-600">Crie sua conta e teste o simulador grátis.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <CTAButton type="register">Criar conta</CTAButton>
          <CTAButton type="login" variant="outline">Entrar</CTAButton>
        </div>
      </section>
    </div>
  );
}
