import { MarketingLayout } from "@/components/MarketingLayout";
import { FileText } from "lucide-react";

export default function Blog() {
  return (
    <MarketingLayout>
      <div className="container max-w-3xl py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Artigos sobre precificação, Mercado Livre e gestão de margem.
        </p>
        <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-blue-100 p-4">
              <FileText className="h-10 w-10 text-blue-600" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Em breve</h2>
          <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
            Estamos preparando conteúdo para você. Volte em breve ou entre na lista de espera na página
            inicial para receber novidades.
          </p>
        </div>
      </div>
    </MarketingLayout>
  );
}
