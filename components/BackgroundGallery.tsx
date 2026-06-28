"use client";

export default function BackgroundGallery() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050509]" />

      <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="absolute top-40 -left-40 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="absolute bottom-0 -right-40 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
    </div>
  );
}