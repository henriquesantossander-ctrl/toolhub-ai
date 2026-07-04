"use client";

export default function BackgroundGallery() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <div
      className="absolute inset-0 bg-cover bg-center scale-100"
        style={{
          backgroundImage: "url('/backgrounds/studio-bg.png')",
        }}
      />

      {/* Escurece um pouco para destacar o conteúdo */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Glow branco no centro */}
      <div className="absolute inset-0 flex justify-center">
        <div className="h-full w-[650px] bg-white/45 blur-[170px]" />
      </div>

      {/* Vinheta */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55" />

    </div>
  );
}