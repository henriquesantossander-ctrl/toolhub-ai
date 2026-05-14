export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
        <h1 className="text-5xl font-bold mb-6">Contato</h1>

        <p className="text-zinc-400 mb-6">
          Tem dúvidas, sugestões ou problemas no site? Entre em contato com a ToolHub IA.
        </p>

        <div className="space-y-4 text-lg">
          <p><strong>Email:</strong> suporte@toolhubia.com.br</p>
          <p><strong>Tempo médio de resposta:</strong> até 24 horas</p>
          <p><strong>Assuntos:</strong> login, assinatura PRO, erros, sugestões, parcerias e publicidade.</p>
        </div>
      </div>
    </main>
  );
}