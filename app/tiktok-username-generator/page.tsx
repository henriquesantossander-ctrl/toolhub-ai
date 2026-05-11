"use client";

import { useState } from "react";

export default function TikTokUsernameGenerator() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  

  const generateUsername = async () => {
    setLoading(true);
  const response = await fetch("/api/tiktok-username", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: name,
    }),
  });

  const data = await response.json();

  setUsername(data.result);
  setLoading(false);
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
  disabled={loading}
  className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition disabled:opacity-50"
>
  {loading ? (
  <div className="flex items-center gap-3">
    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
    Gerando com IA...
  </div>
) : (
  "Gerar Username"
)}
</button>

      {username && (
        <div className="bg-zinc-900 border border-zinc-800 mt-12 p-8 rounded-3xl max-w-xl w-full text-center">
          <div className="grid gap-3">
  {username.split("\n").map((user, index) => (
    <button
      key={index}
      onClick={() => {
        navigator.clipboard.writeText(user);
        alert("Username copiado!");
      }}
      className="bg-zinc-800 border border-zinc-700 rounded-2xl py-3 px-4 text-center text-2xl font-bold hover:scale-105 hover:border-pink-500 hover:bg-zinc-700 transition"
    >
      {user}
    </button>
  ))}
</div>

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