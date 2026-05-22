import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const image = body.image;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text:
                "Analise esta pessoa/foto e crie um prompt cinematográfico ultra detalhado para gerar uma versão épica estilo filme Hollywood, iluminação cinematográfica, ultra realista, dramatic shadows, depth of field, 8k, masterpiece.",
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
      size: "1024x1024",
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