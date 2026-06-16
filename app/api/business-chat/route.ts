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

  const fileData = body.fileData;
  const fileName = body.fileName;
  const fileType = body.fileType;

  let pdfText = "";

  console.log("FILE NAME:", fileName);
  console.log("FILE TYPE:", fileType);
  console.log("HAS FILE:", !!fileData);

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

    console.log("PDF EXTRAIDO:");
    console.log(pdf.text.substring(0, 500));

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
          "Você é a IA avançada do ToolHub IA Business. Analise imagens, PDFs e responda detalhadamente.",
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