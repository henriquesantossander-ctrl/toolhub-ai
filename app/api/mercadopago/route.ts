import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

export async function POST() {
  try {
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