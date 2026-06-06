<div className="min-h-screen bg-black text-white px-8 py-10">

  {/* HERO PERFIL */}
  <div className="relative overflow-hidden rounded-[40px] border border-purple-500/20 bg-gradient-to-r from-[#14001f] to-[#1b0030] p-12">

    <div className="absolute inset-0 bg-purple-500/10 blur-[120px]" />

    <div className="relative z-10 flex items-center gap-10">

      {/* FOTO */}
      <div className="w-40 h-40 rounded-full bg-gradient-to-b from-fuchsia-500 to-purple-700 flex items-center justify-center text-7xl font-black shadow-2xl shadow-purple-500/30">
        H
      </div>

      {/* TEXTO */}
      <div>
        <span className="bg-purple-500/20 border border-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
          BUSINESS
        </span>

        <h1 className="text-6xl font-black mt-5">
          Olá, Henrique! 👋
        </h1>

        <p className="text-zinc-400 text-xl mt-4 max-w-2xl">
          Gerencie suas informações, plano e acompanhe suas estatísticas.
        </p>
      </div>
    </div>
  </div>

  {/* GRID */}
  <div className="grid grid-cols-2 gap-8 mt-10">

    {/* CARD */}
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-[30px] p-8 backdrop-blur-xl">
      <p className="text-zinc-500">E-mail</p>

      <h2 className="text-2xl font-bold mt-4">
        henriquesantossander@gmail.com
      </h2>
    </div>

    {/* CARD */}
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-[30px] p-8 backdrop-blur-xl">
      <p className="text-zinc-500">Plano atual</p>

      <h2 className="text-5xl font-black text-purple-400 mt-4">
        BUSINESS
      </h2>
    </div>

    {/* CARD */}
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-[30px] p-8 backdrop-blur-xl">
      <p className="text-zinc-500">Bios geradas</p>

      <h2 className="text-6xl font-black mt-4">
        102
      </h2>
    </div>

    {/* CARD */}
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-[30px] p-8 backdrop-blur-xl">
      <p className="text-zinc-500">Conta criada</p>

      <h2 className="text-4xl font-black mt-4">
        12/05/2026
      </h2>
    </div>
  </div>

  {/* BUSINESS */}
  <div className="mt-10 rounded-[35px] bg-gradient-to-r from-yellow-400 to-yellow-500 p-[1px]">

    <div className="rounded-[35px] bg-black p-10">

      <h2 className="text-5xl font-black text-yellow-400">
        Você é BUSINESS 🚀
      </h2>

      <p className="text-zinc-400 text-xl mt-4">
        Todos os recursos avançados liberados.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-10">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h3 className="text-3xl font-bold">
            💬 Business Chat
          </h3>

          <p className="text-zinc-400 mt-3">
            Converse com IA avançada estilo ChatGPT.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h3 className="text-3xl font-bold">
            🎨 Gerador de Imagens
          </h3>

          <p className="text-zinc-400 mt-3">
            Gere imagens realistas com IA.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>