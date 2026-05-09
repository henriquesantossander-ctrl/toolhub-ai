"use client";

import { useState } from "react";

export default function HashtagGenerator() {
  const [topic, setTopic] = useState("");
  const [hashtags, setHashtags] = useState("");

  const generateHashtags = () => {
    const base = topic.trim().toLowerCase().replaceAll(" ", "");

    if (!base) return alert("Digite um tema");

    const result = [
      `#${base}`,
      `#${base}brasil`,
      `#viral`,
      `#foryou`,
      `#explore`,
      `#reels`,
      `#tiktok`,
      `#instagram`,
      `#conteudo`,
      `#trend`,
    ].join(" ");

    setHashtags(result);
  };

  const copyHashtags = async () => {
    await navigator.clipboard.writeText(hashtags);
    alert("Hashtags copiadas!");
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-5xl font-bold mb-4 text-center">
        Gerador de Hashtags
      </h1>

      <p className="text-zinc-400 mb-10 text-center max-w-xl">
        Gere hashtags rápidas para Instagram, TikTok, Reels e posts.
      </p>

      <input
        type="text"
        placeholder="Tema: academia, futebol, gamer, moda..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 w-full max-w-xl mb-6 outline-none"
      />

      <button
        onClick={generateHashtags}
        className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
      >
        Gerar Hashtags
      </button>

      {hashtags && (
        <div className="bg-zinc-900 border border-zinc-800 mt-12 p-8 rounded-3xl max-w-xl w-full">
          <p className="text-zinc-300 text-lg break-words">{hashtags}</p>

          <button
            onClick={copyHashtags}
            className="mt-6 w-full bg-white text-black py-3 rounded-2xl font-bold hover:scale-105 transition"
          >
            Copiar Hashtags
          </button>
        </div>
      )}
    </main>
  );
}