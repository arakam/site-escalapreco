import { MarketingLayout } from "@/components/MarketingLayout";
import { Link } from "wouter";

export default function Sobre() {
  return (
    <MarketingLayout>
      <div className="container max-w-3xl py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sobre o Escala Preço</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          O Escala Preço nasceu para ajudar vendedores do Mercado Livre a precificar com consistência,
          proteger margens e ganhar tempo quando o catálogo cresce.
        </p>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">Nossa missão</h2>
            <p className="leading-relaxed">
              Automatizar decisões de preço com clareza: menos planilha, menos retrabalho e mais controle
              sobre taxas, frete e lucro real por anúncio.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">Para quem é</h2>
            <p className="leading-relaxed">
              Para quem vende em volume no Mercado Livre e precisa manter regras de margem e
              competitividade sem ajustar preço anúncio por anúncio, o dia inteiro.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">Contato</h2>
            <p className="leading-relaxed">
              Dúvidas ou parcerias? Fale conosco pela página{" "}
              <Link href="/contato" className="text-blue-600 hover:underline">
                Contato
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </MarketingLayout>
  );
}
