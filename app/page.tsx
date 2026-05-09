import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20"></div>

      {/* NAVBAR */}
      <header className="relative z-10 w-full border-b border-zinc-900 px-8 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          ToolHub IA
        </h1>

        <nav className="flex gap-6 text-zinc-400 flex-wrap">
          <Link href="/bio-generator">Bio</Link>
          <Link href="/nickname-generator">Nick</Link>
          <Link href="/ai-summarizer">IA</Link>
          <Link href="/instagram-caption-generator">Instagram</Link>
          <Link href="/tiktok-username-generator">TikTok</Link>
          <Link href="/hashtag-generator">Hashtags</Link>
          <Link href="/freefire-name-generator">Free Fire</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28">

        <div className="mb-6 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 text-sm">
          🚀 Plataforma de Ferramentas com IA
        </div>

        <h1 className="text-7xl font-bold mb-6 leading-tight">
          Ferramentas modernas
          <br />
          para internet
        </h1>

        <p className="text-zinc-400 max-w-2xl text-xl leading-9">
          Crie biografias, hashtags, usernames,
          nomes gamer e ferramentas incríveis
          para redes sociais.
        </p>

      </section>

      {/* TOOLS */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 pb-24">

        <Link href="/bio-generator">
          <div className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 p-8 rounded-3xl cursor-pointer border border-zinc-800 hover:scale-[1.03] hover:border-purple-500">
            <h2 className="text-3xl font-bold mb-3">
              🔥 Gerador de Bio
            </h2>

            <p className="text-zinc-400 leading-7">
              Crie biografias incríveis para redes sociais.
            </p>
          </div>
        </Link>

        <Link href="/nickname-generator">
          <div className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 p-8 rounded-3xl cursor-pointer border border-zinc-800 hover:scale-[1.03] hover:border-blue-500">
            <h2 className="text-3xl font-bold mb-3">
              🎮 Gerador de Nick
            </h2>

            <p className="text-zinc-400 leading-7">
              Descubra apelidos exclusivos para jogos.
            </p>
          </div>
        </Link>

        <Link href="/ai-summarizer">
          <div className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 p-8 rounded-3xl cursor-pointer border border-zinc-800 hover:scale-[1.03] hover:border-pink-500">
            <h2 className="text-3xl font-bold mb-3">
              🤖 Resumo IA
            </h2>

            <p className="text-zinc-400 leading-7">
              Resuma textos rapidamente usando IA.
            </p>
          </div>
        </Link>

        <Link href="/instagram-caption-generator">
          <div className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 p-8 rounded-3xl cursor-pointer border border-zinc-800 hover:scale-[1.03] hover:border-yellow-500">
            <h2 className="text-3xl font-bold mb-3">
              📸 Legenda Instagram
            </h2>

            <p className="text-zinc-400 leading-7">
              Gere legendas rápidas para Instagram.
            </p>
          </div>
        </Link>

        <Link href="/tiktok-username-generator">
          <div className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 p-8 rounded-3xl cursor-pointer border border-zinc-800 hover:scale-[1.03] hover:border-cyan-500">
            <h2 className="text-3xl font-bold mb-3">
              🎵 Username TikTok
            </h2>

            <p className="text-zinc-400 leading-7">
              Gere usernames estilosos para TikTok.
            </p>
          </div>
        </Link>

        <Link href="/hashtag-generator">
          <div className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 p-8 rounded-3xl cursor-pointer border border-zinc-800 hover:scale-[1.03] hover:border-green-500">
            <h2 className="text-3xl font-bold mb-3">
              #️⃣ Gerador de Hashtags
            </h2>

            <p className="text-zinc-400 leading-7">
              Gere hashtags virais para redes sociais.
            </p>
          </div>
        </Link>

        <Link href="/freefire-name-generator">
          <div className="bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 p-8 rounded-3xl cursor-pointer border border-zinc-800 hover:scale-[1.03] hover:border-red-500">
            <h2 className="text-3xl font-bold mb-3">
              🔥 Nome Free Fire
            </h2>

            <p className="text-zinc-400 leading-7">
              Gere nomes estilosos para Free Fire.
            </p>
          </div>
        </Link>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-zinc-900 mt-20 px-8 py-10 text-center text-zinc-500">
        <p>
          © 2026 ToolHub IA — Todos os direitos reservados.
        </p>

        <p className="mt-3 text-sm">
          Ferramentas modernas para produtividade,
          redes sociais e internet.
        </p>
      </footer>

    </main>
  );
}