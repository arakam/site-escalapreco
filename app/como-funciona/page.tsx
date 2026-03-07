import Image from "next/image";
import { site, howItWorks } from "@/lib/content";
import { CTAButton } from "@/components/CTAButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Em 3 passos: cadastre-se, configure sua conta ML e simule. O Escala Preço não exige instalação — funciona no navegador.",
  alternates: { canonical: site.baseUrl + "/como-funciona" },
  openGraph: {
    title: "Como funciona | Escala Preço",
    description: "Cadastre-se, configure e simule. Simples e rápido.",
    url: site.baseUrl + "/como-funciona",
  },
  twitter: { title: "Como funciona | Escala Preço", description: "3 passos para começar." },
};

export default function ComoFuncionaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Como funciona
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Em poucos passos você já está simulando taxas e vendo o valor líquido das suas vendas.
        </p>
        <div className="mx-auto mt-10 max-w-sm">
          <Image
            src="/how-it-works.svg"
            alt="Três passos: Cadastre-se, Configure, Simule"
            width={400}
            height={160}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-16 space-y-12">
        {howItWorks.map((step, i) => (
          <div key={step.step} className="flex gap-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-500 text-lg font-bold text-white shadow">
              {step.step}
            </span>
            <div>
              <h2 className="text-xl font-bold text-slate-900">{step.title}</h2>
              <p className="mt-2 text-slate-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-primary-200 bg-primary-50/50 p-8 text-center">
        <h2 className="text-xl font-bold text-slate-900">Pronto para começar?</h2>
        <p className="mt-2 text-slate-600">Não precisa instalar nada. Acesse o app e crie sua conta.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <CTAButton type="register">Criar conta</CTAButton>
          <CTAButton type="login" variant="outline">Entrar</CTAButton>
        </div>
      </div>
    </div>
  );
}
