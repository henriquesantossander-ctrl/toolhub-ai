import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <header className="w-full border-b border-zinc-900 px-8 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          ToolHub AI
        </h1>

        <nav className="flex gap-6 text-zinc-400">
          <Link href="/bio-generator">
            <span className="hover:text-white transition">
              Bio
            </span>
          </Link>

          <Link href="/nickname-generator">
            <span className="hover:text-white transition">
              Nick
            </span>
          </Link>

          <Link href="/ai-summarizer">
            <span className="hover:text-white transition">
              IA
            </span>
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">

        <div className="mb-6 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 text-sm">
          🚀 Plataforma de Ferramentas com IA
        </div>

        <h1 className="text-7xl font-bold mb-6 leading-tight">
          Ferramentas modernas
          <br />
          para internet
        </h1>

        <p className="text-zinc-400 max-w-2xl text-xl leading-9">
          Crie bios, gere nicknames, resuma textos
          e descubra ferramentas incríveis para
          produtividade e redes sociais.
        </p>

        <div className="flex gap-4 mt-10">
          <Link href="/bio-generator">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
              Começar Agora
            </button>
          </Link>

          <Link href="/bio-generator">
  <button className="border border-zinc-700 px-8 py-4 rounded-2xl font-bold hover:bg-zinc-900 transition">
    Explorar
  </button>
</Link>
        </div>
      </section>

      {/* TOOLS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-24">

        {/* BIO */}
        <Link href="/bio-generator">
          <div className="bg-zinc-900 hover:bg-zinc-800 transition p-8 rounded-3xl cursor-pointer border border-zinc-800 hover:scale-[1.02]">
            <h2 className="text-3xl font-bold mb-3">
              🔥 Gerador de Bio
            </h2>

            <p className="text-zinc-400 leading-7">
              Crie bios incríveis para Instagram,
              TikTok e Discord.
            </p>
          </div>
        </Link>

        {/* NICKNAME */}
        <Link href="/nickname-generator">
          <div className="bg-zinc-900 hover:bg-zinc-800 transition p-8 rounded-3xl cursor-pointer border border-zinc-800 hover:scale-[1.02]">
            <h2 className="text-3xl font-bold mb-3">
              🎮 Gerador de Nick
            </h2>

            <p className="text-zinc-400 leading-7">
              Descubra nicknames únicos para jogos.
            </p>
          </div>
        </Link>

        {/* AI */}
        <Link href="/ai-summarizer">
          <div className="bg-zinc-900 hover:bg-zinc-800 transition p-8 rounded-3xl cursor-pointer border border-zinc-800 hover:scale-[1.02]">
            <h2 className="text-3xl font-bold mb-3">
              🤖 Resumidor IA
            </h2>

            <p className="text-zinc-400 leading-7">
              Resuma textos rapidamente usando IA.
            </p>
          </div>
        </Link>

      </section>
      {/* FOOTER */}
<footer className="border-t border-zinc-900 mt-20 px-8 py-10 text-center text-zinc-500">
  <p>
    © 2026 ToolHub AI — Todos os direitos reservados.
  </p>

  <p className="mt-3 text-sm">
    Ferramentas modernas para produtividade,
    redes sociais e internet.
  </p>
</footer>

    </main>
  );
}