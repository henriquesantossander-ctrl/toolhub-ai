"use client";

import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import AdBanner from "@/components/AdBanner";

export default function BioGenerator() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const [usedCount, setUsedCount] = useState(0);
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
  async function loadUsage() {
    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user?.email) return;

    const email = userData.user.email;
    const today = new Date().toISOString().split("T")[0];

    const { data: subscription } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("user_email", email)
      .eq("status", "approved")
      .maybeSingle();

    if (subscription) {
      setIsPro(true);
    }

    let { data: usage } = await supabase
      .from("usage_limits")
      .select("*")
      .eq("user_email", email)
      .maybeSingle();

    if (!usage) {
      const { data: newUsage } = await supabase
        .from("usage_limits")
        .insert({
          user_email: email,
          used_count: 0,
          last_reset: today,
        })
        .select()
        .single();

      usage = newUsage;
    }

    if (usage && usage.last_reset !== today) {
      const { data: resetUsage } = await supabase
        .from("usage_limits")
        .update({
          used_count: 0,
          last_reset: today,
        })
        .eq("user_email", email)
        .select()
        .single();

      usage = resetUsage;
    }

    setUsedCount(usage?.used_count || 0);
  }

  loadUsage();
}, []);

  async function generateBio() {
    if (!name.trim()) {
      toast.error("Digite seu nome");
      return;
    }

    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user?.email) {
      toast.error("Faça login para continuar");
      window.location.href = "/login";
      return;
    }

    const email = userData.user.email;
    const today = new Date().toISOString().split("T")[0];

    const { data: subscription } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("user_email", email)
      .eq("status", "approved")
      .maybeSingle();

    const proUser = !!subscription;
    setIsPro(proUser);

    let { data: usage } = await supabase
      .from("usage_limits")
      .select("*")
      .eq("user_email", email)
      .maybeSingle();

    if (!usage) {
      const { data: newUsage } = await supabase
        .from("usage_limits")
        .insert({
          user_email: email,
          used_count: 0,
          last_reset: today,
        })
        .select()
        .single();

      usage = newUsage;
    }

    if (usage && usage.last_reset !== today) {
      const { data: resetUsage } = await supabase
        .from("usage_limits")
        .update({
          used_count: 0,
          last_reset: today,
        })
        .eq("user_email", email)
        .select()
        .single();

      usage = resetUsage;
    }

    const currentCount = usage?.used_count || 0;

    if (!proUser && currentCount >= 5) {
      toast.error("Você atingiu o limite gratuito. Desbloqueie o PRO.");
      window.location.href = "/premium";
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

      await supabase.from("bios").insert({
        user_email: email,
        bio: randomBio,
      });

      if (!proUser) {
        const newCount = currentCount + 1;

        await supabase
          .from("usage_limits")
          .update({
            used_count: newCount,
          })
          .eq("user_email", email);

        setUsedCount(newCount);
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
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
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
        {loading ? (
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            Gerando com IA...
          </div>
        ) : (
          "Gerar"
        )}
      </button>
      <AdBanner />

      <p className="text-zinc-400 text-sm mt-4">
        {isPro
          ? "🚀 Usuário PRO ilimitado"
          : `🔥 Restam ${Math.max(0, 5 - usedCount)} gerações hoje`}
      </p>
      {bio && (
  <>
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

    <AdBanner />
  </>
)}
    </main>
  );
}