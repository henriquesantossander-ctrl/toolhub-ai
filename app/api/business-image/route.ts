import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
try {
const formData = await req.formData();


const prompt = formData.get("prompt") as string;

if (!prompt) {
  return NextResponse.json(
    { error: "Digite um prompt." },
    { status: 400 }
  );
}

console.log("PROMPT RECEBIDO:", prompt);

const result = await openai.images.generate({
  model: "gpt-image-1",
  prompt,
  size: "1024x1024",
});

const imageBase64 = result.data?.[0]?.b64_json;

if (!imageBase64) {
  return NextResponse.json(
    { error: "Nenhuma imagem retornada." },
    { status: 500 }
  );
}

return NextResponse.json({
  image: `data:image/png;base64,${imageBase64}`,
});


} catch (error) {
console.error("ERRO OPENAI:", error);


return NextResponse.json(
  { error: "Erro ao gerar imagem." },
  { status: 500 }
);


}
}


