import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST() {
  try {
    const prompt = `
Crie 1 nick de Free Fire muito estiloso.

Regras:
- use símbolos legais
- estilo gamer/pro player
- curto
- único
- sem explicação
- sem aspas
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 60,
    });

    return Response.json({
      name: response.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      error: "Erro ao gerar nome.",
    });
  }
}