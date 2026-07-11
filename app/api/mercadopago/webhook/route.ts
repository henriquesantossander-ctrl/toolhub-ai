import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { createClient } from "@supabase/supabase-js";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

const payment = new Payment(client);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    console.log("WEBHOOK CHAMADO");

    const { searchParams } = new URL(req.url);

const type = searchParams.get("type");
const paymentId = searchParams.get("data.id");

console.log("TYPE:", type);
console.log("PAYMENT ID:", paymentId);

if (type !== "payment" || !paymentId) {
  return NextResponse.json({ received: true });
}

    const paymentData = await payment.get({
      id: Number(paymentId),
    });

    console.log("PAYMENT DATA:", paymentData);

    if (paymentData.status !== "approved") {

      console.log("STATUS:", paymentData.status);
      return NextResponse.json({ ok: true });
    }

    const userEmail =
      paymentData.metadata?.user_email || "";

       const external =
  paymentData.external_reference || "";

const isCredits =
  external.startsWith("credits:");

let credits = 0;

if (isCredits) {
  credits = Number(
    external.split(":")[1]
  );
}

     

  const plan =
  paymentData.metadata?.plan || "pro";
      const { data: profile } = await supabase.auth.admin.listUsers();

      const user = profile.users.find(
        (u) => u.email === userEmail
      );

     console.log("USER FOUND:", user?.id);

    if (!userEmail) {
      return NextResponse.json({
        error: "email not found",
      });
    }

    if (isCredits) {
  console.log("COMPRA DE CRÉDITOS");

    const { data: current, error: currentError } = await supabase
  .from("video_credits")
  .select("credits")
  .eq("user_id", user?.id)
  .maybeSingle();

console.log("CURRENT:", current);
console.log("CURRENT ERROR:", currentError);
console.log("CREDITS COMPRADOS:", credits);

  const currentCredits =
    Number(current?.credits || 0);

    const { data: creditData, error: creditError } =
  await supabase
    .from("video_credits")
    .upsert(
      {
        user_id: user?.id,
        credits: currentCredits + credits,
      },
      {
        onConflict: "user_id",
      }
    )
    .select();

console.log("CREDIT DATA:", creditData);
console.log("CREDIT ERROR:", creditError);

  return NextResponse.json({
    success: true,
  });
}
  
     
    const { data, error } = await supabase
  .from("subscriptions")
 .upsert(
  {
    user_email: userEmail,
    user_id: user?.id || null,
    plan: plan,
    status: "approved",
    payment_id: String(paymentId),
  },
    {
      onConflict: "user_email",
    }
  )
  .select();

console.log("UPSERT DATA:", data);
console.log("UPSERT ERROR:", error);
    

  console.log("CREDITS COMPRADOS:", credits);

   

    return NextResponse.json({
      success: true,
      plan,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json({
      error: true,
    });
  }
}