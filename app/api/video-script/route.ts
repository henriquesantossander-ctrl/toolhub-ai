import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const body = await req.json();

  const prompt = body.prompt || "vídeo viral";

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      {
        role: "system",
        content:
          "Você é especialista em criar roteiros virais para TikTok, Shorts e Reels.",
      },
      {
        role: "user",
        content: `
Crie um roteiro viral sobre: ${prompt}

O roteiro deve:
- prender nos primeiros 3 segundos
- ter emoção
- parecer humano
- ser moderno
- incluir CTA no final
- ser ótimo para TikTok/Reels
`,
      },
    ],
  });

  return NextResponse.json({
    result: completion.choices[0].message.content,
  });
}