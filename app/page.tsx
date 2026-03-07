import Image from "next/image";
import {
  site,
  features,
  howItWorks,
  faqs,
  testimonials,
  mainResources,
} from "@/lib/content";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { FAQ } from "@/components/FAQ";
import { TestimonialCard } from "@/components/TestimonialCard";
import type { Metadata } from "next";

const benefitImages: Record<string, string> = {
  "simular-taxas": "/feature-calc.svg",
  "preco-efetivo": "/feature-chart.svg",
  "comparar-tiers": "/feature-compare.svg",
};
const resourceImages = ["/feature-calc.svg", "/feature-chart.svg", "/feature-compare.svg"];

export const metadata: Metadata = {
  title: "Escala Preço | Controle de preços Mercado Livre",
  description: site.tagline + " Simule taxas, veja preço efetivo e evite vender no prejuízo.",
  alternates: { canonical: site.baseUrl + "/" },
  openGraph: {
    title: "Escala Preço | Controle de preços Mercado Livre",
    description: site.tagline,
    url: site.baseUrl + "/",
  },
  twitter: {
    title: "Escala Preço | Controle de preços Mercado Livre",
    description: site.tagline,
  },
};

function HomeJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.baseUrl,
    logo: site.baseUrl + "/logo.png",
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.baseUrl,
    publisher: { "@id": site.baseUrl + "#organization" },
  };
  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: site.tagline,
    url: site.baseUrl,
    offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(software),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50/30 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16 lg:items-center">
            <div className="max-w-xl flex-1 text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Controle preços do Mercado Livre e saiba exatamente quanto vai receber
              </h1>
              <p className="mt-6 text-lg text-slate-600 sm:text-xl">
                {site.tagline} Simule taxas, compare tiers e evite vender no prejuízo.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <CTAButton type="register" variant="primary" className="min-w-[180px]">
                  Criar conta grátis
                </CTAButton>
                <CTAButton type="login" variant="outline" className="min-w-[180px]">
                  Entrar
                </CTAButton>
              </div>
            </div>
            <div className="w-full max-w-lg flex-shrink-0">
              <Image
                src="/hero-illustration.svg"
                alt="Simulador de taxas do Escala Preço mostrando preço e valor líquido"
                width={560}
                height={320}
                className="w-full h-auto drop-shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20" aria-labelledby="problema-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="problema-heading" className="text-center text-2xl font-bold text-primary-700 sm:text-3xl">
            O problema
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Vender no Mercado Livre exige atenção às taxas: comissão, frete e tipo de anúncio mudam o valor que você recebe. Sem um simulador, fica difícil saber se o preço cobre custos e ainda gera lucro.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-primary-50/40 py-16 sm:py-20" aria-labelledby="solucao-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="solucao-heading" className="text-center text-2xl font-bold text-primary-700 sm:text-3xl">
            A solução
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            O Escala Preço é um simulador de taxas pensado para vendedores do ML. Você informa o preço, a categoria e o tipo de venda e vê na hora quanto vai receber líquido — sem planilhas e sem surpresas.
          </p>
          <div className="mx-auto mt-10 max-w-md">
            <Image
              src="/hero-illustration.svg"
              alt="Interface do simulador Escala Preço"
              width={560}
              height={320}
              className="w-full h-auto rounded-xl border border-slate-200 shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20" aria-labelledby="beneficios-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="beneficios-heading" className="text-center text-2xl font-bold text-primary-700 sm:text-3xl">
            Benefícios
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 6).map((f) => (
              <FeatureCard
                key={f.id}
                title={f.title}
                description={f.description}
                imageSrc={benefitImages[f.id]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-primary-50/40 py-16 sm:py-20" aria-labelledby="como-funciona-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="como-funciona-heading" className="text-center text-2xl font-bold text-primary-700 sm:text-3xl">
            Como funciona
          </h2>
          <div className="mx-auto mt-10 max-w-md">
            <Image
              src="/how-it-works.svg"
              alt="Passos: Cadastre-se, Configure, Simule"
              width={400}
              height={160}
              className="w-full h-auto"
            />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {howItWorks.map((step) => (
              <div key={step.step} className="relative rounded-xl border border-primary-100 bg-white p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white shadow">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/como-funciona" variant="outline">
              Ver detalhes
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20" aria-labelledby="recursos-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="recursos-heading" className="text-center text-2xl font-bold text-primary-700 sm:text-3xl">
            Recursos principais
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {mainResources.map((r, i) => (
              <FeatureCard
                key={r.title}
                title={r.title}
                description={r.description}
                imageSrc={resourceImages[i]}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/recursos" variant="outline">
              Ver todos os recursos
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-primary-50/40 py-16 sm:py-20" aria-labelledby="depoimentos-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="depoimentos-heading" className="text-center text-2xl font-bold text-primary-700 sm:text-3xl">
            O que dizem nossos usuários
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} name={t.name} role={t.role} text={t.text} avatarSrc="/avatar-placeholder.svg" />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="faq-heading" className="text-center text-2xl font-bold text-primary-700 sm:text-3xl">
            Perguntas frequentes
          </h2>
          <FAQ items={faqs.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))} />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-gradient-to-br from-accent-500 to-accent-600 py-16 sm:py-20" aria-labelledby="cta-final-heading">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 id="cta-final-heading" className="text-2xl font-bold text-white sm:text-3xl">
            Pronto para controlar seus preços?
          </h2>
          <p className="mt-4 text-accent-100">
            Crie sua conta e comece a simular em segundos. Sem cartão para testar.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton type="register" variant="white" className="min-w-[180px]">
              Criar conta
            </CTAButton>
            <CTAButton type="login" variant="outline" className="min-w-[180px] border-white text-white hover:bg-white/10 hover:border-white">
              Entrar
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
