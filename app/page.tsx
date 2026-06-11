
"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState("");
  const [mode, setMode] = useState("text");
  const [uploadedImage, setUploadedImage] = useState("");

  const examples = [
    {
      title: "Cyberpunk",
      desc: "Cidade futurista neon",
      image: "/examples/cyber-after.png",
    },
    {
      title: "Fantasy",
      desc: "Guerreira medieval fantasy",
      image: "/examples/fantasy-after.png",
    },
    {
      title: "Anime",
      desc: "Anime cinematográfico",
      image: "/examples/hero-after.png",
    },
    {
      title: "Cartoon 3D",
      desc: "Pixar ultra detalhado",
      image: "/examples/cartoon-after.png",
    },
  ];

        async function generateImage() {

  if (!prompt.trim()) {
    alert("Digite uma descrição.");
    return;
  }

  setLoading(true);

  try {

    const randomImages = [

      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1400&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",

    ];

    const random =
      randomImages[
        Math.floor(Math.random() * randomImages.length)
      ];

    setTimeout(() => {

      setGeneratedImage(random);
      setLoading(false);

    }, 2500);

  } catch (error) {

    console.log(error);
    setLoading(false);

  }
}

  return (
    <main className="min-h-screen bg-[#07070a] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_35%)] pointer-events-none" />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-8 text-center relative z-10">

        <p className="text-purple-400 text-sm font-semibold tracking-[0.25em] uppercase">
          Gerador de imagens IA
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mt-6">

          Inteligência artificial
          <br />

          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
            que transforma ideias
          </span>

          <br />
          em imagens.

        </h1>

        <p className="text-zinc-500 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
          Crie artes cinematográficas, ultra realistas,
          anime e imagens profissionais em segundos.
        </p>

      </section>

      {/* GENERATOR */}
      <section className="max-w-4xl mx-auto px-6 relative z-10">

        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[34px] p-6 shadow-[0_0_80px_rgba(124,58,237,0.08)]">

          {/* TABS */}
          <div className="flex gap-3 mb-5">

            <button
  onClick={() => setMode("text")}
  className={`px-5 py-3 rounded-2xl text-sm font-semibold transition ${
    mode === "text"
      ? "bg-purple-600 text-white"
      : "bg-white/[0.03] border border-white/5 text-zinc-500"
  }`}
>
  Texto para imagem
</button>

<button
  onClick={() => setMode("image")}
  className={`px-5 py-3 rounded-2xl text-sm font-semibold transition ${
    mode === "image"
      ? "bg-purple-600 text-white"
      : "bg-white/[0.03] border border-white/5 text-zinc-500"
  }`}
>
  Imagem para imagem
</button>

          </div>

          {/* TEXTAREA */}
           {mode === "text" ? (
  <textarea
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}
    placeholder="Descreva a imagem que você quer criar..."
    className="w-full h-[180px] bg-black/30 border border-white/10 rounded-3xl p-6 outline-none resize-none text-lg text-zinc-200 placeholder:text-zinc-600"
  />
) : (
  <label className="w-full h-[180px] border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:border-purple-500/40 transition">

    <input
      type="file"
      accept="image/*"
      className="hidden"
      onChange={(e) => {
        const file = e.target.files?.[0];

        if (file) {
          setUploadedImage(URL.createObjectURL(file));
        }
      }}
    />

    {!uploadedImage ? (
      <>
        <span className="text-3xl mb-3">📁</span>
        <p className="text-zinc-400">
          Clique para enviar uma imagem
        </p>
      </>
    ) : (
      <img
        src={uploadedImage}
        className="h-full w-full object-cover rounded-3xl"
      />
    )}
  </label>
)}

          {/* OPTIONS */}
          <div className="grid md:grid-cols-3 gap-4 mt-5">
            <select
            className="appearance-none bg-black/30 border border-white/10 rounded-2xl px-5 h-14 outline-none text-zinc-300">
           </select>

            <select className="bg-black/30 border border-white/10 rounded-2xl px-5 h-14 outline-none text-zinc-300">
              <option>Realista</option>
              <option>Cinematográfico</option>
              <option>Anime</option>
              <option>Cyberpunk</option>
              <option>Fantasy</option>
            </select>

            <select className="bg-black/30 border border-white/10 rounded-2xl px-5 h-14 outline-none text-zinc-300">
              <option>16:9</option>
              <option>1:1</option>
              <option>9:16</option>
            </select>

            <button
              onClick={generateImage}
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:opacity-90 transition rounded-2xl font-bold text-white"
            >
              Gerar imagem ✨
            </button>

          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">

            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
              <h3 className="font-semibold">
                Geração rápida
              </h3>

              <p className="text-zinc-500 text-sm mt-2">
                Resultados em segundos
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
              <h3 className="font-semibold">
                Qualidade profissional
              </h3>

              <p className="text-zinc-500 text-sm mt-2">
                Imagens em alta definição
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
              <h3 className="font-semibold">
                Privado e seguro
              </h3>

              <p className="text-zinc-500 text-sm mt-2">
                Suas imagens pertencem a você
              </p>
            </div>

          </div>

        </div>

      </section>

    
{/* RESULT */}
<div className="mt-8">

  {loading && (

    <div className="relative overflow-hidden h-[520px] rounded-[32px] border border-white/10 bg-[#0b0b0f] flex items-center justify-center">

      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(124,58,237,0.18),transparent_45%)]" />

      <div className="relative z-10 text-center">

        <div className="w-16 h-16 border-[3px] border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" />

        <h3 className="text-2xl font-bold mt-8">
  Criando sua imagem
</h3>

<div className="w-72 h-2 bg-white/10 rounded-full mx-auto mt-6 overflow-hidden">

  <div className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-600 animate-pulse w-2/3" />

</div>

        <p className="text-zinc-500 mt-3">
          A inteligência artificial está criando sua arte...
        </p>

      </div>

    </div>

  )}

  {!loading && generatedImage && (

    <div className="animate-[fadeIn_0.5s_ease]">

      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0f]">

        <img
          src={generatedImage}
          className="w-full h-[620px] object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* buttons */}
        <div className="absolute bottom-6 left-6 flex gap-4">

          <button className="h-12 px-6 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
            Download
          </button>

          <button className="h-12 px-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-white/20 transition">
            Gerar novamente
          </button>

          <button className="h-12 px-6 rounded-2xl bg-purple-600 hover:bg-purple-500 transition font-semibold">
            Upscale HD
          </button>

        </div>

      </div>

    </div>

  )}

</div>



      {/* EXAMPLES */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">

        <div className="flex items-center justify-between mb-10">

          <div>
            <h2 className="text-3xl font-black">
              Exemplos
            </h2>

            <p className="text-zinc-500 mt-2">
              Clique em um exemplo para usar o prompt
            </p>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {examples.map((item) => (

            <div
              key={item.title}
              onClick={() => setPrompt(item.desc)}
              className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/40 transition cursor-pointer"
            >

              <img
                src={item.image}
                className="h-[220px] w-full object-cover"
              />

              <div className="p-5">

                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

                <p className="text-zinc-500 text-sm mt-2">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>
      <style jsx global>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }

    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`}</style>

    </main>
  );
}

