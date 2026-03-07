import { site, seoLandings } from "@/lib/content";
import { CTAButton } from "@/components/CTAButton";
import type { Metadata } from "next";

const data = seoLandings.calculadora;

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  alternates: { canonical: site.baseUrl + "/calculadora-mercado-livre" },
  openGraph: {
    title: data.title + " | Escala Preço",
    description: data.description,
    url: site.baseUrl + "/calculadora-mercado-livre",
  },
  twitter: { title: data.title, description: data.description },
};

export default function CalculadoraMercadoLivrePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        {data.headline}
      </h1>
      <p className="mt-4 text-lg text-slate-600">{data.subheadline}</p>
      <div
        className="prose prose-slate mt-8 max-w-none prose-headings:font-bold prose-p:text-slate-600 prose-ul:text-slate-600"
        dangerouslySetInnerHTML={{ __html: data.body }}
      />
      <div className="mt-10 rounded-xl border border-accent-200 bg-accent-50/50 p-6 text-center">
        <p className="font-medium text-slate-900">Simule no Escala Preço</p>
        <p className="mt-1 text-sm text-slate-600">
          Crie sua conta e use o simulador com sua categoria e tipo de anúncio.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <CTAButton type="register">Criar conta</CTAButton>
          <CTAButton type="login" variant="outline">Entrar</CTAButton>
        </div>
      </div>
    </div>
  );
}
