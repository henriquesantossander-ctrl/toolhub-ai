"use client";
import { supabase } from "@/lib/supabase";
export default function CreditsPage() {
    async function buyCredits(
  credits: number,
  price: number
) {
      console.log("CLICOU", credits, price);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) {
    window.location.href = "/login";
    return;
  }

  const response = await fetch(
    "/api/credits/checkout",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({
        credits,
        price,
      }),
    }
  );

  const data = await response.json();

  if (data.init_point) {
    window.location.href = data.init_point;
  }
}
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-3 text-4xl font-bold">
          Comprar Créditos
        </h1>

        <p className="mb-10 text-zinc-400">
          Adicione mais créditos para continuar criando vídeos.
        </p>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">5 Créditos</h2>
            <p className="mt-2 text-zinc-400">
              Aproximadamente 5 vídeos de 5 segundos.
            </p>

            <p className="mt-6 text-4xl font-bold">
              R$ 29,90
            </p>

            <button
  onClick={() => buyCredits(5, 29.9)}
  className="mt-8 w-full rounded-2xl bg-violet-600 py-4 font-semibold"
>
  Comprar
</button>
          </div>

          <div className="rounded-3xl border border-violet-500 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">10 Créditos</h2>
            <p className="mt-2 text-zinc-400">
              Melhor custo-benefício.
            </p>

            <p className="mt-6 text-4xl font-bold">
              R$ 49,90
            </p>

           <button
  onClick={() => buyCredits(10, 49.9)}
  className="mt-8 w-full rounded-2xl bg-violet-600 py-4 font-semibold"
>
  Comprar
</button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">20 Créditos</h2>
            <p className="mt-2 text-zinc-400">
              Para usuários que geram muitos vídeos.
            </p>

            <p className="mt-6 text-4xl font-bold">
              R$ 89,90
            </p>

               <button
  onClick={() => buyCredits(20, 89.9)}
  className="mt-8 w-full rounded-2xl bg-violet-600 py-4 font-semibold"
>
  Comprar
</button>

          </div>

        </div>
      </div>
    </main>
  );
}