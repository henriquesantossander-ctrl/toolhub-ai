"use client";

import { useState } from "react";

export default function BusinessImagePage() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) {
      alert("Digite uma descrição da imagem.");
      return;
    }

    setLoading(true);
    setImage("");

    const res = await fetch("/api/business-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    setImage(data.image);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Gerador de Imagens IA
      </h1>

      <p className="text-zinc-400 mb-10 text-center max-w-2xl">
        Crie imagens realistas, artes, thumbnails, personagens e ideias visuais com IA.
      </p>

      <textarea
        placeholder="Ex: um guerreiro cyberpunk realista em uma cidade futurista à noite..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 w-full max-w-2xl h-32 mb-6 outline-none"
      />

      <button
        onClick={generateImage}
        disabled={loading}
        className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition disabled:opacity-50"
      >
        {loading ? "Gerando imagem..." : "Gerar Imagem"}
      </button>

      {image && (
        <div className="mt-12 max-w-2xl w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <img
            src={image}
            alt="Imagem gerada por IA"
            className="rounded-2xl w-full"
          />
        </div>
      )}
    </main>
  );
}