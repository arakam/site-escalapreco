import { MarketingLayout } from "@/components/MarketingLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !mensagem.trim()) {
      toast.error("Preencha e-mail e mensagem.");
      return;
    }
    setEnviando(true);
    setTimeout(() => {
      toast.success("Mensagem registrada. Em breve entraremos em contato.");
      setNome("");
      setEmail("");
      setMensagem("");
      setEnviando(false);
    }, 800);
  };

  return (
    <MarketingLayout>
      <div className="container max-w-3xl py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contato</h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Envie sua dúvida, sugestão ou proposta. Responderemos o quanto antes.
        </p>

        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-start gap-3 mb-8 text-muted-foreground">
            <Mail className="h-5 w-5 text-[#2b80ff] shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">E-mail</p>
              <a
                href="mailto:contato@escalapreco.com.br"
                className="text-[#2b80ff] hover:text-[#ff8a00] transition"
              >
                contato@escalapreco.com.br
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="contato-nome" className="block text-sm font-medium text-foreground mb-1.5">
                Nome (opcional)
              </label>
              <Input
                id="contato-nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                className="h-11 border-border bg-background focus:border-[#2b80ff] focus:ring-[#2b80ff]/20"
              />
            </div>
            <div>
              <label htmlFor="contato-email" className="block text-sm font-medium text-foreground mb-1.5">
                E-mail
              </label>
              <Input
                id="contato-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="h-11 border-border bg-background focus:border-[#2b80ff] focus:ring-[#2b80ff]/20"
              />
            </div>
            <div>
              <label htmlFor="contato-msg" className="block text-sm font-medium text-foreground mb-1.5">
                Mensagem
              </label>
              <textarea
                id="contato-msg"
                required
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                rows={5}
                placeholder="Como podemos ajudar?"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b80ff]/30"
              />
            </div>
            <Button
              type="submit"
              disabled={enviando}
              className="w-full sm:w-auto brand-gradient hover:opacity-90 text-white"
            >
              {enviando ? "Enviando..." : "Enviar mensagem"}
            </Button>
            <p className="text-xs text-muted-foreground">
              Este formulário é uma demonstração: ajuste o envio para seu backend ou serviço de e-mail
              quando estiver pronto.
            </p>
          </form>
        </div>
      </div>
    </MarketingLayout>
  );
}
