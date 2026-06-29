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
    
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-7xl flex-col items-center justify-start pt-pt-28 px-6">

        {/* Hero */}
        <div className="mb-12 mt-5 max-w-4xl text-center">
         <h1 className="text-7xl md:text-8xl font-black leading-[0.95] tracking-tight text-white">
          Crie o incrível
         <br />
           com <span className="text-violet-500">IA.</span>
         </h1>

         <p className="mt-6 max-w-2xl text-center text-lg text-zinc-300">
          Transforme qualquer ideia em imagens incríveis usando inteligência artificial.
        </p>
        </div>

        {/* Navegação */}
        <div className="mb-10 flex flex-wrap justify-center gap-5">
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
        <div className="-mt-2 w-full max-w-5xl">
  {children}
</div>
    </div>
    </div>
  );
}