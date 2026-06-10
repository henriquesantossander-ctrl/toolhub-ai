"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Header() {
  const [user, setUser] = useState<any>(null);
  const [plan, setPlan] = useState("FREE");

  useEffect(() => {
    async function loadUser() {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        setUser(data.user);

        const { data: sub } = await supabase
          .from("subscriptions")
          .select("plan")
          .eq("user_id", data.user.id)
          .single();

        if (sub?.plan) {
          setPlan(sub.plan.toUpperCase());
        }
      }
    }

    loadUser();
  }, []);

  const letter =
    user?.email?.charAt(0).toUpperCase() || "U";

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">

      <div className="max-w-[1400px] mx-auto px-8 h-[72px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-700 flex items-center justify-center font-black text-lg">
              ✦
            </div>

            <h1 className="text-[30px] font-black tracking-tight">
              ToolHub <span className="text-purple-500">IA</span>
            </h1>

          </div>
        </Link>

        {/* MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-400">

          <Link href="/" className="hover:text-white transition">
            Início
          </Link>

          <Link href="/premium" className="hover:text-white transition">
            Planos
          </Link>

        </nav>

        {/* USER */}
        <div className="flex items-center gap-3">

          {!user ? (
            <Link href="/login">
              <button className="h-11 px-7 rounded-2xl bg-white text-black font-semibold hover:opacity-90 transition">
                Login
              </button>
            </Link>
          ) : (
            <>
              <div className="h-11 px-5 rounded-full bg-white text-black flex items-center gap-2 font-semibold">

                <span className="text-purple-600">
                  ◆
                </span>

                <span>
                  {plan}
                </span>

              </div>

              <Link href="/profile">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-600 flex items-center justify-center font-black cursor-pointer">
                  {letter}
                </div>
              </Link>
            </>
          )}

        </div>

      </div>

    </header>
  );
}