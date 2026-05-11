import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
Crie hashtags virais e modernas para:

${body.prompt}

Regras:
- gere apenas hashtags
- hashtags populares
- sem explicações
- use até 15 hashtags
- foco em alcance
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 120,
    });

    return Response.json({
      result: response.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      result: "Erro ao gerar hashtags.",
    });
  }
}