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

    if (paymentData.status !== "approved") {
      return NextResponse.json({ ok: true });
    }

    const userEmail =
      paymentData.metadata?.user_email || "";

    const plan =
      paymentData.metadata?.plan || "pro";

    if (!userEmail) {
      return NextResponse.json({
        error: "email not found",
      });
    }

    await supabase.from("subscriptions").upsert(
      {
        user_email: userEmail,
        plan: plan,
        status: "approved",
        payment_id: String(paymentId),
      },
      {
        onConflict: "user_email",
      }
    );

    await supabase
  .from("video_credits")
  .upsert(
    {
      user_id: null,
      credits: 10,
    }
  );

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