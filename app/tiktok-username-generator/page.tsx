"use client";

import { useState } from "react";

export default function TikTokUsernameGenerator() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const generateUsername = () => {
    const base = name.trim() || "user";

    const styles = [
      `@${base}vibes`,
      `@real${base}`,
      `@${base}fx`,
      `@its${base}`,
      `@${base}clips`,
      `@${base}zone`,
      `@${base}daily`,
      `@the${base}`,
    ];

    setUsername(styles[Math.floor(Math.random() * styles.length)]);
  };

  const copyUsername = async () => {
    await navigator.clipboard.writeText(username);
    alert("Username copiado!");
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      <h1 className="text-5xl font-bold mb-4 text-center">
        Gerador de Nome para TikTok
      </h1>

      <p className="text-zinc-400 mb-10 text-center max-w-xl">
        Crie usernames estilosos para TikTok, Instagram e redes sociais.
      </p>

      <input
        type="text"
        placeholder="Digite seu nome ou palavra base"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 w-full max-w-xl mb-6 outline-none"
      />

      <button
        onClick={generateUsername}
        className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
      >
        Gerar Username
      </button>

      {username && (
        <div className="bg-zinc-900 border border-zinc-800 mt-12 p-8 rounded-3xl max-w-xl w-full text-center">
          <p className="text-3xl font-bold text-zinc-200">{username}</p>

          <button
            onClick={copyUsername}
            className="mt-6 w-full bg-white text-black py-3 rounded-2xl font-bold hover:scale-105 transition"
          >
            Copiar Username
          </button>
        </div>
      )}
    </main>
  );
}