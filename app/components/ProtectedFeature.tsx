"use client";

import usePlan from "@/app/components/hooks/usePlan";
import FeatureLocked from "./FeatureLocked";
import { canUseVideoAI } from "@/lib/permissions";

interface Props {
  feature: "video" | "photo-editor" | "video-script";
  children: React.ReactNode;
}

export default function ProtectedFeature({
  feature,
  children,
}: Props) {
  const { plan, loading } = usePlan();
  console.log("PLANO:", plan);

  if (loading) {
    return null;
  }

  if (feature === "video" && !canUseVideoAI(plan)) {
  return (
    <FeatureLocked
      title="Vídeo IA"
      description="Este recurso está disponível apenas para usuários BUSINESS."
    />
  );
}
if (feature === "photo-editor" && plan === "FREE") {
  return (
    <FeatureLocked
      title="Editor de Fotos"
      description="Este recurso está disponível apenas para usuários PRO ou BUSINESS."
    />
  );
}
 if (feature === "video-script" && plan === "FREE") {
  return (
    <FeatureLocked
      title="Gerador de Roteiro"
      description="Este recurso está disponível apenas para usuários PRO ou BUSINESS."
    />
  );
}
   

  return <>{children}</>;
}