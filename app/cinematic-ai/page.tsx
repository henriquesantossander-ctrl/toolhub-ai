"use client";

import { useState } from "react";

export default function CinematicAIPage() {
  const [image, setImage] = useState<string | null>(null);
  const [instruction, setInstruction] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const generateCinematic = async () => {
    if (!image) {
      alert("Envie uma imagem primeiro.");
      return;
    }

    if (!instruction.trim()) {
      alert("Digite o que você quer mudar na imagem.");
      return;
    }

    setLoading(true);
    setResult("");

    const res = await fetch("/api/cinematic-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image,
        instruction,
      }),
    });

    const data = await res.json();

    if (data.image) {
      setResult(data.image);
    } else {
      alert("Erro ao transformar imagem.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-5xl font-black mb-6 text-center">
        🎬 Editor de Imagem IA
      </h1>

      <p className="text-zinc-400 text-center max-w-2xl mb-10">
        Envie uma foto e diga exatamente o que você quer transformar nela.
      </p>

      <label className="bg-zinc-900 border border-zinc-700 px-6 py-4 rounded-2xl cursor-pointer hover:bg-zinc-800 transition">
        Enviar Foto
        <input type="file" accept="image/*" hidden onChange={handleImage} />
      </label>

      {image && (
        <img
          src={image}
          alt="Preview"
          className="mt-10 rounded-3xl max-w-md border border-zinc-800"
        />
      )}

      {image && (
        <textarea
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          placeholder="Ex: transforme essa pessoa no Batman em uma cidade chuvosa à noite, realista e cinematográfico..."
          className="mt-8 w-full max-w-2xl h-32 bg-zinc-900 border border-zinc-700 rounded-2xl p-5 outline-none text-white"
        />
      )}

      {image && (
        <button
          onClick={generateCinematic}
          disabled={loading}
          className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition disabled:opacity-50"
        >
          {loading ? "Transformando imagem..." : "Transformar com IA"}
        </button>
      )}

      {result && (
        <div className="mt-16">
          <img
            src={result}
            alt="Resultado"
            className="rounded-3xl border border-zinc-800 max-w-2xl"
          />
        </div>
      )}
    </main>
  );
}