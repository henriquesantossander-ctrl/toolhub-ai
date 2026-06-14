"use client";

import { useState } from "react";

export default function PhotoEditorPage() {
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

return ( <main className="min-h-screen bg-black text-white px-6 py-16"> <div className="max-w-3xl mx-auto">


    <h1 className="text-5xl font-bold mb-4 text-center">
      Editor de Fotos IA
    </h1>

    <p className="text-zinc-400 text-center mb-10">
      Envie uma foto e descreva qualquer alteração que deseja fazer.
    </p>

    <input
      type="file"
      accept="image/*"
      onChange={(e) =>
        handleUpload(e.target.files?.[0] || null)
      }
      className="mb-6 w-full"
    />

    {imagePreview && (
      <img
        src={imagePreview}
        alt="Preview"
        className="rounded-2xl mb-6 max-h-[400px] object-cover"
      />
    )}

    <textarea
      placeholder="Ex: coloque óculos escuros, troque o fundo para uma praia..."
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      className="w-full h-32 bg-zinc-900 border border-zinc-700 rounded-2xl p-4 mb-6"
    />

    <button
      onClick={editImage}
      disabled={loading}
      className="bg-white text-black px-8 py-4 rounded-2xl font-bold"
    >
      {loading ? "Transformando..." : "Transformar Foto"}
    </button>

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
</main>


);
}
