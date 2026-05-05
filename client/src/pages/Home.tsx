import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Lock, BarChart3, Upload, Eye, Lightbulb } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Design Philosophy: Minimalismo Corporativo com Gradientes Dinâmicos
 * - Cores: Azul profundo (#1e40af) + Roxo vibrante (#7c3aed)
 * - Tipografia: Poppins (headlines) + Inter (body)
 * - Componentes: Cards glassmorphism, gradientes animados, ícones geométricos
 * - Animações: Fade-in ao scroll, hover effects suaves
 * - Layout: Assimétrico, seções alternadas, espaço em branco generoso
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Por favor, insira seu email");
      return;
    }
    setIsSubmitting(true);
    // Simular envio
    setTimeout(() => {
      toast.success("Você foi adicionado à lista de espera! 🎉");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER/NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Escala Preço" 
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problema" className="text-gray-600 hover:text-gray-900 transition">Problema</a>
            <a href="#solucao" className="text-gray-600 hover:text-gray-900 transition">Solução</a>
            <a href="#beneficios" className="text-gray-600 hover:text-gray-900 transition">Benefícios</a>
            <a href="#funcionalidades" className="text-gray-600 hover:text-gray-900 transition">Funcionalidades</a>
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

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-40">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663031980743/88qXHLTs8SUnLzsyBRLKno/hero-background-iefTMQvgdS7Nys3rrv8NPw.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-white/5 z-0" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900" style={{
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(30, 64, 175, 0.1)',
              WebkitTextStroke: '0.5px rgba(30, 64, 175, 0.2)'
            }}>
              Você está perdendo dinheiro no Mercado Livre e nem percebe.
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed font-medium drop-shadow-lg">
              O Escala Preço automatiza sua precificação, protege sua margem e escala seus resultados — mesmo com centenas de anúncios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold group"
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entrar na lista de espera
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-gray-400 rounded-lg font-semibold"
              >
                Saber mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA SECTION */}
      <section id="problema" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Os desafios que você enfrenta todo dia
            </h2>
            <p className="text-lg text-gray-600">
              Gerenciar preços manualmente é demorado, arriscado e impede você de escalar. Veja os principais problemas:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: "Precificação manual e demorada",
                desc: "Atualizar centenas de anúncios manualmente consome horas do seu tempo e está sujeito a erros."
              },
              {
                icon: Lock,
                title: "Falta de controle de margem",
                desc: "Sem visibilidade clara de margens, você corre o risco de vender com prejuízo sem perceber."
              },
              {
                icon: TrendingUp,
                title: "Dificuldade em gerenciar centenas de anúncios",
                desc: "Quanto mais você cresce, mais complexo fica manter o controle de toda a operação."
              },
              {
                icon: Eye,
                title: "Perda de competitividade",
                desc: "Sem acompanhar preços de concorrentes em tempo real, você perde vendas ou margem."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO SECTION */}
      <section id="solucao" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A solução que você precisava
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                O Escala Preço foi criado para quem já vende no Mercado Livre e precisa escalar sem perder controle. Desenvolvido com base na rotina de quem vive o Mercado Livre todos os dias.
              </p>
              <ul className="space-y-4">
                {[
                  "Automatização completa de precificação",
                  "Controle total de margens e lucro",
                  "Integração nativa com Mercado Livre",
                  "Dashboard intuitivo e poderoso"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031980743/88qXHLTs8SUnLzsyBRLKno/features-illustration-i6psBPY7LQof8z9FniZQDn.webp"
                alt="Escala Preço - Ilustração de Automação"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS SECTION */}
      <section id="beneficios" className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefícios que transformam seu negócio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada funcionalidade foi pensada para maximizar seus resultados e proteger sua margem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: "Evite prejuízos automaticamente",
                desc: "Proteção inteligente de margem com regras customizáveis"
              },
              {
                icon: TrendingUp,
                title: "Aumente sua margem com inteligência",
                desc: "Análise de competitividade e otimização de preços"
              },
              {
                icon: Zap,
                title: "Atualize preços em massa",
                desc: "Sincronização instantânea com Mercado Livre"
              },
              {
                icon: Eye,
                title: "Tenha controle total",
                desc: "Dashboard com visão geral de toda operação"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/60 backdrop-blur-md p-8 rounded-xl border border-white/40 hover:border-purple-300 hover:bg-white/80 transition-all duration-300 group"
              >
                <item.icon className="w-10 h-10 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES SECTION */}
      <section id="funcionalidades" className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
                Funcionalidades poderosas
              </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Integração com Mercado Livre",
                desc: "Conexão segura e automática com sua conta. Sem complicações."
              },
              {
                icon: Zap,
                title: "Sincronização de anúncios",
                desc: "Todos os seus anúncios sincronizados em tempo real."
              },
              {
                icon: Upload,
                title: "Editor de preço de atacado",
                desc: "Crie e gerencie preços de atacado com facilidade."
              },
              {
                icon: Eye,
                title: "Simulação de lucro e recebíveis",
                desc: "Veja exatamente quanto você vai ganhar antes de confirmar."
              },
              {
                icon: TrendingUp,
                title: "Análise de competitividade",
                desc: "Acompanhe preços de concorrentes e ajuste estrategicamente."
              },
              {
                icon: Lightbulb,
                title: "Campanhas de preço",
                desc: "Crie promoções inteligentes com regras automáticas."
              },
              {
                icon: Upload,
                title: "Importação/exportação em massa",
                desc: "Trabalhe com CSV para máxima flexibilidade."
              },
              {
                icon: BarChart3,
                title: "Dashboard com visão geral",
                desc: "Todos os dados importantes em um único lugar."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <item.icon className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA/AUTORIDADE SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Feito por quem entende do negócio
            </h2>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
              Desenvolvido com base na rotina de quem vive o Mercado Livre todos os dias. Cada funcionalidade foi pensada para resolver problemas reais de vendedores como você.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="text-white">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-50">Anúncios gerenciados</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold">10x</div>
                <div className="text-blue-50">Mais rápido que manual</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-blue-50">Seguro e confiável</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL SECTION */}
      <section id="waitlist-form" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-2xl border border-purple-200">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                Entre na lista de espera
              </h2>
              <p className="text-lg text-gray-600 text-center mb-8">
                Seja um dos primeiros a escalar seus resultados com controle total. Ganhe acesso antecipado e preço especial de lançamento.
              </p>

              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 rounded-lg border-2 border-gray-300 focus:border-purple-600 focus:ring-0 text-base"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg text-base"
                >
                  {isSubmitting ? "Adicionando..." : "Quero entrar na lista"}
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Sem spam. Apenas atualizações importantes sobre o Escala Preço.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
              src="/logo.png" 
              alt="Escala Preço" 
              className="h-8 w-auto mb-4"
            />
              <p className="text-sm text-gray-400">
                Automação de precificação para Mercado Livre
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition">Preços</a></li>
                <li><a href="#" className="hover:text-white transition">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2026 Escala Preço. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
