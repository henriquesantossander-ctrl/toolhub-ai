"use client";

import { useState } from "react";

export default function BioGenerator() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const generateBio = () => {
    if (!name) return;

    const bios = [
      `🔥 ${name} | Gamer 🎮
🚀 Vivendo online.
💻 Tecnologia • Games • IA`,

      `👑 ${name}
🎯 Focado em vencer.
⚡ Discord • TikTok • CS2`,

      `🌙 ${name}
🎧 Música, internet e caos.
🖤 Apenas vivendo.`,

      `🎮 ${name}
🚀 Future millionaire.
💻 Gamer & Creator`,
    ];

    const randomBio =
      bios[Math.floor(Math.random() * bios.length)];

    setBio(randomBio);
  };

  const copyBio = async () => {
    await navigator.clipboard.writeText(bio);

    alert("Bio copiada!");
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-6xl font-bold mb-4">
        Gerador de Bio
      </h1>

      <p className="text-zinc-400 mb-10 text-center max-w-xl">
        Crie bios incríveis para Instagram, Discord,
        TikTok e redes sociais.
      </p>

      <input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 w-full max-w-md mb-6 outline-none"
      />

      <button
        onClick={generateBio}
        className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
      >
        Gerar Bio
      </button>

      {bio && (
        <div className="bg-zinc-900 border border-zinc-800 mt-12 p-8 rounded-3xl max-w-md w-full">
          <p className="whitespace-pre-line text-zinc-300 text-lg">
            {bio}
          </p>

          <button
            onClick={copyBio}
            className="mt-6 w-full bg-white text-black py-3 rounded-2xl font-bold hover:scale-105 transition"
          >
            Copiar Bio
          </button>
        </div>
      )}
    </main>
  );
}