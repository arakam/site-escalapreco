import { Link } from "wouter";

type MarketingLayoutProps = {
  children: React.ReactNode;
};

const navLinks = [
  { href: "/#calculadora", label: "Calculadora" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#recursos", label: "Recursos" },
  { href: "/#ecossistema", label: "Ecossistema" },
  { href: "/#para-quem", label: "Para quem é" },
];

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Escala Preço" className="h-10 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://app.escalapreco.com.br/auth/login"
              className="px-4 py-2 text-sm text-muted-foreground font-medium hover:text-foreground transition"
            >
              Entrar
            </a>
            <a
              href="https://app.escalapreco.com.br/auth/register"
              className="px-4 py-2 text-sm brand-gradient hover:opacity-90 text-white font-medium rounded-lg transition"
            >
              Criar Conta
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="inline-block">
                <img src="/logo.png" alt="Escala Preço" className="h-8 w-auto mb-4" />
              </Link>
              <p className="text-sm text-muted-foreground">
                Calculadora de preços para Mercado Livre com margem líquida real
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/#calculadora" className="hover:text-foreground transition">
                    Calculadora
                  </a>
                </li>
                <li>
                  <a href="/#recursos" className="hover:text-foreground transition">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="/#ecossistema" className="hover:text-foreground transition">
                    Ecossistema
                  </a>
                </li>
                <li>
                  <a href="/#waitlist-form" className="hover:text-foreground transition">
                    Cadastrar
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/sobre" className="hover:text-foreground transition">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-foreground transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-foreground transition">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacidade" className="hover:text-foreground transition">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/termos" className="hover:text-foreground transition">
                    Termos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Escala Preço. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="https://www.instagram.com/escalapreco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition"
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
