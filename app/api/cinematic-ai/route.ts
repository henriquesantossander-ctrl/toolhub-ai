import OpenAI, { toFile } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const image = body.image;
    const instruction = body.instruction;

    const base64Data = image.split(",")[1];
    const buffer = Buffer.from(base64Data, "base64");

    const imageFile = await toFile(buffer, "image.png", {
      type: "image/png",
    });

    const result = await openai.images.edit({
      model: "gpt-image-1",
      image: imageFile,
      prompt: `
Edite a imagem original seguindo exatamente esta instrução:

${instruction}

Regras:
- Preserve a foto original o máximo possível
- Preserve as pessoas originais
- Preserve rostos, identidade, pose e cenário
- Não recrie a imagem do zero
- Não troque as pessoas por outras
- Faça apenas a alteração pedida
- Resultado realista e natural
`,
      size: "1024x1024",
      input_fidelity: "high",
    });

    const editedImage = result.data?.[0]?.b64_json;

    if (!editedImage) {
      return NextResponse.json(
        { error: "Erro ao editar imagem." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      image: `data:image/png;base64,${editedImage}`,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Erro ao editar imagem com IA." },
      { status: 500 }
    );
  }
}