import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
try {
const formData = await req.formData();


const prompt = formData.get("prompt");
const image = formData.get("image") as File;

console.log("PROMPT:", prompt);
console.log("NOME:", image?.name);
console.log("TIPO:", image?.type);
console.log("TAMANHO:", image?.size);

console.log("OPENAI:", typeof openai);
console.dir(openai.images, { depth: 2 });

console.log(
  "PROTO:",
  Object.getOwnPropertyNames(
    Object.getPrototypeOf(openai.images)
  )
);

return NextResponse.json({
  image: "https://picsum.photos/1024/1024",
});


} catch (error) {
console.error(error);


return NextResponse.json(
  { error: "Erro interno do servidor." },
  { status: 500 }
);


}
}
