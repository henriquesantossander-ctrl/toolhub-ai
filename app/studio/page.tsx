
import FeatureLocked from "@/app/components/FeatureLocked";
import { canUseVideoAI } from "@/lib/permissions";
import ImageGenerator from "@/app/components/ImageGenerator";
import PhotoEditorPage from "@/app/components/PhotoEditor";
import VideoGenerator from "@/app/components/VideoGenerator";
import VideoScriptGenerator from "@/app/components/VideoScriptGenerator";
import StudioShell from "@/app/components/StudioShell";
import ProtectedFeature from "@/app/components/ProtectedFeature";

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
    <ProtectedFeature feature="photo-editor">
      <PhotoEditorPage />
    </ProtectedFeature>
  </StudioShell>
)}

      {tool === "video" && (
  <StudioShell current="video">
    <ProtectedFeature feature="video">
      <VideoGenerator />
    </ProtectedFeature>
  </StudioShell>
)}

      {tool === "video-script" && (
  <StudioShell current="video-script">
    <ProtectedFeature feature="video-script">
      <VideoScriptGenerator />
    </ProtectedFeature>
  </StudioShell>
)}
    </main>
  );
}