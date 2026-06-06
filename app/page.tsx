
export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#2a0040,black_60%)] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 pt-40 pb-32 max-w-7xl mx-auto">

        {/* GLOW */}
        <div className="absolute inset-0 bg-purple-600/20 blur-[120px]" />

        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT */}
          <div>

            {/* BADGE */}
            <span className="bg-purple-600/20 text-purple-400 px-5 py-2 rounded-full text-sm border border-purple-500/20 font-semibold">
              ✨ CINEMATIC AI
            </span>

            {/* TITLE */}
            <h1 className="text-[88px] leading-[0.95] font-black mt-8">
              Transforme suas fotos em cenas{" "}
              <span className="text-purple-500">
                cinematográficas
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-zinc-400 text-xl mt-8 leading-relaxed max-w-xl">
              A IA mais avançada para transformar qualquer imagem
              em arte profissional em segundos.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-500/30">
                TESTAR AGORA
              </button>

              <button className="border border-zinc-700 hover:border-purple-500 transition px-8 py-5 rounded-2xl font-bold text-lg">
                Ver exemplos
              </button>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 backdrop-blur-xl">

              <div>
                <h3 className="text-3xl font-black text-white">
                  50K+
                </h3>

                <p className="text-zinc-400 mt-2">
                  Imagens criadas
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-white">
                  10K+
                </h3>

                <p className="text-zinc-400 mt-2">
                  Usuários ativos
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-white">
                  99.9%
                </h3>

                <p className="text-zinc-400 mt-2">
                  Satisfação
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-white">
                  IA
                </h3>

                <p className="text-zinc-400 mt-2">
                  Tecnologia avançada
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            {/* GLOW */}
            <div className="absolute inset-0 bg-purple-600/30 blur-[120px] rounded-full" />

            <div className="relative w-full max-w-5xl rounded-[40px] overflow-hidden border border-zinc-800 shadow-2xl">

              {/* BEFORE / AFTER */}
              <div className="grid grid-cols-2">

                {/* BEFORE */}
                <div className="relative">

                  <img
                    src="/examples/fantasy-before.png"
                    className="w-full h-[700px] object-cover"
                  />

                  <div className="absolute top-5 left-5 bg-black/70 backdrop-blur px-4 py-2 rounded-xl text-sm font-bold">
                    ANTES
                  </div>

                </div>

                {/* AFTER */}
                <div className="relative">

                  <img
                    src="/examples/fantasy-after.png"
                    className="w-full h-[700px] object-cover"
                  />

                  <div className="absolute top-5 right-5 bg-purple-600 px-4 py-2 rounded-xl text-sm font-bold">
                    DEPOIS
                  </div>

                </div>

              </div>

              {/* DIVIDER */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/40">

                <div className="absolute top-1/2 -translate-y-1/2 -left-5 bg-black border border-white/20 w-12 h-12 rounded-full flex items-center justify-center text-2xl">
                  ↔
                </div>

              </div>

              {/* REVIEW */}
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

        </div>

      </section>

      {/* EXAMPLES */}
      <section className="max-w-7xl mx-auto px-6 pb-40">

        <div className="text-center mb-16">

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD */}
          {[
            {
              before: "/examples/cyber-before.png",
              after: "/examples/cyber-after.png",
              title: "🤖 Cyberpunk",
            },

            {
              before: "/examples/fantasy-before.png",
              after: "/examples/fantasy-after.png",
              title: "🏰 Fantasy",
            },

            {
              before: "/examples/hero-before.png",
              after: "/examples/hero-after.png",
              title: "🦸 Hero",
            },

            {
              before: "/examples/cartoon-before.png",
              after: "/examples/cartoon-after.png",
              title: "🎨 Cartoon",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 hover:border-purple-500/50 transition duration-300 shadow-xl"
            >

              <div className="grid grid-cols-2">
                <img src={item.before} />
                <img src={item.after} />
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-14">

          <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition px-10 py-4 rounded-2xl font-bold text-lg shadow-xl">
            VER MAIS EXEMPLOS →
          </button>

        </div>

      </section>

    </main>
  );
}

