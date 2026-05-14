"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { checkUsageLimit, increaseUsage } from "@/lib/checkUsageLimit";

export default function FreeFireNameGenerator() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateName() {
    const result = await checkUsageLimit();

    if (!result.allowed) {
      toast.error("Você atingiu o limite grátis de 5 gerações por dia.");
      return;
    }

    setLoading(true);
    setName("");

    try {
      const response = await fetch("/api/freefire-name", {
        method: "POST",
      });

      const data = await response.json();

      if (data?.name) {
        setName(data.name);

        if (!result.isPro) {
          await increaseUsage(result.email, result.currentCount);
        }
      } else {
        toast.error("Erro ao gerar nome.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao gerar nome.");
    } finally {
      setLoading(false);
    }
  }

  function copyName(nick: string) {
    navigator.clipboard.writeText(nick);
    toast.success("Nome copiado!");
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Gerador de Nome Free Fire
      </h1>

      <p className="text-zinc-400 mb-10 text-center max-w-xl">
        Gere nomes estilosos e diferenciados para Free Fire.
      </p>

      <button
        onClick={generateName}
        disabled={loading}
        className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition disabled:opacity-50"
      >
        {loading ? (
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            Gerando com IA...
          </div>
        ) : (
          "Gerar Nome"
        )}
      </button>

      {name && (
        <div className="bg-zinc-900 border border-zinc-800 mt-12 p-8 rounded-3xl max-w-xl w-full text-center">
          <div className="grid gap-3">
            {name.split("\n").map((nick, index) => (
              <button
                key={index}
                onClick={() => copyName(nick)}
                className="bg-zinc-800 border border-zinc-700 rounded-2xl py-3 px-4 text-2xl font-bold hover:scale-105 hover:border-orange-500 hover:bg-zinc-700 transition"
              >
                {nick}
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}