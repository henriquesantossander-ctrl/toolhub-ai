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

        <header className="border-b border-zinc-800 bg-black sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl md:text-3xl font-bold">
              🚀 ToolHub IA
            </Link>

            <nav className="hidden md:flex gap-6 text-zinc-400 flex-wrap">
              <Link href="/dashboard" className="hover:text-purple-400 transition">
                Dashboard
              </Link>

              <Link href="/bio-generator" className="hover:text-purple-400 transition">
                Gerador
              </Link>

              <Link href="/my-bios" className="hover:text-purple-400 transition">
                Minhas Bios
              </Link>

              <Link href="/favorites" className="hover:text-purple-400 transition">
                Favoritos
              </Link>

              <Link href="/premium" className="hover:text-yellow-400 transition font-bold">
                PREMIUM
              </Link>

              <Link href="/profile" className="hover:text-purple-400 transition">
                Perfil
              </Link>

              <Link href="/contact" className="hover:text-purple-400 transition">
                Contato
              </Link>

              <Link href="/terms" className="hover:text-purple-400 transition">
               Termos
              </Link>

              <Link href="/privacy" className="hover:text-purple-400 transition">
              Privacidade
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}