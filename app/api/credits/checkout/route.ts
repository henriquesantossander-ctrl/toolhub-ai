
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
    const { credits, price } = await req.json();

    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        { error: "Não autorizado" },
        { status: 401 }
      );
    }

    const token = authHeader.replace("Bearer ", "");



const result = await supabase.auth.getUser(token);



const user = result.data.user;


   


    if (!user?.email) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 401 }
      );
    }

    const preference = new Preference(client);

    
    const response = await preference.create({
      body: {
        external_reference: `credits:${credits}:${user.email}`,

        items: [
          {
            id: `credits-${credits}`,
            title: `${credits} Créditos ToolHub IA`,
            quantity: 1,
            currency_id: "BRL",
            unit_price: price,
          },
        ],

        metadata: {
  user_email: user.email,
},

        back_urls: {
          success: "https://www.toolhubia.com.br/credits",
          failure: "https://www.toolhubia.com.br/credits",
          pending: "https://www.toolhubia.com.br/credits",
        },

        auto_return: "approved",

       //  notification_url:
      //  "https://www.toolhubia.com.br/api/mercadopago/webhook",
      },
    });

    return NextResponse.json({
      init_point: response.init_point,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Erro ao criar pagamento." },
      { status: 500 }
    );
  }
}