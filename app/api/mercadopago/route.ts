import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { createClient } from "@supabase/supabase-js";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const token =
      req.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    const {
      data: { user },
    } = await supabase.auth.getUser(token);

    if (!user?.email) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 401 }
      );
    }

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: [
          {
            id: "toolhub-pro",
            title: "ToolHub IA PRO",
            quantity: 1,
            currency_id: "BRL",
            unit_price: 19,
          },
        ],

        metadata: {
          user_email: user.email,
        },

        back_urls: {
          success: "https://www.toolhubia.com.br/profile",
          failure: "https://www.toolhubia.com.br/premium",
          pending: "https://www.toolhubia.com.br/premium",
        },

        auto_return: "approved",
      },
    });

    return NextResponse.json({
      init_point: response.init_point,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Erro ao criar pagamento" },
      { status: 500 }
    );
  }
}