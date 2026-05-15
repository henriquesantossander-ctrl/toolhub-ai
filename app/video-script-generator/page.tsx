"use client";

import { useState } from "react";
import { checkUsageLimit, increaseUsage } from "@/lib/checkUsageLimit";

  export default function VideoScriptGenerator() {
  const [theme, setTheme] = useState("");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);

    const generateScript = async () => {
    const result = await checkUsageLimit();

    if (!result.allowed) return;

    setLoading(true);
    setScript("");

    const response = await fetch("/api/video-script", {
      method: "POST",
     headers: {
  "Content-Type": "application/json",
},
      body: JSON.stringify({
        prompt: theme || "vídeo viral",
      }),
    });

    const data = await response.json();

    setScript(data.result);

    if (!result.isPro && result.email) {
  await increaseUsage(result.email, result.currentCount);
}
    setLoading(false);
  };

  const copyScript = async () => {
    await navigator.clipboard.writeText(script);
    alert("Roteiro copiado!");
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Gerador de Roteiro Viral
      </h1>

      <p className="text-zinc-400 mb-10 text-center max-w-2xl">
        Gere roteiros para TikTok, Shorts, Reels e vídeos virais usando IA.
      </p>

      <input
        type="text"
        placeholder="Tema: terror, futebol, motivação, dinheiro..."
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 w-full max-w-2xl mb-6 outline-none"
      />

      <button
        onClick={generateScript}
        disabled={loading}
        className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition disabled:opacity-50"
      >
        {loading ? (
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            Gerando roteiro...
          </div>
        ) : (
          "Gerar Roteiro"
        )}
      </button>

      {script && (
        <div className="bg-zinc-900 border border-zinc-800 mt-12 p-8 rounded-3xl max-w-2xl w-full">
          <p className="text-zinc-300 text-lg whitespace-pre-line">
            {script}
          </p>

          <button
            onClick={copyScript}
            className="mt-6 w-full bg-white text-black py-3 rounded-2xl font-bold hover:scale-105 transition"
          >
            Copiar Roteiro
          </button>
        </div>
      )}
    </main>
  );
}