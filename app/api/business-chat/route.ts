import OpenAI from "openai";
import { NextResponse } from "next/server";
const pdfParse = require("pdf-parse");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const body = await req.json();

  const message = body.message;
  const messages = body.messages || [];
  const image = body.image;
  const fileData = body.fileData;
  const fileName = body.fileName;
  const fileType = body.fileType;
   let pdfText = "";

if (
  fileData &&
  fileType === "application/pdf"
) {
  const base64 = fileData.split(",")[1];

  const buffer = Buffer.from(
    base64,
    "base64"
  );

  const pdf = await pdfParse(buffer);

  pdfText = pdf.text;
}
   
   const content: any[] = [
  {
    type: "text",
    text:
      message +
      (pdfText
        ? `\n\nConteúdo do PDF:\n${pdfText}`
        : ""),
  },
];

  
   if (
  fileData &&
  fileType?.startsWith("image/")
) {
  content.push({
    type: "image_url",
    image_url: {
      url: fileData,
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