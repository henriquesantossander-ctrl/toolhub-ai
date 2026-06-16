
import ImageGenerator from "@/components/ImageGenerator";
import Sidebar from "@/components/Sidebar";
import PhotoEditorPage from "@/components/PhotoEditor";


export default async function StudioPage({
  searchParams,
}: {
  searchParams: Promise<{ tool?: string }>;
}) {
  const params = await searchParams;
  const tool = params.tool || "image";

  return (
    <div className="flex min-h-screen bg-black text-white">

      <Sidebar />

      <main className="flex-1 p-8">


        {tool === "image" && <ImageGenerator />}

        {tool === "photo-editor" && <PhotoEditorPage />}

       
        {tool === "home" && (
          <>
            <h1 className="text-4xl font-bold mb-4">
              ToolHub IA Studio
            </h1>

            <p className="text-zinc-400">
              Selecione uma ferramenta na barra lateral.
            </p>
          </>
        )}

      </main>

    </div>
  );
}