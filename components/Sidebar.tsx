"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-[#090909] border-r border-white/10 p-5">
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
          Criação de Conteúdo
        </p>

        <div className="space-y-2">
          <Link
            href="/studio?tool=image"
            className="block px-4 py-3 rounded-xl bg-purple-600/20"
          >
            🖼️ Gerador de Imagem
          </Link>

          <Link
            href="/studio?tool=photo-editor"
            className="block px-4 py-3 rounded-xl hover:bg-white/10"
          >
            📸 Editor de Fotos
          </Link>

          <Link
            href="/video-ai"
            className="block px-4 py-3 rounded-xl hover:bg-white/10"
          >
            🎬 Vídeo IA
          </Link>

          <Link
            href="/video-script-generator"
            className="block px-4 py-3 rounded-xl hover:bg-white/10"
          >
            ✍️ Roteiro para Vídeo
          </Link>
        </div>
      </div>
    </aside>
  );
}

