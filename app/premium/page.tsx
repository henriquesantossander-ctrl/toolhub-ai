"use client";

import { supabase } from "@/lib/supabase";

async function handleUpgrade() {
  try {
    const { data } = await supabase.auth.getSession();

    const token = data.session?.access_token;

    if (!token) {
      alert("Você precisa estar logado para fazer upgrade.");
      window.location.href = "/login";
      return;
    }

    const res = await fetch("/api/mercadopago", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      alert("Erro ao iniciar pagamento");
      return;
    }

    const payment = await res.json();

    if (payment.init_point) {
      window.location.href = payment.init_point;
    } else {
      alert("Link de pagamento não encontrado");
    }
  } catch (error) {
    console.error(error);
    alert("Erro no checkout");
  }
}

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          🚀 ToolHub PRO
        </h1>

        <p className="text-zinc-400 text-xl mb-16 max-w-2xl mx-auto">
          Desbloqueie ferramentas premium, bios ilimitadas e recursos exclusivos.
        </p>

        <button
          onClick={handleUpgrade}
          className="bg-white text-black px-10 py-4 rounded-2xl font-bold hover:scale-105 transition"
        >
          Fazer Upgrade
        </button>
      </div>
      <section className="max-w-7xl mx-auto mt-24 space-y-20">

  <div className="text-center">
    <div className="inline-flex bg-yellow-500/20 border border-yellow-500 rounded-full px-5 py-2 text-yellow-300 font-bold mb-6">
      🔥 Oferta limitada para novos usuários
    </div>

    <h2 className="text-4xl md:text-6xl font-bold mb-6">
      Desbloqueie o verdadeiro poder da IA
    </h2>

    <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
      O plano PRO libera ferramentas premium, gerações avançadas e uma experiência muito mais poderosa.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
      <h3 className="text-3xl font-bold mb-8">
        FREE
      </h3>

      <ul className="space-y-5 text-zinc-400">
        <li>✔ Ferramentas básicas</li>
        <li>✔ Gerações simples</li>
        <li>✔ Limite diário</li>
        <li>✔ Recursos reduzidos</li>
      </ul>
    </div>

    <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 shadow-[0_0_80px_rgba(168,85,247,0.35)]">
      <h3 className="text-3xl font-bold mb-8">
        PRO 🚀
      </h3>

      <ul className="space-y-5">
        <li>🔥 IA avançada</li>
        <li>🔥 Respostas melhores</li>
        <li>🔥 Mais criatividade</li>
        <li>🔥 Sem limite diário</li>
        <li>🔥 Ferramentas premium</li>
        <li>🔥 Melhor experiência</li>
      </ul>
    </div>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
      <h3 className="text-2xl font-bold mb-4">
        ⚡ Mais rápido
      </h3>

      <p className="text-zinc-400">
        Gere conteúdo em segundos usando inteligência artificial premium.
      </p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
      <h3 className="text-2xl font-bold mb-4">
        🤖 IA melhor
      </h3>

      <p className="text-zinc-400">
        Resultados mais inteligentes, criativos e modernos.
      </p>
    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
      <h3 className="text-2xl font-bold mb-4">
        🚀 Atualizações futuras
      </h3>

      <p className="text-zinc-400">
        Usuários PRO recebem acesso às novas ferramentas primeiro.
      </p>
    </div>

  </div>

  <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-10 md:p-14 text-center">

    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Mais de 2.500 pessoas já testaram
    </h2>

    <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
      Entre para o ToolHub PRO e desbloqueie recursos premium agora mesmo.
    </p>

    <button
      onClick={handleUpgrade}
      className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition"
    >
      🚀 Quero virar PRO
    </button>

  </div>

</section>
    </main>
  );
}