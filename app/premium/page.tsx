
import Link from "next/link";

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_28%)] pointer-events-none" />
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HEADER */}
        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-400">
           <span className="h-2 w-2 rounded-full bg-blue-500" />
          ToolHub IA Premium
        </div>

      <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
         Desbloqueie todo o
         <br />
         potencial da IA
      </h1>

          <p className="text-zinc-500 text-lg mt-6 max-w-2xl mx-auto">
               Imagem, vídeo, análise multimodal,
               PDFs inteligentes e ferramentas profissionais.
          </p>
<div className="flex flex-wrap justify-center gap-3 mt-8">

  <div className="bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full text-sm text-zinc-300">
    IA de imagens
  </div>

  <div className="bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full text-sm text-zinc-300">
    Vídeos IA
  </div>

  <div className="bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full text-sm text-zinc-300">
    PDFs inteligentes
  </div>

  <div className="bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full text-sm text-zinc-300">
    Multimodal
  </div>

</div>
        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* FREE */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">

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
          <div className="bg-white/[0.05] border border-purple-500/20 rounded-3xl p-8 relative">

            <div className="absolute top-5 right-5 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs px-4 py-2 rounded-full">
              MAIS POPULAR
            </div>

            <p className="text-purple-400 text-sm mb-4">
              PRO
            </p>

            <h2 className="text-5xl font-bold">
              R$19,90
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
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-3xl p-8 relative">

          <div className="mb-5 inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-200">
  Melhor plano
</div>

            <p className="text-zinc-500 text-sm mb-4">
              BUSINESS
            </p>

            <h2 className="text-5xl font-bold">
              R$49,90
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

