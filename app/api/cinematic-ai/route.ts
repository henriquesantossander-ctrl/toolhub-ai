import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const image = body.image;
    const instruction = body.instruction;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `
O usuário quer transformar a imagem enviada.

Pedido do usuário:
"${instruction}"

Crie um prompt MUITO detalhado para edição de imagem ultra realista.

Regras IMPORTANTES:
- Preserve a identidade da pessoa
- Preserve rosto e aparência principal
- Faça mudanças cinematográficas fortes
- Ultra realista
- Qualidade profissional
- Iluminação cinematográfica
- Sem deformar rosto
- Sem olhos estranhos
- Sem mãos deformadas
- Parecer foto real
- 8k
- masterpiece
- dramatic lighting
- photorealistic
`,
            },
            {
              type: "image_url",
              image_url: {
                url: image,
              },
            },
          ],
        },
      ],
    });

    const cinematicPrompt =
      response.choices[0].message.content || "";

    const imageResult = await openai.images.generate({
      model: "gpt-image-1",
      prompt: cinematicPrompt,
      size: "1536x1024",
    });

    const generatedImage =
      imageResult.data?.[0]?.b64_json;

    if (!generatedImage) {
      return NextResponse.json(
        { error: "Erro ao gerar imagem." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      image: `data:image/png;base64,${generatedImage}`,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Erro na IA cinematográfica." },
      { status: 500 }
    );
  }
}