type Props = {
  file: File | null;
  setFile: (file: File | null) => void;
};

export default function VideoUploaderDesktop({
  file,
  setFile,
}: Props) {
  return (
    <>
      <h2 className="mb-6 text-2xl font-bold text-zinc-900">
        1. Envie uma imagem
      </h2>

      <div className="mb-8 grid grid-cols-2 gap-4">
        <label className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-50 transition hover:bg-zinc-100">
          <span className="text-lg font-semibold text-zinc-700">
            Clique para enviar uma imagem
          </span>

          <span className="mt-2 text-sm text-zinc-500">
            JPG, PNG ou WEBP
          </span>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="hidden"
          />
        </label>

        <div className="flex h-32 items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-50">
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="h-full w-full rounded-3xl object-cover"
            />
          ) : (
            <span className="text-zinc-400">
              Pré-visualização
            </span>
          )}
        </div>
      </div>
    </>
  );
}