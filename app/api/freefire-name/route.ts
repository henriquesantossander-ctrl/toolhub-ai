import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST() {
  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content:
          "Você cria nicknames únicos e criativos para Free Fire.",
      },
      {
        role: "user",
        content:
          "Crie 20 nicknames únicos para Free Fire. Não repita nomes. Use estilo gamer moderno e símbolos.",
      },
    ],
  });

  return NextResponse.json({
    name: completion.choices[0].message.content,
  });
}