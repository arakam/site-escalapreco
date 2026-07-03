import { MarketingLayout } from "@/components/MarketingLayout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <MarketingLayout>
      <div className="container max-w-lg py-24 md:py-32 text-center">
        <p className="text-7xl font-bold brand-gradient-text mb-4">404</p>
        <h1 className="text-2xl font-bold text-foreground mb-3">Página não encontrada</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          A página que você procura não existe ou foi movida.
        </p>
        <Button asChild className="brand-gradient hover:opacity-90 text-white">
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
        </Button>
      </div>
    </MarketingLayout>
  );
}
