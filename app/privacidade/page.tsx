import { site, legalPages } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade do Escala Preço. Como coletamos, usamos e protegemos seus dados (LGPD).",
  alternates: { canonical: site.baseUrl + "/privacidade" },
  openGraph: {
    title: "Política de Privacidade | Escala Preço",
    url: site.baseUrl + "/privacidade",
  },
  twitter: { title: "Política de Privacidade | Escala Preço" },
};

export default function PrivacidadePage() {
  const page = legalPages.privacidade;
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        {page.title}
      </h1>
      <p className="mt-2 text-sm text-slate-500">Atualizado em {page.lastUpdated}</p>
      <div
        className="prose prose-slate mt-8 max-w-none prose-headings:font-bold prose-p:text-slate-600"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
  );
}
