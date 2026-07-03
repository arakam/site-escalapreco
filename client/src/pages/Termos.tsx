import { MarketingLayout } from "@/components/MarketingLayout";
import { Link } from "wouter";

export default function Termos() {
  return (
    <MarketingLayout>
      <div className="container max-w-3xl py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Termos de Uso</h1>
        <p className="text-sm text-muted-foreground mb-10">Última atualização: maio de 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Aceitação</h2>
            <p>
              Ao acessar o site do Escala Preço, você concorda com estes termos. Se não concordar,
              interrompa o uso do site. Este texto é um modelo: valide juridicamente antes do uso
              comercial.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Uso do site</h2>
            <p>
              O conteúdo do site tem caráter informativo. Reservamo-nos o direito de alterar funcionalidades,
              preços e disponibilidade do produto sem aviso prévio na página inicial.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Conta e serviços</h2>
            <p>
              O acesso ao aplicativo (área logada) pode estar sujeito a termos específicos, contratos
              ou políticas adicionais apresentadas no momento do cadastro ou contratação.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Propriedade intelectual</h2>
            <p>
              Marcas, textos, layout e demais elementos do site são protegidos por lei. É proibida a
              reprodução sem autorização prévia, salvo uso permitido por lei.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Limitação de responsabilidade</h2>
            <p>
              O site e seus materiais são fornecidos &quot;no estado em que se encontram&quot;. Na máxima extensão
              permitida pela lei aplicável, não nos responsabilizamos por danos indiretos ou lucros cessantes
              decorrentes do uso ou impossibilidade de uso do site.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Contato</h2>
            <p>
              Dúvidas sobre estes termos:{" "}
              <Link href="/contato" className="text-[#2b80ff] hover:text-[#ff8a00] transition">
                página de contato
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </MarketingLayout>
  );
}
