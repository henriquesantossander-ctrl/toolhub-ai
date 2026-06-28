import ImageGenerator from "@/components/ImageGenerator";
import PhotoEditorPage from "@/components/PhotoEditor";
import VideoGenerator from "@/components/VideoGenerator";
import VideoScriptGenerator from "@/components/VideoScriptGenerator";
import StudioShell from "@/components/StudioShell";

export default async function StudioPage({
  searchParams,
}: {
  searchParams: Promise<{ tool?: string }>;
}) {
  const params = await searchParams;
  const tool = params.tool || "image";

  return (
    <main className="min-h-screen bg-black text-white">
      {tool === "image" && (
        <StudioShell current="image">
          <ImageGenerator />
        </StudioShell>
      )}

      {tool === "photo-editor" && (
        <StudioShell current="photo-editor">
          <PhotoEditorPage />
        </StudioShell>
      )}

      {tool === "video" && (
        <StudioShell current="video">
          <VideoGenerator />
        </StudioShell>
      )}

      {tool === "video-script" && (
        <StudioShell current="video-script">
          <VideoScriptGenerator />
        </StudioShell>
      )}
    </main>
  );
}