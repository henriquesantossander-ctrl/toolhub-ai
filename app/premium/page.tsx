
import Link from "next/link";
import {
  CheckCircle2,
  Image,
  Clapperboard,
  FileText,
} from "lucide-react";

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-[#F3F5FA] text-zinc-900 overflow-hidden">

     {/* BACKGROUND */}
<div
  className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/backgrounds/premium-bg.png')"
  }}
/>

<div className="fixed inset-0 -z-10 bg-white/30 backdrop-blur-[0.5px]" />
      <section className="relative mx-auto mt-10 max-w-7xl rounded-[34px] border border-zinc-200 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)]">
        {/* HEADER */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-400">
           <span className="h-2 w-2 rounded-full bg-blue-500" />
          ToolHub IA Premium
        </div>
          <p className="text-zinc-600 text-sm mt-4">
  Mais recursos. Mais velocidade. Mais possibilidades.
</p>
      <h1 className="mt-6 text-5xl md:text-6xl font-black tracking-tight leading-none">
  Desbloqueie todo o
  <br />
  <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
    potencial da IA
  </span>
</h1>

<p className="mt-5 max-w-2xl mx-auto text-lg leading-7 text-zinc-600">
  Crie imagens, edite fotos, gere roteiros e produza vídeos com inteligência artificial em poucos segundos.
</p>

<p className="mt-3 max-w-2xl mx-auto text-base text-zinc-500">
  Tudo em uma única plataforma profissional para criadores de conteúdo.
</p>

  
        </div>

        {/* CARDS */}
        <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-3">

          {/* FREE */}
         <div className="rounded-[34px] border border-zinc-200 bg-white p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(139,92,246,.12)]">
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
    "1 geração de imagem por semana",
    "Gerador de Imagem",
    "Editor de Imagem",
    "Gerador de Roteiro",
  ].map((item) => (
    <div
      key={item}
      className="flex items-center gap-3 text-zinc-800"
    >
      <CheckCircle2
        size={18}
        className="text-emerald-400"
      />

      <span>{item}</span>
    </div>
  ))}

</div>

          <button className="w-full mt-auto rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 py-4 font-semibold text-white transition hover:opacity-90">
  Começar grátis
</button>

          </div>

          {/* PRO */}
          <div className="relative rounded-[34px] border border-zinc-200 bg-white p-10 shadow-[0_25px_70px_rgba(124,58,237,.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(124,58,237,.25)] flex flex-col">

            <div className="absolute top-5 right-5 rounded-full border border-violet-200 bg-violet-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-violet-700">
  MAIS POPULAR
</div>

            <p className="text-purple-400 text-sm mb-4">
              PRO
            </p>

            <div className="mt-4 flex items-end gap-1">

  <span className="text-2xl text-zinc-400">
    R$
  </span>

  <span className="text-6xl font-black tracking-tight text-violet-600">
    19
  </span>

  <span className="mb-2 text-xl text-violet-600">
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
      className="flex items-center gap-3 text-zinc-800"
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
              <button className="w-full rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 py-4 font-semibold text-white transition hover:opacity-90">
                Assinar PRO
              </button>
            </a>

          </div>

          {/* BUSINESS */}
          <div className="relative rounded-[34px] border-2 border-violet-500 bg-white p-10 shadow-[0_35px_80px_rgba(139,92,246,.18)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-pink-400/20 blur-3xl" />
           <div className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-violet-700">
  ⭐ MAIS VENDIDO
</div>

            <p className="relative z-10 text-violet-600 text-sm font-semibold mb-4">
  BUSINESS
</p>

            <div className="mt-4 flex items-end gap-1">

  <span className="text-2xl text-violet-600 font-semibold">
  R$
</span>
    
  

  <span className="text-7xl font-black  text-violet-600">
  49
</span>

  <span className="mb-2 text-2xl text-violet-600">
    ,90
  </span>

</div>

  <p className="mt-2 text-zinc-500">
  por mês
  </p>
  
         <p className="mt-3 text-zinc-700 text-lg">
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
      className="flex items-center gap-3 text-zinc-800"
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
              <button className="w-full mt-auto rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 py-4 font-semibold text-white transition hover:opacity-90">
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
  <div className="mt-12 overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,.08)]">
  {/* CABEÇALHO */}
  <div className="grid grid-cols-4 border-b border-zinc-200 bg-zinc-50">

  <div className="p-5"></div>

  <div className="p-5 text-center font-bold text-zinc-700">
    FREE
  </div>

  <div className="p-5 text-center font-bold text-violet-600">
    PRO
  </div>

  <div className="p-5 text-center font-bold text-violet-600">
    BUSINESS
  </div>

</div>

  {/* Gerador de Imagem */}

<div className="grid grid-cols-4 border-b border-white/5">
  <div className="p-6 font-medium text-zinc-900">
    Gerador de Imagem
  </div>

    <div className="flex items-center justify-center p-6">
    <CheckCircle2 size={20} className="text-emerald-400" />
  </div>

  <div className="flex items-center justify-center p-6">
    <CheckCircle2 size={20} className="text-violet-400" />
  </div>

  <div className="flex items-center justify-center p-6">
    <CheckCircle2 size={20} className="text-yellow-300" />
  </div>
</div>

{/* Editor */}

<div className="grid grid-cols-4 border-b border-white/5">
  <div className="p-6 font-medium text-zinc-900">
    Editor de Imagem
  </div>

  <div className="flex items-center justify-center p-6">
    <CheckCircle2 size={20} className="text-emerald-400" />
  </div>

  <div className="flex items-center justify-center p-6">
    <CheckCircle2 size={20} className="text-violet-400" />
  </div>

  <div className="flex items-center justify-center p-6">
    <CheckCircle2 size={20} className="text-yellow-300" />
  </div>
</div>

{/* Roteiro */}

<div className="grid grid-cols-4 border-b border-white/5">
  <div className="p-6 font-medium text-zinc-900">
    Gerador de Roteiro
  </div>

  <div className="flex items-center justify-center p-6">
    <CheckCircle2 size={20} className="text-emerald-400" />
  </div>

  <div className="flex items-center justify-center p-6">
    <CheckCircle2 size={20} className="text-violet-400" />
  </div>

  <div className="flex items-center justify-center p-6">
    <CheckCircle2 size={20} className="text-yellow-300" />
  </div>
</div>

{/* Vídeo IA */}

<div className="grid grid-cols-4 border-b border-white/5">
  <div className="p-6 font-medium text-zinc-900">
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
  <div className="p-5 font-medium text-zinc-800">
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
  <div className="p-6 font-medium text-zinc-900">
    Sem anúncios
  </div>

  <div className="flex justify-center items-center text-zinc-600">
    —
  </div>

  <div className="flex items-center justify-center p-6">
    <CheckCircle2 size={20} className="text-violet-400" />
  </div>

  <div className="flex items-center justify-center p-6">
    <CheckCircle2 size={20} className="text-yellow-300" />
  </div>
</div>
</div>

</div>
    </main>
  );
}

