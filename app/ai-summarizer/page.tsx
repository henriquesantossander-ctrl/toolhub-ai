"use client";

import { useState } from "react";

export default function AISummarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const summarizeText = () => {
    if (!text) return;

    const words = text.split(" ");

    const shortText = words.slice(0, 20).join(" ");

    setSummary(shortText + "...");
  };

  const copySummary = async () => {
    await navigator.clipboard.writeText(summary);

    alert("Resumo copiado!");
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-6xl font-bold mb-4">
        Resumidor IA
      </h1>

      <p className="text-zinc-400 mb-10 text-center max-w-2xl">
        Cole um texto grande e gere um resumo rápido.
      </p>

      <textarea
        placeholder="Cole seu texto aqui..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 w-full max-w-3xl h-64 outline-none resize-none"
      />

      <button
        onClick={summarizeText}
        className="mt-6 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
      >
        Resumir Texto
      </button>

      {summary && (
        <div className="bg-zinc-900 border border-zinc-800 mt-12 p-8 rounded-3xl w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">
            Resumo
          </h2>

          <p className="text-zinc-300 leading-8">
            {summary}
          </p>

          <button
            onClick={copySummary}
            className="mt-6 bg-white text-black px-6 py-3 rounded-2xl font-bold hover:scale-105 transition"
          >
            Copiar Resumo
          </button>
        </div>
      )}
    </main>
  );
}