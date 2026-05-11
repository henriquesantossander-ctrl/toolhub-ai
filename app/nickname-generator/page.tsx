"use client";

import { useState } from "react";

export default function NicknameGenerator() {
  const [nickname, setNickname] = useState("");

 const generateNickname = async () => {
  const response = await fetch("/api/nickname", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: "nickname gamer",
    }),
  });

  const data = await response.json();

  setNickname(data.result);
};
  const copyNick = async () => {
    await navigator.clipboard.writeText(nickname);

    alert("Nickname copiado!");
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-6xl font-bold mb-4">
        Gerador de Nickname
      </h1>

      <p className="text-zinc-400 mb-10 text-center max-w-xl">
        Descubra nicknames únicos para jogos,
        Discord, TikTok e redes sociais.
      </p>

      <button
        onClick={generateNickname}
        className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
      >
        Gerar Nickname
      </button>

      {nickname && (
        <div className="bg-zinc-900 border border-zinc-800 mt-12 p-8 rounded-3xl max-w-md w-full text-center">
          <p className="text-3xl font-bold text-zinc-200">
            {nickname}
          </p>

          <button
            onClick={copyNick}
            className="mt-6 w-full bg-white text-black py-3 rounded-2xl font-bold hover:scale-105 transition"
          >
            Copiar Nick
          </button>
        </div>
      )}
    </main>
  );
}