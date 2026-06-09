"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [showLogin, setShowLogin] = useState(false);  

  const examples = [
    {
      title: "Cyberpunk",
      image: "/examples/cyber-after.png",
      prompt: "Transforme essa foto em cyberpunk neon cinematográfico",
    },
    {
      title: "Fantasy",
      image: "/examples/fantasy-after.png",
      prompt: "Transforme essa foto em guerreira medieval fantasy",
    },
    {
      title: "Hero",
      image: "/examples/hero-after.png",
      prompt: "Transforme essa foto em super herói realista",
    },
    {
      title: "Cartoon",
      image: "/examples/cartoon-after.png",
      prompt: "Transforme essa foto em cartoon 3D Pixar",
    },
  ];

  function handleGenerate() {
    if (!prompt.trim()) {
      alert("Digite um prompt primeiro");
      return;
    }

    alert(`Gerando imagem: ${prompt}`);
  }

  return (
    <main className="min-h-screen bg-[#070707] text-white overflow-hidden">
<header className="w-full border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">

  <div className="max-w-7xl mx-auto px-6 h-[82px] flex items-center justify-between">

    {/* LOGO */}
    <Link href="/">
      <h1 className="text-3xl font-black cursor-pointer hover:opacity-80 transition">
        ToolHub <span className="text-purple-500">IA</span>
      </h1>
    </Link>

    {/* MENU */}
    <div className="hidden md:flex items-center gap-10 text-sm text-zinc-400">

      <a href="#exemplos" className="hover:text-white transition">
        Exemplos
      </a>

      <a href="/premium" className="hover:text-white transition">
        Planos
      </a>

    </div>

    {/* LOGIN */}
    <button
      onClick={() => setShowLogin(true)}
      className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:scale-105 transition px-7 py-3 rounded-2xl font-bold"
    >
      Login
    </button>

  </div>

</header>
      {/* CONTEÚDO */}
      <section className="w-full px-6 py-10">

        <div className="max-w-5xl mx-auto">

          {/* HEADER */}
          <div className="mb-6">

            <h1 className="text-3xl font-bold">
              Gerador de Imagens com IA
            </h1>

            <p className="text-zinc-500 text-sm mt-2">
              Crie imagens incríveis em segundos usando IA.
            </p>

          </div>

          {/* BOX */}
          <div className="bg-[#111111] border border-white/10 rounded-[32px] p-5">

            {/* TABS */}
            <div className="flex gap-3 mb-5">

              <button className="bg-purple-600 px-4 py-3 rounded-xl font-bold">
                Imagem para Imagem
              </button>

              <button className="bg-zinc-900 px-5 py-3 rounded-xl">
                Texto para Imagem
              </button>

            </div>

             {/* UPLOAD */}
             <div className="border-2 border-dashed border-white/10 rounded-3xl p-8 text-center bg-black/30">

                <p className="text-zinc-400 text-base">
                 Clique ou solte uma imagem aqui
                 </p>

                 <input
                   type="file"
                   accept="image/*"
                   className="hidden"
                   id="imageUpload"
                    />

                      <label
                       htmlFor="imageUpload"
                        className="inline-block mt-4 bg-zinc-900 hover:bg-zinc-800 px-6 py-3 rounded-xl transition cursor-pointer"
                         >
                         Selecionar imagem
                      </label>

                      </div>

            {/* PROMPT */}
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Descreva sua imagem..."
              className="w-full h-[120px] bg-black/40 border border-white/10 rounded-3xl p-6 mt-6 outline-none resize-none text-lg"
            />

            {/* BOTÃO */}
            <button
              onClick={handleGenerate}
              className="w-full mt-6 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:scale-[1.02] transition py-5 rounded-2xl font-black text-xl shadow-[0_0_60px_rgba(168,85,247,0.35)]"
            >
              ✨ GERAR COM IA
            </button>

          </div>

          {/* EXEMPLOS */}
          <div id="exemplos" className="mt-8">

            <h2 className="text-2xl font-black mb-5">
              Exemplos prontos
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {examples.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#111111] border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition cursor-pointer"
                >

                  <img
                    src={item.image}
                    className="h-[180px] w-full object-cover"
                  />

                  <div className="p-4">

                    <h3 className="text-xl font-black">
                      {item.title}
                    </h3>

                    <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                      {item.prompt}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>
       {/* LOGIN MODAL */}
{showLogin && (

  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">

    <div className="w-full max-w-md bg-[#111111] border border-white/10 rounded-[32px] p-8 relative">

      {/* FECHAR */}
      <button
        onClick={() => setShowLogin(false)}
        className="absolute top-5 right-5 text-zinc-500 hover:text-white"
      >
        ✕
      </button>

      <h2 className="text-3xl font-black mb-2">
        Bem-vindo
      </h2>

      <p className="text-zinc-500 mb-8">
        Entre na sua conta do ToolHub IA
      </p>

      <div className="space-y-4">

        {/* LOGIN */}
        <a href="/login">
          <button className="w-full bg-purple-600 hover:bg-purple-500 transition py-4 rounded-2xl font-bold">
            Entrar na conta
          </button>
        </a>

        {/* CADASTRO */}
        <a href="/register">
          <button className="w-full bg-zinc-900 hover:bg-zinc-800 transition py-4 rounded-2xl font-bold border border-white/10">
            Criar cadastro
          </button>
        </a>

        {/* GOOGLE */}
        <button className="w-full bg-white text-black hover:scale-[1.02] transition py-4 rounded-2xl font-bold">
          Continuar com Google
        </button>

      </div>

    </div>

  </div>

)}
    </main>
  );
}