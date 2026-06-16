import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const body = await req.json();

  const message = body.message;
  const messages = body.messages || [];

  const response = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      {
        role: "system",
        content: "Você é a IA avançada do ToolHub IA Business.",
      },
      ...messages,
      {
        role: "user",
        content: message,
      },
    ],
  });

  return NextResponse.json({
    result: response.choices[0].message.content,
  });
}