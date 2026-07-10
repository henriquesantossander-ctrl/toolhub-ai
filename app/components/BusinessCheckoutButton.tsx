"use client";

import { supabase } from "@/lib/supabase";

export default function BusinessCheckoutButton() {
  const handleCheckout = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    console.log("EMAIL DA SESSÃO:", session?.user.email);

    if (!session?.access_token) {
      window.location.href = "/login";
      return;
    }

    const response = await fetch("/api/mercadopago/business", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });

    const data = await response.json();

    if (data.init_point) {
      window.location.href = data.init_point;
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black text-lg transition hover:scale-105"
    >
      Assinar Business por R$49 🚀
    </button>
  );
}