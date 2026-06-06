export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#14001f] to-black text-white overflow-hidden">
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
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-500/30">
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
<div className="relative flex justify-center">
  {/* Glow */}
  <div className="absolute inset-0 bg-purple-600/30 blur-[120px] rounded-full" />

  <div className="relative w-full max-w-3xl rounded-[40px] overflow-hidden border border-zinc-800 shadow-2xl">

    {/* BEFORE/AFTER */}
    <div className="grid grid-cols-2">

      {/* BEFORE */}
      <div className="relative">
        <img
          src="/examples/fantasy-before.png"
          className="w-full h-[650px] object-cover"
        />

        <div className="absolute top-5 left-5 bg-black/70 backdrop-blur px-4 py-2 rounded-xl text-sm font-bold">
          ANTES
        </div>
      </div>

      {/* AFTER */}
      <div className="relative">
        <img
          src="/examples/fantasy-after.png"
          className="w-full h-[650px] object-cover"
        />

        <div className="absolute top-5 right-5 bg-purple-600 px-4 py-2 rounded-xl text-sm font-bold">
          DEPOIS
        </div>
      </div>
    </div>

    {/* DIVISOR */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/40">
      <div className="absolute top-1/2 -translate-y-1/2 -left-5 bg-black border border-white/20 w-12 h-12 rounded-full flex items-center justify-center text-2xl">
        ↔
      </div>
    </div>

    {/* REVIEW CARD */}
    <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-xl border border-zinc-700 rounded-2xl px-5 py-4">
      <div className="flex items-center gap-2 text-yellow-400 text-xl">
        ⭐⭐⭐⭐⭐
      </div>

      <div className="text-white font-bold text-xl mt-1">
        4.9/5
      </div>

      <p className="text-zinc-400 text-sm">
        Baseado em 2.534 avaliações
      </p>
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
    <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 hover:border-purple-500/50 transition duration-300 shadow-xl">
      <div className="grid grid-cols-2">
        <img src="/examples/cyber-before.png" />
        <img src="/examples/cyber-after.png" />
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-bold">
          🤖 Cyberpunk
        </h3>
      </div>
    </div>

    {/* FANTASY */}
    <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 hover:border-purple-500/50 transition duration-300 shadow-xl">
      <div className="grid grid-cols-2">
        <img src="/examples/fantasy-before.png" />
        <img src="/examples/fantasy-after.png" />
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-bold">
          🏰 Fantasy
        </h3>
      </div>
    </div>

    {/* HERO */}
    <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 hover:border-purple-500/50 transition duration-300 shadow-xl">
      <div className="grid grid-cols-2">
        <img src="/examples/hero-before.png" />
        <img src="/examples/hero-after.png" />
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-bold">
          🦸 Hero
        </h3>
      </div>
    </div>

    {/* CARTOON */}
    <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 hover:border-purple-500/50 transition duration-300 shadow-xl">
      <div className="grid grid-cols-2">
        <img src="/examples/cartoon-before.png" />
        <img src="/examples/cartoon-after.png" />
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