
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) {
  try {
    console.log("API VIDEO CHAMADA");

    const body = await req.json();

    const prompt = body.prompt;
    const imageUrl = body.imageUrl;
    const userId = body.userId;

    if (!prompt || !imageUrl) {
      return NextResponse.json(
        { error: "Prompt e imagem são obrigatórios." },
        { status: 400 }
      );
    }

    const promptFinal = `${prompt}, photorealistic, 8k, masterpiece, cinematic lighting, highly detailed skin texture, natural colors, realistic shadows, professional photography, high quality`;

    const response = await fetch(
  "https://queue.fal.run/fal-ai/kling-video/o3/standard/image-to-video",
  {
    method: "POST",
    headers: {
      Authorization: `Key ${process.env.FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: promptFinal,
      image_url: imageUrl,
      strength: 0.90,
      generate_audio: false,
    }),
  }
);

    const data = await response.json();

    console.log("RESPOSTA FAL:", data);

    if (!response.ok) {
      console.error(data);
      return NextResponse.json(
        { error: "Erro na Fal.ai", details: data },
        { status: 500 }
      );
    }

   let statusData = null;

for (let i = 0; i < 30; i++) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const statusResponse = await fetch(data.status_url, {
    headers: {
      Authorization: `Key ${process.env.FAL_KEY}`,
    },
  });

  statusData = await statusResponse.json();

  console.log("STATUS:", statusData);

  if (statusData?.status === "COMPLETED") {
  break;
}
}

if (!statusData || statusData.status !== "COMPLETED") {
  return NextResponse.json(
    { error: "Tempo limite excedido." },
    { status: 500 }
  );
}
    console.log("STATUS FINAL:", statusData);

  const resultResponse = await fetch(data.response_url, {
  headers: {
    Authorization: `Key ${process.env.FAL_KEY}`,
  },
});

console.log("HTTP:", resultResponse.status);

const rawText = await resultResponse.text();

console.log("VIDEO FINAL RAW:");
console.log(rawText);

let resultData = {};

try {
  resultData = JSON.parse(rawText);
} catch (e) {
  console.log("Não foi possível converter para JSON.");
}

console.log("VIDEO FINAL JSON:");
console.log(resultData);

if (!(resultData as any)?.video?.url) {
  return NextResponse.json(
    {
      error: "Fal não retornou video.url",
      details: resultData,
    },
    { status: 500 }
  );
}

const videoUrl = (resultData as any).video.url;

// Salva no Supabase
await supabaseAdmin.from("videos").insert({
  user_id: userId,
  video_url: videoUrl,
  prompt: prompt,
});

// Mantém apenas os 4 vídeos mais recentes
const { data: videos } = await supabaseAdmin
  .from("videos")
  .select("id")
  .order("created_at", { ascending: false });

if (videos && videos.length > 4) {
  const idsParaExcluir = videos.slice(4).map((v) => v.id);

  await supabaseAdmin
    .from("videos")
    .delete()
    .in("id", idsParaExcluir);
}

return NextResponse.json({
  success: true,
  videoUrl,
});

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Erro ao gerar vídeo." },
      { status: 500 }
    );
  }
}