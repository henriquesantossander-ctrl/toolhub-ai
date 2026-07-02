type Props = {
  file: File | null;
  setFile: (file: File | null) => void;
};

export default function VideoUploadMobile({
  file,
  setFile,
}: Props) {
  return (
    <>
      <h2 className="mb-5 text-2xl font-bold text-zinc-900">
        1. Envie uma imagem
      </h2>

      <label className="mb-6 flex h-56 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-50 transition hover:bg-zinc-100">

        {file ? (
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            className="h-full w-full rounded-3xl object-cover"
          />
        ) : (
          <>
            <span className="text-5xl">📷</span>

            <span className="mt-5 text-xl font-semibold text-zinc-700">
              Toque para enviar uma imagem
            </span>

            <span className="mt-2 text-zinc-500">
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
    </>
  );
}