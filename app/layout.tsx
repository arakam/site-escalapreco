import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://escalapreco.com.br"),
  title: { default: "Escala Preço | Controle de preços Mercado Livre", template: "%s | Escala Preço" },
  description:
    "Controle preços do Mercado Livre e saiba exatamente quanto vai receber. Simule taxas, veja preço efetivo e evite vender no prejuízo.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Escala Preço",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://escalapreco.com.br" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
