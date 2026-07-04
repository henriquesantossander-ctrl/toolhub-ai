"use client";

import { useState } from "react";

function PhotoEditorPage() {
const [prompt, setPrompt] = useState("");
const [imagePreview, setImagePreview] = useState("");
const [imageFile, setImageFile] = useState<File | null>(null);
const [generatedImage, setGeneratedImage] = useState("");
const [loading, setLoading] = useState(false);

async function editImage() {
if (!imageFile) {
alert("Envie uma imagem.");
return;
}


if (!prompt.trim()) {
  alert("Descreva a alteração desejada.");
  return;
}

setLoading(true);

try {
  const formData = new FormData();

  formData.append("image", imageFile);
  formData.append("prompt", prompt);

  const response = await fetch("/api/photo-editor", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Erro ao editar imagem");
  }

  setGeneratedImage(data.image);
} catch (error) {
  console.error(error);
  alert("Erro ao editar imagem.");
} finally {
  setLoading(false);
}


}

function handleUpload(file: File | null) {
if (!file) return;


setImageFile(file);
setImagePreview(URL.createObjectURL(file));


}

return ( <div className="relative w-full text-white">
     
      <section className="relative z-10 mx-auto -mt-10 w-full max-w-6xl px-6">
  <div className="rounded-[36px] bg-transparent p-0 shadow-none">
    <div className="rounded-[36px] border border-white/30 bg-white/95 backdrop-blur-xl pt-10 px-10 pb-4 shadow-[0_25px_80px_rgba(0,0,0,.30)]">
     <h3 className="mb-5 text-lg font-semibold text-zinc-900">
      1. Envie sua imagem
     </h3>
     <div className="grid gap-4 md:grid-cols-2">
    
    <label className="mb-6 flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-50 transition hover:bg-zinc-100">

  <span className="text-lg font-semibold text-zinc-700">
    Clique para enviar uma foto
  </span>

  <span className="mt-2 text-sm text-zinc-500">
    JPG, PNG ou WEBP
  </span>

  <input
    type="file"
    accept="image/*"
    onChange={(e) => handleUpload(e.target.files?.[0] || null)}
    className="hidden"
  />

</label>


   <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">

  {imagePreview ? (
    <>
      <img
        src={imagePreview}
        alt="Preview"
        className="h-full w-full object-cover"
      />

      <button
        onClick={() => {
          setImageFile(null);
          setImagePreview("");
        }}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white"
      >
        ✕
      </button>
    </>
  ) : (
    <span className="text-zinc-400">
      Pré-visualização
    </span>
  )}

</div>

</div>
    <textarea
     placeholder="2. Descreva a alteração desejada..."
     value={prompt}
     onChange={(e) => setPrompt(e.target.value)}
     className="h-32 w-full resize-none rounded-2xl border border-zinc-200 bg-white p-5 text-lg text-zinc-900 outline-none placeholder:text-zinc-400"
   />

    <div className="mt-6 flex justify-center">

    <button
      onClick={editImage}
      disabled={loading}
      className="mx-auto flex h-[60px] w-[320px] items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 font-semibold text-white transition hover:opacity-90"
    >
      {loading ? "Transformando..." : "Transformar Foto"}
    </button>
    </div>

    {generatedImage && (
      <div className="mt-10">
        <img
          src={generatedImage}
          alt="Resultado"
          className="rounded-2xl"
        />
      </div>
    )}
  
    
    </div>
  </div>
</section>



</div>

);
}
export default PhotoEditorPage;
