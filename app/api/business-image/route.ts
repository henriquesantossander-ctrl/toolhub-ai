import { NextResponse } from "next/server";

export async function POST(req: Request) {
try {
const formData = await req.formData();

const prompt = formData.get("prompt");
const images = formData.getAll("images");

console.log("IMAGENS:", images.length);

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


