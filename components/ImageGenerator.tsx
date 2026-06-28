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
    <main className="min-h-screen bg-[#08090b] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_28%)]" />



      <section className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-6 shadow-[0_30px_120px_rgba(0,0,0,.45)]">

        <div className="rounded-[28px] bg-black/20 p-6">
          
         
          
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Descreva qualquer imagem que você imaginar..."
              className="min-h-[70px] w-full resize-none bg-transparent outline-none text-xl text-zinc-100 placeholder:text-zinc-600"
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

            <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

      

      <div className="mt-6 flex justify-center">

  <button
    onClick={generateImage}
    disabled={loading}
    className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 font-semibold text-white transition hover:scale-[1.02]"
  >
    {loading ? "Criando..." : "Gerar imagem"}
    <ArrowRight className="h-4 w-4" />
  </button>

   </div> {/* justify-center */}

</div> {/* flex-col */}

</div> {/* rounded-[28px] */}

</div> {/* rounded-[36px] */}

</section>

      {(loading || generatedImage) && (
        <section className="relative z-10 max-w-5xl mx-auto px-6 pt-10">
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
    </main>
  );
}