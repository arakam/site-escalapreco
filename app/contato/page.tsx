import { site, contactInfo } from "@/lib/content";
import { CTAButton } from "@/components/CTAButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Escala Preço. Dúvidas, suporte ou parcerias.",
  alternates: { canonical: site.baseUrl + "/contato" },
  openGraph: {
    title: "Contato | Escala Preço",
    description: "Fale conosco.",
    url: site.baseUrl + "/contato",
  },
  twitter: { title: "Contato | Escala Preço" },
};

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Contato
      </h1>
      <p className="mt-4 text-slate-600">
        Para dúvidas, suporte ou parcerias, envie um e-mail ou use o formulário abaixo.
      </p>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-medium text-slate-700">E-mail</p>
        <a
          href={`mailto:${contactInfo.email}`}
          className="mt-1 block text-accent-600 hover:underline"
        >
          {contactInfo.email}
        </a>
      </div>

      <div className="mt-8">
        <p className="text-sm text-slate-600">
          Se você já tem conta, acesse o app para suporte técnico:
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <CTAButton type="login" variant="outline">Entrar no app</CTAButton>
          <CTAButton type="register">Criar conta</CTAButton>
        </div>
      </div>

      <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Enviar mensagem</h2>
        <p className="mt-1 text-sm text-slate-600">
          Este é um formulário de demonstração. Em produção, conecte a um backend ou serviço de e-mail.
        </p>
        <form className="mt-6 space-y-4" action="#" method="post">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Seu e-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={contactInfo.messagePlaceholder}
              className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
