"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

type Favorite = {
  id: number;
  tool_name: string;
  created_at: string;
};

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    async function loadFavorites() {
      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user?.email) {
        window.location.href = "/login";
        return;
      }

      const { data, error } = await supabase
        .from("favorites")
        .select("*")
        .eq("user_email", userData.user.email)
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error);
        alert("Erro ao carregar favoritos");
        return;
      }

      setFavorites(data || []);
    }

    loadFavorites();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          ⭐ Meus Favoritos
        </h1>

        <p className="text-zinc-400 mb-10">
          Ferramentas que você salvou no ToolHub IA.
        </p>

        {favorites.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-3">
              Nenhum favorito ainda
            </h2>

            <Link href="/">
              <button className="bg-white text-black px-6 py-3 rounded-2xl font-bold">
                Voltar para Home
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favorites.map((fav) => (
              <div
                key={fav.id}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold mb-3">
                  {fav.tool_name}
                </h2>

                <p className="text-zinc-500 text-sm">
                  Favoritado em{" "}
                  {new Date(fav.created_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}