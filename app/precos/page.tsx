import Image from "next/image";
import { site, plans } from "@/lib/content";
import { PricingTable } from "@/components/PricingTable";
import { CTAButton } from "@/components/CTAButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preços",
  description:
    "Planos Escala Preço: Starter, Pro e Business. Simule taxas do Mercado Livre e saiba quanto vai receber. Comece com teste grátis.",
  alternates: { canonical: site.baseUrl + "/precos" },
  openGraph: {
    title: "Preços | Escala Preço",
    description: "Planos para vendedores do Mercado Livre. Simule taxas e evite prejuízo.",
    url: site.baseUrl + "/precos",
  },
  twitter: { title: "Preços | Escala Preço", description: "Planos para vendedores do Mercado Livre." },
};

function SoftwareJsonLd() {
  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: site.tagline,
    url: site.baseUrl,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      lowPrice: "29",
      highPrice: "99",
      offerCount: plans.length,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }}
    />
  );
}

export default function PrecosPage() {
  return (
    <>
      <SoftwareJsonLd />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Preços simples e transparentes
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Escolha o plano que cabe no seu negócio. Todos incluem simulador de taxas e suporte.
          </p>
          <div className="mx-auto mt-8 max-w-xs">
            <Image
              src="/feature-chart.svg"
              alt=""
              width={120}
              height={120}
              className="w-full h-auto opacity-90"
            />
          </div>
        </div>
        <div className="mt-12">
          <PricingTable />
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Dúvidas? <a href="/contato" className="text-primary-600 hover:underline">Fale conosco</a>.
        </p>
      </div>
    </>
  );
}
