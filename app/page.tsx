export default function Home() {
  const styles = [
    ["Cyberpunk", "/examples/cyber-before.png", "/examples/cyber-after.png"],
    ["Fantasy", "/examples/fantasy-before.png", "/examples/fantasy-after.png"],
    ["Hero", "/examples/hero-before.png", "/examples/hero-after.png"],
    ["Cartoon", "/examples/cartoon-before.png", "/examples/cartoon-after.png"],
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
     ```tsx
    <section className="relative w-full px-10 pt-8 pb-10 overflow-hidden">

  {/* BG */}
  <div className="absolute inset-0 bg-purple-600/10 blur-[160px]" />

  <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 min-h-[78vh]">

    {/* LEFT */}
    <div className="max-w-[760px]">

      <span className="inline-flex items-center gap-2 bg-zinc-900 border border-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
        ✨ Transformação com IA
      </span>

      <h1 className="text-[88px] leading-[0.92] font-black mt-6">
        Crie imagens
        <span className="block bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
          cinematográficas
        </span>
        em segundos.
      </h1>

      <p className="text-zinc-400 text-xl mt-6 max-w-[620px] leading-relaxed">
        Transforme fotos comuns em artes incríveis com estilos Fantasy,
        Cyberpunk, Hero e Cartoon.
      </p>

      {/* BUTTONS */}
      <div className="flex gap-5 mt-8">

        <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:scale-105 transition px-10 py-5 rounded-2xl font-black text-lg shadow-[0_0_60px_rgba(168,85,247,0.45)]">
          TESTAR AGORA
        </button>

        <button className="bg-zinc-900 border border-zinc-800 hover:border-purple-500/40 transition px-10 py-5 rounded-2xl font-black text-lg">
          Ver exemplos
        </button>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-4 mt-10">

        <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-5 backdrop-blur-xl">
          <h3 className="text-3xl font-black">50K+</h3>
          <p className="text-zinc-500 text-sm mt-1">Imagens</p>
        </div>

        <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-5 backdrop-blur-xl">
          <h3 className="text-3xl font-black">10K+</h3>
          <p className="text-zinc-500 text-sm mt-1">Usuários</p>
        </div>

        <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-5 backdrop-blur-xl">
          <h3 className="text-3xl font-black">99.9%</h3>
          <p className="text-zinc-500 text-sm mt-1">Satisfação</p>
        </div>

        <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-5 backdrop-blur-xl">
          <h3 className="text-3xl font-black">IA</h3>
          <p className="text-zinc-500 text-sm mt-1">Premium</p>
        </div>

      </div>

    </div>

    {/* RIGHT */}
    <div className="flex justify-end">

      <div className="relative w-[520px] h-[760px] rounded-[42px] overflow-hidden border border-white/10 shadow-2xl">

        {/* BEFORE */}
        <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
          <img
            src="/examples/fantasy-before.png"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-6 left-6 bg-black/80 px-5 py-2 rounded-2xl text-sm font-black">
            ANTES
          </div>
        </div>

        {/* AFTER */}
        <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
          <img
            src="/examples/fantasy-after.png"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-6 right-6 bg-purple-600 px-5 py-2 rounded-2xl text-sm font-black">
            DEPOIS
          </div>
        </div>

        {/* DIVIDER */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/20">

          <div className="absolute top-1/2 -translate-y-1/2 -left-6 w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center text-2xl">
            ↔
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      <section id="exemplos" className="w-full px-10 pb-16 pt-6">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-black tracking-widest">EXEMPLOS REAIS</p>
          <h2 className="text-5xl md:text-7xl font-black mt-4">
            Escolha seu estilo
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {styles.map(([title, before, after]) => (
            <div
              key={title}
              className="group rounded-[32px] overflow-hidden bg-white/10 border border-white/10 backdrop-blur-xl hover:border-purple-500/60 transition"
            >
              <div className="grid grid-cols-2">
                <img src={before} className="h-[260px] w-full object-cover" />
                <img src={after} className="h-[260px] w-full object-cover" />
              </div>
              <div className="p-7 flex items-center justify-between">
                <h3 className="text-3xl font-black">{title}</h3>
                <span className="text-purple-400 font-black group-hover:translate-x-2 transition">
                  Gerar →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

