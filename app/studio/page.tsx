import ImageGenerator from "@/components/ImageGenerator";
import Sidebar from "@/components/Sidebar";
import PhotoEditorPage from "@/components/PhotoEditor";


export default async function StudioPage({
searchParams,
}: {
searchParams: Promise<{ tool?: string }>;
}) {
const params = await searchParams;
const tool = params.tool || "home";

return ( <div className="flex min-h-screen bg-black text-white">


  <Sidebar />

  <main className="flex-1 p-8">


    {tool === "image" && <ImageGenerator />}
      <>
        <h1 className="text-4xl font-bold mb-4">
          ToolHub IA Studio
        </h1>

        <p className="text-zinc-400">
          Selecione uma ferramenta na barra lateral.
        </p>
      </>
    

    {tool === "photo-editor" && <PhotoEditorPage />}
    {tool === "image" && <ImageGenerator />}

  </main>

</div>


);
}
