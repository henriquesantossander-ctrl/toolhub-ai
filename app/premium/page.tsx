
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-[#080B14] text-white overflow-hidden">

      {/* BACKGROUND */}
    <div
  className="fixed inset-0 pointer-events-none"
  style={{
    background: `
      radial-gradient(circle at 20% 0%, rgba(59,130,246,0.35) 0%, transparent 35%),
      radial-gradient(circle at 80% 10%, rgba(37,99,235,0.25) 0%, transparent 30%),
      radial-gradient(circle at 50% 100%, rgba(29,78,216,0.15) 0%, transparent 40%)
    `,
  }}
/>
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HEADER */}
        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-400">
           <span className="h-2 w-2 rounded-full bg-blue-500" />
          ToolHub IA Premium
        </div>
          <p className="text-zinc-600 text-sm mt-4">
  Mais recursos. Mais velocidade. Mais possibilidades.
</p>
      <h1 className="mt-8 text-6xl md:text-7xl font-black tracking-tight leading-[0.95]">
  Desbloqueie todo o
  <br />
  <span className="bg-gradient-to-r from-white via-white to-violet-400 bg-clip-text text-transparent">
    potencial da IA
  </span>
</h1>

<p className="mt-8 text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
  Crie imagens, edite fotos, gere roteiros e produza vídeos com inteligência artificial em poucos segundos.
</p>

<p className="mt-4 text-zinc-500 text-lg max-w-3xl mx-auto">
  Tudo em uma única plataforma profissional para criadores de conteúdo.
</p>
<div className="flex flex-wrap justify-center gap-3 mt-8">
  
  <div className="bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full text-sm text-zinc-300">
    IA de imagens
  </div>

  <div className="bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full text-sm text-zinc-300">
    Vídeos IA
  </div>


  <div className="bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full text-sm text-zinc-300">
    Multimodal
  </div>

</div>
        </div>

        {/* CARDS */}
        <div className="grid items-stretch gap-8 lg:grid-cols-3">

          {/* FREE */}
          <div className="rounded-[34px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.25)] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/20 flex flex-col">

            <p className="text-zinc-500 text-sm mb-4">
              FREE
            </p>

            <div className="mt-4 flex items-end gap-1">

  <span className="text-2xl text-zinc-400">
    R$
  </span>

  <span className="text-6xl font-black tracking-tight">
    0
  </span>

</div>

            <p className="text-zinc-500 mt-3">
              Ideal para testar a plataforma
            </p>

             <div className="mt-10 space-y-5">

  {[
    "1 geração de imagem por dia",
    "Gerador de Imagem",
    "Editor de Imagem",
    "Gerador de Roteiro",
  ].map((item) => (
    <div
      key={item}
      className="flex items-center gap-3 text-zinc-300"
    >
      <CheckCircle2
        size={18}
        className="text-emerald-400"
      />

      <span>{item}</span>
    </div>
  ))}

</div>

           <button className="w-full mt-auto bg-white/5 border border-white/10 py-4 rounded-2xl hover:bg-white/10 transition">
              Começar grátis
            </button>

          </div>

          {/* PRO */}
          <div className="relative rounded-[34px] border border-purple-500/30 bg-gradient-to-b from-[#171B2D] to-[#10131F] p-10 shadow-[0_25px_70px_rgba(124,58,237,.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(124,58,237,.25)] flex flex-col">

            <div className="absolute top-5 right-5 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs px-4 py-2 rounded-full">
              MAIS POPULAR
            </div>

            <p className="text-purple-400 text-sm mb-4">
              PRO
            </p>

            <div className="mt-4 flex items-end gap-1">

  <span className="text-2xl text-zinc-400">
    R$
  </span>

  <span className="text-6xl font-black tracking-tight">
    19
  </span>

  <span className="mb-2 text-xl text-zinc-400">
    ,90
  </span>

</div>

<p className="mt-2 text-zinc-500">
  por mês
</p>

            <p className="text-zinc-500 mt-3">
              Para criadores e uso diário
            </p>

            <div className="mt-10 space-y-5">

  {[
    "10 gerações premium por mês",
    "Editor de Imagem",
    "Gerador de Roteiro",
    "Qualidade HD",
    "Sem anúncios",
  ].map((item) => (
    <div
      key={item}
      className="flex items-center gap-3 text-zinc-300"
    >
      <CheckCircle2
        size={18}
        className="text-violet-400"
      />

      <span>{item}</span>
    </div>
  ))}

</div>

            <a
              href="https://www.mercadopago.com.br/checkout/v1/payment/redirect/be15a2f2-8466-42bf-b718-02b9598aeed0/payment-option-form/?preference-id=1879629028-906b956f-aa32-4a16-8d25-709a80ea4808&router-request-id=dff32d14-bd27-488d-b8fe-8753bc28c363&p=87921cc13cf0af960fb39866d1a241b4"
              target="_blank"
            >
              <button className="w-full mt-auto bg-purple-600 hover:bg-purple-500 transition py-4 rounded-2xl font-medium">
                Assinar PRO
              </button>
            </a>

          </div>

          {/* BUSINESS */}
          <div className="relative overflow-hidden rounded-[34px] border border-fuchsia-400/30 bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-600 p-10 shadow-[0_35px_100px_rgba(168,85,247,.35)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] flex flex-col">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-pink-400/20 blur-3xl" />
          <div className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-yellow-300">
  ⭐ Mais vendido
</div>

            <p className="relative z-10 text-white/70 text-sm mb-4">
              BUSINESS
            </p>

            <div className="mt-4 flex items-end gap-1">

  <span className="text-2xl text-white/80">
    R$
  </span>

  <span className="text-7xl font-black tracking-tight">
    49
  </span>

  <span className="mb-2 text-2xl text-white/70">
    ,90
  </span>

</div>

<p className="mt-2 text-white/70">
  por mês
</p>

             <p className="mt-3 text-white/90 text-lg">
  Para criadores e empresas que utilizam IA diariamente.
</p>

           <div className="mt-10 space-y-5">

  {[
    "Tudo do PRO",
    "Vídeo IA Premium",
    "Imagem → Vídeo",
    "Upload de imagens",
    "Histórico dos vídeos",
    "10 créditos de vídeo inclusos",
    "Compra de créditos extras",
    "Prioridade máxima",
    "Sem anúncios",
  ].map((item) => (
    <div
      key={item}
      className="flex items-center gap-3 text-white"
    >
      <CheckCircle2
        size={19}
        className="text-yellow-300"
      />

      <span className="font-medium">
        {item}
      </span>
    </div>
  ))}

</div>

            <a
              href="https://www.mercadopago.com.br/checkout/v1/payment/redirect/b982205c-0d1e-4513-8c6c-536ff07a298b/payment-option-form/?preference-id=1879629028-52dc84a0-55eb-4730-b23d-4fd4762d9892&router-request-id=cbf9b145-2964-4481-8bdb-6120b72ae5b7&p=87921cc13cf0af960fb39866d1a241b4"
              target="_blank"
            >
              <button className="w-full mt-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition">
                Assinar BUSINESS
              </button>
            </a>

          </div>

        </div>

      </section>
      {/* COMPARAÇÃO DOS PLANOS */}

<div className="mt-24">

  <h2 className="text-center text-4xl font-bold">
    Compare os planos
  </h2>

  <p className="mt-4 text-center text-zinc-500">
    Escolha o plano ideal para o seu nível de criação.
  </p>
  <div className="mt-12 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">

  {/* CABEÇALHO */}

  {/* Gerador de Imagem */}

<div className="grid grid-cols-4 border-b border-white/5">
  <div className="p-5 font-medium text-zinc-300">
    Gerador de Imagem
  </div>

  <div className="flex justify-center items-center">
    <CheckCircle2 size={20} className="text-emerald-400" />
  </div>

  <div className="flex justify-center items-center">
    <CheckCircle2 size={20} className="text-violet-400" />
  </div>

  <div className="flex justify-center items-center">
    <CheckCircle2 size={20} className="text-yellow-300" />
  </div>
</div>

{/* Editor */}

<div className="grid grid-cols-4 border-b border-white/5">
  <div className="p-5 font-medium text-zinc-300">
    Editor de Imagem
  </div>

  <div className="flex justify-center items-center">
    <CheckCircle2 size={20} className="text-emerald-400" />
  </div>

  <div className="flex justify-center items-center">
    <CheckCircle2 size={20} className="text-violet-400" />
  </div>

  <div className="flex justify-center items-center">
    <CheckCircle2 size={20} className="text-yellow-300" />
  </div>
</div>

{/* Roteiro */}

<div className="grid grid-cols-4 border-b border-white/5">
  <div className="p-5 font-medium text-zinc-300">
    Gerador de Roteiro
  </div>

  <div className="flex justify-center items-center">
    <CheckCircle2 size={20} className="text-emerald-400" />
  </div>

  <div className="flex justify-center items-center">
    <CheckCircle2 size={20} className="text-violet-400" />
  </div>

  <div className="flex justify-center items-center">
    <CheckCircle2 size={20} className="text-yellow-300" />
  </div>
</div>

{/* Vídeo IA */}

<div className="grid grid-cols-4 border-b border-white/5">
  <div className="p-5 font-medium text-zinc-300">
    Vídeo IA
  </div>

  <div className="flex justify-center items-center text-zinc-600">
    —
  </div>

  <div className="flex justify-center items-center text-zinc-600">
    —
  </div>

  <div className="flex justify-center items-center">
    <CheckCircle2 size={20} className="text-yellow-300" />
  </div>
</div>

{/* Créditos */}

<div className="grid grid-cols-4 border-b border-white/5">
  <div className="p-5 font-medium text-zinc-300">
    Créditos de Vídeo
  </div>

  <div className="flex justify-center items-center text-zinc-600">
    —
  </div>

  <div className="flex justify-center items-center text-zinc-600">
    —
  </div>

  <div className="flex justify-center items-center text-yellow-300 font-semibold">
    10
  </div>
</div>

{/* Sem anúncios */}

<div className="grid grid-cols-4">
  <div className="p-5 font-medium text-zinc-300">
    Sem anúncios
  </div>

  <div className="flex justify-center items-center text-zinc-600">
    —
  </div>

  <div className="flex justify-center items-center">
    <CheckCircle2 size={20} className="text-violet-400" />
  </div>

  <div className="flex justify-center items-center">
    <CheckCircle2 size={20} className="text-yellow-300" />
  </div>
</div>
</div>

</div>
    </main>
  );
}

