"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Header() {
  const [user, setUser] = useState<any>(null);
  const [plan, setPlan] = useState("FREE");
  const [open, setOpen] = useState(false);

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

      <div className="max-w-[1400px] mx-auto px-8 h-12 flex items-center justify-between">
         {/* LOGO */}
<Link href="/">
  <div className="flex items-center gap-3 cursor-pointer">

    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-700 flex items-center justify-center font-black text-lg shadow-lg shadow-purple-500/20">
      ✦
    </div>

    <div>
      <h1 className="text-xl font-bold tracking-tight">
        ToolHub <span className="text-purple-500">IA</span>
      </h1>

      <p className="text-[10px] text-zinc-500">
        AI Creation Platform
      </p>
    </div>

  </div>
</Link>

{/* MENU */}
<nav className="hidden lg:flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-full p-1">

  <Link
    href="/"
    className="px-5 py-2 rounded-full hover:bg-white/5 transition text-zinc-400 hover:text-white"
  >
    Início
  </Link>

  <Link
    href="/premium"
    className="px-5 py-2 rounded-full hover:bg-white/5 transition text-zinc-400 hover:text-white"
  >
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
              <div className="h-11 px-5 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl flex items-center gap-2 font-semibold">

                <span className="text-purple-600">
                  ◆
                </span>

                <div className="flex flex-col leading-none">
  <span className="text-[10px] text-zinc-400">
    PLANO
  </span>

  <span className="text-white text-sm">
    {plan}
  </span>
</div>

              </div>

              <div className="relative">

                <button
                  onClick={() => setOpen(!open)}
                  className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl flex items-center justify-center font-black text-white"
                >
                  {letter}
                </button>

                {open && (
                  <div className="absolute right-0 mt-3 w-44 bg-[#111111] border border-white/10 rounded-2xl p-2 shadow-2xl">

                    <button
                      onClick={async () => {
                        await supabase.auth.signOut();
                        location.reload();
                      }}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 transition"
                    >
                      Sair
                    </button>

                  </div>
                )}

              </div>
            </>
          )}

        </div>

      </div>

    </header>
  );
}