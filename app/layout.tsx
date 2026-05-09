import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToolHub AI - Ferramentas grátis para redes sociais e IA",
  description:
    "Ferramentas grátis para gerar bio, nickname, hashtags, legendas para Instagram, nomes para TikTok e resumir textos online.",
  keywords: [
    "gerador de bio",
    "gerador de nickname",
    "gerador de hashtags",
    "gerador de legenda instagram",
    "gerador de nome tiktok",
    "resumidor de texto",
    "ferramentas IA grátis",
  ],
  openGraph: {
    title: "ToolHub AI",
    description:
      "Ferramentas grátis para redes sociais, produtividade e IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
