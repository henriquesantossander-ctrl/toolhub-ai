"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function usePlan() {
  const [plan, setPlan] = useState("FREE");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPlan() {
      const { data } = await supabase.auth.getUser();
      

      if (!data.user) {
        setLoading(false);
        return;
      }

     const { data: sub, error } = await supabase
  .from("subscriptions")
  .select("*")
  .eq("user_email", data.user.email);

console.log("EMAIL:", data.user.email);
console.log("SUB:", sub);
console.log("ERROR:", error);

      const subscription = sub?.[0];

if (subscription?.plan) {
  setPlan(subscription.plan.toUpperCase());
}
      

      setLoading(false);
    }

    loadPlan();
  }, []);

  return {
    plan,
    loading,
  };
}