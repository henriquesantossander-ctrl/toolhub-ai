export default function Home() {
  const examples = [
    {
      title: "Cyberpunk",
      image: "/examples/cyber-after.png",
      prompt: "Transforme essa foto em cyberpunk neon cinematográfico",
    },
    {
      title: "Fantasy",
      image: "/examples/fantasy-after.png",
      prompt: "Transforme essa foto em guerreira medieval fantasy",
    },
    {
      title: "Hero",
      image: "/examples/hero-after.png",
      prompt: "Transforme essa foto em super herói realista",
    },
    {
      title: "Cartoon",
      image: "/examples/cartoon-after.png",
      prompt: "Transforme essa foto em cartoon 3D Pixar",
    },
  ];

  return (
    <main className="min-h-screen bg-[#070707] text-white flex overflow-hidden">

      {/* SIDEBAR */}
      <aside className="w-[210px] border-r border-white/5 bg-black/40 backdrop-blur-xl p-5 hidden lg:flex flex-col">

        <h1 className="text-3xl font-black mb-8">
          ToolHub <span className="text-purple-500">IA</span>
        </h1>

        <div className="space-y-3">

          <a href="/">
            <button className="w-full text-left bg-purple-600 hover:bg-purple-500 transition px-4 py-3 rounded-2xl font-bold">
              ✨ Gerador IA
            </button>
          </a>

          <a href="/video-ai">
            <button className="w-full text-left bg-zinc-900 hover:bg-zinc-800 transition px-4 py-3 rounded-2xl">
              🎬 Vídeo IA
            </button>
          </a>

          <a href="/anime-ai">
            <button className="w-full text-left bg-zinc-900 hover:bg-zinc-800 transition px-4 py-3 rounded-2xl">
              🖼️ Anime IA
            </button>
          </a>

          <a href="/business">
            <button className="w-full text-left bg-zinc-900 hover:bg-zinc-800 transition px-4 py-3 rounded-2xl">
              🚀 Business
            </button>
          </a>

        </div>

      </aside>

      {/* CONTEÚDO */}
      <section className="flex-1 p-6">

        <div className="max-w-5xl mx-auto">

          {/* HEADER */}
          <div className="mb-6">

            <h1 className="text-3xl font-bold">
              Gerador de Imagens com IA
            </h1>

            <p className="text-zinc-500 text-sm mt-2">
              Crie imagens incríveis em segundos usando IA.
            </p>

          </div>

          {/* BOX PRINCIPAL */}
          <div className="bg-[#111111] border border-white/10 rounded-[32px] p-5">

            {/* TABS */}
            <div className="flex gap-3 mb-5">

              <button className="bg-purple-600 px-4 py-3 rounded-xl font-bold">
                Imagem para Imagem
              </button>

              <button className="bg-zinc-900 px-5 py-3 rounded-xl">
                Texto para Imagem
              </button>

            </div>

            {/* UPLOAD */}
            <div className="border-2 border-dashed border-white/10 rounded-3xl p-8 text-center bg-black/30">

              <p className="text-zinc-400 text-base">
                Clique ou solte uma imagem aqui
              </p>

              <button className="mt-4 bg-zinc-900 hover:bg-zinc-800 px-6 py-3 rounded-xl transition">
                Selecionar imagem
              </button>

            </div>

            {/* PROMPT */}
            <textarea
              placeholder="Descreva sua imagem..."
              className="w-full h-[120px] bg-black/40 border border-white/10 rounded-3xl p-5 mt-5 outline-none resize-none text-base"
            />

            {/* BOTÃO */}
            <button className="w-full mt-5 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:scale-[1.01] transition py-4 rounded-2xl font-black text-lg shadow-[0_0_50px_rgba(168,85,247,0.35)]">
              ✨ GERAR COM IA
            </button>

          </div>

          {/* EXEMPLOS */}
          <div className="mt-8">

            <h2 className="text-2xl font-black mb-5">
              Exemplos prontos
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {examples.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#111111] border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition cursor-pointer"
                >

                  <img
                    src={item.image}
                    className="h-[180px] w-full object-cover"
                  />

                  <div className="p-4">

                    <h3 className="text-xl font-black">
                      {item.title}
                    </h3>

                    <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                      {item.prompt}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}