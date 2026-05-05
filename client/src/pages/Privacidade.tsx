import { MarketingLayout } from "@/components/MarketingLayout";
import { Link } from "wouter";

export default function Privacidade() {
  return (
    <MarketingLayout>
      <div className="container max-w-3xl py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Política de Privacidade</h1>
        <p className="text-sm text-gray-500 mb-10">Última atualização: maio de 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introdução</h2>
            <p>
              O Escala Preço (&quot;nós&quot;) respeita a privacidade dos visitantes do site e dos usuários
              dos nossos serviços. Esta política descreve, de forma geral, quais dados podemos tratar e
              para quais finalidades. Revise com seu advogado antes de publicar em produção definitiva.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Dados que podemos coletar</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dados fornecidos por você em formulários (por exemplo, nome e e-mail).</li>
              <li>Dados técnicos automáticos, como endereço IP, tipo de navegador e páginas acessadas.</li>
              <li>Cookies e tecnologias similares, quando utilizados para métricas ou preferências.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Finalidades</h2>
            <p>
              Utilizamos os dados para responder contatos, operar e melhorar o site, cumprir obrigações
              legais e, quando aplicável, enviar comunicações que você tenha aceito receber.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Compartilhamento</h2>
            <p>
              Podemos compartilhar dados com prestadores de serviço (hospedagem, analytics, e-mail)
              que nos auxiliam a operar o negócio, sempre observando a legislação aplicável e contratos
              de confidencialidade.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Seus direitos (LGPD)</h2>
            <p>
              Nos termos da Lei Geral de Proteção de Dados, você pode solicitar confirmação de
              tratamento, acesso, correção, anonimização, portabilidade e eliminação de dados, entre
              outros direitos. Para exercê-los, entre em contato pelos canais indicados na página{" "}
              <Link href="/contato" className="text-blue-600 hover:underline">
                Contato
              </Link>
              .
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Alterações</h2>
            <p>
              Podemos atualizar esta política periodicamente. A data no topo desta página indica a
              última revisão relevante.
            </p>
          </section>
        </div>
      </div>
    </MarketingLayout>
  );
}
