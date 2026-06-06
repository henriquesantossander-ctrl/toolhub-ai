export default function Home() {
  const styles = [
    ["Cyberpunk", "/examples/cyber-before.png", "/examples/cyber-after.png"],
    ["Fantasy", "/examples/fantasy-before.png", "/examples/fantasy-after.png"],
    ["Hero", "/examples/hero-before.png", "/examples/hero-after.png"],
    ["Cartoon", "/examples/cartoon-before.png", "/examples/cartoon-after.png"],
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative min-h-screen flex items-center px-6 pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#7c3aed55,transparent_35%),radial-gradient(circle_at_20%_80%,#db277755,transparent_30%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center relative z-10">
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-purple-300 font-bold">
              ✨ Transformação com IA
            </div>

            <h1 className="mt-7 text-6xl md:text-8xl font-black leading-[0.9]">
              Crie imagens
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                cinematográficas
              </span>
              em segundos.
            </h1>

            <p className="mt-7 text-xl text-zinc-300 max-w-xl">
              Transforme fotos comuns em artes incríveis com estilos Fantasy,
              Cyberpunk, Hero e Cartoon.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="/premium"
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 font-black shadow-2xl shadow-purple-700/40 hover:scale-105 transition"
              >
                TESTAR AGORA
              </a>

              <a
                href="#exemplos"
                className="px-10 py-5 rounded-2xl bg-white/10 border border-white/10 font-black backdrop-blur-xl hover:bg-white/20 transition"
              >
                Ver exemplos
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {["50K+ imagens", "10K+ usuários", "99.9% satisfação", "IA premium"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/10 border border-white/10 p-4 backdrop-blur-xl"
                  >
                    <p className="font-black text-xl">{item.split(" ")[0]}</p>
                    <p className="text-zinc-400 text-sm">{item.replace(item.split(" ")[0], "")}</p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-purple-600/40 blur-[120px]" />

            <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src="/examples/fantasy-before.png"
                    className="h-[720px] w-full object-cover"
                  />
                  <span className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-black/70 font-black">
                    ANTES
                  </span>
                </div>

                <div className="relative">
                  <img
                    src="/examples/fantasy-after.png"
                    className="h-[560px] w-full object-cover"
                  />
                  <span className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-purple-600 font-black">
                    DEPOIS
                  </span>
                </div>
              </div>

              <div className="absolute inset-y-0 left-1/2 w-[3px] bg-white/60">
                <div className="absolute top-1/2 -translate-y-1/2 -left-6 w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-2xl">
                  ↔
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="exemplos" className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-black tracking-widest">EXEMPLOS REAIS</p>
          <h2 className="text-5xl md:text-7xl font-black mt-4">
            Escolha seu estilo
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {styles.map(([title, before, after]) => (
            <div
              key={title}
              className="group rounded-[32px] overflow-hidden bg-white/10 border border-white/10 backdrop-blur-xl hover:border-purple-500/60 transition"
            >
              <div className="grid grid-cols-2">
                <img src={before} className="h-[420px] w-full object-cover" />
                <img src={after} className="h-[420px] w-full object-cover" />
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

