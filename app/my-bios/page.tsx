"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

type BioItem = {
  id: number;
  bio: string;
  created_at: string;
};

export default function MyBiosPage() {
  const [bios, setBios] = useState<BioItem[]>([]);

  useEffect(() => {
    async function loadBios() {
      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user?.email) {
        window.location.href = "/login";
        return;
      }

      const { data, error } = await supabase
        .from("bios")
        .select("*")
        .eq("user_email", userData.user.email)
        .order("created_at", { ascending: false });

      if (error) {
        alert("Erro ao carregar bios");
        return;
      }

      setBios(data || []);
    }

    loadBios();
  }, []);

  async function copyBio(text: string) {
    await navigator.clipboard.writeText(text);
    alert("Bio copiada!");
  }
  async function deleteBio(id: number) {
  const confirmDelete = confirm("Deseja apagar esta bio?");

  if (!confirmDelete) return;

  const { error } = await supabase
    .from("bios")
    .delete()
    .eq("id", id);

  if (error) {
    alert("Erro ao apagar bio");
    return;
  }

  setBios((current) => current.filter((item) => item.id !== id));
}

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-5xl font-bold">📝 Minhas Bios</h1>
            <p className="text-zinc-400 mt-3">
              Todas as bios que você gerou ficam salvas aqui.
            </p>
          </div>

          <Link href="/bio-generator">
            <button className="bg-white text-black px-6 py-3 rounded-2xl font-bold">
              Criar nova bio
            </button>
          </Link>
        </div>

        {bios.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-3">
              Nenhuma bio ainda
            </h2>

            <p className="text-zinc-400 mb-6">
              Gere sua primeira bio para ela aparecer aqui.
            </p>

            <Link href="/bio-generator">
              <button className="bg-purple-600 px-6 py-3 rounded-2xl font-bold">
                Gerar Bio
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bios.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >
                <p className="whitespace-pre-line text-zinc-300 text-lg mb-6">
                  {item.bio}
                </p>

                <p className="text-zinc-500 text-sm mb-5">
                  Criada em{" "}
                  {new Date(item.created_at).toLocaleDateString()}
                </p>

                <button
                  onClick={() => copyBio(item.bio)}
                  className="w-full bg-purple-600 hover:bg-purple-500 transition py-3 rounded-2xl font-bold"
                >
                  Copiar Bio
                </button>
                <button
  onClick={() => deleteBio(item.id)}
  className="mt-3 w-full bg-red-600 hover:bg-red-500 transition py-3 rounded-2xl font-bold"
>
  Apagar Bio
</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}