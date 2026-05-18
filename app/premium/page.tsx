"use client";

import { supabase } from "@/lib/supabase";

async function startCheckout(apiRoute: string) {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;

  if (!token) {
    alert("Você precisa estar logado para fazer upgrade.");
    window.location.href = "/login";
    return;
  }

  const res = await fetch(apiRoute, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    alert("Erro ao iniciar pagamento.");
    return;
  }

  const payment = await res.json();

  if (payment.init_point) {
    window.location.href = payment.init_point;
  } else {
    alert("Link de pagamento não encontrado.");
  }
}

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          🚀 Escolha seu plano
        </h1>

        <p className="text-zinc-400 text-xl mb-16 max-w-3xl mx-auto">
          Desbloqueie ferramentas premium, IA avançada e recursos exclusivos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-4">FREE</h2>
            <h3 className="text-5xl font-bold mb-8">R$0</h3>

            <ul className="space-y-5 text-zinc-400">
              <li>✅ 5 gerações totais</li>
              <li>✅ Ferramentas básicas</li>
              <li>✅ Com anúncios</li>
              <li>❌ Sem IA avançada</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 shadow-[0_0_80px_rgba(168,85,247,0.35)]">
            <h2 className="text-3xl font-bold mb-4">PRO 🚀</h2>
            <h3 className="text-5xl font-bold mb-8">R$19</h3>

            <ul className="space-y-5 mb-10">
              <li>🔥 Ferramentas premium</li>
              <li>🔥 Mais gerações</li>
              <li>🔥 Sem anúncios</li>
              <li>🔥 IA de texto avançada</li>
              <li>🔥 Melhor experiência</li>
            </ul>

            <button
              onClick={() => startCheckout("/api/mercadopago")}
              className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Assinar PRO por R$19
            </button>
          </div>

          <div className="bg-gradient-to-b from-yellow-500/20 to-zinc-950 border border-yellow-500 rounded-3xl p-10 shadow-[0_0_80px_rgba(234,179,8,0.2)] relative">
            <div className="absolute top-0 right-0 bg-yellow-500 text-black px-4 py-1 text-sm font-bold rounded-bl-2xl rounded-tr-3xl">
              BUSINESS
            </div>

            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              BUSINESS IA
            </h2>

            <h3 className="text-5xl font-bold mb-8">R$49</h3>

            <ul className="space-y-5 mb-10 text-zinc-200">
              <li>🔥 Tudo do PRO</li>
              <li>🔥 Chat IA avançado</li>
              <li>🔥 Memória de conversa</li>
              <li>🔥 Upload/análise de imagens</li>
              <li>🔥 Gerador de imagens IA</li>
              <li>🔥 Futuro vídeo IA</li>
            </ul>

            <button
              onClick={() => startCheckout("/api/mercadopago/business")}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Assinar BUSINESS por R$49
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}