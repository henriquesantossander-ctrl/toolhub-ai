"use client";

import { useState } from "react";

export default function FreeFireNameGenerator() {
  const [name, setName] = useState("");

  const generateName = () => {
    const names = [
      "𓆩DARK FF𓆪",
      "༒FIRE亗",
      "ＮＥＭＥＳＩＳ",
      "ᴳᵒᵈ乡ＦＦ",
      "⚡ShadowX",
      "Tropaᶠᶠ",
      "☠︎SNIPER",
      "ঔৣFF KING",
      "ᎠᎬᎷϴΝ",
      "★ʙʟᴀᴢᴇ★",
    ];

    const random =
      names[Math.floor(Math.random() * names.length)];

    setName(random);
  };

  const copyName = async () => {
    await navigator.clipboard.writeText(name);
    alert("Nome copiado!");
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">

      <h1 className="text-5xl font-bold mb-4 text-center">
        Gerador de Nome Free Fire
      </h1>

      <p className="text-zinc-400 mb-10 text-center max-w-xl">
        Gere nomes estilosos e diferenciados
        para Free Fire.
      </p>

      <button
        onClick={generateName}
        className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
      >
        Gerar Nome
      </button>

      {name && (
        <div className="bg-zinc-900 border border-zinc-800 mt-12 p-8 rounded-3xl max-w-xl w-full text-center">

          <p className="text-3xl font-bold mb-6 break-words">
            {name}
          </p>

          <button
            onClick={copyName}
            className="bg-white text-black py-3 px-8 rounded-2xl font-bold hover:scale-105 transition"
          >
            Copiar Nome
          </button>
        </div>
      )}

    </main>
  );
}