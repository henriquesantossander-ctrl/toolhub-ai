"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Tool = {
  title: string;
  href: string;
  desc: string;
  category: "social" | "gamer" | "ia";
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const tools: Tool[] = [
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
  ];

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || tool.category === category;

    return matchesSearch && matchesCategory;
  });

  async function saveFavorite(toolName: string) {
    const { data } = await supabase.auth.getUser();

    if (!data.user?.email) {
      alert("Faça login primeiro");
      return;
    }

    const userEmail = data.user.email;

    const { error: favoriteError } = await supabase
      .from("favorites")
      .insert({
        user_email: userEmail,
        tool_name: toolName,
      });

    if (favoriteError) {
      console.log(favoriteError);
      alert("Erro ao salvar favorito");
      return;
    }

    await supabase.from("history").insert({
      user_email: userEmail,
      tool_name: toolName,
    });

    alert("Favoritado ⭐");
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20"></div>


      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="mb-6 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 text-sm">
          🚀 Plataforma de Ferramentas com IA
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Ferramentas modernas
          <br />
          para internet
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition">
    <h3 className="text-4xl font-bold text-purple-500">
      12K+
    </h3>

    <p className="text-zinc-400 mt-2">
      Bios geradas
    </p>
  </div>

  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition">
    <h3 className="text-4xl font-bold text-pink-500">
      4.9★
    </h3>

    <p className="text-zinc-400 mt-2">
      Avaliação dos usuários
    </p>
  </div>

  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:scale-105 transition">
    <h3 className="text-4xl font-bold text-green-500">
      24/7
    </h3>

    <p className="text-zinc-400 mt-2">
      Ferramentas online
    </p>
  </div>
</div>

        <p className="text-zinc-400 max-w-2xl text-xl leading-9">
          Gere bios, hashtags, usernames, legendas e ferramentas para redes sociais.
        </p>
      </section>

      <section className="relative z-10 px-4 md:px-8 pb-10">
        <div className="max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="🔍 Pesquise ferramentas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-3xl px-6 py-5 outline-none text-lg"
          />
        </div>
         <div className="max-w-6xl mx-auto mt-20">
  <h2 className="text-3xl md:text-4xl font-bold mb-10">
    Ferramentas Populares
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <a
      href="/bio-generator"
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 hover:scale-105 transition cursor-pointer block"
    >
      <h3 className="text-2xl font-bold mb-3">
        🚀 Gerador de Bio
      </h3>

      <p className="text-zinc-400">
        Crie bios modernas para redes sociais.
      </p>
    </a>

    <a
      href="/hashtag-generator"
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-500 hover:scale-105 transition cursor-pointer block"
    >
      <h3 className="text-2xl font-bold mb-3">
        🔥 Gerador de Hashtags
      </h3>

      <p className="text-zinc-400">
        Gere hashtags virais automaticamente.
      </p>
    </a>

    <a
      href="/freefire-name-generator"
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 hover:scale-105 transition cursor-pointer block"
    >
      <h3 className="text-2xl font-bold mb-3">
        🎮 Free Fire Names
      </h3>

      <p className="text-zinc-400">
        Nicknames insanos para jogos.
      </p>
    </a>

  </div>
</div>
      </section>

      <section className="relative z-10 px-4 md:px-8 pb-16">
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setCategory("all")}
            className="bg-zinc-800 px-6 py-3 rounded-2xl font-bold"
          >
            🌎 Todas
          </button>

          <button
            onClick={() => setCategory("ia")}
            className="bg-purple-600 px-6 py-3 rounded-2xl font-bold"
          >
            🤖 IA
          </button>

          <button
            onClick={() => setCategory("social")}
            className="bg-pink-600 px-6 py-3 rounded-2xl font-bold"
          >
            📱 Social
          </button>

          <button
            onClick={() => setCategory("gamer")}
            className="bg-green-600 px-6 py-3 rounded-2xl font-bold"
          >
            🎮 Gamer
          </button>
        </div>
      </section>

      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-8 pb-24">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => (
            <div
  key={tool.title}
  className="group animate-fade-up bg-zinc-900/80 backdrop-blur-sm transition-all duration-500 p-8 rounded-3xl border border-zinc-800 hover:scale-[1.05] hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.45)] relative overflow-hidden"
>

  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>

  <Link href={tool.href} className="relative z-10">
    <h2 className="text-2xl md:text-3xl font-bold mb-3">
      {tool.title}
    </h2>

    <p className="text-zinc-400">
      {tool.desc}
    </p>
  </Link>

  <button
    type="button"
    onClick={() => saveFavorite(tool.title)}
    className="relative z-10 mt-5 bg-purple-600 hover:bg-purple-500 transition px-5 py-2 rounded-xl font-bold"
  >
    ⭐ Favoritar
  </button>

</div>
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

      <section className="relative z-10 px-4 md:px-8 pb-32">

  <div className="max-w-6xl mx-auto bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-zinc-800 rounded-[40px] p-10 md:p-16 text-center backdrop-blur-sm">

    <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2 text-sm text-zinc-300 mb-6">
      🤖 IA REAL integrada
    </div>

    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
      Gere conteúdo com
      <span className="text-purple-400"> inteligência artificial</span>
    </h2>

    <p className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto leading-8 mb-10">
      Crie bios, hashtags, usernames, legendas e nicknames usando IA moderna
      em segundos.
    </p>

    <div className="flex flex-col md:flex-row gap-4 justify-center">

      <a
        href="/bio-generator"
        className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
      >
        🚀 Começar Agora
      </a>

      <a
        href="/premium"
        className="bg-zinc-900 border border-zinc-700 px-8 py-4 rounded-2xl font-bold hover:border-purple-500 transition"
      >
        👑 Conhecer Premium
      </a>

    </div>

  </div>

</section>
      <footer className="border-t border-zinc-800 mt-32 py-12 px-4 md:px-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

    <div>
      <h2 className="text-3xl font-bold mb-2">
        🚀 ToolHub IA
      </h2>

      <p className="text-zinc-400">
        Plataforma moderna de ferramentas para internet.
      </p>
    </div>

    <div className="flex gap-6 text-zinc-400">

      <a
        href="/dashboard"
        className="hover:text-white transition"
      >
        Dashboard
      </a>

      <a
        href="/profile"
        className="hover:text-white transition"
      >
        Perfil
      </a>

      <a
        href="/my-bios"
        className="hover:text-white transition"
      >
        Minhas Bios
      </a>

      <a
  href="/privacy"
  className="hover:text-white transition"
>
  Privacidade
</a>

<a
  href="/about"
  className="hover:text-white transition"
>
  Sobre
</a>

<a
  href="/contact"
  className="hover:text-white transition"
>
  Contato
</a>

<a
  href="/terms"
  className="hover:text-white transition"
>
  Termos
</a>

    </div>

  </div>

  <div className="text-center text-zinc-500 mt-10 text-sm">
    © 2026 ToolHub IA — Todos os direitos reservados.
  </div>
</footer>
      
    </main>
  );
}