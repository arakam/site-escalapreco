# Escala Preço — Site institucional

Site de marketing do SaaS **Escala Preço**, focado em vendedores do Mercado Livre. Next.js 14 (App Router), TypeScript e Tailwind CSS.

## Requisitos

- Node.js 18+
- npm

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
```

## Rodar em produção

```bash
npm run start
```

O servidor sobe na porta 3000 (ou na definida em `PORT`).

## Estrutura

- **`/app`** — Rotas e layouts (App Router)
- **`/components`** — Header, Footer, CTAButton, FeatureCard, FAQ, TestimonialCard, PricingTable
- **`/lib/content.ts`** — Conteúdo centralizado (features, FAQ, planos, blog, páginas legais e SEO)
- **`/public`** — Assets estáticos (opcional: logo, imagens)

## Páginas

| Rota | Descrição |
|------|------------|
| `/` | Home / Landing |
| `/precos` | Planos e preços |
| `/recursos` | Recursos do produto |
| `/como-funciona` | Passo a passo |
| `/blog` | Lista de posts (mock) |
| `/blog/[slug]` | Post do blog |
| `/privacidade` | Política de Privacidade |
| `/termos` | Termos de Uso |
| `/contato` | Contato |
| `/calculadora-mercado-livre` | Landing SEO — calculadora de taxas ML |
| `/taxas-mercado-livre` | Landing SEO — taxas do ML |

## CTAs

- **Entrar** → `https://app.escalapreco.com.br/login`
- **Criar conta** → `https://app.escalapreco.com.br/registro`

Configurados em `lib/content.ts` (`site.appLogin`, `site.appRegistro`).

## SEO

- Metadata (title, description, canonical, Open Graph, Twitter) em todas as páginas
- `app/sitemap.ts` — gera `/sitemap.xml`
- `app/robots.ts` — gera `/robots.txt`
- JSON-LD na Home: Organization, WebSite, SoftwareApplication, FAQPage
- JSON-LD em Preços: SoftwareApplication com ofertas

## Licença

Uso interno / projeto Escala Preço.
