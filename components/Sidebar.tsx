"use client";

import Link from "next/link";

export default function Sidebar() {
return ( <aside className="w-72 h-screen sticky top-0 bg-[#0B1220] border-r border-white/10 p-5 flex flex-col">


  <div>
    <div className="mb-8">
      <h1 className="text-3xl font-bold">
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
          className="block px-4 py-3 rounded-xl bg-purple-600/20 border border-purple-500/20"
        >
          🖼️ Gerador de Imagem
        </Link>

        <Link
          href="/studio?tool=photo-editor"
          className="block px-4 py-3 rounded-xl hover:bg-white/10 transition"
        >
          📸 Editor de Fotos
        </Link>

        <Link
          href="/studio?tool=video"
          className="block px-4 py-3 rounded-xl hover:bg-white/10 transition"
        >
          🎬 Vídeo IA
        </Link>

        <Link
          href="/studio?tool=video-script"
          className="block px-4 py-3 rounded-xl hover:bg-white/10 transition"
        >
          ✍️ Roteiro para Vídeo
        </Link>

      </div>
    </div>

    <div className="border-t border-zinc-800 my-6"></div>

    <div>
      <p className="text-xs uppercase text-zinc-500 mb-3">
        Business
      </p>

      <div className="space-y-2 text-sm text-zinc-400">

        <div className="px-4 py-3 rounded-xl bg-zinc-900">
          🔒 Imagem → Vídeo
        </div>

        <div className="px-4 py-3 rounded-xl bg-zinc-900">
          🔒 Vídeo → Vídeo
        </div>

      </div>
    </div>
  </div>

  <div className="mt-auto">
    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 rounded-3xl p-5">

      <p className="text-xs uppercase text-zinc-400">
        Plano Atual
      </p>

      <h3 className="text-2xl font-bold mt-2">
        FREE
      </h3>

      <p className="text-zinc-400 text-sm mt-2">
        Faça upgrade para desbloquear todos os recursos.
      </p>

      <button className="w-full mt-5 bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-2xl font-semibold">
        🚀 Upgrade
      </button>

    </div>
  </div>

</aside>


);
}


