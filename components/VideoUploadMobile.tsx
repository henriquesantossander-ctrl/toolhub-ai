type Props = {
  file: File | null;
  setFile: (file: File | null) => void;
};
import { ImagePlus } from "lucide-react";

export default function VideoUploadMobile({
  file,
  setFile,
}: Props) {
  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-zinc-900">
  1. Envie uma imagem
</h2>

      <label 
  className="flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-50 transition hover:bg-zinc-100"
>

        {file ? (
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            className="h-full w-full rounded-3xl object-cover"
          />
        ) : (
          <>
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-100">
  <ImagePlus
    size={42}
    className="text-violet-600"
  />
</div>

            <span className="mt-2 text-center text-2xl font-bold text-zinc-800">
Toque para enviar uma imagem
</span>

            <span className="mt-4 text-base font-medium tracking-wide text-zinc-500">
JPG • PNG • WEBP
</span>
          </>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="hidden"
        />
      </label>
      {file && (
  <div className="mt-5 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
    <img
      src={URL.createObjectURL(file)}
      alt="Preview"
      className="h-64 w-full object-cover"
    />
  </div>
)}
    </>
  );
}