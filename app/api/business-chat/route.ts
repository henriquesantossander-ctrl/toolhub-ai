import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const body = await req.json();

  const message = body.message;
  const messages = body.messages || [];
  const image = body.image;

  const content: any[] = [
    {
      type: "text",
      text: message,
    },
  ];

  if (image) {
    content.push({
      type: "image_url",
      image_url: {
        url: image,
      },
    });
  }

  const response = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      {
        role: "system",
        content:
          "Você é a IA avançada do ToolHub IA Business.",
      },

      ...messages,

      {
        role: "user",
        content,
      },
    ],
  });

  return NextResponse.json({
    result: response.choices[0].message.content,
  });
}