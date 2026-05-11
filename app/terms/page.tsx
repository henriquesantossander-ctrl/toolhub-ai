export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Termos de Uso
        </h1>

        <div className="space-y-8 text-zinc-300 leading-8 text-lg">

          <p>
            Ao utilizar o ToolHub IA, você concorda com
            os termos e condições desta plataforma.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-white">
              Uso da plataforma
            </h2>

            <p>
              O usuário concorda em utilizar a plataforma
              de maneira responsável e legal.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-white">
              Conteúdo gerado
            </h2>

            <p>
              As ferramentas geram conteúdos automaticamente
              e o usuário é responsável pelo uso das informações.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-white">
              Alterações
            </h2>

            <p>
              O ToolHub IA pode atualizar estes termos
              a qualquer momento sem aviso prévio.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}