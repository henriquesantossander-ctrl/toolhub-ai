import ImageGenerator from "@/components/ImageGenerator";
import Sidebar from "@/components/Sidebar";
import PhotoEditorPage from "@/components/PhotoEditor";
import VideoGenerator from "@/components/VideoGenerator";
import VideoScriptGenerator from "@/components/VideoScriptGenerator";

export default async function StudioPage({
  searchParams,
}: {
  searchParams: Promise<{ tool?: string }>;
}) {
  const params = await searchParams;
  const tool = params.tool || "image";

  return (
    <div className="flex min-h-screen bg-[#0B1120] text-white">
      <div className="flex min-h-screen bg-[#08111F] text-white relative"></div>
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_30%)]" />
        {tool === "image" && <ImageGenerator />}

        {tool === "photo-editor" && <PhotoEditorPage />}

        {tool === "video" && <VideoGenerator />}

        {tool === "video-script" && <VideoScriptGenerator />}

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