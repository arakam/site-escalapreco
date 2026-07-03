import { MarketingLayout } from "@/components/MarketingLayout";
import { FileText } from "lucide-react";

export default function Blog() {
  return (
    <MarketingLayout>
      <div className="container max-w-3xl py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Artigos sobre precificação, Mercado Livre e gestão de margem.
        </p>
        <div className="rounded-2xl border border-border bg-card p-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-[#2b80ff]/10 p-4">
              <FileText className="h-10 w-10 text-[#2b80ff]" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Em breve</h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Estamos preparando conteúdo para você. Volte em breve ou cadastre-se na página
            inicial para receber novidades.
          </p>
        </div>
      </div>
    </MarketingLayout>
  );
}
