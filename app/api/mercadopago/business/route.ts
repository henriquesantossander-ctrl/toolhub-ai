import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { createClient } from "@supabase/supabase-js";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.replace("Bearer ", "");

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
            id: "toolhub-business",
            title: "ToolHub IA BUSINESS",
            quantity: 1,
            currency_id: "BRL",
            unit_price: 150,
          },
        ],

        metadata: {
          user_email: user.email,
          plan: "business",
        },

        back_urls: {
          success: "https://www.toolhubia.com.br/profile",
          failure: "https://www.toolhubia.com.br/business",
          pending: "https://www.toolhubia.com.br/business",
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
      { error: "Erro ao criar pagamento Business" },
      { status: 500 }
    );
  }
}