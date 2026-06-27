"use client";

import { useState } from "react";
import { ArrowRight, Wand2, X } from "lucide-react";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState("");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const showcase = [
    {
      title: "Produto premium",
      desc: "Fotografia comercial com fundo escuro",
      image: "/examples/cyber-after.png",
      prompt: "Produto tecnológico premium em fundo escuro, iluminação cinematográfica, fotografia comercial",
    },
    {
      title: "Retrato cinematográfico",
      desc: "Luz suave e aparência profissional",
      image: "/examples/hero-after.png",
      prompt: "Retrato cinematográfico profissional, luz suave, fundo minimalista, ultra realista",
    },
    {
      title: "Fantasia realista",
      desc: "Arte conceitual de alto impacto",
      image: "/examples/fantasy-after.png",
      prompt: "Arte conceitual fantasy realista, iluminação dramática, detalhes premium, composição épica",
    },
    {
      title: "Cartoon 3D",
      desc: "Personagem estilizado profissional",
      image: "/examples/cartoon-after.png",
      prompt: "Personagem cartoon 3D profissional, render premium, luz de estúdio, fundo limpo",
    },
  ];

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

      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          ToolHub IA Studio
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-red-500">
          
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Gere, transforme e refine imagens com IA em uma interface limpa,
          rápida e visual.
        </p>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_80px_rgba(255,255,255,0.04)] p-4">
          <div className="rounded-[24px] border border-white/10 bg-black/30 p-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Descreva a imagem que você quer criar ou envie imagens como referência..."
              className="h-[40px] w-full resize-none bg-transparent outline-none text-lg text-zinc-100 placeholder:text-zinc-600"
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
              <div className="flex flex-wrap items-center gap-3">      

              </div>

              <button
                onClick={generateImage}
                disabled={loading}
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-6 font-semibold text-black transition hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? "Criando..." : "Gerar imagem"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
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
                  <button className="h-12 rounded-2xl bg-white px-6 font-semibold text-black transition hover:scale-[1.02]">
                    Download
                  </button>

                  <button
                    onClick={generateImage}
                    className="h-12 rounded-2xl border border-white/10 bg-white/[0.04] px-6 font-semibold text-white transition hover:bg-white/[0.08]"
                  >
                    Gerar novamente
                  </button>

                  <button className="h-12 rounded-2xl border border-blue-500/30 bg-blue-500/10 px-6 font-semibold text-blue-200 transition hover:bg-blue-500/20">
                    Upscale HD
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