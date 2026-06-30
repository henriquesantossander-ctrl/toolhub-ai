"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

;


import {
  Lock,
  ImageIcon,
  Clapperboard,
} from "lucide-react";

  export default function VideoAIPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
  loadVideos();
}, []);

  
  
  
   async function loadVideos() {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4);

  console.log("VIDEOS:", data);
  console.log("ERRO:", error);

  if (data) {
    setVideos(data);
  }
}
   
  async function generateVideo() {
    setLoading(true);
     
    if (!file) {
  alert("Selecione uma imagem.");
  setLoading(false);
  return;
}



  const fileName = `${Date.now()}-${file.name}`;

  const { error: uploadError } = await supabase.storage
  .from("video-inputs")
  .upload(fileName, file);

if (uploadError) {
  console.error(uploadError);
  alert("Erro ao enviar imagem.");
  setLoading(false);
  return;
}
     const { data } = supabase.storage
  .from("video-inputs")
  .getPublicUrl(fileName);

    const imageUrl = data.publicUrl;
  
    try {

      try {
         const response = await fetch("/api/video-ai", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    prompt,
    imageUrl,
  }),
});

 const result = await response.json();

console.log(result);

setVideoUrl(result.videoUrl);
await loadVideos();



} catch (error) {
  console.log(error);
}
      
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return (
  <section className="relative z-10 mx-auto -mt-10 w-full max-w-6xl px-6">
    <div className="rounded-[36px] bg-transparent p-0 shadow-none">
      <div className="rounded-[36px] border border-white/30 bg-white/95 backdrop-blur-xl p-5 shadow-[0_25px_80px_rgba(0,0,0,.30)]">

<div className="rounded-[36px] border border-white/30 bg-white/95 backdrop-blur-xl p-10 shadow-[0_25px_80px_rgba(0,0,0,.30)]">

  {/* Aqui */}
     <h2 className="mb-6 text-2xl font-bold text-zinc-900">
  1. Envie uma imagem
</h2>

<div className="mb-8 grid grid-cols-2 gap-4">

  <label className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-50 transition hover:bg-zinc-100">

    <span className="text-lg font-semibold text-zinc-700">
      Clique para enviar uma imagem
    </span>

    <span className="mt-2 text-sm text-zinc-500">
      JPG, PNG ou WEBP
    </span>

    <input
      type="file"
      accept="image/*"
      onChange={(e) => setFile(e.target.files?.[0] || null)}
      className="hidden"
    />

  </label>

  <div className="flex h-32 items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-50">

    {file ? (
      <img
        src={URL.createObjectURL(file)}
        alt="Preview"
        className="h-full w-full rounded-3xl object-cover"
      />
    ) : (
      <span className="text-zinc-400">
        Pré-visualização
      </span>
    )}

  </div>

</div>
</div>
    <h2 className="mb-4 text-xl font-bold text-zinc-900">
  2. Descreva o vídeo
</h2>

<textarea
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
  placeholder="Ex: transforme esta imagem em um vídeo cinematográfico com movimento suave de câmera..."
  className="mb-8 h-28 w-full resize-none rounded-2xl border border-zinc-200 bg-white p-5 text-lg text-zinc-900 outline-none placeholder:text-zinc-400"
/>

 <div className="flex justify-center">

  <button
    onClick={generateVideo}
    disabled={loading}
   className="mx-auto flex h-[60px] w-[320px] items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-lg font-semibold text-white transition hover:opacity-90"
  >
    {loading ? "Gerando..." : "Gerar Vídeo"}
  </button>

</div>

{loading && (
  <p className="mt-6 text-center text-sm text-violet-600">
    Gerando vídeo... isso pode levar até 1 minuto.
  </p>
)}
<h2 className="mt-8 text-xl font-bold text-zinc-900">
  Seus vídeos gerados
</h2>

<p className="mb-6 mt-2 text-zinc-500">
  Seus vídeos aparecerão aqui após a geração.
</p>
        {/* Upload */}

        {/* Prompt */}

        {/* Botão */}

        {/* Loading */}

        {/* Vídeo gerado */}

        {videoUrl && (
          <video
            controls
            className="w-full rounded-2xl border border-zinc-800"
            src={videoUrl}
          />
        )}

        {/* Seus vídeos gerados */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {videos.map((video) => (
            <video
              key={video.id}
              controls
              className="aspect-video rounded-2xl border border-zinc-700 object-cover"
              src={video.video_url}
            />
          ))}
        </div>

      </div>
    </div>
  </section>
);
         
  
}
