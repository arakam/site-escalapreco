import { Link } from "wouter";

type MarketingLayoutProps = {
  children: React.ReactNode;
};

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Escala Preço" className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#problema" className="text-gray-600 hover:text-gray-900 transition">
              Problema
            </a>
            <a href="/#solucao" className="text-gray-600 hover:text-gray-900 transition">
              Solução
            </a>
            <a href="/#beneficios" className="text-gray-600 hover:text-gray-900 transition">
              Benefícios
            </a>
            <a href="/#funcionalidades" className="text-gray-600 hover:text-gray-900 transition">
              Funcionalidades
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://app.escalapreco.com.br/auth/login"
              className="px-4 py-2 text-gray-700 font-medium hover:text-gray-900 transition"
            >
              Entrar
            </a>
            <a
              href="https://app.escalapreco.com.br/auth/register"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition"
            >
              Criar Conta
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="inline-block">
                <img src="/logo.png" alt="Escala Preço" className="h-8 w-auto mb-4" />
              </Link>
              <p className="text-sm text-gray-400">Automação de precificação para Mercado Livre</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/#funcionalidades" className="hover:text-white transition">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="/#waitlist-form" className="hover:text-white transition">
                    Lista de espera
                  </a>
                </li>
                <li>
                  <a href="/#beneficios" className="hover:text-white transition">
                    Benefícios
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/sobre" className="hover:text-white transition">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-white transition">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacidade" className="hover:text-white transition">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/termos" className="hover:text-white transition">
                    Termos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2026 Escala Preço. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="https://www.instagram.com/escalapreco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
