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
    <main className="min-h-screen bg-[#070707] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-[260px] border-r border-white/5 bg-black/40 backdrop-blur-xl p-6 hidden lg:flex flex-col">

        <h1 className="text-3xl font-black mb-10">
          ToolHub <span className="text-purple-500">IA</span>
        </h1>

        <div className="space-y-3">

          <button className="w-full text-left bg-purple-600 hover:bg-purple-500 transition px-5 py-4 rounded-2xl font-bold">
            ✨ Gerador IA
          </button>

          <button className="w-full text-left bg-zinc-900 hover:bg-zinc-800 transition px-5 py-4 rounded-2xl">
            🎬 Vídeo IA
          </button>

          <button className="w-full text-left bg-zinc-900 hover:bg-zinc-800 transition px-5 py-4 rounded-2xl">
            🖼️ Anime IA
          </button>

          <button className="w-full text-left bg-zinc-900 hover:bg-zinc-800 transition px-5 py-4 rounded-2xl">
            🚀 Business
          </button>

        </div>

      </aside>

      {/* CENTER */}
      <section className="flex-1 p-8">

        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <div className="mb-10">

            <h1 className="text-6xl font-black leading-tight max-w-3xl">
              Crie imagens cinematográficas com IA
            </h1>

            <p className="text-zinc-400 text-xl mt-5">
              Digite um prompt ou envie uma imagem.
            </p>

          </div>

          {/* GENERATOR */}
          <div className="bg-[#111111] border border-white/10 rounded-[32px] p-6">

            {/* TABS */}
            <div className="flex gap-3 mb-6">

              <button className="bg-purple-600 px-5 py-3 rounded-xl font-bold">
                Imagem para Imagem
              </button>

              <button className="bg-zinc-900 px-5 py-3 rounded-xl">
                Texto para Imagem
              </button>

            </div>

            {/* UPLOAD */}
            <div className="border-2 border-dashed border-white/10 rounded-3xl p-12 text-center bg-black/30">

              <p className="text-zinc-400 text-lg">
                Clique ou solte uma imagem aqui
              </p>

              <button className="mt-5 bg-zinc-900 hover:bg-zinc-800 px-6 py-3 rounded-xl">
                Selecionar imagem
              </button>

            </div>

            {/* PROMPT */}
            <textarea
              placeholder="Descreva sua imagem..."
              className="w-full h-[180px] bg-black/40 border border-white/10 rounded-3xl p-6 mt-6 outline-none resize-none text-lg"
            />

            {/* BUTTON */}
            <button className="w-full mt-6 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:scale-[1.02] transition py-5 rounded-2xl font-black text-xl shadow-[0_0_60px_rgba(168,85,247,0.35)]">
              ✨ GERAR COM IA
            </button>

          </div>

          {/* EXAMPLES */}
          <div className="mt-10">

            <h2 className="text-3xl font-black mb-6">
              Exemplos prontos
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

              {examples.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#111111] border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition cursor-pointer"
                >

                  <img
                    src={item.image}
                    className="h-[220px] w-full object-cover"
                  />

                  <div className="p-5">

                    <h3 className="text-2xl font-black">
                      {item.title}
                    </h3>

                    <p className="text-zinc-500 text-sm mt-2">
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
