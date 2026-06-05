export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-purple-600/10 blur-[120px]" />

        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT */}
          <div>
            <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm border border-purple-500/20">
              ✨ CINEMATIC AI
            </span>

            <h1 className="text-6xl font-black leading-tight mt-6">
              Transforme suas fotos em cenas{" "}
              <span className="text-purple-500">
                cinematográficas
              </span>
            </h1>

            <p className="text-zinc-400 text-xl mt-6 leading-relaxed">
              A IA mais avançada para transformar qualquer imagem
              em arte profissional em segundos.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-purple-600 hover:bg-purple-500 transition px-8 py-4 rounded-2xl font-bold text-lg">
                TESTAR AGORA
              </button>

              <button className="border border-zinc-700 hover:border-purple-500 transition px-8 py-4 rounded-2xl font-bold text-lg">
                Ver exemplos
              </button>
            </div>

            <div className="flex gap-10 mt-12 text-zinc-400">
              <div>
                <h3 className="text-3xl font-bold text-white">
                  50K+
                </h3>
                <p>Imagens criadas</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  10K+
                </h3>
                <p>Usuários ativos</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  99%
                </h3>
                <p>Satisfação</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute -inset-4 bg-purple-600/20 blur-3xl rounded-full" />

            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img
                src="/hero-before.png"
                className="rounded-3xl border border-zinc-800"
              />

              <img
                src="/hero-after.png"
                className="rounded-3xl border border-zinc-800"
              />

              <img
                src="/fantasy-before.png"
                className="rounded-3xl border border-zinc-800"
              />

              <img
                src="/fantasy-after.png"
                className="rounded-3xl border border-zinc-800"
              />
            </div>
          </div>
        </div>
      </section>
      {/* EXEMPLOS */}
<section className="max-w-7xl mx-auto px-6 pb-24">
  <div className="text-center mb-14">
    <span className="text-purple-400 font-bold uppercase tracking-widest">
      EXEMPLOS REAIS
    </span>

    <h2 className="text-5xl font-black mt-4">
      Veja o poder da nossa IA
    </h2>

    <p className="text-zinc-400 mt-4 text-lg">
      Transforme qualquer foto em algo extraordinário
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* CYBER */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 transition">
      <div className="grid grid-cols-2">
        <img src="/cyber-before.png" />
        <img src="/cyber-after.png" />
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-bold">
          🤖 Cyberpunk
        </h3>
      </div>
    </div>

    {/* FANTASY */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 transition">
      <div className="grid grid-cols-2">
        <img src="/fantasy-before.png" />
        <img src="/fantasy-after.png" />
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-bold">
          🏰 Fantasy
        </h3>
      </div>
    </div>

    {/* HERO */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 transition">
      <div className="grid grid-cols-2">
        <img src="/hero-before.png" />
        <img src="/hero-after.png" />
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-bold">
          🦸 Hero
        </h3>
      </div>
    </div>

    {/* CARTOON */}
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 transition">
      <div className="grid grid-cols-2">
        <img src="/cartoon-before.png" />
        <img src="/cartoon-after.png" />
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-bold">
          🎨 Cartoon
        </h3>
      </div>
    </div>

  </div>
</section>
    </main>
  );
}