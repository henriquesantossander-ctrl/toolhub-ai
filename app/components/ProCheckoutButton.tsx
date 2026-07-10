"use client";

import { supabase } from "@/lib/supabase";

export default function ProCheckoutButton() {
  const handleCheckout = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.access_token) {
      window.location.href = "/login";
      return;
    }

    const response = await fetch("/api/mercadopago/pro", {
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
      className="w-full rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 py-4 font-semibold text-white transition hover:opacity-90"
    >
      Assinar PRO
    </button>
  );
}