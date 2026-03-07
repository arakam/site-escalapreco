import Link from "next/link";
import Image from "next/image";
import { site, blogPosts } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dicas e conteúdos sobre vendas no Mercado Livre, taxas, preço efetivo e precificação. Escala Preço.",
  alternates: { canonical: site.baseUrl + "/blog" },
  openGraph: {
    title: "Blog | Escala Preço",
    description: "Conteúdos para vendedores do Mercado Livre.",
    url: site.baseUrl + "/blog",
  },
  twitter: { title: "Blog | Escala Preço", description: "Dicas para vendedores do ML." },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Blog
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Dicas e conteúdos para vendedores do Mercado Livre.
        </p>
        <div className="mx-auto mt-8 max-w-xs">
          <Image src="/feature-chart.svg" alt="" width={120} height={120} className="w-full h-auto opacity-80" />
        </div>
      </div>

      <ul className="mt-12 space-y-8">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-xl font-semibold text-slate-900 hover:text-primary-600">
                  {post.title}
                </h2>
                <p className="mt-2 text-slate-600">{post.excerpt}</p>
                <time dateTime={post.date} className="mt-3 block text-sm text-slate-500">
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
