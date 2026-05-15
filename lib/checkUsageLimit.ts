import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";

export async function checkUsageLimit() {
  const { data: userData } = await supabase.auth.getUser();

  if (!userData.user?.email) {
    toast.error("Faça login para continuar");
    window.location.href = "/login";

    return {
      allowed: false,
    };
  }

  const email = userData.user.email;

  const today = new Date().toISOString().split("T")[0];

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_email", email)
    .eq("status", "approved")
    .maybeSingle();

  const isPro = !!subscription;

  let { data: usage } = await supabase
    .from("usage_limits")
    .select("*")
    .eq("user_email", email)
    .maybeSingle();

  if (!usage) {
    const { data: newUsage } = await supabase
      .from("usage_limits")
      .insert({
        user_email: email,
        used_count: 0,
        last_reset: today,
      })
      .select()
      .single();

    usage = newUsage;
  }

  if (usage && usage.last_reset !== today) {
    const { data: resetUsage } = await supabase
      .from("usage_limits")
      .update({
        used_count: 0,
        last_reset: today,
      })
      .eq("user_email", email)
      .select()
      .single();

    usage = resetUsage;
  }

  const currentCount = usage?.used_count || 0;

  if (!isPro && currentCount >= 5) {
    toast.error("🚀 Você atingiu o limite gratuito.");
    window.location.href = "/premium";

    return {
      allowed: false,
    };
  }

  return {
    allowed: true,
    email,
    isPro,
    currentCount,
  };
}

export async function increaseUsage(email: string, currentCount: number) {
  const newCount = currentCount + 1;

  await supabase
    .from("usage_limits")
    .update({
      used_count: newCount,
    })
    .eq("user_email", email);

  return newCount;
}