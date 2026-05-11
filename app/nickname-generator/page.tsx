"use client";

import { useState } from "react";

export default function NicknameGenerator() {
  const [nickname, setNickname] = useState("");
  const [theme, setTheme] = useState("");

 const generateNickname = async () => {
  const response = await fetch("/api/nickname", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: theme,
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

      <input
  type="text"
  placeholder="Tema: sombrio, fogo, sniper..."
  value={theme}
  onChange={(e) => setTheme(e.target.value)}
  className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 w-full max-w-xl mb-6 outline-none"
/>

      <button
        onClick={generateNickname}
        className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
      >
        Gerar Nickname
      </button>

      {nickname && (
        <div className="bg-zinc-900 border border-zinc-800 mt-12 p-8 rounded-3xl max-w-md w-full text-center">
        <div className="grid gap-3">
  {nickname.split("\n").map((nick, index) => (
    <button
      key={index}
      onClick={() => {
        navigator.clipboard.writeText(nick);
        alert("Nick copiado!");
      }}
      className="bg-zinc-800 border border-zinc-700 rounded-2xl py-3 px-4 text-center text-2xl font-bold hover:scale-105 hover:border-purple-500 hover:bg-zinc-700 transition"
    >
      {nick}
    </button>
  ))}
</div>

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