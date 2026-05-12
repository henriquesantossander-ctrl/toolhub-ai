"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login realizado!");
    }
  }

  async function handleRegister() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Conta criada!");
    }
  }

  async function handleGoogleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://toolhubia.com.br",
      },
    });
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="bg-zinc-900 p-10 rounded-3xl w-full max-w-md border border-zinc-800">

        <h1 className="text-4xl font-bold mb-8 text-center">
          🔐 Login ToolHub
        </h1>

        <input
          type="email"
          placeholder="Seu email"
          className="w-full mb-4 p-4 rounded-2xl bg-zinc-800 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Sua senha"
          className="w-full mb-6 p-4 rounded-2xl bg-zinc-800 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-white text-black font-bold p-4 rounded-2xl mb-4 hover:scale-105 transition"
        >
          Entrar
        </button>

        <button
          onClick={handleRegister}
          className="w-full bg-purple-600 font-bold p-4 rounded-2xl mb-4 hover:scale-105 transition"
        >
          Criar conta
        </button>

        <div className="flex items-center gap-4 my-6">
          <div className="h-[1px] bg-zinc-700 flex-1"></div>
          <span className="text-zinc-500 text-sm">OU</span>
          <div className="h-[1px] bg-zinc-700 flex-1"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white font-bold p-4 rounded-2xl hover:scale-105 transition"
        >
          Entrar com Google
        </button>

      </div>

    </main>
  );
}