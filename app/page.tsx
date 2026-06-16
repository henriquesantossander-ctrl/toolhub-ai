import ImageGenerator from "@/components/ImageGenerator";
import PhotoEditorPage from "@/components/PhotoEditor";
import VideoGenerator from "@/components/VideoGenerator";
import VideoScriptGenerator from "@/components/VideoScriptGenerator";
import Sidebar from "@/components/Sidebar";

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

        {tool === "video" && <VideoGenerator />}

        {tool === "video-script" && <VideoScriptGenerator />}
      </main>
    </div>
  );
}