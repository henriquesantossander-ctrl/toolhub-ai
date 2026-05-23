"use client";

import CinematicExamples from "@/components/CinematicExamples";
import { useState } from "react";


export default function CinematicAIPage() {
  const [image, setImage] = useState<string | null>(null);
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

  const [style, setStyle] = useState("Hollywood");

  const generateCinematic = async () => {
    if (!image) return;

    setLoading(true);

    const res = await fetch("/api/cinematic-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  image,
  style,
}),
    });

    const data = await res.json();

    setResult(data.image);

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-5xl font-black mb-6 text-center">
        🎬 Cinematic AI
      </h1>

      <p className="text-zinc-400 text-center max-w-2xl mb-10">
        Transforme sua foto em uma cena cinematográfica usando IA.
      </p>

      <label className="bg-zinc-900 border border-zinc-700 px-6 py-4 rounded-2xl cursor-pointer hover:bg-zinc-800 transition">
        Enviar Foto
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
          className="mt-10 rounded-3xl max-w-md border border-zinc-800"
        />
      )} 

      {image && (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full max-w-2xl">
    {["Cyberpunk", "Hollywood", "Anime"].map((item) => (
      <button
        key={item}
        onClick={() => setStyle(item)}
        className={`p-4 rounded-2xl font-bold border transition ${
          style === item
            ? "bg-purple-600 border-purple-400"
            : "bg-zinc-900 border-zinc-700"
        }`}
      >
        {item}
      </button>
    ))}
  </div>
)}

      {image && (
        <button
          onClick={generateCinematic}
          disabled={loading}
          className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition"
        >
          {loading ? "Criando cena cinematográfica..." : "Transformar com IA"}
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
      <CinematicExamples />
    </main>
  );
}