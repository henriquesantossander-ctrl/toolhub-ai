import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const body = await req.json();

  const prompt = body.prompt;

  const result = await openai.images.generate({
    model: "gpt-image-1",
    prompt,
    size: "1024x1024",
  });

  const imageBase64 = result.data[0].b64_json;

  return NextResponse.json({
    image: `data:image/png;base64,${imageBase64}`,
  });
}