export async function POST() {
  try {
    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            title: "ToolHub IA PRO",
            quantity: 1,
            currency_id: "BRL",
            unit_price: 19.90
          },
        ],
        back_urls: {
          success: "https://www.toolhubia.com.br/profile",
          failure: "https://www.toolhubia.com.br/premium",
          pending: "https://www.toolhubia.com.br/premium",
        },
        auto_return: "approved",
      }),
    });

    const data = await response.json();

    return Response.json({
      url: data.init_point,
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      error: "Erro ao criar checkout.",
    });
  }
}