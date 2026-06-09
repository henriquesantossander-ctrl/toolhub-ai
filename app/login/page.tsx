"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* HEADER */}
      <header className="border-b border-white/5">

        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-purple-600 flex items-center justify-center font-black">
              ✦
            </div>

            <h1 className="text-2xl font-black">
              ToolHub <span className="text-purple-500">AI</span>
            </h1>

          </Link>

          <Link
            href="/"
            className="text-zinc-400 hover:text-white transition"
          >
            Voltar
          </Link>

        </div>

      </header>

      {/* LOGIN */}
      <section className="flex items-center justify-center px-6 py-20">

        <div className="w-full max-w-md">

          <div className="mb-10">

            <h1 className="text-4xl font-black tracking-tight">
              Entrar
            </h1>

            <p className="text-zinc-500 mt-3 text-lg">
              Acesse sua conta ToolHub AI
            </p>

          </div>

          <div className="space-y-4">

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              className="w-full h-14 bg-[#111111] border border-white/10 rounded-2xl px-5 outline-none focus:border-purple-500 transition"
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="Senha"
              className="w-full h-14 bg-[#111111] border border-white/10 rounded-2xl px-5 outline-none focus:border-purple-500 transition"
            />

            {/* LOGIN BUTTON */}
            <button className="w-full h-14 bg-white text-black rounded-2xl font-bold hover:bg-zinc-200 transition">

              Entrar

            </button>

            {/* GOOGLE */}
            <button className="w-full h-14 bg-[#111111] border border-white/10 rounded-2xl font-semibold hover:border-white/20 transition">

              Continuar com Google

            </button>

          </div>

          {/* REGISTER */}
          <div className="mt-8 text-center text-zinc-500">

            Não possui conta?{" "}

            <Link
              href="/register"
              className="text-white hover:text-purple-400 transition"
            >
              Criar conta
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}