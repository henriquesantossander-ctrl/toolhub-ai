export default function CinematicExamples() {
  const examples = [
    {
      title: "Cyberpunk",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Filme Hollywood",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Anime",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="mt-24 w-full max-w-6xl">
      <h2 className="text-4xl font-bold text-center mb-12">
        Exemplos Cinematic AI 🎬
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {examples.map((item) => (
          <div
            key={item.title}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}