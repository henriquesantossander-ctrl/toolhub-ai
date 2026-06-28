"use client";

import Link from "next/link";
import BackgroundGallery from "@/components/BackgroundGallery";

interface StudioShellProps {
  current: "image" | "photo-editor" | "video" | "video-script";
  children: React.ReactNode;
}

export default function StudioShell({
  current,
  children,
}: StudioShellProps) {
  const buttons = [
    {
      id: "image",
      label: "Imagem",
      href: "/studio?tool=image",
    },
    {
      id: "photo-editor",
      label: "Editor",
      href: "/studio?tool=photo-editor",
    },
    {
      id: "video",
      label: "Vídeo IA",
      href: "/studio?tool=video",
    },
    {
      id: "video-script",
      label: "Roteiro",
      href: "/studio?tool=video-script",
    },
  ];

  return (
      <div className="relative min-h-screen overflow-hidden bg-black text-white">

    <BackgroundGallery />
    
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 py-10">

        {/* Hero */}
        <div className="mb-10 text-center">
         <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
           ToolHub <span className="text-violet-400">IA</span> Studio
         </h1>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-400">
            Crie imagens, edite fotos e produza vídeos com inteligência artificial
            em um único lugar.
          </p>
        </div>

        {/* Navegação */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {buttons.map((button) => (
            <Link
              key={button.id}
              href={button.href}
              className={`rounded-full px-5 py-2 transition ${
                current === button.id
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
              }`}
            >
              {button.label}
            </Link>
          ))}
        </div>

        {/* Conteúdo */}
        <div>{children}</div>
      </div>
    </div>
  );
}