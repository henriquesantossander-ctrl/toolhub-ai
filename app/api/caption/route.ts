import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
Crie uma legenda moderna para Instagram sobre:

${body.prompt}

Regras:
- curta
- criativa
- com emojis
- estilo social media
- sem explicação
- sem aspas
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 120,
    });

    return Response.json({
      result: response.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      result: "Erro ao gerar legenda.",
    });
  }
}