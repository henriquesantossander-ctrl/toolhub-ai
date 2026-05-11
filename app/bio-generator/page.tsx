"use client";
import toast from "react-hot-toast";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function BioGenerator() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateBio() {
    if (!name.trim()) {
      toast.error("Digite seu nome");
      return;
    }

    setLoading(true);
    setBio("");

    const cleanName = name.trim();

    const bios = [
      `🔥 ${cleanName} | Criador digital\n🚀 Evoluindo todos os dias\n📱 Internet • Ideias • Futuro`,

      `👑 ${cleanName}\n🎯 Foco, atitude e visão\n⚡ Construindo minha própria história`,

      `🌙 ${cleanName}\n🎧 Música, internet e boas ideias\n🖤 Vivendo no meu ritmo`,

      `🎮 ${cleanName}\n🚀 Gamer & Creator\n💻 Tecnologia • IA • Conteúdo`,

      `⚡ ${cleanName}\n📱 TikTok • Discord • Instagram\n🔥 Sempre em evolução`,

      `🧠 ${cleanName}\n💡 Criatividade sem limite\n🚀 Transformando ideias em realidade`,
    ];

    setTimeout(async () => {
      const randomBio = bios[Math.floor(Math.random() * bios.length)];

      setBio(randomBio);

      const { data: userData } = await supabase.auth.getUser();

      if (userData.user?.email) {
        await supabase.from("bios").insert({
          user_email: userData.user.email,
          bio: randomBio,
        });
      }

      setLoading(false);
    }, 1000);
  }

  async function copyBio() {
    await navigator.clipboard.writeText(bio);
    toast.success("Bio copiada!");
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-6xl font-bold mb-4 text-center">
        Gerador de Bio
      </h1>

      <p className="text-zinc-400 mb-10 text-center max-w-xl">
        Crie bios modernas para Instagram, TikTok, Discord e redes sociais.
      </p>

      <input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 w-full max-w-md mb-6 outline-none"
      />

      <button
        onClick={generateBio}
        disabled={loading}
        className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition disabled:opacity-50"
      >
        {loading ? "Gerando..." : "Gerar Bio"}
      </button>

      {bio && (
        <div className="bg-zinc-900 border border-zinc-800 mt-12 p-8 rounded-3xl max-w-md w-full">
          <p className="whitespace-pre-line text-zinc-300 text-lg">
            {bio}
          </p>

          <button
            onClick={copyBio}
            className="mt-6 w-full bg-purple-600 text-white py-3 rounded-2xl font-bold hover:scale-105 transition"
          >
            Copiar Bio
          </button>
        </div>
      )}
    </main>
  );
}