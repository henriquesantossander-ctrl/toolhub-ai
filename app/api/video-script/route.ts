import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const prompt = body.prompt || "vídeo viral";

  const scripts = [
    `🎬 GANCHO: Você sabia disso sobre ${prompt}?

😳 A maioria das pessoas não percebe isso...

🔥 Aqui vai o segredo:
1. Comece diferente
2. Prenda atenção nos primeiros 3 segundos
3. Faça cortes rápidos
4. Termine criando curiosidade

🚀 CTA: Me segue para mais dicas!`,

    `🎬 GANCHO: O erro que todo mundo comete em ${prompt}

⚡ Se você faz isso, está perdendo views.

📌 Faça assim:
- use frases rápidas
- coloque legenda grande
- use música em alta
- mantenha ritmo acelerado

🔥 CTA: Compartilha com alguém!`,

    `🎬 GANCHO: Isso aqui pode viralizar hoje.

📱 Tema: ${prompt}

💡 Estrutura:
- Começo impactante
- Informação rápida
- Reação forte
- Final criando curiosidade

🚀 CTA: Curte para parte 2!`
  ];

  const randomScript = scripts[Math.floor(Math.random() * scripts.length)];

  return NextResponse.json({
    result: randomScript,
  });
}