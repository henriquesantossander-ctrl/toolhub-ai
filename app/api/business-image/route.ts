import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log(Object.keys(openai.images));
export async function POST(req: Request) {
  try {
    console.log("API BUSINESS IMAGE CHAMADA");

    const formData = await req.formData();

    const prompt = formData.get("prompt") as string;
    const images = formData.getAll("images");

console.log("PROMPT:", prompt);
console.log("IMAGENS:", images.length);
console.log(images);

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt não informado." },
        { status: 400 }
      );
    }

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
    });

    const imageBase64 = result.data?.[0]?.b64_json;

    if (!imageBase64) {
      return NextResponse.json(
        { error: "Erro ao gerar imagem." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      image: `data:image/png;base64,${imageBase64}`,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}