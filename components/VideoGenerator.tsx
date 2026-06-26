"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";

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

} catch (error) {
  console.log(error);
}
      
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <div className="w-full text-white p-8">
      <h1 className="text-5xl font-bold mb-2">🎬 Vídeo IA</h1>

      <p className="text-zinc-400 mb-8">
        Crie vídeos incríveis com inteligência artificial.
      </p>




      <div className="flex gap-3 mb-8 flex-wrap">

        
       
    
    
        

        {/* IMAGEM -> VIDEO */}
        <button
          className="
    flex items-center justify-between
    w-[290px]
    h-14
    px-5
    rounded-2xl
    border
    border-zinc-800
    bg-zinc-900/60
    hover:border-purple-500/50
    transition
    "
        >
          <div className="flex items-center gap-3">
            <ImageIcon size={16} className="text-blue-400" />
            <span>Imagem para Vídeo</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
              BUSINESS
            </span>

            <Lock size={14} className="text-zinc-500" />
          </div>
        </button>

        {/* VIDEO -> VIDEO */}
        <button
          className="
    flex items-center justify-between
    w-[290px]
    h-14
    px-5
    rounded-2xl
    border
    border-zinc-800
    bg-zinc-900/60
    hover:border-purple-500/50
    transition
    "
        >
          <div className="flex items-center gap-3">
            <Clapperboard size={16} className="text-purple-400" />
            <span>Vídeo para Vídeo</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
              BUSINESS
            </span>

            <Lock size={14} className="text-zinc-500" />
          </div>
        </button>

      </div>

      <div>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Transforme uma imagem em vídeo
          </h2>

           
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Descreva o vídeo..."
            className="w-full h-28 bg-zinc-950 border border-zinc-800 rounded-2xl p-5"
          />


          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          



              <div>
                <h3 className="text-lg font-semibold mb-3">
                  ⏱ Duração
                </h3>

                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-xl bg-purple-600">5s</button>
                  <button className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800">10s</button>
                  <button className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800">15s</button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  🎥 Resolução
                </h3>

                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-xl bg-purple-600">720p</button>
                  <button className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800">1080p</button>
                </div>
              </div>


              <div className="border border-zinc-800 rounded-2xl p-4">
  <p className="font-semibold mb-3">
    📸 Upload de Imagem
  </p>

  <input
    type="file"
    accept="image/*"
    onChange={(e) => setFile(e.target.files?.[0] || null)}
    className="w-full text-sm text-zinc-400
      file:mr-4
      file:px-4
      file:py-2
      file:rounded-xl
      file:border-0
      file:bg-purple-600
      file:text-white
      hover:file:bg-purple-500"
  />
  </div>
 </div>
</div>


          <button
            onClick={generateVideo}
            className="mt-2 bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-2xl font-bold"
          >
            {loading ? "Gerando..." : "Gerar Vídeo IA"}
          </button>

          {loading && (
          <div className="mt-4 text-purple-400">
          Gerando vídeo... isso pode levar até 1 minuto.
        </div>
)}


          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-2">
              Seus vídeos gerados
            </h2>
          </div>
          <p className="text-zinc-500 mb-6">
            Seus vídeos aparecerão aqui após a geração.
          </p>
          {videoUrl && (
  <video
    controls
    className="w-full rounded-2xl border border-zinc-800"
    src={videoUrl}
  />
)}
        </div>


                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="aspect-video rounded-2xl bg-zinc-800 border border-zinc-700"></div>
          <div className="aspect-video rounded-2xl bg-zinc-800 border border-zinc-700"></div>
          <div className="aspect-video rounded-2xl bg-zinc-800 border border-zinc-700"></div>
          <div className="aspect-video rounded-2xl bg-zinc-800 border border-zinc-700"></div>
        </div>

      </div>
    

  );
}
