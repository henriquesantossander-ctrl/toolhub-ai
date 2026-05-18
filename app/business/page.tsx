import BusinessCheckoutButton from "@/components/BusinessCheckoutButton";
import Link from "next/link";

const features = [
  {
    title: "Chat IA Avançado",
    desc: "Converse com uma IA inteligente com memória de contexto.",
    icon: "🧠",
  },
  {
    title: "Vision IA",
    desc: "Envie prints, imagens e erros para a IA analisar.",
    icon: "👁️",
  },
  {
    title: "Gerador de Imagens",
    desc: "Crie artes, thumbnails e imagens realistas com IA.",
    icon: "🎨",
  },
  {
    title: "Vídeo IA",
    desc: "Em breve: transforme ideias e imagens em vídeos.",
    icon: "🎬",
  },
];

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative px-6 py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 via-black to-black" />

        <div className="relative max-w-5xl mx-auto">
          <p className="inline-block mb-6 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-2 text-yellow-300 font-bold">
            🚀 Novo plano avançado
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-8">
            ToolHub IA Business
          </h1>

          <p className="text-zinc-300 text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            IA multimodal avançada para conversar, analisar imagens, gerar artes
            e criar conteúdos profissionais.
          </p>

          <BusinessCheckoutButton />
        </div>
      </section>

      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Ferramentas exclusivas Business
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 hover:border-yellow-500/70 transition hover:scale-105"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950">
            <h2 className="text-3xl font-bold mb-4">FREE</h2>
            <h3 className="text-5xl font-bold mb-8">R$0</h3>

            <ul className="space-y-4 text-zinc-300">
              <li>✅ 5 gerações grátis</li>
              <li>✅ Ferramentas básicas</li>
              <li>❌ Sem IA avançada</li>
              <li>❌ Sem Vision IA</li>
            </ul>
          </div>

          <div className="border border-purple-500 rounded-3xl p-8 bg-zinc-950 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 px-4 py-1 rounded-full text-sm font-bold">
              MAIS POPULAR
            </div>

            <h2 className="text-3xl font-bold mb-4">PRO</h2>
            <h3 className="text-5xl font-bold mb-8">R$19</h3>

            <ul className="space-y-4 text-zinc-300">
              <li>✅ Mais gerações</li>
              <li>✅ Sem anúncios</li>
              <li>✅ Ferramentas premium</li>
              <li>❌ Sem IA multimodal</li>
            </ul>
          </div>

          <div className="border border-yellow-500 rounded-3xl p-8 bg-gradient-to-b from-yellow-500/10 to-zinc-950 relative">
            <div className="absolute top-0 right-0 bg-yellow-500 text-black px-4 py-1 text-sm font-bold rounded-bl-2xl">
              BUSINESS
            </div>

            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              BUSINESS IA
            </h2>

            <h3 className="text-5xl font-bold mb-8">R$49</h3>

            <ul className="space-y-4 text-zinc-200">
              <li>🔥 IA estilo ChatGPT</li>
              <li>🔥 Memória de conversa</li>
              <li>🔥 Upload de imagens</li>
              <li>🔥 Vision IA</li>
              <li>🔥 Geração de imagens IA</li>
              <li>🔥 Chat multimodal</li>
              <li>🔥 Futuro vídeo IA</li>
            </ul>

            <div className="mt-10">
              <BusinessCheckoutButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}