"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("all");

  const filteredTools = [
  {
    title: "🔥 Gerador de Bio",
    href: "/bio-generator",
    desc: "Crie biografias para redes sociais.",
    category: "social",
  },

  {
    title: "🎮 Gerador de Nick",
    href: "/nickname-generator",
    desc: "Descubra apelidos para jogos.",
    category: "gamer",
  },

  {
    title: "🤖 Resumo IA",
    href: "/ai-summarizer",
    desc: "Resuma textos usando IA.",
    category: "ia",
  },

  {
    title: "📸 Legenda Instagram",
    href: "/instagram-caption-generator",
    desc: "Gere legendas rápidas.",
    category: "social",
  },

  {
    title: "🎵 Username TikTok",
    href: "/tiktok-username-generator",
    desc: "Gere usernames estilosos.",
    category: "social",
  },

  {
    title: "#️⃣ Hashtags",
    href: "/hashtag-generator",
    desc: "Gere hashtags virais.",
    category: "social",
  },

  {
    title: "🔥 Nome Free Fire",
    href: "/freefire-name-generator",
    desc: "Gere nomes estilosos gamer.",
    category: "gamer",
  },
].filter((tool) => {

  const matchesSearch =
    tool.title.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    category === "all" || tool.category === category;

  return matchesSearch && matchesCategory;
});
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* BACKGROUND */}
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
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">

        <div className="mb-6 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 text-sm">
          🚀 Plataforma de Ferramentas com IA
        </div>

        <h1 className="text-7xl font-bold mb-6 leading-tight">
          Ferramentas modernas
          <br />
          para internet
        </h1>

        <p className="text-zinc-400 max-w-2xl text-xl leading-9">
          Gere bios, hashtags, usernames,
          legendas e ferramentas para redes sociais.
        </p>

        {/* COUNTER */}
        <div className="mt-10 flex gap-6 flex-wrap justify-center">

          <div className="bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-2xl">
            <p className="text-3xl font-bold">
              +7
            </p>

            <span className="text-zinc-400 text-sm">
              Ferramentas grátis
            </span>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-2xl">
            <p className="text-3xl font-bold">
              24h
            </p>

            <span className="text-zinc-400 text-sm">
              Online
            </span>
          </div>

        </div>

      </section>

      {/* SEARCH */}
      <section className="relative z-10 px-8 pb-10">

        <div className="max-w-3xl mx-auto">

          <input
            type="text"
            placeholder="🔍 Pesquise ferramentas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-3xl px-6 py-5 outline-none text-lg"
          />

        </div>

      </section>

      {/* CATEGORIES */}
<section className="relative z-10 px-8 pb-16">

  <div className="flex flex-wrap gap-4 justify-center">

    <button
      onClick={() => setCategory("all")}
      className="bg-zinc-800 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition"
    >
      🌎 Todas
    </button>

    <button
      onClick={() => setCategory("ia")}
      className="bg-purple-600 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition"
    >
      🤖 IA
    </button>

    <button
      onClick={() => setCategory("social")}
      className="bg-pink-600 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition"
    >
      📱 Social
    </button>

    <button
      onClick={() => setCategory("gamer")}
      className="bg-green-600 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition"
    >
      🎮 Gamer
    </button>

  </div>

</section>
      {/* POPULAR */}
      <section className="relative z-10 px-8 pb-20">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-4xl font-bold">
            ⭐ Ferramentas Populares
          </h2>

          <span className="text-zinc-500">
            Tendências
          </span>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">
              🔥 Gerador de Bio
            </h3>

            <p>
              Uma das ferramentas mais usadas do site.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-600 to-red-600 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">
              🎵 Username TikTok
            </h3>

            <p>
              Gere usernames virais rapidamente.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">
              #️⃣ Hashtags
            </h3>

            <p>
              Gere hashtags para alcançar mais pessoas.
            </p>
          </div>

        </div>

      </section>

      {/* TOOLS */}
      
<section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 pb-24">

  {filteredTools.length > 0 ? (

    filteredTools.map((tool) => (

      <Link key={tool.title} href={tool.href}>

        <div
          className="animate-fade-up bg-zinc-900/80 backdrop-blur-sm hover:bg-zinc-800 transition-all duration-500 p-8 rounded-3xl border border-zinc-800 hover:scale-[1.05] hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] cursor-pointer"
        >

          <h2 className="text-3xl font-bold mb-3">
            {tool.title}
          </h2>

          <p className="text-zinc-400">
            {tool.desc}
          </p>

        </div>

      </Link>

    ))

  ) : (

    <div className="col-span-full text-center py-20 animate-fade-up">

      <h2 className="text-4xl font-bold mb-4">
        😢 Nenhuma ferramenta encontrada
      </h2>

      <p className="text-zinc-400 text-lg">
        Tente pesquisar outro nome.
      </p>

    </div>

  )}

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