"use client";

import { useState } from "react";
import { ArrowRight, Wand2, X } from "lucide-react";


export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState("");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  
  

  async function generateImage() {
    // Verifica se há um prompt ou imagens enviadas antes de prosseguir
    if (!prompt.trim() && uploadedImages.length === 0) {
      alert("Digite uma descrição ou envie uma imagem.");
      return;
    }

    setLoading(true);
    setGeneratedImage("");

    try {
      const formData = new FormData();

      formData.append("prompt", prompt);

      uploadedFiles.forEach((file) => {
        formData.append("images", file);
      });

      // Chamada à API para gerar a imagem
      const response = await fetch("/api/business-image", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      const data = JSON.parse(text);

      // Verifica se a resposta da API foi bem-sucedida
      if (!response.ok) {
        throw new Error(data.error || "Erro ao gerar imagem");
      }

      setGeneratedImage(data.image);
    } catch (error) {
      console.error("ERRO COMPLETO:", error);

      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert(String(error));
      }
    } finally {
      setLoading(false);
    }
  }

  /**
   * Lida com o upload de arquivos de imagem.
   * Cria URLs de objeto para visualização e armazena os arquivos.
   * @param files - Lista de arquivos File a serem enviados.
   */
  function handleUpload(files: FileList | null) {
    if (!files) return;

    const fileArray = Array.from(files);

    const previews = fileArray.map((file) => URL.createObjectURL(file));

    setUploadedImages((prev) => [...prev, ...previews]);
    setUploadedFiles((prev) => [...prev, ...fileArray]);
  }

  /**
   * Remove uma imagem enviada e seu arquivo correspondente pelo índice.
   * @param index - O índice da imagem a ser removida.
   */
  function removeImage(index: number) {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="relative w-full text-white">
      

      <section className="relative z-10 mx-auto mt-2 w-full max-w-5xl px-6">
        <div className="rounded-[36px] bg-transparent p-0 shadow-none">

        <div className="rounded-[36px] border border-white/30 bg-white/95 backdrop-blur-xl p-8 shadow-[0_25px_80px_rgba(0,0,0,.30)]">
          
         
          
            <textarea
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
  placeholder="Descreva a imagem que você deseja criar..."
  className="h-36 w-full resize-none rounded-2xl border border-zinc-200 bg-white p-5 text-lg text-zinc-900 outline-none placeholder:text-zinc-400"
/>

            {uploadedImages.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {uploadedImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
                  >
                    <img
                      src={image}
                      alt="Imagem enviada"
                      className="h-full w-full object-cover"
                    />

                    <button
                      onClick={() => removeImage(index)}
                      className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/70 text-white"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
                  <div className="mt-6 flex justify-center">

  <button
  onClick={generateImage}
  disabled={loading}
  className="flex h-[60px] items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 font-semibold text-white transition hover:opacity-90"
>
  {loading ? "Criando..." : "Gerar imagem"}
</button>

</div>

</div> {/* rounded-[28px] */}

</div> {/* rounded-[36px] */}

</section>

      {(loading || generatedImage) && (
        <section className="relative z-10 max-w-4xl mx-auto px-6 pt-10">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-4">
            {loading && (
              <div className="flex h-[420px] flex-col items-center justify-center rounded-[24px] bg-black/30 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04]">
                  <Wand2 className="h-7 w-7 animate-pulse text-blue-400" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  Criando sua imagem
                </h3>

                <p className="mt-2 text-zinc-500">
                  Preparando uma composição visual premium.
                </p>
              </div>
            )}

            {!loading && generatedImage && (
              <div className="animate-[fadeIn_0.5s_ease]">
                <div className="flex justify-center rounded-[24px] bg-black/30 p-5">
                  <img
                    src={generatedImage}
                    alt="Imagem gerada"
                    className="max-h-[650px] max-w-full rounded-2xl object-contain"
                  />
                </div>

                <div className="mt-4 flex flex-col gap-3 md:flex-row md:justify-center">
                                    <button
  onClick={() => {
    if (!generatedImage) return;

    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = `toolhubia-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="h-12 rounded-2xl bg-white px-6 font-semibold text-black transition hover:scale-[1.02]"
>
  Download
</button>
                  <button
                    onClick={generateImage}
                    className="h-12 rounded-2xl border border-white/10 bg-white/[0.04] px-6 font-semibold text-white transition hover:bg-white/[0.08]"
                  >
                    Gerar novamente
                  </button>

                </div>
              </div>
            )}
          </div>
        </section>
      )}


      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}