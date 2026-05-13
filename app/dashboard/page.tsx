"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

type Favorite = {
  id: number;
  tool_name: string;
};

type History = {
  id: number;
  tool_name: string;
  created_at: string;
};

export default function DashboardPage() {
  const [email, setEmail] = useState("");
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [history, setHistory] = useState<History[]>([]);
  const [plan, setPlan] = useState("FREE");

  useEffect(() => {
    async function loadData() {
      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user?.email) {
        window.location.href = "/login";
        return;
      }

      setEmail(userData.user.email);

      const { data: favoritesData } = await supabase
        .from("favorites")
        .select("*")
        .eq("user_email", userData.user.email);

      setFavorites(favoritesData || []);

      const { data: historyData } = await supabase
        .from("history")
        .select("*")
        .eq("user_email", userData.user.email)
        .order("created_at", { ascending: false });

      setHistory(historyData || []);

      const { data: subscription } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("user_email", userData.user.email)
        .eq("status", "approved")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (subscription) {
        setPlan("PRO");
      }
    }

    loadData();
  }, []);

  async function logout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl font-bold">🚀 Dashboard</h1>
            <p className="text-zinc-400 mt-3">Bem-vindo ao ToolHub IA</p>
          </div>

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-500 transition px-6 py-3 rounded-2xl font-bold"
          >
            Sair
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <p className="text-zinc-400 mb-2">Conta conectada</p>
            <h2 className="text-xl font-bold break-all">{email}</h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <p className="text-zinc-400 mb-2">Favoritos</p>
            <h2 className="text-5xl font-bold">{favorites.length}</h2>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8">
            <p className="mb-2">Plano atual</p>
            <h2 className="text-4xl font-bold">{plan}</h2>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 mb-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">⭐ Seus Favoritos</h2>

            <Link href="/favorites">
              <button className="bg-white text-black px-5 py-2 rounded-xl font-bold">
                Ver todos
              </button>
            </Link>
          </div>

          {favorites.length === 0 ? (
            <p className="text-zinc-400">
              Você ainda não favoritou nenhuma ferramenta.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favorites.map((fav) => (
                <div key={fav.id} className="bg-zinc-800 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold">{fav.tool_name}</h3>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-8">🕓 Histórico Recente</h2>

          {history.length === 0 ? (
            <p className="text-zinc-400">Nenhum histórico encontrado.</p>
          ) : (
            <div className="space-y-4">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="bg-zinc-800 rounded-2xl p-6 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold">{item.tool_name}</h3>
                    <p className="text-zinc-400 text-sm mt-1">
                      {new Date(item.created_at).toLocaleString()}
                    </p>
                  </div>

                  <span className="bg-purple-600 px-4 py-2 rounded-xl text-sm font-bold">
                    Usado
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}