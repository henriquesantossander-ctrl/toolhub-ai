"use client";

import Link from "next/link";
import {
  ImageIcon,
  Camera,
  Clapperboard,
  FileText,
} from "lucide-react";

export default function Sidebar() {
return (<aside className="relative w-72 min-h-screen bg- border-r border-blue-950/50 flex flex-col p-5">
   
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_40%)] pointer-events-none" />
  <div className="p-6 flex flex-col h-screen">
    <div className="mb-8">
      <h1 className="text-2xl font-bold whitespace-nowrap">
        ToolHub <span className="text-purple-500">IA</span>
      </h1>

      <p className="text-zinc-500 text-sm mt-1">
        Plataforma completa de IA
      </p>
    </div>

    <div className="mb-6">
      <p className="text-xs uppercase text-zinc-500 mb-3">
        Studio
      </p>

      <div className="space-y-2">

       <Link
  href="/studio?tool=image"
  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-600/20 border border-purple-500/20"
>
  <ImageIcon size={18} />
  <span>Gerador de Imagem</span>
</Link>

<Link
  href="/studio?tool=photo-editor"
  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
>
  <Camera size={18} />
  <span>Editor de Fotos</span>
</Link>

<Link
  href="/studio?tool=video"
  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
>
  <Clapperboard size={18} />
  <span>Vídeo IA</span>
</Link>

<Link
  href="/studio?tool=video-script"
  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
>
  <FileText size={18} />
  <span>Roteiro para Vídeo</span>
</Link>

      </div>
    </div>

    <div className="border-t border-zinc-800 my-6"></div>

    <div>
     

      <div className="space-y-2 text-sm text-zinc-400">

       

      </div>
    </div>
  </div>

  <div className="mt-auto px-4 pb-16">
  <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-b from-[#2a0d4d] to-[#1a0a2e] p-5">

    <div className="flex items-center gap-2 mb-4">
      <span className="text-yellow-400 text-lg">👑</span>

      <p className="text-sm font-medium text-white">
        Upgrade para <span className="text-purple-400">PRO</span>
      </p>
    </div>

    <p className="text-sm text-zinc-300 leading-7 mb-5">
      Desbloqueie recursos ilimitados
      <br />
      e gere conteúdos incríveis.
    </p>

    <button
      className="
        w-full
        h-12
        rounded-xl
        font-semibold
        text-white
        bg-gradient-to-r
        from-purple-600
        to-purple-500
        hover:opacity-90
        transition
      "
    >
      Fazer Upgrade
    </button>

  </div>
</div>

</aside>


);
}


