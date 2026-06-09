
import Link from "next/link";

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-purple-600/5 blur-[180px] pointer-events-none" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-5">
            PREMIUM PLANS
          </p>

          <h1 className="text-5xl md:text-6xl font-black">
            Escolha seu plano
          </h1>

          <p className="text-zinc-500 text-lg mt-6 max-w-2xl mx-auto">
            Ferramentas profissionais de IA para criação de imagens,
            vídeos e projetos avançados.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* FREE */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-8">

            <p className="text-zinc-500 text-sm mb-4">
              FREE
            </p>

            <h2 className="text-5xl font-bold">
              R$0
            </h2>

            <p className="text-zinc-500 mt-3">
              Ideal para testar a plataforma
            </p>

            <div className="space-y-4 mt-10 text-zinc-300">

              <p>• 1 geração por estilo por dia</p>
              <p>• Cyberpunk</p>
              <p>• Cartoon</p>
              <p>• Fantasy</p>
              <p>• Hero</p>
              <p>• Anime</p>
              <p>• Qualidade padrão</p>

            </div>

            <button className="w-full mt-10 bg-white/5 border border-white/10 py-4 rounded-2xl">
              Plano atual
            </button>

          </div>

          {/* PRO */}
          <div className="bg-[#141414] border border-purple-500/20 rounded-3xl p-8 relative">

            <div className="absolute top-5 right-5 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs px-4 py-2 rounded-full">
              MAIS POPULAR
            </div>

            <p className="text-purple-400 text-sm mb-4">
              PRO
            </p>

            <h2 className="text-5xl font-bold">
              R$19
            </h2>

            <p className="text-zinc-500 mt-3">
              Para criadores e uso diário
            </p>

            <div className="space-y-4 mt-10 text-zinc-300">

              <p>• 10 gerações por dia</p>
              <p>• Todos estilos IA</p>
              <p>• Qualidade HD</p>
              <p>• Renderização rápida</p>
              <p>• Sem anúncios</p>
              <p>• Vídeo IA: 10 por dia</p>

            </div>

            <a
              href="https://www.mercadopago.com.br/checkout/v1/payment/redirect/be15a2f2-8466-42bf-b718-02b9598aeed0/payment-option-form/?preference-id=1879629028-906b956f-aa32-4a16-8d25-709a80ea4808&router-request-id=dff32d14-bd27-488d-b8fe-8753bc28c363&p=87921cc13cf0af960fb39866d1a241b4"
              target="_blank"
            >
              <button className="w-full mt-10 bg-purple-600 hover:bg-purple-500 transition py-4 rounded-2xl font-medium">
                Assinar PRO
              </button>
            </a>

          </div>

          {/* BUSINESS */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-8">

            <p className="text-zinc-500 text-sm mb-4">
              BUSINESS
            </p>

            <h2 className="text-5xl font-bold">
              R$49
            </h2>

            <p className="text-zinc-500 mt-3">
              Uso profissional ilimitado
            </p>

            <div className="space-y-4 mt-10 text-zinc-300">

              <p>• Gerações ilimitadas</p>
              <p>• Vídeo IA ilimitado</p>
              <p>• IA ultra realista</p>
              <p>• Prioridade máxima</p>
              <p>• Modelos exclusivos</p>
              <p>• API futura</p>

            </div>

            <a
              href="https://www.mercadopago.com.br/checkout/v1/payment/redirect/b982205c-0d1e-4513-8c6c-536ff07a298b/payment-option-form/?preference-id=1879629028-52dc84a0-55eb-4730-b23d-4fd4762d9892&router-request-id=cbf9b145-2964-4481-8bdb-6120b72ae5b7&p=87921cc13cf0af960fb39866d1a241b4"
              target="_blank"
            >
              <button className="w-full mt-10 bg-white text-black py-4 rounded-2xl font-medium hover:opacity-90 transition">
                Assinar BUSINESS
              </button>
            </a>

          </div>

        </div>

      </section>
    </main>
  );
}

