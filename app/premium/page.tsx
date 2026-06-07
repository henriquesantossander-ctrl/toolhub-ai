import Link from "next/dist/client/link";

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-purple-600/10 blur-[180px]" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* TOP */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/20 text-purple-400 px-5 py-2 rounded-full mb-6">
            🚀 PREMIUM ACCESS
          </div>

          <h1 className="text-7xl font-black leading-tight">
            Escolha seu plano
          </h1>

          <p className="text-zinc-400 text-xl mt-6 max-w-2xl mx-auto">
            Desbloqueie ferramentas premium, IA avançada,
            geração de imagens e recursos exclusivos.
          </p>
        </div>

        {/* PLANS */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* FREE */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-[35px] p-10 backdrop-blur-xl hover:border-zinc-700 transition">

            <h2 className="text-4xl font-black">
              FREE
            </h2>

            <div className="mt-8">
              <span className="text-6xl font-black">
                R$0
              </span>

              <span className="text-zinc-500 text-xl">
                /grátis
              </span>
            </div>

            <div className="space-y-5 mt-10 text-lg text-zinc-300">

              <div>✅ 5 gerações por dia</div>
              <div>✅ Ferramentas básicas</div>
              <div>✅ Acesso limitado</div>
              <div>❌ Sem IA avançada</div>
              <div>❌ Sem upload de imagens</div>

            </div>

            <button className="w-full mt-12 bg-zinc-800 hover:bg-zinc-700 transition rounded-2xl py-5 font-bold text-lg">
              Plano atual
            </button>
          </div>

          {/* PRO */}
          <div className="relative bg-gradient-to-b from-purple-600 to-pink-600 rounded-[40px] p-[1px] shadow-[0_0_80px_rgba(168,85,247,0.45)] scale-105">

            <div className="bg-[#14001f] rounded-[40px] p-10 h-full">

              <div className="absolute top-5 right-5 bg-white text-black text-sm font-bold px-4 py-2 rounded-full">
                MAIS POPULAR
              </div>

              <h2 className="text-4xl font-black">
                PRO 🚀
              </h2>

              <div className="mt-8">
                <span className="text-7xl font-black">
                  R$19
                </span>

                <span className="text-purple-200 text-xl">
                  /mês
                </span>
              </div>

              <div className="space-y-5 mt-10 text-lg">

                <div>🔥 Ferramentas premium</div>
                <div>🔥 Mais gerações</div>
                <div>🔥 Sem anúncios</div>
                <div>🔥 IA avançada</div>
                <div>🔥 Melhor velocidade</div>

              </div>

             <a
              href="https://www.mercadopago.com.br/checkout/v1/payment/redirect/be15a2f2-8466-42bf-b718-02b9598aeed0/payment-option-form/?preference-id=1879629028-906b956f-aa32-4a16-8d25-709a80ea4808&router-request-id=dff32d14-bd27-488d-b8fe-8753bc28c363&p=87921cc13cf0af960fb39866d1a241b4"
              target="_blank"
            >      
          <button className="w-full bg-white text-black font-black py-5 rounded-2xl hover:scale-105 transition">
           Assinar PRO
         </button>
         </a> 
      
            </div>
          </div>

          {/* BUSINESS */}
          <div className="relative bg-gradient-to-b from-yellow-500/30 to-black border border-yellow-500/40 rounded-[35px] p-10 backdrop-blur-xl hover:border-yellow-400 transition">

            <div className="absolute top-5 right-5 bg-yellow-400 text-black text-sm font-black px-4 py-2 rounded-full">
              BUSINESS
            </div>

            <h2 className="text-4xl font-black text-yellow-400">
              BUSINESS IA
            </h2>

            <div className="mt-8">
              <span className="text-7xl font-black">
                R$49
              </span>

              <span className="text-yellow-200 text-xl">
                /mês
              </span>
            </div>

            <div className="space-y-5 mt-10 text-lg text-zinc-200">

              <div>⚡ Tudo do PRO</div>
              <div>⚡ Chat IA avançado</div>
              <div>⚡ Upload de imagens</div>
              <div>⚡ Geração de imagens IA</div>
              <div>⚡ Futuro vídeo IA</div>
              <div>⚡ Recursos exclusivos</div>

            </div>

            <button className="w-full mt-12 bg-yellow-400 text-black hover:scale-105 transition rounded-2xl py-5 font-black text-xl">
              Assinar BUSINESS
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}