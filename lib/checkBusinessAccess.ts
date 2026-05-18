import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";

export async function checkBusinessAccess() {
  const { data: userData } = await supabase.auth.getUser();

  if (!userData.user?.email) {
    toast.error("Faça login para acessar o Business.");
    window.location.href = "/login";

    return {
      allowed: false,
    };
  }

  const email = userData.user.email;

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_email", email)
    .eq("status", "approved")
    .eq("plan", "business")
    .maybeSingle();

  if (!subscription) {
    toast.error("🚀 Recurso exclusivo do plano Business.");
    window.location.href = "/premium";

    return {
      allowed: false,
    };
  }

  return {
    allowed: true,
    email,
  };
}