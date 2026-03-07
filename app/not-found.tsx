import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-slate-900">Página não encontrada</h1>
      <p className="mt-4 text-slate-600">
        O endereço que você acessou não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-600"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
