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

  alert("EMAIL LOGADO: " + email);

  const { data } = await supabase.auth.getUser();
console.log(data.user?.email);


  console.log("EMAIL LOGADO:", email);

  const { data: subscriptions, error } = await supabase
  .from("subscriptions")
  .select("*")
  .eq("user_email", email)
  .eq("status", "approved")
  .eq("plan", "business");

  const subscription = subscriptions?.[0];

console.log("SUBSCRIPTIONS:", subscriptions);
console.log("ERRO:", error);

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