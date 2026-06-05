import Replicate from "replicate";
import { NextResponse } from "next/server";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = body.prompt;

    const output = await replicate.run(
      "wavespeedai/wan-2.1-i2v-480p",
      {
        input: {
          prompt,
        },
      }
    );

    return NextResponse.json({
      success: true,
      video: output,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Erro ao gerar vídeo." },
      { status: 500 }
    );
  }
}