"use client";

import { useState } from "react";
import { checkUsageLimit, increaseUsage } from "@/lib/checkUsageLimit";

export default function NicknameGenerator() {
  const [nickname, setNickname] = useState("");
  const [theme, setTheme] = useState("");
  const [loading, setLoading] = useState(false);

  const generateNickname = async () => {
    const result = await checkUsageLimit();

    if (!result.allowed) return;

    setLoading(true);
    setNickname("");

    const response = await fetch("/api/nickname", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: theme || "nickname gamer",
      }),
    });

    const data = await response.json();

    setNickname(data.result);

    if (!result.isPro) {
      await increaseUsage(result.email, result.currentCount);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Gerador de Nickname
      </h1>

      <p className="text-zinc-400 mb-10 text-center max-w-xl">
        Descubra nicknames únicos para jogos, Discord, TikTok e redes sociais.
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
        disabled={loading}
        className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition disabled:opacity-50"
      >
        {loading ? (
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            Gerando com IA...
          </div>
        ) : (
          "Gerar Nickname"
        )}
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
        </div>
      )}
    </main>
  );
}