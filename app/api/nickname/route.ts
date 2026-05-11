import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
Crie 10 nicknames gamers únicos.

IMPORTANTE:
cada nickname deve ficar em uma linha separada.

Regras:
- não numerar
- não repetir
- usar símbolos modernos
- estilo Free Fire, Valorant e Discord
- nicknames curtos
- visual raro
- sem explicações
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 200,
    });

    return Response.json({
      result: response.choices[0].message.content,
    });

  } catch (error) {
    console.log(error);

    return Response.json({
      result: "Erro ao gerar nick.",
    });
  }
}