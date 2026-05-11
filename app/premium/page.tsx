export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          🚀 ToolHub PRO
        </h1>

        <p className="text-zinc-400 text-xl mb-16 max-w-2xl mx-auto">
          Desbloqueie ferramentas premium, bios ilimitadas
          e recursos exclusivos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-4">
              FREE
            </h2>

            <p className="text-5xl font-bold mb-6">
              R$0
            </p>

            <ul className="space-y-4 text-zinc-400 mb-10">
              <li>✔ 10 bios por dia</li>
              <li>✔ Ferramentas básicas</li>
              <li>✔ Histórico limitado</li>
            </ul>

            <button className="bg-zinc-800 w-full py-4 rounded-2xl font-bold">
              Plano Atual
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 scale-105 shadow-[0_0_80px_rgba(168,85,247,0.45)]">
            <h2 className="text-3xl font-bold mb-4">
              PRO
            </h2>

            <p className="text-5xl font-bold mb-6">
              R$19
              <span className="text-xl">/mês</span>
            </p>

            <ul className="space-y-4 mb-10">
              <li>🔥 Bios ilimitadas</li>
              <li>🔥 Ferramentas premium</li>
              <li>🔥 IA avançada</li>
              <li>🔥 Sem anúncios</li>
            </ul>

            <button className="bg-white text-black w-full py-4 rounded-2xl font-bold hover:scale-105 transition">
              Fazer Upgrade
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-4">
              BUSINESS
            </h2>

            <p className="text-5xl font-bold mb-6">
              R$49
              <span className="text-xl">/mês</span>
            </p>

            <ul className="space-y-4 text-zinc-400 mb-10">
              <li>⚡ Tudo do PRO</li>
              <li>⚡ APIs</li>
              <li>⚡ Equipe</li>
              <li>⚡ Prioridade</li>
            </ul>

            <button className="bg-zinc-800 w-full py-4 rounded-2xl font-bold">
              Em breve
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}