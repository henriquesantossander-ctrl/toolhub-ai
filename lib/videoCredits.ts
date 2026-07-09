import { supabase } from "@/lib/supabase";

export async function getVideoCredits(userId: string) {
  const { data, error } = await supabase
    .from("video_credits")
    .select("credits")
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error(error);
    return 0;
  }

  return Number(data?.credits || 0);
}

export async function decreaseVideoCredits(
  userId: string,
  amount: number
) {
  const credits = await getVideoCredits(userId);

  const { error } = await supabase
    .from("video_credits")
    .update({
      credits: credits - amount,
    })
    .eq("user_id", userId);

  if (error) {
    console.error(error);
  }
}