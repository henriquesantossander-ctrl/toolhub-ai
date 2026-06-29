
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "ToolHub IA - Ferramentas Modernas para Internet",

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

        {/* GOOGLE ANALYTICS */}
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

        {/* TOAST */}
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

        {/* HEADER */}
        <Header />

        {/* PAGE */}
        <div className="pt-14">
          {children}
        </div>

      </body>
    </html>
  );
}

