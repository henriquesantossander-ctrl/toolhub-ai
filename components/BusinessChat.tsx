"use client";

import { useState } from "react";
import { checkBusinessAccess } from "@/lib/checkBusinessAccess";

export default function BusinessChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { role: string; content: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const access = await checkBusinessAccess();

    if (!access.allowed) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const res = await fetch("/api/business-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          messages,
        }),
      });

      const data = await res.json();

      const aiMessage = {
        role: "assistant",
        content: data.result,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setMessage("");
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Erro ao processar sua mensagem.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-10">
      <h1 className="text-5xl font-bold mb-4 text-center">
        ToolHub IA Chat
      </h1>

      <p className="text-zinc-400 mb-8 text-center max-w-2xl">
        Converse com a IA avançada do ToolHub Business.
      </p>

      <div className="w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-3xl p-6 h-[600px] overflow-y-auto flex flex-col gap-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-4 rounded-2xl max-w-[80%] ${
              msg.role === "user"
                ? "bg-white text-black self-end"
                : "bg-zinc-800 text-white self-start"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="bg-zinc-800 text-white self-start p-4 rounded-2xl">
            Pensando...
          </div>
        )}
      </div>

      <div className="w-full max-w-3xl flex gap-4 mt-6">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
        />

        <button
          onClick={sendMessage}
          className="bg-white text-black px-8 rounded-2xl font-bold hover:scale-105 transition"
        >
          Enviar
        </button>
      </div>
    </main>
  );
}