import Link from "next/link";
import { Lock } from "lucide-react";

interface FeatureLockedProps {
  title: string;
  description: string;
}

export default function FeatureLocked({
  title,
  description,
}: FeatureLockedProps) {
  return (
    <section className="mx-auto mt-20 max-w-2xl rounded-[32px] border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-xl">

      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-violet-600/10">
        <Lock className="h-10 w-10 text-violet-500" />
      </div>

      <h2 className="text-3xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-4 text-zinc-400">
        {description}
      </p>

      <Link href="/premium">
        <button className="mt-8 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 px-8 py-4 font-semibold text-white transition hover:opacity-90">
          Fazer Upgrade
        </button>
      </Link>

    </section>
  );
}