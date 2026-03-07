import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogSlugs, site } from "@/lib/content";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post não encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${site.baseUrl}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${site.baseUrl}/blog/${slug}`,
    },
    twitter: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/blog" className="text-sm text-primary-600 hover:underline">
        ← Voltar ao blog
      </Link>
      <header className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-2 text-slate-600">{post.excerpt}</p>
        <div className="mt-4 flex gap-4 text-sm text-slate-500">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span>{post.author}</span>
        </div>
      </header>
      <div
        className="prose prose-slate mt-8 max-w-none prose-headings:font-bold prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <footer className="mt-12 border-t border-slate-200 pt-8">
        <Link href="/blog" className="text-primary-600 hover:underline">
          ← Ver todos os posts
        </Link>
      </footer>
    </article>
  );
}
