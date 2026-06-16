"use client";

import { useState } from "react";

export default function VideoAIPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState("");

  async function generateVideo() {
    try {
      setLoading(true);

      const response = await fetch("/api/video-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      console.log(data);

      if (data.video) {
        setVideo(data.video[0]);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold mb-10">
        🎬 IA de Vídeo
      </h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Descreva o vídeo..."
        className="w-full max-w-2xl h-40 bg-zinc-900 border border-zinc-700 rounded-xl p-5"
      />

      <button
        onClick={generateVideo}
        className="mt-6 bg-pink-600 hover:bg-pink-700 px-10 py-4 rounded-xl text-xl font-bold"
      >
        {loading ? "Gerando vídeo..." : "Gerar vídeo IA"}
      </button>

      {video && (
        <video
          src={video}
          controls
          autoPlay
          className="mt-10 w-full max-w-3xl rounded-2xl"
        />
      )}
    </div>
  );
}