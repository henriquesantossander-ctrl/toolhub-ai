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
    </main>
  );
}