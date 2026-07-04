export type Plan = "FREE" | "PRO" | "BUSINESS";

export function normalizePlan(plan?: string | null): Plan {
  const value = plan?.toUpperCase();

  if (value === "PRO") return "PRO";
  if (value === "BUSINESS") return "BUSINESS";

  return "FREE";
}

export function canUseImageGenerator(plan?: string | null) {
  return true;
}

export function canUsePhotoEditor(plan?: string | null) {
  const currentPlan = normalizePlan(plan);
  return currentPlan === "PRO" || currentPlan === "BUSINESS";
}

export function canUseVideoAI(plan?: string | null) {
  const currentPlan = normalizePlan(plan);
  return currentPlan === "BUSINESS";
}

export function canUseVideoHistory(plan?: string | null) {
  const currentPlan = normalizePlan(plan);
  return currentPlan === "BUSINESS";
}

export function canUseVideoScript(plan?: string | null) {
  return true;
}