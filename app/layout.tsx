import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "ToolHub IA - Ferramentas grátis para internet",

  description:
    "Ferramentas grátis para gerar bios, hashtags, usernames, legendas e nomes gamer usando IA.",

  keywords: [
    "gerador de bio",
    "hashtags instagram",
    "username tiktok",
    "nomes free fire",
    "ferramentas IA",
    "gerador de nick",
    "toolhub ia",
  ],

  authors: [{ name: "ToolHub IA" }],

  creator: "ToolHub IA",

  openGraph: {
    title: "ToolHub IA",
    description:
      "Ferramentas grátis para redes sociais e internet.",
    url: "https://toolhub-ai-eight.vercel.app",
    siteName: "ToolHub IA",
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* GOOGLE ANALYTICS */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GJRYDE7TVH"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-GJRYDE7TVH');
          `}
        </Script>

        {children}

      </body>
    </html>
  );
}
