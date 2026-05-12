"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type UserData = {
  email: string;
  created_at?: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [bioCount, setBioCount] = useState(0);
  const [loadingPayment, setLoadingPayment] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user?.email) {
        window.location.href = "/login";
        return;
      }

      setUser({
        email: userData.user.email,
        created_at: userData.user.created_at,
      });

      const { data: bios } = await supabase
        .from("bios")
        .select("*")
        .eq("user_email", userData.user.email);

      setBioCount(bios?.length || 0);
    }

    loadProfile();
  }, []);

  async function handleUpgrade() {
    setLoadingPayment(true);

    const response = await fetch("/api/mercadopago", {
      method: "POST",
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Erro ao abrir pagamento.");
      setLoadingPayment(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-purple-600 flex items-center justify-center text-5xl font-bold mb-6">
              {user?.email?.charAt(0).toUpperCase()}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Meu Perfil
            </h1>

            <p className="text-zinc-400 mb-10">
              Gerencie sua conta ToolHub IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-2xl p-6">
              <p className="text-zinc-400 mb-2">Email</p>

              <h2 className="text-xl font-bold break-all">
                {user?.email}
              </h2>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-6">
              <p className="text-zinc-400 mb-2">Plano atual</p>

              <h2 className="text-3xl font-bold text-purple-400">
                FREE
              </h2>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-6">
              <p className="text-zinc-400 mb-2">Bios geradas</p>

              <h2 className="text-5xl font-bold">{bioCount}</h2>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-6">
              <p className="text-zinc-400 mb-2">Conta criada</p>

              <h2 className="text-2xl font-bold">
                {user?.created_at
                  ? new Date(user.created_at).toLocaleDateString()
                  : "-"}
              </h2>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8">
            <p className="mb-2">Upgrade Premium</p>

            <h2 className="text-4xl font-bold mb-4">ToolHub PRO</h2>

            <p className="text-white/80 mb-6">
              Desbloqueie recursos premium, mais gerações e ferramentas avançadas.
            </p>

            <button
              onClick={handleUpgrade}
              disabled={loadingPayment}
              className="bg-white text-black px-5 py-4 rounded-xl font-bold w-full hover:scale-105 transition disabled:opacity-50"
            >
              {loadingPayment ? "Abrindo pagamento..." : "Fazer Upgrade"}
            </button>
          </div>

          <div className="mt-10">
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                window.location.href = "/";
              }}
              className="w-full bg-red-600 hover:bg-red-500 transition py-4 rounded-2xl font-bold"
            >
              Sair da Conta
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
