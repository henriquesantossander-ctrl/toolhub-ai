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

      const { data: sub } = await supabase
  .from("subscriptions")
  .select("plan")
  .eq("user_email", data.user.email)
  .single();


      if (sub?.plan) {
        setPlan(sub.plan.toUpperCase());
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