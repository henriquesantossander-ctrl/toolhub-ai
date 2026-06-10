"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  const examples = [
    ["Cyberpunk", "Cidade futurista neon", "/examples/cyber-after.png"],
    ["Fantasy", "Guerreira medieval fantasy", "/examples/fantasy-after.png"],
    ["Hero", "Super herói cinematográfico", "/examples/hero-after.png"],
    ["Cartoon", "Cartoon 3D Pixar", "/examples/cartoon-after.png"],
  ];

  function generateImage() {
    if (!prompt.trim()) {
      alert("Digite uma descrição.");
      return;
    }

    alert(`Gerando imagem: ${prompt}`);
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">



      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-10 text-center">

        <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">

          Crie imagens incríveis
          <br />
          com inteligência artificial

        </h1>

        <p className="text-zinc-500 text-lg mt-6 max-w-2xl mx-auto">

          Gere imagens cinematográficas, realistas,
          anime, fantasy e muito mais em segundos.

        </p>

      </section>

      {/* GENERATOR */}
      <section className="max-w-4xl mx-auto px-6">

        <div className="bg-[#111111] border border-white/10 rounded-[32px] p-6">

          {/* TABS */}
          <div className="flex gap-3 mb-5">

            <button className="bg-purple-600 px-5 py-3 rounded-2xl font-bold">
              Texto para Imagem
            </button>

            <button className="bg-zinc-900 px-5 py-3 rounded-2xl text-zinc-400">
              Imagem para Imagem
            </button>

          </div>

          {/* TEXTAREA */}
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Descreva a imagem que você quer criar..."
            className="w-full h-[220px] bg-black/40 border border-white/10 rounded-3xl p-6 outline-none resize-none text-lg"
          />

          {/* STYLE */}
          <select className="w-full mt-5 bg-black/40 border border-white/10 rounded-2xl p-4 outline-none text-zinc-300">

            <option>Realista</option>
            <option>Cinematográfico</option>
            <option>Anime</option>
            <option>Cyberpunk</option>
            <option>Fantasy</option>

          </select>

          {/* BUTTON */}
          <button
            onClick={generateImage}
            className="w-full mt-6 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:scale-[1.01] transition py-5 rounded-2xl font-black text-lg shadow-[0_0_60px_rgba(168,85,247,0.25)]"
          >
            ✨ Gerar imagem
          </button>

        </div>

      </section>

      {/* EXAMPLES */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-black">
            Exemplos
          </h2>

          <p className="text-zinc-500 text-sm">
            Clique em um exemplo para usar o prompt
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {examples.map(([title, desc, image]) => (

            <div
              key={title}
              onClick={() => setPrompt(desc)}
              className="bg-[#111111] border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/40 transition cursor-pointer"
            >

              <img
                src={image}
                className="h-[220px] w-full object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-black">
                  {title}
                </h3>

                <p className="text-zinc-500 text-sm mt-2">
                  {desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}