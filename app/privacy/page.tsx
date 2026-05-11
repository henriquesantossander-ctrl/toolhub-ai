export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Política de Privacidade
        </h1>

        <div className="space-y-8 text-zinc-300 leading-8">

          <p>
            O ToolHub IA respeita sua privacidade e protege
            suas informações pessoais.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-white">
              Informações coletadas
            </h2>

            <p>
              Podemos coletar informações como email,
              histórico de ferramentas utilizadas e dados
              de navegação para melhorar a experiência
              do usuário.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-white">
              Uso das informações
            </h2>

            <p>
              Os dados são utilizados apenas para melhorar
              a plataforma, personalizar ferramentas e
              analisar estatísticas de acesso.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-white">
              Google Analytics
            </h2>

            <p>
              Utilizamos ferramentas de análise como
              Google Analytics para entender como os
              usuários utilizam o site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 text-white">
              Segurança
            </h2>

            <p>
              Trabalhamos para proteger suas informações
              utilizando tecnologias modernas e seguras.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}