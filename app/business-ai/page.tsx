"use client";

import { useState } from "react";
import { checkBusinessAccess } from "@/lib/checkBusinessAccess";


export default function BusinessAIPage() {
  const [image, setImage] = useState<string | null>(null);
  const [response, setResponse] = useState("");
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

  const analyzeImage = async () => {
  if (!image) return;

  const result = await checkBusinessAccess();

  if (!result.allowed) return;

  setLoading(true);

  const res = await fetch("/api/business-ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
    }),
  });

  const data = await res.json();

  setResponse(data.result);

  setLoading(false);
};

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-5xl font-bold mb-4 text-center">
        ToolHub IA Business
      </h1>

      <p className="text-zinc-400 mb-10 text-center max-w-2xl">
        Envie prints, imagens ou erros e deixe a IA analisar tudo para você.
      </p>

      <label className="bg-zinc-900 border border-zinc-700 px-6 py-4 rounded-2xl cursor-pointer hover:bg-zinc-800 transition">
        Selecionar imagem
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImage}
        />
      </label>

      {image && (
        <img
          src={image}
          alt="Preview"
          className="mt-8 rounded-3xl max-w-xl border border-zinc-800"
        />
      )}

      {image && (
        <button
          onClick={analyzeImage}
          disabled={loading}
          className="mt-8 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition disabled:opacity-50"
        >
          {loading ? "Analisando imagem..." : "Analisar Imagem"}
        </button>
      )}

      {response && (
        <div className="bg-zinc-900 border border-zinc-800 mt-12 p-8 rounded-3xl max-w-2xl w-full">
          <p className="text-zinc-300 whitespace-pre-line text-lg">
            {response}
          </p>
        </div>
      )}
    </main>
  );
}