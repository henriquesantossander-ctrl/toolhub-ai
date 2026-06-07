import Script from "next/script";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ToolHub IA - Ferramentas Modernas para Internet",
  description:
    "Crie bios, hashtags, usernames e ferramentas para redes sociais usando IA.",

  keywords: [
    "gerador de bio",
    "hashtags instagram",
    "nick free fire",
    "ferramentas IA",
    "bio para instagram",
    "gerador de usernames",
  ],

  openGraph: {
    title: "ToolHub IA",
    description: "Ferramentas modernas para internet usando IA.",
    url: "https://www.toolhubia.com.br",
    siteName: "ToolHub IA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta
          name="google-site-verification"
          content="FnhHzNTsXtvFiDrx4EXek2cF5q2GeJolNejb2-eV_cs"
        />

       <Script
  async
 src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6953212773298111"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>

      </head>

      <body className="bg-black text-white">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GJRYDE7TVH"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GJRYDE7TVH');
          `}
        </Script>

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#18181b",
              color: "#fff",
              border: "1px solid #27272a",
            },
          }}
        />

        <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">

  <div className="max-w-[1400px] mx-auto px-8 h-[64px] flex items-center justify-between">

    {/* LOGO */}
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-700 flex items-center justify-center font-black text-lg">
        ✦
      </div>

      <h1 className="text-[32px] font-black tracking-tight">
        ToolHub <span className="text-purple-500">IA</span>
      </h1>
    </div>

    {/* MENU */}
    <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-zinc-400">

      <a href="/" className="hover:text-white transition">
        Início
      </a>

      <a href="/dashboard" className="hover:text-white transition">
        Ferramentas
      </a>

      <a href="/premium" className="hover:text-white transition">
        Planos
      </a>

      <a href="#exemplos" className="hover:text-white transition">
        Exemplos
      </a>

      <a href="/business" className="hover:text-white transition">
        Business
      </a>

    </nav>

    {/* BUTTONS */}
    <div className="flex items-center gap-4">

      <button className="h-10 px-7 rounded-2xl bg-zinc-900 border border-white/5 hover:border-purple-500/30 transition text-sm font-semibold">
        Entrar
      </button>

      <button className="h-10 px-8 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:scale-105 transition text-sm font-bold shadow-[0_0_40px_rgba(168,85,247,0.35)]">
        Começar agora
      </button>

    </div>

  </div>

</header>

        {children}
      </body>
    </html>
  );
}