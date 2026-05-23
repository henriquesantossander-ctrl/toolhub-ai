import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const image = body.image;
    const style = body.style || "Hollywood";

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `
Analise a imagem enviada e crie um prompt MUITO FORTE para transformar essa pessoa/foto no estilo: ${style}.

Regras:
- Preserve a identidade principal da pessoa
- Preserve traços do rosto
- Transforme completamente o ambiente, iluminação, roupa e atmosfera
- Resultado deve parecer pôster de filme profissional
- Ultra realista
- Cinematic lighting
- Dramatic shadows
- Depth of field
- High detail
- 8k
- Sem texto na imagem
- Sem distorcer o rosto
- Sem deformar mãos, olhos ou boca

Se o estilo for Cyberpunk:
use cidade neon, chuva, luz roxa e azul, tecnologia futurista.

Se o estilo for Hollywood:
use cena épica, iluminação de cinema, fundo dramático, visual de protagonista.

Se o estilo for Anime:
use visual anime cinematográfico, cores fortes, fundo estilizado e personagem épico.
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

    const cinematicPrompt = response.choices[0].message.content || "";

    const imageResult = await openai.images.generate({
      model: "gpt-image-1",
      prompt: cinematicPrompt,
      size: "1024x1024",
    });

    const generatedImage = imageResult.data?.[0]?.b64_json;

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