"use client";

import Link from "next/link";

export default function Sidebar() {
return (<aside className="relative w-60 min-h-screen bg- border-r border-blue-950/50 flex flex-col p-5">
   
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
          className="block px-4 py-2.5 rounded-xl bg-purple-600/20 border border-purple-500/20"
        >
          🖼️ Gerador de Imagem
        </Link>

        <Link
          href="/studio?tool=photo-editor"
          className="block px-4 py-2.5 rounded-xl hover:bg-white/10 transition"
        >
          📸 Editor de Fotos
        </Link>

        <Link
          href="/studio?tool=video"
          className="block px-4 py-2.5 rounded-xl hover:bg-white/10 transition"
        >
          🎬 Vídeo IA
        </Link>

        <Link
          href="/studio?tool=video-script"
          className="block px-4 py-2.5 rounded-xl hover:bg-white/10 transition"
        >
          ✍️ Roteiro para Vídeo
        </Link>

      </div>
    </div>

    <div className="border-t border-zinc-800 my-6"></div>

    <div>
     

      <div className="space-y-2 text-sm text-zinc-400">

       

      </div>
    </div>
  </div>

  <div className="mt-auto">
   <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 rounded-2xl p-4">

      <p className="text-xs uppercase text-zinc-400">
        Plano Atual
      </p>

      <h3 className="text-xl font-bold mt-2">
        FREE
      </h3>

      <p className="text-zinc-400 text-sm mt-2">
        Faça upgrade para desbloquear todos os recursos.
      </p>

      <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 py-2.5 rounded-2xl font-semibold">
        🚀 Upgrade
      </button>

    </div>
  </div>

</aside>


);
}


