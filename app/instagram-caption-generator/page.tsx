"use client";

import { useState } from "react";

export default function InstagramCaptionGenerator() {
  const [theme, setTheme] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const generateCaption = async () => {
    setLoading(true);
    setCaption("");

    const response = await fetch("/api/caption", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: theme || "foto para Instagram",
      }),
    });

    const data = await response.json();

    setCaption(data.result);
    setLoading(false);
  };

  const copyCaption = async () => {
    await navigator.clipboard.writeText(caption);
    alert("Legenda copiada!");
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Gerador de Legenda para Instagram
      </h1>

      <p className="text-zinc-400 mb-10 text-center max-w-xl">
        Crie legendas rápidas para fotos, reels, stories e posts.
      </p>

      <input
        type="text"
        placeholder="Tema da legenda: foto na praia, academia, rolê..."
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 w-full max-w-xl mb-6 outline-none"
      />

      <button
        onClick={generateCaption}
        disabled={loading}
        className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition disabled:opacity-50"
      >
        {loading ? (
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            Gerando com IA...
          </div>
        ) : (
          "Gerar Legenda"
        )}
      </button>

      {caption && (
        <div className="bg-zinc-900 border border-zinc-800 mt-12 p-8 rounded-3xl max-w-xl w-full">
          <p className="text-zinc-300 text-lg whitespace-pre-line">
            {caption}
          </p>

          <button
            onClick={copyCaption}
            className="mt-6 w-full bg-white text-black py-3 rounded-2xl font-bold hover:scale-105 transition"
          >
            Copiar Legenda
          </button>
        </div>
      )}
    </main>
  );
}