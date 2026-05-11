export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Contato
        </h1>

        <p className="text-zinc-400 text-lg mb-12">
          Entre em contato com a equipe ToolHub IA.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 space-y-8">

          <div>
            <h2 className="text-2xl font-bold mb-3">
              📧 Email
            </h2>

            <p className="text-zinc-400">
              contato@toolhubia.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              🌎 Plataforma
            </h2>

            <p className="text-zinc-400">
              Ferramentas modernas para internet e redes sociais.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              🚀 Suporte
            </h2>

            <p className="text-zinc-400">
              Respondemos dúvidas, sugestões e parcerias.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}