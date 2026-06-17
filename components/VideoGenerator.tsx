"use client";

import { useState } from "react";
import Link from "next/link";


import {
  Lock,
  ImageIcon,
  Clapperboard,
} from "lucide-react";

export default function VideoAIPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState("Cinemático");

  const styles = ["Cinemático", "Realista", "Anime", "3D", "Fantasia"];

  async function generateVideo() {
    setLoading(true);

    try {
      await fetch("/api/video-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          style,
        }),
      });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <div className="w-full text-white p-8">
      <h1 className="text-5xl font-bold mb-2">🎬 Vídeo IA</h1>

      <p className="text-zinc-400 mb-8">
        Crie vídeos incríveis com inteligência artificial.
      </p>

      

      <div className="flex gap-3 mb-8 flex-wrap">
        <button className="px-4 py-3 rounded-xl bg-purple-600">
          Texto → Vídeo
        </button>

          <button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-purple-500">
          <ImageIcon size={18} className="text-blue-400" />

  <span>Imagem → Vídeo</span>

  <span className="text-[10px] px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
    BUSINESS
  </span>

   <Lock size={14} className="text-zinc-500 ml-2" />
  
</button>

        <button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-purple-500">
        <Clapperboard size={18} className="text-purple-400" />

  <span>Vídeo → Vídeo</span>

  <span className="text-[10px] px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
    BUSINESS
  </span>

  <Lock size={14} className="text-zinc-500 ml-2" />
</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 h-fit">
        <h2 className="text-xl font-semibold mb-4">
         Descreva seu vídeo
        </h2>

        <textarea
         value={prompt}
         onChange={(e) => setPrompt(e.target.value)}
         placeholder="Descreva o vídeo..."
         className="w-full h-28 bg-zinc-950 border border-zinc-800 rounded-2xl p-5"
         /> 
        
          
          <div className="flex gap-3 mt-6 flex-wrap">
            <div className="mt-6">
  <h3 className="text-lg font-semibold mb-3">
    Estilo do vídeo
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
    {styles.map((item) => (
      <button
        key={item}
        onClick={() => setStyle(item)}
        className={`h-28 rounded-2xl border relative overflow-hidden transition ${
          style === item
            ? "border-purple-500 bg-purple-500/20"
            : "border-zinc-800 bg-zinc-900 hover:border-purple-500"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-zinc-900 to-black" />

        <div className="relative h-full flex items-end p-3">
          <span className="font-semibold">
            {item}
          </span>
        </div>
      </button>
    ))}
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div>
      <h3 className="text-lg font-semibold mb-3">
        ⏱ Duração
      </h3>

      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-xl bg-purple-600">5s</button>
        <button className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800">10s</button>
        <button className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800">15s</button>
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3">
        🎥 Resolução
      </h3>

      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-xl bg-purple-600">720p</button>
        <button className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800">1080p</button>
      </div>
    </div>

    <div
      onClick={() => alert("Disponível apenas no plano Business")}
      className="border border-zinc-800 rounded-2xl p-4 cursor-pointer hover:border-purple-500"
    >
      <p className="font-semibold">📸 Upload de Imagem</p>
      <p className="text-zinc-500 text-sm mt-2">Disponível no Business</p>
    </div>

    <div
      onClick={() => alert("Disponível apenas no plano Business")}
      className="border border-zinc-800 rounded-2xl p-4 cursor-pointer hover:border-purple-500"
    >
      <p className="font-semibold">🎬 Upload de Vídeo</p>
      <p className="text-zinc-500 text-sm mt-2">Disponível no Business</p>
    </div>
  </div>
</div>

            
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 h-fit">
          <h2 className="text-2xl font-bold mb-6">🚀 BUSINESS</h2>

          <div className="space-y-4 text-zinc-300">
            <p>✅ Imagem → Vídeo</p>
            <p>✅ Múltiplas Imagens → Vídeo</p>
            <p>✅ Vídeo → Vídeo</p>
            <p>✅ Upload de Fotos</p>
            <p>✅ Upload de Vídeos</p>
            <p>✅ Sem anúncios</p>
            <p>✅ Mais gerações mensais</p>
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-purple-600/10 border border-purple-500/20">
            <p className="text-sm text-zinc-400">Plano Business</p>

            <p className="text-3xl font-bold mt-2">R$ 49,90</p>

            <p className="text-zinc-500 text-sm">por mês</p>
          </div>

          <Link href="/premium">
            <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-2xl font-bold">
              🚀 Liberar Recursos Business
            </button>
          </Link>
        </div>
      </div>

      <button
        onClick={generateVideo}
        className="mt-2 bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-2xl font-bold"
      >
        {loading ? "Gerando..." : "Gerar Vídeo IA"}
      </button>

      

        <h2 className="text-2xl font-bold mb-4">Seus vídeos gerados</h2>

        <p className="text-zinc-500 mb-6">
          Seus vídeos aparecerão aqui após a geração.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="h-32 rounded-2xl bg-zinc-800"></div>
          <div className="h-32 rounded-2xl bg-zinc-800"></div>
          <div className="h-32 rounded-2xl bg-zinc-800"></div>
          <div className="h-32 rounded-2xl bg-zinc-800"></div>
        </div>
      </div>
    
  );

    
}