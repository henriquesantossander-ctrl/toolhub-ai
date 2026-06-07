export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 py-10">

      {/* HERO */}
      <div className="relative overflow-hidden rounded-[28px] border border-purple-500/10 bg-gradient-to-br from-[#12001f] via-[#090909] to-[#1a0030] p-7">

        {/* glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[140px]" />

        <div className="relative z-10 flex items-center gap-8">

          {/* avatar */}
          <div className="relative">
            <div className="w-36 h-36 rounded-full bg-gradient-to-b from-fuchsia-500 to-purple-700 flex items-center justify-center text-3xl font-black shadow-[0_0_80px_rgba(168,85,247,0.5)]">
              H
            </div>

            <button className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-black border border-purple-500/30 flex items-center justify-center text-xl">
              ✎
            </button>
          </div>

          {/* text */}
          <div>
            <span className="bg-purple-500/20 border border-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
              BUSINESS
            </span>

            <h1 className="text-3xl font-black mt-5">
              Olá, Henrique! 👋
            </h1>

            <p className="text-zinc-400 text-xl mt-4 max-w-2xl leading-relaxed">
              Gerencie suas informações, plano e acompanhe suas estatísticas.
            </p>
          </div>
        </div>
      </div>

      {/* INFO */}
      <div className="mt-5 rounded-[35px] border border-white/5 bg-gradient-to-b from-[#111111] to-[#090909] overflow-hidden">

        <div className="flex items-center justify-between px-8 py-4 border-b border-white/5">
          <h2 className="text-2xl font-bold">
            Informações da conta
          </h2>

          <button className="border border-purple-500/30 hover:bg-purple-500/10 transition px-6 py-3 rounded-2xl text-purple-300">
            Editar perfil
          </button>
        </div>

        <div className="grid grid-cols-2 gap-0">

          {/* left */}
          <div className="p-8 border-r border-white/5 space-y-10">

            <div>
              <p className="text-zinc-500">
                E-mail
              </p>

              <h3 className="text-2xl font-bold mt-3">
                henriquesantossander@gmail.com
              </h3>
            </div>

            <div>
              <p className="text-zinc-500">
                Conta criada em
              </p>

              <h3 className="text-2xl font-bold mt-3">
                12 de maio de 2026
              </h3>
            </div>
          </div>

          {/* right */}
          <div className="p-8 flex flex-col justify-center">

            <p className="text-zinc-500">
              Plano atual
            </p>

            <h2 className="text-2xl font-black text-purple-400 mt-3">
              BUSINESS
            </h2>

            <p className="text-zinc-400 mt-4 text-lg">
              Todos os recursos avançados liberados.
            </p>

            <button className="mt-5 w-fit border border-purple-500/30 hover:bg-purple-500/10 transition px-8 py-4 rounded-2xl">
              Ver benefícios →
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-8 mt-8">

        <div className="rounded-[30px] border border-white/5 bg-gradient-to-b from-[#111] to-[#090909] p-6">
          <p className="text-zinc-500">
            Bios geradas
          </p>

          <h2 className="text-2xl font-black mt-5">
            102
          </h2>

          <p className="text-zinc-400 mt-4">
            Conteúdos únicos criados com IA
          </p>
        </div>

        <div className="rounded-[30px] border border-white/5 bg-gradient-to-b from-[#111] to-[#090909] p-6">
          <p className="text-zinc-500">
            Recursos utilizados
          </p>

          <h2 className="text-2xl font-black mt-5">
            100%
          </h2>

          <p className="text-zinc-400 mt-4">
            Aproveite todos os recursos do plano
          </p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="mt-8 rounded-[35px] border border-white/5 bg-gradient-to-b from-[#111] to-[#090909] p-6">

        <h2 className="text-2xl font-bold">
          Acesse seus recursos
        </h2>

        <div className="grid grid-cols-2 gap-8 mt-8">

          <div className="relative overflow-hidden rounded-[30px] border border-white/5 bg-[#0d0d0d] p-6">
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-600/20 blur-[80px]" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold">
                💬 Business Chat
              </h3>

              <p className="text-zinc-400 mt-4 text-lg">
                Converse com IA avançada estilo ChatGPT.
              </p>

              <button className="mt-5 w-14 h-14 rounded-full bg-purple-600 hover:scale-110 transition text-2xl">
                →
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-white/5 bg-[#0d0d0d] p-7">
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-fuchsia-600/20 blur-[80px]" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold">
                🎨 Gerador de Imagens
              </h3>

              <p className="text-zinc-400 mt-4 text-lg">
                Gere imagens realistas com IA.
              </p>

              <button className="mt-5 w-14 h-14 rounded-full bg-fuchsia-600 hover:scale-110 transition text-2xl">
                →
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}