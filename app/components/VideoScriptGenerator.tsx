"use client";

import { useState } from "react";
import { checkUsageLimit, increaseUsage } from "@/lib/checkUsageLimit";

export default function VideoScriptGenerator() {
  const [theme, setTheme] = useState("");
  const [prompt, setPrompt] = useState("");
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
        prompt: `${theme}\n\n${prompt}`,
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
    <section className="relative z-10 mx-auto -mt-10 w-full max-w-6xl px-6">
      <div className="rounded-[36px] bg-transparent p-0 shadow-none">
        <div className="rounded-[36px] border border-white/30 bg-white/95 backdrop-blur-xl p-10 shadow-[0_25px_80px_rgba(0,0,0,.30)]">

          <h2 className="mb-3 text-4xl font-bold text-zinc-900">
            Gerador de Roteiro
          </h2>

          <p className="mb-8 text-zinc-500">
            Gere roteiros completos para vídeos usando IA.
          </p>

          <label className="mb-2 block text-xl font-semibold text-zinc-900">
            1. Tema do vídeo
          </label>

          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="Ex: Terror, Futebol, Motivação..."
            className="mb-8 h-14 w-full rounded-2xl border border-zinc-200 bg-white px-5 text-zinc-900 outline-none placeholder:text-zinc-400"
          />

          <label className="mb-2 block text-xl font-semibold text-zinc-900">
            2. Descreva o roteiro
          </label>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ex: Quero um vídeo de 30 segundos com um início impactante..."
            className="h-40 w-full resize-none rounded-2xl border border-zinc-200 bg-white p-5 text-zinc-900 outline-none placeholder:text-zinc-400"
          />

          <div className="mt-8 flex justify-center">
            <button
              onClick={generateScript}
              disabled={loading}
              className="mx-auto flex h-[60px] w-[320px] items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Gerando..." : "Gerar Roteiro"}
            </button>
          </div>

          {script && (
            <div className="mt-10">
              <h2 className="mb-4 text-2xl font-bold text-zinc-900">
                Roteiro Gerado
              </h2>

              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 whitespace-pre-wrap text-zinc-800">
                {script}
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={copyScript}
                  className="rounded-2xl border border-zinc-300 px-6 py-3 font-semibold text-zinc-800 transition hover:bg-zinc-100"
                >
                  Copiar roteiro
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}