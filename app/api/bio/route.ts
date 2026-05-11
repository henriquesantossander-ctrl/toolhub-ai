import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
Crie uma bio curta, estilosa e moderna para redes sociais.

Nome/Tema:
${body.prompt}

A bio deve parecer de Instagram, Discord ou TikTok.
Use emojis.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return Response.json({
      result: completion.choices[0].message.content,
    });
  } catch (error: any) {
    console.log(error);

    return Response.json({
      result: "Erro ao gerar bio.",
    });
  }
}