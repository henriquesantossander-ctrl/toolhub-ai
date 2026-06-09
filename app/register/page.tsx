export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-8">

        <h1 className="text-4xl font-black mb-2">
          Criar conta
        </h1>

        <p className="text-zinc-500 mb-8">
          Crie sua conta ToolHub AI
        </p>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl p-4 outline-none"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl p-4 outline-none"
          />

          <button className="w-full bg-white text-black py-4 rounded-xl font-bold">
            Criar conta
          </button>

        </div>

      </div>
    </main>
  );
}