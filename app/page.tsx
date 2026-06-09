"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  const examples = [
    ["Cyberpunk", "Cidade futurista com neon", "/examples/cyber-after.png"],
    ["Fantasy", "Castelo em um vale mágico", "/examples/fantasy-after.png"],
    ["Hero", "Herói cinematográfico", "/examples/hero-after.png"],
    ["Cartoon", "Estilo cartoon 3D", "/examples/cartoon-after.png"],
  ];

  function generateImage() {
    if (!prompt.trim()) {
      alert("Digite uma descrição primeiro.");
      return;
    }

    alert(`Gerando imagem: ${prompt}`);
  }

  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <header className="h-20 border-b border-white/10 bg-[#0b0f14]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center font-black">
              ✦
            </div>
            <h1 className="text-2xl font-black">
              ToolHub <span className="text-purple-400">AI</span>
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-zinc-300">
            <Link href="/premium" className="hover:text-white">Planos</Link>
            <Link href="/business" className="hover:text-white">API</Link>
            <Link href="/login" className="hover:text-white">Entrar</Link>
            <Link href="/premium" className="bg-purple-600 hover:bg-purple-500 px-5 py-3 rounded-xl font-bold">
              Começar agora
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-[240px_1fr_380px] gap-8">
        <aside className="hidden lg:flex flex-col justify-between border border-white/10 rounded-2xl p-4 bg-white/[0.03] min-h-[760px]">
          <div className="space-y-3">
            <button className="w-full text-left bg-purple-600/20 text-purple-300 px-4 py-3 rounded-xl">
              🖼️ Gerador de Imagens
            </button>
            <button className="w-full text-left hover:bg-white/5 px-4 py-3 rounded-xl">
              🎭 Imagem para Imagem
            </button>
            <button className="w-full text-left hover:bg-white/5 px-4 py-3 rounded-xl">
              ✍️ Texto para Imagem
            </button>
            <button className="w-full text-left hover:bg-white/5 px-4 py-3 rounded-xl">
              📁 Meus Projetos
            </button>
            <button className="w-full text-left hover:bg-white/5 px-4 py-3 rounded-xl">
              ❤️ Favoritos
            </button>
          </div>

          <div className="border border-white/10 rounded-2xl p-4 bg-white/[0.04]">
            <h3 className="font-bold text-lg">Upgrade para Pro</h3>
            <p className="text-zinc-400 text-sm mt-2">
              Gere imagens em alta resolução sem limites.
            </p>
            <Link href="/premium">
              <button className="w-full mt-4 bg-purple-600 py-3 rounded-xl font-bold">
                Ver planos
              </button>
            </Link>
          </div>
        </aside>

        <section className="border border-white/10 rounded-2xl p-8 bg-white/[0.03]">
          <h2 className="text-3xl font-black">Gerador de Imagens com IA</h2>
          <p className="text-zinc-400 mt-3">
            Crie imagens incríveis em segundos com inteligência artificial.
          </p>

          <div className="flex gap-3 mt-8">
            <button className="bg-purple-600/20 text-purple-300 px-5 py-3 rounded-xl">
              Texto para Imagem
            </button>
            <button className="border border-white/10 px-5 py-3 rounded-xl text-zinc-300">
              Imagem para Imagem
            </button>
          </div>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Descreva a imagem que você quer criar..."
            className="w-full h-[260px] mt-6 bg-[#111820] border border-white/10 rounded-2xl p-5 outline-none resize-none text-zinc-200"
          />

          <label className="block mt-5 text-sm text-zinc-400">Estilo</label>
          <select className="w-full mt-2 bg-[#111820] border border-white/10 rounded-xl p-4 outline-none">
            <option>Realista</option>
            <option>Cinematográfico</option>
            <option>Anime</option>
            <option>Cyberpunk</option>
            <option>Fantasy</option>
          </select>

          <button
            onClick={generateImage}
            className="w-full mt-8 bg-gradient-to-r from-purple-600 to-indigo-500 hover:scale-[1.01] transition py-4 rounded-xl font-black text-lg"
          >
            ✨ Gerar Imagem
          </button>
        </section>

        <aside className="border border-white/10 rounded-2xl p-6 bg-white/[0.03]">
          <h2 className="text-2xl font-black mb-6">Exemplos</h2>

          <div className="grid grid-cols-2 gap-5">
            {examples.map(([title, desc, image]) => (
              <div
                key={title}
                onClick={() => setPrompt(desc)}
                className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 cursor-pointer hover:border-purple-500/60 transition"
              >
                <img src={image} className="h-[150px] w-full object-cover" />
                <div className="p-3">
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-zinc-400 text-xs mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}